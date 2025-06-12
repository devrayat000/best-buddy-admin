import * as admin from "firebase-admin";
import fs from "node:fs";
import { Context } from ".keystone/types";

let serviceAccount: admin.ServiceAccount | string;

if (process.env.NODE_ENV === "production") {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH;
  if (!serviceAccountPath) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY_PATH environment variable is not set in production"
    );
  }
  // In production, read the service account key file from the specified path
  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(
      `Service account key file not found at ${serviceAccountPath}`
    );
  }
  serviceAccount = serviceAccountPath;
} else {
  // In development, use the service account key file
  serviceAccount = require("../serviceAccount.json") as admin.ServiceAccount;
}

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // You can also use a service account key file:
    // credential: admin.credential.cert(require('./path/to/serviceAccountKey.json')),
  });
}

export interface NotificationData {
  type: "notice" | "class_test";
  id: string;
  title: string;
  body: string;
  data?: Record<string, string>;
}

export default async function pushNotification(
  tokens: string[],
  notificationData: NotificationData
) {
  if (tokens.length === 0) {
    console.log("No FCM tokens provided for notification");
    return [];
  }

  const message: admin.messaging.MulticastMessage = {
    tokens: tokens,
    notification: {
      title: notificationData.title,
      body: notificationData.body,
    },
    data: {
      type: notificationData.type,
      id: notificationData.id,
      ...notificationData.data,
    },
    android: {
      notification: {
        icon: "ic_notification",
        color: "#1976D2",
        channelId: getChannelId(notificationData.type),
      },
      priority: "normal",
    },
    apns: {
      payload: {
        aps: {
          sound: "default",
          badge: 1,
        },
      },
    },
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);

    console.log(`Successfully sent ${response.successCount} notifications`);
    if (response.failureCount > 0) {
      console.log(`Failed to send ${response.failureCount} notifications`);
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          console.error(`Failed to send to token ${tokens[idx]}:`, resp.error);
        }
      });
    }

    return response.responses.map((resp) => resp.messageId).filter(Boolean);
  } catch (error) {
    console.error("Error sending push notifications:", error);
    throw error;
  }
}

function getChannelId(type: NotificationData["type"]): string {
  switch (type) {
    case "notice":
      return "notices";
    case "class_test":
      return "class_tests";
    default:
      return "default";
  }
}

/**
 * Extract plain text from rich text document
 */
function extractPlainText(document: any): string {
  if (!document) return "";

  // If document is a JSON string, parse it first
  if (typeof document === "string") {
    try {
      const parsed = JSON.parse(document);
      return extractPlainText(parsed);
    } catch {
      // If it's not valid JSON, treat it as plain text
      return document;
    }
  }

  if (Array.isArray(document)) {
    return document
      .map((block) => extractPlainText(block))
      .join(" ")
      .trim();
  }

  if (typeof document === "object") {
    // Handle content with 'document' property (from rich text editor)
    if (document.document) {
      return extractPlainText(document.document);
    }

    // Handle text nodes
    if (document.text) {
      return document.text;
    }

    // Handle blocks with children
    if (document.children && Array.isArray(document.children)) {
      return document.children
        .map((child: any) => extractPlainText(child))
        .join("")
        .trim();
    }
  }

  return "";
}

/**
 * Send notification when a new notice is created
 */
export async function sendNoticeNotification(context: Context, notice: any) {
  try {
    // Get all FCM tokens
    const tokens = await context.db.FcmToken.findMany();

    const fcmTokens = tokens.map((token: any) => token.token);

    if (fcmTokens.length === 0) {
      console.log("No FCM tokens found for notice notification");
      return;
    }

    // Extract plain text from rich content for notification body
    const notificationBody = extractPlainText(notice.content);

    await pushNotification(fcmTokens, {
      type: "notice",
      id: notice.id,
      title: notice.title,
      body: notificationBody || "New notice available",
      data: {
        id: notice.id,
        title: notice.title,
      },
    });

    console.log(`Notice notification sent to ${fcmTokens.length} devices`);
  } catch (error) {
    console.error("Error sending notice notification:", error);
  }
}

/**
 * Send notification when a new class test is scheduled
 */
export async function sendClassTestNotification(
  context: Context,
  classTest: any
) {
  try {
    // Get all FCM tokens
    const tokens = await context.db.FcmToken.findMany();

    const fcmTokens = tokens.map((token: any) => token.token);

    if (fcmTokens.length === 0) {
      console.log("No FCM tokens found for class test notification");
      return;
    }

    const testDate = new Date(classTest.datetime).toLocaleDateString();

    // Extract plain text from rich content for notification body
    const notificationBody = extractPlainText(classTest.content);

    await pushNotification(fcmTokens, {
      type: "class_test",
      id: classTest.id,
      title: "New Class Test Scheduled",
      body: notificationBody,
      data: {
        id: classTest.id,
        title: classTest.title,
        datetime: classTest.datetime,
      },
    });

    console.log(`Class test notification sent to ${fcmTokens.length} devices`);
  } catch (error) {
    console.error("Error sending class test notification:", error);
  }
}

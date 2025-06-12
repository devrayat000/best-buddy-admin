// Welcome to some authentication for Keystone
//
// This is using @keystone-6/auth to add the following
// - A sign-in page for your Admin UI
// - A cookie-based stateless session strategy
//    - Using a User email as the identifier
//    - 30 day cookie expiration
//
// This file does not configure what Users can do, and the default for this starter
// project is to allow anyone - logged-in or not - to do anything.
//
// If you want to prevent random people on the internet from accessing your data,
// you can find out how by reading https://keystonejs.com/docs/guides/auth-and-access-control
//
// If you want to learn more about how our out-of-the-box authentication works, please
// read https://keystonejs.com/docs/apis/auth#authentication-api

import { randomBytes } from "crypto";
import { createAuth, AuthSession as IAuthSession } from "@keystone-6/auth";
import { getContext } from "@keystone-6/core/context";

// see https://keystonejs.com/docs/apis/session for the session docs
import { statelessSessions, storedSessions } from "@keystone-6/core/session";

// for a stateless session, a SESSION_SECRET should always be provided
//   especially in production (statelessSessions will throw if SESSION_SECRET is undefined)
let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret =
    "5b3273b8b03b1460e8173b370b4a120588bb2220e7d4322a8cad799fd78685b8";
}

// withAuth is a function we can use to wrap our base configuration
const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "id email role",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    itemData: {
      role: "admin",
    },
    skipKeystoneWelcome: true,
  },
});

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 30;

export type Session = {
  id: string;
  email: string;
  role: "admin" | "CR" | "user";
};

export type AuthSession = IAuthSession & {
  data: Session;
};

// const sessionStorage = new Map<string, Session>();

import path from "node:path";
import fs from "node:fs/promises";

// you can find out more at https://keystonejs.com/docs/apis/session#session-api
const session = storedSessions<Session>({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
  cookieName: "buddy.sid",
  sameSite: "none",
  secure: true,
  store: ({ maxAge }) => {
    return {
      async get(key) {
        const filePath = path.join(__filename, "..", "sessions", key);
        try {
          const data = await fs.readFile(filePath, "utf-8");
          const session = JSON.parse(data);
          if (session.expires < Date.now()) {
            await fs.unlink(filePath);
            return undefined;
          }
          return session;
        } catch (err) {
          // @ts-ignore
          if (err.code === "ENOENT") {
            return undefined;
          }
          throw err;
        }
      },
      async set(key, value) {
        const filePath = path.join(__filename, "..", "sessions", key);
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        const session = {
          ...value,
          expires: Date.now() + maxAge * 1000,
        };
        await fs.writeFile(filePath, JSON.stringify(session), "utf-8");
      },
      async delete(key) {
        const filePath = path.join(__filename, "..", "sessions", key);
        try {
          await fs.unlink(filePath);
        } catch (err) {
          // @ts-ignore
          if (err.code === "ENOENT") {
            return;
          }
          throw err;
        }
      },
    };
  },
});

export { withAuth, session };

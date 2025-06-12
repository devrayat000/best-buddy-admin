// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { graphql, list } from "@keystone-6/core";
import { allowAll, denyAll } from "@keystone-6/core/access";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  virtual,
} from "@keystone-6/core/fields";

// the document field is a more complicated field, so it has it's own package
import { document } from "@keystone-6/fields-document";
import { Node } from "slate";
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from ".keystone/types";
import { AuthSession } from "./auth";
import {
  allowAdmin,
  allowAuthenticated,
  allowAuthorized,
} from "./utils/access";
import pushNotification, {
  sendNoticeNotification,
  sendClassTestNotification,
} from "./utils/push-notification";
import serialize from "./utils/serialize";

export const lists: Lists<AuthSession> = {
  User: list({
    access: {
      operation: {
        create: allowAll,
        delete: allowAuthenticated,
        update: allowAuthenticated,
        query: allowAuthenticated,
      },
      filter: {
        query: allowAuthenticated,
        update: ({ session }) => {
          const userId = session?.data.id;
          if (!userId) {
            return false;
          }
          return { id: { equals: userId } };
        },
        delete: ({ session }) => {
          const userId = session?.data.id;
          if (!userId) {
            return false;
          }
          return { id: { equals: userId } };
        },
      },
    },
    ui: {
      isHidden: (props) => !allowAdmin(props),
    },

    // this is the fields for our User list
    fields: {
      name: text({
        validation: { isRequired: true },
        db: { isNullable: false },
        graphql: {
          isNonNull: { create: true, read: true },
          omit: { update: true },
        },
      }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        db: { isNullable: false },
        graphql: {
          isNonNull: { create: true, read: true },
          omit: { update: true },
        },
      }),

      password: password({
        validation: { isRequired: true },
        graphql: {
          isNonNull: { create: true, update: true },
          omit: { read: false },
        },
      }),
      notices: relationship({
        ref: "Notice.createdBy",
        many: true,
        ui: {
          createView: { fieldMode: "hidden" },
          hideCreate: true,
          inlineConnect: false,
          itemView: { fieldMode: "hidden" },
          linkToItem: false,
        },
      }),
      classTests: relationship({
        ref: "ClassTest.createdBy",
        many: true,
        ui: {
          createView: { fieldMode: "hidden" },
          hideCreate: true,
          inlineConnect: false,
          itemView: { fieldMode: "hidden" },
          linkToItem: false,
        },
      }),
      tokens: relationship({
        ref: "FcmToken.user",
        many: true,
        ui: {
          createView: { fieldMode: "hidden" },
          hideCreate: true,
          inlineConnect: false,
          itemView: { fieldMode: "read" },
          linkToItem: false,
          listView: { fieldMode: "read" },
        },
      }),

      role: select({
        options: [
          { label: "Admin", value: "admin" },
          { label: "Class Representative", value: "CR" },
          { label: "User", value: "user" },
        ],
        type: "enum",
      }),

      createdAt: timestamp({
        defaultValue: { kind: "now" },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
      updatedAt: timestamp({
        db: { updatedAt: true },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
    },
  }),

  FcmToken: list({
    access: {
      operation: {
        query: allowAdmin,
        create: allowAuthenticated,
        delete: allowAuthenticated,
        update: allowAuthenticated,
      },
      filter: {
        query: allowAdmin,
        update: ({ session }) => {
          const userId = session?.data.id;
          if (!userId) {
            return false;
          }
          return { user: { id: { equals: userId } } };
        },
        delete: ({ session }) => {
          const userId = session?.data.id;
          if (!userId) {
            return false;
          }
          return { user: { id: { equals: userId } } };
        },
      },
      item: {
        create: allowAuthenticated,
        update: allowAuthenticated,
        delete: allowAuthenticated,
      },
    },
    db: {
      idField: { kind: "cuid" },
    },
    fields: {
      token: text({
        validation: { isRequired: true },
        db: { isNullable: false },
        isIndexed: "unique",
      }),
      deviceType: select({
        options: [
          { label: "iOS", value: "ios" },
          { label: "Android", value: "android" },
        ],
        type: "enum",
        defaultValue: "android",
      }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
      updatedAt: timestamp({
        db: { updatedAt: true },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
      user: relationship({
        ref: "User.tokens",
        many: false,
        db: { foreignKey: true },
      }),
    },
    ui: {
      createView: { defaultFieldMode: "hidden" },
      hideCreate: true,
      hideDelete: true,
      isHidden: true,
      itemView: { defaultFieldMode: "hidden" },
    },
  }),

  Notice: list({
    access: {
      operation: {
        create: allowAuthorized,
        delete: allowAuthorized,
        update: allowAuthorized,
        query: allowAuthenticated,
      },
      // item: { create: denyAll },
      filter: {
        query: allowAuthenticated,
      },
    },
    hooks: {
      async afterOperation({ item, context, operation, originalItem }) {
        if (operation === "create") {
          const notice = item ?? originalItem;
          try {
            const createdBy = await context.db.User.findOne({
              where: { id: notice.createdById },
            });

            const noticeData = {
              id: notice.id,
              title: notice.title,
              content: notice.content,
              createdByName: createdBy?.name,
              createdByRole: createdBy?.role,
              createdAt: notice.createdAt?.toISOString(),
              updatedAt: notice.updatedAt?.toISOString(),
            };
            // Send push notification using the new notification service
            await sendNoticeNotification(context, noticeData);
          } catch (error) {
            console.error("Failed to send notice notification:", error);
            // Don't throw here to avoid breaking the operation
          }
        }
      },
    },
    ui: {
      labelField: "title",
      hideDelete: async ({ context, session }) => {
        if (!allowAuthorized({ session })) return true;

        if (allowAdmin({ session })) return false;

        console.log("hideDelete", { context, session });

        return false;
      },
      listView: {
        initialColumns: ["title", "content", "createdBy", "createdAt"],
        initialSort: {
          field: "createdAt",
          direction: "DESC",
        },
      },
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
        relationships: {
          creator: {
            label: "Mention",
            listKey: "User",
            selection: "id name",
          },
        },
      }),
      contentSummary: virtual({
        field: graphql.field({
          type: graphql.nonNull(graphql.String),
          args: {
            length: graphql.arg({
              type: graphql.Int,
            }),
          },
          resolve(item, { length }) {
            const plainText = serialize(item.content);
            return plainText.substring(0, length ?? undefined);
          },
        }),
      }),
      createdBy: relationship({
        ref: "User.notices",
        ui: {
          hideCreate: true,
          linkToItem: false,
          removeMode: "none",
          inlineConnect: false,
          createView: { fieldMode: "hidden" },
          // inlineCreate: false,
          // inlineEdit: false,
          itemView: { fieldMode: "read" },
        },
        many: false,
        hooks: {
          resolveInput({ resolvedData, context, operation }) {
            if (operation === "create") {
              return {
                connect: {
                  id: context.session?.data.id,
                },
              };
            }
            return { ...resolvedData };
          },
        },
      }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
      updatedAt: timestamp({
        db: { updatedAt: true },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
    },
  }),

  ClassTest: list({
    access: {
      operation: {
        create: allowAuthorized,
        delete: allowAuthorized,
        update: allowAuthorized,
        query: allowAuthenticated,
      },
      // item: { create: denyAll },
      filter: {
        query: allowAuthenticated,
      },
    },
    hooks: {
      async afterOperation({ item, context, operation, listKey }) {
        if (operation === "create") {
          try {
            console.log("Creating class test notification for:", item);
            // Send push notification using the new notification service
            await sendClassTestNotification(context, item);
          } catch (error) {
            console.error("Failed to send class test notification:", error);
            // Don't throw here to avoid breaking the operation
          }
        }
      },
    },
    ui: {
      labelField: "title",
      hideDelete: async ({ context, session }) => {
        if (!allowAuthorized({ session })) return true;

        if (allowAdmin({ session })) return false;

        console.log("hideDelete", { context, session });

        return false;
      },
      listView: {
        initialColumns: ["title", "content", "createdBy", "createdAt"],
        initialSort: {
          field: "createdAt",
          direction: "DESC",
        },
      },
    },
    fields: {
      title: text({
        validation: { isRequired: true },
        db: { isNullable: false },
        graphql: {
          isNonNull: { read: true, create: true },
        },
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
        graphql: {
          isNonNull: { read: true, create: true },
        },
      }),
      contentSummary: virtual({
        field: graphql.field({
          type: graphql.nonNull(graphql.String),
          args: {
            length: graphql.arg({
              type: graphql.Int,
            }),
          },
          resolve(item, { length }) {
            const nodes = JSON.parse(item.content) as Node[];
            const plainText = nodes.map((n) => Node.string(n)).join("\n");
            return plainText.substring(0, length ?? undefined);
          },
        }),
      }),
      datetime: timestamp({
        validation: { isRequired: true },
        db: { isNullable: false },
        graphql: {
          isNonNull: { read: true, create: true },
        },
      }),
      createdBy: relationship({
        ref: "User.classTests",
        ui: {
          hideCreate: true,
          linkToItem: false,
          removeMode: "none",
          inlineConnect: false,
          createView: { fieldMode: "hidden" },
          // inlineCreate: false,
          // inlineEdit: false,
          itemView: { fieldMode: "read" },
        },
        many: false,
        hooks: {
          resolveInput({ resolvedData, context, operation }) {
            if (operation === "create") {
              return {
                connect: {
                  id: context.session?.data.id,
                },
              };
            }
            return { ...resolvedData };
          },
        },
      }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
      updatedAt: timestamp({
        db: { updatedAt: true },
        ui: {
          createView: { fieldMode: "hidden" },
          itemView: { fieldMode: "read" },
        },
      }),
    },
  }),
};

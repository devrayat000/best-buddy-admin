import { graphql } from "@keystone-6/core";
import type { Context } from ".keystone/types";
import type { AuthSession } from "./auth";

export const extendGraphqlSchema = graphql.extend((base) => ({
  mutation: {
    refreshSession: graphql.field({
      type: graphql.nonNull(graphql.String),
      async resolve(source, _, context: Context<AuthSession>) {
        const sessionData = context.session;
        if (!sessionData) {
          throw new Error("No session data found");
        }

        const newSessionToken = await context.sessionStrategy?.start({
          context: context,
          data: sessionData,
        });

        return newSessionToken as string;
      },
    }),

    updateProfile: graphql.field({
      type: base.object("User"),
      args: {
        data: graphql.arg({
          type: graphql.nonNull(base.inputObject("UserUpdateInput")),
        }),
      },
      async resolve(source, { data }, context: Context<AuthSession>) {
        const sessionData = context.session;
        if (!sessionData) {
          throw new Error("No session data found");
        }
        const updatedUser = await context.db.User.updateOne({
          // @ts-ignore
          data,
          where: { id: sessionData.data.id },
        });
        return updatedUser;
      },
    }),

    uploadFcmToken: graphql.field({
      type: base.object("FcmToken"),
      args: {
        data: graphql.arg({
          type: graphql.nonNull(
            graphql.inputObject({
              name: "FcmTokenUploadInput",
              fields: {
                token: graphql.arg({ type: graphql.nonNull(graphql.String) }),
                deviceType: graphql.arg({
                  type: graphql.enum({
                    name: "DeviceType",
                    values: graphql.enumValues(["ios", "android"]),
                  }),
                  defaultValue: "android",
                }),
              },
            })
          ),
        }),
      },
      resolve: async (root, { data }, context: Context<AuthSession>) => {
        const userId = context.session?.data.id;
        console.log(context.session?.data);

        if (!userId) {
          throw new Error("User not authenticated");
        } // Check if token already exists for this user
        const existingTokens = await context.db.FcmToken.findMany({
          where: {
            AND: [
              { token: { equals: data.token } },
              { user: { id: { equals: userId } } },
            ],
          },
        });
        if (existingTokens.length > 0) {
          // Update existing token
          return await context.db.FcmToken.updateOne({
            where: { id: existingTokens[0].id },
            data: {
              deviceType: data.deviceType,
            },
          });
        }

        // Create new token
        return await context.db.FcmToken.createOne({
          data: {
            token: data.token,
            deviceType: data.deviceType,
            user: { connect: { id: userId } },
          },
        });
      },
    }),
  },
}));

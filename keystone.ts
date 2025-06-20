// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config
import "dotenv/config";

import { config } from "@keystone-6/core";
// to keep this file tidy, we define our schema in a different file
import { lists } from "./schema";
import { extendGraphqlSchema } from "./graphql-extensions";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";
import { allowAuthorized } from "./utils/access";

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    "No DATABASE_URL environment variable found. Using SQLite for development. " +
      "You should set DATABASE_URL to a Postgres database URL in production."
  );
}

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "postgresql",
      url: databaseUrl,
      idField: { kind: "cuid" },
      enableLogging: true,
    },
    lists,
    session,
    graphql: {
      extendGraphqlSchema,
      apolloConfig: { allowBatchedHttpRequests: true },
    },
    ui: {
      isAccessAllowed: allowAuthorized,
      publicPages: ["/terms", "/privacy"],
    },
    server: {
      extendExpressApp(app, context) {
        // add health check endpoint
        app.get("/healthz", (req, res) => {
          res.status(200).json({ status: "ok" });
        });
      },
    },
  })
);

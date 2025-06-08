import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {
  admin as adminPlugin,
  apiKey,
  openAPI,
  organization
} from "better-auth/plugins";

import { db } from "@/db";
import * as schema from "@repo/database/schemas";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    // facebook: {
    // },
  },
  plugins: [
    adminPlugin(),
    openAPI(),
    apiKey(),
    organization({
      allowUserToCreateOrganization() {
        // TODO: In future, Allow permissions based on user's subscription
        return true;
      }
    })
  ]
});

export type Session = typeof auth.$Infer.Session;

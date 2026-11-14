// Sign-in with Google (Better Auth). No passwords: nothing to hash, so it fits the free plan's
// 10 ms CPU limit. The D1 binding exists only inside a request, so the instance is made per request.

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { nodeProgress, schema } from "../db/schema.ts";
import type { Env } from "./env.ts";

/** How long a reader stays signed in without visiting; each visit (at most once a day) extends it. */
export const SESSION_DAYS = 30;

export function database(env: Env) {
  return drizzle(env.DB, { schema });
}

export function createAuth(env: Env) {
  const db = database(env);
  return betterAuth({
    appName: "Programmer's Bible",
    baseURL: env.BETTER_AUTH_URL,
    basePath: "/api/auth",
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, { provider: "sqlite", schema }),
    // The site is also served on www; a sign-in started there comes back to the main address.
    trustedOrigins: ["https://programmersbible.com", "https://www.programmersbible.com"],
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        // Let readers with several Google accounts choose one.
        prompt: "select_account",
      },
    },
    session: {
      expiresIn: 60 * 60 * 24 * SESSION_DAYS,
      updateAge: 60 * 60 * 24,
    },
    account: {
      // The site uses Google only to know who you are: it never calls Google for you, so it does
      // not keep Google's tokens (see the account hooks below).
      updateAccountOnSignIn: false,
    },
    user: {
      deleteUser: {
        enabled: true,
        // Reading progress also goes when the user row is deleted (ON DELETE CASCADE); this makes
        // sure of it even if foreign keys were ever switched off.
        beforeDelete: async (user) => {
          await db.delete(nodeProgress).where(eq(nodeProgress.userId, user.id));
        },
      },
    },
    databaseHooks: {
      // Keep only what the site needs: no IP address or browser name with the session,
      session: {
        create: { before: async (s) => ({ data: { ...s, ipAddress: null, userAgent: null } }) },
      },
      // and no Google tokens with the account.
      account: {
        create: {
          before: async (a) => ({
            data: {
              ...a,
              accessToken: null,
              refreshToken: null,
              idToken: null,
              accessTokenExpiresAt: null,
              refreshTokenExpiresAt: null,
            },
          }),
        },
      },
    },
    // A sign-in that fails (for example, an expired or reused link from Google) comes back to the
    // site's own sign-in page, which says so, instead of a bare error page.
    onAPIError: { errorURL: "/signin" },
    telemetry: { enabled: false },
  });
}

export type Auth = ReturnType<typeof createAuth>;

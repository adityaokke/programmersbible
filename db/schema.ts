// The database (Cloudflare D1, SQLite), described with Drizzle.
//
// The first four tables belong to Better Auth (sign-in with Google); their columns follow Better
// Auth's core schema. The last one is ours: what each signed-in reader has read.
//
// After changing this file: npx drizzle-kit generate   (writes a new file in db/migrations/)
// then apply it:            npx wrangler d1 migrations apply programmersbible --local   (or --remote)

import { sql } from "drizzle-orm";
import { index, integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Times are stored as milliseconds since 1970 (Better Auth's own choice for SQLite).
const now = sql`(cast(unixepoch('subsecond') * 1000 as integer))`;
const timestamp = (name: string) => integer(name, { mode: "timestamp_ms" });

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().default(now),
  updatedAt: timestamp("updated_at").notNull().default(now),
});

export const session = sqliteTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull().default(now),
    updatedAt: timestamp("updated_at").notNull().default(now),
    // Better Auth has these columns; this site keeps them empty (see api/auth.ts).
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (t) => [index("session_user_id_idx").on(t.userId)],
);

export const account = sqliteTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    // Google's tokens: this site does not use them, so they are not kept (see api/auth.ts).
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull().default(now),
    updatedAt: timestamp("updated_at").notNull().default(now),
  },
  (t) => [index("account_user_id_idx").on(t.userId)],
);

// Short-lived values Better Auth needs during the sign-in step (for example the OAuth state).
export const verification = sqliteTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").notNull().default(now),
    updatedAt: timestamp("updated_at").notNull().default(now),
  },
  (t) => [index("verification_identifier_idx").on(t.identifier)],
);

export const PROGRESS_STATUSES = ["visited", "read"] as const;

// One row per reader and topic. "visited": the reader opened it; "read": they marked it as read.
// last_heading is the id of the last section heading they reached, for "Continue from …".
// The reader's last topic is their row with the newest updated_at (the index makes that cheap).
export const nodeProgress = sqliteTable(
  "node_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    nodeId: text("node_id").notNull(),
    status: text("status", { enum: PROGRESS_STATUSES }).notNull().default("visited"),
    lastHeading: text("last_heading"),
    updatedAt: timestamp("updated_at").notNull().default(now),
  },
  (t) => [primaryKey({ columns: [t.userId, t.nodeId] }), index("node_progress_user_updated_idx").on(t.userId, t.updatedAt)],
);

export const schema = { user, session, account, verification, nodeProgress };

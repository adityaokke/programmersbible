// Settings of signed-in readers. Every route needs a session and answers 401 without one.
//
//   PUT /api/preferences   { language: "JavaScript" | "Python" | "Go" | null }   (null forgets it)
//
// The saved settings come back with GET /api/progress (as "preferences"), so a page asks only once.

import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { LANGUAGES, userPreference } from "../db/schema.ts";
import { database } from "./auth.ts";
import type { Env } from "./env.ts";
import { fromOtherSite, readObject, requireSession, type Signed } from "./session.ts";

export type Preferences = { language: (typeof LANGUAGES)[number] | null };

/** The reader's settings; a reader who never saved one has none. */
export async function preferencesOf(env: Env, userId: string): Promise<Preferences> {
  // If the preferences table is not there yet (deployed before its migration ran), progress still
  // loads: the reader simply has no saved language.
  try {
    const [row] = await database(env)
      .select({ language: userPreference.preferredLanguage })
      .from(userPreference)
      .where(eq(userPreference.userId, userId));
    return { language: row?.language ?? null };
  } catch (err) {
    console.error(err);
    return { language: null };
  }
}

export const preferences = new Hono<Signed>();

preferences.use("*", requireSession);

preferences.put("/", async (c) => {
  if (fromOtherSite(c)) return c.json({ error: "Wrong origin" }, 403);
  const read = await readObject(c);
  if ("error" in read) return read.error;
  const { language } = read.body;
  if (language !== null && !LANGUAGES.includes(language as never)) return c.json({ error: "Bad language" }, 400);

  const value = language as Preferences["language"];
  const now = new Date();
  await database(c.env)
    .insert(userPreference)
    .values({ userId: c.get("userId"), preferredLanguage: value, updatedAt: now })
    .onConflictDoUpdate({ target: userPreference.userId, set: { preferredLanguage: value, updatedAt: now } });
  return c.json({ language: value });
});

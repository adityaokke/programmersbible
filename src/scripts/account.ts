// Accounts and reading progress in the browser. Everything here is an extra: pages are complete
// without it. Readers who are not signed in send no request (there is no "signed in" cookie), and
// any failure leaves the page as it was, with nothing logged.

export type Status = "visited" | "read";
export type Progress = {
  user: { name: string; email: string; image: string | null };
  lastTopic: string | null;
  nodes: Record<string, { status: Status; lastHeading: string | null }>;
};

/** Set by the Worker next to the session cookie (api/cookies.ts). Holds only "1". */
export const signedInHere = () => document.cookie.split("; ").includes("pb_signed_in=1");

let loading: Promise<Progress | null> | undefined;

/** The signed-in reader's progress, or null when signed out or when the API cannot be reached. */
export function loadProgress(): Promise<Progress | null> {
  loading ??= !signedInHere()
    ? Promise.resolve(null)
    : fetch("/api/progress", { credentials: "same-origin", headers: { Accept: "application/json" } })
        .then((r) => (r.ok ? (r.json() as Promise<Progress>) : null))
        .catch(() => null);
  return loading;
}

/** Save progress for one topic. keepalive lets the request finish while the page is closing. */
export function saveProgress(nodeId: string, change: { status?: Status; lastHeading?: string | null }, keepalive = false) {
  return fetch(`/api/progress/${encodeURIComponent(nodeId)}`, {
    method: "PUT",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(change),
    keepalive,
  })
    .then((r) => r.ok)
    .catch(() => false);
}

/** Topic ids and titles of the readable topics (built with the site: /topics.json). */
export function loadTopics(): Promise<Record<string, string>> {
  return fetch("/topics.json")
    .then((r) => (r.ok ? (r.json() as Promise<Record<string, string>>) : {}))
    .catch(() => ({}));
}

/** The first word of a name, for the header ("Ada Lovelace" → "Ada"). */
export const firstName = (name: string) => name.trim().split(/\s+/)[0] || "Account";

/** Only a path on this site ("/node/dns"), never another website, after signing in. */
export function safeReturnPath(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return "/";
  return value;
}

/** Start the Google sign-in. Better Auth answers with Google's address; the browser goes there. */
export async function signInWithGoogle(returnTo: string): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/sign-in/social", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: "google",
        callbackURL: safeReturnPath(returnTo),
        errorCallbackURL: "/signin?error=google",
      }),
    });
    const data = (await res.json()) as { url?: string };
    if (!res.ok || !data.url) return false;
    location.href = data.url;
    return true;
  } catch {
    return false;
  }
}

/** Show ✓ on every element marked data-node="<id>" whose topic the reader has read. */
export function markReadTopics(progress: Progress, root: ParentNode = document) {
  for (const el of root.querySelectorAll<HTMLElement>("[data-node]")) {
    if (progress.nodes[el.dataset.node!]?.status !== "read" || el.classList.contains("is-read")) continue;
    el.classList.add("is-read");
    // The ✓ is drawn by CSS beside the item, so nothing moves; screen readers hear "read".
    const note = document.createElement("span");
    note.className = "visually-hidden";
    note.textContent = " (read)";
    (el.querySelector("a") ?? el).append(note);
  }
}

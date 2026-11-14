// The topics a reader can open, by id, with their titles. Used only for signed-in readers: the
// Worker accepts progress only for these ids, and the home and account pages show their titles.
import { isReadable, nodes } from "../lib/content.ts";

export function GET() {
  const topics = Object.fromEntries(nodes.filter(isReadable).map((n) => [n.id, n.title]));
  return new Response(JSON.stringify(topics), { headers: { "Content-Type": "application/json" } });
}

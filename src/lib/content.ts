// Build-time access to the knowledge graph for the site.
// Uses the same loader and schema as `npm run validate`.

import { Marked } from "marked";
import { loadNodes, loadPaths, type Issue, type LoadedNode } from "../../scripts/lib/content.ts";
import type { NodeFrontmatter, PathFile } from "../../schema/node.ts";

// Drafts are visible in `astro dev` and in preview builds (SHOW_DRAFTS=true).
// Production only shows published nodes.
export const SHOW_DRAFTS = import.meta.env.DEV || process.env.SHOW_DRAFTS === "true";

const issues: Issue[] = [];
const loaded = loadNodes(issues);
const paths = loadPaths(issues);

if (issues.some((i) => i.level === "error")) {
  throw new Error('Content has errors. Run "npm run validate" for details.');
}

export type Node = NodeFrontmatter & { body: string };

export const nodes: Node[] = loaded.map((n: LoadedNode) => ({ ...n.data, body: n.body }));
export const nodeById = new Map(nodes.map((n) => [n.id, n]));
export const allPaths: PathFile[] = paths.map((p) => p.data);

/** A node's page shows its content only when it is published, or drafts are shown. */
export function isReadable(node: Node): boolean {
  if (node.status === "planned") return false;
  return node.status === "published" || SHOW_DRAFTS;
}

export function leadsTo(id: string): Node[] {
  return nodes.filter((n) => n.requires.includes(id));
}

export function byIds(ids: string[]): Node[] {
  return ids.map((id) => nodeById.get(id)).filter((n): n is Node => !!n);
}

/** Where a node sits in a path, with its neighbours. */
export function pathPosition(id: string) {
  for (const path of allPaths) {
    const order = path.sections.flatMap((s) => s.nodes);
    const index = order.indexOf(id);
    if (index === -1) continue;
    const section = path.sections.find((s) => s.nodes.includes(id))!;
    return {
      path,
      section,
      index,
      total: order.length,
      prev: index > 0 ? nodeById.get(order[index - 1]!) : undefined,
      next: index < order.length - 1 ? nodeById.get(order[index + 1]!) : undefined,
    };
  }
  return undefined;
}

export const nodeUrl = (id: string) => `/node/${id}`;

const marked = new Marked({ gfm: true });

// [[node-id]] or [[node-id|label]] → link to the node, labelled with its title by default.
function resolveWikiLinks(markdown: string): string {
  return markdown.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, rawId: string, label?: string) => {
    const id = rawId.trim();
    const text = label?.trim() || nodeById.get(id)?.title || id;
    return `[${text}](${nodeUrl(id)})`;
  });
}

export function renderBody(node: Node): string {
  return marked.parse(resolveWikiLinks(node.body), { async: false });
}

/** Small search index embedded in the page: titles, aliases and questions. */
export function searchIndex() {
  return nodes.map((n) => ({
    id: n.id,
    title: n.title,
    summary: isReadable(n) ? (n.summary ?? "") : "",
    part: n.part,
    readable: isReadable(n),
    terms: [n.title, ...n.aliases, ...n.questions].join(" ").toLowerCase(),
  }));
}

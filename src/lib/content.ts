// Build-time access to the knowledge graph for the site.
// Uses the same loader and schema as `npm run validate`.

import { Marked } from "marked";
import { createMermaidRenderer } from "mermaid-isomorphic";
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

// Mermaid diagrams are drawn into SVG at build time, so readers download no diagram code.
// Each diagram is drawn twice, for light and dark mode; CSS shows the one that matches.
const renderMermaid = createMermaidRenderer();
const DIAGRAM_THEMES = { light: "neutral", dark: "dark" } as const;

// [[node-id]] or [[node-id|label]] → link to the node, labelled with its title by default.
function resolveWikiLinks(markdown: string): string {
  return markdown.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, rawId: string, label?: string) => {
    const id = rawId.trim();
    const text = label?.trim() || nodeById.get(id)?.title || id;
    return `[${text}](${nodeUrl(id)})`;
  });
}

// Width of the margin on each side of a labelled picture, in % of the callout box.
const CALLOUT_MARGIN = 16;

const escapeHtml = (text: string) =>
  text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function renderBody(node: Node): Promise<string> {
  const diagrams: string[] = [];
  const credits = new Map(node.images.map((image) => [image.file, image]));

  const marked = new Marked({
    gfm: true,
    renderer: {
      code({ text, lang }) {
        if (lang !== "mermaid") return false;
        diagrams.push(text);
        return `<!--diagram-${diagrams.length - 1}-->`;
      },
      // ![alt](images/<file>) → the node's own picture, with its credit (CC BY needs one).
      image({ href, text }) {
        if (!href.startsWith("images/")) return false;
        const file = href.slice("images/".length);
        const credit = credits.get(file);
        const caption = credit
          ? `<figcaption>Image: <a href="${escapeHtml(credit.source)}">${escapeHtml(credit.author)}</a>, ${escapeHtml(credit.license)}</figcaption>`
          : "";
        const img = `<img src="/images/${node.id}/${file}" alt="${escapeHtml(text)}" loading="lazy" />`;
        const labels = credit?.labels ?? [];
        if (!labels.length) return `<figure class="picture">${img}${caption}</figure>`;

        // Callouts: labels sit in a margin beside the picture, with a line to a dot on the part,
        // so nothing covers the photo. Positions are in % of the whole callout box.
        const M = CALLOUT_MARGIN;
        const toBox = (x: number) => M + (x * (100 - 2 * M)) / 100;
        const parts = labels.map((l) => {
          const side = l.side ?? (l.x < 50 ? "left" : "right");
          const y = l.ly ?? l.y;
          return { ...l, side, px: toBox(l.x), lx: side === "left" ? M - 1 : 100 - M + 1, labelY: y };
        });
        const lines = parts
          // A white halo under a dark line keeps it visible on light and dark photos.
          .map((p) => [`halo`, `ink`].map((c) => `<line class="${c}" x1="${p.lx}" y1="${p.labelY}" x2="${p.px}" y2="${p.y}" />`).join(""))
          .join("");
        const dots = parts.map((p) => `<span class="dot" style="left:${p.px}%;top:${p.y}%"></span>`).join("");
        const names = parts
          .map((p) => `<span class="callout ${p.side}" style="${p.side === "left" ? `right:${100 - p.lx}%` : `left:${p.lx}%`};top:${p.labelY}%">${escapeHtml(p.text)}</span>`)
          .join("");
        return `<figure class="picture"><span class="callouts" style="--m:${M}%">${img}<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${dots}${names}</span>${caption}</figure>`;
      },
    },
  });

  let html = marked.parse(resolveWikiLinks(node.body), { async: false });
  if (!diagrams.length) return html;

  const [light, dark] = await Promise.all(
    (["light", "dark"] as const).map((mode) =>
      renderMermaid(diagrams, { prefix: `${node.id}-${mode}`, mermaidConfig: { theme: DIAGRAM_THEMES[mode] } }),
    ),
  );
  html = html.replace(/<!--diagram-(\d+)-->/g, (_, i: string) => {
    const [l, d] = [light![Number(i)]!, dark![Number(i)]!];
    if (l.status === "rejected") throw new Error(`${node.id}: mermaid diagram ${i} failed: ${l.reason}`);
    if (d.status === "rejected") throw new Error(`${node.id}: mermaid diagram ${i} failed: ${d.reason}`);
    return `<figure class="diagram"><div class="diagram-light">${l.value.svg}</div><div class="diagram-dark" aria-hidden="true">${d.value.svg}</div></figure>`;
  });
  return html;
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

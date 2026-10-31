// Build-time access to the knowledge graph for the site.
// Uses the same loader and schema as `npm run validate`.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";
import { Marked } from "marked";
import { createMermaidRenderer } from "mermaid-isomorphic";
import { IMAGES_DIR, loadNodes, loadPaths, type Issue, type LoadedNode } from "../../scripts/lib/content.ts";
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

// Smallest width of the margin on each side of a labelled picture, in % of the callout box.
const CALLOUT_MARGIN = 14;
// The gap between an arrow's tip and the part it points at, in pixels at a typical figure width.
const CALLOUT_GAP = 8;
const CALLOUT_REF_WIDTH = 650;

type Label = NodeFrontmatter["images"][number]["labels"][number];

// Callouts: labels sit in a margin beside the picture, with an arrow to the part,
// so nothing covers the photo. Positions are in % of the whole callout box.
// `aspect` is the picture's width divided by its height, used to aim the arrowheads.
function withCallouts(inner: string, labels: Label[], aspect: number): string {
  if (!labels.length) return inner;
  // The margin grows with the longest label, so names like "Germanium" fit on a phone too.
  const longest = Math.max(...labels.map((l) => l.text.length));
  const M = Math.min(28, Math.max(CALLOUT_MARGIN, Math.round(longest * 2.1)));
  const boxAspect = aspect / (1 - (2 * M) / 100); // the box is wider than the picture by the margins
  const toBox = (x: number) => M + (x * (100 - 2 * M)) / 100;
  const parts = labels.map((l) => {
    const side = l.side ?? (l.x < 50 ? "left" : "right");
    const lx = side === "left" ? M - 1 : 100 - M + 1;
    const labelY = l.ly ?? l.y;
    const px = toBox(l.x);
    // Stop the arrow a few pixels before the part, so the arrowhead does not hide it.
    // Lengths are estimated at a typical figure width; the gap scales with the screen.
    const width = CALLOUT_REF_WIDTH;
    const length = Math.hypot(((px - lx) * width) / 100, ((l.y - labelY) * width) / boxAspect / 100);
    const t = length > 0 ? Math.max(0, 1 - CALLOUT_GAP / length) : 1;
    return { ...l, side, lx, labelY, px, ex: lx + (px - lx) * t, ey: labelY + (l.y - labelY) * t };
  });
  const lines = parts
    // A white halo under a dark line keeps it visible on light and dark photos.
    .map((p) => ["halo", "ink"].map((c) => `<line class="${c}" x1="${p.lx}" y1="${p.labelY}" x2="${p.ex}" y2="${p.ey}" />`).join(""))
    .join("");
  // An arrowhead at the part, turned to follow its line (angles measured in real proportions).
  const arrows = parts
    .map((p) => {
      const angle = (Math.atan2(p.y - p.labelY, (p.px - p.lx) * boxAspect) * 180) / Math.PI;
      return `<span class="arrow" style="left:${p.ex}%;top:${p.ey}%;transform:rotate(${angle.toFixed(1)}deg)"><svg viewBox="0 0 14 12"><path d="M0 0 L14 6 L0 12 Z" /></svg></span>`;
    })
    .join("");
  const names = parts
    .map((p) => `<span class="callout ${p.side}" style="${p.side === "left" ? `right:${100 - p.lx}%` : `left:${p.lx}%`};top:${p.labelY}%">${escapeHtml(p.text)}</span>`)
    .join("");
  return `<span class="callouts" style="--m:${M}%">${inner}<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${arrows}${names}</span>`;
}

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
        const src = `/images/${node.id}/${file}`;
        const img = `<img src="${src}" alt="${escapeHtml(text)}" loading="lazy" />`;
        const zoom = credit?.zoom;
        const box = zoom
          ? `<span class="zoom-box" style="left:${zoom.x}%;top:${zoom.y}%;width:${zoom.w}%;height:${zoom.h}%" aria-hidden="true"></span>`
          : "";
        const { width = 1, height = 1 } = imageSize(readFileSync(join(IMAGES_DIR, node.id, file)));
        const main = withCallouts(`<span class="photo">${img}${box}</span>`, credit?.labels ?? [], width / height);
        if (!zoom) return `<figure class="picture">${main}${caption}</figure>`;

        // The close-up is the same file, enlarged and shifted inside a window with the
        // rectangle's shape, so it needs no extra image and stays in the same style.
        const scale = 100 / zoom.w;
        const closeImg = `<img src="${src}" alt="" loading="lazy" style="width:${scale * 100}%;left:${-zoom.x * scale}%;top:${(-zoom.y * 100) / zoom.h}%" />`;
        const close = withCallouts(
          `<span class="photo closeup" style="aspect-ratio:${width * zoom.w}/${height * zoom.h}">${closeImg}</span>`,
          zoom.labels,
          (width * zoom.w) / (height * zoom.h),
        );
        return `<figure class="picture zoomed"><span class="picture-row"><span class="picture-main">${main}</span><span class="picture-zoom">${close}<span class="zoom-caption">${escapeHtml(zoom.text)}</span></span></span>${caption}</figure>`;
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
    // The natural width lets small screens shrink a diagram only so far, then scroll instead.
    return `<figure class="diagram" style="--w:${Math.round(l.value.width)}"><div class="diagram-light">${l.value.svg}</div><div class="diagram-dark" aria-hidden="true">${d.value.svg}</div></figure>`;
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

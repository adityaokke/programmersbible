// Validates all content and writes generated/graph.json.
//   npm run validate      → check only (CI)
//   npm run build:graph   → check, then write generated/graph.json
// Exits with code 1 if there is any error.

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { imageSize } from "image-size";
import { MAX_BYTES, MAX_WIDTH, MAX_WIDTH_ZOOM } from "./lib/images.ts";
import { join } from "node:path";
import { BANNED_WORDS, REQUIRED_HEADINGS, WORD_RANGE } from "../schema/node.ts";
import {
  IMAGES_DIR,
  ROOT,
  headings,
  imageRefs,
  mermaidBlocks,
  loadNodes,
  loadPaths,
  stripCode,
  wikiLinks,
  type Issue,
  type LoadedNode,
} from "./lib/content.ts";

const checkOnly = process.argv.includes("--check");
const issues: Issue[] = [];
const nodes = loadNodes(issues);
const paths = loadPaths(issues);
const byId = new Map(nodes.map((n) => [n.data.id, n]));

// --- References -------------------------------------------------------------

const EDGE_FIELDS = ["requires", "part_of", "related", "led_to"] as const;

for (const node of nodes) {
  for (const field of EDGE_FIELDS) {
    for (const target of node.data[field]) {
      if (!byId.has(target)) {
        issues.push({ level: "error", file: node.file, message: `${field}: unknown node "${target}"` });
      }
    }
  }
  for (const target of wikiLinks(node.body)) {
    if (!byId.has(target)) {
      issues.push({ level: "error", file: node.file, message: `[[${target}]]: unknown node` });
    } else if (node.data.status === "published" && byId.get(target)!.data.status !== "published") {
      issues.push({ level: "warning", file: node.file, message: `[[${target}]] links to an unpublished node` });
    }
  }
}

// --- requires must not form a cycle -----------------------------------------

const visiting = new Set<string>();
const done = new Set<string>();

function visit(id: string, trail: string[]) {
  if (done.has(id)) return;
  if (visiting.has(id)) {
    const cycle = [...trail.slice(trail.indexOf(id)), id].join(" → ");
    issues.push({ level: "error", file: byId.get(id)!.file, message: `requires cycle: ${cycle}` });
    return;
  }
  visiting.add(id);
  for (const dep of byId.get(id)?.data.requires ?? []) {
    if (byId.has(dep)) visit(dep, [...trail, id]);
  }
  visiting.delete(id);
  done.add(id);
}

for (const id of byId.keys()) visit(id, []);

// --- Writing rules (only for nodes that have been written) ------------------

const STRICT = new Set(["review", "published"]);

function countWords(body: string): number {
  // The Sources section is a list of references, not reading time.
  const text = stripCode(body).split(/^##\s+.*Sources\s*$/m)[0] ?? "";
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

function checkWriting(node: LoadedNode) {
  const { status, type } = node.data;
  if (status === "planned") return;
  const level = STRICT.has(status) ? "error" : "warning";
  const text = stripCode(node.body);

  for (const word of BANNED_WORDS) {
    const re = new RegExp(`\\b${word.replace(" ", "\\s+")}\\b`, "gi");
    const hits = text.match(re)?.length ?? 0;
    if (hits) issues.push({ level, file: node.file, message: `banned word "${word}" used ${hits}×` });
  }

  const found = headings(node.body).map((h) => h.toLowerCase());
  for (const heading of REQUIRED_HEADINGS[type]) {
    if (!found.some((h) => h.includes(heading.toLowerCase()))) {
      issues.push({ level, file: node.file, message: `missing section "## ${heading}"` });
    }
  }

  if (type !== "hub") {
    const words = countWords(node.body);
    if (words < WORD_RANGE.min || words > WORD_RANGE.max) {
      issues.push({
        level: "warning",
        file: node.file,
        message: `${words} words (target ${WORD_RANGE.min}–${WORD_RANGE.max})`,
      });
    }
  }
}

nodes.forEach(checkWriting);

// --- Pictures and diagrams ----------------------------------------------------

function checkMedia(node: LoadedNode) {
  const { id, images } = node.data;
  const dir = join(IMAGES_DIR, id);
  const listed = new Set(images.map((i) => i.file));
  const used = new Set(imageRefs(node.body));

  // Every picture in the text has its credit in the frontmatter, and the file exists.
  for (const file of used) {
    if (!listed.has(file)) {
      issues.push({ level: "error", file: node.file, message: `images/${file} is used but not listed in images (source, author, license)` });
    }
  }
  for (const file of listed) {
    const path = join(dir, file);
    if (!existsSync(path)) {
      issues.push({ level: "error", file: node.file, message: `images: content/images/${id}/${file} does not exist` });
      continue;
    }
    // Pictures must load fast on slow phone connections.
    const limit = images.find((i) => i.file === file)?.zoom ? MAX_WIDTH_ZOOM : MAX_WIDTH;
    const { width = 0 } = file.endsWith(".svg") ? {} : imageSize(readFileSync(path));
    if (width > limit || statSync(path).size > MAX_BYTES) {
      issues.push({ level: "warning", file: node.file, message: `images: ${file} is ${width}px / ${Math.round(statSync(path).size / 1024)} KB; run npm run optimize-images` });
    }
    if (!used.has(file)) {
      issues.push({ level: "warning", file: node.file, message: `images: ${file} is listed but not used in the text` });
    }
  }
  if (existsSync(dir)) {
    for (const file of readdirSync(dir)) {
      if (!listed.has(file)) {
        issues.push({ level: "warning", file: node.file, message: `content/images/${id}/${file} is not listed in images` });
      }
    }
  }

  // Diagrams are read by screen readers through their title and description.
  for (const block of mermaidBlocks(node.body)) {
    if (!/^\s*accTitle:/m.test(block) || !/^\s*accDescr:/m.test(block)) {
      issues.push({ level: "error", file: node.file, message: "mermaid diagram needs accTitle: and accDescr: (its alt text)" });
    }
  }
}

nodes.forEach(checkMedia);

// --- Paths -------------------------------------------------------------------

for (const path of paths) {
  const order = path.data.sections.flatMap((s) => s.nodes);
  const position = new Map<string, number>();
  order.forEach((id, i) => {
    if (position.has(id)) {
      issues.push({ level: "error", file: path.file, message: `"${id}" appears twice` });
    }
    position.set(id, i);
    if (!byId.has(id)) issues.push({ level: "error", file: path.file, message: `unknown node "${id}"` });
  });

  // A path may only use a node after everything it requires (when the
  // requirement is also on the path).
  for (const [id, i] of position) {
    for (const dep of byId.get(id)?.data.requires ?? []) {
      const j = position.get(dep);
      if (j !== undefined && j > i) {
        issues.push({ level: "error", file: path.file, message: `"${id}" comes before its requirement "${dep}"` });
      }
    }
  }
}

// --- Report ------------------------------------------------------------------

const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");

for (const issue of [...errors, ...warnings]) {
  const tag = issue.level === "error" ? "✖ error  " : "⚠ warning";
  console.log(`${tag} ${issue.file}  ${issue.message}`);
}

console.log(
  `\n${nodes.length} nodes, ${paths.length} paths · ${errors.length} errors, ${warnings.length} warnings`,
);

if (errors.length) process.exit(1);

// --- Output ------------------------------------------------------------------

if (!checkOnly) {
  const leadsTo = new Map<string, string[]>();
  for (const node of nodes) {
    for (const dep of node.data.requires) {
      leadsTo.set(dep, [...(leadsTo.get(dep) ?? []), node.data.id]);
    }
  }

  const graph = {
    nodes: nodes.map(({ data }) => ({
      id: data.id,
      title: data.title,
      type: data.type,
      part: data.part,
      status: data.status,
      summary: data.summary ?? null,
      year: data.year ?? null,
      era_label: data.era_label ?? null,
      read_minutes: data.read_minutes ?? null,
      questions: data.questions,
      aliases: data.aliases,
      leads_to: leadsTo.get(data.id) ?? [],
    })),
    edges: nodes.flatMap(({ data }) =>
      EDGE_FIELDS.flatMap((type) => data[type].map((to) => ({ from: data.id, to, type }))),
    ),
    paths: paths.map(({ data }) => data),
  };

  const outDir = join(ROOT, "generated");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "graph.json"), JSON.stringify(graph, null, 2) + "\n");
  console.log("Wrote generated/graph.json");
}

// Progress dashboard: how far each path is, in path order.
//   npm run status

import { loadNodes, loadPaths, type Issue } from "./lib/content.ts";
import { AI_REVIEWER, STATUSES, type NodeFrontmatter } from "../schema/node.ts";

const issues: Issue[] = [];
const nodes = new Map(loadNodes(issues).map((n) => [n.data.id, n.data]));
const paths = loadPaths(issues);

if (issues.length) {
  console.log(`${issues.length} validation issues; run "npm run validate" for details.\n`);
}

const ICON = { planned: "·", draft: "✎", review: "◐", published: "✓" } as const;
const AI_ICON = "✓ᵃⁱ"; // published, reviewed by AI only

const aiReviewed = (node: NodeFrontmatter | undefined) =>
  node?.status === "published" && node.reviewed_by === AI_REVIEWER;
const icon = (node: NodeFrontmatter) => (aiReviewed(node) ? AI_ICON : ICON[node.status]);

function tally(ids: string[]): string {
  const counts = Object.fromEntries(STATUSES.map((s) => [s, 0])) as Record<(typeof STATUSES)[number], number>;
  for (const id of ids) {
    const status = nodes.get(id)?.status;
    if (status) counts[status]++;
  }
  const ai = ids.filter((id) => aiReviewed(nodes.get(id))).length;
  return STATUSES.map((s) => `${counts[s]} ${s}${s === "published" && ai ? ` (${ai} by AI only)` : ""}`).join(" · ");
}

for (const { data: path } of paths) {
  const all = path.sections.flatMap((s) => s.nodes);
  console.log(`${path.title}\n${tally(all)}\n`);
  for (const section of path.sections) {
    console.log(`  ${section.title}  (${tally(section.nodes)})`);
    for (const id of section.nodes) {
      const node = nodes.get(id);
      console.log(`    ${node ? icon(node) : "?"} ${id}${node ? `  ${node.title}` : "  (missing)"}`);
    }
    console.log();
  }
}

console.log(`Legend: ${STATUSES.map((s) => `${ICON[s]} ${s}`).join("  ")}  ${AI_ICON} published, reviewed by AI only`);

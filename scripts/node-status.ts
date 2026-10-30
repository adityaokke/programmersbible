// Progress dashboard: how far each path is, in path order.
//   npm run status

import { loadNodes, loadPaths, type Issue } from "./lib/content.ts";
import { STATUSES } from "../schema/node.ts";

const issues: Issue[] = [];
const nodes = new Map(loadNodes(issues).map((n) => [n.data.id, n.data]));
const paths = loadPaths(issues);

if (issues.length) {
  console.log(`${issues.length} validation issues; run "npm run validate" for details.\n`);
}

const ICON = { planned: "·", draft: "✎", review: "◐", published: "✓" } as const;

function tally(ids: string[]): string {
  const counts = Object.fromEntries(STATUSES.map((s) => [s, 0])) as Record<(typeof STATUSES)[number], number>;
  for (const id of ids) {
    const status = nodes.get(id)?.status;
    if (status) counts[status]++;
  }
  return STATUSES.map((s) => `${counts[s]} ${s}`).join(" · ");
}

for (const { data: path } of paths) {
  const all = path.sections.flatMap((s) => s.nodes);
  console.log(`${path.title}\n${tally(all)}\n`);
  for (const section of path.sections) {
    console.log(`  ${section.title}  (${tally(section.nodes)})`);
    for (const id of section.nodes) {
      const node = nodes.get(id);
      console.log(`    ${node ? ICON[node.status] : "?"} ${id}${node ? `  ${node.title}` : "  (missing)"}`);
    }
    console.log();
  }
}

console.log(`Legend: ${STATUSES.map((s) => `${ICON[s]} ${s}`).join("  ")}`);

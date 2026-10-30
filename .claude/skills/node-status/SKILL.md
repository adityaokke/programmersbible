---
name: node-status
description: Show Programmer's Bible content progress (planned / draft / review / published per path and section) and suggest the next nodes to write. Use when the user asks about progress, status, or what to write next.
---

# Node status

1. Run `npm run status` and `npm run validate`.
2. Report briefly:
   - Totals per path and per section.
   - Nodes in `review` (waiting for the human reviewer) and any open content PRs (`gh pr list --search "content:"`).
   - Validation errors, if any.
3. Suggest the **next 3–5 nodes to write**: the first `planned` nodes in path order whose `requires` are all at least `draft`. Present them as a ready command, e.g. `/write-node byte data-size-units text-as-numbers`.

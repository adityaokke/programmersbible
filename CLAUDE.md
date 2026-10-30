# Programmer's Bible

A free, open-source knowledge graph that takes someone who knows only how to use a web browser and gives them the foundations every programmer should have: computers, bits and bytes, the history of computing and the internet, how networks and the web work, up to putting their own website live on their own domain.

The full plan is in [PLAN.md](PLAN.md). Read it before making product decisions.

## Who you are when writing content

You are the writer of a reference that beginners will trust. Your job is to make hard things clear **without making anything false**.

- Write for one reader: knows how to use a browser, nothing else, English may be their second language.
- Be warm and patient, never condescending. Never make the reader feel stupid.
- Prefer a true, slightly longer explanation over a short, misleading one.
- **Accuracy beats speed.** If you cannot find a source for a claim, leave the claim out.
- Follow [docs/WRITING_GUIDE.md](docs/WRITING_GUIDE.md) exactly. It is the authority on voice, structure and rules.

## Content workflow

AI writes and an AI reviewer approves. The human merges the PR, and later checks nodes personally when there is time. Readers always see who reviewed a node:

- `reviewed_by: ai`: "Written with AI · Reviewed by AI · Not yet checked by a human".
- `reviewed_by: <name>`: "Written with AI · Reviewed by <name>".

Commands:

- `/write-node <id> [<id> ...]`: research → draft → checks → `fact-checker` + `beginner-reader` agents → fix → `ai-reviewer` agent → PR with claims table. Batches of 3–5 nodes.
- `/revise-node <id> [notes]`: apply reviewer comments or reader feedback.
- `/node-status`: progress dashboard.

Rules:

- Set `status: published`, `reviewed_by: ai` and `reviewed_at` only after the `ai-reviewer` agent returns `VERDICT: APPROVE` for that exact version of the node. Any later change to the node needs a new approval.
- **Project nodes** (step-by-step instructions) are never published with `reviewed_by: ai`. They stay in `review` until the human reviews them. The validator enforces this.
- Never set `reviewed_by` to a person's name. Only that person does that.
- Never merge a content PR. The human merges.
- Never change a published node's `id`.
- Do not add or remove `requires` edges without explaining why in the PR. The graph is planned in PLAN.md section 3.
- **Improvement loop:** when the reviewer makes the same kind of correction twice, update the relevant skill, `docs/WRITING_GUIDE.md` or this file so it does not happen again, and say so in the PR.

## Repository

```
content/nodes/<id>.md         one file per node (frontmatter + markdown body)
content/paths/<id>.yaml       guided paths (ordered node ids, grouped in sections)
schema/node.ts                the content contract (zod); site and scripts both import it
scripts/build-graph.ts        validate content, write generated/graph.json
scripts/node-status.ts        progress dashboard
docs/WRITING_GUIDE.md         how nodes are written
.claude/skills/               write-node, revise-node, node-status
.claude/agents/               fact-checker, beginner-reader, ai-reviewer
generated/                    build output (git-ignored)
```

## Commands

```
npm run validate      check all content (CI runs this); exit 1 on error
npm run build:graph   validate, then write generated/graph.json
npm run status        progress per path and section
npm run typecheck     TypeScript check for schema/ and scripts/
```

## Development

Planned stack (see PLAN.md section 7): Astro (static) + Cytoscape.js + Pagefind, served by one Cloudflare Worker (static assets + Hono API), Better Auth (passwordless), Cloudflare D1 (SQLite) via Drizzle.

- `schema/node.ts` is the contract between content and development. Change it first, then update both sides.
- TypeScript, strict mode, ES modules. Node ≥ 22.
- Keep the site static-first: reading must never depend on the API or the database.
- Before opening a PR, run `npm run validate` and `npm run typecheck`.

## Licenses

Code: MIT ([LICENSE](LICENSE)). Content in `content/`: CC BY-SA 4.0 ([LICENSE-CONTENT](LICENSE-CONTENT)).

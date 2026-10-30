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

AI writes, a human reviews. Nothing is published without human approval.

- `/write-node <id> [<id> ...]`: research → draft → checks → `fact-checker` + `beginner-reader` agents → fix → PR with claims table. Batches of 3–5 nodes.
- `/revise-node <id> [notes]`: apply reviewer comments or reader feedback.
- `/node-status`: progress dashboard.

Rules:

- Never set `status: published`, `reviewed_by` or `reviewed_at`. Only the human reviewer does that.
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
.claude/agents/               fact-checker, beginner-reader
generated/                    build output (git-ignored)
```

## Commands

```
npm run dev           local site at http://localhost:4321 (shows drafts)
npm run build         validate, then build the production site into dist/ (published nodes only)
npm run build:preview same, but shows draft and review nodes (Linux/CI shell)
npm run deploy        build, then deploy to Cloudflare with wrangler
npm run validate      check all content (CI runs this); exit 1 on error
npm run build:graph   validate, then write generated/graph.json
npm run status        progress per path and section
npm run typecheck     TypeScript check for schema/, scripts/ and src/
```

## Development

Stack (see PLAN.md section 7): Astro (static) + Cytoscape.js + Pagefind, served by one Cloudflare Worker (static assets + Hono API), Better Auth (passwordless), Cloudflare D1 (SQLite) via Drizzle. Built so far: Astro static site (home, node pages, path, timeline, simple search) and `wrangler.jsonc` for static assets.

```
src/lib/content.ts    build-time graph access for pages (uses scripts/lib/content.ts)
src/pages/            index, node/[id], path/[id], timeline, search, 404
src/layouts/          Base layout
src/styles/           global.css (light and dark)
```

- `schema/node.ts` is the contract between content and development. Change it first, then update both sides.
- Production shows only `published` nodes; others render as "being written". `astro dev` and `SHOW_DRAFTS=true` show drafts.
- TypeScript, strict mode, ES modules. Node ≥ 22.
- Keep the site static-first: reading must never depend on the API or the database.
- Before opening a PR, run `npm run validate` and `npm run typecheck`.

## Licenses

Code: MIT ([LICENSE](LICENSE)). Content in `content/`: CC BY-SA 4.0 ([LICENSE-CONTENT](LICENSE-CONTENT)).

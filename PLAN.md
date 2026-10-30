# Programmer's Bible — Project Plan

> Status: planning complete, not yet built · Last updated: 2026-10-30

## 1. Vision

**Programmer's Bible** takes someone who knows only how to use a web browser and gives them the solid foundations every programmer should have: what a computer is, how bits and bytes work, how computers and the internet came to be, how they are structured, and how a web page reaches your screen.

Many new programmers skip these basics. This project is the reference that fills that gap.

- **Audience:** absolute beginners who can operate a browser and want to become programmers. English is often not their first language.
- **Language:** English only.
- **Price:** free and open source. Knowledge is never paywalled.

## 2. Core concept: a knowledge graph

Every concept is a **node** (one short page). Nodes are connected by **edges**:

| Edge | Meaning | Example |
|---|---|---|
| `requires` | Learn this first | Domain name → requires → IP address |
| `part_of` | Is a component of | CPU → part of → Computer |
| `led_to` | Historical progression | ARPANET → led to → TCP/IP |
| `related` | Worth exploring next | URL ↔ Domain name |

`leads_to` is never written by hand; the build computes it by reversing `requires`.

Two ways in:

1. **Ask / search** — "What do you want to understand?" Whatever the learner asks becomes the **start node** for exploring.
2. **Guided path** — "Start from the very beginning": a curated walk through the graph (the First Chapter).

If a learner lands on an advanced node, the page offers to start from its foundations first.

## 3. Content

### Path 1 — First Chapter: "From Zero to Your Own Website" (MVP)

60 nodes (46 concepts, 13 history events 🕰, 1 project; history woven in before the concept it explains). New topics added during planning are marked ✨.

**Part 1 — The Machine**

| # | Node | Requires |
|---|---|---|
| 1 | What is a computer? | — |
| 2 | 🕰 Before computers: abacus and mechanical calculators | 1 |
| 3 | What is information? | — |
| 4 | Counting systems (base 10 and other bases) | — |
| 5 | Binary | 4 |
| 6 | Bit | 3, 5 |
| 7 | Byte | 6 |
| 8 | KB, MB, GB: measuring data | 7 |
| 9 | Text as numbers (ASCII → Unicode) | 7 |
| 10 | Images as numbers | 7 |
| 11 | Sound as numbers | 7 |
| 12 | 🕰 Babbage and Lovelace (1830s–40s) | 2 |
| 13 | 🕰 Turing and the universal machine (1936) | 12 |
| 14 | ✨ Electricity basics: current, voltage, on/off | — |
| 15 | 🕰 ENIAC and vacuum tubes (1945) | 13, 14 |
| 16 | 🕰 The transistor (1947): an electric switch | 15, 6 |
| 17 | ✨ Logic gates (AND, OR, NOT) | 16, 5 |
| 18 | 🕰 The integrated circuit (1958) | 17 |
| 19 | CPU | 17, 1 |
| 20 | 🕰 The microprocessor (1971) | 18, 19 |
| 21 | Memory (RAM) | 7, 19 |
| 22 | Storage (HDD and SSD) | 21 |
| 23 | Input and output devices | 1 |
| 24 | How the parts work together | 19, 21, 22, 23 |
| 25 | 🕰 The personal computer (1970s–80s) | 20, 24 |
| 26 | Machine code | 19, 5 |
| 27 | Programming languages | 26 |
| 28 | Software and programs | 27 |
| 29 | Operating systems | 28, 24 |
| 30 | Files and folders | 29, 22 |
| 31 | 🕰 The smartphone (2007) | 25, 29 |

**Part 2 — The Network**

| # | Node | Requires |
|---|---|---|
| 32 | What is a network? | 1 |
| 33 | 🕰 Telegraph and telephone (1800s) | 32, 14 |
| 34 | Packets | 32, 7 |
| 35 | Protocols | 32 |
| 36 | 🕰 ARPANET (1969) | 33, 34 |
| 37 | 🕰 TCP/IP (1974–1983) | 35, 36 |
| 38 | IP address | 37 |
| 39 | Router | 38 |
| 40 | Internet service provider (ISP) | 39 |
| 41 | ✨ Wi-Fi and mobile networks | 39, 31 |
| 42 | Physical internet: cables, undersea lines, data centers | 40 |
| 43 | Client and server | 32 |
| 44 | Server | 43, 24 |
| 45 | Domain name | 38 |
| 46 | DNS | 45, 44 |
| 47 | 🕰 The World Wide Web (1989–91) | 37, 43 |
| 48 | URL | 45, 47 |
| 49 | HTTP | 35, 43 |
| 50 | HTTPS and encryption basics | 49 |
| 51 | Web browser | 47, 28 |
| 52 | ✨ Cookies and privacy | 49, 51 |
| 53 | ⭐ Capstone: what happens when you type a URL | 46, 48, 49, 51 |

**Part 3 — The Web**

| # | Node | Requires |
|---|---|---|
| 54 | Browser DevTools: look inside any website | 51 |
| 55 | HTML: structure | 53 |
| 56 | CSS: appearance | 55 |
| 57 | JavaScript: behavior | 55 |
| 58 | Web hosting | 44, 46 |
| 59 | ✨ Cloud computing: what "the cloud" really is | 44, 42 |
| 60 | 🏁 Milestone: your first website on your own domain | 56, 57, 58 |

### Path 2 — "First Steps in Code" (after MVP)

What is programming, really? → Variables → Conditions → Loops → Functions → Reading errors and debugging → How to learn as a programmer → Where to go next.

## 4. Writing guide

### Rules

- **Plain English** for non-native readers: short sentences (≤ 15–20 words), "you", no idioms, grade-8 reading level.
- **Define every technical term on first use** or link it. Never use a term before it is explained; if a node needs it, it goes in `requires`.
- **One name per thing** throughout a node.
- **Banned words:** simply, just, obviously, basically, of course, everyone knows, easy.
- **Simplify, never lie.** Mark simplifications: *"(This is simplified. The full story is in [[dns|DNS]].)"*
- **Length:** 600–1,200 words (3–7 min). Longer → split the node.
- **One analogy per node**, from everyday worldwide life, and always say where it breaks down.
- **Try it in your browser:** browser only, safe and read-only, numbered steps, expected result shown, tested in Chrome and Firefox.
- **Sources:** at least one authoritative source per node (RFCs, W3C/WHATWG, MDN, official docs, original papers, museums/archives, well-known books). Every fact, date and number is verified against a source.
- **Diagrams:** SVG, one consistent style, always with alt text.
- **Links:** `[[node-id]]` or `[[node-id|label]]`, first mention only. The build fails on broken links.

### Frontmatter

```yaml
---
id: domain-name                 # unique, kebab-case, never changes once published
title: What is a Domain Name?
type: concept                   # concept | event | project | hub
summary: A human-friendly name that points to a computer's IP address.
part: network                   # machine | network | web
year: 1985                      # required for events; optional for concepts
read_minutes: 5
requires: [ip-address, server]
part_of: []
related: [url, web-hosting]
questions:                      # plain questions this node answers (used by search)
  - what is a domain
  - why do websites have names like google.com
aliases: [domain, website name]
sources:
  - title: RFC 1034, Domain Names: Concepts and Facilities
    url: https://www.rfc-editor.org/rfc/rfc1034
author: ai                      # "ai" or the human writer's name
reviewed_by: adityaokke         # required before publishing
reviewed_at: 2026-10-30
status: draft                   # draft | review | published
updated: 2026-10-30
---
```

### Section templates

- **Concept:** In one sentence → Why should I care? → Analogy → How it actually works → How it came to be → 🧪 Try it in your browser → Common misunderstandings → Recap (3 bullets) → Sources
- **Event:** In one sentence → The world before → What happened → Why it mattered → 🔍 See it for yourself → Recap → Sources
- **Project (milestone):** Goal → What you'll need → Steps with checkpoints → "It works!" criteria → If it doesn't work → What you just learned → Sources

### Review checklist

- [ ] Every technical term defined or linked on first use
- [ ] Nothing depends on a node that is not in `requires`
- [ ] No banned words
- [ ] The analogy says where it breaks down
- [ ] Every fact, date and number checked against a source
- [ ] "Try it" steps tested in Chrome and Firefox
- [ ] Diagrams have alt text
- [ ] 600–1,200 words
- [ ] Read by a real beginner, or read aloud as one

## 5. Content workflow: AI writes, a human reviews

```
1. Research ─▶ 2. Draft ─▶ 3. Auto-checks ─▶ 4. Fact-check ─▶ 5. Human review ─▶ 6. Published
   (AI)          (AI)        (CI)              (separate AI)     (reviewer)
```

- **Writer:** Claude Code in this repo, in batches of 3–5 nodes triggered by the reviewer.
- **Each PR includes a claims table:** claim | source | quote from source | fact-check result.
- **Fact-check** is done by a separate AI pass that has not seen the writer's reasoning.
- **Beginner read** is done by a separate AI pass that reads the node as someone who only knows how to use a browser. It does not replace real beginner testers; it catches obvious problems first.
- **Rules:** no source → the claim does not go in. Nothing is published without human approval; CI blocks `status: published` without `reviewed_by`.
- **Byline on every node:** "Written with AI · Reviewed by {reviewer}" or "Written by {writer} · Reviewed by {reviewer}".
- **Reviewer budget:** about 3 hours/week, about 45 minutes per node, at most 3–4 nodes per session.
- **Writing order:** 5 pilot nodes first (Byte, DNS, The transistor, the capstone, the milestone) to validate the template, then path order, one Part at a time.

### Writer setup in Claude Code

The writer's voice, rules and procedures live in the repo, so they are version-controlled and identical in every session:

```
programmersbible/
├── CLAUDE.md                        # mission, writing voice, rules (plain English,
│                                    # banned words, sources, claims table)
└── .claude/
    ├── skills/
    │   ├── write-node/SKILL.md      # research → draft to template → auto-checks →
    │   │                            # fact-checker → PR with claims table
    │   ├── revise-node/SKILL.md     # apply reviewer comments or 👎 feedback
    │   └── node-status/SKILL.md     # progress dashboard (draft / review / published)
    └── agents/
        ├── fact-checker.md          # separate, skeptical agent: checks every claim
        │                            # against its source; never sees the writer's reasoning
        └── beginner-reader.md       # reads as a zero-knowledge beginner: flags unexplained
                                     # terms, logic jumps, concepts used before their `requires`
```

Only these two are custom agents, because both need an independent view the writer cannot have. Writing, research and revision run in the main session through skills; mechanical rules (links, banned words, word count) are CI scripts.

```
write-node (main session)
   ├─▶ research + draft
   ├─▶ checks (scripts)
   ├─▶ fact-checker    ─┐ in parallel,
   ├─▶ beginner-reader ─┘ independent
   ├─▶ writer fixes issues from both
   └─▶ PR with claims table + beginner-reader notes ─▶ reviewer
```

**Reviewer workflow:**

1. Run `/write-node <id> <id> ...` for a batch of 3–5 nodes.
2. Claude researches, writes, runs checks, calls the `fact-checker` and `beginner-reader` agents and opens a PR with the claims table and beginner-reader notes.
3. Review the PR preview. Comments are applied with `/revise-node`.
4. **Improvement loop:** when the same kind of correction happens twice, Claude updates the relevant skill or `CLAUDE.md`, so the writer improves over time under the reviewer's control.

## 6. Pages and UX

**Principles:** calm, never overwhelming; reading first, graph supports it; you always know where you are; mobile-friendly; accessible (the graph always has a list view).

| Route | Page |
|---|---|
| `/` | Home: "What do you want to understand?" question box, example questions, "Start from the very beginning", continue where you left off |
| `/path/first-chapter` | Path overview with progress per Part |
| `/node/<id>` | Node page: article, mini graph, Learn first / Leads to / Related, ← previous · next →, mark as understood, 👍/👎 feedback |
| `/explore?from=<id>` | Graph explorer centred on a node (depth 1–2 in MVP; full map later) |
| `/search?q=` | Search results, each with "Read" and "Explore from here" |
| `/timeline` | All history events in date order |
| `/me` | Account: progress, settings, export/delete data |
| `/about` | Mission, how content is made (AI + human review), licenses |

- Linked terms show a one-sentence preview on hover/tap.
- Never block reading with login. After a reader marks about 3 nodes as understood, suggest once: "Sign in to keep your progress on any device."
- Light and dark themes, typography-first, one accent color, small celebration at the end of each Part and at the milestone.

## 7. Architecture

Static-first: reading never needs a server. Only accounts, feedback and (later) AI use the backend.

```
GitHub repo ─▶ GitHub Actions (validate graph, build, deploy previews + production)
                         │
                         ▼
Browser ◀──▶ One Cloudflare Worker
              ├─ Static assets: node pages, graph.json, search index   (free, unlimited)
              └─ Hono API /api/*
                   ├─ /api/auth/*    Better Auth (GitHub, Google, email magic link — no passwords)
                   ├─ /api/progress  progress sync
                   ├─ /api/feedback  👍/👎 + comment
                   └─ /api/assist    AI assistant (later)
                         │
                         ├─▶ Cloudflare D1 (SQLite) via Drizzle
                         └─▶ Cloudflare AI Gateway ─▶ AI API (later)
```

| Layer | Choice |
|---|---|
| Content | Markdown + frontmatter in `content/` |
| Site | Astro (static), interactive islands |
| Graph view | Cytoscape.js |
| Search | Pagefind (MVP); semantic search with embeddings later |
| Hosting + API | Cloudflare Worker (static assets + Hono) |
| Auth | Better Auth, passwordless (fits the free plan's 10 ms CPU limit) |
| Database | Cloudflare D1 (SQLite) + Drizzle ORM |
| Analytics | Cloudflare Web Analytics |
| CI/CD | GitHub Actions + Wrangler |

### Data model

```
-- Better Auth
user, session, account, verification

-- ours
node_progress (user_id, node_id, status: visited|completed, updated_at)  PK (user_id, node_id)
path_progress (user_id, path_id, current_node_id, updated_at)            PK (user_id, path_id)
feedback      (id, node_id, helpful, comment, created_at)
ai_usage      (user_id, date, count)                                     PK (user_id, date)  -- later
```

Guests keep progress in localStorage; on first sign-in it is merged into their account (latest status per node wins).

### Repository layout

```
programmersbible/
├── content/
│   ├── nodes/            # one .md file per concept
│   └── paths/            # first-chapter.yaml, ...
├── src/                  # Astro site
├── api/                  # Hono routes
├── db/                   # Drizzle schema + migrations
├── scripts/
│   └── build-graph.ts    # frontmatter → graph.json + validation
├── wrangler.toml
├── LICENSE               # MIT (code)
└── LICENSE-CONTENT       # CC BY-SA 4.0 (content)
```

### Environments

Local (`wrangler dev`, local D1) · Preview (every PR, separate D1) · Production (merge to `main`).

### Development setup

No custom agents are needed for development; one Claude Code session that sees the whole codebase works better than splitting frontend, backend and database across agents.

- **`CLAUDE.md` development section:** tech stack, commands (`dev`, `build`, `test`, `deploy`), folder layout, code conventions.
- **Hooks (optional):** run the type checker and linter automatically after edits.
- **CI:** tests and checks on every PR.
- **Built-in tools:** Plan mode / Plan agent for larger features, Explore agent for searching, `/code-review`, `/security-review` (important for auth and the API), `/simplify`, `/run`.

### Parallel workflow: content and development

Content (`content/`) and development (`src/`, `api/`, `db/`) touch different folders and meet only at one contract: the node frontmatter schema and `[[link]]` syntax.

1. **Build the contract first (1–2 days):** frontmatter schema as code, `build-graph.ts` validation, `CLAUDE.md`, skills and agents.
2. **Then run two Claude Code sessions, each in its own git worktree:**

```
d:\github\adityaokke\programmersbible            ← Session A: development
d:\github\adityaokke\programmersbible-content    ← Session B: content (git worktree)
```

- Each stream opens its own PRs into `main`. Schema changes are coordinated: change the contract first, then both streams follow.
- Before the site exists, content PRs are reviewed as rendered markdown on GitHub; afterwards every PR also has a preview link.
- **Review priority:** content PRs get a full review; development PRs get a lighter review backed by `/code-review`, CI and the preview link.
- **Usage limits:** two sessions use the Claude Code allowance about twice as fast. If limits are hit, alternate the streams (content one day, development the next).

### Domain

Already registered via Google Cloud Domains (registrar is now Squarespace). Point its nameservers to Cloudflare; optionally transfer to Cloudflare Registrar at renewal.

## 8. AI assistant (phase 2–3)

When a learner is still confused after reading a node, they can ask the assistant. It:

- re-explains the node in a different way,
- answers using only the node and its neighbours, so it stays consistent with the Bible,
- notices a missing foundation and points the learner back to the prerequisite node.

Requires sign-in, has a daily quota, goes through AI Gateway with a hard monthly spending cap.

## 9. Licensing and sustainability

- **Code:** MIT. **Content:** CC BY-SA 4.0.
- **Running cost:** about $0 on Cloudflare's free plan, plus the domain renewal. The only real cost is the AI assistant.

| Tier | Price | Includes |
|---|---|---|
| Reader (no account) | Free | All content, graph, search, browser-only progress |
| Learner (free account) | Free | Synced progress, small daily AI quota |
| Supporter | Optional donation | Higher AI quota, supporter badge |
| Bring your own key | Free | Unlimited AI using the learner's own API key |

## 10. Testing and launch

- **Beginner testers:** 3–5 real beginners (to be recruited). Round 1 after the pilot nodes, round 2 before the Part 1 launch. Key question: "Explain this topic to a friend in one sentence."
- **Feedback widget** on every node (👍/👎 + optional comment). Low-rated nodes go back to the AI for revision and to the reviewer for re-review.
- **Launch channels:** the author's LinkedIn and the project website only.
- **Release in Parts:** Part 1 first, then Part 2, then Part 3.
- **What we watch (no numeric targets):** path funnel (where readers stop), 👍 ratio per node, searches with no results, returning readers, sign-ups.

### Pre-launch checklist

- [ ] All Part 1 nodes `published`
- [ ] About page (mission, AI + human review, licenses)
- [ ] Privacy policy
- [ ] "Coming soon: Part 2 and Part 3" page
- [ ] Social sharing images, sitemap, basic SEO
- [ ] Tested on a real phone
- [ ] Accessibility check (contrast, keyboard, alt text)

## 11. Roadmap

At about 4 reviewed nodes per week:

| When | Code | Content |
|---|---|---|
| Days 1–2 | **Contract (before splitting):** node schema as code, graph build + validation, `CLAUDE.md`, skills, `fact-checker` and `beginner-reader` agents | — |
| Weeks 1–2 | Session A: Astro scaffold, CI, preview deploys, domain on Cloudflare | Session B: 5 pilot nodes → review → adjust template; tester round 1 |
| Weeks 3–9 | Node page, path view, search, mini graph, timeline, explore (depth 1–2), feedback widget | Rest of Part 1; tester round 2 |
| ~Week 9 | **🚀 Launch Part 1** | |
| Weeks 10–15 | Accounts (login + progress sync) | Part 2 → launch |
| ~Month 4 | | Part 3 → **🏁 full First Chapter** |
| Later | AI assistant, semantic search, full graph map | Path 2 "First Steps in Code", more paths |

## 12. Open items

- Tagline (to decide before launch).
- Recruit 3–5 beginner testers.

---
name: write-node
description: Research and write one or more Programmer's Bible nodes (batch of 3–5), check them with the fact-checker and beginner-reader agents, get approval from the ai-reviewer agent, and open a PR with a claims table for the human to merge. Use when the user asks to write, draft or generate nodes.
argument-hint: <node-id> [<node-id> ...]
disable-model-invocation: true
---

# Write nodes

Nodes to write: $ARGUMENTS

If no ids were given, run `npm run status` and propose the next 3–5 `planned` nodes in path order, then stop and wait for confirmation.

## 0. Prepare

1. Read [CLAUDE.md](../../../CLAUDE.md) and [docs/WRITING_GUIDE.md](../../../docs/WRITING_GUIDE.md). Follow the guide exactly.
2. For each id, read `content/nodes/<id>.md`. Stop and tell the user if:
   - the node does not exist, or
   - its status is `review` or `published` (use `/revise-node` instead).
3. Read every node in its `requires` (and theirs, transitively). This is **what the reader already knows**. Any other technical term must be explained in this node or avoided.
4. Find the node's place in `content/paths/*.yaml`, and read the node just before it, so the text continues naturally.
5. Create a branch: `git checkout -b content/<first-id>` (add `-and-more` for a batch) from an up-to-date `main`.

## 1. Research (before writing)

For each node, find authoritative sources (see the guide's Sources section) with WebSearch and WebFetch. Prefer primary sources.

Build a **claims table** as you go: every fact, date, name and number you intend to use, with the source URL and a short quote from that source that supports it. A claim you cannot support does not go into the node.

## 2. Write

Write the body using the section template for the node's `type`. Fill in the frontmatter:

- `status: review`, `author: ai`, `updated: <today>`
- `summary` (same text as the "In one sentence" line), `read_minutes` (≈ words / 180, rounded), `questions` (3–6 plain questions a beginner would type), `aliases`, `sources`
- Keep `id`, `title`, `type`, `part`, `requires`, `led_to`, `year` as planned. If one is wrong, change it and explain why in the PR.
- Do not set `reviewed_by` or `reviewed_at` yet (step 5 does that).

Link other nodes with `[[id]]` on first mention only.

## 3. Check

Run `npm run validate`. Fix every error and every warning about this node. Re-run until clean.

## 4. Independent review

For each node, launch **both agents in parallel** (one message, two Agent calls):

- **fact-checker**: give it the node file path and the claims table. Do not give it your reasoning or opinions.
- **beginner-reader**: give it only the node file path.

Then fix what they found:

- Unsupported or wrong claims → correct with a better source, or remove the claim.
- Unclear terms, logic jumps, early concepts → rewrite.

If you change facts, run the fact-checker again on the changed claims. Run `npm run validate` again.

## 5. AI review

For each node, launch the **ai-reviewer** agent (several nodes can run in parallel). Give it the node file path, the claims table with the fact-checker's verdicts, and the beginner-reader's notes with what you changed. Do not give it your reasoning or ask it to approve.

- **`VERDICT: APPROVE`**:
  - **concept or event**: set `status: published`, `reviewed_by: ai`, `reviewed_at: <today>`.
  - **project**: keep `status: review`. Projects always need the human reviewer (the validator enforces this).
- **`VERDICT: REQUEST CHANGES`**: fix every blocker (re-run the fact-checker on changed facts), then run the ai-reviewer again on the new version.
- After **two** REQUEST CHANGES rounds, stop: keep `status: review` and list the remaining blockers in the PR for the human.

After setting `published`, do not edit the node again. If you must, it needs a new APPROVE. Run `npm run validate`.

## 6. Open the PR

Commit (one commit per node is fine), push, and open a PR with `gh pr create`. Title: `content: <node titles>`. Body, per node:

```markdown
## <title> (`<id>`)

**Preview:** <file link or preview URL>

### Claims
| # | Claim | Source | Quote from source | Fact-check |
|---|---|---|---|---|
| 1 | ... | [title](url) | "..." | ✅ supported / ⚠️ partly / ❌ removed |

### Beginner-reader notes
- What it flagged, and what was changed.

### AI review
**Verdict:** APPROVE → published as "Reviewed by AI" / APPROVE, project → waiting for human review / not approved after 2 rounds → waiting for human review.
- Blockers found in earlier rounds, and how they were fixed.
- "Needs a human": what the AI reviewer could not verify itself.

### Open questions for the reviewer
- Anything you are unsure about (judgement calls, simplifications, graph edge changes).
```

Start the PR body with a short summary: which nodes will go live as "Reviewed by AI" when merged, and which wait for a human review and why. End it with the reviewer checklist from the writing guide, then the attribution line required by the session. Never merge the PR.

## 7. Report

Tell the user: the PR link, the nodes written, word counts, which nodes are AI-approved and which need their review, the "Needs a human" items, and anything the agents flagged that you chose not to change (with the reason).

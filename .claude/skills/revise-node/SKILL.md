---
name: revise-node
description: Revise Programmer's Bible nodes from reviewer PR comments or reader feedback, re-check facts that changed, and update the PR. Use when the user asks to apply review comments, fix a node, or act on feedback.
argument-hint: <node-id | PR number> [notes]
disable-model-invocation: true
---

# Revise nodes

Target and notes: $ARGUMENTS

## 1. Collect the feedback

- **PR number given** (or the current branch has an open PR): read all review comments with `gh pr view <n> --comments` and `gh api repos/{owner}/{repo}/pulls/<n>/comments`.
- **Node id with notes**: use the notes as the feedback. Create a branch `content/revise-<id>` from `main` if the node is already published.
- **Reader feedback**: if the user pastes 👎 comments, treat them as feedback.

List every requested change before editing. If a comment is unclear, ask instead of guessing.

## 2. Apply

Read [docs/WRITING_GUIDE.md](../../../docs/WRITING_GUIDE.md) again, then edit the node(s).

- If a published node changes, set `status: review`, update `updated`, and remove `reviewed_by` and `reviewed_at`. The old approval does not cover the new text, even if a human gave it.
- Never set `reviewed_by` to a person's name.

## 3. Re-check

1. `npm run validate`, then fix until clean.
2. If any **fact** changed or was added, run the **fact-checker** agent on the changed claims (file path plus the new claim rows only).
3. If more than a few sentences changed, run the **beginner-reader** agent on the node.
4. Run the **ai-reviewer** agent on the node (file path, the claims table with verdicts, and the beginner-reader notes if there are any). Apply its verdict exactly as in step 5 of the `write-node` skill: an APPROVE publishes a concept or event as `reviewed_by: ai`; projects wait for the human.

## 4. Update the PR

Commit and push. Reply on the PR with a short list: each comment → what changed (or why it was not changed), and the AI review verdict. Update the claims table in the PR body if claims changed. If a human-reviewed node went back to "Reviewed by AI", say so clearly. Never merge the PR.

## 5. Improvement loop

Check whether this kind of correction has happened before (earlier PR comments, or the same fix in several nodes). If it has happened **twice or more**, update `docs/WRITING_GUIDE.md`, `CLAUDE.md` or the `write-node` skill so it does not happen again, in a separate commit, and mention it in the PR reply.

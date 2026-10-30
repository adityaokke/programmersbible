# Writing Guide

How every node in Programmer's Bible is written. `npm run validate` enforces the rules a machine can check; the reviewer checks the rest.

## Who we write for

One reader: someone who can use a web browser, wants to become a programmer, and knows nothing else. They may be young, and **English may not be their first language**. Every sentence must work for that person.

## Rules

### Language

- **Plain English.** Short sentences: 15–20 words at most.
- Talk to the reader as **"you"**.
- **No idioms or slang** ("under the hood", "piece of cake"). They confuse non-native readers.
- Aim for a **grade-8 reading level**: simple words, never childish.

### Terms

- **Define every technical term the first time it appears**, or link it to its node.
- **Never use a term before it is explained.** If a node needs it, it belongs in `requires`.
- **One name per thing.** If you call it "server", do not switch to "host" or "machine".

### Banned words

`simply`, `just`, `obviously`, `basically`, `of course`, `everyone knows`, `easy`.

They make a confused reader feel stupid. The validator rejects them in `review` and `published` nodes.

### Honesty

- **Simplify, but never say something false.** When you leave something out, say so: *"(This is simplified. The full story is in [[dns|DNS]].)"*
- Use real numbers: "about 4 billion", not "a lot".
- **Every fact, date, name and number must be supported by a source.** No source → the claim does not go in.

### Structure and length

- One idea per paragraph.
- Use a diagram whenever an idea involves movement, layers or structure.
- **600–1,200 words** (3–7 minutes). Longer → split it into two nodes.

## Analogies

- Use **everyday, worldwide things**: post offices, phone contacts, roads, libraries, light switches. Avoid things specific to one culture or country.
- **One main analogy per node.** Do not mix several.
- **Always say where the analogy breaks down**: *"Unlike a real phone book, DNS…"*. This stops readers building wrong mental models.

## Try it in your browser

- **Browser only.** No installs, no accounts, no command line.
- **Safe and read-only.** Look and observe; never change settings or download anything.
- **Numbered steps**, and **show the expected result**.
- Must work in **Chrome, Edge and Firefox**. Give a phone alternative when possible.
- Do not hard-code values that change over time (e.g. a site's IP address); say what kind of value the reader will see.
- Event nodes use "See it for yourself" instead: a museum page, archive, photo or video.

## Sources

At least one authoritative source per node, preferring primary sources:

- Standards: IETF RFCs, W3C, WHATWG
- Official documentation: MDN Web Docs, the vendor's own docs
- Original papers and patents
- Museums and archives (e.g. the Computer History Museum, the Smithsonian)
- Well-known books

Never use an AI answer, a content farm or an unsourced blog as a source. Every source URL must load.

## Diagrams

- SVG in one consistent style (Excalidraw or hand-written SVG).
- **Every diagram has alt text** describing what it shows.
- A diagram must make sense without the text, and the text without the diagram.

## Links between nodes

- Write `[[node-id]]` or `[[node-id|label]]`.
- Link only the **first mention** of each term in a node.
- The validator fails on links to nodes that do not exist.

## Frontmatter

The schema lives in [schema/node.ts](../schema/node.ts). A written node looks like this:

```yaml
---
id: domain-name                 # kebab-case, same as the file name, never changes once published
title: "What is a Domain Name?"
type: concept                   # concept | event | project | hub
part: network                   # machine | network | web | code
status: draft                   # planned | draft | review | published
requires: [ip-address]          # prerequisites; do not remove or add edges without reason
part_of: []
related: [url, web-hosting]
led_to: []                      # events only: what this event led to
year: 1985                      # required for events
era_label: "1980s"              # optional display label for the timeline
summary: "A domain name is a human-friendly name that points to a computer's IP address."
read_minutes: 5
questions:                      # plain questions this node answers; used by search
  - what is a domain
  - why do websites have names like google.com
aliases: [domain, website name]
sources:
  - title: "RFC 1034, Domain Names: Concepts and Facilities"
    url: https://www.rfc-editor.org/rfc/rfc1034
author: ai                      # "ai" or the human writer's name
reviewed_by: adityaokke         # set by the reviewer, required to publish
reviewed_at: 2026-10-30
updated: 2026-10-30
---
```

`leads_to` is never written by hand. The build computes it by reversing `requires`.

## Section templates

The validator checks that these `##` headings exist (an emoji prefix is fine).

### Concept

```markdown
> **In one sentence:** {summary}

## Why should I care?
1–2 short paragraphs: where the reader has already met this without knowing it.

## Analogy
One everyday analogy, and where it breaks down.

## How it actually works
The real explanation, step by step, with a diagram.

## How it came to be
Short history: what problem it solved, who, when. Link the event node if one exists.

## 🧪 Try it in your browser
Numbered steps and the expected result.

## Common misunderstandings
2–3 wrong beliefs beginners often have, corrected.

## Recap
- Exactly 3 bullet points: what to remember.

## Sources
- Title: URL
```

### Event

```markdown
> **In one sentence:** {summary}

## The world before
What life or technology was like, and what problem people had.

## What happened
Who, when, where, how.

## Why it mattered
What changed and what it made possible.

## 🔍 See it for yourself
A museum page, archive, photo or video.

## Recap
## Sources
```

### Project (milestone)

```markdown
> **In one sentence:** {summary}

## Goal
## What you'll need
## Steps
Numbered steps with checkpoints.
## It works!
How the reader knows they succeeded.
## If it doesn't work
The most common problems and fixes.
## What you learned
Links back to the nodes used.
## Sources
```

## Review checklist

Before a node moves to `published`:

- [ ] Every technical term is defined or linked on first use
- [ ] Nothing depends on a node that is not in `requires`
- [ ] No banned words
- [ ] The analogy says where it breaks down
- [ ] Every fact, date and number is checked against a source (claims table)
- [ ] "Try it" steps were done in a real browser and work
- [ ] Diagrams have alt text
- [ ] 600–1,200 words
- [ ] Read as a real beginner, or by one

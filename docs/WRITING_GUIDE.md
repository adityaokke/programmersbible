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
- **Background terms: one general reference is enough.** Basic textbook facts that a node explains along the way (what a conductor is, what a pixel is) still need a source, but one general reference per node can cover all of them: an encyclopedia, a museum or prize-committee education page, or a university course page. It must actually say each fact used. Key claims (dates, names, numbers, "first", and how the node's own topic works) still need their own specific source.
- **Names exactly as the source writes them.** If the source says "P. Mockapetris" or "W. Buchholz", write that, or add a source that shows the full name. The same goes for job titles ("engineer", "chemist") and words like "popular" or "very large": if the source does not say it, leave it out.
- **Each node carries its own sources.** A fact repeated from another node (a date, a number, a shortcut) still needs a source in *this* node's `sources`. Linking to the other node explains the idea; it does not support the fact.
- **No made-up reasons.** If a source gives a name or a date but not *why*, do not add a "because". Write "This period is often called…", not "Because they discovered so much, people called it…".

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

## Diagrams and pictures

Pick the form that fits the idea:

| The idea is… | Use | Example |
|---|---|---|
| steps in order, a flow, layers, a tree, a timeline | a **Mermaid** diagram | DNS lookup, HTTP over TCP over IP, a folder tree |
| what a real thing looks like | a **photo** from an open-licensed source | an open hard drive, ENIAC, a fiber cable |
| numbers side by side | a **table** | HDD vs SSD |
| a small picture no photo shows | a **text diagram** in a code block | a pixel grid of numbers |

**Mermaid.** Write it in a ` ```mermaid ` block. The site draws it at build time, in the same style for every node, with a light and a dark version.

- Start it with `accTitle:` (a short title) and `accDescr:` (what it shows, in full sentences). Together they are its alt text; the validator requires both.
- It shows only what the text says, and adds no new facts.
- Keep it small: about 3–8 boxes or people. Labels are short, plain words.
- Prefer `flowchart` (flows, trees, layers), `sequenceDiagram` (who asks whom, in order) and `timeline`.

**Photos.** Take them from Wikimedia Commons or another source that shows a license. Never copy a photo marked "all rights reserved" (most museum photos): link to it in "See it for yourself" instead.

- Allowed licenses: Public domain, CC0, CC BY and CC BY-SA (the list is in `schema/node.ts`).
- Save the file in `content/images/<node-id>/` with a kebab-case name (`open-hard-drive.jpg`). `npm run fetch-image` does this and shrinks it to 1,000 pixels wide (`--width 2000` if you show a close-up). For a file added another way, run `npm run optimize-images`; the validator warns about pictures that are too big for slow phone connections.
- Use it in the text as `![alt text](images/<file>)`, on its own line.
- List it in the frontmatter `images` with `file`, `alt`, `source` (the image's own page), `author` (as the source writes it) and `license`. The site shows the credit under the picture, which CC BY needs.
- Open the picture and check that it really shows what the alt text says.
- Add a short visible `caption` when a reader could misread the picture, for example a museum sign that names more than the picture shows ("The trial piece: a small part of the Analytical Engine."). A caption is a factual claim: only what the sources support.
- **Point out the parts the text names** with `labels` (callouts): each label sits beside the picture, with an arrow pointing at the part. Give the part's position in percent of the picture (`x` from the left, `y` from the top). Use `side: left|right` and `ly` (the label's height) to keep lines from crossing each other or important parts. Build the site and look at the result before you finish.

  ```yaml
  labels:
    - { x: 20, y: 30, text: Platter }
    - { x: 50.5, y: 29.5, text: Head, side: right, ly: 12 }
  ```
- **Show a tiny part up close** with `zoom`: a rectangle on the photo (`x`, `y`, `w`, `h` in percent of the picture) and an enlarged close-up of it under the photo, with its own `labels` (in percent of the close-up) and a short `text` caption. Save the photo about 2,000 pixels wide so close-ups stay sharp. Cropping is a change to the photo: Public domain, CC0, CC BY and CC BY-SA all allow it.

  ```yaml
  zoom:
    x: 44
    y: 23
    w: 13
    h: 13
    text: "Close-up: the head at the tip of the arm"
    labels:
      - { x: 50, y: 46, text: Head, side: right }
  ```

**Text diagrams** have no alt attribute, so put one italic line right before or right after it that describes what it shows: *Diagram: …*. Code the reader types (console lines, HTML examples) and tables of example numbers are not diagrams and need no such line.

Every diagram or picture must make sense with its alt text alone, and the text must make sense without it.

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
reviewed_by: ai                 # "ai" (ai-reviewer agent approved) or the human reviewer's name; required to publish
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

Before a node moves to `published`, the `ai-reviewer` agent (or a human reviewer) confirms:

- [ ] Every technical term is defined or linked on first use
- [ ] Nothing depends on a node that is not in `requires`
- [ ] No banned words
- [ ] The analogy says where it breaks down
- [ ] Every fact, date and number is checked against a source (claims table)
- [ ] "Try it" steps work: checked against official docs by the AI reviewer, and in a real browser by a human reviewer
- [ ] Diagrams and pictures have alt text; every photo has an allowed license and its credit
- [ ] 600–1,200 words
- [ ] Read as a real beginner, or by one

Project nodes always need a human reviewer before they are published (`reviewed_by: ai` is rejected for `type: project`).

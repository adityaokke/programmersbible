import { z } from "zod";

// The contract between content and development.
// Every file in content/nodes/ must match this schema; the site and the
// graph build both import it. Change it here first, then update both sides.

export const NODE_TYPES = ["concept", "event", "project", "hub"] as const;
export const PARTS = ["machine", "network", "web", "code"] as const;
export const STATUSES = ["planned", "draft", "review", "published"] as const;

const nodeId = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be kebab-case (a-z, 0-9, -)");

const isoDate = z.iso.date();

const source = z.object({
  title: z.string().min(1),
  url: z.url(),
});

export const nodeFrontmatter = z
  .object({
    id: nodeId,
    title: z.string().min(1),
    type: z.enum(NODE_TYPES),
    part: z.enum(PARTS),
    status: z.enum(STATUSES),

    // Graph edges. leads_to is never written by hand: it is the reverse of requires.
    requires: z.array(nodeId).default([]),
    part_of: z.array(nodeId).default([]),
    related: z.array(nodeId).default([]),
    led_to: z.array(nodeId).default([]),

    // Required for events; optional for concepts (when the idea was invented).
    year: z.number().int().optional(),
    // Human-readable era for the timeline, e.g. "1830s–1840s". Falls back to year.
    era_label: z.string().optional(),

    summary: z.string().optional(),
    read_minutes: z.number().int().positive().optional(),
    questions: z.array(z.string().min(1)).default([]),
    aliases: z.array(z.string().min(1)).default([]),
    sources: z.array(source).default([]),

    author: z.string().optional(), // "ai" or the human writer's name
    reviewed_by: z.string().optional(),
    reviewed_at: isoDate.optional(),
    updated: isoDate.optional(),
  })
  .strict()
  .superRefine((node, ctx) => {
    const need = (ok: boolean, path: string, message: string) => {
      if (!ok) ctx.addIssue({ code: "custom", path: [path], message });
    };

    need(node.type !== "event" || node.year !== undefined, "year", "events must have a year");
    need(!node.requires.includes(node.id), "requires", "a node cannot require itself");

    if (node.status === "planned") return;

    // draft, review, published: the node has real content.
    need(!!node.summary, "summary", "summary is required once a node is written");
    need(!!node.read_minutes, "read_minutes", "read_minutes is required once a node is written");
    need(node.questions.length > 0, "questions", "at least one question is required");
    need(node.sources.length > 0, "sources", "at least one source is required");
    need(!!node.author, "author", 'author is required ("ai" or a name)');

    if (node.status === "published") {
      need(!!node.reviewed_by, "reviewed_by", "published nodes must have a human reviewer");
      need(!!node.reviewed_at, "reviewed_at", "published nodes must have a review date");
    }
  });

export type NodeFrontmatter = z.infer<typeof nodeFrontmatter>;

export const pathFile = z
  .object({
    id: nodeId,
    title: z.string().min(1),
    description: z.string().optional(),
    sections: z
      .array(
        z.object({
          title: z.string().min(1),
          nodes: z.array(nodeId).min(1),
        }),
      )
      .min(1),
  })
  .strict();

export type PathFile = z.infer<typeof pathFile>;

// Words that make a confused reader feel stupid. See docs/WRITING_GUIDE.md.
export const BANNED_WORDS = [
  "simply",
  "just",
  "obviously",
  "basically",
  "of course",
  "everyone knows",
  "easy",
] as const;

export const WORD_RANGE = { min: 600, max: 1200 } as const;

export const REQUIRED_HEADINGS: Record<(typeof NODE_TYPES)[number], string[]> = {
  concept: [
    "Why should I care?",
    "Analogy",
    "How it actually works",
    "How it came to be",
    "Try it in your browser",
    "Common misunderstandings",
    "Recap",
    "Sources",
  ],
  event: ["The world before", "What happened", "Why it mattered", "See it for yourself", "Recap", "Sources"],
  project: [
    "Goal",
    "What you'll need",
    "Steps",
    "It works!",
    "If it doesn't work",
    "What you just learned",
    "Sources",
  ],
  hub: [],
};

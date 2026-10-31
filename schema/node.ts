import { z } from "zod";

// The contract between content and development.
// Every file in content/nodes/ must match this schema; the site and the
// graph build both import it. Change it here first, then update both sides.

export const NODE_TYPES = ["concept", "event", "project", "hub"] as const;
export const PARTS = ["machine", "network", "web", "code"] as const;
/** `reviewed_by` value for nodes approved by the ai-reviewer agent, not yet checked by a human. */
export const AI_REVIEWER = "ai";

export const STATUSES = ["planned", "draft", "review", "published"] as const;

const nodeId = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id must be kebab-case (a-z, 0-9, -)");

const isoDate = z.iso.date();

const source = z.object({
  title: z.string().min(1),
  url: z.url(),
});

// Licenses that can be shared under the content license (CC BY-SA 4.0). "All rights reserved"
// images (most museum photos) cannot be copied: link to them in "See it for yourself" instead.
export const IMAGE_LICENSES = [
  "Public domain",
  "CC0 1.0",
  "CC BY 2.0",
  "CC BY 2.5",
  "CC BY 3.0",
  "CC BY 4.0",
  "CC BY-SA 2.0",
  "CC BY-SA 2.5",
  "CC BY-SA 3.0",
  "CC BY-SA 4.0",
] as const;

// A callout: x and y are the part's position in percent of the picture's width and height,
// from the top left. side puts the label left or right (default: the nearer side); ly moves
// the label up or down (default: same height as the part), to keep labels apart.
const calloutLabel = z.object({
  x: z.number().min(0).max(100),
  y: z.number().min(0).max(100),
  text: z.string().min(1),
  side: z.enum(["left", "right"]).optional(),
  ly: z.number().min(0).max(100).optional(),
});

// A picture stored in content/images/<node-id>/ and used in the body as ![alt](images/<file>).
const image = z.object({
  file: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*\.(jpg|jpeg|png|svg|webp)$/, "file must be a kebab-case name with an image extension"),
  alt: z.string().min(10, "alt text must describe the picture"),
  source: z.url(), // the page the image was taken from, e.g. its Wikimedia Commons page
  author: z.string().min(1), // as the source writes it
  license: z.enum(IMAGE_LICENSES),
  // Callouts: a label beside the picture with a line to the part it names.
  labels: z.array(calloutLabel).default([]),
  // A close-up shown beside the photo: x, y, w and h mark a rectangle in percent of the
  // picture (from the top left). Its labels are placed in percent of the close-up.
  zoom: z
    .object({
      x: z.number().min(0).max(100),
      y: z.number().min(0).max(100),
      w: z.number().gt(0).max(100),
      h: z.number().gt(0).max(100),
      text: z.string().min(1),
      labels: z.array(calloutLabel).default([]),
    })
    .optional(),
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
    images: z.array(image).default([]),

    author: z.string().optional(), // "ai" or the human writer's name
    reviewed_by: z.string().optional(), // "ai" (the ai-reviewer agent) or the human reviewer's name
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
      need(!!node.reviewed_by, "reviewed_by", 'published nodes need a reviewer ("ai" or a name)');
      need(!!node.reviewed_at, "reviewed_at", "published nodes must have a review date");
      // Step-by-step projects block the reader when one step is wrong, so a human checks them.
      need(
        node.type !== "project" || node.reviewed_by !== AI_REVIEWER,
        "reviewed_by",
        "project nodes must be reviewed by a human before they are published",
      );
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
    "What you learned",
    "Sources",
  ],
  hub: [],
};

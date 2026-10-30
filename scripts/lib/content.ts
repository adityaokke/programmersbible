import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, basename, relative } from "node:path";
import matter from "gray-matter";
import YAML from "yaml";
import { nodeFrontmatter, pathFile, type NodeFrontmatter, type PathFile } from "../../schema/node.ts";

export const ROOT = join(import.meta.dirname, "..", "..");
export const NODES_DIR = join(ROOT, "content", "nodes");
export const PATHS_DIR = join(ROOT, "content", "paths");

export type Issue = { level: "error" | "warning"; file: string; message: string };

export type LoadedNode = {
  file: string;
  data: NodeFrontmatter;
  body: string;
};

export type LoadedPath = {
  file: string;
  data: PathFile;
};

// YAML 1.2 keeps dates as strings, which is what the schema expects.
const parseYaml = (src: string) => YAML.parse(src) as object;

const rel = (file: string) => relative(ROOT, file).replaceAll("\\", "/");

function listFiles(dir: string, ext: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.endsWith(ext))
    .sort()
    .map((name) => join(dir, name));
}

export function loadNodes(issues: Issue[]): LoadedNode[] {
  const nodes: LoadedNode[] = [];
  for (const path of listFiles(NODES_DIR, ".md")) {
    const file = rel(path);
    const parsed = matter(readFileSync(path, "utf8"), { engines: { yaml: parseYaml } });
    const result = nodeFrontmatter.safeParse(parsed.data);
    if (!result.success) {
      for (const issue of result.error.issues) {
        const where = issue.path.length ? `${issue.path.join(".")}: ` : "";
        issues.push({ level: "error", file, message: `${where}${issue.message}` });
      }
      continue;
    }
    if (result.data.id !== basename(path, ".md")) {
      issues.push({ level: "error", file, message: `id "${result.data.id}" must match the file name` });
      continue;
    }
    nodes.push({ file, data: result.data, body: parsed.content });
  }
  return nodes;
}

export function loadPaths(issues: Issue[]): LoadedPath[] {
  const paths: LoadedPath[] = [];
  for (const path of listFiles(PATHS_DIR, ".yaml")) {
    const file = rel(path);
    const result = pathFile.safeParse(parseYaml(readFileSync(path, "utf8")));
    if (!result.success) {
      for (const issue of result.error.issues) {
        issues.push({ level: "error", file, message: `${issue.path.join(".")}: ${issue.message}` });
      }
      continue;
    }
    if (result.data.id !== basename(path, ".yaml")) {
      issues.push({ level: "error", file, message: `id "${result.data.id}" must match the file name` });
      continue;
    }
    paths.push({ file, data: result.data });
  }
  return paths;
}

// [[node-id]] or [[node-id|label]]
const LINK = /\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g;

export function wikiLinks(body: string): string[] {
  return [...stripCode(body).matchAll(LINK)].map((m) => m[1]!.trim());
}

export function stripCode(body: string): string {
  return body.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
}

export function headings(body: string): string[] {
  return [...stripCode(body).matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]!.trim());
}

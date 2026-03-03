import { getCollection } from "astro:content";

export type Snippet = {
  slug: string;
  title: string;
  description: string;
  category: string;
  type: string;
  tags: string[];
  code: string;
  created_at: string;
  updated_at: string;
};

function normalizeDate(value: string | Date): string {
  if (typeof value === "string") return value;
  return value.toISOString().slice(0, 10);
}

export async function loadSnippets(): Promise<Snippet[]> {
  const entries = await getCollection("snippets");

  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      type: entry.data.type,
      tags: entry.data.tags,
      code: entry.body.trim(),
      created_at: normalizeDate(entry.data.createdAt),
      updated_at: normalizeDate(entry.data.updatedAt),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "ja"));
}

export function groupByCategory(snippets: Snippet[]): Record<string, Snippet[]> {
  return snippets.reduce<Record<string, Snippet[]>>((acc, snippet) => {
    acc[snippet.category] ??= [];
    acc[snippet.category].push(snippet);
    return acc;
  }, {});
}

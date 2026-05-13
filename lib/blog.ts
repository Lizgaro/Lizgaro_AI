import fs from "node:fs";
import path from "node:path";

export type BlogPostStatus = "draft" | "published";
export type BlogPostSourceType = "manual" | "phase" | "voice" | "research" | "case";

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  author: "Артём Лизгаро";
  readingTime?: string;
  status: BlogPostStatus;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  canonical?: string;
  relatedPosts?: string[];
  sourceType: BlogPostSourceType;
  publishToSocial: boolean;
  content: string;
  html: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

function getBlogFiles() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "");
}

function parseScalar(value: string) {
  const clean = stripQuotes(value.trim());

  if (clean === "true") return true;
  if (clean === "false") return false;
  if (clean === "[]") return [];
  if (clean.startsWith("[") && clean.endsWith("]")) {
    return clean
      .slice(1, -1)
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  return clean;
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: source };
  }

  const [, frontmatter, content] = match;
  const lines = frontmatter.split(/\r?\n/);
  const data: Record<string, unknown> = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

    if (!keyMatch) continue;

    const [, key, rawValue] = keyMatch;

    if (rawValue.trim()) {
      data[key] = parseScalar(rawValue);
      continue;
    }

    const values: string[] = [];
    while (lines[index + 1]?.match(/^\s+-\s+/)) {
      index += 1;
      values.push(stripQuotes(lines[index].replace(/^\s+-\s+/, "").trim()));
    }
    data[key] = values;
  }

  return { data, content };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderInline(markdown: string) {
  let html = escapeHtml(markdown);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, url: string) => {
    const safeLabel = label;
    const safeUrl = url.startsWith("http") || url.startsWith("/") || url.startsWith("mailto:") ? url : "#";
    const externalAttrs = safeUrl.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
    return `<a href="${safeUrl}"${externalAttrs}>${safeLabel}</a>`;
  });

  return html;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (!listItems.length) return;
    html.push(`<ul>${listItems.map((item) => `<li>${item}</li>`).join("")}</ul>`);
    listItems = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(renderInline(trimmed.slice(2)));
      continue;
    }

    flushList();

    if (trimmed.startsWith("### ")) {
      html.push(`<h3>${renderInline(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      html.push(`<h2>${renderInline(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("# ")) {
      html.push(`<h1>${renderInline(trimmed.slice(2))}</h1>`);
    } else {
      html.push(`<p>${renderInline(trimmed)}</p>`);
    }
  }

  flushList();
  return html.join("\n");
}

function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} мин`;
}

function stripLeadingMarkdownTitle(content: string) {
  return content.replace(/^#\s+.+\r?\n+/, "");
}

function normalizePost(fileName: string): BlogPost {
  const filePath = path.join(blogDirectory, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(raw);
  const bodyContent = stripLeadingMarkdownTitle(content);
  const fallbackSlug = fileName.replace(/\.(md|mdx)$/i, "");

  return {
    title: String(data.title || fallbackSlug),
    description: String(data.description || ""),
    slug: String(data.slug || fallbackSlug),
    date: String(data.date || ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    category: String(data.category || "Без категории"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: "Артём Лизгаро",
    readingTime: data.readingTime ? String(data.readingTime) : calculateReadingTime(bodyContent),
    status: data.status === "published" ? "published" : "draft",
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    ogImage: data.ogImage ? String(data.ogImage) : undefined,
    canonical: data.canonical ? String(data.canonical) : undefined,
    relatedPosts: Array.isArray(data.relatedPosts) ? data.relatedPosts.map(String) : [],
    sourceType: ["manual", "phase", "voice", "research", "case"].includes(String(data.sourceType))
      ? (String(data.sourceType) as BlogPostSourceType)
      : "manual",
    publishToSocial: data.publishToSocial === true,
    content: bodyContent,
    html: markdownToHtml(bodyContent)
  };
}

function isValidUrl(value: string) {
  try {
    // Relative URLs are valid for local assets.
    if (value.startsWith("/")) return true;
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function validatePublishedPosts(posts: BlogPost[]) {
  const publishedPosts = posts.filter((post) => post.status === "published");
  const seenSlugs = new Set<string>();

  for (const post of publishedPosts) {
    const missingFields = ["title", "description", "slug", "date", "category"].filter((field) => {
      const value = post[field as keyof BlogPost];
      return typeof value !== "string" || !value.trim();
    });

    if (missingFields.length) {
      throw new Error(`Published blog post "${post.slug || post.title}" misses fields: ${missingFields.join(", ")}`);
    }

    if (Number.isNaN(new Date(post.date).getTime())) {
      throw new Error(`Published blog post "${post.slug}" has invalid date: ${post.date}`);
    }

    if (seenSlugs.has(post.slug)) {
      throw new Error(`Duplicate published blog slug: ${post.slug}`);
    }
    seenSlugs.add(post.slug);

    if (post.canonical && !isValidUrl(post.canonical)) {
      throw new Error(`Published blog post "${post.slug}" has invalid canonical URL: ${post.canonical}`);
    }

    if (post.ogImage && !isValidUrl(post.ogImage)) {
      throw new Error(`Published blog post "${post.slug}" has invalid ogImage URL: ${post.ogImage}`);
    }
  }
}

export function getAllPosts() {
  const posts = getBlogFiles()
    .map(normalizePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  validatePublishedPosts(posts);
  return posts;
}

export function getPublishedPosts() {
  return getAllPosts().filter((post) => post.status === "published");
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(getPublishedPosts().map((post) => post.category))).sort((a, b) => a.localeCompare(b, "ru"));
}

export function getTags() {
  return Array.from(new Set(getPublishedPosts().flatMap((post) => post.tags))).sort((a, b) => a.localeCompare(b, "ru"));
}

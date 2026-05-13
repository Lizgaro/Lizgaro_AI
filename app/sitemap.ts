import type { MetadataRoute } from "next";
import { getCategories, getPublishedPosts, getTags } from "@/lib/blog";
import { projectDetails } from "@/data/projectDetails";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const posts = getPublishedPosts();
  const categories = getCategories();
  const tags = getTags();
  const siteUpdatedAt = new Date(siteConfig.updatedAt);

  return [
    {
      url: baseUrl,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.7
    },
    ...projectDetails.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.65
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/blog/category/${encodeURIComponent(category)}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.45
    })),
    ...tags.map((tag) => ({
      url: `${baseUrl}/tags/${encodeURIComponent(tag)}`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.35
    }))
  ];
}

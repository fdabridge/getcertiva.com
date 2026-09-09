import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.getcertiva.com";
  const now = new Date();

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${base}/features`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/how-it-works`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/ai`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ].map((r) => ({ ...r, lastModified: now }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Certiva ISO Certification Insights",
  description:
    "Guides and analysis for ISO certification body professionals. Accreditation compliance, audit management, AI, digital transformation.",
  alternates: { canonical: "https://www.getcertiva.com/blog" },
};

const categoryColors: Record<string, string> = {
  Platform: "bg-emerald-100 text-emerald-700",
  Accreditation: "bg-amber-100 text-amber-700",
  AI: "bg-violet-100 text-violet-700",
  Operations: "bg-blue-100 text-blue-700",
  Industry: "bg-gray-100 text-gray-700",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section className="bg-[var(--bg-dark)] pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white">
            Certiva Insights
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Guides, analysis, and thought leadership for certification body
            professionals.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <div className="sticky top-16 z-30 border-b border-gray-200 bg-white py-4 px-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Topics:</span>
          {BLOG_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${categoryColors[cat] || "bg-gray-100 text-gray-700"}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Post grid */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[var(--certiva-pale)] hover:shadow-[0_4px_24px_rgba(26,71,49,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-base font-bold text-gray-900 group-hover:text-[var(--certiva-green)] transition line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-gray-400">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

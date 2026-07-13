import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Certiva`,
    description: post.excerpt,
    alternates: { canonical: `https://getcertiva.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const categoryColors: Record<string, string> = {
  Platform: "bg-emerald-100 text-emerald-700",
  Accreditation: "bg-amber-100 text-amber-700",
  AI: "bg-violet-100 text-violet-700",
  Operations: "bg-blue-100 text-blue-700",
  Industry: "bg-gray-100 text-gray-700",
};

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-7 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /^- (.+)$/gm,
      '<li class="flex items-start gap-2 mb-2"><span class="text-[var(--certiva-green)] mt-1 shrink-0">&#x2022;</span><span>$1</span></li>'
    )
    .replace(/^(\d+)\. (.+)$/gm, '<li class="mb-2"><strong>$1.</strong> $2</li>')
    .replace(
      /^(?!<[h|l])(.*\S.*)$/gm,
      '<p class="text-gray-600 leading-relaxed mb-4">$1</p>'
    )
    .replace(/<\/li>\n/g, "</li>")
    .replace(
      /(<li.*<\/li>\n?)+/g,
      (match) => `<ul class="space-y-1 my-4 pl-1">${match}</ul>`
    );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  return (
    <>
      <section className="bg-[var(--bg-dark)] pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            &larr; Back to Blog
          </Link>
          <div className="mt-6">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}
            >
              {post.category}
            </span>
          </div>
          <h1 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-black tracking-[-0.02em] text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            {post.date} &middot; {post.readTime} read
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <article className="mx-auto max-w-3xl px-6">
          <div
            className="prose-certiva"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </article>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[var(--certiva-pale)] hover:shadow-md"
                >
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold ${categoryColors[r.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {r.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-[var(--certiva-green)] transition">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

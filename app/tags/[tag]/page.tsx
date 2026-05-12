import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPublishedPosts } from "@/lib/blog";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  const tags = Array.from(new Set(getPublishedPosts().flatMap((post) => post.tags)));
  return tags.map((tag) => ({ tag }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `#${decodedTag} — Блог Артёма Лизгаро`,
    description: `Материалы по тегу ${decodedTag}: AI, сайты, боты, монетизация, Life OS и контент-системы.`,
    alternates: {
      canonical: `${siteConfig.siteUrl}/tags/${encodeURIComponent(decodedTag)}`
    }
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPublishedPosts().filter((post) => post.tags.includes(decodedTag));

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase text-lime">Тег</p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl">
            #{decodedTag}
          </h1>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.length ? (
              posts.map((post) => (
                <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-surface p-6">
                  <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-text">{post.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{post.description}</p>
                  <a href={`/blog/${post.slug}`} className="mt-6 inline-block text-sm font-semibold text-lime">
                    Читать
                  </a>
                </article>
              ))
            ) : (
              <p className="text-lg leading-8 text-muted">По этому тегу пока нет опубликованных статей.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

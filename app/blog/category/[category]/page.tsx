import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPublishedPosts } from "@/lib/blog";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  const categories = Array.from(new Set(getPublishedPosts().map((post) => post.category)));
  return categories.map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);

  return {
    title: `${decodedCategory} — Блог Артёма Лизгаро`,
    description: `Статьи в категории ${decodedCategory}: сайты, боты, AI, заявки, Life OS и блог как медиа-слой.`,
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/category/${encodeURIComponent(decodedCategory)}`
    }
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const posts = getPublishedPosts().filter((post) => post.category === decodedCategory);

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase text-lime">Категория</p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl">
            {decodedCategory}
          </h1>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.length ? (
              posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="interactive-card group block overflow-hidden rounded-[2rem] border border-white/10 bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <article>
                    {post.ogImage ? (
                      <img
                        src={post.ogImage}
                        alt={`Обложка статьи: ${post.title}`}
                        className="aspect-[1200/630] w-full border-b border-white/10 object-cover"
                      />
                    ) : null}
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold leading-tight text-text transition group-hover:text-lime">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-muted">{post.description}</p>
                      <p className="mt-6 text-sm font-semibold text-lime">
                        Читать <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
                      </p>
                    </div>
                  </article>
                </a>
              ))
            ) : (
              <p className="text-lg leading-8 text-muted">В этой категории пока нет опубликованных статей.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

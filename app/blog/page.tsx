import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCategories, getPublishedPosts, getTags } from "@/lib/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Блог - Артём Лизгаро",
  description:
    "Будущие статьи Артёма Лизгаро о сайтах, Telegram-ботах, AI, монетизации, Life OS и создании продуктов.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/blog`
  },
  openGraph: {
    title: "Блог - Артём Лизгаро",
    description: "Статьи о сайтах, Telegram-ботах, AI, монетизации, Life OS и создании продуктов.",
    url: `${siteConfig.siteUrl}/blog`,
    type: "website",
    locale: "ru_RU"
  }
};

export default function BlogPage() {
  const posts = getPublishedPosts();
  const categories = getCategories();
  const tags = getTags();

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase text-lime">Blog / SEO / GEO</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl lg:text-8xl">
            Блог
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Здесь будут статьи о сайтах, Telegram-ботах, AI, монетизации, Life OS и создании продуктов. Сейчас
            архитектура готова, но реальные статьи не публикуются без отдельного подтверждения.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-7xl">
          {posts.length ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-surface p-6">
                  <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-text">{post.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{post.description}</p>
                  <a href={`/blog/${post.slug}`} className="mt-6 inline-block text-sm font-semibold text-lime">
                    Читать
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
              <p className="font-display text-4xl font-black uppercase leading-none text-text sm:text-6xl">
                Блог готовится.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Первый файл в `content/blog` сейчас имеет статус draft. Он нужен как шаблон будущих материалов и не
                выводится публично.
              </p>
            </div>
          )}
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-surface p-6">
            <p className="font-mono text-xs uppercase text-lime">Категории</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.length ? (
                categories.map((category) => (
                  <a
                    key={category}
                    href={`/blog/category/${encodeURIComponent(category)}`}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted hover:text-lime"
                  >
                    {category}
                  </a>
                ))
              ) : (
                <p className="text-sm leading-6 text-muted">Категории появятся вместе с опубликованными статьями.</p>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-surface p-6">
            <p className="font-mono text-xs uppercase text-lime">Теги</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.length ? (
                tags.map((tag) => (
                  <a
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted hover:text-lime"
                  >
                    {tag}
                  </a>
                ))
              ) : (
                <p className="text-sm leading-6 text-muted">Теги появятся вместе с опубликованными статьями.</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

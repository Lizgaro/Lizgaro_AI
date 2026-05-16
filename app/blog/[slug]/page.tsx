import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Статья не найдена - Артём Лизгаро"
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    alternates: {
      canonical: post.canonical || `${siteConfig.siteUrl}/blog/${post.slug}`
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article",
      locale: "ru_RU",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.ogImage || siteConfig.media.ogImage,
          width: 1200,
          height: 630,
          alt: `Обложка статьи: ${post.title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: [post.ogImage || siteConfig.media.ogImage]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;
  const imageUrl = new URL(post.ogImage || siteConfig.media.ogImage, siteConfig.siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author
    },
    mainEntityOfPage: postUrl,
    keywords: post.tags.join(", ")
  };

  const nextRoutes = [
    {
      title: "Life OS",
      description: "Как я собираю личный контекст, проекты и AI-агентов в рабочую базу.",
      href: "/projects/life-os"
    },
    {
      title: "Личная ОС роста",
      description: "Продукт про привычки, мысли, цели и спокойное движение к результату.",
      href: "/projects/growth-os"
    },
    {
      title: "Обсудить задачу",
      description: "Если хочешь разобрать сайт, бота, блог, продукт или воронку.",
      href: siteConfig.contacts.telegram
    }
  ];

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <article className="mx-auto max-w-5xl">
          <header className="rounded-[2.5rem] border border-white/10 bg-surface p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{post.description}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
              <span>{post.date}</span>
              <span>/</span>
              <span>{post.readingTime}</span>
              <span>/</span>
              <span>{post.author}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.slice(0, 6).map((tag) => (
                <a
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition hover:border-lime/40 hover:text-lime"
                >
                  {tag}
                </a>
              ))}
            </div>
          </header>

          {post.ogImage ? (
            <img
              src={post.ogImage}
              alt={`Обложка статьи: ${post.title}`}
              className="article-cover mt-6 aspect-[1200/630] w-full rounded-[2rem] border border-white/10 object-cover"
            />
          ) : null}

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-surface/50 p-5 sm:p-8">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <section className="mt-8 rounded-[2rem] border border-white/10 bg-surface p-5 sm:p-6">
            <p className="font-mono text-xs uppercase text-lime">Дальше по теме</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {nextRoutes.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="interactive-card group rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <span className="block text-lg font-semibold text-text transition group-hover:text-lime">
                    {item.title}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-muted">{item.description}</span>
                  <span className="mt-4 block text-sm font-semibold text-lime">
                    Открыть <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

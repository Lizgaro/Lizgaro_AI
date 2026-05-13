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
      images: post.ogImage ? [post.ogImage] : ["/icon.svg"]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.description,
      images: post.ogImage ? [post.ogImage] : ["/icon.svg"]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author
    },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
    keywords: post.tags.join(", ")
  };

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <article className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
            <span>{post.date}</span>
            <span>/</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-10 markdown-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

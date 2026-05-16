import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProjectDetail, getProjectDetailUrl, projectDetails } from "@/data/projectDetails";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {
      title: "Проект не найден - Артём Лизгаро"
    };
  }

  const url = getProjectDetailUrl(project.slug);

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url,
      type: "article",
      locale: "ru_RU",
      siteName: siteConfig.name,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.coverAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
      images: [project.coverImage]
    }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = getProjectDetailUrl(project.slug);
  const imageUrl = new URL(project.coverImage, siteConfig.siteUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.seoDescription,
    image: imageUrl,
    url: projectUrl,
    author: {
      "@type": "Person",
      name: siteConfig.name
    },
    keywords: [...project.why, ...project.inside].join(", ")
  };

  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-lime">{project.eyebrow}</p>
              <h1 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-lime">{project.hook}</p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.intro}</p>
            </div>

            <aside className="rounded-[2rem] border border-lime/20 bg-lime/[0.06] p-6 shadow-glow">
              <img
                src={project.coverImage}
                alt={project.coverAlt}
                className="mb-6 aspect-[1200/630] w-full rounded-[1.35rem] border border-white/10 object-cover"
              />
              <p className="font-mono text-xs uppercase text-lime">{project.statusLabel}</p>
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none text-text">
                {project.subtitle}
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={siteConfig.fallbackCtaHref}>{project.primaryCta}</ButtonLink>
                <ButtonLink href={siteConfig.fallbackCtaHref} variant="secondary">
                  {project.secondaryCta}
                </ButtonLink>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-3">
          {[
            ["Проблема", project.problem],
            ["Решение", project.solution],
            ["Польза", project.value]
          ].map(([title, text]) => (
            <article key={title} className="interactive-card rounded-[2rem] border border-white/10 bg-surface p-6">
              <p className="font-mono text-xs uppercase text-lime">{title}</p>
              <p className="mt-4 text-base leading-7 text-muted">{text}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-[0.8fr_1fr]">
          <article className="interactive-card rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Простыми словами</p>
            <div className="mt-5 grid gap-4">
              {project.simple.map((item) => (
                <p key={item} className="text-lg leading-8 text-muted">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="interactive-card rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Зачем я это делаю</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.why.map((item) => (
                <span key={item} className="interactive-chip rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-2">
          <article className="interactive-card rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Что внутри</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.inside.map((item) => (
                <li key={item} className="interactive-chip rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="interactive-card rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Для кого это полезно</p>
            <ul className="mt-6 grid gap-3">
              {project.audience.map((item) => (
                <li key={item} className="border-t border-white/10 pt-3 text-base leading-7 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto mt-14 max-w-7xl">
          <div className="rounded-[2.5rem] border border-lime/20 bg-lime text-ink p-6 sm:p-10">
            <p className="font-mono text-xs uppercase text-ink/65">Главная мысль</p>
            <p className="mt-5 max-w-5xl text-2xl font-semibold leading-9 text-ink sm:text-3xl sm:leading-10">
              {project.finalText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="ink">
                {project.primaryCta}
              </ButtonLink>
              <ButtonLink href="/blog" variant="inkGhost">
                Читать блог
              </ButtonLink>
              <ButtonLink href="/#projects" variant="inkGhost">
                Вернуться к проектам
              </ButtonLink>
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}

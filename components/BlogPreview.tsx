import { getPublishedPosts } from "@/lib/blog";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function BlogPreview() {
  const posts = getPublishedPosts().slice(0, 3);

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="blog"
          label="07 / Blog"
          title="Блог"
          description="Статьи о сайтах, Telegram-ботах, AI, монетизации, Life OS и создании продуктов."
        />

        {posts.length ? (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
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
                    <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-text transition group-hover:text-lime">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{post.description}</p>
                    <div className="mt-6 flex items-center justify-between gap-4 text-sm font-semibold text-lime">
                      <span>Открыть статью</span>
                      <span aria-hidden="true" className="arrow-shift">
                        -&gt;
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              Блог готовится.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Здесь будут статьи о сайтах, Telegram-ботах, AI, монетизации, Life OS и создании продуктов. Публиковаться
              будут только готовые материалы, а не сырые заметки.
            </p>
            <div className="mt-8">
              <ButtonLink href="/blog" variant="secondary">
                Открыть блог
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

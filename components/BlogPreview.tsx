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
          label="08 / Blog"
          title="Блог и будущие статьи"
          description="Блог готовится как SEO/GEO-актив: статьи из разборов, фаз, голосовых заметок, проектов и исследований."
        />

        {posts.length ? (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-surface p-6">
                <p className="font-mono text-xs uppercase text-lime">{post.category}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-text">{post.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{post.description}</p>
                <a href={`/blog/${post.slug}`} className="mt-6 inline-block text-sm font-semibold text-lime">
                  Читать
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-display text-4xl font-black uppercase leading-none text-text sm:text-6xl">
              Блог скоро появится.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Здесь будут разборы о сайтах, Telegram-ботах, AI, монетизации, Life OS и управлении
              проектами через фазы. Сейчас архитектура готовится, но реальные статьи не публикуются
              без отдельного задания.
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

import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="about"
          label="01 / About"
          title={siteConfig.about.title}
          description="Короткая траектория вместо длинной биографии: практическая среда, AI, маркетинг, продукты и действие."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-display text-4xl font-black uppercase leading-none text-lime sm:text-6xl">
              Видеть суть.
              <br />
              Собирать систему.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">{siteConfig.about.signal}</p>
          </div>
          <div className="grid gap-5">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="border-t border-white/10 pt-5 text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

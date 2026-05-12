type SectionHeadingProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-28">
      <p className="font-mono text-xs uppercase text-lime">{label}</p>
      <div className="mt-4 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[0.92fr_0.78fr]">
        <h2 className="max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] text-text sm:text-5xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

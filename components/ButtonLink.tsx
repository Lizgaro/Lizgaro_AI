type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "ink" | "inkGhost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const styles = {
    primary:
      "border-lime bg-lime text-ink hover:bg-mint hover:border-mint shadow-[0_0_32px_rgba(185,255,61,0.18)]",
    secondary:
      "border-white/15 bg-white/[0.03] text-text hover:border-lime/50 hover:bg-lime/10",
    ghost: "border-white/10 bg-transparent text-text hover:border-lime/40 hover:text-lime",
    ink: "border-ink/20 bg-ink text-text hover:bg-surface",
    inkGhost: "border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink/5"
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

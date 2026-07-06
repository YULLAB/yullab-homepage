type SectionProps = {
  id: string;
  eyebrow: string;
  tone?: "base" | "soft";
  children: React.ReactNode;
};

export function Section({ id, eyebrow, tone = "base", children }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${tone === "soft" ? "section-soft" : ""}`}>
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

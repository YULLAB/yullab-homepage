type SiteHeaderProps = {
  current?: "home" | "ese";
};

export function SiteHeader({ current = "home" }: SiteHeaderProps) {
  const links = [
    { href: "/#technology", label: "기술" },
    { href: "/ese", label: "ESE" },
    { href: "/#products", label: "제품" },
    { href: "/#validation", label: "연구 기반" },
    { href: "/#contact", label: "문의" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/76 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="text-sm font-bold text-primary">
          YULLAB
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-primary ${
                current === "ese" && link.href === "/ese" ? "text-accent" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

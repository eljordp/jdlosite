import Link from "next/link";
import { GlowLink } from "@/components/GlowButton";

const disciplines = [
  { label: "AI & Automation", href: "/courses/ai-automation", slug: "ai-automation" },
  { label: "Sales Systems", href: "/courses/sales-systems", slug: "sales-systems" },
  { label: "Prompt Engineering", href: "/courses/prompt-engineering", slug: "prompt-engineering" },
  { label: "Content & Brand", href: "/courses/content-brand", slug: "content-brand" },
  { label: "Team & Ops", href: "/courses/team-operations", slug: "team-operations" },
  { label: "Mentorship", href: "/mentorship", slug: "mentorship" },
];

interface PageShellProps {
  children: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  activeSlug?: string;
}

export default function PageShell({ children, ctaText, ctaHref, activeSlug }: PageShellProps) {
  const activeIdx = activeSlug ? disciplines.findIndex((d) => d.slug === activeSlug) : -1;
  const prev = activeIdx > 0 ? disciplines[activeIdx - 1] : null;
  const next = activeIdx !== -1 && activeIdx < disciplines.length - 1 ? disciplines[activeIdx + 1] : null;

  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between gap-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight shrink-0">
            JDLO
          </Link>

          {/* Discipline links */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {disciplines.map((d) => {
              const isActive = activeSlug === d.slug;
              return (
                <Link
                  key={d.slug}
                  href={d.href}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[12px] transition-all duration-300 ${
                    isActive
                      ? "bg-accent/10 text-accent font-medium"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {d.label}
                </Link>
              );
            })}
          </div>

          <GlowLink href={ctaHref} className="!py-1.5 !px-4 !text-[13px] shrink-0">
            {ctaText}
          </GlowLink>
        </div>
      </nav>
      <div className="pt-12">{children}</div>
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between gap-6">
            {/* Prev */}
            {prev ? (
              <Link
                href={prev.href}
                className="group flex items-center gap-3 text-text-muted hover:text-text transition-colors duration-300"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-mono mb-0.5">Previous</p>
                  <p className="text-[13px] font-medium">{prev.label}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/"
              className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300 shrink-0"
            >
              JDLO
            </Link>

            {/* Next */}
            {next ? (
              <Link
                href={next.href}
                className="group flex items-center gap-3 text-right text-text-muted hover:text-text transition-colors duration-300"
              >
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-mono mb-0.5">Next</p>
                  <p className="text-[13px] font-medium">{next.label}</p>
                </div>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}

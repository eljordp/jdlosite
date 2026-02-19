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
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <Link
            href="/"
            className="text-text-muted text-[13px] hover:text-text transition-colors duration-300"
          >
            &larr; Back to JDLO
          </Link>
        </div>
      </footer>
    </main>
  );
}

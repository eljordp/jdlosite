import Link from "next/link";

interface PageShellProps {
  children: React.ReactNode;
  ctaText: string;
  ctaHref: string;
}

export default function PageShell({ children, ctaText, ctaHref }: PageShellProps) {
  return (
    <main className="grid-bg">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-mono text-green text-sm font-bold tracking-wider">
              JDLO
            </Link>
            <span className="text-border-bright">|</span>
            <Link href="/" className="text-text-dim text-xs font-mono hover:text-text-mid transition-colors">
              ← BACK
            </Link>
          </div>
          <a
            href={ctaHref}
            className="border border-green/30 text-green px-4 py-1.5 text-xs font-mono hover:bg-green/10 transition-colors"
          >
            {ctaText} →
          </a>
        </div>
      </nav>
      <div className="pt-14">{children}</div>
      <footer className="border-t border-border py-8 text-center">
        <Link href="/" className="font-mono text-text-dim text-[11px] hover:text-text transition-colors">
          ← JDLO.SITE
        </Link>
      </footer>
    </main>
  );
}

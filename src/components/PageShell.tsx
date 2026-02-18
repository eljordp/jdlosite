import Link from "next/link";

interface PageShellProps {
  children: React.ReactNode;
  ctaText: string;
  ctaHref: string;
}

export default function PageShell({ children, ctaText, ctaHref }: PageShellProps) {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm tracking-[0.2em]">
            JDLO
          </Link>
          <a
            href={ctaHref}
            className="text-[13px] text-text hover:text-accent transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </nav>
      <div className="pt-16">{children}</div>
      <footer className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="divider mb-10" />
          <div className="text-center">
            <Link
              href="/"
              className="text-text-muted text-[13px] hover:text-text transition-colors"
            >
              &larr; Back to JDLO
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

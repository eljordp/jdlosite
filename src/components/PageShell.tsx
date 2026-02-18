import Link from "next/link";

interface PageShellProps {
  children: React.ReactNode;
  ctaText: string;
  ctaHref: string;
}

export default function PageShell({ children, ctaText, ctaHref }: PageShellProps) {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            JDLO
          </Link>
          <a href={ctaHref} className="glow-btn !py-1.5 !px-4 !text-[13px]">
            {ctaText}
          </a>
        </div>
      </nav>
      <div className="pt-12">{children}</div>
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
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

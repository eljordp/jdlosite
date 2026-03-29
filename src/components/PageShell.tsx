'use client';

import { useState } from "react";
import Link from "next/link";
import { GlowLink } from "@/components/GlowButton";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

interface PageShellProps {
  children: React.ReactNode;
  activeSlug?: string;
}

export default function PageShell({ children, activeSlug }: PageShellProps) {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between gap-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight shrink-0">
            JDLO
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[13px] text-text-secondary">
            {navLinks.map((link) => {
              const isActive = activeSlug === link.label.toLowerCase();
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-text transition-colors duration-300 ${isActive ? "text-text font-medium" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <GlowLink href="/contact" className="!py-1.5 !px-4 !text-[13px] shrink-0">
              Let&apos;s Talk
            </GlowLink>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-1 text-text-muted hover:text-text transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
                <rect width="20" height="1.5" rx="0.75" />
                <rect y="6.25" width="20" height="1.5" rx="0.75" />
                <rect y="12.5" width="20" height="1.5" rx="0.75" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link href="/" onClick={() => setOpen(false)} className="text-[15px] font-semibold tracking-tight">
            JDLO
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-text-muted hover:text-text text-4xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[2rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0 ${
                activeSlug === link.label.toLowerCase() ? 'text-accent' : 'text-text-secondary hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pt-8">
          <GlowLink href="/contact" className="w-full justify-center">
            Let&apos;s Talk
          </GlowLink>
        </div>
      </div>

      <div className="pt-12">{children}</div>
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
            <Link href="/about" className="text-text-muted text-[12px] hover:text-text transition-colors">About</Link>
            <Link href="/contact" className="text-text-muted text-[12px] hover:text-text transition-colors">Contact</Link>
            <Link href="/terms" className="text-text-muted text-[12px] hover:text-text transition-colors">Terms</Link>
            <Link href="/privacy" className="text-text-muted text-[12px] hover:text-text transition-colors">Privacy</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
            <span className="text-text-muted text-[11px] font-mono tracking-wider">
              &copy; {new Date().getFullYear()} JDLO
            </span>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="text-text-muted text-[12px] font-mono hover:text-text transition-colors">@jdlo</a>
              <a href="mailto:eljordp@gmail.com" className="text-text-muted text-[12px] font-mono hover:text-text transition-colors">eljordp@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

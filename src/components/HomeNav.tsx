'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlowLink } from '@/components/GlowButton';
import { usePortal } from '@/components/PortalTransition';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function HomeNav() {
  const [open, setOpen] = useState(false);
  const { portal } = usePortal();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            JDLO
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-[13px] text-text-secondary">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-text transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => portal('/academy', 'to-academy')}
              className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-text-secondary hover:text-text transition-colors duration-300 font-mono tracking-wide"
            >
              Academy <span className="text-text-muted">↗</span>
            </button>
            <GlowLink href="/contact" className="!py-1.5 !px-5 !text-[13px]">
              Let&apos;s Talk
            </GlowLink>
            {/* Mobile hamburger */}
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
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[1.5rem] sm:text-[2rem] font-semibold tracking-[-0.03em] text-text-secondary hover:text-text transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); portal('/academy', 'to-academy'); }}
            className="text-left text-[1.5rem] sm:text-[2rem] font-semibold tracking-[-0.03em] text-text-secondary hover:text-text transition-colors duration-200 py-2.5"
          >
            Academy ↗
          </button>
        </div>

        <div className="pt-8">
          <GlowLink href="/contact" className="w-full justify-center">
            Let&apos;s Talk
          </GlowLink>
        </div>
      </div>
    </>
  );
}

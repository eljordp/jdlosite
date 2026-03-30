'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePortal } from '@/components/PortalTransition';
import { usePathname } from 'next/navigation';

export default function AcademyNav() {
  const [open, setOpen] = useState(false);
  const { portal } = usePortal();
  const pathname = usePathname();

  const isDashboard = pathname.startsWith('/academy/dashboard');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]/90 backdrop-blur-lg">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/academy" className="text-[15px] font-semibold tracking-tight text-[#f5f5f5]">
            JDLO Academy
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[#a3a3a3]">
            <Link href="/academy" className="hover:text-[#f5f5f5] transition-colors duration-300">
              Home
            </Link>
            {isDashboard && (
              <Link href="/academy/dashboard" className="hover:text-[#f5f5f5] transition-colors duration-300">
                Dashboard
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => portal('/', 'to-services')}
              className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-[#525252] hover:text-[#f5f5f5] transition-colors duration-300 font-mono tracking-wide"
            >
              ← Services
            </button>
            {!isDashboard ? (
              <Link
                href="/academy/login"
                className="inline-flex items-center justify-center px-5 py-1.5 text-[13px] font-medium rounded-full border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300"
              >
                Sign in
              </Link>
            ) : null}
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-1 text-[#525252] hover:text-[#f5f5f5] transition-colors"
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
        className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link href="/academy" onClick={() => setOpen(false)} className="text-[15px] font-semibold tracking-tight text-[#f5f5f5]">
            JDLO Academy
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-[#525252] hover:text-[#f5f5f5] text-4xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col flex-1">
          <Link
            href="/academy"
            onClick={() => setOpen(false)}
            className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-200 py-2.5 border-b border-[rgba(255,255,255,0.06)]"
          >
            Home
          </Link>
          {isDashboard && (
            <Link
              href="/academy/dashboard"
              onClick={() => setOpen(false)}
              className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors duration-200 py-2.5 border-b border-[rgba(255,255,255,0.06)]"
            >
              Dashboard
            </Link>
          )}
          <button
            onClick={() => { setOpen(false); portal('/', 'to-services'); }}
            className="text-left text-[1.5rem] font-semibold tracking-[-0.03em] text-[#525252] hover:text-[#f5f5f5] transition-colors duration-200 py-2.5"
          >
            ← Services
          </button>
        </div>

        <div className="pt-8">
          <Link
            href="/academy/login"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full px-6 py-3 text-[15px] font-medium rounded-xl border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}

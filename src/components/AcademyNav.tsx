'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePortal } from '@/components/PortalTransition';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AcademyNav() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { portal } = usePortal();
  const pathname = usePathname();

  const isLanding = pathname === '/academy';
  const isLogin = pathname.startsWith('/academy/login') || pathname.startsWith('/academy/subscribe');
  const isDashboard = pathname.startsWith('/academy/dashboard') || pathname.startsWith('/academy/lesson');

  useEffect(() => {
    const supabase = createClient();
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();
      setIsLoggedIn(!!data.user);
    }
    checkAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: import('@supabase/supabase-js').AuthChangeEvent, session: import('@supabase/supabase-js').Session | null) => {
        setIsLoggedIn(!!session?.user);
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
        isLanding
          ? 'border-b border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]/90'
          : 'border-b border-[#e5e5e5] bg-white/90'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            href="/academy"
            className={`text-[15px] font-semibold tracking-tight ${isLanding ? 'text-[#f5f5f5]' : 'text-[#111]'}`}
          >
            JDLO Academy
          </Link>

          {/* Desktop */}
          <div className={`hidden md:flex items-center gap-8 text-[13px] ${isLanding ? 'text-[#a3a3a3]' : 'text-[#555]'}`}>
            <Link
              href="/academy"
              className={`transition-colors duration-300 ${isLanding ? 'hover:text-[#f5f5f5]' : 'hover:text-[#111]'}`}
            >
              Home
            </Link>
            {isDashboard && (
              <>
                <Link
                  href="/academy/dashboard"
                  className={`transition-colors duration-300 ${isLanding ? 'hover:text-[#f5f5f5]' : 'hover:text-[#111]'}`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/academy/community"
                  className={`transition-colors duration-300 ${isLanding ? 'hover:text-[#f5f5f5]' : 'hover:text-[#111]'}`}
                >
                  Community
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => portal('/', 'to-services')}
              className={`hidden md:inline-flex items-center gap-1.5 text-[13px] transition-colors duration-300 font-mono tracking-wide ${
                isLanding ? 'text-[#525252] hover:text-[#f5f5f5]' : 'text-[#888] hover:text-[#111]'
              }`}
            >
              ← Services
            </button>
            {!isDashboard && !isLogin ? (
              <Link
                href={isLoggedIn ? '/academy/dashboard' : '/academy/login'}
                className={`inline-flex items-center justify-center px-5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                  isLanding
                    ? 'border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)]'
                    : 'border border-[#ddd] text-[#111] hover:bg-[#f5f5f5]'
                }`}
              >
                {isLoggedIn ? 'Dashboard' : 'Sign in'}
              </Link>
            ) : null}
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className={`md:hidden p-2 -mr-1 transition-colors ${
                isLanding ? 'text-[#525252] hover:text-[#f5f5f5]' : 'text-[#555] hover:text-[#111]'
              }`}
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
        className={`fixed inset-0 z-[100] flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
          isLanding ? 'bg-[#0a0a0a]' : 'bg-white'
        } ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/academy"
            onClick={() => setOpen(false)}
            className={`text-[15px] font-semibold tracking-tight ${isLanding ? 'text-[#f5f5f5]' : 'text-[#111]'}`}
          >
            JDLO Academy
          </Link>
          <button
            onClick={() => setOpen(false)}
            className={`text-4xl leading-none ${isLanding ? 'text-[#525252] hover:text-[#f5f5f5]' : 'text-[#888] hover:text-[#111]'}`}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col flex-1">
          <Link
            href="/academy"
            onClick={() => setOpen(false)}
            className={`text-[1.5rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 ${
              isLanding
                ? 'text-[#a3a3a3] hover:text-[#f5f5f5] border-b border-[rgba(255,255,255,0.06)]'
                : 'text-[#555] hover:text-[#111] border-b border-[#e5e5e5]'
            }`}
          >
            Home
          </Link>
          {isDashboard && (
            <>
              <Link
                href="/academy/dashboard"
                onClick={() => setOpen(false)}
                className={`text-[1.5rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 ${
                  isLanding
                    ? 'text-[#a3a3a3] hover:text-[#f5f5f5] border-b border-[rgba(255,255,255,0.06)]'
                    : 'text-[#555] hover:text-[#111] border-b border-[#e5e5e5]'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/academy/community"
                onClick={() => setOpen(false)}
                className={`text-[1.5rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 ${
                  isLanding
                    ? 'text-[#a3a3a3] hover:text-[#f5f5f5] border-b border-[rgba(255,255,255,0.06)]'
                    : 'text-[#555] hover:text-[#111] border-b border-[#e5e5e5]'
                }`}
              >
                Community
              </Link>
            </>
          )}
          <button
            onClick={() => { setOpen(false); portal('/', 'to-services'); }}
            className={`text-left text-[1.5rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 ${
              isLanding ? 'text-[#525252] hover:text-[#f5f5f5]' : 'text-[#888] hover:text-[#111]'
            }`}
          >
            ← Services
          </button>
        </div>

        {!isLogin && (
          <div className="pt-8">
            <Link
              href={isLoggedIn ? '/academy/dashboard' : '/academy/login'}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-center w-full px-6 py-3 text-[15px] font-medium rounded-xl transition-all duration-300 ${
                isLanding
                  ? 'border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)]'
                  : 'border border-[#ddd] text-[#111] hover:bg-[#f5f5f5]'
              }`}
            >
              {isLoggedIn ? 'Dashboard' : 'Sign in'}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

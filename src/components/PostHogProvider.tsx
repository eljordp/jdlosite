'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key) return;

    posthog.init(key, {
      api_host: host || 'https://us.i.posthog.com',
      defaults: '2026-01-30',
      capture_pageview: false, // manual via PageTracker
      capture_pageleave: true,
      autocapture: true,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}

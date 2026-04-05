'use client';

import { useState, useEffect } from 'react';

interface Drop {
  id: string;
  title: string;
  body: string;
  category: string;
  published_at: string;
}

interface WeeklyDropsFeedProps {
  initialDrops?: Drop[];
}

const CATEGORY_STYLES: Record<string, string> = {
  strategy: 'bg-blue-50 text-blue-700 border-blue-100',
  tool: 'bg-purple-50 text-purple-700 border-purple-100',
  mindset: 'bg-orange-50 text-orange-700 border-orange-100',
  'case-study': 'bg-green-50 text-green-700 border-green-100',
};

function daysAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

export default function WeeklyDropsFeed({ initialDrops }: WeeklyDropsFeedProps) {
  const [drops, setDrops] = useState<Drop[]>(initialDrops ?? []);
  const [loading, setLoading] = useState(!initialDrops);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (initialDrops) {
      // Already have initial data — don't re-fetch on mount
      // If initialDrops has fewer than total, we can still load more
      return;
    }
    async function fetchDrops() {
      try {
        const res = await fetch('/api/academy/drops');
        if (!res.ok) return;
        const json = await res.json();
        setDrops(json.drops ?? []);
        setAllLoaded(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDrops();
  }, [initialDrops]);

  async function loadMore() {
    setLoadingMore(true);
    try {
      const res = await fetch('/api/academy/drops');
      if (!res.ok) return;
      const json = await res.json();
      setDrops(json.drops ?? []);
      setAllLoaded(true);
    } finally {
      setLoadingMore(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-4 mt-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="animate-pulse h-24 bg-[#f5f5f5] rounded-xl" />
        ))}
      </div>
    );
  }

  if (drops.length === 0) {
    return (
      <p className="text-[13px] text-[#888] mt-4">First drop coming this week.</p>
    );
  }

  return (
    <div className="mt-4">
      <div className="space-y-0">
        {drops.map((drop, i) => {
          const badgeClass = CATEGORY_STYLES[drop.category] ?? 'bg-gray-50 text-gray-600 border-gray-100';
          return (
            <div key={drop.id}>
              <div className="py-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badgeClass}`}
                  >
                    {drop.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#bbb]">
                    {daysAgo(drop.published_at)}
                  </span>
                </div>
                <h4 className="text-[15px] font-semibold text-[#1a1a1a] leading-snug mb-2">
                  {drop.title}
                </h4>
                <p className="text-[13px] leading-[1.75] text-[#555]">{drop.body}</p>
              </div>
              {i < drops.length - 1 && (
                <div className="border-t border-[#f0f0f0]" />
              )}
            </div>
          );
        })}
      </div>

      {!allLoaded && (
        <button
          onClick={loadMore}
          disabled={loadingMore}
          className="mt-5 text-[12px] font-mono text-[#888] hover:text-[#1a1a1a] transition-colors disabled:opacity-50"
        >
          {loadingMore ? 'Loading...' : 'Load all drops'}
        </button>
      )}
    </div>
  );
}

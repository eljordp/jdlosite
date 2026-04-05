'use client';

import { useState, useEffect, useCallback } from 'react';

type Category = 'win' | 'question' | 'intro' | 'general';

interface Post {
  id: string;
  user_id: string;
  display_name: string;
  body: string;
  category: Category;
  likes: number;
  created_at: string;
  liked_by_me: boolean;
}

const CATEGORIES: { value: Category; label: string; emoji: string }[] = [
  { value: 'win', label: 'Win', emoji: '🏆' },
  { value: 'question', label: 'Question', emoji: '❓' },
  { value: 'intro', label: 'Intro', emoji: '👋' },
  { value: 'general', label: 'General', emoji: '💬' },
];

const CATEGORY_STYLES: Record<Category, string> = {
  win: 'bg-green-50 text-green-700 border-green-200',
  question: 'bg-blue-50 text-blue-700 border-blue-200',
  intro: 'bg-purple-50 text-purple-700 border-purple-200',
  general: 'bg-gray-100 text-gray-600 border-gray-200',
};

const CATEGORY_SELECTED_STYLES: Record<Category, string> = {
  win: 'bg-green-600 text-white border-green-600',
  question: 'bg-blue-600 text-white border-blue-600',
  intro: 'bg-purple-600 text-white border-purple-600',
  general: 'bg-[#111] text-white border-[#111]',
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function SkeletonCard() {
  return (
    <div className="border border-[#e5e5e5] rounded-xl p-5 animate-pulse">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-5 w-14 bg-gray-100 rounded-full" />
        <div className="h-4 w-24 bg-gray-100 rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-3/4" />
      </div>
      <div className="mt-4 h-4 w-12 bg-gray-100 rounded" />
    </div>
  );
}

interface Props {
  userId: string;
}

export default function CommunityFeed({ userId }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<Category | null>(null);

  // Composer state
  const [body, setBody] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('general');
  const [submitting, setSubmitting] = useState(false);

  // Like loading state per post
  const [likingPosts, setLikingPosts] = useState<Set<string>>(new Set());

  const fetchPosts = useCallback(async (category: Category | null) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: '0' });
      if (category) params.set('category', category);
      const res = await fetch(`/api/academy/community/posts?${params}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setPosts(data.posts ?? []);
      setTotal(data.total ?? 0);
    } catch {
      // silently fail — posts stay empty
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(filterCategory);
  }, [fetchPosts, filterCategory]);

  async function handleSubmit() {
    if (!body.trim() || submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/academy/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: body.trim(), category: selectedCategory }),
      });
      if (!res.ok) return;
      const data = await res.json();
      const newPost: Post = { ...data.post, liked_by_me: false };
      // Optimistically prepend — only show if matches current filter
      if (!filterCategory || filterCategory === newPost.category) {
        setPosts((prev) => [newPost, ...prev]);
        setTotal((t) => t + 1);
      }
      setBody('');
    } catch {
      // no-op
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLike(postId: string) {
    if (likingPosts.has(postId)) return;
    setLikingPosts((s) => new Set(s).add(postId));

    // Optimistic update
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, liked_by_me: !p.liked_by_me, likes: p.liked_by_me ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );

    try {
      const res = await fetch('/api/academy/community/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId }),
      });
      if (res.ok) {
        const data = await res.json();
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId ? { ...p, liked_by_me: data.liked, likes: data.count } : p
          )
        );
      } else {
        // Revert
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId
              ? { ...p, liked_by_me: !p.liked_by_me, likes: p.liked_by_me ? p.likes + 1 : p.likes - 1 }
              : p
          )
        );
      }
    } catch {
      // Revert on error
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? { ...p, liked_by_me: !p.liked_by_me, likes: p.liked_by_me ? p.likes + 1 : p.likes - 1 }
            : p
        )
      );
    } finally {
      setLikingPosts((s) => {
        const next = new Set(s);
        next.delete(postId);
        return next;
      });
    }
  }

  const charsLeft = 1000 - body.length;

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] pt-14">
      <div className="px-6 md:px-10 pb-24 max-w-[760px] mx-auto">

        {/* Header */}
        <div className="py-16 border-b border-[#e5e5e5] mb-10">
          <p className="text-[11px] font-mono tracking-[0.5em] uppercase text-[#888] mb-4">
            Community
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]">
            Post a win, ask a question, introduce yourself.
          </h1>
        </div>

        {/* Composer */}
        <div className="border border-[#e5e5e5] rounded-xl p-5 mb-8">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value.slice(0, 1000))}
            placeholder="What's on your mind?"
            rows={4}
            className="w-full resize-none bg-transparent text-[14px] text-[#1a1a1a] placeholder-[#aaa] outline-none leading-relaxed"
          />
          <div className="mt-3 border-t border-[#f0f0f0] pt-3 flex flex-col gap-3">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(({ value, label, emoji }) => {
                const isSelected = selectedCategory === value;
                return (
                  <button
                    key={value}
                    onClick={() => setSelectedCategory(value)}
                    className={`rounded-full px-3 py-1 text-[12px] border transition-colors ${
                      isSelected
                        ? CATEGORY_SELECTED_STYLES[value]
                        : 'border-[#e5e5e5] text-[#555] hover:border-[#ccc]'
                    }`}
                  >
                    {emoji} {label}
                  </button>
                );
              })}
            </div>

            {/* Submit row */}
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-mono ${charsLeft < 100 ? 'text-red-400' : 'text-[#bbb]'}`}>
                {charsLeft} left
              </span>
              <button
                onClick={handleSubmit}
                disabled={!body.trim() || submitting}
                className="bg-[#111] text-white rounded-xl px-5 py-2 text-[13px] font-medium disabled:opacity-40 transition-opacity"
              >
                {submitting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterCategory(null)}
            className={`rounded-full px-4 py-1.5 text-[12px] border transition-colors ${
              filterCategory === null
                ? 'bg-[#111] text-white border-[#111]'
                : 'border-[#e5e5e5] text-[#555] hover:border-[#ccc]'
            }`}
          >
            All
          </button>
          {CATEGORIES.map(({ value, label, emoji }) => (
            <button
              key={value}
              onClick={() => setFilterCategory(value === filterCategory ? null : value)}
              className={`rounded-full px-4 py-1.5 text-[12px] border transition-colors ${
                filterCategory === value
                  ? CATEGORY_SELECTED_STYLES[value]
                  : 'border-[#e5e5e5] text-[#555] hover:border-[#ccc]'
              }`}
            >
              {emoji} {label}s
            </button>
          ))}
        </div>

        {/* Feed */}
        {loading ? (
          <div className="space-y-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : posts.length === 0 ? (
          <div className="border border-[#e5e5e5] rounded-xl p-10 text-center">
            <p className="text-[#888] text-[14px]">No posts yet. Be the first to drop something.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => {
              const cat = CATEGORIES.find((c) => c.value === post.category);
              return (
                <article key={post.id} className="border border-[#e5e5e5] rounded-xl p-5">
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium border ${CATEGORY_STYLES[post.category]}`}
                    >
                      {cat?.emoji} {cat?.label}
                    </span>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">
                      {post.display_name}
                    </span>
                    <span className="text-[12px] text-[#aaa]">{timeAgo(post.created_at)}</span>
                  </div>

                  {/* Body */}
                  <p className="text-[14px] text-[#333] leading-relaxed whitespace-pre-wrap break-words">
                    {post.body}
                  </p>

                  {/* Like */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleLike(post.id)}
                      disabled={likingPosts.has(post.id)}
                      className={`inline-flex items-center gap-1.5 text-[13px] transition-colors ${
                        post.liked_by_me
                          ? 'text-red-500'
                          : 'text-[#aaa] hover:text-red-400'
                      }`}
                      aria-label={post.liked_by_me ? 'Unlike' : 'Like'}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill={post.liked_by_me ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span>{post.likes > 0 ? post.likes : ''}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}

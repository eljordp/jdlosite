import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

const VALID_CATEGORIES = ['win', 'question', 'general', 'intro'] as const;
const PAGE_SIZE = 20;

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') ?? '0', 10);
  const offset = page * PAGE_SIZE;

  let query = supabase
    .from('community_posts')
    .select('*, community_likes(user_id)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (category && VALID_CATEGORIES.includes(category as typeof VALID_CATEGORIES[number])) {
    query = query.eq('category', category);
  }

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const posts = (data ?? []).map((post) => ({
    id: post.id,
    user_id: post.user_id,
    display_name: post.display_name,
    body: post.body,
    category: post.category,
    likes: post.likes,
    created_at: post.created_at,
    liked_by_me: user
      ? (post.community_likes as { user_id: string }[]).some((l) => l.user_id === user.id)
      : false,
  }));

  return NextResponse.json({ posts, total: count ?? 0 });
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { body: postBody, category } = body;

  if (!postBody || typeof postBody !== 'string' || postBody.trim().length === 0) {
    return NextResponse.json({ error: 'Post body is required' }, { status: 400 });
  }

  if (postBody.length > 1000) {
    return NextResponse.json({ error: 'Post body must be 1000 characters or less' }, { status: 400 });
  }

  if (!category || !VALID_CATEGORIES.includes(category as typeof VALID_CATEGORIES[number])) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  const email = user.email ?? '';
  const display_name = email.includes('@') ? email.split('@')[0] : 'Operator';

  const { data, error } = await supabase
    .from('community_posts')
    .insert({
      user_id: user.id,
      display_name,
      body: postBody.trim(),
      category,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ post: { ...data, liked_by_me: false } }, { status: 201 });
}

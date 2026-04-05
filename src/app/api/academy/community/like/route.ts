import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { postId } = await req.json();
  if (!postId || typeof postId !== 'string') {
    return NextResponse.json({ error: 'postId is required' }, { status: 400 });
  }

  // Check if like already exists
  const { data: existingLike } = await supabase
    .from('community_likes')
    .select('post_id')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .single();

  let liked: boolean;
  let delta: number;

  if (existingLike) {
    // Unlike
    const { error } = await supabase
      .from('community_likes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', user.id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    liked = false;
    delta = -1;
  } else {
    // Like
    const { error } = await supabase
      .from('community_likes')
      .insert({ post_id: postId, user_id: user.id });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    liked = true;
    delta = 1;
  }

  // Update likes count on the post
  const { data: post, error: fetchError } = await supabase
    .from('community_posts')
    .select('likes')
    .eq('id', postId)
    .single();

  if (fetchError) return NextResponse.json({ error: fetchError.message }, { status: 500 });

  const newCount = Math.max(0, (post.likes ?? 0) + delta);

  const { error: updateError } = await supabase
    .from('community_posts')
    .update({ likes: newCount })
    .eq('id', postId);

  if (updateError) return NextResponse.json({ error: updateError.message }, { status: 500 });

  return NextResponse.json({ liked, count: newCount });
}

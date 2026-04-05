import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const lessonKey = searchParams.get('lessonKey');
  if (!lessonKey) {
    return NextResponse.json({ error: 'lessonKey is required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('assignment_submissions')
    .select('response')
    .eq('user_id', user.id)
    .eq('lesson_key', lessonKey)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ submission: data?.response ?? null });
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { lessonKey, response } = body;

  if (!lessonKey || typeof lessonKey !== 'string') {
    return NextResponse.json({ error: 'lessonKey is required' }, { status: 400 });
  }
  if (!response || typeof response !== 'string' || response.trim().length === 0) {
    return NextResponse.json({ error: 'response is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('assignment_submissions')
    .upsert(
      {
        user_id: user.id,
        lesson_key: lessonKey,
        response: response.trim(),
        submitted_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_key' }
    );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

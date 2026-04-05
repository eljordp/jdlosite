import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { courseData } from '@/lib/courseData';

function getLessonQuiz(lessonKey: string) {
  const [mod, lessonIdxStr] = lessonKey.split('-');
  const lessonIdx = parseInt(lessonIdxStr, 10);
  const moduleData = courseData.find((m) => m.num === mod);
  if (!moduleData || isNaN(lessonIdx) || lessonIdx < 0 || lessonIdx >= moduleData.lessons.length) {
    return null;
  }
  return moduleData.lessons[lessonIdx].quiz;
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { lessonKey: string; answers: number[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { lessonKey, answers } = body;

  if (!lessonKey || !Array.isArray(answers)) {
    return NextResponse.json({ error: 'lessonKey and answers are required' }, { status: 400 });
  }

  const quiz = getLessonQuiz(lessonKey);
  if (!quiz || quiz.length === 0) {
    return NextResponse.json({ error: 'Quiz not found for this lesson' }, { status: 404 });
  }

  if (answers.length !== quiz.length) {
    return NextResponse.json({ error: 'Answer count does not match question count' }, { status: 400 });
  }

  const results = quiz.map((q, i) => ({
    correct: answers[i] === q.correctIdx,
    explanation: q.explanation,
  }));

  const score = results.filter((r) => r.correct).length;
  const total = quiz.length;
  const passed = score / total >= 0.7;

  const { error: upsertError } = await supabase.from('quiz_results').upsert(
    {
      user_id: user.id,
      lesson_key: lessonKey,
      score,
      total,
      passed,
      answers,
      completed_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,lesson_key' }
  );

  if (upsertError) {
    console.error('Quiz upsert error:', upsertError);
    return NextResponse.json({ error: 'Failed to save quiz results' }, { status: 500 });
  }

  return NextResponse.json({ score, total, passed, results });
}

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const lessonKey = searchParams.get('lessonKey');
  const all = searchParams.get('all');

  if (all === 'true') {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch quiz results' }, { status: 500 });
    }

    return NextResponse.json({ results: data });
  }

  if (!lessonKey) {
    return NextResponse.json({ error: 'lessonKey or all=true is required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', user.id)
    .eq('lesson_key', lessonKey)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // Not found
      return NextResponse.json({ result: null });
    }
    return NextResponse.json({ error: 'Failed to fetch quiz result' }, { status: 500 });
  }

  return NextResponse.json({ result: data });
}

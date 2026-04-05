import { redirect, notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { courseData } from '@/lib/courseData';
import LessonViewer from '@/components/LessonViewer';

interface Props {
  params: Promise<{ mod: string; lesson: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { mod, lesson } = await params;

  // Auth check
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/academy/login');
  }

  // Academy access check (same logic as dashboard)
  const { data: academyUser } = await supabase
    .from('academy_users')
    .select('trial_start, subscription_status')
    .eq('id', user.id)
    .single();

  const trialStart = academyUser?.trial_start
    ? new Date(academyUser.trial_start)
    : new Date();
  const trialEnd = new Date(trialStart);
  trialEnd.setDate(trialEnd.getDate() + 7);
  const now = new Date();

  const isActive = academyUser?.subscription_status === 'active';
  const trialActive = now < trialEnd;
  const hasAccess = isActive || trialActive;

  if (!hasAccess) {
    redirect('/academy/subscribe');
  }

  // Resolve module
  const moduleData = courseData.find((m) => m.num === mod);
  if (!moduleData) notFound();

  const lessonIdx = parseInt(lesson, 10);
  if (isNaN(lessonIdx) || lessonIdx < 0 || lessonIdx >= moduleData.lessons.length) {
    notFound();
  }

  const lessonData = moduleData.lessons[lessonIdx];
  const lessonKey = `${mod}-${lessonIdx}`;

  // Compute prev lesson
  let prevLesson: { mod: string; idx: number; title: string } | null = null;
  if (lessonIdx > 0) {
    prevLesson = {
      mod,
      idx: lessonIdx - 1,
      title: moduleData.lessons[lessonIdx - 1].title,
    };
  } else {
    // Look at previous module
    const modIndex = courseData.findIndex((m) => m.num === mod);
    if (modIndex > 0) {
      const prevMod = courseData[modIndex - 1];
      prevLesson = {
        mod: prevMod.num,
        idx: prevMod.lessons.length - 1,
        title: prevMod.lessons[prevMod.lessons.length - 1].title,
      };
    }
  }

  // Compute next lesson
  let nextLesson: { mod: string; idx: number; title: string } | null = null;
  if (lessonIdx < moduleData.lessons.length - 1) {
    nextLesson = {
      mod,
      idx: lessonIdx + 1,
      title: moduleData.lessons[lessonIdx + 1].title,
    };
  } else {
    // Look at next module
    const modIndex = courseData.findIndex((m) => m.num === mod);
    if (modIndex < courseData.length - 1) {
      const nextMod = courseData[modIndex + 1];
      nextLesson = {
        mod: nextMod.num,
        idx: 0,
        title: nextMod.lessons[0].title,
      };
    }
  }

  return (
    <LessonViewer
      lesson={lessonData}
      moduleNum={mod}
      moduleTitle={moduleData.title}
      moduleDescription={moduleData.description}
      moduleLessons={moduleData.lessons.map((l) => ({ title: l.title }))}
      lessonIdx={lessonIdx}
      lessonKey={lessonKey}
      userId={user.id}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
    />
  );
}

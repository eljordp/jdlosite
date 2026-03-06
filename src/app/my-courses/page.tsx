"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import { courses } from "@/lib/courses";

type CourseEntry = {
  code: string;
  course: string;
  created: string;
};

type DisplayCourse = CourseEntry & {
  title: string;
  tagline: string;
};

export default function MyCoursesPage() {
  const router = useRouter();
  const [userCourses, setUserCourses] = useState<DisplayCourse[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }

      fetch("/api/my-courses")
        .then((r) => r.json())
        .then((data) => {
          const entries: CourseEntry[] = data.courses ?? [];
          const display: DisplayCourse[] = entries
            .map((e) => {
              const meta = courses.find((c) => c.slug === e.course);
              if (!meta) return null;
              return { ...e, title: meta.title, tagline: meta.tagline };
            })
            .filter(Boolean) as DisplayCourse[];
          setUserCourses(display);
          setLoaded(true);
        })
        .catch(() => setLoaded(true));
    });
  }, [router]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
      <CustomCursor />
      <div className="max-w-[800px] mx-auto px-6 py-10">
        <Link
          href="/"
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          &larr; Home
        </Link>

        <div className="mt-6 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Dashboard
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text tracking-[-0.03em] mb-2">
            My Courses
          </h1>
          <p className="text-text-secondary text-[15px]">
            Your purchased courses.
          </p>
        </div>

        {userCourses.length === 0 ? (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface/30">
            <p className="text-text-secondary text-[15px] mb-6">
              No courses yet.
            </p>
            <Link
              href="/students"
              className="inline-block py-3 px-8 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              Browse Courses &rarr;
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {userCourses.map((uc) => (
              <Link
                key={uc.course}
                href={`/learn/${uc.course}?code=${uc.code}`}
                className="block group rounded-2xl border border-border bg-surface/30 p-6 hover:border-border-hover transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-text tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                      {uc.title}
                    </h2>
                    <p className="text-text-muted text-[13px] mt-0.5">
                      {uc.tagline}
                    </p>
                  </div>
                  <span className="text-accent text-sm shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                    Continue &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {userCourses.length > 0 && (
          <div className="text-center mt-10">
            <Link
              href="/students"
              className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
            >
              Browse all courses &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

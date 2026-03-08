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
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }

      const email = data.user.email?.toLowerCase();
      if (!email) {
        setLoaded(true);
        return;
      }

      // Query access_codes directly — RLS allows SELECT for anyone
      const { data: rows } = await supabase
        .from("access_codes")
        .select("code, course_slug, created_at")
        .eq("email", email)
        .order("created_at", { ascending: true });

      const entries: CourseEntry[] = (rows ?? []).map((r: Record<string, string>) => ({
        code: r.code,
        course: r.course_slug,
        created: r.created_at,
      }));
      const display: DisplayCourse[] = entries
        .map((e) => {
          const meta = courses.find((c) => c.slug === e.course);
          if (!meta) return null;
          return { ...e, title: meta.title, tagline: meta.tagline };
        })
        .filter(Boolean) as DisplayCourse[];
      setUserCourses(display);
      setLoaded(true);
    });
  }, [router]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
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
              href="/courses"
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
              href="/courses"
              className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
            >
              Browse all courses &rarr;
            </Link>
          </div>
        )}

        {/* Redeem access code */}
        <div className="mt-14 border-t border-border pt-10">
          <h2 className="text-lg font-semibold text-text mb-2">
            Have an access code?
          </h2>
          <p className="text-text-muted text-[13px] mb-4">
            Enter the code you received after purchase.
          </p>
          <RedeemCode />
        </div>
      </div>
    </div>
  );
}

function RedeemCode() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);

  async function handleRedeem(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;

    setChecking(true);
    setError("");

    try {
      const res = await fetch("/api/access/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: trimmed }),
      });
      const data = await res.json();

      if (data.course_slug) {
        router.push(`/learn/${data.course_slug}?code=${trimmed}`);
      } else {
        setError("Invalid code. Check it and try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <form onSubmit={handleRedeem} className="flex gap-2 max-w-sm">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="e.g. AB3K7NQ2XWPH"
        className="flex-1 px-3 py-2.5 bg-surface rounded-lg border border-border text-text text-sm font-mono focus:border-accent focus:outline-none uppercase tracking-wider"
      />
      <button
        type="submit"
        disabled={checking}
        className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/80 transition-colors disabled:opacity-50"
      >
        {checking ? "..." : "Redeem"}
      </button>
      {error && (
        <p className="text-red-400 text-[12px] mt-1 absolute">{error}</p>
      )}
    </form>
  );
}

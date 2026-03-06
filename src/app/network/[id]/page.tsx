"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import { courses } from "@/lib/courses";

type ProfileData = {
  id: string;
  display_name: string;
  bio: string | null;
  created_at: string;
};

type Stats = {
  courses: number;
  lessons_completed: number;
  quizzes_passed: number;
};

export default function ConnectionProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [connected, setConnected] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }

      fetch(`/api/profile/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setProfile(data.profile ?? null);
          setConnected(data.connected ?? false);
          setStats(data.stats ?? null);
          setLoaded(true);
        })
        .catch(() => setLoaded(true));
    });
  }, [router, id]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <div className="text-center">
          <p className="text-text-secondary text-[15px] mb-4">
            Profile not found.
          </p>
          <Link
            href="/network"
            className="text-accent text-sm hover:text-accent/80 transition-colors"
          >
            &larr; Back to Network
          </Link>
        </div>
      </div>
    );
  }

  const totalLessons = courses.reduce(
    (sum, c) => sum + c.modules.reduce((s, m) => s + m.lessons.length, 0),
    0
  );
  const totalModules = courses.reduce(
    (sum, c) => sum + c.modules.length,
    0
  );

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
      <CustomCursor />
      <div className="max-w-[800px] mx-auto px-6 py-10">
        <Link
          href="/network"
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          &larr; Network
        </Link>

        <div className="mt-6 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold">
              {profile.display_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text tracking-[-0.03em]">
                {profile.display_name}
              </h1>
              <p className="text-text-muted text-[13px]">
                Joined{" "}
                {new Date(profile.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {profile.bio && (
            <p className="text-text-secondary text-[15px] mt-4">
              {profile.bio}
            </p>
          )}
        </div>

        {connected && stats ? (
          <>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="border border-border rounded-2xl bg-surface/30 p-5 text-center">
                <p className="text-2xl font-bold text-text">{stats.courses}</p>
                <p className="text-text-muted text-[11px] font-mono mt-1">
                  Courses
                </p>
              </div>
              <div className="border border-border rounded-2xl bg-surface/30 p-5 text-center">
                <p className="text-2xl font-bold text-text">
                  {stats.lessons_completed}
                </p>
                <p className="text-text-muted text-[11px] font-mono mt-1">
                  Lessons
                </p>
              </div>
              <div className="border border-border rounded-2xl bg-surface/30 p-5 text-center">
                <p className="text-2xl font-bold text-text">
                  {stats.quizzes_passed}
                </p>
                <p className="text-text-muted text-[11px] font-mono mt-1">
                  Quizzes
                </p>
              </div>
            </div>

            <div className="border border-border rounded-2xl bg-surface/30 p-6">
              <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-4">
                Progress Overview
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Lessons completed</span>
                  <span className="text-text font-mono">
                    {stats.lessons_completed} / {totalLessons}
                  </span>
                </div>
                <div className="w-full bg-[#111] rounded-full h-2">
                  <div
                    className="bg-accent rounded-full h-2 transition-all duration-500"
                    style={{
                      width: `${totalLessons > 0 ? (stats.lessons_completed / totalLessons) * 100 : 0}%`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm mt-4">
                  <span className="text-text-muted">Quizzes passed</span>
                  <span className="text-text font-mono">
                    {stats.quizzes_passed} / {totalModules}
                  </span>
                </div>
                <div className="w-full bg-[#111] rounded-full h-2">
                  <div
                    className="bg-accent rounded-full h-2 transition-all duration-500"
                    style={{
                      width: `${totalModules > 0 ? (stats.quizzes_passed / totalModules) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 border border-border rounded-2xl bg-surface/30">
            <p className="text-text-secondary text-[15px]">
              Connect with this user to see their progress.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

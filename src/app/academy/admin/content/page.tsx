"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { courseData } from "@/lib/courseData";

const ADMIN_EMAIL = "jordanlopezbusiness@gmail.com";

type SaveState = "idle" | "saving" | "saved" | "error";

export default function AdminContentPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Map of lesson_key -> current input value
  const [urls, setUrls] = useState<Record<string, string>>({});
  // Map of lesson_key -> save state
  const [saveStates, setSaveStates] = useState<Record<string, SaveState>>({});

  // Auth check on mount
  useEffect(() => {
    const check = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/academy");
        return;
      }
      setAuthed(true);
    };
    check();
  }, [router]);

  // Fetch existing video URLs
  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      try {
        const res = await fetch("/api/academy/lesson-videos");
        const json = await res.json();
        setUrls(json.videos ?? {});
      } catch {
        // ignore — table may not exist yet
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [authed]);

  const handleSave = async (lessonKey: string) => {
    setSaveStates((prev) => ({ ...prev, [lessonKey]: "saving" }));
    try {
      const res = await fetch("/api/academy/lesson-videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lesson_key: lessonKey,
          video_url: urls[lessonKey] ?? "",
        }),
      });
      if (!res.ok) throw new Error("save failed");
      setSaveStates((prev) => ({ ...prev, [lessonKey]: "saved" }));
      setTimeout(() => {
        setSaveStates((prev) => ({ ...prev, [lessonKey]: "idle" }));
      }, 2500);
    } catch {
      setSaveStates((prev) => ({ ...prev, [lessonKey]: "error" }));
    }
  };

  if (!authed || loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-[#888] text-sm font-mono">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] pt-14 px-6 md:px-10 pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="py-14 border-b border-[#e5e5e5] mb-10">
          <p className="text-[11px] font-mono tracking-[0.5em] uppercase text-[#888] mb-4">
            Admin
          </p>
          <div className="flex items-baseline gap-6">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]">
              Academy — Content
            </h1>
            <Link
              href="/academy/admin/students"
              className="text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              ← Students
            </Link>
          </div>
        </div>

        {/* Lesson rows grouped by module */}
        <div className="space-y-10">
          {courseData.map((mod) => (
            <section key={mod.num}>
              {/* Module header */}
              <div className="mb-4">
                <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#888]">
                  Module {mod.num}
                </p>
                <p className="text-[15px] font-semibold text-[#1a1a1a] mt-0.5">
                  {mod.title}
                </p>
              </div>

              <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
                {mod.lessons.map((lesson, lessonIdx) => {
                  const lessonKey = `${mod.num}-${lessonIdx}`;
                  const isLast = lessonIdx === mod.lessons.length - 1;
                  const saveState = saveStates[lessonKey] ?? "idle";

                  return (
                    <div
                      key={lessonKey}
                      className={`px-5 py-4 ${!isLast ? "border-b border-[#f0f0f0]" : ""}`}
                    >
                      {/* Lesson label */}
                      <p className="text-[11px] font-mono text-[#aaa] mb-2">
                        {mod.num}-{lessonIdx}
                      </p>
                      <p className="text-[14px] text-[#1a1a1a] mb-3">
                        {lesson.title}
                      </p>

                      {/* Input + Save */}
                      <div className="flex items-center gap-3">
                        <input
                          type="url"
                          value={urls[lessonKey] ?? ""}
                          onChange={(e) =>
                            setUrls((prev) => ({
                              ...prev,
                              [lessonKey]: e.target.value,
                            }))
                          }
                          placeholder="YouTube or Loom URL..."
                          className="flex-1 text-[13px] border border-[#e5e5e5] rounded-lg px-3 py-2 text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                        />
                        <button
                          onClick={() => handleSave(lessonKey)}
                          disabled={saveState === "saving"}
                          className="shrink-0 text-[12px] font-mono px-4 py-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] transition-colors disabled:opacity-40"
                        >
                          {saveState === "saving" ? "Saving..." : "Save"}
                        </button>

                        {/* Inline confirmation */}
                        {saveState === "saved" && (
                          <span className="text-[12px] text-green-600 font-mono">
                            Saved ✓
                          </span>
                        )}
                        {saveState === "error" && (
                          <span className="text-[12px] text-red-500 font-mono">
                            Error ✗
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* SQL setup block */}
        <div className="mt-16">
          <p className="text-[12px] font-mono text-[#888] mb-3">
            Run this in your Supabase SQL editor if not already done.
          </p>
          <pre className="bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl px-5 py-4 text-[12px] font-mono text-[#444] overflow-x-auto whitespace-pre">
{`create table if not exists lesson_videos (
  lesson_key text primary key,
  video_url text not null,
  updated_at timestamptz default now()
);`}
          </pre>
        </div>
      </div>
    </main>
  );
}

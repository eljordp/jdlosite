"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import type { Profile } from "@/lib/supabase/types";

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [stats, setStats] = useState({ courses: 0, lessons: 0, quizzes: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }

      fetch("/api/profile")
        .then((r) => r.json())
        .then((data) => {
          if (data.profile) {
            setProfile(data.profile);
            setDisplayName(data.profile.display_name);
            setBio(data.profile.bio ?? "");
          }
          setLoaded(true);
        })
        .catch(() => setLoaded(true));

      // Fetch stats
      fetch("/api/my-courses")
        .then((r) => r.json())
        .then((data) => {
          setStats((s) => ({
            ...s,
            courses: (data.courses ?? []).length,
          }));
        })
        .catch(() => {});
    });
  }, [router]);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_name: displayName, bio }),
      });
      const data = await res.json();
      if (data.profile) {
        setProfile(data.profile);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch {
      // silently fail
    }
    setSaving(false);
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

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
            Profile
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text tracking-[-0.03em] mb-2">
            {profile?.display_name || "Your Profile"}
          </h1>
          <p className="text-text-secondary text-[15px]">{profile?.email}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Courses", value: stats.courses },
            { label: "Lessons", value: stats.lessons },
            { label: "Quizzes", value: stats.quizzes },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-border rounded-2xl bg-surface/30 p-5 text-center"
            >
              <p className="text-2xl font-bold text-text">{stat.value}</p>
              <p className="text-text-muted text-[11px] font-mono mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Edit Form */}
        <div className="border border-border rounded-2xl bg-surface/30 p-6 mb-6">
          <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-4">
            Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-text-muted text-[11px] font-mono block mb-1.5">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength={50}
                className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-text-muted text-[11px] font-mono block mb-1.5">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={500}
                rows={3}
                className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell people about yourself..."
              />
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="py-3 px-8 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 mb-10">
          <Link
            href="/my-courses"
            className="block group rounded-2xl border border-border bg-surface/30 p-5 hover:border-border-hover transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-text font-semibold group-hover:text-accent transition-colors duration-300">
                  My Courses
                </h3>
                <p className="text-text-muted text-[13px] mt-0.5">
                  View and continue your purchased courses
                </p>
              </div>
              <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </Link>

          <Link
            href="/network"
            className="block group rounded-2xl border border-border bg-surface/30 p-5 hover:border-border-hover transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-text font-semibold group-hover:text-accent transition-colors duration-300">
                  Network
                </h3>
                <p className="text-text-muted text-[13px] mt-0.5">
                  Connect with other students and professionals
                </p>
              </div>
              <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </Link>
        </div>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="text-text-muted text-[13px] font-mono hover:text-red-400 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

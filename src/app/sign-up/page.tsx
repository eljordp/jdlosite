"use client";

import { useState } from "react";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 cursor-none">
        <CustomCursor />
        <div className="max-w-sm w-full text-center">
          <div className="text-5xl mb-6 text-accent">&#10003;</div>
          <h1 className="text-2xl font-bold text-text mb-3 tracking-[-0.03em]">
            Check your email
          </h1>
          <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
            We sent a confirmation link to{" "}
            <span className="text-text font-medium">{email}</span>. Click it to
            activate your account.
          </p>
          <Link
            href="/"
            className="text-text-muted text-[13px] font-mono hover:text-accent transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 cursor-none">
      <CustomCursor />
      <div className="max-w-sm w-full">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-text"
          >
            JDLO
          </Link>
          <h1 className="text-2xl font-bold text-text mt-6 tracking-[-0.03em]">
            Create account
          </h1>
          <p className="text-text-muted text-[13px] mt-2">
            Sign up to track your courses.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-text-muted text-[11px] font-mono block mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-text-muted text-[11px] font-mono block mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="6+ characters"
            />
          </div>

          {error && (
            <p className="text-red-400 text-[12px] font-mono">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            style={{
              background: "linear-gradient(135deg, #2997ff, #0a84ff)",
            }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-text-muted text-[13px] mt-6">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

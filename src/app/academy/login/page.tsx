'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Suspense } from 'react';

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const supabase = createClient();

  const mode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  const plan = searchParams.get('plan') ?? 'monthly';

  const [isSignup, setIsSignup] = useState(mode === 'signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setIsSignup(mode === 'signup');
  }, [mode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isSignup) {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { plan },
          emailRedirectTo: `${window.location.origin}/academy/dashboard`,
        },
      });
      if (signUpError) {
        setError(signUpError.message);
      } else if (data.session) {
        // Confirm email is off — session returned immediately, go straight in
        router.push('/academy/dashboard');
      } else {
        // Confirm email is on — user needs to verify
        setSuccess('Check your email to confirm your account, then come back to sign in.');
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        if (signInError.message === 'Email not confirmed') {
          setError('Your email isn\'t confirmed yet. Check your inbox for a confirmation link, or contact us to get access.');
        } else {
          setError(signInError.message);
        }
      } else {
        router.push('/academy/dashboard');
      }
    }

    setLoading(false);
  }

  return (
    <main className="pt-14 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[440px]">
        <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
          JDLO Academy
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-2">
          {isSignup ? 'Start your free trial.' : 'Welcome back.'}
        </h1>
        <p className="text-[#525252] text-[14px] mb-10">
          {isSignup ? '7 days free. No credit card required.' : 'Sign in to continue.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono text-[#525252] tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-[#f5f5f5] text-[14px] placeholder-[#525252] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-[11px] font-mono text-[#525252] tracking-widest uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-[#f5f5f5] text-[14px] placeholder-[#525252] focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-colors"
              placeholder={isSignup ? 'Create a password (8+ chars)' : 'Your password'}
            />
          </div>

          {error && (
            <p className="text-red-400 text-[13px] font-mono">{error}</p>
          )}
          {success && (
            <p className="text-green-400 text-[13px] font-mono">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#f5f5f5] text-[#0a0a0a] text-[14px] font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : isSignup ? 'Create account, start free' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <p className="text-[#525252] text-[13px]">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
          </p>
          <button
            onClick={() => { setError(''); setSuccess(''); setIsSignup(!isSignup); }}
            className="text-[#f5f5f5] text-[13px] hover:underline"
          >
            {isSignup ? 'Sign in' : 'Start free trial'}
          </button>
        </div>

        <p className="text-center mt-8">
          <Link href="/academy" className="text-[#525252] text-[12px] hover:text-[#a3a3a3] transition-colors">
            ← Back to Academy
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function AcademyLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import Link from 'next/link';
import AcademyModules from '@/components/AcademyModules';
import WeeklyDropsFeed from '@/components/WeeklyDropsFeed';

export default async function AcademyDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/academy/login');
  }

  // Check trial / subscription
  const { data: academyUser } = await supabase
    .from('academy_users')
    .select('trial_start, subscription_status')
    .eq('id', user.id)
    .single();

  // If no record exists yet, create one (first login after email confirm)
  if (!academyUser) {
    await supabase.from('academy_users').insert({ id: user.id });
    // Fire signup notification — best-effort, don't block page load
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://jdlo.site'}/api/academy/notify-signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user.email, userId: user.id }),
    }).catch(() => { /* ignore — notification is non-critical */ });
  }

  const trialStart = academyUser?.trial_start ? new Date(academyUser.trial_start) : new Date();
  const trialEnd = new Date(trialStart);
  trialEnd.setDate(trialEnd.getDate() + 7);
  const now = new Date();

  const isActive = academyUser?.subscription_status === 'active';
  const trialActive = now < trialEnd;
  const hasAccess = isActive || trialActive;

  const daysLeft = trialActive
    ? Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  if (!hasAccess) {
    redirect('/academy/subscribe');
  }

  // Fetch 3 most recent drops server-side via service role
  const admin = createAdminClient();
  const { data: recentDrops } = await admin
    .from('weekly_drops')
    .select('id, title, body, category, published_at')
    .order('published_at', { ascending: false })
    .limit(3);

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] pt-14">
      <div className="px-6 md:px-10 pb-24 max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="py-16 border-b border-[#e5e5e5] mb-10">
          <p className="text-[11px] font-mono tracking-[0.5em] uppercase text-[#888] mb-4">
            Dashboard
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]">
            Welcome back.
          </h1>
          {trialActive && !isActive && (
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 border border-[#e5e5e5] rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              <p className="text-[#555] text-[13px]">
                Free trial,{' '}
                <span className="text-[#1a1a1a] font-medium">
                  {daysLeft} day{daysLeft !== 1 ? 's' : ''} left
                </span>
                {' '}·{' '}
                <Link
                  href="/academy/subscribe"
                  className="text-[#1a1a1a] underline underline-offset-2 font-medium"
                >
                  Subscribe to keep access
                </Link>
              </p>
            </div>
          )}
        </div>

        {/* Course outline */}
        <AcademyModules />

        {/* Weekly drops + community */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-[#e5e5e5] rounded-2xl p-6">
            <p className="text-[11px] font-mono text-[#888] tracking-[0.3em] uppercase mb-3">
              Live layer
            </p>
            <h3 className="font-display text-[1.4rem] tracking-[-0.02em] text-[#1a1a1a] mb-1">
              Weekly Drops
            </h3>
            <p className="text-[13px] text-[#555] leading-relaxed">
              Real-time strategy, tactics, and updates from what&apos;s working right now.
            </p>
            <WeeklyDropsFeed initialDrops={recentDrops ?? []} />
          </div>

          <div className="border border-[#e5e5e5] rounded-2xl p-6 flex flex-col">
            <p className="text-[11px] font-mono text-[#888] tracking-[0.3em] uppercase mb-3">
              Community
            </p>
            <h3 className="font-display text-[1.4rem] tracking-[-0.02em] text-[#1a1a1a] mb-2">
              Post wins, ask questions, get feedback.
            </h3>
            <p className="text-[13px] text-[#555] leading-relaxed mb-6">
              The people in this program are building real things. Connect with them.
            </p>
            <Link
              href="/academy/community"
              className="mt-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors w-fit"
            >
              Go to community →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

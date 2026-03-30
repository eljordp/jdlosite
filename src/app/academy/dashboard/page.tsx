import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

const modules = [
  {
    num: '01',
    title: 'Identity & Operator Mindset',
    lessons: [
      'Who you have to become',
      'Removing your internal ceiling',
      'Building your operator identity',
      'The daily system that compounds',
    ],
    unlocked: true,
  },
  {
    num: '02',
    title: 'AI as Leverage',
    lessons: [
      'The exact stack: Claude, GPT, Lovable',
      'How to build in days not months',
      'Prompting for production, not play',
      'Shipping your first real thing',
    ],
    unlocked: true,
  },
  {
    num: '03',
    title: 'Sales & Closing',
    lessons: [
      'How to set appointments that show up',
      'Objection handling that actually works',
      'Closing without desperation',
      'Follow-up that doesn\'t feel like begging',
    ],
    unlocked: true,
  },
  {
    num: '04',
    title: 'Network & Positioning',
    lessons: [
      'Getting into rooms that matter',
      'How to be someone worth knowing',
      'Making yourself impossible to ignore',
      'Long-game relationship building',
    ],
    unlocked: true,
  },
];

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

  return (
    <main className="pt-14 px-6 md:px-10 pb-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="py-16 border-b border-[rgba(255,255,255,0.06)] mb-12">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            Dashboard
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95]">
            Welcome back.
          </h1>
          {trialActive && !isActive && (
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 border border-[rgba(255,255,255,0.08)] rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              <p className="text-[#a3a3a3] text-[13px]">
                Free trial — <span className="text-[#f5f5f5]">{daysLeft} day{daysLeft !== 1 ? 's' : ''} left</span>
                {' '}·{' '}
                <Link href="/academy/subscribe" className="text-[#f5f5f5] underline underline-offset-2">
                  Subscribe to keep access
                </Link>
              </p>
            </div>
          )}
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((mod) => (
            <details key={mod.num} className="group border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
                <div className="flex items-center gap-6">
                  <span className="text-[#525252] text-[11px] font-mono">{mod.num}</span>
                  <h2 className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[-0.02em]">
                    {mod.title}
                  </h2>
                </div>
                <span className="text-[#525252] group-open:rotate-45 transition-transform duration-300 text-xl shrink-0 ml-6">
                  +
                </span>
              </summary>
              <div className="px-8 pb-6 border-t border-[rgba(255,255,255,0.06)]">
                <div className="pt-6 space-y-2">
                  {mod.lessons.map((lesson, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200 cursor-pointer group/lesson"
                    >
                      <span className="text-[#525252] text-[11px] font-mono w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[#a3a3a3] text-[14px] group-hover/lesson:text-[#f5f5f5] transition-colors duration-200">
                        {lesson}
                      </p>
                      <span className="ml-auto text-[#525252] text-[11px] font-mono opacity-0 group-hover/lesson:opacity-100 transition-opacity duration-200">
                        Soon →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Live layer */}
        <div className="mt-16 p-8 border border-[rgba(255,255,255,0.06)] rounded-2xl">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
            Live layer
          </p>
          <h3 className="font-display text-[1.8rem] tracking-[-0.02em] mb-3">
            Weekly drops + community
          </h3>
          <p className="text-[#525252] text-[14px] leading-relaxed max-w-[500px] mb-6">
            New content drops every week. Real-time strategy, feedback, and community. This is what makes it compound.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-[rgba(255,255,255,0.08)] rounded-full text-[13px] text-[#a3a3a3]">
              Weekly drops
            </span>
            <span className="px-4 py-2 border border-[rgba(255,255,255,0.08)] rounded-full text-[13px] text-[#a3a3a3]">
              Community
            </span>
            <span className="px-4 py-2 border border-[rgba(255,255,255,0.08)] rounded-full text-[13px] text-[#525252]">
              Coming soon
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}

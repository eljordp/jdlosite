import Link from 'next/link';
import Image from 'next/image';

const modules = [
  {
    num: '01',
    title: 'Identity & Operator Mindset',
    desc: 'Who you have to become before anything else changes. Remove the ceiling you put on yourself. This is where the real work starts.',
  },
  {
    num: '02',
    title: 'AI as Leverage',
    desc: 'Claude, GPT, Lovable. Not as toys, but as multipliers. How I build in days what used to take months. The exact stack, the exact workflow.',
  },
  {
    num: '03',
    title: 'Sales & Closing',
    desc: 'Setting appointments, handling objections, closing without begging. The difference between people who make money and people who stay broke is this module.',
  },
  {
    num: '04',
    title: 'Network & Positioning',
    desc: 'How to get in rooms that matter and make yourself impossible to ignore. I was a nobody. Now people doing $400K/mo treat me as an equal. Here\'s exactly how.',
  },
];

const receipts = [
  { stat: '$12K+/mo', label: 'West Coast Terpz', desc: 'Instagram DMs to a real e-commerce operation' },
  { stat: '500+/wk', label: 'Club Bot / Velvet', desc: 'Guest lists automated for Vegas promoters' },
  { stat: '100+ stores', label: 'DHL Translator', desc: 'Chicago → Canada, DHL premier partner' },
  { stat: '20+ built', label: 'Real Projects', desc: 'Restaurants, nightclubs, cannabis, real estate, fashion' },
];

export default function AcademyPage() {
  return (
    <main className="pt-14">

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                JDLO Academy
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.03em] mb-10">
                Not a course.
                <br />
                <span className="text-[#525252]">An operating system.</span>
              </h1>
              <p className="text-[#a3a3a3] text-lg md:text-xl leading-relaxed max-w-[500px] mb-10">
                I taught myself to build anything in 5 months. Then I used it to build 20+ real businesses.
                This is the exact way I think, sell, and operate, laid out so you can install it yourself.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/academy/login?mode=signup"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-[14px] font-semibold hover:bg-white transition-colors duration-300"
                >
                  Start free, 7 days
                </Link>
                <p className="text-[#525252] text-[12px] font-mono">No credit card required</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                <Image
                  src="/jordan-2.jpg"
                  alt="Jordan Lopez"
                  fill
                  className="object-cover object-center"
                  sizes="40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            The default path
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-4 text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed text-[#525252]">
              <p>You wake up. You check your phone.</p>
              <p>You consume. You tell yourself you&apos;re learning.</p>
              <p>But nothing changes.</p>
              <p>You start things. You stop halfway.</p>
              <p className="text-[#f5f5f5]">This is the drift. Most people never leave it.</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: 'Motion ≠ Progress', desc: 'Being busy feels productive. It isn\'t.' },
                { label: 'Consumption ≠ Learning', desc: 'Information without execution is entertainment.' },
                { label: 'Identity = Ceiling', desc: 'Who you think you are sets the limit on what you\'ll build.' },
              ].map((item) => (
                <div key={item.label} className="p-6 border border-[rgba(255,255,255,0.06)] rounded-xl">
                  <p className="text-[#f5f5f5] font-medium mb-2 text-[15px]">{item.label}</p>
                  <p className="text-[#525252] text-[14px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Receipts ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            The receipts
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-16 max-w-[700px]">
            Every claim I make has a real project behind it.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {receipts.map((r) => (
              <div key={r.label} className="bg-[#0a0a0a] p-8">
                <p className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-[#f5f5f5] mb-2">
                  {r.stat}
                </p>
                <p className="text-[#f5f5f5] text-[14px] font-medium mb-1">{r.label}</p>
                <p className="text-[#525252] text-[13px] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            The system
          </p>
          <div>
            {modules.map((mod, i) => (
              <div
                key={mod.num}
                className="grid grid-cols-[60px_1fr_auto] items-start gap-8 py-8 border-b border-[rgba(255,255,255,0.06)] last:border-0 group"
              >
                <span className="text-[#525252] text-[11px] font-mono mt-1">{mod.num}</span>
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3 group-hover:text-[#a3a3a3] transition-colors duration-300">
                    {mod.title}
                  </h3>
                  <p className="text-[#525252] text-[14px] leading-relaxed max-w-[550px]">
                    {mod.desc}
                  </p>
                </div>
                <span className="text-[#525252] text-[11px] font-mono mt-1 shrink-0">
                  Week {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div>
              <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
                The outcome
              </p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-8">
                3–5 clients.
                <br />
                <span className="text-[#525252]">$2K–$5K each.</span>
                <br />
                Every month.
              </h2>
              <p className="text-[#a3a3a3] text-[16px] leading-relaxed max-w-[420px]">
                Not through luck or a viral post. Through structure, positioning, and knowing how to close.
                The same formula I used and that I&apos;ve watched work for people around me.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Build a service people actually pay for',
                'Use AI to deliver faster than any competitor',
                'Get clients through content and cold outreach',
                'Close without feeling desperate',
                'Build a life around the work, not the other way around',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-[rgba(255,255,255,0.06)] rounded-xl">
                  <span className="text-[#525252] font-mono text-[11px] mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="text-[#f5f5f5] text-[14px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
            Pricing
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-[800px]">
            {/* Monthly */}
            <div className="p-8 border border-[rgba(255,255,255,0.08)] rounded-2xl">
              <p className="text-[#525252] text-[11px] font-mono tracking-widest uppercase mb-4">Monthly</p>
              <p className="font-display text-[3.5rem] tracking-[-0.04em] leading-none mb-2">$97</p>
              <p className="text-[#525252] text-[13px] mb-8">/month, cancel anytime</p>
              <ul className="space-y-2.5 mb-8">
                {['All 4 modules', 'Weekly drops', 'Community access', '7-day free trial'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px] text-[#a3a3a3]">
                    <span className="text-[#f5f5f5]">—</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/academy/login?mode=signup&plan=monthly"
                className="flex items-center justify-center w-full py-3 rounded-xl border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] text-[14px] font-medium hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300"
              >
                Start free trial
              </Link>
            </div>

            {/* One-time */}
            <div className="p-8 border border-[#f5f5f5] rounded-2xl relative">
              <span className="absolute top-4 right-4 text-[11px] font-mono bg-[#f5f5f5] text-[#0a0a0a] px-2.5 py-1 rounded-full">
                Best value
              </span>
              <p className="text-[#525252] text-[11px] font-mono tracking-widest uppercase mb-4">Lifetime</p>
              <p className="font-display text-[3.5rem] tracking-[-0.04em] leading-none mb-2">$497</p>
              <p className="text-[#525252] text-[13px] mb-8">one-time, own it forever</p>
              <ul className="space-y-2.5 mb-8">
                {['Everything in monthly', 'Lifetime updates', 'Direct access to JP', '7-day free trial'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px] text-[#a3a3a3]">
                    <span className="text-[#f5f5f5]">—</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/academy/login?mode=signup&plan=lifetime"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-[#f5f5f5] text-[#0a0a0a] text-[14px] font-semibold hover:bg-white transition-colors duration-300"
              >
                Start free trial
              </Link>
            </div>
          </div>
          <p className="text-[#525252] text-[12px] font-mono mt-6">
            7 days free. No card required. Cancel before day 7 and you pay nothing.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 md:py-40 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] tracking-[-0.03em] leading-[0.92] mb-10">
            You already know.
          </h2>
          <Link
            href="/academy/login?mode=signup"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-[15px] font-semibold hover:bg-white transition-colors duration-300"
          >
            Start free, 7 days →
          </Link>
        </div>
      </section>

    </main>
  );
}

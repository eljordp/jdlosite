'use client';

import ScrollText from './ScrollText';

const modules = [
  {
    num: '01',
    title: 'Identity & Operator Mindset',
    tagline: 'The foundation everything else is built on',
    desc: 'Who you have to become before anything else changes. Remove the ceiling you put on yourself. This is where the real work starts.',
  },
  {
    num: '02',
    title: 'AI as Leverage',
    tagline: 'Build in days. Deliver in weeks. Charge accordingly.',
    desc: 'Claude, GPT, Lovable. Not as toys, but as multipliers. How I build in days what used to take months. The exact stack, the exact workflow.',
  },
  {
    num: '03',
    title: 'Sales & Closing',
    tagline: 'The difference between broke and paid is this module',
    desc: 'Setting appointments, handling objections, closing without begging. The difference between people who make money and people who stay broke is this module.',
  },
  {
    num: '04',
    title: 'Network & Positioning',
    tagline: 'Get in rooms that change your life',
    desc: "How to get in rooms that matter and make yourself impossible to ignore. I was a nobody. Now people doing $400K/mo treat me as an equal. Here's exactly how.",
  },
];

const qualifiers = [
  { yes: true,  text: "You're trying to build a real service business — not a side hustle" },
  { yes: true,  text: "You want to use AI as leverage, not just play with it" },
  { yes: true,  text: "You're willing to do the work. You just need a clear path" },
  { yes: true,  text: "You're done consuming. You want to execute" },
  { yes: false, text: "You want a get-rich-quick system with no effort" },
  { yes: false, text: "You're looking for someone to do the work for you" },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-16">
          The default path
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="space-y-4 text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed">
            <ScrollText>You wake up. You check your phone.</ScrollText>
            <ScrollText>You consume. You tell yourself you&apos;re learning.</ScrollText>
            <ScrollText>But nothing changes.</ScrollText>
            <ScrollText>You start things. You stop halfway.</ScrollText>
            <p className="text-[#f5f5f5]">This is the drift. Most people never leave it.</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { label: 'Motion ≠ Progress', desc: "Being busy feels productive. It isn't." },
              { label: 'Consumption ≠ Learning', desc: 'Information without execution is entertainment.' },
              { label: 'Identity = Ceiling', desc: "Who you think you are sets the limit on what you'll build." },
            ].map((item) => (
              <div key={item.label} className="p-6 border border-[rgba(255,255,255,0.06)] rounded-xl">
                <p className="text-[#f5f5f5] font-medium mb-2 text-[15px]">{item.label}</p>
                <ScrollText className="text-[14px]" startColor="#555" endColor="#a3a3a3">
                  {item.desc}
                </ScrollText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QualifierSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-8">
              Who this is for
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
              You already know<br />you&apos;re capable.<br />
              <span className="text-[#525252]">You just need the system.</span>
            </h2>
          </div>
          <div className="space-y-0">
            {qualifiers.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-5 border-b border-[rgba(255,255,255,0.06)] last:border-0">
                <span className={`text-[13px] font-mono mt-0.5 shrink-0 ${item.yes ? 'text-[#f5f5f5]' : 'text-[#555]'}`}>
                  {item.yes ? '✓' : '✕'}
                </span>
                {item.yes ? (
                  <p className="text-[15px] leading-relaxed text-[#f5f5f5]">{item.text}</p>
                ) : (
                  <ScrollText className="text-[15px] leading-relaxed" startColor="#555" endColor="#888">
                    {item.text}
                  </ScrollText>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModulesSection() {
  return (
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
                <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-1 group-hover:text-[#a3a3a3] transition-colors duration-300">
                  {mod.title}
                </h3>
                <ScrollText className="text-[13px] mt-1 mb-2" startColor="#555" endColor="#888">
                  {mod.tagline}
                </ScrollText>
                <ScrollText className="text-[14px] leading-relaxed" startColor="#444" endColor="#888">
                  {mod.desc}
                </ScrollText>
              </div>
              <span className="text-[#525252] text-[11px] font-mono mt-1 shrink-0">
                Week {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

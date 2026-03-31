'use client';

import { useState, useEffect } from 'react';

type Lesson = {
  title: string;
  content: string;
  assignment?: string;
};

type Module = {
  num: string;
  title: string;
  lessons: Lesson[];
  unlocked: boolean;
};

const STORAGE_KEY = 'academy-completed-lessons';

function getCompleted(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCompleted(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

function lessonKey(modNum: string, lessonIdx: number) {
  return `${modNum}-${lessonIdx}`;
}

export const modulesData: Module[] = [
  {
    num: '01',
    title: 'Identity & Operator Mindset',
    unlocked: true,
    lessons: [
      {
        title: 'Who you have to become',
        content:
          "Before you learn any skill, you need to kill the version of yourself that's comfortable being broke. Not in a motivational poster way. In a 'I'm going to stop pretending I'm fine with this' way. The person you are right now has habits, beliefs, and a daily routine that got you exactly where you are. If where you are isn't where you want to be, something has to change. Not your tools. Not your strategy. You. Write down who you'd need to become to make $10K/month. What does that person do at 7am? What do they say no to? That's your new operating system.",
        assignment:
          "Write down who you need to become to make $10K/month. Be specific: what they do at 7am, what they charge, what they say no to, how they talk about themselves. Put it somewhere you'll see it daily.",
      },
      {
        title: 'Removing your internal ceiling',
        content:
          "You have a number in your head. It's the most you think you can charge, the most you think you can make, the most you think someone like you deserves. That number is fake. It was set by your environment, not by reality. I was charging $200 for websites because I thought that's what 'someone like me' could charge. Then I met people doing $400K/month who treated me like an equal. The ceiling broke. Not because I got smarter. Because I saw proof it was possible. Your job this week: find one person making 10x what you make. Study them. Not to copy them. To break your ceiling.",
        assignment:
          "Find one person making 10x what you make right now. Study their content for 30 minutes. Not to copy. To break your ceiling. Write down 3 things they believe about themselves that you currently don't.",
      },
      {
        title: 'Building your operator identity',
        content:
          "An operator doesn't wait for permission. An operator sees a problem, builds a solution, and charges for it. You're not an employee. You're not a freelancer waiting for someone to hand you work. You're an operator who builds systems that make money. Start calling yourself that. Not on Instagram. In your head. When someone asks what you do, say 'I build systems for businesses.' Watch how different that hits compared to 'I'm learning to code' or 'I do freelance web stuff.'",
        assignment:
          "For the next 7 days, every time someone asks what you do — say 'I build systems for businesses.' Notice how it feels. Notice how they respond.",
      },
      {
        title: 'The daily system that compounds',
        content:
          "Here's my actual daily schedule. It's printed on my wall. 6:30 AM wake up. No phone until 2:30 PM. Morning walk. Workout. Then 3 hours of deep work on the highest priority thing. No email, no calls, no distractions. Everything else happens after noon. This isn't discipline. It's architecture. You design your day so the important stuff happens before the world can interrupt you. Write your schedule. Print it. Put it on your wall. Follow it for 7 days straight. That's the assignment.",
        assignment:
          "Write your daily schedule. Not ideal — actual. Then write your target schedule. Print the target one. Put it on your wall. Follow it for 7 days straight.",
      },
    ],
  },
  {
    num: '02',
    title: 'AI as Leverage',
    unlocked: true,
    lessons: [
      {
        title: 'The exact stack',
        content:
          "Claude Code for building. ChatGPT for research and first drafts. Lovable for quick prototypes. That's it. Three tools. Not fifteen. I built 20+ projects with this stack. The tool doesn't matter as much as knowing when to use which one. Claude Code is for real engineering \u2014 when you need production-quality code that actually works. ChatGPT is for brainstorming, writing, and quick answers. Lovable is for when a client needs to see something visual fast. Learn all three. Master the handoffs between them.",
        assignment:
          "Set up all three tools this week if you haven't: Claude Code (claude.ai/code), ChatGPT (chatgpt.com), Lovable (lovable.dev). Open all three and do one thing in each — even just ask a question. Get familiar.",
      },
      {
        title: 'How to build in days not months',
        content:
          "Speed comes from three things: clear requirements, the right tool, and not overthinking. When a client says 'I need a website,' I don't spend a week on mockups. I ask them 5 questions, open Claude Code, and start building. First version ships in 2-3 days. Then we iterate. Perfect is the enemy of paid. Ship something that works, get feedback, improve. Every project I've built that made real money was built fast and improved later.",
        assignment:
          "Find one business in your area — restaurant, barbershop, gym, whatever. Look at their current website. Write down 3 things wrong with it. That's your pitch.",
      },
      {
        title: 'Prompting for production',
        content:
          "Most people use AI like a search engine. 'Write me a website.' That's garbage prompting. Here's how I prompt: I give context (what the business does, who the customer is, what the goal is), I give constraints (tech stack, timeline, budget), and I give examples (here's a site I like, do something in this style). The more specific your input, the less cleanup you do on the output. Treat AI like a senior developer you're briefing, not a magic genie.",
        assignment:
          "Take one real project you want to build (or already have) and write a Claude prompt using the context + constraints + examples format. Test it. Iterate until the output is 80%+ usable.",
      },
      {
        title: 'Shipping your first real thing',
        content:
          "Stop building portfolios. Build something for someone. Find a business in your area \u2014 a restaurant, a barbershop, a gym \u2014 and build them a website for free or cheap. Not to practice. To prove to yourself you can deliver. The confidence from one shipped project is worth more than 100 tutorials. This week: find one business. Build their site. Ship it. Come back and tell me what happened.",
        assignment:
          "Ship something this week. It can be a landing page, a simple tool, anything. The only rule: it has to be live at a real URL. Send it to one real person and get feedback.",
      },
    ],
  },
  {
    num: '03',
    title: 'Sales & Closing',
    unlocked: true,
    lessons: [
      {
        title: 'Setting appointments that show up',
        content:
          "The DM template is simple. 'Hey [name], I build [thing] for [their industry]. Just finished one for [similar business]. Want to see it?' That's it. No pitch. No price. No essay. You're opening a conversation, not closing a deal. 80% of people who say yes to seeing your work will book a call. The call is where you close. But the DM gets you in the door.",
      },
      {
        title: 'Objection handling',
        content:
          "Every objection is the same objection wearing a different costume. 'Too expensive' means they don't see the value yet. 'I need to think about it' means they're scared. 'I have a guy' means they're not sure you're better. The fix for all three: show proof. Screenshots. Results. A live demo. When someone can see what you built for someone just like them, objections dissolve. Stop arguing. Start showing.",
      },
      {
        title: 'Closing without desperation',
        content:
          "If you need the money, you'll smell like it. And people don't buy from desperate. The fix: always have more leads than you need. When you have 5 people interested, you stop chasing the one who's dragging their feet. You say 'no rush, let me know when you're ready' and mean it. That energy closes more deals than any script. Build your pipeline so you're never one 'no' away from panic.",
      },
      {
        title: "Follow-up that doesn't beg",
        content:
          "Follow up once at 48 hours. Once at one week. Once at two weeks. Then stop. Each follow-up adds value: share a relevant project, mention a result, or ask a genuine question about their business. Never send 'just checking in' or 'circling back.' Those emails go straight to trash. If they don't respond after three touchpoints, they're not ready. Move on. They'll come back when they are.",
      },
    ],
  },
  {
    num: '04',
    title: 'Network & Positioning',
    unlocked: true,
    lessons: [
      {
        title: 'Getting into rooms that matter',
        content:
          "You don't need a big following. You need to be in the right rooms with the right people. Go where business owners hang out. Not networking events \u2014 those are full of people selling to each other. Go to industry events, private dinners, member clubs. Offer value before you ask for anything. I got my biggest clients by being useful in rooms I technically didn't belong in. Show up. Be helpful. The deals follow.",
      },
      {
        title: 'Being someone worth knowing',
        content:
          "People remember you for what you've built, not what you say you can build. Every project you ship is a business card. Every result you generate is a referral. Stop trying to market yourself and start shipping things worth talking about. My best marketing has always been the work itself. When West Coast Terpz did $12K in a month, I didn't need to pitch anyone \u2014 the result did the pitching.",
      },
      {
        title: 'Making yourself impossible to ignore',
        content:
          "Post your work. Not a carousel about '5 tips for entrepreneurs.' Your actual work. Screenshots. Before and afters. Client results with numbers. The content that's gotten me the most traction isn't polished \u2014 it's real. A screen recording of me building a site in 2 hours gets more engagement than a produced video about 'why you need a website.' Be undeniable, not marketable.",
      },
      {
        title: 'Long-game relationship building',
        content:
          "The person you help for free today sends you a $5K client next year. I've seen it happen over and over. Build relationships with no agenda. Be genuinely interested in what people are building. Remember details. Follow up after their launch. The network you build in year one pays dividends for a decade. Stop thinking transactionally and start thinking generationally.",
      },
    ],
  },
];

export default function AcademyModules() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  useEffect(() => {
    setCompleted(getCompleted());
  }, []);

  function toggleLesson(key: string) {
    if (expandedLesson === key) {
      setExpandedLesson(null);
    } else {
      setExpandedLesson(key);
      // Mark as completed on first open
      if (!completed.has(key)) {
        const next = new Set(completed);
        next.add(key);
        setCompleted(next);
        saveCompleted(next);
      }
    }
  }

  function moduleProgress(mod: Module): number {
    let count = 0;
    mod.lessons.forEach((_, i) => {
      if (completed.has(lessonKey(mod.num, i))) count++;
    });
    return count;
  }

  return (
    <div className="space-y-4">
      {modulesData.map((mod) => {
        const done = moduleProgress(mod);
        const total = mod.lessons.length;

        return (
          <details
            key={mod.num}
            className="group border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden"
          >
            <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none">
              <div className="flex items-center gap-6">
                <span className="text-[#525252] text-[11px] font-mono">
                  {mod.num}
                </span>
                <h2 className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[-0.02em]">
                  {mod.title}
                </h2>
                {done > 0 && (
                  <span className="text-[11px] font-mono text-[#525252] ml-2">
                    {done}/{total}
                  </span>
                )}
              </div>
              <span className="text-[#525252] group-open:rotate-45 transition-transform duration-300 text-xl shrink-0 ml-6">
                +
              </span>
            </summary>

            <div className="px-8 pb-6 border-t border-[rgba(255,255,255,0.06)]">
              <div className="pt-6 space-y-1">
                {mod.lessons.map((lesson, i) => {
                  const key = lessonKey(mod.num, i);
                  const isOpen = expandedLesson === key;
                  const isDone = completed.has(key);

                  return (
                    <div key={i}>
                      <button
                        onClick={() => toggleLesson(key)}
                        className="w-full flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200 cursor-pointer text-left"
                      >
                        {/* Completion indicator */}
                        <span className="w-5 shrink-0 flex items-center justify-center">
                          {isDone ? (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              className="text-green-400"
                            >
                              <circle
                                cx="7"
                                cy="7"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M4.5 7L6.5 9L9.5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <span className="text-[#525252] text-[11px] font-mono">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          )}
                        </span>

                        <p
                          className={`text-[14px] transition-colors duration-200 ${
                            isOpen
                              ? 'text-[#f5f5f5]'
                              : 'text-[#a3a3a3] hover:text-[#f5f5f5]'
                          }`}
                        >
                          {lesson.title}
                        </p>

                        <span
                          className={`ml-auto text-[#525252] text-[11px] font-mono transition-all duration-200 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                        >
                          {isOpen ? '\u2190' : '\u2192'}
                        </span>
                      </button>

                      {/* Expanded lesson content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-9 mr-4 mb-4 mt-1 p-5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
                          <p className="text-[#a3a3a3] text-[14px] leading-[1.8]">
                            {lesson.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// ── Types ──
type Message = {
  role: 'bot' | 'user';
  content: string;
  links?: { label: string; href: string }[];
  quickReplies?: string[];
};

// ── Skill config ──
const SKILLS = {
  'ai-automation': {
    name: 'AI & Automation',
    href: '/courses/ai-automation',
    keywords: [
      'automate', 'automation', 'workflow', 'agent', 'n8n', 'zapier', 'make',
      'api', 'integrate', 'bot', 'time', 'manual', 'repetitive', 'save time',
      'systems', 'pipeline', 'tool', 'build', 'efficiency',
    ],
    pitch: "That's AI & Automation. I built this course around what I run my companies on — agents, workflows, real integrations. $2,500, 6 weeks.",
  },
  'sales-systems': {
    name: 'Sales Systems',
    href: '/courses/sales-systems',
    keywords: [
      'sell', 'sales', 'close', 'closing', 'outreach', 'prospect', 'revenue',
      'client', 'deal', 'pipeline', 'crm', 'cold email', 'follow up',
      'objection', 'money', 'leads', 'convert',
    ],
    pitch: "Sales Systems. The exact scripts, frameworks, and CRM setup I use to close. $1,500, 4 weeks.",
  },
  'prompt-engineering': {
    name: 'Prompt Engineering',
    href: '/courses/prompt-engineering',
    keywords: [
      'prompt', 'prompting', 'chatgpt', 'output', 'gpt', 'claude', 'model',
      'results', 'mediocre', 'ai output', 'write prompts', 'bad results', 'llm',
    ],
    pitch: "Prompt Engineering. 99% of people use AI at 10% of its power. This closes that gap. $800, 2 weeks.",
  },
  'content-brand': {
    name: 'Content & Brand',
    href: '/courses/content-brand',
    keywords: [
      'content', 'brand', 'post', 'instagram', 'audience', 'followers',
      'social', 'video', 'grow', 'creator', 'tiktok', 'youtube', 'twitter',
      'visibility', 'known', 'personal brand', 'marketing',
    ],
    pitch: "Content & Brand. Build a brand that makes money while you sleep. $1,200, 4 weeks.",
  },
  'team-operations': {
    name: 'Team & Operations',
    href: '/courses/team-operations',
    keywords: [
      'team', 'hire', 'hiring', 'manage', 'management', 'scale', 'employee',
      'operations', 'sop', 'staff', 'delegate', 'bottleneck', 'people',
      'without me', 'run my business', 'grow my team',
    ],
    pitch: "Team & Operations. Hiring, SOPs, management frameworks — build a business that runs without you. $2,000, 5 weeks.",
  },
} as const;

type SkillKey = keyof typeof SKILLS;

function detectSkill(text: string): SkillKey | null {
  const lower = text.toLowerCase();
  let best: SkillKey | null = null;
  let bestCount = 0;
  for (const [skill, data] of Object.entries(SKILLS)) {
    const count = data.keywords.filter(kw => lower.includes(kw)).length;
    if (count > bestCount) { bestCount = count; best = skill as SkillKey; }
  }
  return bestCount > 0 ? best : null;
}

const FALLBACKS = [
  "Be more specific. What's actually costing you time or money right now?",
  "I need more to work with. What does your day look like?",
  "I'm not following. Tell me: what's the one thing you'd fix in your business tomorrow if you could?",
];
let fbIdx = 0;

const GREETINGS = new Set(['hi', 'hey', 'hello', 'sup', 'yo', 'what up', 'whats up']);

function getResponse(text: string, identified: boolean): Message {
  const lower = text.toLowerCase().trim();

  if (GREETINGS.has(lower) || (lower.length < 15 && GREETINGS.has(lower.split(' ')[0]))) {
    return { role: 'bot', content: "Hey. What are you actually trying to build or fix right now?" };
  }

  if (/quiz|not sure|don.?t know|unsure|help me decide|where do i start/i.test(lower)) {
    return {
      role: 'bot',
      content: "Take the skills quiz. 5 questions, gives you a straight answer on where to start.",
      links: [{ label: 'Take the Skills Quiz →', href: '/quiz' }],
    };
  }

  if (/mentor|1:1|one.on.one|personal|coaching|direct access/i.test(lower)) {
    return {
      role: 'bot',
      content: "Mentorship is limited — 5 spots max at any time. Direct access, weekly calls, custom roadmap. $5,000/mo.",
      links: [{ label: 'See Mentorship →', href: '/mentorship' }],
    };
  }

  if (/price|cost|how much|expensive|afford/i.test(lower)) {
    return {
      role: 'bot',
      content: "Courses range from $800 to $2,500 depending on depth. Mentorship is $5,000/mo. Which skill are you looking at?",
      links: [{ label: 'Browse All Courses →', href: '/students' }],
    };
  }

  if (/enroll|sign up|apply|join|get in|how do i start/i.test(lower)) {
    return {
      role: 'bot',
      content: "Enrollment is reviewed — not everyone gets in. Apply and I'll get back to you.",
      links: [{ label: 'Apply to Enroll →', href: '/students' }],
    };
  }

  const skill = detectSkill(text);
  if (skill) {
    const s = SKILLS[skill];
    return {
      role: 'bot',
      content: s.pitch,
      links: [{ label: `See ${s.name} →`, href: s.href }],
      quickReplies: identified ? undefined : ['How do I enroll?', 'Tell me more', 'What else is there?'],
    };
  }

  const msg = FALLBACKS[fbIdx % FALLBACKS.length];
  fbIdx++;
  return {
    role: 'bot',
    content: msg,
    quickReplies: !identified ? [
      'Automate my work',
      'Close more deals',
      'Build my brand',
      'Build a team',
      'Use AI better',
      "I'm not sure",
    ] : undefined,
  };
}

const INITIAL: Message = {
  role: 'bot',
  content: "Hey. I'm Jordi P. What are you actually trying to build?",
  quickReplies: [
    'Automate my work',
    'Close more deals',
    'Build my brand',
    'Build a team',
    'Use AI better',
    "I'm not sure",
  ],
};

export default function JordiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState('');
  const [identified, setIdentified] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', content: text };
    const botMsg = getResponse(text, identified);
    if (botMsg.links) setIdentified(true);
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
    // Log exchange (fire-and-forget)
    fetch('/api/chat-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: text, bot: botMsg.content }),
    }).catch(() => {});
  };

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[0_4px_24px_rgba(41,151,255,0.35)] hover:shadow-[0_4px_32px_rgba(41,151,255,0.5)] transition-all duration-300"
        aria-label={open ? 'Close chat' : 'Chat with Jordi P'}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-white font-bold text-[13px] tracking-tight">JP</span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[520px] flex flex-col rounded-[20px] border border-border bg-[#0a0a0a] shadow-2xl overflow-hidden animate-chat-in">
          {/* Header */}
          <div className="px-5 py-3.5 border-b border-border flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <span className="text-accent text-[11px] font-bold tracking-tight">JP</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold leading-none">Jordi P</p>
              <p className="text-[10px] text-accent font-mono mt-0.5">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] flex flex-col gap-1.5">
                  <div className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-br-sm'
                      : 'bg-white/[0.04] border border-white/[0.08] text-text rounded-bl-sm'
                  }`}>
                    {msg.content}
                  </div>
                  {msg.links?.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-accent text-[12px] font-mono hover:underline self-start"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {msg.quickReplies.map(qr => (
                        <button
                          key={qr}
                          onClick={() => send(qr)}
                          className="text-[11px] border border-border text-text-secondary px-2.5 py-1 rounded-full hover:border-accent/50 hover:text-accent transition-colors duration-200"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-border shrink-0">
            <form onSubmit={e => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type something..."
                className="flex-1 bg-white/[0.04] border border-border rounded-full px-4 py-2 text-[13px] text-text placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-8 h-8 rounded-full bg-accent flex items-center justify-center disabled:opacity-30 transition-opacity shrink-0"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

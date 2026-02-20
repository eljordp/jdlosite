'use client';

import { useState } from 'react';

export type Milestone = {
  date: string;       // "2025-01-15"
  label: string;      // short title
  description: string; // what happened
};

const MILESTONES: Milestone[] = [
  {
    date: '2024-11-01',
    label: 'Day 1',
    description: 'Started from zero. No connections, no playbook. Decided to go all in on AI and sales.',
  },
  {
    date: '2024-11-10',
    label: 'First website sold',
    description: 'Closed my first website deal for a few hundred bucks. Ugly, but it was revenue.',
  },
  {
    date: '2024-11-25',
    label: 'Repositioned offer',
    description: 'Same websites, new positioning. Started closing at $3,000. The product didn\'t change — the frame did.',
  },
  {
    date: '2024-12-05',
    label: 'Built AI receptionist',
    description: 'Built an AI receptionist product from scratch. Clients paying monthly. First taste of recurring revenue.',
  },
  {
    date: '2024-12-15',
    label: 'Invested in mentors',
    description: 'Put real money into education: mentors, programs, courses. Compressed years into weeks.',
  },
  {
    date: '2025-01-05',
    label: 'AI sales team live',
    description: 'Stood up an entire sales operation running on AI. Outbound, follow-up, CRM — all automated.',
  },
  {
    date: '2025-01-15',
    label: 'Closed DHL',
    description: 'Closed DHL ($92B, Chicago). Enterprise-level. 2–3 months from beginner to this.',
  },
  {
    date: '2025-01-20',
    label: 'Closed P.F. Chang\'s',
    description: 'Closed P.F. Chang\'s ($1B+). Back to back enterprise wins. The systems work.',
  },
  {
    date: '2025-02-01',
    label: 'Launched JDLO',
    description: 'Launched the JDLO platform. Everything I learned, systematized and taught to the right people.',
  },
];

// Group milestones by month
function groupByMonth(milestones: Milestone[]) {
  const groups: { month: string; items: Milestone[] }[] = [];
  for (const m of milestones) {
    const d = new Date(m.date + 'T00:00:00');
    const key = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const existing = groups.find(g => g.month === key);
    if (existing) {
      existing.items.push(m);
    } else {
      groups.push({ month: key, items: [m] });
    }
  }
  return groups;
}

function formatDay(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.getDate().toString();
}

export default function ProgressBoard() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const groups = groupByMonth(MILESTONES);

  return (
    <div className="space-y-10">
      {groups.map(group => (
        <div key={group.month}>
          <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-mono mb-5">
            {group.month}
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
            {group.items.map(m => {
              const isOpen = expanded === m.date;
              return (
                <div key={m.date} className="relative">
                  <button
                    onClick={() => setExpanded(isOpen ? null : m.date)}
                    className={`w-full aspect-square rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? 'border-accent bg-accent/[0.12] shadow-[0_0_20px_rgba(41,151,255,0.15)]'
                        : 'border-border bg-surface/30 hover:border-accent/40 hover:bg-accent/[0.04]'
                    }`}
                  >
                    <span className={`text-[18px] font-bold tracking-tight leading-none ${isOpen ? 'text-accent' : 'text-text'}`}>
                      {formatDay(m.date)}
                    </span>
                    <span className="text-[8px] text-text-muted font-mono leading-none truncate w-full px-1">
                      {m.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Expanded detail for this month */}
          {group.items.map(m => {
            if (expanded !== m.date) return null;
            return (
              <div
                key={m.date + '-detail'}
                className="mt-3 rounded-2xl border border-accent/25 bg-accent/[0.04] p-6 animate-in"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-text text-[15px] font-semibold tracking-[-0.02em] mb-1">
                      {m.label}
                    </p>
                    <p className="text-text-muted text-[11px] font-mono">
                      {new Date(m.date + 'T00:00:00').toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => setExpanded(null)}
                    className="text-text-muted hover:text-text text-lg leading-none transition-colors"
                  >
                    &times;
                  </button>
                </div>
                <p className="text-text-secondary text-[14px] leading-relaxed mt-4">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

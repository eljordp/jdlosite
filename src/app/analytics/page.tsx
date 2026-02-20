import { kv } from '@vercel/kv';
import { redirect } from 'next/navigation';

// Operator quiz question labels for display
const OP_QUESTIONS = [
  { label: 'Role', options: ['founder', 'exec', 'manager', 'solo'] },
  { label: 'Team size', options: ['50plus', '11to50', '2to10', 'solo'] },
  { label: 'Decision authority', options: ['yes', 'mostly', 'influence', 'no'] },
  { label: 'Biggest pain', options: ['manual', 'inconsistent', 'nostrategy', 'sales'] },
  { label: 'Cost of not fixing', options: ['high', 'moderate', 'minor', 'unsure'] },
  { label: 'Tried before', options: ['tried_failed', 'partial', 'talked', 'first'] },
  { label: 'AI usage today', options: ['none', 'basic', 'some', 'heavy'] },
  { label: 'Budget', options: ['ready', 'have', 'request', 'none'] },
  { label: 'Success in 90 days', options: ['specific', 'trained', 'strategy', 'unsure'] },
  { label: 'Timeline', options: ['now', 'soon', 'quarter', 'scoping'] },
];

const TRACKS = ['ai-automation', 'sales-systems', 'content-brand', 'team-operations', 'prompt-engineering'];
const TRACK_LABELS: Record<string, string> = {
  'ai-automation': 'AI & Automation',
  'sales-systems': 'Sales Systems',
  'content-brand': 'Content & Brand',
  'team-operations': 'Team & Operations',
  'prompt-engineering': 'Prompt Engineering',
};

async function getData() {
  if (!process.env.KV_REST_API_URL) return null;

  // Operator quiz keys
  const opKeys = [
    'op:total', 'op:pass', 'op:fail',
    ...Array.from({ length: 10 }, (_, i) => i + 1).flatMap(q =>
      OP_QUESTIONS[q - 1].options.map(v => `op:q${q}:${v}`)
    ),
    ...Array.from({ length: 10 }, (_, i) => `op:score:${i + 1}`),
  ];

  // Skills quiz keys
  const sqKeys = [
    'sq:total',
    ...TRACKS.map(t => `sq:track:${t}`),
    ...TRACKS.map(t => `sq:track2:${t}`),
  ];

  // Lead form keys
  const leadKeys = ['lead:student', 'lead:business', 'lead:mentorship', 'lead:careers'];

  const all = await kv.mget<number[]>(...opKeys, ...sqKeys, ...leadKeys);

  const get = (key: string) => {
    const idx = [...opKeys, ...sqKeys, ...leadKeys].indexOf(key);
    return (all[idx] as number) || 0;
  };

  return { get, opKeys, sqKeys, leadKeys };
}

function Bar({ value, max, accent = false }: { value: number; max: number; accent?: boolean }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-[6px] bg-surface rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${accent ? 'bg-accent' : 'bg-border-hover'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[12px] font-mono text-text-muted w-8 text-right">{value}</span>
    </div>
  );
}

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const params = await searchParams;
  const password = process.env.ANALYTICS_PASSWORD;

  if (!password || params.key !== password) {
    redirect('/');
  }

  const data = await getData();

  return (
    <main className="min-h-screen bg-bg text-text px-6 py-16">
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-accent text-[11px] tracking-[0.4em] uppercase font-mono mb-2">JDLO</p>
            <h1 className="text-[2.5rem] font-bold tracking-[-0.04em]">Analytics</h1>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-[11px] font-mono">Live data</p>
            <p className="text-text-muted text-[11px] font-mono">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>

        {!data && (
          <div className="rounded-[16px] border border-border bg-surface/30 p-8 mb-8">
            <p className="text-text-muted text-[14px] font-mono">Vercel KV not configured. Add <code className="text-accent">KV_REST_API_URL</code> and <code className="text-accent">KV_REST_API_TOKEN</code> to your environment variables.</p>
          </div>
        )}

        {/* ── PostHog section ── */}
        <section className="mb-12">
          <h2 className="text-[11px] tracking-[0.4em] uppercase font-mono text-text-muted mb-5">Behavioral Analytics</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Page Views & Traffic', href: `https://us.posthog.com/project/${process.env.NEXT_PUBLIC_POSTHOG_KEY?.slice(4, 20) ?? ''}/insights`, desc: 'Which pages get the most visits and time on page' },
              { label: 'Click Heatmaps', href: 'https://us.posthog.com/heatmaps', desc: 'Where people click and scroll on each page' },
              { label: 'Session Recordings', href: 'https://us.posthog.com/replay', desc: 'Watch real user sessions' },
              { label: 'Navigation Funnels', href: 'https://us.posthog.com/funnels', desc: 'Where people drop off in the quiz or funnel' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1.5 rounded-[14px] border border-border bg-surface/30 p-5 hover:border-border-hover transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-semibold">{item.label}</span>
                  <span className="text-text-muted text-[12px]">→</span>
                </div>
                <p className="text-text-muted text-[12px]">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── Lead form counts ── */}
        <section className="mb-12">
          <h2 className="text-[11px] tracking-[0.4em] uppercase font-mono text-text-muted mb-5">Form Submissions</h2>
          <div className="rounded-[16px] border border-border bg-surface/30 p-6 grid sm:grid-cols-4 gap-6">
            {['student', 'mentorship', 'business', 'careers'].map(type => (
              <div key={type}>
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase font-mono mb-1">{type}</p>
                <p className="text-[2.5rem] font-bold tracking-[-0.04em]">{data?.get(`lead:${type}`) ?? '—'}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Operator quiz ── */}
        <section className="mb-12">
          <h2 className="text-[11px] tracking-[0.4em] uppercase font-mono text-text-muted mb-5">Operator Quiz</h2>

          {/* Summary row */}
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Total', value: data?.get('op:total') },
              { label: 'Pass', value: data?.get('op:pass') },
              { label: 'Fail', value: data?.get('op:fail') },
            ].map(item => (
              <div key={item.label} className="rounded-[14px] border border-border bg-surface/30 p-5">
                <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase font-mono mb-1">{item.label}</p>
                <p className="text-[2.5rem] font-bold tracking-[-0.04em]">{item.value ?? '—'}</p>
                {item.label !== 'Total' && (data?.get('op:total') ?? 0) > 0 && (
                  <p className="text-text-muted text-[11px] font-mono mt-1">
                    {Math.round(((item.value ?? 0) / (data?.get('op:total') ?? 1)) * 100)}%
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Score distribution */}
          <div className="rounded-[16px] border border-border bg-surface/30 p-6 mb-5">
            <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase font-mono mb-4">Score Distribution</p>
            <div className="space-y-2.5">
              {Array.from({ length: 10 }, (_, i) => i + 1).map(s => {
                const v = data?.get(`op:score:${s}`) ?? 0;
                const max = Math.max(...Array.from({ length: 10 }, (_, i) => data?.get(`op:score:${i + 1}`) ?? 0));
                return (
                  <div key={s} className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-text-muted w-4">{s}</span>
                    <div className="flex-1 h-[6px] bg-surface rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${s >= 7 ? 'bg-accent' : 'bg-border-hover'}`} style={{ width: `${max > 0 ? (v / max) * 100 : 0}%` }} />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted w-5 text-right">{v}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Per-question answer breakdown */}
          <div className="space-y-3">
            {OP_QUESTIONS.map((q, qi) => {
              const max = Math.max(...q.options.map(v => data?.get(`op:q${qi + 1}:${v}`) ?? 0));
              return (
                <div key={qi} className="rounded-[14px] border border-border bg-surface/30 p-5">
                  <p className="text-[12px] font-semibold mb-3">
                    <span className="text-accent font-mono mr-2">Q{qi + 1}</span>{q.label}
                  </p>
                  <div className="space-y-2">
                    {q.options.map(v => (
                      <div key={v} className="grid grid-cols-[100px_1fr] items-center gap-3">
                        <span className="text-[11px] font-mono text-text-muted truncate">{v}</span>
                        <Bar value={data?.get(`op:q${qi + 1}:${v}`) ?? 0} max={max} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Skills quiz ── */}
        <section className="mb-16">
          <h2 className="text-[11px] tracking-[0.4em] uppercase font-mono text-text-muted mb-5">Skills Quiz</h2>
          <div className="rounded-[16px] border border-border bg-surface/30 p-6">
            <div className="flex items-end gap-4 mb-8">
              <span className="text-[3rem] font-bold tracking-[-0.04em]">{data?.get('sq:total') ?? '—'}</span>
              <span className="text-text-muted text-[14px] mb-2">total completions</span>
            </div>
            <p className="text-text-muted text-[10px] tracking-[0.3em] uppercase font-mono mb-4">Top recommended tracks</p>
            <div className="space-y-2.5">
              {TRACKS.map(t => {
                const v = data?.get(`sq:track:${t}`) ?? 0;
                const max = Math.max(...TRACKS.map(t2 => data?.get(`sq:track:${t2}`) ?? 0));
                return (
                  <div key={t} className="grid grid-cols-[160px_1fr] items-center gap-3">
                    <span className="text-[11px] font-mono text-text-muted truncate">{TRACK_LABELS[t]}</span>
                    <Bar value={v} max={max} accent />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <p className="text-text-muted text-[11px] font-mono text-center">
          jdlo.site analytics · restricted
        </p>
      </div>
    </main>
  );
}

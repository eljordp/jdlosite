import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Gracefully skip KV ops if env vars aren't set yet
async function tryKv(fn: () => Promise<unknown>) {
  if (!process.env.KV_REST_API_URL) return;
  try { await fn(); } catch { /* KV not ready */ }
}

export async function POST(req: NextRequest) {
  try {
    const { type, answers, score, pass } = await req.json();

    if (type === 'operator') {
      // answers: [{ value: string, score: number }, ...]
      await tryKv(() => Promise.all([
        kv.incr('op:total'),
        kv.incr(pass ? 'op:pass' : 'op:fail'),
        kv.incr(`op:score:${score}`),
        ...(answers as { value: string }[]).map((a, i) =>
          kv.incr(`op:q${i + 1}:${a.value}`)
        ),
      ]));
    }

    if (type === 'mentorship') {
      await tryKv(() => Promise.all([
        kv.incr('mq:total'),
        kv.incr(pass ? 'mq:pass' : 'mq:fail'),
        kv.incr(`mq:score:${score}`),
        ...(answers as { value: string }[]).map((a, i) =>
          kv.incr(`mq:q${i + 1}:${a.value}`)
        ),
      ]));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // never block the quiz UX
  }
}

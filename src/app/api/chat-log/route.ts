import { NextRequest, NextResponse } from 'next/server';

// Chat logs are stored server-side only — no email notifications
export async function POST(req: NextRequest) {
  try {
    const { user, bot } = await req.json();
    if (!user || !bot) return NextResponse.json({ ok: false });
    // Log to console only (no email)
    console.log('[Jordi P Chat]', { user: user.slice(0, 100), bot: bot.slice(0, 100) });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

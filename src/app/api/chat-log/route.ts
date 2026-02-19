import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { user, bot } = await req.json();
    if (!user || !bot) return NextResponse.json({ ok: false });

    await resend.emails.send({
      from: 'Jordi P Chat <onboarding@resend.dev>',
      to: process.env.LEAD_EMAIL!,
      subject: `[Jordi P] Chat: "${user.slice(0, 60)}${user.length > 60 ? '…' : ''}"`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0a;color:#f5f5f7;border-radius:12px">
          <p style="color:#2997ff;font-size:11px;letter-spacing:0.4em;text-transform:uppercase;margin:0 0 20px">Jordi P — Chat Log</p>
          <div style="background:#1c1c1e;border-radius:10px;padding:16px;margin-bottom:12px">
            <p style="color:#86868b;font-size:10px;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.2em">User</p>
            <p style="color:#f5f5f7;margin:0;font-size:14px">${user}</p>
          </div>
          <div style="background:#1c1c1e;border-radius:10px;padding:16px">
            <p style="color:#2997ff;font-size:10px;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.2em">Jordi P</p>
            <p style="color:#f5f5f7;margin:0;font-size:14px">${bot}</p>
          </div>
          <p style="color:#48484a;font-size:11px;margin:20px 0 0">jdlo.co · ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

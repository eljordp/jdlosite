import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY not set');
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const COURSE_LINKS: Record<string, string> = {
  'AI & Automation': 'https://jdlo.site/courses/ai-automation',
  'Sales Systems': 'https://jdlo.site/courses/sales-systems',
  'Content & Brand': 'https://jdlo.site/courses/content-brand',
  'Team & Operations': 'https://jdlo.site/courses/team-operations',
  'Prompt Engineering': 'https://jdlo.site/courses/prompt-engineering',
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, primary, secondary, answers } = await req.json();

    const firstName = name.split(' ')[0];
    const courseLink = COURSE_LINKS[primary] ?? 'https://jdlo.site/courses';

    // ── 1. Notification to Jordan ──
    const notificationHtml = `
      <div style="font-family:monospace;max-width:620px;margin:0 auto;padding:32px;background:#0a0a0a;color:#f5f5f7;border-radius:16px">
        <p style="color:#2997ff;font-size:11px;letter-spacing:0.4em;text-transform:uppercase;margin:0 0 24px">JDLO Skills Quiz — New Lead</p>

        <div style="background:#1c1c1e;border-radius:12px;padding:20px;margin-bottom:16px">
          <p style="color:#86868b;font-size:10px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.2em">Contact</p>
          <p style="color:#f5f5f7;margin:0 0 4px;font-size:15px;font-weight:600">${name}</p>
          <p style="color:#2997ff;margin:0;font-size:13px">${email}</p>
        </div>

        <div style="background:#1c1c1e;border-radius:12px;padding:20px;margin-bottom:16px">
          <p style="color:#86868b;font-size:10px;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.2em">Results</p>
          <p style="color:#f5f5f7;margin:0 0 6px;font-size:13px">
            <span style="color:#2997ff">Primary →</span> ${primary}
          </p>
          ${secondary ? `<p style="color:#f5f5f7;margin:0;font-size:13px"><span style="color:#86868b">Secondary →</span> ${secondary}</p>` : ''}
        </div>

        <div style="background:#1c1c1e;border-radius:12px;padding:20px;margin-bottom:24px">
          <p style="color:#86868b;font-size:10px;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.2em">Their Answers</p>
          ${(answers as string[]).map((a, i) => `
            <p style="color:#f5f5f7;margin:0 0 6px;font-size:13px">
              <span style="color:#48484a">Q${i + 1}.</span> ${a}
            </p>
          `).join('')}
        </div>

        <p style="color:#48484a;font-size:11px;margin:0">jdlo.site · ${new Date().toLocaleString()}</p>
      </div>
    `;

    // ── 2. Auto-reply to quiz taker ──
    const autoReplyHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#f5f5f7;background:#0a0a0a;padding:40px;border-radius:16px">
        <p style="color:#2997ff;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 32px">JDLO</p>
        <p style="font-size:16px;margin:0 0 24px">Hey ${firstName},</p>
        <div style="font-size:15px;line-height:1.7;color:#c7c7cc">
          <p>Your results are in.</p>
          <p>Based on your answers, your primary track is <strong style="color:#f5f5f7">${primary}</strong>. That's where you start — don't overthink it.</p>
          ${secondary ? `<p style="color:#86868b;font-size:13px;border-left:2px solid #2997ff;padding-left:14px;margin:20px 0">Stack this next: <strong style="color:#c7c7cc">${secondary}</strong>. Build the foundation first, then layer it on.</p>` : ''}
          <p>When you're ready to move:</p>
          <p><a href="${courseLink}" style="color:#2997ff;font-size:14px">${courseLink}</a></p>
          <p>I review every application. If you're serious, you'll hear from me.</p>
        </div>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:32px 0 24px" />
        <p style="font-size:15px;line-height:1.7;color:#c7c7cc;margin:0">
          — Jordan Lopez<br/><span style="color:#48484a;font-size:12px">Founder, JDLO</span>
        </p>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0 16px" />
        <p style="color:#48484a;font-size:11px;margin:0">JDLO — AI Education & Operations · jdlo.site</p>
      </div>
    `;

    await Promise.all([
      getResend().emails.send({
        from: 'JDLO Quiz <jordan@jdlo.site>',
        to: process.env.LEAD_EMAIL || 'eljordp@gmail.com',
        subject: `[Quiz Lead] ${name} → ${primary}`,
        html: notificationHtml,
        replyTo: email,
      }),
      getResend().emails.send({
        from: 'JDLO <jordan@jdlo.site>',
        to: email,
        subject: `Your skill track — ${primary}`,
        html: autoReplyHtml,
        replyTo: process.env.LEAD_EMAIL || 'eljordp@gmail.com',
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

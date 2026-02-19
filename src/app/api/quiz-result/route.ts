import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, primary, secondary, answers } = await req.json();

    await resend.emails.send({
      from: 'JDLO Quiz <onboarding@resend.dev>',
      to: process.env.LEAD_EMAIL!,
      subject: `[Quiz Lead] ${name} → ${primary}`,
      html: `
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

          <p style="color:#48484a;font-size:11px;margin:0">jdlo.co · ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

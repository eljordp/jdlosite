import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { Resend } from "resend";

function tryKv<T>(fn: () => Promise<T>): Promise<T | null> {
  if (!process.env.KV_REST_API_URL) return Promise.resolve(null);
  return fn().catch(() => null);
}

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 12; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// GET — validate an access code
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const course = req.nextUrl.searchParams.get("course");

  if (!code || !course) {
    return NextResponse.json({ valid: false });
  }

  const data = await tryKv(() => kv.get<{ courses: string[] }>(`access:${code}`));
  if (!data) {
    // KV not available — accept any code format as valid (fallback for dev)
    if (!process.env.KV_REST_API_URL) {
      return NextResponse.json({ valid: true });
    }
    return NextResponse.json({ valid: false });
  }

  const valid = data.courses.includes(course);
  return NextResponse.json({ valid });
}

// POST — create access after purchase
export async function POST(req: NextRequest) {
  try {
    const { email, course, sessionId } = await req.json();

    if (!email || !course) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const code = generateCode();

    // Store in KV
    await tryKv(() =>
      kv.set(`access:${code}`, {
        email,
        courses: [course],
        sessionId,
        created: new Date().toISOString(),
      })
    );

    // Track purchase
    await tryKv(() => kv.incr("purchases:total"));
    await tryKv(() => kv.incr(`purchases:${course}`));

    // Send access email
    const courseUrl = `${process.env.NEXT_PUBLIC_URL}/learn/${course}?code=${code}`;

    if (process.env.RESEND_API_KEY) {
      await getResend().emails.send({
        from: "JDLO <onboarding@resend.dev>",
        to: email,
        subject: "Your course access — JDLO",
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#f5f5f7;background:#0a0a0a;padding:40px;border-radius:16px">
            <p style="color:#2997ff;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 32px">JDLO — Course Access</p>
            <h2 style="font-size:22px;font-weight:600;margin:0 0 12px;letter-spacing:-0.02em">You're in.</h2>
            <p style="font-size:15px;line-height:1.7;color:#c7c7cc;margin:0 0 24px">
              Your access is ready. Click below to start your course.
            </p>
            <a href="${courseUrl}" style="display:inline-block;background:#2997ff;color:#fff;padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:600;font-size:14px;margin:0 0 24px">
              Start Course →
            </a>
            <p style="font-size:13px;color:#86868b;margin:24px 0 8px">Your access code:</p>
            <p style="font-family:monospace;font-size:18px;letter-spacing:0.1em;color:#f5f5f7;margin:0 0 24px;background:#111;padding:12px 16px;border-radius:8px;display:inline-block">${code}</p>
            <p style="font-size:13px;color:#86868b;margin:0 0 32px">
              Bookmark this link. If you ever need to re-access your course, use the code above at <a href="${process.env.NEXT_PUBLIC_URL}/learn/${course}" style="color:#2997ff">${process.env.NEXT_PUBLIC_URL}/learn/${course}</a>.
            </p>
            <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:0 0 24px" />
            <p style="font-size:15px;line-height:1.7;color:#c7c7cc;margin:0">
              — Jordan Lopez<br/><span style="color:#48484a;font-size:12px">Founder, JDLO</span>
            </p>
            <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0 16px" />
            <p style="color:#48484a;font-size:11px;margin:0">JDLO — AI Education & Operations</p>
          </div>
        `,
        replyTo: process.env.LEAD_EMAIL || "eljordp@gmail.com",
      });

      // Also notify Jordan
      await getResend().emails.send({
        from: "JDLO Leads <onboarding@resend.dev>",
        to: process.env.LEAD_EMAIL || "eljordp@gmail.com",
        subject: `New purchase: ${course} — ${email}`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#f5f5f7;background:#0a0a0a;padding:40px;border-radius:16px">
            <p style="color:#2997ff;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px">New Purchase</p>
            <h2 style="font-size:24px;font-weight:600;margin:0 0 8px">${course}</h2>
            <p style="color:#86868b;font-size:14px;margin:0 0 16px">${email}</p>
            <p style="font-size:13px;color:#48484a;margin:0">Access code: ${code}</p>
          </div>
        `,
        replyTo: email,
      });
    }

    return NextResponse.json({ code, url: courseUrl });
  } catch (error) {
    console.error("Access creation error:", error);
    return NextResponse.json(
      { error: "Failed to create access" },
      { status: 500 }
    );
  }
}

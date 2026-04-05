import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, userId } = body as { email: string; userId: string };

    if (!email || !userId) {
      return NextResponse.json({ error: "Missing email or userId" }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const notifyEmail = process.env.NOTIFY_EMAIL || "jp@jdlo.site";

    const notificationHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a;background:#ffffff;padding:40px;border:1px solid #e5e5e5;border-radius:12px">
        <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#888;margin:0 0 24px">JDLO Academy</p>
        <h2 style="font-size:22px;font-weight:600;margin:0 0 24px;letter-spacing:-0.02em">New student signed up</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 16px 8px 0;color:#888;font-size:13px;white-space:nowrap">Email</td>
            <td style="padding:8px 0;font-size:14px;color:#1a1a1a">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 16px 8px 0;color:#888;font-size:13px;white-space:nowrap">User ID</td>
            <td style="padding:8px 0;font-size:13px;color:#555;font-family:monospace">${userId}</td>
          </tr>
          <tr>
            <td style="padding:8px 16px 8px 0;color:#888;font-size:13px;white-space:nowrap">Time</td>
            <td style="padding:8px 0;font-size:14px;color:#1a1a1a">${timestamp} PT</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:28px 0 20px" />
        <a href="https://jdlo.site/academy/admin/students" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;font-size:13px;font-weight:500;padding:10px 20px;border-radius:8px">View all signups</a>
        <p style="color:#bbb;font-size:11px;margin:20px 0 0">jdlo.site/academy</p>
      </div>
    `;

    const welcomeHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a;background:#ffffff;padding:40px;border:1px solid #e5e5e5;border-radius:12px">
        <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#888;margin:0 0 32px">JDLO Academy</p>
        <p style="font-size:16px;line-height:1.7;margin:0 0 20px">Hey — you just made a move most people never make.</p>
        <p style="font-size:15px;line-height:1.7;color:#333;margin:0 0 20px">You&apos;ve got 7 days of free access to everything. Don&apos;t waste it reading all the modules in one sitting. Pick one, do the assignment, and come back.</p>
        <p style="font-size:15px;line-height:1.7;color:#333;margin:0 0 32px">The students who get results are the ones who execute on week 1. That&apos;s it.</p>
        <a href="https://jdlo.site/academy/dashboard" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;font-size:14px;font-weight:500;padding:12px 24px;border-radius:8px">Go to your dashboard</a>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:32px 0 24px" />
        <p style="font-size:15px;color:#1a1a1a;margin:0">— JP</p>
        <p style="font-size:12px;color:#888;margin:4px 0 0">Founder, JDLO</p>
      </div>
    `;

    const [notifResult, welcomeResult] = await Promise.allSettled([
      getResend().emails.send({
        from: "JDLO Academy <academy@jdlo.site>",
        to: notifyEmail,
        subject: "New student signed up — JDLO Academy",
        html: notificationHtml,
      }),
      getResend().emails.send({
        from: "Jordan Lopez <jp@jdlo.site>",
        to: email,
        subject: "You're in. Here's what's next.",
        html: welcomeHtml,
        replyTo: notifyEmail,
      }),
    ]);

    const errors = [notifResult, welcomeResult]
      .filter((r) => r.status === "rejected")
      .map((r) => (r as PromiseRejectedResult).reason?.message || "Unknown error");

    if (errors.length === 2) {
      return NextResponse.json({ error: "Failed to send emails", details: errors }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Academy notify-signup error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

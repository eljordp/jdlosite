import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

async function tryKv(fn: () => Promise<unknown>) {
  if (!process.env.KV_REST_API_URL) return;
  try { await fn(); } catch { /* KV not ready */ }
}

// Lazy init so build doesn't crash without the env var
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

/* ── Auto-reply content per lead type ── */
function getAutoReply(type: string, firstName: string, course?: string) {
  const base = {
    greeting: `Hey ${firstName},`,
    signoff: `— Jordan Lopez<br/><span style="color:#48484a;font-size:12px">Founder, JDLO</span>`,
  };

  switch (type) {
    case "student":
      return {
        subject: course
          ? `Application received — ${course}`
          : "Application received — here's what's next",
        body: `
          <p>Application received${course ? ` for <strong style="color:#f5f5f7">${course}</strong>` : ""}.</p>
          <p>Most people stay on the fence. They read the page, tell themselves they'll think about it, and never move. You didn't do that. That already puts you ahead of most.</p>
          <p style="color:#86868b;font-size:13px;border-left:2px solid #2997ff;padding-left:14px;margin:24px 0">
            I review every application personally. Not everyone gets in — and that's the point. The people inside this program are serious, and I intend to keep it that way.
          </p>
          <p>Here's what happens next:</p>
          <table style="width:100%;border-collapse:collapse;margin:20px 0">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">01</strong> &nbsp; I review your application</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">02</strong> &nbsp; If you're a fit, you'll hear from me within 24–48 hours</td></tr>
            <tr><td style="padding:10px 0;color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">03</strong> &nbsp; We get you started</td></tr>
          </table>
          <p>If I think a different track would serve you better, I'll tell you that too. I'm not here to sell you something that doesn't fit.</p>
          <p>Sit tight.</p>
        `,
        ...base,
      };

    case "mentorship":
      return {
        subject: "Application received — here's what happens next",
        body: `
          <p>I got your mentorship application. Appreciate you taking the time.</p>
          <p>Here's what the mentorship includes:</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">Weekly 1-on-1 Calls</strong> — 60 min deep dives on your goals</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">Custom Roadmap</strong> — built around your specific situation</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">Direct Access</strong> — message me between calls, never get stuck</td></tr>
            <tr><td style="padding:10px 0;color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">Accountability</strong> — I push you to move faster than you would alone</td></tr>
          </table>
          <p>I only take on 5 mentees at a time, so I review every application personally.</p>
          <p>A <strong>Program Advisor</strong> will follow up with you within 24 hours to discuss fit and next steps.</p>
        `,
        ...base,
      };

    case "business":
      return {
        subject: "We got your inquiry — let's talk",
        body: `
          <p>Thanks for reaching out. I take every business inquiry seriously.</p>
          <p>Here's what a typical engagement looks like:</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">01 — Audit</strong> &nbsp; Deep dive into your current workflows and AI gaps</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">02 — Train</strong> &nbsp; Custom team training on the tools that matter</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">03 — Build</strong> &nbsp; Implement automations, agents, and integrations</td></tr>
            <tr><td style="padding:10px 0;color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">04 — Advisory</strong> &nbsp; Ongoing support to make sure it sticks</td></tr>
          </table>
          <p>I'll personally review your submission and reach out within 24 hours to schedule a strategy call.</p>
        `,
        ...base,
      };

    case "careers":
      return {
        subject: "Application received — thanks for your interest",
        body: `
          <p>Got your application. Good stuff.</p>
          <p>We're building a small, fast-moving team at the forefront of AI education. If there's a fit, I'll reach out personally.</p>
          <p>In the meantime, keep sharpening your skills.</p>
        `,
        ...base,
      };

    default:
      return {
        subject: "Thanks for reaching out",
        body: `<p>I received your submission and will be in touch shortly.</p>`,
        ...base,
      };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, course, ...rest } = body;

    if (!name || !email || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const labels: Record<string, string> = {
      student: "Course Waitlist",
      business: "Business Inquiry",
      mentorship: "Mentorship Application",
      careers: "Career Application",
    };

    const firstName = name.split(" ")[0];

    // ── 1. Notification email to Jordan ──
    const details = Object.entries(rest)
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#86868b;font-size:13px;vertical-align:top">${formatLabel(k)}</td><td style="padding:6px 0;font-size:14px">${v}</td></tr>`)
      .join("");

    const notificationHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#f5f5f7;background:#0a0a0a;padding:40px;border-radius:16px">
        <p style="color:#2997ff;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 24px">
          ${labels[type] || "New Lead"}
        </p>
        <h2 style="font-size:24px;font-weight:600;margin:0 0 8px;letter-spacing:-0.02em">${name}</h2>
        <p style="color:#86868b;font-size:14px;margin:0 0 32px">${email}</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 12px 6px 0;color:#86868b;font-size:13px">Type</td><td style="padding:6px 0;font-size:14px">${labels[type]}</td></tr>
          ${details}
        </table>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:32px 0 16px" />
        <p style="color:#48484a;font-size:11px;margin:0">Sent from jdlo.site</p>
      </div>
    `;

    // ── 2. Auto-reply email to the lead ──
    const reply = getAutoReply(type, firstName, course);

    const autoReplyHtml = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#f5f5f7;background:#0a0a0a;padding:40px;border-radius:16px">
        <p style="color:#2997ff;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin:0 0 32px">JDLO</p>
        <p style="font-size:16px;margin:0 0 24px">${reply.greeting}</p>
        <div style="font-size:15px;line-height:1.7;color:#c7c7cc">
          ${reply.body}
        </div>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:32px 0 24px" />
        <p style="font-size:15px;line-height:1.7;color:#c7c7cc;margin:0">
          ${reply.signoff}
        </p>
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0 16px" />
        <p style="color:#48484a;font-size:11px;margin:0">JDLO — AI Education & Operations</p>
      </div>
    `;

    // Track form submission count
    await tryKv(() => kv.incr(`lead:${type}`));

    // Send both emails — allSettled so one failure doesn't block the other
    await Promise.allSettled([
      getResend().emails.send({
        from: "JDLO Leads <onboarding@resend.dev>",
        to: process.env.LEAD_EMAIL || "eljordp@gmail.com",
        subject: `New ${labels[type] || "Lead"}: ${name}${course ? ` — ${course}` : ""}`,
        html: notificationHtml,
        replyTo: email,
      }),
      getResend().emails.send({
        from: "JDLO <onboarding@resend.dev>",
        to: email,
        subject: reply.subject,
        html: autoReplyHtml,
        replyTo: process.env.LEAD_EMAIL || "eljordp@gmail.com",
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead email error:", error);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/([a-z])([A-Z])/g, "$1 $2");
}

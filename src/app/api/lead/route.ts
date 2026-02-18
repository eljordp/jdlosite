import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Auto-reply content per lead type ── */
function getAutoReply(type: string, firstName: string) {
  const base = {
    greeting: `Hey ${firstName},`,
    signoff: `Talk soon,<br/>Jordan Lopez<br/><span style="color:#48484a;font-size:12px">Founder, JDLO</span>`,
  };

  switch (type) {
    case "student":
      return {
        subject: "You're on the list — here's what's coming",
        body: `
          <p>Thanks for signing up. You just made a smart move.</p>
          <p>Here's what you'll be learning inside the program:</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">01</strong> &nbsp; AI Fundamentals</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">02</strong> &nbsp; Prompt Engineering</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">03</strong> &nbsp; Automation & Workflows</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">04</strong> &nbsp; Building with AI</td></tr>
            <tr><td style="padding:10px 0;color:#f5f5f7;font-size:14px"><strong style="color:#2997ff">05</strong> &nbsp; AI Career & Freelancing</td></tr>
          </table>
          <p>This isn't theory — it's the exact systems I use to run real businesses. You'll go from understanding AI to actually building with it.</p>
          <p>One of our <strong>Program Advisors</strong> will be reaching out to you shortly to answer any questions and get you set up.</p>
          <p>In the meantime, keep an eye on your inbox.</p>
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
    const { type, name, email, ...rest } = body;

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
    const reply = getAutoReply(type, firstName);

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

    // Send both emails in parallel
    await Promise.all([
      resend.emails.send({
        from: "JDLO Leads <onboarding@resend.dev>",
        to: process.env.LEAD_EMAIL || "eljordp@gmail.com",
        subject: `New ${labels[type] || "Lead"}: ${name}`,
        html: notificationHtml,
        replyTo: email,
      }),
      resend.emails.send({
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

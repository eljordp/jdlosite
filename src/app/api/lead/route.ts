import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Build the detail rows from all form fields
    const details = Object.entries(rest)
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#86868b;font-size:13px;vertical-align:top">${formatLabel(k)}</td><td style="padding:6px 0;font-size:14px">${v}</td></tr>`)
      .join("");

    const html = `
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

    await resend.emails.send({
      from: "JDLO Leads <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL || "eljordp@gmail.com",
      subject: `New ${labels[type] || "Lead"}: ${name}`,
      html,
      replyTo: email,
    });

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

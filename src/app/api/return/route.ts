import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session ID" }, { status: 400 });
    }

    // Retrieve the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const email = session.customer_details?.email || session.customer_email;
    const courseName = session.metadata?.course || "";

    // Map course name back to slug
    const courseSlugMap: Record<string, string> = {
      "AI & Automation": "ai-automation",
      "Sales Systems": "sales-systems",
      "The Operator Playbook": "operator-playbook",
      "AI Mastery — Expert": "ai-mastery",
      // Legacy mappings for existing purchases
      "Prompt Engineering": "ai-automation",
      "Content & Brand": "ai-automation",
      "Team & Operations": "sales-systems",
      "Personal Growth & Discipline": "operator-playbook",
      "AI for Business": "ai-automation",
    };
    const courseSlug = courseSlugMap[courseName] || courseName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (!email || !courseSlug) {
      // Still successful payment, just can't auto-create access
      return NextResponse.json({ alreadyProcessed: true });
    }

    // Create access via the access API
    const baseUrl = process.env.NEXT_PUBLIC_URL || "https://jdlosite.vercel.app";
    const accessRes = await fetch(`${baseUrl}/api/access`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        course: courseSlug,
        sessionId,
      }),
    });

    const accessData = await accessRes.json();

    return NextResponse.json({
      code: accessData.code,
      url: accessData.url,
    });
  } catch (error) {
    console.error("Return processing error:", error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

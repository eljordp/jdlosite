import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Map Resend webhook event types to our status values
const EVENT_STATUS_MAP: Record<string, string> = {
  "email.sent": "sent",
  "email.delivered": "delivered",
  "email.bounced": "bounced",
  "email.opened": "opened",
  "email.clicked": "clicked",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const eventType: string | undefined = body.type;
    const data = body.data;

    if (!eventType || !data) {
      // Still return 200 — webhook should not fail
      return NextResponse.json({ received: true });
    }

    const status = EVENT_STATUS_MAP[eventType];

    if (!status) {
      // Unknown event type — acknowledge but skip
      return NextResponse.json({ received: true });
    }

    // Resend sends the email ID in data.email_id
    const resendId: string | undefined = data.email_id;

    if (!resendId) {
      return NextResponse.json({ received: true });
    }

    const admin = createAdminClient();

    // Update the email_logs row that matches this resend_id
    const { error } = await admin
      .from("email_logs")
      .update({ status })
      .eq("resend_id", resendId);

    if (error) {
      console.error("Resend webhook update error:", error);
      // Still return 200 so Resend does not retry indefinitely
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Resend webhook error:", err);
    // Always return 200 — Resend expects it
    return NextResponse.json({ received: true });
  }
}

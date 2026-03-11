import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { courseName, price, amount } = await req.json();

    if (!courseName || !amount) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${courseName} — JDLO Course`,
              description: `${price} · Online course by Jordan`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      return_url: `${(process.env.NEXT_PUBLIC_URL || "https://jdlo.site").replace(/\/$/, "")}/return?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        course: courseName,
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Checkout error:", message);
    return NextResponse.json(
      { error: "Failed to create checkout session", detail: message },
      { status: 500 }
    );
  }
}

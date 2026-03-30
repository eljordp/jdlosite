import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  // Service-role client for webhook (bypasses RLS)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const uid = (event.data.object as { metadata?: Record<string, string> })?.metadata?.supabase_uid;

  switch (event.type) {
    case 'checkout.session.completed': {
      if (uid) {
        const session = event.data.object as Stripe.Checkout.Session;
        await supabase
          .from('academy_users')
          .update({
            subscription_status: 'active',
            stripe_subscription_id: session.subscription as string ?? null,
          })
          .eq('id', uid);
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      await supabase
        .from('academy_users')
        .update({ subscription_status: 'canceled' })
        .eq('stripe_subscription_id', sub.id);
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice & { subscription?: string | Stripe.Subscription };
      const subId = typeof invoice.subscription === 'string' ? invoice.subscription : (invoice.subscription as Stripe.Subscription)?.id;
      if (subId) {
        await supabase
          .from('academy_users')
          .update({ subscription_status: 'past_due' })
          .eq('stripe_subscription_id', subId);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

// Price IDs — set these in your Stripe dashboard and add to .env.local
// STRIPE_PRICE_MONTHLY=price_xxx
// STRIPE_PRICE_LIFETIME=price_xxx
const PRICES: Record<string, string> = {
  monthly: process.env.STRIPE_PRICE_MONTHLY!,
  lifetime: process.env.STRIPE_PRICE_LIFETIME!,
};

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { plan = 'monthly' } = await req.json();
  const priceId = PRICES[plan];

  if (!priceId) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
  }

  const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL;

  // Get or create Stripe customer
  const { data: academyUser } = await supabase
    .from('academy_users')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single();

  let customerId = academyUser?.stripe_customer_id;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_uid: user.id },
    });
    customerId = customer.id;
    await supabase
      .from('academy_users')
      .update({ stripe_customer_id: customerId })
      .eq('id', user.id);
  }

  const isRecurring = plan === 'monthly';

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: isRecurring ? 'subscription' : 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/academy/dashboard?success=1`,
    cancel_url: `${origin}/academy/subscribe`,
    metadata: { supabase_uid: user.id, plan },
  });

  return NextResponse.json({ url: session.url });
}

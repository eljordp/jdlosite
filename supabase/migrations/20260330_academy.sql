-- JDLO Academy: user access tracking
-- Run this in your Supabase SQL editor or via `supabase db push`

create table if not exists academy_users (
  id                    uuid primary key references auth.users(id) on delete cascade,
  trial_start           timestamptz not null default now(),
  stripe_customer_id    text,
  stripe_subscription_id text,
  subscription_status   text not null default 'trial',
  -- 'trial' | 'active' | 'canceled' | 'past_due'
  created_at            timestamptz not null default now()
);

alter table academy_users enable row level security;

create policy "Users can read own academy record"
  on academy_users for select
  using (auth.uid() = id);

create policy "Users can insert own academy record"
  on academy_users for insert
  with check (auth.uid() = id);

create policy "Users can update own academy record"
  on academy_users for update
  using (auth.uid() = id);

-- Index for Stripe webhook lookups
create index if not exists academy_users_stripe_sub_idx
  on academy_users(stripe_subscription_id);

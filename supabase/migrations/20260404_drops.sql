create table if not exists weekly_drops (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text not null, -- markdown or plain text
  category    text not null default 'strategy', -- 'strategy' | 'tool' | 'mindset' | 'case-study'
  published_at timestamptz not null default now(),
  created_at  timestamptz not null default now()
);

alter table weekly_drops enable row level security;
create policy "Academy users can read drops" on weekly_drops for select using (true);
-- Only service role can insert (JP posts via admin)

-- Seed with 3 initial drops
insert into weekly_drops (title, body, category, published_at) values
(
  'The 48-Hour Client Test',
  'Before you commit to a long-term client relationship, run the 48-hour test. Give them a small task with a clear deadline. How they respond — their communication speed, their clarity on feedback, whether they pay the invoice on time — tells you everything about what it''s like to work with them long-term. I''ve avoided bad clients worth $2K in short-term revenue that would have cost me $20K in time and stress. The test costs nothing. The data is invaluable.',
  'strategy',
  now() - interval '14 days'
),
(
  'Perplexity for Competitor Research',
  'Stop Googling competitors. Use Perplexity with this prompt: "What are the top 5 [your niche] agencies in [city/market]? For each, summarize their pricing, positioning, and what clients say about them." You get structured competitive intelligence in 30 seconds. Then ask: "What gaps do you see in how these agencies position themselves?" Now you have your differentiator. Takes 5 minutes. Most operators skip this entirely.',
  'tool',
  now() - interval '7 days'
),
(
  'Why I Almost Quit in Month 3',
  'Month 3 is when most people quit. You''ve done enough to know how hard it is, but not enough to see results. I had one client, $900 in the bank, and a roster of people who said they were interested but never signed. I kept building anyway — not because I was confident, but because I had no better plan. Month 4 changed. The people who make it through month 3 aren''t the most talented. They''re the most stubborn.',
  'mindset',
  now() - interval '2 days'
);

-- Assignment submissions
create table if not exists assignment_submissions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  lesson_key  text not null,
  response    text not null, -- what they submitted
  submitted_at timestamptz not null default now(),
  unique(user_id, lesson_key) -- one submission per lesson (can update)
);

alter table assignment_submissions enable row level security;
create policy "Users can manage own submissions" on assignment_submissions
  for all using (auth.uid() = user_id);

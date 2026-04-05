-- Community posts
create table if not exists community_posts (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  display_name text not null default 'Operator',
  body        text not null,
  category    text not null default 'general', -- 'win' | 'question' | 'general' | 'intro'
  likes       int not null default 0,
  created_at  timestamptz not null default now()
);

alter table community_posts enable row level security;

create policy "Anyone in academy can read posts"
  on community_posts for select using (true);

create policy "Users can insert own posts"
  on community_posts for insert with check (auth.uid() = user_id);

create policy "Users can update own posts"
  on community_posts for update using (auth.uid() = user_id);

create policy "Users can delete own posts"
  on community_posts for delete using (auth.uid() = user_id);

-- Post likes (separate table to track who liked what)
create table if not exists community_likes (
  post_id   uuid not null references community_posts(id) on delete cascade,
  user_id   uuid not null references auth.users(id) on delete cascade,
  primary key (post_id, user_id)
);

alter table community_likes enable row level security;

create policy "Anyone can read likes" on community_likes for select using (true);
create policy "Users can like posts" on community_likes for insert with check (auth.uid() = user_id);
create policy "Users can unlike posts" on community_likes for delete using (auth.uid() = user_id);

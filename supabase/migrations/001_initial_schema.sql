-- ============================================================
-- PROFILES
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  email text,
  bio text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

-- ============================================================
-- AUTO-CREATE PROFILE ON SIGNUP
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, email)
  values (
    new.id,
    coalesce(split_part(new.email, '@', 1), ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- CONNECTIONS
-- ============================================================
create table public.connections (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles(id) on delete cascade,
  addressee_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'declined')),
  created_at timestamptz not null default now(),
  constraint unique_connection unique (requester_id, addressee_id),
  constraint no_self_connection check (requester_id != addressee_id)
);

alter table public.connections enable row level security;

create policy "Users can view own connections"
  on public.connections for select
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "Users can create connections"
  on public.connections for insert
  with check (auth.uid() = requester_id);

create policy "Addressee can update connection"
  on public.connections for update
  using (auth.uid() = addressee_id);

create policy "Either party can delete connection"
  on public.connections for delete
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

-- ============================================================
-- PROGRESS (lesson completion)
-- ============================================================
create table public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_slug text not null,
  lesson_key text not null,
  completed_at timestamptz not null default now(),
  unique (user_id, course_slug, lesson_key)
);

alter table public.progress enable row level security;

create policy "Users can view own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own progress"
  on public.progress for delete
  using (auth.uid() = user_id);

create policy "Connections can view progress"
  on public.progress for select
  using (
    exists (
      select 1 from public.connections c
      where c.status = 'accepted'
      and (
        (c.requester_id = auth.uid() and c.addressee_id = user_id)
        or (c.addressee_id = auth.uid() and c.requester_id = user_id)
      )
    )
  );

-- ============================================================
-- QUIZ RESULTS
-- ============================================================
create table public.quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_slug text not null,
  module_num text not null,
  passed boolean not null default false,
  score integer not null default 0,
  answers jsonb not null default '{}',
  completed_at timestamptz not null default now(),
  unique (user_id, course_slug, module_num)
);

alter table public.quiz_results enable row level security;

create policy "Users can view own quiz results"
  on public.quiz_results for select
  using (auth.uid() = user_id);

create policy "Users can insert own quiz results"
  on public.quiz_results for insert
  with check (auth.uid() = user_id);

create policy "Users can update own quiz results"
  on public.quiz_results for update
  using (auth.uid() = user_id);

create policy "Connections can view quiz results"
  on public.quiz_results for select
  using (
    exists (
      select 1 from public.connections c
      where c.status = 'accepted'
      and (
        (c.requester_id = auth.uid() and c.addressee_id = user_id)
        or (c.addressee_id = auth.uid() and c.requester_id = user_id)
      )
    )
  );

-- ============================================================
-- DISCUSSIONS (schema only, UI later)
-- ============================================================
create table public.discussions (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null,
  lesson_key text not null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  parent_id uuid references public.discussions(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.discussions enable row level security;

create policy "Discussions are viewable by everyone"
  on public.discussions for select using (true);

create policy "Authenticated users can post discussions"
  on public.discussions for insert
  with check (auth.uid() = user_id);

-- ============================================================
-- MESSAGES (schema only, UI later)
-- ============================================================
create table public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.profiles(id) on delete cascade,
  receiver_id uuid not null references public.profiles(id) on delete cascade,
  content text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "Users can view own messages"
  on public.messages for select
  using (auth.uid() = sender_id or auth.uid() = receiver_id);

create policy "Users can send messages"
  on public.messages for insert
  with check (auth.uid() = sender_id);

create policy "Receiver can mark messages read"
  on public.messages for update
  using (auth.uid() = receiver_id);

-- ============================================================
-- INDEXES
-- ============================================================
create index idx_progress_user_course on public.progress(user_id, course_slug);
create index idx_quiz_results_user_course on public.quiz_results(user_id, course_slug);
create index idx_connections_requester on public.connections(requester_id);
create index idx_connections_addressee on public.connections(addressee_id);
create index idx_discussions_lesson on public.discussions(course_slug, lesson_key);
create index idx_messages_receiver on public.messages(receiver_id, created_at);
create index idx_profiles_email on public.profiles(email);

-- ============================================================
-- BACKFILL existing auth users
-- ============================================================
insert into public.profiles (id, display_name, email)
select id, coalesce(split_part(email, '@', 1), ''), email
from auth.users
on conflict (id) do nothing;

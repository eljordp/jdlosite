create table if not exists quiz_results (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  lesson_key  text not null, -- e.g. "01-0"
  score       int not null, -- number correct
  total       int not null, -- total questions
  passed      boolean not null, -- score >= 70%
  answers     jsonb not null, -- array of selected indices
  completed_at timestamptz not null default now(),
  unique(user_id, lesson_key)
);

alter table quiz_results enable row level security;

create policy "Users can read own quiz results"
  on quiz_results for select using (auth.uid() = user_id);

create policy "Users can insert own quiz results"
  on quiz_results for insert with check (auth.uid() = user_id);

create policy "Users can update own quiz results"
  on quiz_results for update using (auth.uid() = user_id);

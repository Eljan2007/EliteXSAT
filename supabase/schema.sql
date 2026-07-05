-- ===========================================================================
-- Apex SAT Prep — Supabase schema
-- Run this in your Supabase project: SQL Editor → New query → paste → Run.
-- Then set backend:"supabase" and fill url + anonKey in assets/js/config.js.
-- ===========================================================================

-- 1) PROFILES — one row per user (name + target score) --------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  name         text,
  target_score int  default 1400,
  created_at   timestamptz default now()
);

-- 2) ATTEMPTS — one row per completed practice test -----------------------
create table if not exists public.attempts (
  id         text primary key,
  user_id    uuid not null references auth.users (id) on delete cascade,
  exam_id    text,
  total      int,
  payload    jsonb not null,
  created_at timestamptz default now()
);
create index if not exists attempts_user_created_idx
  on public.attempts (user_id, created_at desc);

-- 3) PROGRESS — at most one in-progress test per user ---------------------
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  payload    jsonb not null,
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security: every user can read/write ONLY their own rows.
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.attempts enable row level security;
alter table public.progress enable row level security;

-- profiles
drop policy if exists "own profile read"   on public.profiles;
drop policy if exists "own profile write"  on public.profiles;
create policy "own profile read"  on public.profiles for select using (auth.uid() = id);
create policy "own profile write" on public.profiles for all
  using (auth.uid() = id) with check (auth.uid() = id);

-- attempts
drop policy if exists "own attempts" on public.attempts;
create policy "own attempts" on public.attempts for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- progress
drop policy if exists "own progress" on public.progress;
create policy "own progress" on public.progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4) REPORTS — "Report a problem" complaints. Students submit; the admin reads them all.
create table if not exists public.reports (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete set null,
  email      text,
  message    text not null,
  context    text,
  status     text default 'open',
  created_at timestamptz default now()
);
create index if not exists reports_created_idx on public.reports (created_at desc);
alter table public.reports enable row level security;

-- Any signed-in student can submit a report:
drop policy if exists "submit report" on public.reports;
create policy "submit report" on public.reports for insert
  with check ( auth.uid() is not null );

-- Only the ADMIN (matched by email) can read / update reports.
-- >>> Replace BOTH emails below with YOUR admin address (must equal config.js adminEmail).
drop policy if exists "admin reads reports"  on public.reports;
drop policy if exists "admin writes reports" on public.reports;
create policy "admin reads reports"  on public.reports for select
  using ( (auth.jwt() ->> 'email') = 'elcanehmedli2007@gmail.com' );
create policy "admin writes reports" on public.reports for update
  using ( (auth.jwt() ->> 'email') = 'elcanehmedli2007@gmail.com' );

-- ---------------------------------------------------------------------------
-- Optional: auto-create a profile row when a new user signs up.
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Done. Tip: Authentication → Providers → Email → turn OFF "Confirm email"
-- for instant sign-in during development.

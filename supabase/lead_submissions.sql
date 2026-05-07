create table if not exists public.lead_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null default 'contact',
  name text not null,
  company text not null,
  email text not null,
  phone text,
  role text,
  industry text,
  description text
);

alter table public.lead_submissions enable row level security;

drop policy if exists "No public reads" on public.lead_submissions;
create policy "No public reads"
  on public.lead_submissions
  for select
  using (false);

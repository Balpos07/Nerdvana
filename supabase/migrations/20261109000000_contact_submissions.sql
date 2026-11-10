create table if not exists public.contact_submissions (
  id uuid primary key,
  name text not null,
  email text not null,
  company text not null,
  country text not null,
  services text[] not null,
  description text not null,
  budget text not null,
  timeframe text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;
revoke all on table public.contact_submissions from public, anon, authenticated;
grant all on table public.contact_submissions to service_role;

create table if not exists public.contact_rate_limits (
  ip_hash text primary key,
  window_started_at timestamptz not null,
  request_count integer not null
);

create index if not exists contact_rate_limits_window_started_at_idx
  on public.contact_rate_limits (window_started_at);

alter table public.contact_rate_limits enable row level security;
revoke all on table public.contact_rate_limits from public, anon, authenticated;
grant all on table public.contact_rate_limits to service_role;

create or replace function public.consume_contact_rate_limit(
  p_ip_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_count integer;
begin
  if p_ip_hash !~ '^[0-9a-f]{64}$'
    or p_limit < 1
    or p_limit > 100
    or p_window_seconds < 1
    or p_window_seconds > 86400
  then
    raise exception 'Invalid contact rate limit parameters',
      p_ip_hash, p_limit, p_window_seconds;
  end if;

  delete from public.contact_rate_limits
  where window_started_at < now() - interval '24 hours';

  insert into public.contact_rate_limits (
    ip_hash,
    window_started_at,
    request_count
  )
  values (p_ip_hash, now(), 1)
  on conflict (ip_hash) do update
  set
    window_started_at = case
      when public.contact_rate_limits.window_started_at
        <= now() - make_interval(secs => p_window_seconds)
      then now()
      else public.contact_rate_limits.window_started_at
    end,
    request_count = case
      when public.contact_rate_limits.window_started_at
        <= now() - make_interval(secs => p_window_seconds)
      then 1
      else public.contact_rate_limits.request_count + 1
    end
  returning request_count into current_count;

  return current_count <= p_limit;
end;
$$;

revoke all on function public.consume_contact_rate_limit(text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.consume_contact_rate_limit(text, integer, integer)
  to service_role;

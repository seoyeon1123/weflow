-- ============================================================
-- WEFLOW Supabase 스키마
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

-- 문의 / 무료진단
create table if not exists public.inquiries (
  id          bigint generated always as identity primary key,
  name        text not null,
  phone       text not null,
  type        text,
  industry    text,
  message     text,
  agree       boolean not null default false,
  status      text not null default '신규',   -- 신규 | 진행중 | 완료
  created_at  timestamptz not null default now()
);

-- 예약
create table if not exists public.reservations (
  id          bigint generated always as identity primary key,
  name        text not null,
  phone       text not null,
  type        text,
  industry    text,
  message     text,
  date        text not null,
  time        text not null,
  agree       boolean not null default false,
  status      text not null default '신규',   -- 신규 | 완료
  created_at  timestamptz not null default now()
);

-- RLS 활성화
alter table public.inquiries    enable row level security;
alter table public.reservations enable row level security;

-- 누구나 제출(INSERT)은 가능 (폼 접수)
create policy "anyone can insert inquiries"
  on public.inquiries for insert to anon, authenticated with check (true);
create policy "anyone can insert reservations"
  on public.reservations for insert to anon, authenticated with check (true);

-- 로그인한 관리자만 조회/수정/삭제
create policy "auth can read inquiries"
  on public.inquiries for select to authenticated using (true);
create policy "auth can update inquiries"
  on public.inquiries for update to authenticated using (true);
create policy "auth can delete inquiries"
  on public.inquiries for delete to authenticated using (true);

create policy "auth can read reservations"
  on public.reservations for select to authenticated using (true);
create policy "auth can update reservations"
  on public.reservations for update to authenticated using (true);
create policy "auth can delete reservations"
  on public.reservations for delete to authenticated using (true);

-- ============================================================
-- 관리자 계정은 Supabase 대시보드 > Authentication > Users 에서
-- "Add user" 로 직접 생성하세요 (이메일 + 비밀번호).
-- ============================================================

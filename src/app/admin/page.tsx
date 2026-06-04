'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Session } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabaseClient';
import { LogOut, Trash2 } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setErr('');
    const { error } = await createClient().auth.signInWithPassword({ email, password: pw });
    setLoading(false);
    if (error) setErr('로그인 실패: 이메일 또는 비밀번호를 확인해 주세요.');
    else onLogin();
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form onSubmit={submit} className="card p-8 w-full max-w-sm">
        <h1 className="text-xl font-medium text-ink mb-6">관리자 로그인</h1>
        <input className="w-full bg-white border border-line rounded-lg px-3 py-2.5 text-sm mb-3 focus:outline-none focus:border-accent"
          type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full bg-white border border-line rounded-lg px-3 py-2.5 text-sm mb-4 focus:outline-none focus:border-accent"
          type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} required />
        {err && <p className="text-xs text-red-600 mb-3">{err}</p>}
        <button className="btn-accent w-full" disabled={loading}>{loading ? '로그인 중…' : '로그인'}</button>
      </form>
    </div>
  );
}

interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const map: Record<string, string> = {
    '신규': 'bg-accent-tint text-accent',
    '진행중': 'bg-amber-100 text-amber-700',
    '완료': 'bg-green-100 text-green-700',
  };
  return <span className={`text-xs px-2 py-0.5 rounded-full ${map[status] ?? 'bg-line text-muted'}`}>{status}</span>;
}

type Row = Record<string, unknown> & { id: string; status: string };

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  title: string;
  rows: Row[];
  columns: Column[];
  statuses: string[];
  onStatus: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}

function Table({ title, rows, columns, statuses, onStatus, onDelete }: TableProps) {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-medium text-ink mb-4">{title} <span className="text-sm text-faint">({rows.length})</span></h2>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-faint">
              {columns.map((c) => <th key={c.key} className="px-4 py-3 font-medium whitespace-nowrap">{c.label}</th>)}
              <th className="px-4 py-3 font-medium">상태</th>
              <th className="px-4 py-3 font-medium text-right">관리</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td colSpan={columns.length + 2} className="px-4 py-8 text-center text-faint">데이터가 없습니다.</td></tr>
            )}
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-line/60 last:border-0 align-top">
                {columns.map((c) => {
                  const val = r[c.key];
                  const display = c.key === 'created_at' && typeof val === 'string' ? val.slice(0, 10) : (String(val ?? '') || '-');
                  return <td key={c.key} className="px-4 py-3 whitespace-nowrap text-ink/80">{display}</td>;
                })}
                <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-4 py-3">
                  <div className="flex gap-1.5 justify-end items-center">
                    {statuses.map((s) => (
                      <button key={s} onClick={() => onStatus(r.id, s)}
                        className="text-xs border border-line rounded px-2 py-1 hover:border-accent hover:text-accent">{s}</button>
                    ))}
                    <button onClick={() => onDelete(r.id)} className="text-xs text-red-500 hover:text-red-700 p-1" aria-label="삭제"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [inquiries, setInquiries] = useState<Row[]>([]);
  const [reservations, setReservations] = useState<Row[]>([]);

  const load = useCallback(async () => {
    const [iq, rv] = await Promise.all([
      createClient().from('inquiries').select('*').order('created_at', { ascending: false }),
      createClient().from('reservations').select('*').order('created_at', { ascending: false }),
    ]);
    setInquiries((iq.data ?? []) as Row[]);
    setReservations((rv.data ?? []) as Row[]);
  }, []);

  useEffect(() => {
    createClient().auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = createClient().auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => { if (session) load(); }, [session, load]);

  async function setStatus(
    table: string,
    id: string,
    status: string,
    setter: React.Dispatch<React.SetStateAction<Row[]>>,
    rows: Row[]
  ) {
    await createClient().from(table).update({ status }).eq('id', id);
    setter(rows.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  async function del(
    table: string,
    id: string,
    setter: React.Dispatch<React.SetStateAction<Row[]>>,
    rows: Row[]
  ) {
    if (!confirm('삭제하시겠습니까?')) return;
    await createClient().from(table).delete().eq('id', id);
    setter(rows.filter((r) => r.id !== id));
  }

  if (!ready) return <div className="section container-wide text-muted">불러오는 중…</div>;
  if (!session) return <div className="section container-wide"><Login onLogin={load} /></div>;

  return (
    <section className="section">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-10">
          <h1 className="display text-2xl md:text-3xl">관리자</h1>
          <button onClick={() => createClient().auth.signOut()} className="btn-outline gap-2 !py-2 !px-4 text-xs">
            <LogOut size={14} /> 로그아웃
          </button>
        </div>

        <Table
          title="예약"
          rows={reservations}
          columns={[
            { key: 'created_at', label: '접수일' },
            { key: 'name', label: '이름' },
            { key: 'phone', label: '연락처' },
            { key: 'date', label: '예약일' },
            { key: 'time', label: '시간' },
            { key: 'type', label: '종류' },
            { key: 'industry', label: '업종' },
          ]}
          statuses={['완료']}
          onStatus={(id, s) => setStatus('reservations', id, s, setReservations, reservations)}
          onDelete={(id) => del('reservations', id, setReservations, reservations)}
        />

        <Table
          title="문의 / 무료진단"
          rows={inquiries}
          columns={[
            { key: 'created_at', label: '접수일' },
            { key: 'name', label: '이름' },
            { key: 'phone', label: '연락처' },
            { key: 'type', label: '종류' },
            { key: 'industry', label: '업종' },
            { key: 'message', label: '요청사항' },
          ]}
          statuses={['진행중', '완료']}
          onStatus={(id, s) => setStatus('inquiries', id, s, setInquiries, inquiries)}
          onDelete={(id) => del('inquiries', id, setInquiries, inquiries)}
        />
      </div>
    </section>
  );
}

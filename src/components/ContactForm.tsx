'use client';

import { useState } from 'react';
import { PRODUCTION_TYPES, AGREE_LABEL } from '@/data/forms';

interface Props {
  variant?: 'inquiry' | 'reservation';
  date?: string;
  time?: string;
  compact?: boolean;
}

interface FormState {
  name: string;
  phone: string;
  type: string;
  industry: string;
  message: string;
  agree: boolean;
}

type Status = 'idle' | 'loading' | 'done' | 'error';

const field =
  'w-full bg-white border border-line rounded-lg px-3 py-2.5 text-sm text-ink placeholder-faint focus:outline-none focus:border-accent transition-colors';

export default function ContactForm({ variant = 'inquiry', date, time, compact = false }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', type: '', industry: '', message: '', agree: false,
  });
  const [status, setStatus] = useState<Status>('idle');

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? (e.target as HTMLInputElement).checked : false;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.agree) return alert('개인정보 수집 및 상담 동의에 체크해 주세요.');
    if (variant === 'reservation' && (!date || !time)) return alert('예약 날짜와 시간을 선택해 주세요.');

    setStatus('loading');
    const endpoint = variant === 'reservation' ? '/api/reservation' : '/api/inquiry';
    const payload = variant === 'reservation' ? { ...form, date, time } : form;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-8">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-lg font-medium text-ink mb-1">접수 완료</h3>
        <p className="text-sm text-muted">빠른 시간 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={compact ? 'space-y-2.5' : 'space-y-3'}>
      <input className={field} name="name" placeholder="이름" value={form.name} onChange={change} required />
      <input className={field} name="phone" type="tel" placeholder="연락처" value={form.phone} onChange={change} required />
      <select className={field} name="type" value={form.type} onChange={change} required>
        <option value="">제작 종류 선택</option>
        {PRODUCTION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
      <input className={field} name="industry" placeholder="업종" value={form.industry} onChange={change} required />
      {variant === 'reservation' && (
        <div className="text-xs text-muted bg-accent-tint border border-line rounded-lg px-3 py-2">
          선택한 일시: {date || '날짜 미선택'} {time || ''}
        </div>
      )}
      <textarea className={field} name="message" rows={compact ? 2 : 3} placeholder="추가 요청사항" value={form.message} onChange={change} />
      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" name="agree" checked={form.agree} onChange={change} className="mt-0.5 accent-accent" />
        <span className="text-xs text-muted">{AGREE_LABEL}</span>
      </label>
      <button type="submit" disabled={status === 'loading'} className="btn-accent w-full disabled:opacity-60">
        {status === 'loading' ? '전송 중…' : '무료진단 후 견적 받기'}
      </button>
      {status === 'error' && <p className="text-xs text-red-600 text-center">전송에 실패했어요. 잠시 후 다시 시도해 주세요.</p>}
    </form>
  );
}

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';

const TIMES: string[] = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const WEEK: string[] = ['일', '월', '화', '수', '목', '금', '토'];

interface ViewState {
  y: number;
  m: number;
}

function pad(n: number): string { return String(n).padStart(2, '0'); }

export default function ReservationBooking() {
  const today = new Date();
  const [view, setView] = useState<ViewState>({ y: today.getFullYear(), m: today.getMonth() });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [customTime, setCustomTime] = useState('');

  const first = new Date(view.y, view.m, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function move(delta: number) {
    let m = view.m + delta, y = view.y;
    if (m < 0) { m = 11; y--; } else if (m > 11) { m = 0; y++; }
    setView({ y, m });
  }

  const chosenTime = customTime || time;

  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
      {/* 달력 */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => move(-1)} className="p-1.5 hover:text-accent" aria-label="이전 달"><ChevronLeft size={18} /></button>
          <span className="text-sm font-medium">{view.y}년 {view.m + 1}월</span>
          <button onClick={() => move(1)} className="p-1.5 hover:text-accent" aria-label="다음 달"><ChevronRight size={18} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-faint mb-1">
          {WEEK.map((w) => <div key={w} className="py-1">{w}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            if (!d) return <div key={i} />;
            const ds = `${view.y}-${pad(view.m + 1)}-${pad(d)}`;
            const past = ds < todayStr;
            const selected = ds === date;
            return (
              <button
                key={i}
                disabled={past}
                onClick={() => setDate(ds)}
                className={`aspect-square rounded-lg text-sm transition-colors ${
                  selected ? 'bg-accent text-white'
                  : past ? 'text-line cursor-not-allowed'
                  : 'hover:bg-accent-tint text-ink'
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <p className="text-xs text-muted mb-2">시간대 선택</p>
          <div className="grid grid-cols-4 gap-2">
            {TIMES.map((t) => (
              <button
                key={t}
                onClick={() => { setTime(t); setCustomTime(''); }}
                className={`text-sm py-2 rounded-lg border transition-colors ${
                  time === t && !customTime ? 'border-accent bg-accent text-white' : 'border-line hover:border-accent'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <input
            value={customTime}
            onChange={(e) => { setCustomTime(e.target.value); setTime(''); }}
            placeholder="직접 입력 (예: 오후 8시 30분)"
            className="mt-2 w-full bg-white border border-line rounded-lg px-3 py-2.5 text-sm placeholder-faint focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* 예약 정보 폼 */}
      <div className="card p-6 lg:sticky lg:top-24">
        <h2 className="text-lg font-medium text-ink mb-4">예약 정보</h2>
        <ContactForm variant="reservation" date={date} time={chosenTime} />
      </div>
    </div>
  );
}

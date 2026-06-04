import type { Metadata } from 'next';
import ReservationBooking from '@/components/ReservationBooking';

export const metadata: Metadata = {
  title: '예약',
  description: '원하는 날짜와 시간을 선택해 WEFLOW 상담을 예약하세요.',
};

export default function ReservationPage() {
  return (
    <section className="section">
      <div className="container-wide">
        <p className="eyebrow">RESERVATION</p>
        <h1 className="display text-3xl md:text-4xl mt-3 mb-3">상담 예약</h1>
        <p className="text-muted mb-10">원하는 날짜와 시간을 선택해 주세요. 연중무휴 24시간 상담 가능합니다.</p>
        <ReservationBooking />
      </div>
    </section>
  );
}

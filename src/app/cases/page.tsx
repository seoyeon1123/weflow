import type { Metadata } from 'next';
import Link from 'next/link';
import CaseCard from '@/components/CaseCard';
import { CASES } from '@/data/cases';

export const metadata: Metadata = {
  title: '성공사례',
  description: 'PT샵·필라테스·보험·법률·카페 등 업종별 WEFLOW 제작 사례.',
  alternates: { canonical: '/cases' },
};

export default function CasesPage() {
  return (
    <section className="section">
      <div className="container-wide">
        <p className="eyebrow">PORTFOLIO</p>
        <h1 className="display text-3xl md:text-4xl mt-3 mb-3">성공사례</h1>
        <p className="text-muted mb-10">업종 특성에 맞춰 문의가 들어오는 구조로 제작했습니다.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CASES.map((c) => <CaseCard key={c.name} item={c} />)}
        </div>

        <div className="text-center mt-14">
          <Link href="#form" className="btn-accent">상담 문의하기</Link>
        </div>
      </div>
    </section>
  );
}

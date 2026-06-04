import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '이용약관',
  description: 'WEFLOW 서비스 이용약관.',
};

interface Section {
  h: string;
  p: string;
}

const sections: Section[] = [
  { h: '제1조 (목적)', p: "본 약관은 WEFLOW(이하 '회사')가 제공하는 홈페이지·랜딩페이지 제작 및 광고·운영 관리 서비스의 이용 조건과 절차에 관한 사항을 규정함을 목적으로 합니다." },
  { h: '제2조 (서비스의 내용)', p: '회사는 웹사이트 제작, 검색 노출(SEO) 등록, 광고 운영 및 사후 관리 등의 서비스를 제공합니다. 구체적인 범위와 비용은 상담 및 견적을 통해 협의합니다.' },
  { h: '제3조 (이용계약의 성립)', p: '서비스 이용계약은 이용자의 상담·견적 요청과 회사의 승낙, 그리고 비용 결제로 성립합니다.' },
  { h: '제4조 (이용자의 의무)', p: '이용자는 제작에 필요한 자료를 정확히 제공해야 하며, 제3자의 권리를 침해하는 콘텐츠를 요청해서는 안 됩니다.' },
  { h: '제5조 (비용 및 환불)', p: '서비스 비용 및 환불 기준은 상담 시 안내되는 조건을 따릅니다. 광고비는 고객 계정에서 직접 결제되며, 도메인 비용은 별도입니다.' },
  { h: '제6조 (책임의 한계)', p: '회사는 천재지변, 이용자의 귀책 사유 등 통제할 수 없는 사유로 인한 손해에 대해 책임을 지지 않습니다.' },
  { h: '제7조 (문의)', p: `서비스 관련 문의: ${SITE.email}` },
];

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-wide max-w-3xl">
        <p className="eyebrow">TERMS</p>
        <h1 className="display text-3xl md:text-4xl mt-3 mb-3">이용약관</h1>
        <p className="text-muted mb-10">본 약관은 WEFLOW 서비스 이용에 적용됩니다.</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-medium text-ink mb-2">{s.h}</h2>
              <p className="text-sm text-muted leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-faint mt-12">본 약관은 시행일로부터 적용됩니다.</p>
      </div>
    </section>
  );
}

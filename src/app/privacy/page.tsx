import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: 'WEFLOW 개인정보처리방침 — 수집 항목, 이용 목적, 보유 기간 안내.',
  alternates: { canonical: '/privacy' },
};

interface Section {
  h: string;
  p: string;
}

const sections: Section[] = [
  {
    h: '1. 수집하는 개인정보 항목',
    p: '회사는 상담 및 견적 제공을 위해 다음 정보를 수집합니다. 필수항목: 이름, 연락처. 선택항목: 제작 종류, 업종, 예약 일시, 추가 요청사항.',
  },
  {
    h: '2. 개인정보의 수집 및 이용 목적',
    p: '수집한 정보는 상담 접수 및 응대, 견적 안내, 서비스 제공 및 운영 관리 목적으로만 이용됩니다.',
  },
  {
    h: '3. 보유 및 이용 기간',
    p: '수집된 개인정보는 상담·서비스 목적 달성 후 지체 없이 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다. 이용자는 동의를 언제든 철회할 수 있으며, 철회 시 정보는 파기됩니다.',
  },
  {
    h: '4. 개인정보의 제3자 제공',
    p: '회사는 이용자의 개인정보를 동의 없이 외부에 제공하지 않습니다.',
  },
  {
    h: '5. 이용자의 권리',
    p: '이용자는 개인정보의 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래 연락처로 접수해 주세요.',
  },
  {
    h: '6. 문의처',
    p: `개인정보 관련 문의: ${SITE.email} (대표 ${SITE.ceo})`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-wide max-w-3xl">
        <p className="eyebrow">PRIVACY</p>
        <h1 className="display text-3xl md:text-4xl mt-3 mb-3">개인정보처리방침</h1>
        <p className="text-muted mb-10">WEFLOW(이하 &lsquo;회사&rsquo;)는 이용자의 개인정보를 중요하게 생각하며 관련 법령을 준수합니다.</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-medium text-ink mb-2">{s.h}</h2>
              <p className="text-sm text-muted leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-faint mt-12">본 방침은 시행일로부터 적용되며, 내용 변경 시 공지를 통해 안내합니다.</p>
      </div>
    </section>
  );
}

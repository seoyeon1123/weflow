import type { Metadata } from 'next';
import PlanCard from '@/components/PlanCard';
import { PRODUCTION_PLANS, CARE_PLANS, AD_PLANS, PRICING_NOTES, type Plan } from '@/data/pricing';

export const metadata: Metadata = {
  title: '제작플랜 & 가격안내',
  description: '랜딩·홈페이지·프리미엄 제작 플랜과 WE/FLOW/WEFLOW 케어 관리 플랜, 네이버·당근 광고 가격 안내. (VAT 포함)',
  alternates: { canonical: '/pricing' },
};

interface GroupProps {
  title: string;
  desc?: string;
  plans: Plan[];
  cols?: string;
}

function Group({ title, desc, plans, cols = 'lg:grid-cols-3' }: GroupProps) {
  return (
    <div className="mb-16">
      <h2 className="display text-2xl md:text-3xl mb-2">{title}</h2>
      {desc && <p className="text-muted mb-8">{desc}</p>}
      <div className={`grid gap-5 md:grid-cols-2 ${cols} items-stretch`}>
        {plans.map((p) => <PlanCard key={p.key} plan={p} />)}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container-wide">
        <p className="eyebrow">PRICING</p>
        <h1 className="display text-3xl md:text-4xl mt-3 mb-12">제작플랜 &amp; 가격안내</h1>

        <Group title="제작 플랜" desc="원하시는 플랜을 선택하세요. (필수 선택 · 3중 택1)" plans={PRODUCTION_PLANS} />
        <Group title="케어 관리 플랜" desc="제작 후 운영·광고·관리를 월 단위로 함께합니다." plans={CARE_PLANS} />
        <Group title="광고 플랜" desc="키워드 분석부터 성과 최적화까지." plans={AD_PLANS} cols="lg:grid-cols-2" />

        <div className="card p-6 mt-4">
          <ul className="space-y-2">
            {PRICING_NOTES.map((n) => (
              <li key={n} className="text-xs text-muted leading-relaxed">· {n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

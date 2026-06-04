import type { Metadata } from 'next';
import Link from 'next/link';
import { LANDING_HERO, LANDING_FEATURES, LANDING_STRUCTURE } from '@/data/landing';
import { PRODUCTION_PLANS, CARE_PLANS, AD_PLANS } from '@/data/pricing';
import PlanCard from '@/components/PlanCard';
import ProcessSteps from '@/components/ProcessSteps';
import ReviewMarquee from '@/components/ReviewMarquee';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '랜딩페이지',
  description: '문의로 이어지는 홈페이지. WEFLOW CARE PLAN으로 제작부터 운영·광고·관리까지 한 번에.',
};

export default function LandingPage() {
  const allPlans = [...PRODUCTION_PLANS, ...CARE_PLANS, ...AD_PLANS];
  return (
    <>
      <section className="section">
        <div className="container-wide grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <h1 className="display text-4xl md:text-5xl">{LANDING_HERO.title}</h1>
            <p className="text-muted mt-5 leading-relaxed">{LANDING_HERO.subtitle}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {LANDING_HERO.buttons.map((b) =>
                b.primary
                  ? <Link key={b.label} href={b.href} className="btn-accent">{b.label}</Link>
                  : <Link key={b.label} href={b.href} className="btn-outline">{b.label}</Link>
              )}
            </div>
          </div>
          <div className="card p-6 lg:sticky lg:top-24">
            <p className="eyebrow mb-1">WEFLOW CARE PLAN</p>
            <h2 className="text-lg font-medium text-ink mb-4">무료진단 후 견적받기</h2>
            <ContactForm variant="inquiry" compact />
          </div>
        </div>
      </section>

      <section className="section bg-mist border-y border-line">
        <div className="container-wide">
          <p className="eyebrow">WEFLOW CARE PLAN</p>
          <h2 className="display text-2xl md:text-3xl mt-3 mb-10">제작부터 운영 · 광고 · 관리까지 한 번에</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LANDING_FEATURES.map((f) => (
              <div key={f.title} className="card p-6">
                <h3 className="text-base font-medium text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <h2 className="display text-2xl md:text-3xl mb-3">{LANDING_STRUCTURE.title}</h2>
          <p className="text-muted max-w-3xl mb-6 leading-relaxed">{LANDING_STRUCTURE.intro}</p>
          <div className="flex flex-wrap gap-2 mb-14">
            {LANDING_STRUCTURE.points.map((p) => (
              <span key={p} className="text-sm border border-line rounded-full px-4 py-2 bg-white text-ink/75">{p}</span>
            ))}
          </div>
          <h3 className="display text-xl md:text-2xl mb-8">제작 진행과정</h3>
          <ProcessSteps />
        </div>
      </section>

      <section className="section bg-mist border-y border-line">
        <div className="container-wide">
          <h2 className="display text-2xl md:text-3xl mb-10">제작플랜 &amp; 가격</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {allPlans.map((p) => <PlanCard key={p.key} plan={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide mb-8">
          <h2 className="display text-2xl md:text-3xl">고객 후기</h2>
        </div>
        <ReviewMarquee />
      </section>
    </>
  );
}

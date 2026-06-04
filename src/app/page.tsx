import Link from 'next/link';
import { HERO, BENEFITS, FLOW, DIAGNOSIS_POINTS, STATS } from '@/data/home';
import { CASES, HOME_CASES } from '@/data/cases';
import CaseCard from '@/components/CaseCard';
import ReviewMarquee from '@/components/ReviewMarquee';
import StickyForm from '@/components/StickyForm';
import { Package, Rocket, Wallet, Headphones, Megaphone, Target, User, PenLine, CircleCheck, TrendingUp, Star, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  package: Package, rocket: Rocket, wallet: Wallet, headphones: Headphones, megaphone: Megaphone, target: Target,
  user: User, pen: PenLine, check: CircleCheck, trending: TrendingUp,
};

const COLORS: Record<string, { text: string; bg: string }> = {
  indigo:  { text: 'text-indigo-500',  bg: 'bg-indigo-50' },
  orange:  { text: 'text-orange-500',  bg: 'bg-orange-50' },
  emerald: { text: 'text-emerald-500', bg: 'bg-emerald-50' },
  sky:     { text: 'text-sky-500',     bg: 'bg-sky-50' },
  amber:   { text: 'text-amber-500',   bg: 'bg-amber-50' },
  rose:    { text: 'text-rose-500',    bg: 'bg-rose-50' },
};

export default function HomePage() {
  const homeCases = CASES.filter((c) => HOME_CASES.includes(c.name));

  return (
    <>
      {/* HERO */}
      <section className="section relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-accent-tint to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 72% 18%, #000, transparent)',
              maskImage: 'radial-gradient(ellipse 75% 55% at 72% 18%, #000, transparent)',
            }}
          />
        </div>
        <div className="container-wide grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <div>
            <p className="eyebrow">{HERO.topline}</p>
            <h1 className="display text-4xl md:text-5xl mt-4 whitespace-pre-line">{HERO.title}</h1>
            <p className="text-muted mt-5 leading-relaxed whitespace-pre-line">{HERO.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {HERO.buttons.map((b) =>
                b.primary ? (
                  <Link key={b.label} href={b.href} className="btn-accent">{b.label}</Link>
                ) : (
                  <Link key={b.label} href={b.href} className="btn-outline">{b.label}</Link>
                )
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-7">
              {HERO.badges.map((b) => (
                <span key={b} className="text-xs border border-line rounded-full px-3 py-1.5 text-ink/70 bg-white">{b}</span>
              ))}
            </div>
          </div>
          <StickyForm />
        </div>
      </section>

      {/* 케어플랜 혜택 */}
      <section className="section bg-mist border-y border-line">
        <div className="container-wide">
          <h2 className="display text-2xl md:text-3xl mb-3">WEFLOW만의 케어 플랜 혜택</h2>
          <p className="text-muted mb-10">제작 · 운영 · 광고 · 관리를 한 번에 연결합니다.</p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = ICONS[b.icon] ?? Package;
              const c = COLORS[b.color] ?? COLORS.sky;
              return (
                <div key={b.title} className="card px-4 py-4 flex items-center gap-3.5 transition-shadow duration-200 hover:shadow-md">
                  <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={c.text} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-ink">{b.title}</h3>
                    <p className="text-xs text-muted">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 제작 진행과정 */}
          <div className="mt-14">
            <h3 className="text-sm font-medium text-faint mb-8">제작 진행과정</h3>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-ink/20" aria-hidden />
              {FLOW.map((f, i) => {
                const Icon = ICONS[f.icon] ?? User;
                return (
                  <div key={f.step} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center ring-8 ring-mist">
                      <Icon size={22} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-line text-accent text-[11px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 text-[15px] font-medium text-ink">{f.step}</h4>
                    <p className="text-xs text-muted mt-1 max-w-[160px]">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 숫자 강조 밴드 */}
      <section className="bg-ink text-white py-14">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((st) => (
            <div key={st.label}>
              <div className="font-serif text-3xl md:text-4xl font-medium text-white flex items-center justify-center gap-1.5">
                {st.star && <Star size={26} className="text-accent" fill="currentColor" />}
                {st.value}
              </div>
              <div className="text-sm text-white/55 mt-2">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 성공사례 */}
      <section className="section">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display text-2xl md:text-3xl">성공사례</h2>
            <Link href="/cases" className="text-sm link-underline">더보기 →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
            {homeCases.map((c) => <CaseCard key={c.name} item={c} />)}
          </div>
        </div>
      </section>

      {/* 무료진단 */}
      <section className="section bg-accent-tint border-y border-line">
        <div className="container-wide grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="display text-2xl md:text-3xl mb-4">무료진단에서 이런 걸 확인해드립니다</h2>
            <ul className="space-y-2 text-ink/80">
              {DIAGNOSIS_POINTS.map((p) => <li key={p} className="text-sm">✓ {p}</li>)}
            </ul>
            <Link href="/diagnosis" className="btn-accent mt-7">문의 늘리는 무료 진단</Link>
          </div>
          <div className="card p-6">
            <p className="text-sm text-muted leading-relaxed">
              사람들은 검색하고 비교한 뒤 문의합니다. 홈페이지만 필요한 시대는 지났습니다.
              WEFLOW는 랜딩페이지 + 홈페이지 + 광고 + 사후관리까지 합리적인 비용과 높은 퀄리티로 한 번에 해결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 후기 */}
      <section className="section">
        <div className="container-wide mb-8 flex items-end justify-between">
          <h2 className="display text-2xl md:text-3xl">고객 후기</h2>
        </div>
        <ReviewMarquee />
      </section>
    </>
  );
}

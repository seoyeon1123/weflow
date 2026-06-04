import type { Metadata } from 'next';
import ProcessSteps from '@/components/ProcessSteps';
import { MANAGEMENT_GROUPS } from '@/data/services';
import { Megaphone, FileText, Instagram, AtSign, Target, KeyRound, MapPin, Rocket, Search, BarChart3, Network, type LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: '서비스',
  description: '상담·진단부터 기획·디자인·개발·SEO 상단등록·광고운영 사후관리까지 WEFLOW의 제작 진행과정.',
  alternates: { canonical: '/services' },
};

const ICONS: Record<string, LucideIcon> = {
  megaphone: Megaphone, blog: FileText, instagram: Instagram, threads: AtSign,
  target: Target, key: KeyRound, mappin: MapPin,
  rocket: Rocket, search: Search, chart: BarChart3, network: Network,
};

const COLORS: Record<string, { text: string; bg: string }> = {
  amber:   { text: 'text-amber-500',   bg: 'bg-amber-50' },
  emerald: { text: 'text-emerald-500', bg: 'bg-emerald-50' },
  pink:    { text: 'text-pink-500',    bg: 'bg-pink-50' },
  indigo:  { text: 'text-indigo-500',  bg: 'bg-indigo-50' },
  rose:    { text: 'text-rose-500',    bg: 'bg-rose-50' },
  orange:  { text: 'text-orange-500',  bg: 'bg-orange-50' },
  sky:     { text: 'text-sky-500',     bg: 'bg-sky-50' },
  teal:    { text: 'text-teal-500',    bg: 'bg-teal-50' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">SERVICE</p>
          <h1 className="display text-3xl md:text-4xl mt-3 mb-3">제작 진행과정</h1>
          <p className="text-muted mb-10">상담부터 사후관리까지, 문의가 들어오는 구조를 설계합니다.</p>
          <ProcessSteps />
        </div>
      </section>

      <section className="section bg-mist border-t border-line">
        <div className="container-wide">
          <div className="mb-12">
            <p className="eyebrow">DETAIL</p>
            <h2 className="display text-2xl md:text-3xl mt-3 mb-3">광고 운영 · 사후관리 시스템</h2>
            <p className="text-muted">트래픽 확보부터 매출 전환, 상단 점유까지 — 운영의 모든 것을 책임집니다.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
            {MANAGEMENT_GROUPS.map((group) => {
              const GIcon = ICONS[group.icon] ?? Megaphone;
              const gc = COLORS[group.color] ?? COLORS.sky;
              return (
                <div key={group.title} className="card p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl ${gc.bg} flex items-center justify-center shrink-0`}>
                      <GIcon size={20} className={gc.text} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-ink">{group.title}</h3>
                      <span className={`inline-block mt-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${gc.bg} ${gc.text}`}>
                        {group.badge}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {group.items.map((item) => {
                      const Icon = ICONS[item.icon] ?? FileText;
                      const c = COLORS[item.color] ?? COLORS.sky;
                      return (
                        <li key={item.label} className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                            <Icon size={17} className={c.text} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-ink">{item.label}</div>
                            <div className="text-xs text-muted leading-relaxed">{item.desc}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

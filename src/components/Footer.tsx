import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Instagram, Facebook, MessageCircle, BookOpen, type LucideIcon } from 'lucide-react';
import { SITE, FOOTER_MENU, LINKS, BOTTOM_BAR } from '@/data/site';

interface Social {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SOCIALS: Social[] = [
  { icon: MessageCircle, href: LINKS.kakao, label: '카카오톡' },
  { icon: Instagram, href: LINKS.instagram, label: '인스타그램' },
  { icon: BookOpen, href: LINKS.blog, label: '블로그' },
  { icon: Facebook, href: LINKS.facebook, label: '페이스북' },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA 밴드 */}
      <div className="bg-ink text-white">
        <div className="container-wide py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="display text-xl md:text-2xl text-white">문의로 이어지는 홈페이지, 지금 시작하세요</h2>
            <p className="text-sm text-white/55 mt-2">무료진단부터 제작 · 광고 · 운영까지 한 번에.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/diagnosis" className="btn-accent">무료진단 신청</Link>
            <Link href="/reservation" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-white/30 text-white transition-colors hover:bg-white/10 hover:border-white/50">
              상담 예약
            </Link>
          </div>
        </div>
      </div>

      {/* 메인 */}
      <div className="bg-mist border-t border-line">
        <div className="container-wide py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-block mb-3">
                <Image src="/logo_icon.png" alt="WEFLOW" width={38} height={38} className="object-contain" />
              </Link>
              <p className="text-sm text-muted mb-2.5 leading-relaxed">{SITE.tagline}</p>
              <div className="text-xs text-faint leading-relaxed">
                대표 : {SITE.ceo} · 사업자등록번호 : {SITE.bizNo}<br />
                이메일 : {SITE.email} · 운영시간 : {SITE.hours}
              </div>
              <div className="flex gap-2 mt-4">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link key={s.label} href={s.href} aria-label={s.label}
                      className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-colors">
                      <Icon size={15} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {Object.entries(FOOTER_MENU).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-sm font-medium text-ink mb-3">{title}</h4>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it.label}>
                      <Link href={it.href} className="text-sm text-muted hover:text-accent transition-colors">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 하단 링크 + 약관 한 줄 */}
          <div className="mt-8 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-1 text-sm">
              {BOTTOM_BAR.map((b, i) => (
                <Fragment key={b.label}>
                  {i > 0 && <span className="text-line px-2">·</span>}
                  <Link href={b.href} className={`transition-colors hover:text-accent ${b.icon === 'diagnosis' ? 'text-accent font-medium' : 'text-ink/80'}`}>
                    {b.label}{b.icon === 'diagnosis' ? ' →' : ''}
                  </Link>
                </Fragment>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-faint">
              <Link href="/privacy" className="hover:text-muted">개인정보처리방침</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-muted">이용약관</Link>
              <span className="px-1">·</span>
              <span>{SITE.copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

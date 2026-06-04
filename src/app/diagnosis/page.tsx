import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ReviewMarquee from '@/components/ReviewMarquee';
import { DIAGNOSIS_POINTS } from '@/data/home';

export const metadata: Metadata = {
  title: '무료진단받기',
  description: '문의 구조 진단, 디자인 점검, 검색 노출 분석, 문의 개선 제안까지 무료로 확인하고 견적을 받아보세요.',
};

export default function DiagnosisPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <p className="eyebrow">FREE DIAGNOSIS</p>
            <h1 className="display text-3xl md:text-4xl mt-3 mb-4">무료진단에서 이런 걸 확인해드립니다</h1>
            <ul className="space-y-3 mb-8">
              {DIAGNOSIS_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-ink/85">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-xs">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted leading-relaxed">
              디자인보다 중요한 건 문의가 들어오는 구조입니다. 현재 페이지를 진단하고
              어떻게 개선하면 문의가 늘어나는지 구체적으로 제안해 드립니다.
            </p>
          </div>

          <div className="card p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-medium text-ink mb-4">무료진단 후 견적받기</h2>
            <ContactForm variant="inquiry" />
          </div>
        </div>
      </section>

      <section className="section bg-mist border-t border-line">
        <div className="container-wide mb-8">
          <h2 className="display text-2xl md:text-3xl">고객 후기</h2>
        </div>
        <ReviewMarquee />
      </section>
    </>
  );
}

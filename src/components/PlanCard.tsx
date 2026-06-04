'use client';

import { Check, Crown } from 'lucide-react';
import type { Plan } from '@/data/pricing';

interface Props {
  plan: Plan;
}

export default function PlanCard({ plan }: Props) {
  const { name, subtitle, period, features, original, price, highlight } = plan;

  function inquire() {
    const label = subtitle ? `${name} (${subtitle}) · ${price}` : `${name} · ${price}`;
    window.dispatchEvent(new CustomEvent('open-form-modal', { detail: { plan: label } }));
  }

  return (
    <div
      id={`plan-${plan.key}`}
      className={`relative scroll-mt-24 rounded-xl bg-white p-6 flex flex-col transition-shadow [&:target]:ring-2 [&:target]:ring-accent [&:target]:ring-offset-2 ${
        highlight ? 'border-2 border-accent bg-accent-tint' : 'border border-line'
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-accent text-white text-xs px-3 py-1 rounded-full">
          <Crown size={13} /> 추천
        </span>
      )}
      <div className="mb-1">
        <span className="text-base font-bold text-ink">{name}</span>
        {subtitle && <span className="text-sm text-muted ml-2">{subtitle}</span>}
      </div>
      {period && <p className="text-xs text-faint mb-4">{period}</p>}

      <ul className="space-y-2 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
            <Check size={15} className="text-accent mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {original && <div className="text-sm text-faint line-through">{original}</div>}
        <div className={`text-2xl font-bold ${highlight ? 'text-accent' : 'text-ink'}`}>{price}</div>
        <p className="text-[11px] text-faint mt-1">VAT 포함</p>
      </div>

      <button type="button" onClick={inquire} className={`mt-5 ${highlight ? 'btn-accent' : 'btn-outline'} w-full`}>
        상담 신청
      </button>
    </div>
  );
}

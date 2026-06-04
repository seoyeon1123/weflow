'use client';

import { useState } from 'react';
import { Check, Crown } from 'lucide-react';
import { PRODUCTION_PLANS } from '@/data/pricing';

export default function ProductionPlanSelector() {
  const defaultKey = PRODUCTION_PLANS.find((p) => p.highlight)?.key ?? PRODUCTION_PLANS[0].key;
  const [selected, setSelected] = useState(defaultKey);
  const current = PRODUCTION_PLANS.find((p) => p.key === selected);

  function apply() {
    if (!current) return;
    const label = `${current.name} (${current.subtitle}) · ${current.price}`;
    window.dispatchEvent(new CustomEvent('open-form-modal', { detail: { plan: label } }));
  }

  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      {PRODUCTION_PLANS.map((plan) => {
        const isSel = plan.key === selected;
        return (
          <button
            key={plan.key}
            type="button"
            onClick={() => setSelected(plan.key)}
            aria-pressed={isSel}
            className={`text-left rounded-xl bg-white p-6 transition-colors ${
              isSel ? 'border-2 border-accent bg-accent-tint' : 'border border-line hover:border-accent/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <span
                className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  isSel ? 'bg-accent text-white' : 'border border-line text-transparent'
                }`}
              >
                <Check size={15} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base font-bold text-ink">{plan.name}</span>
                  <span className="text-sm text-muted">{plan.subtitle}</span>
                  {plan.highlight && <Crown size={14} className="text-accent" />}
                </div>
                {plan.period && <p className="text-xs text-faint mt-0.5">{plan.period}</p>}
                <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-sm text-ink/80">
                      <Check size={13} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right shrink-0">
                {plan.original && <div className="text-sm text-faint line-through">{plan.original}</div>}
                <div className={`text-2xl font-bold ${isSel ? 'text-accent' : 'text-ink'}`}>{plan.price}</div>
                <p className="text-[11px] text-faint mt-1">VAT 포함</p>
              </div>
            </div>
          </button>
        );
      })}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-mist border border-line rounded-xl px-5 py-4">
        <p className="text-sm text-muted">
          선택한 플랜: <b className="text-ink font-medium">{current?.name}</b> · 상담 신청 시 문의 폼에 자동 첨부됩니다.
        </p>
        <button type="button" onClick={apply} className="btn-accent shrink-0">
          선택한 플랜으로 상담 신청
        </button>
      </div>
    </div>
  );
}

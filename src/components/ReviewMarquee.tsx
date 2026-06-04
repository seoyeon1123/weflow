import { Star } from 'lucide-react';
import { REVIEWS } from '@/data/reviews';

interface RowProps {
  items: string[];
  reverse?: boolean;
}

function Row({ items, reverse }: RowProps) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`flex gap-4 w-max transform-gpu will-change-transform ${reverse ? 'animate-[marquee_50s_linear_infinite_reverse]' : 'animate-marquee'}`}>
        {doubled.map((r, i) => (
          <div key={i} className="card px-5 py-4 w-[280px] shrink-0">
            <div className="flex gap-0.5 mb-2 text-accent">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={13} fill="currentColor" />)}
            </div>
            <p className="text-sm text-ink/80 leading-relaxed">{r}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  const half = Math.ceil(REVIEWS.length / 2);
  return (
    <div className="space-y-4">
      <Row items={REVIEWS.slice(0, half)} />
      <Row items={REVIEWS.slice(half)} reverse />
    </div>
  );
}

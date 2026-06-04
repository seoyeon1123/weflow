import Image from 'next/image';
import type { Case } from '@/data/cases';

interface Props {
  item: Case;
}

export default function CaseCard({ item }: Props) {
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line bg-line">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2.5">
        <div className="text-sm font-medium text-ink">{item.name}</div>
        <div className="text-xs text-faint group-hover:text-accent transition-colors">자세히 보기 →</div>
      </div>
    </a>
  );
}

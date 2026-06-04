import { PROCESS } from '@/data/services';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function ProcessSteps() {
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch">
      {PROCESS.map((p, i) => (
        <li key={p.no} className="contents">
          <div className="flex-1 flex flex-col items-center text-center px-3 py-4">
            <div className="w-12 h-12 rounded-full bg-accent text-white font-serif text-lg font-medium flex items-center justify-center mb-3">
              {p.no}
            </div>
            <h3 className="text-[15px] font-medium text-ink mb-1">{p.title}</h3>
            <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
          </div>

          {i < PROCESS.length - 1 && (
            <div className="flex items-center justify-center text-accent/60 shrink-0">
              <ChevronRight size={22} className="hidden md:block" />
              <ChevronDown size={20} className="md:hidden my-1" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

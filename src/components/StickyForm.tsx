import { STICKY_FORM } from '@/data/forms';
import ContactForm from './ContactForm';
import { DIAGNOSIS_POINTS } from '@/data/home';

export default function StickyForm() {
  return (
    <div className="card p-6 lg:sticky lg:top-24">
      <p className="eyebrow mb-1">{STICKY_FORM.title}</p>
      <h3 className="text-lg font-medium text-ink mb-3">{STICKY_FORM.subtitle}</h3>
      <ul className="text-xs text-muted mb-4 space-y-1">
        {DIAGNOSIS_POINTS.map((p) => <li key={p}><span className="text-emerald-500">✓</span> {p}</li>)}
      </ul>
      <ContactForm variant="inquiry" compact />
    </div>
  );
}

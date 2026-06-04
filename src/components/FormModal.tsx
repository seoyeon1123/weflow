'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import { STICKY_FORM } from '@/data/forms';

export default function FormModal() {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>(undefined);

  useEffect(() => {
    const openModal = (e: Event) => {
      const detail = (e as CustomEvent).detail as { plan?: string } | undefined;
      setPlan(detail?.plan);
      setOpen(true);
    };
    window.addEventListener('open-form-modal', openModal);

    const intercept = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('a[href="#form"], a[href="/#form"]');
      if (link) { e.preventDefault(); setPlan(undefined); setOpen(true); }
    };
    document.addEventListener('click', intercept);
    return () => {
      window.removeEventListener('open-form-modal', openModal);
      document.removeEventListener('click', intercept);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-cream border border-line rounded-2xl p-6 shadow-xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-faint hover:text-ink p-1.5 rounded-lg" aria-label="닫기">
          <X size={20} />
        </button>
        <p className="eyebrow mb-1">{STICKY_FORM.title}</p>
        <h3 className="text-lg font-medium text-ink mb-4">{STICKY_FORM.subtitle}</h3>
        <ContactForm variant="inquiry" compact initialPlan={plan} />
      </div>
    </div>
  );
}

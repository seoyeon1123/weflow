'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-form-modal'))}
      className="fixed bottom-6 right-6 z-40 btn-accent cursor-pointer shadow-lg gap-2 !rounded-full !px-5"
      aria-label="무료진단 문의"
    >
      <MessageCircle size={18} />
      무료진단 문의
    </button>
  );
}

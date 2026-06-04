'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-cream border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container-wide h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo_icon.png" alt="WEFLOW" width={28} height={28} priority className="object-contain" />
          <span className="text-lg font-bold tracking-tight"><span className="text-ink">WE</span><span className="text-accent">FLOW</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`text-sm transition-colors hover:text-ink ${
                pathname === item.href ? 'text-ink font-medium' : 'text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="메뉴">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-line px-5 py-3 flex flex-col">
          {NAV.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="py-2.5 text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

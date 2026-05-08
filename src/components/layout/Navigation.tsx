'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Tantra Foundations', href: '/tantra-foundations' },
  { label: 'BDSM Fundamentals', href: '/bdsm-fundamentals' },
  { label: 'Maine Retreat', href: '/maine-retreat' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Journal', href: '/blog' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled || !isHome
    ? 'bg-charcoal-800/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', navBg)}>
        <nav className="container-editorial flex items-center justify-between h-18 md:h-20">
          <Link href="/" className="font-display text-xl md:text-2xl text-ivory tracking-wide hover:text-gold transition-colors duration-300">
            Y &amp; E Retreats
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={cn(
                  'text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 link-underline',
                  pathname === item.href ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                )}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="hidden lg:inline-flex btn-primary text-xs">Inquire</Link>
          <button
            onClick={() => setMenuOpen(true)}
            className={cn('lg:hidden text-ivory p-2 hover:text-gold transition-colors', menuOpen && 'invisible')}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-charcoal-900 flex flex-col transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 h-18 md:h-20 border-b border-white/10 flex-shrink-0">
          <Link href="/" className="font-display text-xl text-ivory tracking-wide" onClick={() => setMenuOpen(false)}>
            Y &amp; E Retreats
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-ivory/70 hover:text-gold transition-colors p-2" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms' }}
                className={cn('transition-all duration-300', menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4')}>
                <Link href={item.href}
                  className={cn('block py-4 border-b border-white/8 font-display text-2xl font-light transition-colors duration-200', pathname === item.href ? 'text-gold' : 'text-ivory hover:text-gold')}
                  onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ transitionDelay: menuOpen ? `${80 + navItems.length * 50}ms` : '0ms' }}
            className={cn('mt-10 transition-all duration-300', menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4')}>
            <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>Inquire Now</Link>
          </div>
        </nav>
      </div>
    </>
  );
}

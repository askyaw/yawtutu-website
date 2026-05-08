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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled || !isHome
    ? 'bg-charcoal-800/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg
        )}
      >
        <nav className="container-editorial flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl md:text-2xl text-ivory tracking-wide hover:text-gold transition-colors duration-300"
          >
            Yaw Tutu
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 link-underline',
                    pathname === item.href
                      ? 'text-gold'
                      : 'text-ivory/80 hover:text-ivory'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex btn-primary text-xs"
          >
            Inquire
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-ivory p-2 hover:text-gold transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-charcoal-800/98 flex flex-col justify-center px-8 transition-all duration-500',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                className={cn(
                  'transition-all duration-400',
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'heading-md block transition-colors duration-300',
                    pathname === item.href ? 'text-gold' : 'text-ivory hover:text-gold'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              style={{ transitionDelay: menuOpen ? `${navItems.length * 60}ms` : '0ms' }}
              className={cn(
                'pt-4 transition-all duration-400',
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <Link href="/contact" className="btn-primary w-full justify-center">
                Inquire Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

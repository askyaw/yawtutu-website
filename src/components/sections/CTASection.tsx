import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'dark' | 'gold' | 'light';
  className?: string;
}

export function CTASection({ eyebrow, title, subtitle, primaryCta, secondaryCta, variant = 'dark', className }: CTASectionProps) {
  const bgClass = { dark: 'bg-charcoal-800 text-ivory', gold: 'bg-gold text-charcoal-800', light: 'bg-ivory-100 text-charcoal-800' }[variant];

  return (
    <section className={cn('section-padding', bgClass, className)}>
      <div className="container-narrow text-center">
        {eyebrow && <p className={cn('subheading mb-4', variant === 'dark' ? 'text-gold/80' : 'text-charcoal-600')}>{eyebrow}</p>}
        <h2 className={cn('heading-lg mb-5 text-balance', variant === 'dark' ? 'text-ivory' : 'text-charcoal-800')}>{title}</h2>
        {subtitle && <p className={cn('body-lg mb-10 text-pretty', variant === 'dark' ? 'text-ivory/70' : 'text-charcoal-600')}>{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <Link href={primaryCta.href} className={cn('btn-primary', variant === 'dark' ? '' : 'bg-charcoal-800 text-ivory hover:bg-charcoal-700')}>
              {primaryCta.label}<ArrowRight size={16} />
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className={cn('btn-outline', variant === 'dark' ? 'border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal-800 hover:border-ivory' : '')}>
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

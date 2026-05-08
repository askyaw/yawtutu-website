import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      {eyebrow && <p className={cn('subheading mb-4', light ? 'text-gold/80' : 'text-gold')}>{eyebrow}</p>}
      <h2 className={cn('heading-lg text-balance', light ? 'text-ivory' : 'text-charcoal-800')}>{title}</h2>
      {align === 'center' && <div className={cn('divider-gold mt-6 mb-6', 'mx-auto')} />}
      {align === 'left' && <div className="divider-gold-left mt-4 mb-5" />}
      {subtitle && <p className={cn('body-lg max-w-2xl text-pretty', align === 'center' && 'mx-auto', light ? 'text-ivory/70' : 'text-charcoal-600')}>{subtitle}</p>}
    </div>
  );
}

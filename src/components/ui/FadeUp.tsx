'use client';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function FadeUp({ children, delay = 0, className, threshold }: FadeUpProps) {
  const { ref, inView } = useInView(threshold);

  return (
    <div ref={ref} className={cn('transition-all duration-700 ease-out', className)}
      style={{ transitionDelay: `${delay}ms`, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)' }}>
      {children}
    </div>
  );
}

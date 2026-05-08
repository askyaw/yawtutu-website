'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { cn } from '@/lib/utils';

interface FAQ { q: string; a: string; }
interface FAQAccordionProps { faqs: FAQ[]; light?: boolean; }

export function FAQAccordion({ faqs, light = false }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-sand/40">
      {faqs.map(({ q, a }, i) => (
        <FadeUp key={q} delay={i * 60}>
          <div>
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group" aria-expanded={open === i}>
              <span className={cn('font-sans font-semibold text-sm leading-snug transition-colors duration-200 group-hover:text-gold', light ? 'text-ivory/90' : 'text-charcoal-800')}>{q}</span>
              <span className="flex-shrink-0 mt-0.5 text-gold/60 group-hover:text-gold transition-colors">
                {open === i ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div className={cn('overflow-hidden transition-all duration-300 ease-in-out', open === i ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0')}>
              <p className={cn('text-sm leading-relaxed', light ? 'text-ivory/60' : 'text-charcoal-500')}>{a}</p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

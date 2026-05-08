'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { cn } from '@/lib/utils';

const faqs = [
  { q: 'Do I need any prior experience?', a: 'None. All workshops welcome complete beginners alongside experienced practitioners. We meet you exactly where you are.' },
  { q: 'Are these workshops sexually explicit?', a: 'No. Our work is embodied and intimate in the broad sense — it explores connection, sensation, and relational dynamics — but is never pornographic or explicitly sexual.' },
  { q: 'Can I attend alone, or do I need a partner?', a: 'Most workshops welcome solo attendees and couples equally. The Maine retreat is designed specifically for couples.' },
  { q: 'How do you handle safety in workshops?', a: 'All exercises are optional. We use clear consent protocols, check-ins, and carefully held space. Your comfort and autonomy are paramount.' },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding-sm bg-[#f9f6f1]">
      <div className="container-editorial">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="subheading text-gold mb-4">Common Questions</p>
            <h2 className="heading-lg text-charcoal-800">Before you reach out</h2>
            <div className="divider-gold mx-auto mt-5" />
          </div>
        </FadeUp>
        <div className="max-w-2xl mx-auto divide-y divide-sand/40 mb-12">
          {faqs.map(({ q, a }, i) => (
            <FadeUp key={q} delay={i * 60}>
              <div>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group" aria-expanded={open === i}>
                  <span className="font-sans font-semibold text-charcoal-800 text-sm leading-snug group-hover:text-gold transition-colors duration-200">{q}</span>
                  <span className="flex-shrink-0 mt-0.5 text-gold/70 group-hover:text-gold transition-colors">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div className={cn('overflow-hidden transition-all duration-300 ease-in-out', open === i ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0')}>
                  <p className="text-sm text-charcoal-500 leading-relaxed">{a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={faqs.length * 60} className="text-center">
          <Link href="/faq" className="btn-outline border-charcoal-300 text-charcoal-700">All FAQs <ArrowRight size={14} /></Link>
        </FadeUp>
      </div>
    </section>
  );
}

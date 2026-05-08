'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'I came in curious and left transformed. The workshop created a genuinely safe container — I felt able to explore parts of myself I had kept hidden for years. Yaw holds space unlike anyone I have encountered.',
    author: 'M.R.',
    context: 'Tantra Foundations Workshop',
  },
  {
    id: '2',
    quote:
      'This was not what I expected — it was so much more. The focus on communication, nervous system awareness, and consent reframed everything I thought I knew about intimacy and power dynamics.',
    author: 'J. & T.',
    context: 'BDSM Fundamentals',
  },
  {
    id: '3',
    quote:
      'The Maine retreat was the reset we desperately needed. Slow mornings by the water, guided sessions that cracked us open, and evenings that reminded us why we chose each other. Absolute magic.',
    author: 'A. & P.',
    context: 'Maine VIP Retreat',
  },
  {
    id: '4',
    quote:
      'Safe, intelligent, deeply embodied. Yaw has a rare gift for making complex material feel accessible and human. I left with tools I still use every day.',
    author: 'S.L.',
    context: 'Tantra Foundations Workshop',
  },
];

interface TestimonialsSectionProps {
  light?: boolean;
}

export function TestimonialsSection({ light = false }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className={cn('section-padding', light ? 'bg-charcoal-700' : 'bg-charcoal-800')}>
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Testimonials"
          title="What participants say"
          light
        />

        <div className="max-w-3xl mx-auto text-center">
          <Quote size={32} className="text-gold/40 mx-auto mb-8" />

          <blockquote
            key={t.id}
            className="transition-all duration-500"
          >
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-light italic text-ivory/90 leading-relaxed mb-8 text-pretty">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer>
              <cite className="not-italic">
                <span className="subheading text-gold text-xs">{t.author}</span>
                {t.context && (
                  <span className="block text-xs text-ivory/40 mt-1">{t.context}</span>
                )}
              </cite>
            </footer>
          </blockquote>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-ivory/40 hover:text-gold transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'w-1.5 h-1.5 rounded-full transition-all duration-300',
                    i === current ? 'bg-gold w-5' : 'bg-ivory/30 hover:bg-ivory/60'
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="text-ivory/40 hover:text-gold transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

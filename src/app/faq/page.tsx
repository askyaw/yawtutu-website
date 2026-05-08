import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Yaw Tutu workshops, the Maine retreat, safety, consent, pricing, and what to expect.',
  path: '/faq',
});

const faqSections = [
  {
    category: 'General',
    faqs: [
      {
        q: 'Do I need any prior experience to attend?',
        a: "None whatsoever. Our workshops welcome complete beginners alongside experienced practitioners. The facilitation is carefully designed to meet everyone exactly where they are. What you bring is all you need: genuine curiosity and a willingness to show up.",
      },
      {
        q: 'Are these workshops sexually explicit?',
        a: "No. Our work is embodied and intimate in the broad human sense — we explore connection, sensation, presence, and relational dynamics — but nothing in our workshops is pornographic or explicitly sexual in content or instruction. The work is closer to somatic education and relational therapy than anything explicit.",
      },
      {
        q: 'Can I attend alone, or do I need a partner?',
        a: "Both are equally welcome in most workshops. Solo attendees are common and the facilitation fully accommodates them. The Maine retreat is designed specifically for couples. If you have questions about a specific offering, reach out and we will help you understand what works best.",
      },
      {
        q: 'Are all genders, orientations, and relationship structures welcome?',
        a: "Absolutely. All bodies, identities, orientations, and relationship configurations are genuinely and warmly welcomed. Our work is built on inclusive values and everyone belongs.",
      },
    ],
  },
  {
    category: 'Safety & Consent',
    faqs: [
      {
        q: 'How do you handle safety in workshops?',
        a: "Every exercise is completely optional — you are always in full choice. We establish clear consent agreements at the start of every workshop, use check-in practices throughout, and create space for participants to step back from anything without explanation or pressure. Our facilitators are experienced in trauma-informed practice.",
      },
      {
        q: "What if I feel triggered or uncomfortable during a session?",
        a: "This is normal and anticipated. We build in space for exactly this. You can always pause, step out, or speak with a facilitator privately. Every workshop includes time for integration, and our facilitators are skilled at holding complexity with care.",
      },
      {
        q: 'How are consent protocols structured in the BDSM Fundamentals workshop?',
        a: "Consent is not just a module in this workshop — it is the foundation every other topic is built on. We cover negotiation frameworks, enthusiastic consent, safewords and signals, ongoing check-ins, and the dynamics of consent under altered states. You will leave with a genuinely sophisticated understanding of consent as a living practice.",
      },
    ],
  },
  {
    category: 'Logistics & Pricing',
    faqs: [
      {
        q: 'What is the refund / cancellation policy?',
        a: "Cancellations made more than 14 days before a workshop receive a full refund minus a small processing fee. Within 14 days, we can offer a credit toward a future event. Retreats have specific cancellation terms that are shared at the time of booking. Please reach out if your circumstances are unusual — we always try to find a workable solution.",
      },
      {
        q: 'Where are workshops held?',
        a: "Workshop locations vary and are announced to registered participants in advance. We work with venues that are private, comfortable, and appropriate for embodied, relational work. The Maine retreat takes place at a private coastal property.",
      },
      {
        q: 'Are payment plans available?',
        a: "Yes — for the BDSM Fundamentals workshop and the Maine retreat, payment plans can be arranged. Please mention this when you reach out and we will work something out.",
      },
      {
        q: 'What should I bring to a workshop?',
        a: "Comfortable, layered clothing suitable for movement and relaxation. A journal and pen. An open mind. Specific packing details are shared after registration.",
      },
    ],
  },
  {
    category: 'The Maine Retreat',
    faqs: [
      {
        q: 'How far in advance should we book the Maine retreat?',
        a: "We recommend reaching out at least 6–8 weeks in advance to ensure availability and allow time for a pre-retreat consultation call. Some dates book out further ahead — earlier is always better.",
      },
      {
        q: 'Can the retreat be customized for our specific needs?',
        a: "Yes — this is one of the defining features of the retreat. Before your arrival, we have a detailed consultation to understand your intentions, relationship context, and anything you want to prioritize or avoid. The weekend is then shaped around you.",
      },
      {
        q: 'Is the retreat appropriate for couples experiencing conflict or difficulty?',
        a: "The retreat can be powerful for couples in many different situations, including periods of difficulty — but it is not a replacement for couples therapy. If you are navigating significant conflict or crisis, we recommend reaching out for a conversation before booking so we can help you assess whether the timing is right.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-2xl">
            <p className="subheading text-gold/70 mb-5">Questions</p>
            <h1 className="heading-display text-ivory mb-6">Common questions</h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 text-pretty">
              Answers to what people most often wonder before reaching out. If your question is not here, please write to us — we respond personally.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-editorial max-w-4xl mx-auto">
          <div className="space-y-16">
            {faqSections.map(({ category, faqs }) => (
              <div key={category}>
                <h2 className="subheading text-gold mb-8">{category}</h2>
                <div className="space-y-8">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="border-t border-sand/40 pt-6">
                      <h3 className="font-sans font-semibold text-charcoal-800 mb-3 leading-snug">{q}</h3>
                      <p className="text-charcoal-500 leading-relaxed text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#f9f6f1] border border-sand/30 text-center">
            <p className="font-display text-xl text-charcoal-800 mb-3">Still have questions?</p>
            <p className="text-sm text-charcoal-500 mb-6">Reach out. Every message is read and answered personally.</p>
            <Link href="/contact" className="btn-primary">
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to Begin"
        title="Take the first step"
        subtitle="The inquiry process is low-pressure and warm. We are genuinely here to help you find the right experience."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        variant="dark"
      />
    </>
  );
}

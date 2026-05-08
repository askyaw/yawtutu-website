import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Users, DollarSign } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tantra Foundations Workshop',
  description:
    'A one-day immersive workshop in tantra, energetic connection, breathwork, and embodied presence. $200 per person. Led by Yaw Tutu.',
  path: '/tantra-foundations',
});

const schedule = [
  { time: '10:00 AM', title: 'Welcome & Grounding', description: 'Opening circle, intentions, consent agreements, and group attunement.' },
  { time: '10:30 AM', title: 'Energy Foundations', description: 'Introduction to prana, chakras, bandhas, and the energetic body.' },
  { time: '12:00 PM', title: 'Breath & Sound', description: 'Pranayama, breath connection with partners, and sounding practices.' },
  { time: '1:00 PM', title: 'Lunch & Integration', description: 'Nourishing break. Optional partner conversations and journaling.' },
  { time: '2:00 PM', title: 'Movement & Presence', description: 'Biodanza-inspired and Latihan movement practices for embodied aliveness.' },
  { time: '3:15 PM', title: 'Eye Gazing & Energy Exchange', description: 'Deep presence practices: eye gazing, Yab Yum, energy looping, and energy balls.' },
  { time: '4:30 PM', title: 'Rope Energetics & Sensation', description: 'Energetic rope play (non-sexual) as a vehicle for presence, trust, and sensation awareness.' },
  { time: '5:30 PM', title: 'Closing Circle', description: 'Integration sharing, resources for continued practice, and group closing.' },
  { time: '6:00 PM', title: 'End', description: '' },
];

const topics = [
  'Energy concepts and the energetic body',
  'Bandhas and chakra awareness',
  'Eye gazing and presence practices',
  'Breath connection (partnered)',
  'Sounding and vocal resonance',
  'Yab Yum — the union posture',
  'Energy looping between partners',
  'Energy ball exercises',
  'Giving and receiving energy',
  'Rope energetic play (non-sexual)',
  'Biodanza-inspired movement',
  'Latihan-inspired movement',
  'Sensation exploration',
];

const outcomes = [
  'A felt understanding of your own energetic body',
  'Practical tools for deeper presence in relationship',
  'Breath and sound practices you can use daily',
  'An experience of genuine energetic exchange',
  'A community of conscious, curious peers',
  'Resources and a pathway for continued practice',
];

const faqs = [
  {
    q: 'Do I need a partner to attend?',
    a: 'No. Solo attendees and couples are equally welcome. Partner exercises are done with whoever is present — we support everyone in finding a pairing.',
  },
  {
    q: 'Is this workshop sexual in nature?',
    a: 'The workshop is deeply embodied and intimate, but it is not sexually explicit. We work with energy, breath, presence, and sensation — not sexual performance.',
  },
  {
    q: 'What should I wear?',
    a: 'Comfortable, layered clothing that allows for free movement. You will likely be moving, lying down, and sitting cross-legged for extended periods.',
  },
  {
    q: 'What if I feel uncomfortable during an exercise?',
    a: 'Every exercise is optional. You are always in full choice. Our facilitators check in regularly and the group container is carefully held.',
  },
];

export default function TantraFoundationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-5">One-Day Immersive Workshop</p>
            <h1 className="heading-display text-ivory mb-6 text-balance">
              Tantra Foundations
            </h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 max-w-2xl mb-10 text-pretty">
              A guided day of energetic connection, breath, presence, and the art of giving and receiving — through movement, partnered exercises, and embodied practice.
            </p>
            <div className="flex flex-wrap gap-6 mb-10 text-ivory/60">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={15} className="text-gold/70" />
                10 AM – 6 PM (Saturday or Sunday)
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users size={15} className="text-gold/70" />
                10–20 participants
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign size={15} className="text-gold/70" />
                $200 per person
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Reserve Your Spot
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="subheading text-gold mb-4">The Workshop</p>
              <h2 className="heading-lg text-charcoal-800 mb-5 text-balance">
                Master Tantra Foundations — A Workshop to Build Mindful Connection
              </h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5">
                This is not a lecture. It is a living, breathing day of practice — where the most important thing you bring is genuine curiosity and a willingness to show up fully.
              </p>
              <p className="body-md text-charcoal-500 mb-5">
                Tantra, in its authentic form, is a technology of presence. It teaches us how to channel energy — between ourselves and others — with skill, awareness, and care. Over the course of one deeply held day, you will encounter practices that have been refined over centuries, brought into a modern, embodied, and relational framework.
              </p>
              <p className="body-md text-charcoal-500">
                Facilitated by Yaw Tutu — a Reiki Master, certified Qigong teacher, and embodiment educator with over two decades of experience — you are in genuinely skilled hands.
              </p>
            </div>
            <div className="bg-[#f9f6f1] p-8 md:p-10 border border-sand/30">
              <h3 className="font-sans font-semibold text-charcoal-800 mb-6 text-sm uppercase tracking-wider">
                Workshop at a Glance
              </h3>
              <dl className="space-y-4">
                {[
                  { label: 'Date', value: 'Saturday or Sunday' },
                  { label: 'Hours', value: '10:00 AM – 6:00 PM' },
                  { label: 'Price', value: '$200 per person' },
                  { label: 'Capacity', value: '10–20 participants' },
                  { label: 'Experience needed', value: 'None — all welcome' },
                  { label: 'Partners required', value: 'No — solo & couples welcome' },
                  { label: 'Location', value: 'Announced upon registration' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start border-b border-sand/30 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wider text-charcoal-400">{label}</dt>
                    <dd className="text-sm font-medium text-charcoal-700 text-right max-w-[60%]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-[#f9f6f1]">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="What You'll Explore"
            title="The practices"
            subtitle="Each exercise is carefully chosen and sequenced to build genuine, felt understanding — not just intellectual knowledge."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center gap-3 bg-white/60 px-5 py-3.5 border border-sand/20">
                <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                <span className="text-sm text-charcoal-600">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Schedule"
            title="Your day, held with care"
          />
          <div className="max-w-2xl mx-auto">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                {i < schedule.length - 1 && (
                  <div className="absolute left-[3.25rem] top-8 bottom-0 w-px bg-sand/50" />
                )}
                <div className="flex-shrink-0 text-right w-16">
                  <span className="text-xs text-charcoal-400 uppercase tracking-wider leading-relaxed">
                    {item.time.split(' ')[0]}<br />
                    <span className="text-[10px]">{item.time.split(' ')[1]}</span>
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0 mt-1.5 relative z-10" />
                <div className="pb-2">
                  <h3 className="font-sans font-semibold text-charcoal-800 text-sm mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-charcoal-500 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-charcoal-800">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="What You'll Leave With"
            title="Outcomes & integration"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-xs font-medium mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-ivory/80 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Questions"
            title="Before you arrive"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-t border-sand/50 pt-5">
                <h3 className="font-sans font-semibold text-charcoal-800 mb-3 text-sm leading-snug">{q}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="btn-ghost text-charcoal-600 hover:text-gold">
              More questions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Reserve Your Place"
        title="Ready to explore?"
        subtitle="Spaces are limited to ensure a quality experience for every participant. Reach out to secure your spot or ask any questions."
        primaryCta={{ label: 'Inquire & Register', href: '/contact' }}
        secondaryCta={{ label: 'View All Events', href: '/events' }}
        variant="dark"
      />
    </>
  );
}

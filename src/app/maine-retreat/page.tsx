import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Waves, Sun, Moon, Coffee } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Maine VIP Retreat — Private Couple Experience',
  description:
    'A fully curated private weekend retreat in coastal Maine for couples. Ocean access, guided sessions, bodywork, nourishing meals, and sacred space. $2,500 per couple.',
  path: '/maine-retreat',
});

const itinerary = [
  {
    period: 'Friday Evening',
    icon: Moon,
    items: [
      'Arrival and welcome',
      'Grounding ritual and intention setting',
      'Private dinner together',
      'Opening bodywork session',
      'Evening oceanside walk',
    ],
  },
  {
    period: 'Saturday',
    icon: Sun,
    items: [
      'Morning yoga and breathwork by the water',
      'Nourishing breakfast',
      'Guided intimacy session — Part I',
      'Free time: ocean, rest, reading, exploring',
      'Private lunch',
      'Guided intimacy session — Part II',
      'Couples massage experience',
      'Sunset ritual',
      'Private dinner',
      'Evening integration circle',
    ],
  },
  {
    period: 'Sunday',
    icon: Coffee,
    items: [
      'Morning ritual and meditation',
      'Breakfast and slow morning',
      'Final guided session — integration and forward visioning',
      'Closing ceremony',
      'Departure',
    ],
  },
];

const inclusions = [
  { title: 'Private Accommodation', description: 'Exclusive use of a coastal Maine property — just the two of you.' },
  { title: 'All Meals', description: 'Three nourishing, thoughtfully prepared meals each day, plus snacks.' },
  { title: 'Guided Sessions', description: 'Three facilitated intimacy and connection sessions with Yaw and Ella.' },
  { title: 'Bodywork', description: 'A shared couples massage experience and individual somatic sessions.' },
  { title: 'Sacred Space', description: 'The property is prepared with intention — scent, sound, light, and environment curated for your experience.' },
  { title: 'Ocean Access', description: 'Private access to the coast — for morning walks, evening rituals, and spacious solitude.' },
  { title: 'Personalized Curation', description: 'Pre-retreat consultation to understand your intentions and shape the experience to your specific needs.' },
  { title: 'Post-Retreat Integration', description: 'A follow-up call 2 weeks after your retreat to support continued integration.' },
];

export default function MaineRetreatPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0e1520]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1520] via-[#131e2e] to-[#0a1018]" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory/5 to-transparent" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-5">Private Couple Experience</p>
            <h1 className="heading-display text-ivory mb-6 text-balance">
              Maine VIP Retreat
            </h1>
            <div className="divider-gold-left mb-7" />
            <p className="font-display text-2xl md:text-3xl font-light italic text-ivory/80 mb-6 leading-relaxed">
              &ldquo;Part retreat, part adventure, part invitation into deeper connection.&rdquo;
            </p>
            <p className="body-lg text-ivory/60 max-w-2xl mb-10 text-pretty">
              A fully curated weekend by the Maine coast. Ocean, slowness, guided sessions, nourishment, bodywork, and the rare luxury of two days entirely held — just for you.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { label: 'Investment', value: '$2,500', sub: 'per couple' },
                { label: 'Duration', value: 'Fri – Sun', sub: 'Full weekend' },
                { label: 'Format', value: 'Private', sub: 'Just the two of you' },
              ].map(({ label, value, sub }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-wider text-ivory/40 mb-1">{label}</p>
                  <p className="font-display text-2xl text-ivory">{value}</p>
                  <p className="text-xs text-ivory/40">{sub}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">
              Inquire About Availability
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="subheading text-gold mb-4">The Experience</p>
              <h2 className="heading-lg text-charcoal-800 mb-5 text-balance">
                Designed for depth. Built for two.
              </h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5">
                The Maine VIP Retreat is a rare offering — an entirely private, fully facilitated weekend experience designed for one couple at a time. No group. No schedule pressure. Just you, your partner, the ocean, and two guides who hold space for whatever your relationship most needs.
              </p>
              <p className="body-md text-charcoal-500 mb-5">
                Whether you are seeking reconnection after a period of drift, wanting to explore new dimensions of intimacy together, celebrating a transition, or simply craving a space where you can be fully present with each other — this retreat is built for exactly that.
              </p>
              <p className="body-md text-charcoal-500">
                Every element — from the meals to the guided sessions to the way the space is prepared — is thoughtfully curated to support your particular intentions. This is not a template. It is yours.
              </p>
            </div>
            <div className="space-y-3">
              <div className="aspect-[4/3] bg-gradient-to-br from-dusk/20 via-[#1e2d40]/30 to-dusk/10 flex items-center justify-center">
                <div className="text-center">
                  <Waves size={32} className="text-dusk/40 mx-auto mb-3" />
                  <p className="text-charcoal-400 text-sm">Coastal Maine Photography</p>
                  <p className="text-charcoal-300 text-xs">Coming Soon</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gradient-to-br from-clay/15 to-sand/10 flex items-center justify-center">
                  <p className="text-charcoal-300 text-xs">Interior</p>
                </div>
                <div className="aspect-square bg-gradient-to-br from-sand/20 to-gold/5 flex items-center justify-center">
                  <p className="text-charcoal-300 text-xs">Dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-[#f9f6f1]">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Everything Included"
            title="Nothing left to arrange"
            subtitle="From the moment you arrive to the moment you leave, every element is prepared and held with care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map(({ title, description }) => (
              <div key={title} className="bg-white/70 border border-sand/20 p-6">
                <div className="w-8 h-px bg-gold mb-4" />
                <h3 className="font-sans font-semibold text-charcoal-800 text-sm mb-2">{title}</h3>
                <p className="text-xs text-charcoal-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="The Journey"
            title="Your weekend, unfolding"
            subtitle="A sense of the rhythm — though your retreat will be shaped around your specific intentions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itinerary.map(({ period, icon: Icon, items }) => (
              <div key={period} className="border-t-2 border-gold/30 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-charcoal-800 text-gold flex items-center justify-center">
                    <Icon size={16} />
                  </div>
                  <h3 className="subheading text-charcoal-700">{period}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-charcoal-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-charcoal-800">
        <div className="container-narrow text-center">
          <p className="subheading text-gold/70 mb-4">Who This Is For</p>
          <h2 className="heading-lg text-ivory mb-6 text-balance">
            A retreat for couples who are ready
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="body-lg text-ivory/70 mb-8 text-pretty">
            This retreat is designed for couples of all kinds — long-term partners seeking reconnection, newer relationships wanting to build a deep foundation, or two people marking a significant transition together. The one prerequisite: a genuine desire to go deeper with each other.
          </p>
          <p className="body-md text-ivory/50 max-w-xl mx-auto">
            Availability is limited. We take a small number of couples each season to ensure fully personalized care and attention. Retreats are scheduled throughout the year — reach out to learn about current availability.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Begin Your Retreat"
        title="Inquire about availability"
        subtitle="Begin with a conversation. No pressure — just an exploration of whether this is the right experience for the two of you."
        primaryCta={{ label: 'Send an Inquiry', href: '/contact' }}
        variant="dark"
      />
    </>
  );
}

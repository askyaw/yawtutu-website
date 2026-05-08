import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Heart, Zap, Eye, Users, Leaf } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { EmailOptIn } from '@/components/sections/EmailOptIn';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tantra, Embodiment & Conscious Intimacy Workshops',
  description:
    'Transformational workshops in tantra foundations and conscious intimacy, and private VIP couple retreats in coastal Maine. Led by Yaw Tutu.',
  path: '/',
});

const experiences = [
  {
    eyebrow: 'One-Day Immersive',
    title: 'Tantra Foundations',
    description:
      'A guided day exploring energetic connection, breath, presence, and the art of giving and receiving — through movement, partnered exercises, and embodied practice.',
    price: '$200',
    duration: '10 AM – 6 PM',
    href: '/tantra-foundations',
    accent: 'from-clay/20 to-sand/10',
  },
  {
    eyebrow: 'Two-Day Intensive',
    title: 'BDSM Fundamentals',
    description:
      'A psychologically informed, consent-forward education in power dynamics, scene structure, somatic play, and relational communication — designed for curious adults.',
    price: '$600',
    duration: '2 Full Days',
    href: '/bdsm-fundamentals',
    accent: 'from-charcoal-700/5 to-charcoal-600/10',
  },
  {
    eyebrow: 'Private Couple Experience',
    title: 'Maine VIP Retreat',
    description:
      'An intimate, fully curated weekend by the ocean. Guided sessions, nourishing meals, bodywork, sacred space rituals, and the rare luxury of undivided, intentional time together.',
    price: '$2,500',
    duration: 'Weekend Experience',
    href: '/maine-retreat',
    accent: 'from-dusk/10 to-sand/10',
  },
];

const principles = [
  {
    icon: Shield,
    title: 'Safety & Consent First',
    description:
      'Every experience is designed around informed consent, clear communication, and psychological safety. You set the pace.',
  },
  {
    icon: Heart,
    title: 'Emotionally Intelligent',
    description:
      'We work with the whole person — nervous system, emotion, body, and relational field. Not just technique.',
  },
  {
    icon: Zap,
    title: 'Nervous System Aware',
    description:
      'All facilitation is grounded in somatic and nervous system principles, creating genuine felt-sense change.',
  },
  {
    icon: Eye,
    title: 'Trauma-Informed',
    description:
      'Our approach honors the complexity of embodied history. You are always in choice.',
  },
  {
    icon: Users,
    title: 'Community of Explorers',
    description:
      'A curated group of growth-oriented adults — therapists, coaches, couples, professionals, and curious seekers.',
  },
  {
    icon: Leaf,
    title: 'Experiential Learning',
    description:
      'We believe transformation happens in the body first. These are not lectures — they are living, breathing practices.',
  },
];

const faqPreviews = [
  {
    q: 'Do I need any prior experience?',
    a: 'None. All workshops welcome complete beginners alongside experienced practitioners. We meet you exactly where you are.',
  },
  {
    q: 'Are these workshops sexually explicit?',
    a: 'No. Our work is embodied and intimate in the broad sense — it explores connection, sensation, and relational dynamics — but is never pornographic or explicitly sexual.',
  },
  {
    q: 'Can I attend alone, or do I need a partner?',
    a: 'Most workshops welcome solo attendees and couples equally. The Maine retreat is designed specifically for couples.',
  },
  {
    q: 'How do you handle safety in workshops?',
    a: 'All exercises are optional. We use clear consent protocols, check-ins, and carefully held space. Your comfort and autonomy are paramount.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-800">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1e1813] to-[#0f0d0b]" />
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

        {/* Animated grain texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-30" />

        {/* Subtle warm glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[120px]" />

        <div className="relative z-10 container-narrow text-center px-6 py-32 md:py-40">
          <p className="subheading text-gold/70 mb-6 animate-fade-in">
            Yaw Tutu · Workshops & Retreats
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.02] tracking-tight mb-8 text-balance">
            The art of{' '}
            <em className="italic text-gold not-italic" style={{ fontStyle: 'italic' }}>
              deeper
            </em>{' '}
            connection
          </h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="body-lg text-ivory/60 max-w-xl mx-auto mb-12 text-pretty">
            Transformational education in tantra, conscious intimacy, and embodied exploration — for growth-oriented adults ready to go deeper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tantra-foundations" className="btn-primary">
              Explore Workshops
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/maine-retreat"
              className="btn-outline border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal-800 hover:border-ivory"
            >
              Maine Retreat
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-ivory/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ivory/20 to-transparent" />
        </div>
      </section>

      {/* EMOTIONAL POSITIONING */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow text-center">
          <p className="subheading text-gold mb-6">The Work</p>
          <h2 className="heading-xl text-charcoal-800 mb-6 text-balance">
            You don&apos;t need to be fixed.{' '}
            <br className="hidden md:block" />
            <em>You need to come home to yourself.</em>
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="body-lg text-charcoal-500 mb-6 text-pretty">
            Most of us have learned to live at a careful distance from our own aliveness — from depth, sensation, intimacy, and the full range of what connection can feel like. These workshops and experiences are an invitation back.
          </p>
          <p className="body-lg text-charcoal-500 text-pretty">
            Facilitated by Yaw Tutu — a healer, educator, and embodiment guide with over two decades of experience — this work meets you exactly where you are, and invites you somewhere worth going.
          </p>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Experiences"
            title="Choose your depth"
            subtitle="Three pathways, one intention: genuine transformation through embodied connection."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <article
                key={exp.href}
                className={`bg-gradient-to-br ${exp.accent} border border-sand/30 p-8 md:p-10 flex flex-col group hover:shadow-xl transition-all duration-500`}
              >
                <p className="subheading text-gold text-xs mb-3">{exp.eyebrow}</p>
                <h3 className="heading-md text-charcoal-800 mb-4">{exp.title}</h3>
                <div className="divider-gold-left mb-5" />
                <p className="body-md text-charcoal-500 mb-8 flex-1">{exp.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-1">{exp.duration}</p>
                    <p className="font-display text-2xl text-charcoal-800">{exp.price}</p>
                    <p className="text-xs text-charcoal-400">per person</p>
                  </div>
                  <Link
                    href={exp.href}
                    className="btn-ghost text-charcoal-700 hover:text-gold group-hover:translate-x-1 transition-transform duration-300 pl-0"
                    aria-label={`Learn more about ${exp.title}`}
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PEOPLE ATTEND */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Why People Come"
            title="Real people. Real reasons."
            subtitle="Our participants come from all walks — therapists, couples, artists, executives, spiritual seekers. Here is what brings them."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '"I wanted to understand myself better in intimate relationships."',
              '"My partner and I needed a reset — something that would help us reconnect."',
              '"I was curious about tantra but didn\'t know where to start."',
              '"I wanted education around power dynamics — from a thoughtful, safe place."',
              '"I had done therapy for years. I needed to work through the body, not just the mind."',
              '"I was craving community with other conscious, curious adults."',
            ].map((reason, i) => (
              <div key={i} className="border-l-2 border-gold/30 pl-5 py-2">
                <p className="body-md text-charcoal-600 italic text-pretty">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & CONSENT PHILOSOPHY */}
      <section className="section-padding bg-[#f9f6f1]">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Safety is not a restriction — it is the foundation"
            subtitle="Everything we do is built on the pillars of informed consent, clear communication, and respect for each person's full autonomy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-9 h-9 flex items-center justify-center bg-gold/10 text-gold">
                    <Icon size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-charcoal-800 mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* MAINE RETREAT PREVIEW */}
      <section className="section-padding bg-ivory overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="subheading text-gold mb-4">Private Couple Experience</p>
              <h2 className="heading-xl text-charcoal-800 mb-5 text-balance">
                Coastal Maine.<br />
                <em className="italic">Completely yours.</em>
              </h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5 text-pretty">
                Part retreat, part adventure, part invitation into deeper connection. A curated weekend at a private Maine property — ocean access, guided sessions, nourishing meals, bodywork, and sacred space.
              </p>
              <p className="body-lg text-charcoal-500 mb-10 text-pretty">
                Designed for two people who want something they cannot find anywhere else.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div>
                  <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">Investment</p>
                  <p className="font-display text-3xl text-charcoal-800">$2,500</p>
                  <p className="text-xs text-charcoal-400">per couple</p>
                </div>
                <div className="w-px h-12 bg-sand" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">Format</p>
                  <p className="font-medium text-charcoal-700">Private Weekend</p>
                  <p className="text-xs text-charcoal-400">Fully curated</p>
                </div>
              </div>
              <Link href="/maine-retreat" className="btn-primary">
                Discover the Retreat
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image placeholder */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-dusk/20 via-sand/30 to-clay/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-charcoal-400 text-sm uppercase tracking-widest">Photography Coming</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal-800/60 to-transparent">
                <p className="font-display text-xl italic text-ivory">&ldquo;The most present I have felt in years.&rdquo;</p>
                <p className="text-xs text-ivory/60 mt-2 uppercase tracking-wider">— A. & P., Maine Retreat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section-padding-sm bg-[#f9f6f1]">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Common Questions"
            title="Before you reach out"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {faqPreviews.map(({ q, a }) => (
              <div key={q} className="border-t border-sand/50 pt-5">
                <h3 className="font-sans font-semibold text-charcoal-800 mb-3 text-sm leading-snug">{q}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="btn-outline border-charcoal-300 text-charcoal-700">
              All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* EMAIL OPT-IN */}
      <EmailOptIn />

      {/* FINAL CTA */}
      <CTASection
        eyebrow="Ready to Begin"
        title="The conversation starts with a single step"
        subtitle="Reach out to ask questions, learn more about upcoming workshops, or inquire about the Maine retreat. There is no pressure — just a warm welcome."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'View All Events', href: '/events' }}
        variant="dark"
      />
    </>
  );
}

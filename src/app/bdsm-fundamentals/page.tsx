import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Shield, Heart, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'BDSM Fundamentals Workshop',
  description:
    'A two-day, consent-forward education in power dynamics, scene structure, somatic play, and relational communication. $600 per person. Led by Yaw Tutu.',
  path: '/bdsm-fundamentals',
});

const modules = [
  {
    day: 'Day One',
    sessions: [
      {
        title: 'Foundations of Consent & Communication',
        description: 'The language of enthusiastic consent, negotiation frameworks, safewords, and the ethics of conscious power exchange. Why this work begins — and stays — with clear communication.',
      },
      {
        title: 'Archetypes & Relational Dynamics',
        description: 'Exploring dominant and submissive archetypes through a psychological lens. Understanding what draws people to different roles, how archetypes shift, and how to move fluidly.',
      },
      {
        title: 'Nervous System & Somatic Awareness',
        description: 'How the nervous system experiences power, sensation, and surrender. Mapping your own responses and learning to read your partner\'s physiological cues.',
      },
      {
        title: 'Scene Structure & Container Building',
        description: 'The anatomy of a scene: opening, arc, peak, closing, and aftercare. Creating safe containers that hold intensity with skill and care.',
      },
    ],
  },
  {
    day: 'Day Two',
    sessions: [
      {
        title: 'Sensation Play & Aspecting',
        description: 'Working with temperature, texture, pressure, and restraint as vehicles for presence and sensation. Introduction to aspecting — embodying archetypes deliberately and safely.',
      },
      {
        title: 'Impact Play — Education & Practice',
        description: 'The physiology of impact, anatomy of risk, and technique foundations. Approached from a somatic, relational perspective — not performance.',
      },
      {
        title: 'Rope Play Fundamentals',
        description: 'Introduction to rope as a tool for connection, presence, and sensation — with emphasis on safety, communication, and the psychological dimension of restraint.',
      },
      {
        title: 'Psychological Play & Emotional Presence',
        description: 'The internal landscape of power exchange. Navigating emotional intensity, drop, vulnerability, and the transformative potential of conscious surrender.',
      },
    ],
  },
];

const pillars = [
  {
    icon: Shield,
    title: 'Consent-Forward',
    description: 'Every concept and exercise begins with an in-depth grounding in consent — not as a checkbox, but as a living, ongoing practice.',
  },
  {
    icon: Heart,
    title: 'Psychologically Informed',
    description: 'We draw on trauma-informed practice, attachment theory, and somatic psychology to contextualize power dynamics with depth and care.',
  },
  {
    icon: Zap,
    title: 'Embodied Practice',
    description: 'This is not a lecture series. Exercises are carefully sequenced, always optional, and designed for genuine felt-sense learning.',
  },
];

export default function BdsmFundamentalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#1a1612] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-5">Two-Day Intensive</p>
            <h1 className="heading-display text-ivory mb-6 text-balance">
              BDSM Fundamentals
            </h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 max-w-2xl mb-6 text-pretty">
              A psychologically informed, consent-forward education in power dynamics, scene structure, somatic play, and the art of conscious intimacy — for curious adults seeking depth, not shock.
            </p>
            <p className="body-md text-ivory/50 mb-10 max-w-xl">
              This is education. Thoughtful, grounded, and human.
            </p>
            <div className="flex flex-wrap gap-6 mb-10 text-ivory/60">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={15} className="text-gold/70" />
                Two full days
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users size={15} className="text-gold/70" />
                Small group, curated
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gold/70 text-sm font-medium">$</span>
                $600 per person
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Inquire About This Workshop
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="subheading text-gold mb-4">Why This Workshop Exists</p>
              <h2 className="heading-lg text-charcoal-800 mb-5 text-balance">
                Education that meets the full complexity of human desire
              </h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5">
                Power dynamics, sensation play, and conscious D/s relationships are far more common — and far more nuanced — than popular culture suggests. Yet most people navigate this territory without education, framework, or genuine support.
              </p>
              <p className="body-md text-charcoal-500 mb-5">
                The result is often exploration that lacks the tools to be truly safe, deeply consensual, or genuinely transformative.
              </p>
              <p className="body-md text-charcoal-500">
                This two-day intensive fills that gap — with psychological depth, somatic wisdom, and a container where the complex, the tender, and the powerful are all welcome.
              </p>
            </div>
            <div className="space-y-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4 p-6 bg-[#f9f6f1] border border-sand/20">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/10 text-gold flex items-center justify-center mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-charcoal-800 text-sm mb-2">{title}</h3>
                    <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-[#f9f6f1]">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Curriculum"
            title="Two days of depth"
            subtitle="Each session builds on the last, creating a carefully sequenced journey from foundation to embodied practice."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {modules.map((mod) => (
              <div key={mod.day}>
                <h3 className="subheading text-gold mb-6">{mod.day}</h3>
                <div className="space-y-5">
                  {mod.sessions.map((session, i) => (
                    <div key={i} className="bg-white/70 border border-sand/20 p-6">
                      <h4 className="font-sans font-semibold text-charcoal-800 text-sm mb-2">{session.title}</h4>
                      <p className="text-sm text-charcoal-500 leading-relaxed">{session.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-charcoal-800">
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Who This Is For"
            title="You belong here if…"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              'You\'re curious about power dynamics but want a thoughtful starting point',
              'You\'re in a D/s dynamic and want deeper tools, language, and education',
              'You\'re a therapist or coach working with clients in this space',
              'You want to understand the psychology of dominance, submission, and surrender',
              'You\'ve explored this territory alone and want guidance and community',
              'You want to give and receive more skillfully and consciously',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white/5 border border-white/8 p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                <p className="text-sm text-ivory/75 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Reserve Your Place"
        title="Begin with a conversation"
        subtitle="Spaces in this workshop are limited and carefully curated. Reach out with any questions or to discuss whether this is the right fit."
        primaryCta={{ label: 'Inquire Now', href: '/contact' }}
        secondaryCta={{ label: 'View Upcoming Dates', href: '/events' }}
        variant="dark"
      />
    </>
  );
}

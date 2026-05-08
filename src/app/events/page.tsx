import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Events Calendar',
  description:
    'Upcoming workshops, retreats, and events with Yaw Tutu — including Tantra Foundations, BDSM Fundamentals, and the Maine VIP Retreat.',
  path: '/events',
});

const upcomingEvents = [
  {
    title: 'Tantra Foundations',
    type: 'Workshop',
    date: 'Coming Soon',
    location: 'TBA',
    price: '$200',
    href: '/tantra-foundations',
    status: 'upcoming' as const,
  },
  {
    title: 'BDSM Fundamentals',
    type: 'Intensive',
    date: 'Coming Soon',
    location: 'TBA',
    price: '$600',
    href: '/bdsm-fundamentals',
    status: 'upcoming' as const,
  },
  {
    title: 'Maine VIP Retreat',
    type: 'Private Retreat',
    date: 'Bookings Open',
    location: 'Coastal Maine',
    price: '$2,500',
    href: '/maine-retreat',
    status: 'open' as const,
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-2xl">
            <p className="subheading text-gold/70 mb-5">Calendar</p>
            <h1 className="heading-display text-ivory mb-6">Upcoming Events</h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 text-pretty">
              Workshops, intensives, and retreat opportunities throughout the year. New dates are added regularly — subscribe for announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="flex flex-col md:flex-row md:items-center gap-6 border border-sand/30 p-8 bg-white/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Calendar className="text-gold" size={22} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <p className="subheading text-gold text-xs">{event.type}</p>
                    <span
                      className={`text-xs px-2.5 py-0.5 ${
                        event.status === 'open'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-sand/40 text-charcoal-500'
                      }`}
                    >
                      {event.status === 'open' ? 'Bookings Open' : 'Dates Coming Soon'}
                    </span>
                  </div>
                  <h2 className="heading-md text-charcoal-800 mb-1">{event.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-charcoal-400 mt-2">
                    <span>{event.date}</span>
                    <span>·</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-3">
                  <div className="text-right">
                    <p className="font-display text-2xl text-charcoal-800">{event.price}</p>
                    <p className="text-xs text-charcoal-400">
                      {event.type === 'Private Retreat' ? 'per couple' : 'per person'}
                    </p>
                  </div>
                  <Link href={event.href} className="btn-primary text-xs">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="body-md text-charcoal-500 mb-6">
              Get notified when new dates are announced.
            </p>
            <Link href="/#email-optin" className="btn-outline border-charcoal-300 text-charcoal-700">
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Private Inquiry"
        title="Looking for something specific?"
        subtitle="If you have a specific date or format in mind, or want to discuss a private group workshop, reach out directly."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        variant="dark"
      />
    </>
  );
}

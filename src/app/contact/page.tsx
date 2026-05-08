import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Inquire',
  description:
    'Reach out to Yaw Tutu about upcoming workshops, the Maine VIP retreat, or any questions. We respond to every message personally.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-5">Reach Out</p>
            <h1 className="heading-display text-ivory mb-6">Start the conversation</h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 max-w-xl text-pretty">
              Every inquiry is read and responded to personally. There is no pressure, no sales pitch — just a genuine welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="heading-md text-charcoal-800 mb-5">What to expect</h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-md text-charcoal-500 mb-5">
                We typically respond within 1–2 business days. If you have a specific workshop date in mind or are inquiring about the Maine retreat, please share as much context as you feel comfortable with — it helps us give you a genuinely useful response.
              </p>
              <p className="body-md text-charcoal-500 mb-10">
                All inquiries are handled with complete discretion and care.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Email', value: 'hello@yawtutu.com' },
                  { label: 'Response time', value: '1–2 business days' },
                  { label: 'Discretion', value: 'Complete and guaranteed' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 items-start border-b border-sand/30 pb-4">
                    <span className="text-xs uppercase tracking-wider text-charcoal-400 w-28 flex-shrink-0 mt-0.5">{label}</span>
                    <span className="text-sm text-charcoal-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

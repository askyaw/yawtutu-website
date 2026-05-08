import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy, Terms & Consent Philosophy',
  path: '/legal',
  noIndex: true,
});

export default function LegalPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-charcoal-800">
        <div className="container-editorial">
          <h1 className="heading-xl text-ivory">Privacy, Terms & Consent</h1>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-narrow space-y-16">
          <div id="consent">
            <h2 className="heading-md text-charcoal-800 mb-5">Consent Philosophy</h2>
            <div className="divider-gold-left mb-6" />
            <div className="prose prose-neutral max-w-none text-charcoal-600 space-y-4">
              <p>
                Consent is not a formality in our work — it is the living foundation of everything we do. We define consent as informed, enthusiastic, ongoing, and freely revocable at any time without explanation or consequence.
              </p>
              <p>
                All exercises in our workshops are optional. Participants are always in full choice. Check-ins are built into every session. The right to pause, modify, or stop any activity is not just acknowledged — it is actively protected.
              </p>
              <p>
                Our facilitation is trauma-informed. We recognize that embodied work can surface unexpected emotional material, and we create space for that with care, skill, and appropriate support.
              </p>
            </div>
          </div>

          <div id="privacy">
            <h2 className="heading-md text-charcoal-800 mb-5">Privacy Policy</h2>
            <div className="divider-gold-left mb-6" />
            <div className="text-charcoal-600 space-y-4 text-sm leading-relaxed">
              <p>
                <strong className="text-charcoal-800">Data we collect:</strong> We collect information you provide directly — name, email address, and any details you share through our contact or inquiry forms. We may also collect standard analytics data (page views, device type, approximate location) through our analytics provider.
              </p>
              <p>
                <strong className="text-charcoal-800">How we use it:</strong> We use your information to respond to inquiries, send information you have requested (including the free guide), and send occasional updates about workshops and events if you have opted in. We do not sell your data to third parties.
              </p>
              <p>
                <strong className="text-charcoal-800">Discretion:</strong> We understand the sensitive nature of the work we do. All inquiry data is handled with complete discretion and is never shared.
              </p>
              <p>
                <strong className="text-charcoal-800">Unsubscribing:</strong> Every email we send includes an unsubscribe link. You can opt out at any time.
              </p>
              <p>
                <strong className="text-charcoal-800">Contact:</strong> For privacy-related questions, email hello@yawtutu.com.
              </p>
            </div>
          </div>

          <div id="terms">
            <h2 className="heading-md text-charcoal-800 mb-5">Terms of Service</h2>
            <div className="divider-gold-left mb-6" />
            <div className="text-charcoal-600 space-y-4 text-sm leading-relaxed">
              <p>
                <strong className="text-charcoal-800">Age requirement:</strong> All participants must be 18 years of age or older.
              </p>
              <p>
                <strong className="text-charcoal-800">Workshop registration:</strong> Registration is confirmed upon receipt of payment. Spaces are held only for confirmed registrations.
              </p>
              <p>
                <strong className="text-charcoal-800">Cancellation:</strong> Cancellations more than 14 days prior receive a full refund minus processing fees. Within 14 days, a credit toward a future event will be offered. No refunds for no-shows.
              </p>
              <p>
                <strong className="text-charcoal-800">Conduct:</strong> Participants are expected to honor consent agreements, communicate openly, and treat all participants and facilitators with respect. Violations of the consent framework may result in removal from the workshop without refund.
              </p>
              <p>
                <strong className="text-charcoal-800">Photography:</strong> No photography or recording of participants is permitted without express consent of all individuals in the frame.
              </p>
              <p>
                <strong className="text-charcoal-800">Medical:</strong> Our workshops are not a substitute for medical or psychological treatment. Participants with significant trauma histories are encouraged to consult with their therapist before attending.
              </p>
              <p className="text-xs text-charcoal-400 pt-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

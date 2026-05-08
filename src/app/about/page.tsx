import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Yaw & Ella',
  description:
    'Meet Yaw Tutu and Ella — holistic healers, educators, and embodiment guides with over two decades of experience in tantra, conscious intimacy, and somatic education.',
  path: '/about',
});

const credentials = [
  'Certified Supreme Science Qigong Level 3 Teacher',
  'Reiki Master',
  'Licensed Massage Therapist (LMT #MA69685)',
  'MPS Therapy Practitioner',
  'Scar Release Therapist',
  'Tantric Thai Massage Facilitator',
  'Biodanza Facilitator',
  'California Tantra Festival — Session Giver',
  'Las Vegas Tantra Festival — Session Facilitator',
  'Bliss Boogie Festival — Thai Yoga Facilitator',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-3xl">
            <p className="subheading text-gold/70 mb-5">The Guides</p>
            <h1 className="heading-display text-ivory mb-6">About Yaw & Ella</h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 max-w-2xl text-pretty">
              Healers, educators, and embodiment guides — bringing over two decades of combined experience in tantra, somatic practice, energy medicine, and conscious intimacy education.
            </p>
          </div>
        </div>
      </section>

      {/* Yaw's Bio */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="subheading text-gold mb-4">About Yaw</p>
              <h2 className="heading-lg text-charcoal-800 mb-5">Yaw Tutu</h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5">
                Yaw Tutu is a seasoned healer, educator, and facilitator devoted to holistic well-being. With roots in Thai massage, Reiki, Qigong, Tantric Thai massage, and other therapeutic modalities, he integrates ancestral wisdom, energy healing, and bodywork to create transformative experiences.
              </p>
              <p className="body-md text-charcoal-500 mb-5">
                His approach is deeply intuitive and personalized — attuning to each person&apos;s physical, energetic, and emotional reality. Rather than following a rigid formula, he senses what is needed and responds with the full range of his training: hands-on technique, energy transmission, movement, sound, and guided visualization.
              </p>
              <p className="body-md text-charcoal-500 mb-8">
                Yaw has facilitated workshops at festivals and retreat centers across the United States, and brings over two decades of lived practice to every room he enters. All bodies and identities are genuinely and warmly welcomed in his work.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Yaw <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              {/* Image placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-clay/20 via-sand/20 to-gold/10 flex items-center justify-center mb-6">
                <p className="text-charcoal-300 text-sm">Portrait Photography Coming</p>
              </div>
              <div className="bg-[#f9f6f1] p-6 border border-sand/20">
                <h3 className="subheading text-gold text-xs mb-4">Credentials & Training</h3>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex gap-2.5 items-start text-sm text-charcoal-500">
                      <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0 mt-2" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ella's Bio */}
      <section className="section-padding bg-[#f9f6f1]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-dusk/20 via-sand/20 to-clay/10 flex items-center justify-center mb-6">
                <p className="text-charcoal-300 text-sm">Portrait Photography Coming</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="subheading text-gold mb-4">About Ella</p>
              <h2 className="heading-lg text-charcoal-800 mb-5">Ella</h2>
              <div className="divider-gold-left mb-7" />
              <p className="body-lg text-charcoal-500 mb-5">
                Ella brings deep presence, emotional intelligence, and relational skill to the container she co-holds with Yaw. Her background weaves together somatic bodywork, relational therapy training, and extensive personal practice in conscious intimacy and embodied awareness.
              </p>
              <p className="body-md text-charcoal-500 mb-5">
                In the workshops and retreats, Ella is the grounding force — the one who holds the emotional field, supports participants through vulnerability, and brings warmth to the most tender moments.
              </p>
              <p className="body-md text-charcoal-500">
                Together, Yaw and Ella create a uniquely safe and genuinely alive container — one where rigor and warmth coexist, and where every participant feels both challenged and deeply cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work With Us"
        title="Ready to begin?"
        subtitle="Reach out to learn more about upcoming workshops, the Maine retreat, or private facilitation."
        primaryCta={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCta={{ label: 'View Experiences', href: '/tantra-foundations' }}
        variant="dark"
      />
    </>
  );
}

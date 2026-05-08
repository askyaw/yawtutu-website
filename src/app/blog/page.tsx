import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Journal — Reflections on Embodiment & Conscious Connection',
  description:
    'Writing on tantra, embodiment, nervous system awareness, conscious intimacy, consent, and relational intelligence. By Yaw Tutu.',
  path: '/blog',
});

const categories = [
  'All',
  'Tantra',
  'Embodiment',
  'Intimacy',
  'Nervous System',
  'Consent',
  'Relationships',
  'Practice',
];

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-[#1c1510] to-charcoal-800" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative z-10 container-editorial">
          <div className="max-w-2xl">
            <p className="subheading text-gold/70 mb-5">Journal</p>
            <h1 className="heading-display text-ivory mb-6">Reflections on the work</h1>
            <div className="divider-gold-left mb-7" />
            <p className="body-lg text-ivory/70 text-pretty">
              Writing on tantra, embodiment, conscious intimacy, nervous system awareness, and what it means to live in genuine connection with yourself and others.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          {/* Category filter (static for now) */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-xs uppercase tracking-[0.12em] px-4 py-2 border transition-colors duration-200 ${
                  cat === 'All'
                    ? 'border-charcoal-800 bg-charcoal-800 text-ivory'
                    : 'border-sand/40 text-charcoal-500 hover:border-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="subheading text-gold mb-4">Coming Soon</p>
              <h2 className="heading-lg text-charcoal-800 mb-5">The journal is being written</h2>
              <div className="divider-gold mx-auto mb-6" />
              <p className="body-md text-charcoal-500 max-w-md mx-auto mb-8">
                Essays, reflections, and practical writing on embodiment, tantra, conscious intimacy, and the art of deeper connection — launching soon.
              </p>
              <Link href="/contact" className="btn-outline border-charcoal-300 text-charcoal-700">
                Get Notified <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="group flex flex-col">
                  {post.image && (
                    <div className="aspect-video bg-gradient-to-br from-sand/30 to-clay/20 mb-5 overflow-hidden">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <p className="subheading text-gold text-xs mb-3">{post.category}</p>
                  <h2 className="heading-sm text-charcoal-800 mb-3 text-balance group-hover:text-gold transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-charcoal-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-charcoal-400 pt-4 border-t border-sand/30">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Deepen the Work"
        title="Ready to move from reading to experiencing?"
        primaryCta={{ label: 'Explore Workshops', href: '/tantra-foundations' }}
        secondaryCta={{ label: 'View All Events', href: '/events' }}
        variant="dark"
      />
    </>
  );
}

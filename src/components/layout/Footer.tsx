import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

const footerLinks = {
  experiences: [
    { label: 'Tantra Foundations', href: '/tantra-foundations' },
    { label: 'BDSM Fundamentals', href: '/bdsm-fundamentals' },
    { label: 'Maine VIP Retreat', href: '/maine-retreat' },
    { label: 'Events Calendar', href: '/events' },
  ],
  explore: [
    { label: 'About Yaw & Ella', href: '/about' },
    { label: 'Journal', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact & Inquire', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal#privacy' },
    { label: 'Terms of Service', href: '/legal#terms' },
    { label: 'Consent Philosophy', href: '/legal#consent' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal-800 text-ivory/70">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl text-ivory hover:text-gold transition-colors duration-300 block mb-4">
              Y &amp; E Retreats
            </Link>
            <p className="text-sm leading-relaxed text-ivory/60 mb-6 max-w-xs">
              Transformational education in tantra, conscious intimacy, and embodied connection.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300"><Instagram size={18} /></a>
              <a href="mailto:hello@yawtutu.com" aria-label="Email" className="text-ivory/50 hover:text-gold transition-colors duration-300"><Mail size={18} /></a>
            </div>
          </div>
          <div>
            <h3 className="subheading text-gold/80 mb-5 text-xs">Experiences</h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-300 link-underline">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subheading text-gold/80 mb-5 text-xs">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-300 link-underline">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subheading text-gold/80 mb-5 text-xs">Stay Connected</h3>
            <p className="text-sm text-ivory/60 mb-4 leading-relaxed">Reflections on embodiment and conscious living — delivered occasionally.</p>
            <FooterNewsletter />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">© {new Date().getFullYear()} Y &amp; E Retreats. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.href}><Link href={link.href} className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors duration-300">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

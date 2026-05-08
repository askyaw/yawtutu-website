'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function EmailOptIn() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section-padding bg-ivory-200 border-y border-sand/40">
      <div className="container-narrow text-center">
        <p className="subheading text-gold mb-4">Free Guide</p>
        <h2 className="heading-lg text-charcoal-800 mb-4 text-balance">
          The 5 Pillars of Conscious Intimacy
        </h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="body-lg text-charcoal-500 mb-10 max-w-xl mx-auto text-pretty">
          A free guide on building deeper connection — covering nervous system awareness, consent as a living practice, and the art of presence. Sent to your inbox, no pressure.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-3 text-charcoal-700">
            <CheckCircle className="text-gold" size={20} />
            <span className="font-medium">You&apos;re in. Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              disabled={status === 'loading'}
              className="flex-1 border border-sand text-charcoal-800 placeholder-charcoal-400 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors bg-white/80"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending…' : (
                <>Send it to me <ArrowRight size={15} /></>
              )}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-3">Something went wrong — try again or email us directly.</p>
        )}
        <p className="text-xs text-charcoal-400 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

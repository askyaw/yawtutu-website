'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setEmail('');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return <p className="text-sm text-gold">You&apos;re in. Check your inbox.</p>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required aria-label="Email address" disabled={status === 'loading'}
        className="bg-white/5 border border-white/10 text-ivory placeholder-ivory/30 px-4 py-2.5 text-sm focus:outline-none focus:border-gold/60 transition-colors" />
      <button type="submit" disabled={status === 'loading'} className="btn-primary text-xs justify-center">
        {status === 'loading' ? 'Subscribing…' : <><span>Subscribe</span> <ArrowRight size={13} /></>}
      </button>
      {status === 'error' && <p className="text-xs text-red-400">Something went wrong. Try again.</p>}
    </form>
  );
}

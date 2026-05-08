'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

const interests = [
  'Tantra Foundations Workshop',
  'BDSM Fundamentals Workshop',
  'Maine VIP Retreat',
  'General Question',
  'Private Session / Facilitation',
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle className="text-gold" size={40} />
        <h3 className="heading-md text-charcoal-800">Message received</h3>
        <p className="body-md text-charcoal-500 max-w-sm">
          Thank you for reaching out. We will be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-charcoal-500 mb-2">
            Your Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full border border-sand text-charcoal-800 placeholder-charcoal-300 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white/80"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-charcoal-500 mb-2">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full border border-sand text-charcoal-800 placeholder-charcoal-300 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white/80"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-xs uppercase tracking-wider text-charcoal-500 mb-2">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full border border-sand text-charcoal-800 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white/80"
        >
          <option value="">Select an option…</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-charcoal-500 mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full border border-sand text-charcoal-800 placeholder-charcoal-300 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white/80 resize-none"
          placeholder="Tell us a bit about yourself and what you're looking for…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center"
      >
        {status === 'loading' ? 'Sending…' : (
          <>Send Message <ArrowRight size={15} /></>
        )}
      </button>
      <p className="text-xs text-charcoal-400 text-center">
        Your message is confidential. We respond personally within 1–2 business days.
      </p>
    </form>
  );
}

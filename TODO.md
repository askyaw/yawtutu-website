# TODO

## Phase 2 — Visual Polish & Animations

- [ ] Add Framer Motion animations (fade-up on scroll for sections, hero entrance)
- [ ] Replace all image placeholders with real photography
- [ ] Add `/public/images/og-default.jpg` for OG cards
- [ ] Add dark mode toggle to navigation
- [ ] Install and use shadcn/ui `Accordion` for FAQ page (collapsible)
- [ ] Install and use shadcn/ui `Dialog` for mobile contact shortcut
- [ ] Add a proper `404` not-found page (`src/app/not-found.tsx`)
- [ ] Add loading states (`src/app/loading.tsx`)
- [ ] Add smooth page transitions

## Phase 3 — Integrations

- [ ] Wire Resend email in `/api/contact` (template, from/to addresses)
- [ ] Wire Resend in `/api/subscribe` with audience list
- [ ] Build welcome email sequence (5 emails) in Resend
- [ ] Add Stripe payment links for workshop registrations
- [ ] Set up environment variables in Vercel
- [ ] Add Google Tag Manager or Plausible analytics event tracking

## Phase 4 — Content

- [ ] Write and publish 10 initial blog posts (see blog strategy in HANDOFF.md)
- [ ] Add real photography to all pages
- [ ] Write Ella's full bio
- [ ] Add upcoming real event dates to `/events`
- [ ] Build real events data layer (CMS or JSON file)
- [ ] Create lead magnet PDF ("5 Pillars of Conscious Intimacy")
- [ ] Add schema markup (LocalBusiness, Event, Article)

## Phase 5 — SEO & Performance

- [ ] Add structured data (JSON-LD) to workshop pages and blog posts
- [ ] Verify Google Search Console
- [ ] Set up Vercel Web Analytics with custom events
- [ ] Image optimization — add `next/image` with proper `sizes` props
- [ ] Add `@vercel/og` for dynamic OG images per page
- [ ] Lighthouse audit and performance fixes

## Phase 6 — CMS

- [ ] Evaluate CMS options (Sanity, Contentlayer, or filesystem MDX)
- [ ] Migrate blog posts to CMS
- [ ] Build event management in CMS
- [ ] Add admin-only preview mode

## Ongoing

- [ ] Add more blog posts (target: 50 per roadmap)
- [ ] Monitor Core Web Vitals in Vercel dashboard
- [ ] Add GDPR cookie consent banner
- [ ] Accessibility audit (axe-core)

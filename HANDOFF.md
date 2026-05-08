# Handoff Document

## Completed: Phase 1 — Foundation

**Branch**: `claude/luxury-education-site-CiQoA`  
**Date**: 2026-05-08  

---

## What Was Built

A production-ready Next.js 15 marketing website for Yaw Tutu's transformational education and retreat business. All pages are routable, all components are built, TypeScript is clean, ESLint is clean.

**Tech stack**: Next.js 15 (App Router) · TypeScript · TailwindCSS · Radix UI · Lucide Icons · MDX · Vercel Analytics

---

## To Resume Work

```bash
git checkout claude/luxury-education-site-CiQoA
npm install
npm run dev
# Site is at http://localhost:3000
```

---

## Exact Next Steps (Phase 2)

### Immediate Priority
1. **Add photography** — All image placeholders need real imagery. The most impactful placements are: hero background, Maine retreat section (homepage + retreat page), and about page portraits.

2. **Add Framer Motion animations** — Install `framer-motion` (already in package.json). Key animations:
   - Hero: staggered fade-up on text elements
   - Section entries: `useInView` + `motion.div` fade-up
   - Testimonials: crossfade transition on slide change
   - Navigation: smooth backdrop blur transition (already working with CSS)

3. **Wire Resend** — Set `RESEND_API_KEY` in `.env.local`, then update:
   - `src/app/api/contact/route.ts` — uncomment Resend block, add to/from
   - `src/app/api/subscribe/route.ts` — add to Resend audience

4. **FAQ accordion** — Install `npx shadcn@latest add accordion` and replace static FAQ rendering with animated Accordion component.

### Next Claude Prompt for Phase 2
```
Continue Phase 2 of the Yaw Tutu website (branch: claude/luxury-education-site-CiQoA).
Phase 1 is complete: all pages built, TypeScript + ESLint clean.

Phase 2 tasks:
1. Add Framer Motion scroll-triggered animations to all homepage sections
2. Replace FAQ static rendering with shadcn/ui Accordion on all FAQ sections
3. Add a proper 404 not-found page
4. Add loading.tsx for the blog route
5. Update the blog [slug] page to handle missing MDX gracefully with a content-not-found UI
6. Wire Resend into /api/contact and /api/subscribe (stubs are ready)
7. Add @vercel/og dynamic OG image generation

Leave TypeScript and ESLint clean. Update CURRENT_STATE.md and TODO.md when done.
```

---

## Environment Variables Needed

| Variable | Purpose | Where to Get |
|----------|---------|--------------|
| `RESEND_API_KEY` | Email delivery | resend.com |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs | Set to production domain |

Create `.env.local` (not committed):
```
RESEND_API_KEY=re_your_key_here
NEXT_PUBLIC_SITE_URL=https://yawtutu.com
```

---

## Vercel Deployment

1. Push branch to GitHub
2. In Vercel: New Project → Import `askyaw/yawtutu-website`
3. Framework: Next.js (auto-detected)
4. Add environment variables
5. Deploy

The site is fully deployable as-is (even without real images or email keys — those features degrade gracefully).

---

## SEO Strategy (Phase 5 in detail)

### Target keywords
- Primary: `tantra workshop [city]`, `couples retreat Maine`, `BDSM education workshop`
- Secondary: `conscious intimacy workshop`, `embodiment workshop`, `somatic intimacy`
- Long-tail: `tantra foundations workshop beginners`, `safe BDSM education couples`, `private Maine coast retreat couples`

### Content pillars for the blog
1. **Tantra 101** — demystifying tantra, energy practices, breathwork
2. **Nervous System + Intimacy** — regulation, arousal, attachment
3. **Consent as Practice** — beyond the checkbox
4. **Embodiment** — why the body first
5. **Relationship** — communication, power dynamics, trust

### Local SEO targets
- Maine couples retreats
- Boston tantra workshops
- New York tantric massage/workshops
- Providence embodiment classes

---

## Blog Roadmap (50 Articles)

**Tantra (10)**
1. What Tantra Actually Is (And What It Isn't) ✅ written
2. The 7 Chakras: A Practical Map, Not a Metaphor
3. Why Breathwork Changes Everything in Intimacy
4. Eye Gazing: The Most Uncomfortable Practice You Need
5. What Is Prana and Why Does It Matter in Relationships?
6. Yab Yum: The Union Posture and What It Teaches
7. How to Practice Tantra Solo
8. Tantra and Trauma: What You Need to Know Before Attending a Workshop
9. Energy Looping: Learning to Give and Receive Fully
10. The Difference Between Sacred Sexuality and Tantra

**Nervous System (8)**
11. Why Your Nervous System Is the Foundation of Intimacy ✅ in metadata
12. Polyvagal Theory for Intimate Relationships (A Plain-Language Guide)
13. What Freeze Looks Like in Intimacy
14. Regulation vs. Suppression: The Key Distinction
15. How to Build a Co-Regulation Practice with Your Partner
16. Why High-Achievers Often Struggle With Presence
17. Somatic Markers: Learning to Read Your Own Body
18. The Nervous System and BDSM: What You Need to Know

**Consent (7)**
19. Consent as a Living Practice, Not a Checkbox ✅ in metadata
20. How to Have the Conversation Before the Scene
21. Safewords Are the Floor, Not the Ceiling
22. Consent and Long-Term Relationships: Why It Gets Harder
23. Negotiation as Foreplay: The Art of Getting Clear
24. When Consent Gets Murky: Gray Areas and How to Navigate Them
25. Teaching Consent to Yourself First

**Intimacy & Relationships (10)**
26. The Four Types of Intimacy (Most People Only Know One)
27. Why Depth Is More Interesting Than Novelty
28. Power Dynamics in Relationships: Everyone Has Them
29. What Makes a Scene Feel Sacred
30. The Psychology of Surrender
31. Dom/Sub Archetypes: What They Actually Mean
32. Aftercare: The Most Important Part No One Talks About
33. Reconnecting After Drift: A Guide for Long-Term Couples
34. Why Couples Fight After Retreats (And What To Do About It)
35. The Difference Between Vulnerability and Oversharing

**Embodiment & Practice (8)**
36. Why Talk Therapy Is Not Enough for Some People
37. What Biodanza Taught Me About Aliveness
38. Latihan: The Practice of Authentic Movement
39. Rope as a Presence Practice
40. Impact Play and the Physiology of Sensation
41. Sensation Play: A Map for Beginners
42. Aspecting: Embodying an Archetype Deliberately
43. Bodywork as Emotional Practice

**Retreats & Containers (7)**
44. What Makes a Retreat Actually Transformative
45. How to Choose a Safe Workshop for Intimate Work
46. The Maine Coast as a Healing Container
47. Integration: The Most Neglected Part of Any Retreat
48. How to Prepare for a Deep Embodiment Workshop
49. What to Expect from Your First Tantra Workshop
50. Building a Home Practice After a Retreat

---

## Known Issues at Handoff

See `CURRENT_STATE.md` for full list. Critical items:
1. No real photography
2. Resend not wired
3. No Stripe integration
4. `og-default.jpg` missing from `/public/images/`

---

## Dependencies Added

All in `package.json`. Key additions to existing HTML site:
- `next@15.3.1`, `react@19`, `typescript@5`
- `tailwindcss@3`, `tailwindcss-animate`
- `framer-motion@11`, `lucide-react`
- `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`
- `@vercel/analytics`, `@vercel/speed-insights`
- `resend` (stub — not yet active)
- Radix UI primitives (accordion, dialog, navigation-menu, slot, toast)
- `clsx`, `tailwind-merge`, `class-variance-authority`

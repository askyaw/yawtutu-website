# QA Report — Phase 1

**Date**: 2026-05-08  
**Branch**: `claude/luxury-education-site-CiQoA`

---

## Automated Checks

| Check | Status | Notes |
|-------|--------|-------|
| `tsc --noEmit` | ✅ PASS | Zero errors, strict mode |
| `next lint` | ✅ PASS | Zero warnings or errors |
| Build | Not yet run | Run `npm run build` to verify |

---

## Manual Checks (To Perform in Phase 2)

### Responsiveness
- [ ] Homepage on mobile (375px) — hero, cards, nav
- [ ] Navigation mobile overlay — open/close, links work
- [ ] Workshop pages on tablet (768px)
- [ ] Footer on all breakpoints
- [ ] Contact form on mobile

### Accessibility
- [ ] Tab order through navigation
- [ ] Focus states visible on all interactive elements (CSS defined)
- [ ] All images have alt text (placeholders do)
- [ ] Form labels associated with inputs ✅ (label[for] used)
- [ ] Buttons have aria-labels where text-only ✅ (nav buttons)
- [ ] Color contrast ratio — gold on charcoal (needs Lighthouse audit)
- [ ] Skip-to-content link (not yet added)

### SEO
- [ ] Check `/sitemap.xml` renders correctly
- [ ] Check `/robots.txt` renders correctly
- [ ] Verify OG tags with Open Graph debugger
- [ ] Verify Twitter card metadata
- [ ] Check canonical URLs are correct

### Forms
- [ ] Contact form validation (required fields)
- [ ] Contact form submission error handling
- [ ] Email subscribe validation
- [ ] Loading states render during submission

### Performance
- [ ] Run Lighthouse audit post-deploy
- [ ] Check CLS on hero section (fixed height approach)
- [ ] Verify Google Fonts loading with `display=swap`
- [ ] Check for layout shift on navigation scroll

---

## Known Issues

| Issue | Severity | Phase |
|-------|----------|-------|
| No real photography | Medium | Phase 2 |
| Missing `/public/images/og-default.jpg` | Low | Phase 2 |
| Resend not wired | Low (graceful fallback) | Phase 3 |
| No skip-to-content link | Low | Phase 2 |
| Blog MDX dynamic import has no graceful 404 UI | Low | Phase 2 |
| No cookie consent banner (GDPR) | Medium | Phase 5 |
| Dark mode toggle not built | Low | Phase 2 |

---

## Technical Debt

1. **Blog data layer** — `getAllPosts()` returns hardcoded placeholders. Should read from filesystem or CMS.
2. **Events data** — Hardcoded in `events/page.tsx`. Should move to a data file or CMS.
3. **Testimonials** — Hardcoded in `TestimonialsSection.tsx`. Should move to data file.
4. **Image placeholders** — Gradient divs everywhere. Replace with `next/image` components.
5. **Category filter on blog** — Currently non-functional buttons. Phase 2: add URL params for filtering.

# Architecture

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | TailwindCSS 3 + custom design tokens |
| UI primitives | Radix UI (via shadcn/ui pattern) |
| Animation | Framer Motion (wired, not yet used) |
| Icons | Lucide React |
| Content | MDX via `@next/mdx` |
| Email | Resend (stub — requires `RESEND_API_KEY`) |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

## Directory Structure

```
/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (fonts, nav, footer, analytics)
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Design system + Tailwind layers
│   │   ├── sitemap.ts              # Auto-generated sitemap
│   │   ├── robots.ts               # robots.txt
│   │   ├── tantra-foundations/page.tsx
│   │   ├── bdsm-fundamentals/page.tsx
│   │   ├── maine-retreat/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/
│   │   │   ├── page.tsx            # Server component shell
│   │   │   └── ContactForm.tsx     # Client component (form logic)
│   │   ├── faq/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/page.tsx     # Dynamic MDX post
│   │   ├── events/page.tsx
│   │   ├── legal/page.tsx
│   │   └── api/
│   │       ├── contact/route.ts    # POST /api/contact
│   │       └── subscribe/route.ts  # POST /api/subscribe
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx      # Sticky, scroll-aware nav
│   │   │   └── Footer.tsx          # 4-column footer
│   │   ├── sections/
│   │   │   ├── SectionHeader.tsx   # Reusable eyebrow/title/subtitle
│   │   │   ├── CTASection.tsx      # Reusable CTA with variants
│   │   │   ├── TestimonialsSection.tsx  # Carousel testimonials
│   │   │   └── EmailOptIn.tsx      # Lead magnet form
│   │   └── ui/                     # shadcn/ui components (add as needed)
│   ├── lib/
│   │   ├── utils.ts                # cn(), formatDate(), slugify()
│   │   ├── seo.ts                  # buildMetadata(), siteConfig
│   │   └── blog.ts                 # getAllPosts(), getPostBySlug()
│   ├── types/index.ts              # Shared TypeScript interfaces
│   └── content/
│       └── blog/                   # MDX posts live here
│           └── what-is-tantra.mdx
├── public/images/                  # Static assets
├── mdx-components.tsx              # Required by @next/mdx
├── next.config.mjs                 # Next.js + MDX config
├── tailwind.config.ts              # Full design token config
├── tsconfig.json                   # TypeScript strict config
├── .eslintrc.json                  # ESLint (next/core-web-vitals)
└── components.json                 # shadcn/ui config
```

## Design System

### Color Palette
- `charcoal` — primary dark (backgrounds, text)
- `ivory` — primary light (#f5f0e8)
- `gold` — brand accent (#b8966e)
- `clay` — warm mid-tone
- `sand` — borders, subtle fills
- `dusk` — cool mid-tone (Maine retreat palette)

### Typography
- Display/headings: Cormorant Garamond (elegant serif, light weight)
- Body: Inter (clean sans-serif)
- CSS variables: `--font-cormorant`, `--font-inter`, `--font-playfair`

### Utility Classes (globals.css)
- `.section-padding` — consistent vertical rhythm
- `.container-editorial` — max-w-7xl with editorial padding
- `.container-narrow` — max-w-3xl for article layouts
- `.heading-display`, `.heading-xl`, `.heading-lg`, `.heading-md`
- `.btn-primary`, `.btn-outline`, `.btn-ghost`
- `.subheading` — uppercase tracking label
- `.divider-gold`, `.divider-gold-left`
- `.card-elegant` — glassmorphism card
- `.link-underline` — animated underline on hover

## Data Flow

- **Blog posts**: MDX files in `src/content/blog/` + metadata in `src/lib/blog.ts`
- **Contact form**: POST `/api/contact` → Resend (stub)
- **Email subscribe**: POST `/api/subscribe` → Email provider (stub)
- **SEO**: Per-page `buildMetadata()` from `src/lib/seo.ts`
- **Sitemap**: Auto-generated at `/sitemap.xml` from `src/app/sitemap.ts`

## Environment Variables Required

```env
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_SITE_URL=https://yawtutu.com
```

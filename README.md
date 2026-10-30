# KONTRAST — Creative Engineering & Digital Flagships

> A production-ready, motion-led marketing and portfolio website for a global digital and creative agency, built following the Anakle-style structural and interaction specification.

---

## 1. Overview & Brand Architecture

**Brand:** **KONTRAST** (Atelier & Labs)  
**Global Studios:** **NEW YORK, US** (SoHo) & **LAGOS, NG** (Lekki Phase 1)  
**Tone:** Bold, clear, editorial, minimal, and unapologetically confident.  
**Audience:** Venture-backed founders, scaleups, enterprise marketing heads, and top design/engineering talent.

---

## 2. Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org) with React 19, Turbopack, and TypeScript
- **Styling:** Tailwind CSS with pure CSS design tokens (`--bg`, `--fg`, `--muted`, `--accent`, `--line`)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering) with `prefers-reduced-motion` compliance
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/) with GPU-accelerated transforms (`transform` & `opacity`)
- **Typography:** Display Grotesk with fluid viewport clamps (`clamp(3.75rem, 16vw, 19rem)`) and Inter
- **Data & CMS Layer:** Typed Sanity CMS schemas and fallback data store (`src/lib/cms/`)
- **Forms & Email Delivery:** Next.js Route Handlers (`/api/contact`, `/api/newsletter`) with honeypot spam traps, rate limiting, and Resend integration
- **Delight & Micro-Interactions:** Custom magnetic cursor, celebratory confetti (`canvas-confetti`), live timezone clocks for New York and Lagos

---

## 3. Design System Tokens

Defined as CSS variables in `src/app/globals.css`:
- `--bg`: `#0B0B0B` (Near-black dominant editorial dark mode)
- `--fg`: `#F4F2EE` (Off-white contrast typography)
- `--muted`: `rgba(244, 242, 238, 0.55)` (55% opacity editorial body text)
- `--accent`: `#FF3E00` (Electric vermilion used sparingly for hover states, links, and badges)
- `--line`: `rgba(244, 242, 238, 0.12)` (Subtle dividers & borders)
- `--card-bg`: `rgba(244, 242, 238, 0.03)` (Semi-transparent elevation)

---

## 4. Homepage Sections (In Exact Sequence)

1. **6.1 Hero (`HeroSection.tsx`)**:
   - Giant fluid uppercase wordmark `KONTRAST` with masked letter rise animation.
   - Four tall portrait project cards (3:4 aspect ratio) in a staggered row with scroll parallax drift.
   - Agency descriptor (~25 words) and quick link to `/work`.

2. **6.2 Intro Statement (`IntroStatement.tsx`)**:
   - Scroll-linked progressive word opacity reveal (0.2 to 1.0) on a 20-word headline.
   - Supporting narrative on localized solutions, strategic integration, and direct partner access.

3. **6.3 Big Statement Marquee (`StatementMarquee.tsx`)**:
   - Two opposing-direction infinite horizontal marquees:
     - `BIG THINKING • UNAPOLOGETIC CRAFT • SHAPING DIGITAL CULTURE • KNOCK CLIENTS DEAD •`
     - `RADICAL CLARITY • HIGH-CONVERSION FLAGSHIPS • SURGICAL ENGINEERING • BESPOKE MOTION •`

4. **6.4 Services (`ServicesSection.tsx`)**:
   - Sticky left column heading with "Get Started" CTA button.
   - Right column: Stacked interactive rows `A / BRAND IDENTITY`, `B / DIGITAL DESIGN`, `C / CREATIVE DIRECTION`, and `D / STRATEGY & CONSULTING`.
   - Expandable breakdown with core disciplines and tangible production deliverables.

5. **6.5 In Numbers (`InNumbersSection.tsx`)**:
   - Animated rolling odometer counters for:
     - **28+** Global Design Accolades (links to `#awards`)
     - **64+** Founders & Brands Worldwide (links to `#clients`)
     - **142+** Completed Projects Shipped (links to `/work`)
   - Supporting photography and direct links.

6. **6.6 Awards (`AwardsSection.tsx`)**:
   - Editorial table list: Award name, Category, Count (`x3`, `x8`, `x12`), Year.
   - Interactive hover highlight.

7. **6.7 Partners (`PartnersMarquee.tsx`)**:
   - Infinite logo marquee featuring curated brand emblems, pauses on hover.

8. **6.8 The Process (`ProcessSection.tsx`)**:
   - Pinned 4-step methodology:
     - `01` Discovery & Diagnosis
     - `02` Strategy & Architecture
     - `03` Design & Engineering
     - `04` Launch & Beyond
   - Interactive step navigator and progress bar indicator.

9. **6.9 Client Reflections (`TestimonialsSlider.tsx`)**:
   - Interactive carousel with 5 client testimonials, author names, roles, companies, and country flag emojis (`🇺🇸`, `🇩🇰`, `🇨🇭`, `🇳🇬`, `🇬🇧`).
   - Autoplay (pauses on hover), previous/next arrow controls, and keyboard navigation.

10. **6.10 Studio Notes (`StudioNotesTeaser.tsx`)**:
    - Displays 2 latest featured essays with reading time, date, title, excerpt, and link to `/feed`.

11. **6.11 Pricing (`PricingSection.tsx`)**:
    - Monthly / Annual toggle switch with **-20% discount badge** on annual commitment.
    - Three stage-based tiers: **Foundation**, **Accelerate** (Most Popular), and **Command**.
    - Retainer price, struck-through original price, setup fee, and 8–9 point feature checklists.

12. **6.12 Careers CTA (`CareersCTA.tsx`)**:
    - High-impact callout: *"Do you feel ready to become part of our growing team?"* with "Join Us" button linking to `/studio#career`.

13. **6.13 Let's Talk (`MadLibContactForm.tsx`)**:
    - Interactive sentence-style Mad-Libs form:
      > *"Hey Kontrast, my name is [name] and I'm writing from [company]. I'm getting in touch because I'd like to [intent]. My budget is roughly [select] and I'd like to start [select]. You can contact me at [email]. Here's my phone: [phone]. Looking forward to your reply!"*
    - Budget options: `$5,000 to $10,000`, `$10,000 to $20,000`, `$20,000+`
    - Timeframe options: `As soon as possible`, `Next month`, `Whenever you're available`
    - Client validation, honeypot protection, server dispatch, confetti explosion, and thank-you confirmation state.

14. **6.14 FAQ (`FAQSection.tsx`)**:
    - Accordion addressing initiation, strategy vs. design, timelines (4–6 vs. 8–12 weeks), and scoping uncertainty.
    - Single-item expansion with smooth height transitions and ARIA attributes.

15. **6.15 Footer (`Footer.tsx`)**:
    - Studio newsletter subscription with live validation and API submission.
    - Dual studio addresses with live local clocks for New York and Lagos.
    - Social links (LinkedIn, X, Instagram, GitHub) and legal pages.
    - Viewport-spanning responsive `KONTRAST` wordmark.

---

## 5. Inner Pages & Routing Architecture

| Route | Description |
|---|---|
| `/` | Full 15-section homepage |
| `/work` | Portfolio index with category filters (`All`, `Branding`, `Digital Design`, `Motion & 3D`, `Strategy`) and alternating editorial grid rhythm |
| `/work/[slug]` | Complete case study template with client meta, challenge, approach, metrics, outcome, image gallery, and next project link |
| `/studio` | Agency manifesto, dual studio locations with live clocks, leadership team, and `#career` open positions with application modal |
| `/feed` | Editorial blog index with featured story hero and article grid |
| `/feed/[slug]` | Deep longform article template with author info, reading time, share actions, and related articles |
| `/contacts` | Dedicated contact page with dual office cards, direct phone/email, and the Mad-Libs form |
| `/terms-of-service` | Comprehensive, readable terms of engagement |
| `/privacy-policy` | Clean data privacy and protection policy |
| `/not-found` | Bespoke 404 void page with quick navigation back home |
| `/sitemap.xml` | Dynamic SEO sitemap indexing all static and dynamic paths |
| `/robots.txt` | Standard search crawler rules |
| `/api/contact` | Server-validated contact form endpoint with honeypot and rate limiting |
| `/api/newsletter` | Studio dispatch email subscription endpoint |

---

## 6. Installation & Local Development

### Prerequisites
- Node.js 18+ (tested on Node.js v24)
- npm or pnpm

### Getting Started

```bash
# 1. Clone repository & install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 7. Environment Variables (Optional)

Create a `.env.local` file in the root if you want to integrate real live third-party services:

```bash
# Resend API Key for live transactional email delivery (optional - fallback logs to console)
RESEND_API_KEY="re_..."

# Sanity CMS credentials (optional - fallback serves from src/lib/cms/data.ts)
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

---

## 8. Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Deploy. All static pages and dynamic routes prerender automatically.

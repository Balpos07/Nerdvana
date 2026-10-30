# NERDVANA — Technology. Creativity. Growth.

> Product Requirements Document (PRD V2.0) Implementation for Nerdvana's Global Website & Digital Experience.

---

## 1. Project Overview & Brand Positioning

**Brand:** **NERDVANA**  
**Tagline:** **Technology. Creativity. Growth.**  
**Core Headline:** **Build better. Grow faster. Stand out.**  
**Core Brand Statement:**  
> *"Nerdvana is a global technology and creative agency crafting bold brands, digital experiences and powerful technology solutions through clarity, innovation and timeless craft. We help ambitious businesses build better, move faster and show the world who they are."*

**Global Hubs:**  
- **NEW YORK, US** (SoHo)
- **LAGOS, NG** (Lekki Phase 1)

---

## 2. Business Architecture

Nerdvana operates as a single parent brand uniting two dedicated service divisions:

```
NERDVANA
   └── OUR SERVICES
         ├── NERDVANA TECHNOLOGIES (Technology & IT Services)
         └── FIGURES BY NERDVANA (Branding, Creative & Marketing)
```

### Division 1: Nerdvana Technologies — Technology & IT Services
*“Technology that moves businesses forward.”*
- **Cloud & Infrastructure:** Cloud architecture, AWS, Azure, Google Cloud, automation, migration & optimization.
- **DevOps & Platform Engineering:** CI/CD, Kubernetes, Docker, IaC, Terraform, GitOps & automation.
- **Software Engineering:** Web applications, backend systems, APIs, SaaS platforms & integrations.
- **AI & Automation:** AI applications, AI infrastructure, deployment, business automation & integrations.
- **Reliability & Security:** SRE, monitoring, observability, incident management, performance & infrastructure security.

### Division 2: Figures by Nerdvana — Branding, Creative & Marketing
*“Brands, experiences and marketing that move people and businesses forward.”*
- **Branding:** Brand strategy, identity, visual identity, guidelines, logo systems & creative direction.
- **UI/UX:** UX research, user flows, wireframes, interface design, design systems & product design.
- **Web Design & Development:** Corporate sites, startup sites, landing pages, e-commerce, web apps & conversion-focused websites.
- **Creative Production:** Motion graphics, digital assets, campaign creatives, marketing visuals, presentations & content design.
- **Marketing & Growth:** Strategy, campaigns, paid advertising, social media, email, SEO, content, copywriting, lead generation, funnels, CRO & performance marketing.

---

## 3. Brand Identity & Color Tokens

- **Nerdvana Black:** `#0A0A0A`
- **Nerdvana Off-White:** `#F5F5F2`
- **Nerdvana Lime:** `#B8FF00` (Signature electric accent for CTAs, highlights, links, interactive states, graphics & motion)

---

## 4. Homepage Flow (Section 10 of PRD V2.0)

1. **Navigation:** Mega-menu containing *Nerdvana Technologies* and *Figures by Nerdvana*, *Work*, *Packages*, *Curious?*, *Process*, *About*, and primary CTA *Let's Talk*.
2. **Hero Section:** "Build better. Grow faster. Stand out." with giant fluid `NERDVANA` wordmark, 4 tall portrait project cards (3:4 ratio), Primary CTA "Get Started", Secondary CTA "Explore Our Work".
3. **What Nerdvana Does (Section 13):** Overall proposition: *Technology + Creativity + Growth*. Sequential lifecycle: `Imagine → Build → Launch → Automate → Market → Scale`.
4. **Our Services (Section 14):** Interactive division switcher between *Nerdvana Technologies* and *Figures by Nerdvana*, complete with capabilities, deliverables, and consult links.
5. **Our Work (Section 16):** "Work we're proud of." Filters: *All | Technology | Branding | Web | Marketing | Creative* with real metrics and tech stacks.
6. **Our Packages (Section 17):** Packaged offerings inspired by Anakle: *Brand Launchpad*, *Flagship Web & UX*, *Cloud & DevOps Scale*, *Growth Engine & CRO*, and *Enterprise Synergy*.
7. **Curious? (Section 18):** Problem/need-led interactive module addressing visitor bottlenecks and mapping directly to Nerdvana resolutions.
8. **Why Nerdvana (Section 19):** 5 strategic pillars: *Technology + Creativity*, *Strategy + Execution*, *Built Around Your Business*, *One Connected Partner*, and *Built to Scale*.
9. **Our Process (Section 20):** 6-step lifecycle: `01 Discover`, `02 Define`, `03 Strategize`, `04 Create`, `05 Launch`, and `06 Grow`.
10. **Proof / Testimonials (Section 21):** "Don't just take our word for it." Verified commercial metrics, quotes, and client logos.
11. **Questions Answered (Section 22):** Categorized FAQ (*About Nerdvana*, *Services*, *Projects*, *Packages*, *Working With Nerdvana*) + *Ask Your Question* CTA.
12. **Let's Talk (Section 23):** Full project brief form with multi-service selector (*Nerdvana Technologies, Figures by Nerdvana, Technology, Branding, UI/UX, Web, AI, Marketing, SEO, Other, Not sure*), budget, timeline, honeypot spam protection, confetti celebration, and thank-you state.
13. **Footer (Section 26):** Explore links, service divisions, socials (LinkedIn, Instagram, X, Facebook, TikTok, YouTube), contact points (Email, Phone, WhatsApp), legal policies, and viewport-spanning `NERDVANA` wordmark.

---

## 5. Site Architecture & Pages

- `/` — Homepage (Sections 10 to 23)
- `/services` — Dedicated service division pages with deep capability breakdowns
- `/work` — Portfolio index with filters & case studies
- `/work/[slug]` — In-depth case study template with challenges, approaches, and tech stacks
- `/about` — Parent brand story, manifesto, and leadership team
- `/contacts` — Direct studio desks (New York & Lagos), WhatsApp, and brief form
- `/terms-of-service` — Terms of engagement
- `/privacy-policy` — Data privacy policy
- `/cookie-policy` — Cookie policy
- `/sitemap.xml` & `/robots.txt` — SEO infrastructure

---

## 6. Development & Run Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Production build
npm run build
npm run start
```

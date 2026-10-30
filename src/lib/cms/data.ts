import {
  Project,
  Post,
  Testimonial,
  Award,
  ServiceItem,
  PricingPackage,
  FAQItem,
  SiteSettings,
} from "./types";

export const siteSettings: SiteSettings = {
  agencyName: "KONTRAST",
  fullName: "KONTRAST ATELIER & LABS",
  descriptor:
    "A global creative and digital engineering studio. We build bold identities, iconic digital flagships, and high-conversion software for founders defining the next era.",
  offices: [
    {
      name: "NEW YORK",
      label: "NEW YORK, US",
      timezone: "America/New_York",
      address: "447 Broadway, 2nd Fl, Soho, New York, NY 10013",
      phone: "+1 (212) 890-4102",
    },
    {
      name: "LAGOS",
      label: "LAGOS, NG",
      timezone: "Africa/Lagos",
      address: "14B Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
      phone: "+234 (1) 880-9214",
    },
  ],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", handle: "kontrast-agency" },
    { name: "X (Twitter)", url: "https://x.com", handle: "@kontrast_hq" },
    { name: "Instagram", url: "https://instagram.com", handle: "@kontrast.studio" },
    { name: "GitHub", url: "https://github.com", handle: "kontrast-labs" },
  ],
  stats: {
    awards: 28,
    clients: 64,
    projects: 142,
  },
};

export const heroProjects: {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  slug: string;
  offset: string;
}[] = [
  {
    id: "hp-1",
    title: "Aura Robotics",
    client: "Aura Intelligence",
    category: "Identity & Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    slug: "aura-robotics",
    offset: "0px",
  },
  {
    id: "hp-2",
    title: "Vesper Soundworks",
    client: "Vesper Audio",
    category: "Spatial Audio App",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    slug: "vesper-soundworks",
    offset: "40px",
  },
  {
    id: "hp-3",
    title: "Nerve Protocol",
    client: "Nerve Foundation",
    category: "Brand & Web3 Portal",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
    slug: "nerve-protocol",
    offset: "-20px",
  },
  {
    id: "hp-4",
    title: "Kalon Living",
    client: "Kalon Studios",
    category: "E-Commerce Flagship",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    slug: "kalon-living",
    offset: "20px",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Aura Robotics",
    slug: "aura-robotics",
    client: "Aura Intelligence Corp",
    year: "2025",
    category: "Branding",
    services: ["Brand Strategy", "Visual Identity", "3D Kinetic System", "Interactive Flagship"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    summary:
      "A complete brand overhaul and interactive web platform for the pioneer in human-scale humanoid autonomy.",
    challenge:
      "Aura needed to escape the cold, clinical robotics stereotype and present human-centered intelligence with warmth, precision, and commanding authority prior to their Series B raise.",
    approach:
      "We conceived an organic generative kinetic mark that reacts to physical movement. Paired with monochrome editorial typography and tactile physical simulations, we gave Aura a visual language that felt twenty years ahead of the sector.",
    outcome:
      "Aura closed their $42M Series B oversubscribed within six weeks of launch, with inbound investor and engineering talent inquiries rising by 340%.",
    metrics: [
      { label: "Funding Closed", value: "$42M" },
      { label: "Talent Inbound", value: "+340%" },
      { label: "Avg Session", value: "4m 12s" },
      { label: "Awards Won", value: "FWA of the Day" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Kontrast transformed how the world perceives humanoid engineering. They didn't just give us a brand; they gave our mission cultural weight.",
      author: "Elena Rostova",
      role: "CEO & Founder, Aura Intelligence",
    },
    featured: true,
    order: 1,
  },
  {
    id: "proj-2",
    title: "Vesper Soundworks",
    slug: "vesper-soundworks",
    client: "Vesper Audio Zurich",
    year: "2024",
    category: "Digital Design",
    services: ["Audio UX", "Platform Design", "WebGL Visualizer", "Design System"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Spatial acoustic canvas and companion desktop software for audio purists and film composers.",
    challenge:
      "Vesper developed breakthrough lossless binaural audio synthesis, but had no software interface matching the exquisite precision of their Swiss acoustic hardware.",
    approach:
      "We engineered a bespoke WebGL-accelerated frequency field that lets creators sculpt 3D soundscapes using tactile gesture nodes. Every curve and dial responds with micro-haptic visual feedback.",
    outcome:
      "Over 85,000 professional audio engineers and sound designers onboarded within 90 days. Vesper earned consecutive design distinctions across Europe.",
    metrics: [
      { label: "Active Creators", value: "85K+" },
      { label: "Retention Rate", value: "78%" },
      { label: "Latency", value: "<4ms" },
      { label: "Accolades", value: "Awwwards SOTD" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Working with Kontrast felt like collaborating with master watchmakers who also happen to be world-class software architects.",
      author: "Julian Meier",
      role: "VP of Product, Vesper Soundworks",
    },
    featured: true,
    order: 2,
  },
  {
    id: "proj-3",
    title: "Nerve Protocol",
    slug: "nerve-protocol",
    client: "Nerve Foundation",
    year: "2024",
    category: "Strategy",
    services: ["Protocol Narrative", "Design Token Architecture", "Developer Portal"],
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Institutional-grade branding and documentation engine for zero-knowledge cryptographic state synchronization.",
    challenge:
      "Cryptographic infrastructure is frequently hindered by impenetrable technical jargon and chaotic visual noise, making enterprise adoption a struggle.",
    approach:
      "We distilled Nerve's breakthrough zero-knowledge verification down to clear, typographic clarity, interactive cryptographic proofs, and an effortless documentation experience.",
    outcome:
      "More than 420 institutional validator nodes and 60 decentralized applications integrated the protocol in Q3 alone.",
    metrics: [
      { label: "Total Value Locked", value: "$1.8B" },
      { label: "Integrated DApps", value: "60+" },
      { label: "SDK Downloads", value: "120K" },
      { label: "Documentation CSAT", value: "98%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "They took mathematically complex cryptography and rendered it elegant, trust-inducing, and instantly compelling to Fortune 500 partners.",
      author: "Dr. Kemi Adeleke",
      role: "Founding Researcher, Nerve Protocol",
    },
    featured: true,
    order: 3,
  },
  {
    id: "proj-4",
    title: "Kalon Living",
    slug: "kalon-living",
    client: "Kalon Studios Copenhagen",
    year: "2024",
    category: "Digital Design",
    services: ["E-Commerce Architecture", "Art Direction", "Headless Next.js", "Content Strategy"],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Minimalist architectural furniture flagship merging editorial storytelling with lightning-fast checkout.",
    challenge:
      "Kalon produces heirloom architectural furniture in Scandinavia, but their legacy storefront suffered from slow mobile speeds, low conversion on high-ticket SKUs, and fragmented branding.",
    approach:
      "We created a bespoke headless commerce experience with 3D product inspection, room dimension AR visualization, and seamless editorial lifestyle narratives.",
    outcome:
      "Global sales increased by 215%, with average order value (AOV) jumping from $1,400 to $2,950 within six months.",
    metrics: [
      { label: "AOV Increase", value: "+110%" },
      { label: "Mobile Conversion", value: "4.8%" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "International Sales", value: "+215%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Our digital presence now commands the exact same reverence as our physical showroom in Copenhagen.",
      author: "Astrid Lindholm",
      role: "Creative Director, Kalon Living",
    },
    featured: true,
    order: 4,
  },
  {
    id: "proj-5",
    title: "Mono Horizon",
    slug: "mono-horizon",
    client: "Mono Mobility Group",
    year: "2023",
    category: "Motion & 3D",
    services: ["In-Car HMI", "Kinetic Design System", "Brand World", "Motion Typography"],
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Next-generation digital cockpit typography and HUD interaction language for autonomous luxury electric vehicles.",
    challenge:
      "Legacy automotive interfaces clutter drivers with sensory overload. Mono needed a glanceable, distraction-free display system for Level 4 automated travel.",
    approach:
      "We created an adaptive typography framework that shifts weight and contrast dynamically based on vehicle velocity, ambient sunlight, and cognitive load.",
    outcome:
      "Adopted as the foundational interface across Mono's 2026 fleet production line, setting a new benchmark for automotive user safety.",
    metrics: [
      { label: "Glance Latency", value: "-45%" },
      { label: "Production Fleet", value: "12,000 EVs" },
      { label: "Design Patents", value: "4 Granted" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: false,
    order: 5,
  },
  {
    id: "proj-6",
    title: "Strata Intelligence",
    slug: "strata-intelligence",
    client: "Strata Labs San Francisco",
    year: "2023",
    category: "Branding",
    services: ["Brand Strategy", "Generative Identity", "Marketing Website", "Investor Deck"],
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Positioning and visual identity for enterprise synthetic data generation powering aerospace and medical diagnostics.",
    challenge:
      "Synthetic data was misunderstood by executive buyers as 'fake data'. Strata needed a position of supreme statistical fidelity and rigorous defense.",
    approach:
      "We coined 'Mathematical Veracity' as their guiding positioning and designed a layered topographical identity that maps multi-dimensional probability fields.",
    outcome:
      "Signed 8 enterprise contracts with Fortune 100 aerospace and defense contractors within the first 6 months of rollout.",
    metrics: [
      { label: "Enterprise ACV", value: "$480K" },
      { label: "Sales Cycle", value: "-30 Days" },
      { label: "Coverage", value: "WSJ, Forbes" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    ],
    featured: false,
    order: 6,
  },
];

export const services: ServiceItem[] = [
  {
    letter: "A /",
    title: "Brand Identity",
    shortDescription: "Architecting visual systems that imprint permanence and command respect.",
    description:
      "We build brands as living, dynamic systems designed to scale seamlessly across physical spaces, high-resolution screens, and cultural conversations.",
    items: [
      "Brand Positioning & Core Narrative",
      "Visual Identity System & Dynamic Mark",
      "Typography Hierarchy & Custom Letterforms",
      "Color Architecture & Material Guidelines",
      "Comprehensive Living Design System Library",
      "Packaging, Spatial & Collateral Touchpoints",
    ],
    deliverables: [
      "Brand Guideline Bible (Web & PDF)",
      "Vector Asset Library & Token Sets",
      "Font Licenses & Typographic Rules",
      "Merchandise & Physical Collateral Specs",
    ],
  },
  {
    letter: "B /",
    title: "Digital Design",
    shortDescription: "Crafting digital flagships that convert traffic into loyal believers.",
    description:
      "Websites and platforms that marry ruthless engineering performance with cinematic aesthetics, ensuring every interaction feels weighted and intentional.",
    items: [
      "High-Conversion Flagship Website Design",
      "Interaction Guidelines & Choreographed Motion",
      "Design Systems & Component Libraries (Figma)",
      "Fluid Multi-Device Responsive Architecture",
      "WebGL, Canvas & 3D Interactive Experiences",
      "Performance Audits & Conversion Optimization",
    ],
    deliverables: [
      "Production-Ready Next.js & React Codebases",
      "Production Figma Workspace & Component Kit",
      "Motion Choreography Specs (GSAP/Lottie)",
      "Headless CMS Integration & API Architecture",
    ],
  },
  {
    letter: "C /",
    title: "Creative Direction",
    shortDescription: "Directing cinematic narratives, campaign worlds, and photographic tone.",
    description:
      "We orchestrate the entire sensory world around your product, defining how it moves, how it speaks, and the emotions it evokes upon first encounter.",
    items: [
      "Campaign Concept & Creative Vision",
      "Art Direction for Photography & Cinema",
      "3D Product Visualizations & Kinetic Renders",
      "Editorial Tone of Voice & Copywriting",
      "Social & Launch Storyboard Direction",
      "Exhibition & Event Stage Design",
    ],
    deliverables: [
      "Campaign Treatment & Art Direction Decks",
      "Production-Grade 4K Motion Assets",
      "Voice & Tone Playbook for Editorial Teams",
      "Launch Narrative Architecture & Rollout Plan",
    ],
  },
  {
    letter: "D /",
    title: "Strategy & Consulting",
    shortDescription: "Decisive market diagnosis, naming, and engineering roadmaps.",
    description:
      "Before writing a line of code or drawing a glyph, we dissect your market reality, strip away superfluous noise, and chart a defensible growth vector.",
    items: [
      "Competitive Landscape & Market Diagnosis",
      "Product Naming & Messaging Frameworks",
      "Audience Segmentation & Behavioral Mapping",
      "Comprehensive Digital Product Audits",
      "Executive Brand Alignment Workshops",
      "Multi-Year Technology & Design Roadmaps",
    ],
    deliverables: [
      "Strategic Diagnostic Brief & Position Paper",
      "Messaging Matrix by Target Persona",
      "UX/Conversion Audit & Prioritized Backlog",
      "6-to-18 Month Product Rollout Roadmap",
    ],
  },
];

export const awards: Award[] = [
  { id: "aw-1", name: "Awwwards Site of the Year Nominee", category: "Digital Craft & Innovation", count: "x3", year: "2025" },
  { id: "aw-2", name: "FWA of the Day", category: "Interactive Web Experience", count: "x8", year: "2024–2025" },
  { id: "aw-3", name: "Awwwards Site of the Day (SOTD)", category: "Design & Engineering", count: "x12", year: "2023–2025" },
  { id: "aw-4", name: "Type Directors Club Certificate of Typographic Excellence", category: "Display Typography", count: "x2", year: "2024" },
  { id: "aw-5", name: "Webby Award Honoree", category: "Corporate Communications & Identity", count: "x4", year: "2024" },
  { id: "aw-6", name: "Red Dot Design Award", category: "Brands & Communication Design", count: "x2", year: "2023" },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Kontrast operates on a plane rare among creative agencies. They dissected our complex autonomous tech in two days, stripped away the jargon, and delivered a digital flagship that closed our $42M round. Absolutely lethal craft.",
    name: "Elena Rostova",
    role: "CEO & Founder",
    company: "Aura Intelligence",
    countryFlag: "🇺🇸",
    order: 1,
  },
  {
    id: "test-2",
    quote:
      "In six weeks, our international conversion doubled. The level of typographic rigor, motion fluidity, and uncompromising performance they engineered into Kalon Living made us the gold standard in Copenhagen.",
    name: "Astrid Lindholm",
    role: "Chief Creative Officer",
    company: "Kalon Studios",
    countryFlag: "🇩🇰",
    order: 2,
  },
  {
    id: "test-3",
    quote:
      "They don't deliver pretty mockups; they deliver high-performance production code that just works. Their blend of Swiss aesthetic discipline and bleeding-edge WebGL engineering is unmatched worldwide.",
    name: "Julian Meier",
    role: "Head of Product",
    company: "Vesper Audio",
    countryFlag: "🇨🇭",
    order: 3,
  },
  {
    id: "test-4",
    quote:
      "Building for institutional cryptographic adoption requires radical clarity and deep trust. Kontrast gave Nerve Protocol an institutional aura that opened boardroom doors across Wall Street and Silicon Valley.",
    name: "Dr. Kemi Adeleke",
    role: "Founding Researcher",
    company: "Nerve Protocol",
    countryFlag: "🇳🇬",
    order: 4,
  },
  {
    id: "test-5",
    quote:
      "Every deadline met. Every interaction thoughtful. Their team challenged our assumptions in the best possible way and pushed our brand to where it needed to be three years ahead of the competition.",
    name: "Marcus Vance",
    role: "Partner",
    company: "Horizon Ventures",
    countryFlag: "🇬🇧",
    order: 5,
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Why Minimalist Digital Flagships Out-Convert Feature Bloat in 2026",
    slug: "why-minimalist-digital-flagships-out-convert",
    subtitle:
      "In an era of cognitive overload, the agencies and brands that distill their proposition into singular editorial moments capture the market.",
    date: "OCTOBER 24, 2026",
    readTime: "5 MIN READ",
    cover: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Darius Sterling",
      role: "Principal & Creative Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
    },
    tags: ["Strategy", "Conversion", "Design Philosophy"],
    content: `
### The Tyranny of the Feature Grid

For the last five years, B2B and consumer web design fell into an algorithmic trap: endless Bento grids, interchangeable gradients, and thirty-paragraph feature rundowns that tell visitors everything except why they should care.

When everyone speaks at maximum volume, silence becomes deafening.

At Kontrast, our philosophy centers on radical editorial restraint. When a potential buyer lands on your digital flagship, they are not looking for an encyclopedic manual; they are seeking confidence. They want proof of craft, proof of scale, and an intuitive pathway to engage.

\`\`\`
Radical Clarity = (Total Sensory Noise / Defensible Value) × Precision of Motion
\`\`\`

### The Three Laws of Contemporary Editorial Conversion

1. **Hierarchy as Speed:** If the user cannot grasp your tier-one proposition within 800 milliseconds, you have lost the narrative. Typography size and line-height are your primary navigation instruments.
2. **Kinetic Friction:** Motion should never be ornamental. Smooth scroll-linked reveals and micro-interactions communicate weight, luxury, and digital integrity.
3. **Low-Friction Conversions:** Replace cold, generic forms with contextual, sentence-style Mad-Libs dialogues that speak like a human conversation.
    `,
    featured: true,
  },
  {
    id: "post-2",
    title: "Engineering Sixty Frames Per Second Under Heavy WebGL & Motion",
    slug: "engineering-60fps-under-heavy-motion",
    subtitle:
      "How we orchestrate GSAP ScrollTrigger, Lenis smooth scrolling, and Next.js Turbopack without dropping a single frame.",
    date: "OCTOBER 12, 2026",
    readTime: "7 MIN READ",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Tariq Adele",
      role: "Head of Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    },
    tags: ["Engineering", "Motion", "Performance"],
    content: `
### The Illusion of Smoothness

Building award-winning digital experiences often collides with strict performance budgets. Too many agency sites sacrifice Core Web Vitals at the altar of heavy animations, resulting in jank, overheating mobile batteries, and 5-second Largest Contentful Paint (LCP) times.

Here is the exact playbook we enforce at Kontrast to guarantee a 95+ Lighthouse score while delivering visceral kinetic physics:

### 1. Transform and Opacity Exclusively
Never animate \`top\`, \`left\`, \`height\`, or \`margin\`. Force hardware acceleration via \`will-change: transform\` on active nodes and let the GPU handle matrix transforms.

### 2. Lenis Scroll Synchronization
Traditional smooth scroll libraries hijack native wheel events and break accessibility. Lenis normalizes scroll physics natively, delegating coordinates to requestAnimationFrame without introducing layout thrashing.
    `,
    featured: true,
  },
  {
    id: "post-3",
    title: "Typography as Spatial Architecture: Choosing Type for the Screen",
    slug: "typography-as-spatial-architecture",
    subtitle:
      "Why display grotesks and fluid clamp mathematics form the bedrock of high-end editorial experiences.",
    date: "SEPTEMBER 28, 2026",
    readTime: "6 MIN READ",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Sophie Chen",
      role: "Lead Typographer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85",
    },
    tags: ["Typography", "Design", "Craft"],
    content: `
### Beyond the Pixel Grid

Typography is not merely text on a background; it is structural architecture. When you set a title at 18vw with a negative tracking of -0.04em, the negative space between characters forms physical rooms for the user's eye to traverse.
    `,
    featured: false,
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "pkg-foundation",
    name: "Foundation",
    tagline: "You've landed initial product-market fit and need an enterprise-grade brand presence.",
    monthlyPrice: 7500,
    originalMonthlyPrice: 9000,
    yearlyDiscountPercent: 20,
    setupFee: 4500,
    features: [
      "Complete Brand Identity & Vector Asset System",
      "Bespoke High-Conversion Web Flagship (up to 6 core pages)",
      "Next.js App Router & Tailwind Architecture",
      "Headless CMS Integration (Sanity / Payload)",
      "Interactive Micro-Motion & Choreographed Reveals",
      "Full Mobile & Tablet Responsive Optimization",
      "Lighthouse 90+ Guaranteed Core Web Vitals",
      "4 Weeks Rapid Sprint to Launch",
    ],
  },
  {
    id: "pkg-accelerate",
    name: "Accelerate",
    tagline: "You're operating at rapid scale and need high-velocity design and engineering bandwidth.",
    monthlyPrice: 14500,
    originalMonthlyPrice: 17500,
    yearlyDiscountPercent: 20,
    setupFee: 6500,
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in Foundation Tier",
      "Multi-Page Interactive Digital Flagship (up to 14 pages)",
      "Dedicated Senior Designer & Full-Stack Creative Technologist",
      "Custom 3D / WebGL Visualizations & Interactive Shaders",
      "Bespoke Design System & Figma Token Synchronizer",
      "Continuous Conversion Rate Optimization & A/B Experiments",
      "Priority 48-Hour Turnaround on Iterative Requests",
      "Weekly Strategic Sync with Agency Principals",
      "Resend Transactional Email & CRM Webhooks",
    ],
  },
  {
    id: "pkg-command",
    name: "Command",
    tagline: "You're no longer new; you dominate your category with custom digital flagships and constant innovation.",
    monthlyPrice: 24000,
    originalMonthlyPrice: 29000,
    yearlyDiscountPercent: 20,
    setupFee: 9500,
    features: [
      "Full Agency On-Demand Retainer Access",
      "Unlimited Scoped Digital & Brand Work Streams",
      "Bespoke Multi-Region Global Web Platforms",
      "Custom Spatial Audio & Immersive Interactive Apps",
      "Dedicated Creative Director, Tech Lead & Senior Team",
      "Quarterly Onsite Innovation Sprints (NYC or Lagos)",
      "24/7 SLA & Direct Executive Slack Channel",
      "End-to-End Campaign Creative & Launch Rollouts",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does a typical project start?",
    answer:
      "Every engagement kicks off with a mandatory 5-day Discovery & Diagnostic Sprint. We interview your founders, dissect your competitive positioning, review technical constraints, and deliver an unambiguous Scope of Work, visual moodboard, and architecture blueprint before production begins.",
    order: 1,
  },
  {
    id: "faq-2",
    question: "What is the difference between your Strategy and Design offerings?",
    answer:
      "Strategy is deciding what to say, whom to say it to, and why they should care. Design is the surgical craft of executing that strategy through typography, motion, visual systems, and software. At Kontrast, we believe design without strategy is decorative, and strategy without design is invisible.",
    order: 2,
  },
  {
    id: "faq-3",
    question: "What is your typical project timeline?",
    answer:
      "A focused brand identity or MVP digital flagship typically ships in 4 to 6 weeks. Comprehensive multi-platform web flagships with custom 3D motion, headless CMS, and extensive copywriting range between 8 to 12 weeks. We work in disciplined, sprint-based cycles with transparent weekly milestones.",
    order: 3,
  },
  {
    id: "faq-4",
    question: "What if we don't know exactly what we need yet?",
    answer:
      "That is precisely where our Advisory Sprint comes in. Most founders approach us feeling the friction—poor conversion, investor hesitation, or an outdated identity—without knowing the exact tactical fix. We analyze your commercial goals and prescribe the leanest, highest-leverage path forward.",
    order: 4,
  },
];

export const partners: { name: string; symbol: string; sector: string }[] = [
  { name: "AURA INTEL", symbol: "AUR", sector: "Humanoid Robotics" },
  { name: "VESPER AUDIO", symbol: "VSP", sector: "Spatial Sound" },
  { name: "NERVE LABS", symbol: "NRV", sector: "Cryptographic Infra" },
  { name: "KALON NORDIC", symbol: "KLN", sector: "Architectural Living" },
  { name: "STRATA CORP", symbol: "STR", sector: "Synthetic Intelligence" },
  { name: "MONO MOBILITY", symbol: "MNO", sector: "Autonomous Vehicles" },
  { name: "CHRONO VAULT", symbol: "CHR", sector: "Digital Wealth" },
  { name: "SYNTH WAVE", symbol: "SYW", sector: "Generative Audio" },
];

export const processSteps: {
  step: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
}[] = [
  {
    step: "01",
    title: "Discovery & Diagnosis",
    summary: "Dissecting market positioning, audience psychology, and technical constraints.",
    description:
      "We begin by unearthing the unvarnished truth about your commercial landscape. Through executive alignment sessions, competitor audits, and data analysis, we pinpoint the singular narrative advantage that sets you apart.",
    deliverables: ["Strategic Brief", "Competitor Matrix", "Visual Benchmarks", "Target Persona Models"],
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    summary: "Formulating the narrative core, information taxonomy, and technical blueprint.",
    description:
      "Before a pixel is moved, we establish the strategic backbone. We define brand positioning statements, wireframe the conversion pathways, and architect the Next.js and headless data model for effortless scalability.",
    deliverables: ["Brand Narrative Deck", "Content Hierarchy", "Interactive Low-Fi Wireframes", "Tech Stack Architecture"],
  },
  {
    step: "03",
    title: "Design & Engineering",
    summary: "Crafting bespoke typography, tactile micro-interactions, and resilient code.",
    description:
      "Here, surgical craft meets modern code. We choreograph fluid motion, model 3D assets, sculpt high-fashion typography, and write production-grade TypeScript with 60fps performance benchmarks.",
    deliverables: ["High-Fidelity Component System", "Production Next.js Codebase", "GSAP Motion Specs", "Lighthouse 95+ Audit"],
  },
  {
    step: "04",
    title: "Launch & Beyond",
    summary: "Stress-testing, global edge deployment, and post-launch conversion optimization.",
    description:
      "Launch is not the finish line; it is day zero. We conduct cross-browser stress tests, configure SEO and analytics funnels, and monitor conversion metrics to iterate with relentless speed.",
    deliverables: ["Production Edge Deployment", "Analytics Dashboard & Event Funnels", "Staff CMS Training", "Post-Launch Growth Retainer"],
  },
];


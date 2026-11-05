import {
  Project,
  ServiceDivision,
  PackageItem,
  CuriousProblem,
  ProcessStep,
  FAQCategoryItem,
  SiteSettings,
  Post,
} from "./types";

export const siteSettings: SiteSettings = {
  agencyName: "NERDVANA",
  parentBrand: "NERDVANA",
  tagline: "Technology. Creativity. Growth.",
  heroHeadline: "Build better. Grow faster. Stand out.",
  coreBrandStatement:
    "Nerdvana is a global technology and creative agency crafting bold brands, digital experiences and powerful technology solutions through clarity, innovation and timeless craft. We help ambitious businesses build better, move faster and show the world who they are.",
  offices: [
    {
      name: "LAGOS",
      label: "LAGOS, NG",
      timezone: "Africa/Lagos",
      address: "14B Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
      phone: "+234 (1) 880-9214",
      whatsapp: "+23418809214",
    },
  ],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/company/nerdvana-global" },
    { name: "Instagram", url: "https://instagram.com/nerdvana.global" },
    { name: "X", url: "https://x.com/nerdvana_hq" },
    { name: "Facebook", url: "https://facebook.com/nerdvanaglobal" },
    { name: "TikTok", url: "https://tiktok.com/@nerdvanahq" },
    { name: "YouTube", url: "https://youtube.com/@nerdvanaglobal" },
  ],
  stats: {
    experienceYears: 10,
    projectsDelivered: 140,
    clientSatisfaction: "99.4%",
    uptimeSLA: "99.99%",
  },
};

export const whatNerdvanaDoes = {
  headline: "Technology + Creativity + Growth",
  descriptor:
    "We bring technical depth, creative execution and commercial growth together under one roof so your business moves faster without communication friction.",
  stages: [
    {
      label: "Imagine",
      description: "Market diagnosis, product ideation and creative narrative.",
    },
    {
      label: "Build",
      description:
        "Full-stack software engineering, scalable cloud and brand systems.",
    },
    {
      label: "Launch",
      description:
        "Production deployments, digital flagships and market rollouts.",
    },
    {
      label: "Automate",
      description:
        "AI workflows, CI/CD pipelines and infrastructure optimization.",
    },
    {
      label: "Market",
      description:
        "Strategic campaigns, SEO, paid performance and audience acquisition.",
    },
    {
      label: "Scale",
      description:
        "Conversion rate optimization, high-availability reliability and growth engines.",
    },
  ],
};

export const serviceDivisions: ServiceDivision[] = [
  {
    name: "Nerdvana Technologies",
    slug: "technologies",
    tagline: "Technology that moves businesses forward.",
    description:
      "Enterprise-grade software engineering, cloud architecture, platform resilience, and intelligent automation built to scale without compromise.",
    services: [
      {
        title: "Cloud & Infrastructure",
        description:
          "Cloud architecture, AWS, Azure, Google Cloud, automation, migration and cost optimization.",
        capabilities: [
          "Multi-Cloud Architecture (AWS, GCP, Azure)",
          "Cloud Cost Optimization & FinOps",
          "Zero-Downtime Infrastructure Migration",
          "Serverless & Microservices Design",
        ],
        deliverables: [
          "Terraform Infrastructure as Code",
          "Cloud Security & Compliance Blueprint",
          "Automated Failover Topology",
        ],
      },
      {
        title: "DevOps & Platform Engineering",
        description:
          "CI/CD, Kubernetes, Docker, IaC, Terraform, GitOps and continuous automation.",
        capabilities: [
          "Automated Deployment Pipelines (GitOps)",
          "Kubernetes Container Orchestration",
          "Ephemeral Developer Environments",
          "Policy as Code & Automated Testing",
        ],
        deliverables: [
          "Full CI/CD Pipeline Configuration",
          "Container Cluster Provisioning",
          "Release Engineering Handbook",
        ],
      },
      {
        title: "Software Engineering",
        description:
          "Web applications, backend systems, APIs, SaaS platforms and complex integrations.",
        capabilities: [
          "Next.js, TypeScript & React Architectures",
          "High-Throughput Node.js & Go Backends",
          "GraphQL & RESTful API Engineering",
          "Multi-Tenant SaaS Database Architecture",
        ],
        deliverables: [
          "Production-Ready GitHub Repository",
          "Automated Unit & E2E Test Suite",
          "Interactive API Documentation",
        ],
      },
      {
        title: "AI & Automation",
        description:
          "AI applications, AI infrastructure, deployment, business automation and custom integrations.",
        capabilities: [
          "Custom LLM Fine-Tuning & RAG Pipelines",
          "AI Agent Workflows for Enterprise",
          "Automated Data Extraction & Synthesis",
          "Model Serving & Edge Inference",
        ],
        deliverables: [
          "Deployed Vector DB & RAG Pipeline",
          "Intelligent Workflow Integrations",
          "AI Usage & Governance Framework",
        ],
      },
      {
        title: "Reliability & Security",
        description:
          "SRE, monitoring, observability, incident management, performance and infrastructure security.",
        capabilities: [
          "24/7 SRE Monitoring & Datadog/Grafana Observability",
          "Automated Alerting & Incident Runbooks",
          "Penetration Testing & Vulnerability Audits",
          "DDoS Mitigation & SOC2/ISO27001 Alignment",
        ],
        deliverables: [
          "SRE Observability Dashboard",
          "Incident Response Playbook",
          "Security Hardening Certification",
        ],
      },
    ],
  },
  {
    name: "Figures by Nerdvana",
    slug: "figures",
    tagline:
      "Brands, experiences and marketing that move people and businesses forward.",
    description:
      "World-class visual identities, high-conversion digital experiences, cinematic content, and data-backed performance marketing.",
    services: [
      {
        title: "Branding",
        description:
          "Brand strategy, identity, visual identity, guidelines, logo systems and creative direction.",
        capabilities: [
          "Core Positioning & Brand Narrative",
          "Dynamic Logo Systems & Typography",
          "Color Architecture & Brand Voice Playbooks",
          "Packaging & Spatial Touchpoints",
        ],
        deliverables: [
          "Comprehensive Digital Brand Bible",
          "Vector & Kinetic Master Asset Pack",
          "Commercial Typography Licenses",
        ],
      },
      {
        title: "UI/UX Design",
        description:
          "UX research, user flows, wireframes, interface design, design systems and product design.",
        capabilities: [
          "User Research & Quantitative Testing",
          "Interactive Wireframes & Prototypes",
          "Design Systems & Token Architecture (Figma)",
          "Accessible WCAG 2.1 AA Compliant Interfaces",
        ],
        deliverables: [
          "Production Figma Component Library",
          "Validated User Journey Blueprints",
          "Motion & Micro-Interaction Guidelines",
        ],
      },
      {
        title: "Web Design & Development",
        description:
          "Corporate sites, startup sites, landing pages, e-commerce, web apps and conversion-focused websites.",
        capabilities: [
          "Bespoke High-Conversion Web Flagships",
          "Headless E-Commerce (Shopify Plus / Next.js)",
          "Motion-Led Editorial Experiences (Lenis/GSAP)",
          "Sub-Second Page Load Optimization",
        ],
        deliverables: [
          "Production Next.js 16 Web Flagship",
          "Headless CMS Integration",
          "Lighthouse 95+ Core Web Vitals Guarantee",
        ],
      },
      {
        title: "Creative Production",
        description:
          "Motion graphics, digital assets, campaign creatives, marketing visuals, presentations and content design.",
        capabilities: [
          "3D Product Visualizations & Shaders",
          "High-Impact Motion Graphics & Video",
          "Investor Pitch Decks & Keynotes",
          "Omnichannel Social Visual Asset Systems",
        ],
        deliverables: [
          "4K Master Motion Deliverables",
          "Custom 3D Asset Renders",
          "Executive Pitch Presentation Suite",
        ],
      },
      {
        title: "Marketing & Growth",
        description:
          "Strategy, campaigns, paid advertising, social media, email, SEO, content, copywriting, lead generation, funnels, CRO and performance marketing.",
        capabilities: [
          "Full-Funnel Paid Acquisition (Meta, Google, LinkedIn)",
          "Technical SEO & Content Strategy",
          "Conversion Rate Optimization (CRO) & A/B Testing",
          "Automated Email Retention & Lifecycle Flows",
        ],
        deliverables: [
          "Omnichannel Growth Roadmap",
          "Custom Paid Ad Creative Suite",
          "Real-Time Attribution Analytics Dashboard",
        ],
      },
    ],
  },
];

export const curiousProblems: CuriousProblem[] = [
  {
    id: "curious-1",
    problem: "Your website looks good, but isn't converting?",
    solution: "Let's fix the experience.",
    division: "Figures by Nerdvana",
    capability: "UI/UX & Web Development",
    ctaText: "Fix Your Experience",
    targetHref: "/contacts?interest=web-conversion",
  },
  {
    id: "curious-2",
    problem: "Your brand doesn't reflect the quality of your business?",
    solution: "Let's build one that does.",
    division: "Figures by Nerdvana",
    capability: "Branding & Creative Direction",
    ctaText: "Elevate Your Brand",
    targetHref: "/contacts?interest=branding",
  },
  {
    id: "curious-3",
    problem: "Cloud costs getting out of control?",
    solution: "Let's make your infrastructure work smarter.",
    division: "Nerdvana Technologies",
    capability: "Cloud & Infrastructure FinOps",
    ctaText: "Optimize Cloud Costs",
    targetHref: "/contacts?interest=cloud-finops",
  },
  {
    id: "curious-4",
    problem: "Too much repetitive work?",
    solution: "Let's automate it.",
    division: "Nerdvana Technologies",
    capability: "AI & Intelligent Automation",
    ctaText: "Automate Workflows",
    targetHref: "/contacts?interest=ai-automation",
  },
  {
    id: "curious-5",
    problem: "Have an idea but don't know how to turn it into a product?",
    solution: "Let's build it.",
    division: "Nerdvana Technologies",
    capability: "Software Engineering & MVP Sprint",
    ctaText: "Build Your Product",
    targetHref: "/contacts?interest=software-engineering",
  },
  {
    id: "curious-6",
    problem: "Struggling to turn attention into customers?",
    solution: "Let's build a growth system.",
    division: "Figures by Nerdvana",
    capability: "Marketing & Growth Engine",
    ctaText: "Build Growth System",
    targetHref: "/contacts?interest=growth-marketing",
  },
];

export const whyNerdvana = [
  {
    title: "Technology + Creativity",
    subtitle: "One Unified House",
    description:
      "Deep software engineering and breathtaking creative direction living under one roof. No compromises, no lost context.",
  },
  {
    title: "Strategy + Execution",
    subtitle: "We Don't Just Advise; We Ship",
    description:
      "We write production code, design living token systems, and manage high-availability infrastructure. Strategy is verified by execution.",
  },
  {
    title: "Built Around Your Business",
    subtitle: "Commercial Truth First",
    description:
      "We diagnose commercial bottlenecks before writing code or designing glyphs, ensuring every investment moves key business metrics.",
  },
  {
    title: "One Connected Partner",
    subtitle: "Zero Provider Fragmentation",
    description:
      "Eliminate the finger-pointing between your marketing agency and tech vendor. Nerdvana synchronizes brand, code, and growth.",
  },
  {
    title: "Built to Scale",
    subtitle: "Future-Proof Architecture",
    description:
      "From your first thousand customers to millions in ARR, our cloud infrastructure and design systems are engineered to scale effortlessly.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Understand the business, audience, goals and challenges.",
    description:
      "We dissect your commercial landscape, target personas, technical debt, and competitive pressures to establish an undeniable baseline.",
    deliverables: [
      "Diagnostic Audit",
      "Competitor Matrix",
      "Target Audience Models",
      "Executive Alignment Brief",
    ],
  },
  {
    number: "02",
    title: "Define",
    tagline: "Identify the core problem and opportunities.",
    description:
      "We narrow the scope to high-leverage opportunities, defining key technical requirements and narrative positioning.",
    deliverables: [
      "Product Requirements Document",
      "Technical Scope of Work",
      "Creative North Star",
      "Success Metrics",
    ],
  },
  {
    number: "03",
    title: "Strategize",
    tagline: "Develop the strategy, roadmap and approach.",
    description:
      "We architect cloud topology, map out wireframes, and outline multi-sprint milestones with transparent delivery dates.",
    deliverables: [
      "Architecture Blueprint",
      "Design System Strategy",
      "Sprint Roadmap",
      "Risk Mitigation Plan",
    ],
  },
  {
    number: "04",
    title: "Create",
    tagline: "Design, build and execute.",
    description:
      "Surgical execution begins. We build production TypeScript code, configure IaC, design interactive interfaces, and model 3D assets.",
    deliverables: [
      "Next.js Codebase",
      "Figma Design System",
      "Cloud Infrastructure (Terraform)",
      "Brand Asset Suite",
    ],
  },
  {
    number: "05",
    title: "Launch",
    tagline: "Put the work into the world.",
    description:
      "Rigorous end-to-end testing, zero-downtime deployment, SEO verification, and synchronized public go-to-market rollout.",
    deliverables: [
      "Production Edge Deployment",
      "SEO & Meta Audits",
      "Staff CMS Training",
      "Go-To-Market Push",
    ],
  },
  {
    number: "06",
    title: "Grow",
    tagline: "Measure, optimize and improve.",
    description:
      "Continuous observability, conversion rate experiments, marketing iterations, and ongoing platform reliability engineering.",
    deliverables: [
      "Real-Time Analytics Dashboard",
      "A/B Testing Funnels",
      "SRE Monitoring",
      "Monthly Growth Sync",
    ],
  },
];

// TODO: Restore only after every package, scope, and price is verified.
/* 
export const packages: PackageItem[] = [
  {
    id: "pkg-branding",
    name: "Brand Launchpad",
    category: "Branding",
    shortDescription:
      "Complete brand positioning, visual identity, and token system for startups.",
    idealFor:
      "Founders establishing their first institutional brand presence before market launch.",
    whatsIncluded: [
      "Brand Positioning & Narrative Architecture",
      "Dynamic Mark, Monogram & Vector System",
      "Typography Hierarchy & Color Guidelines",
      "Living Digital Brand Guidelines",
      "Social Media & Presentation Templates",
      "3 Weeks Rapid Sprint",
    ],
    startingPrice: "$6,500",
    optionalAddons: [
      "Packaging Guidelines",
      "Custom Font Modifications",
      "Pitch Deck Narrative",
    ],
  },
  {
    id: "pkg-web",
    name: "Flagship Web & UX",
    category: "Website / Digital Presence",
    shortDescription:
      "Bespoke, motion-led digital flagship engineered for conversion and speed.",
    idealFor:
      "Scaling companies replacing outdated templates with an award-winning digital experience.",
    whatsIncluded: [
      "UX Research & High-Fidelity Wireframes",
      "Bespoke Next.js 16 & Tailwind Engineering",
      "Fluid Lenis Motion & Interactive Choreography",
      "Headless CMS Integration (Sanity / MDX)",
      "Lighthouse 95+ Core Web Vitals Optimization",
      "Complete Mobile & Tablet Responsiveness",
      "5 Weeks Sprint to Production",
    ],
    startingPrice: "$12,500",
    optionalAddons: [
      "Custom 3D / WebGL Assets",
      "Multi-Language Localization",
      "Advanced Search & Filters",
    ],
    featured: true,
  },
  {
    id: "pkg-tech",
    name: "Cloud & DevOps Scale",
    category: "Technology",
    shortDescription:
      "Automated cloud infrastructure, CI/CD platform, and SRE resilience.",
    idealFor:
      "Engineering teams suffering from manual deployments, slow builds, or cloud cost spikes.",
    whatsIncluded: [
      "Terraform Infrastructure as Code (AWS / GCP)",
      "Automated GitOps CI/CD Deployment Pipelines",
      "Kubernetes Cluster Setup & Ingress Rules",
      "Cloud FinOps Cost Audit & Optimization",
      "Datadog / Grafana SRE Observability Stack",
      "4 Weeks Dedicated DevOps Sprint",
    ],
    startingPrice: "$9,500",
    optionalAddons: [
      "24/7 SRE On-Call SLA",
      "SOC2 Compliance Hardening",
      "Database Auto-Sharding",
    ],
  },
  {
    id: "pkg-growth",
    name: "Growth Engine & CRO",
    category: "Marketing & Growth",
    shortDescription:
      "Full-funnel customer acquisition, technical SEO, and conversion optimization.",
    idealFor:
      "Businesses ready to turn traffic into qualified revenue at scalable payback periods.",
    whatsIncluded: [
      "Technical SEO & Content Hub Architecture",
      "Paid Performance Ad Creative & Campaign Setup",
      "Continuous Conversion Rate (CRO) A/B Testing",
      "Automated Retention & Lifecycle Email Flows",
      "Real-Time Multi-Touch Attribution Dashboard",
      "Monthly Growth Retainer Cadence",
    ],
    startingPrice: "$8,000/mo",
    optionalAddons: [
      "Influencer Partnership Management",
      "B2B Account-Based Marketing",
      "Podcast Production",
    ],
  },
  {
    id: "pkg-custom",
    name: "Enterprise Synergy",
    category: "Custom Solutions",
    shortDescription:
      "Dedicated cross-disciplinary strike team combining Technology + Figures.",
    idealFor:
      "Enterprises needing comprehensive digital transformation with dedicated squads.",
    whatsIncluded: [
      "Integrated Tech Squad (Tech Lead, Senior Engineers)",
      "Integrated Creative Squad (Director, Designers)",
      "Custom Software Platform & Flagship Web System",
      "Cloud Infrastructure, DevOps & 99.99% SRE SLA",
      "Ongoing Performance Marketing & Optimization",
      "Executive Direct Slack Channel & Weekly Sprints",
    ],
    startingPrice: "Custom Quoted",
    optionalAddons: [
      "Onsite Executive Workshops",
      "Dedicated Cloud Security Officer",
    ],
  },
];
*/

export const packages: PackageItem[] = [];

export const faqCategories: FAQCategoryItem[] = [
  {
    category: "About Nerdvana",
    question: "What does Nerdvana do?",
    answer:
      "Nerdvana is a global technology, creative and digital growth agency. We combine deep technology capabilities (cloud, DevOps, software, AI) with high-end creative execution (branding, UI/UX, web design) and performance marketing to help ambitious businesses build, grow, and stand out.",
  },
  {
    category: "About Nerdvana",
    question: "Who do you work with?",
    answer:
      "We partner with startups establishing their initial presence, small and medium businesses modernizing their operations, growth-stage scaleups expanding infrastructure, and forward-thinking organizations requiring specialized cross-disciplinary expertise.",
  },
  {
    category: "Services",
    question: "What technology and branding services do you provide?",
    answer:
      "Under Nerdvana Technologies, we engineer Cloud & Infrastructure, DevOps & Platform Engineering, Software Engineering, AI & Automation, and Reliability & Security. Under Figures by Nerdvana, we deliver Branding, UI/UX Design, Web Design & Development, Creative Production, and Marketing & Growth.",
  },
  {
    category: "Services",
    question: "Can I combine technology and creative services?",
    answer:
      "Absolutely. In fact, that is Nerdvana's greatest superpower. By uniting engineering and creative execution under one connected partner, we eliminate communication gaps, reduce provider friction, and ship cohesive digital products in half the time.",
  },
  {
    category: "Projects",
    question: "How does a project begin?",
    answer:
      "Every engagement starts with Phase 01: Discover. We schedule an alignment deep-dive to understand your business objectives, technical constraints, and growth targets. We then deliver a clear Scope of Work, sprint timeline, and architecture plan before production begins.",
  },
  {
    category: "Projects",
    question: "How long does a project take?",
    answer:
      "Focused brand identity or web development sprints typically take 3 to 5 weeks. Comprehensive software platforms, custom 3D web flagships, and enterprise cloud migrations range between 6 to 12 weeks with weekly demo milestones.",
  },
  {
    category: "Packages",
    question: "Can packages be customized?",
    answer:
      "Yes. While our pre-packaged offerings give transparent starting scopes, we frequently tailor custom scopes and add-on modules to match your exact timeline and commercial requirements.",
  },
  {
    category: "Working With Nerdvana",
    question: "How do I get started?",
    answer:
      "Click 'Let's Talk' or 'Get Started' to submit your project details. Our principals will review your brief and schedule an exploratory strategy call within 24 hours.",
  },
];

// TODO: Restore only after verified project names and approved images exist.
/*
export const heroProjects = [
  {
    id: "hp-1",
    title: "Aura Intelligence",
    division: "Nerdvana Technologies",
    category: "AI & Platform Engineering",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    slug: "aura-intelligence",
    offset: "0px",
  },
  {
    id: "hp-2",
    title: "Vesper Spatial Audio",
    division: "Figures by Nerdvana",
    category: "UI/UX & Web Development",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    slug: "vesper-audio",
    offset: "40px",
  },
  {
    id: "hp-3",
    title: "Nerve Protocol",
    division: "Nerdvana Technologies",
    category: "Cloud, DevOps & Security",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
    slug: "nerve-protocol",
    offset: "-20px",
  },
  {
    id: "hp-4",
    title: "Kalon Living",
    division: "Figures by Nerdvana",
    category: "Branding & E-Commerce Flagship",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    slug: "kalon-living",
    offset: "20px",
  },
];
*/

export const heroProjects = [];

/*
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Aura Intelligence",
    slug: "aura-intelligence",
    client: "Aura Corp",
    industry: "Humanoid Robotics & AI",
    year: "2025",
    division: "Nerdvana Technologies",
    category: "Technology",
    services: [
      "AI & Automation",
      "Cloud & Infrastructure",
      "Software Engineering",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Cloud-native edge inference platform and interactive control portal for humanoid robotics.",
    challenge:
      "Aura required a zero-latency telemetry pipeline to coordinate autonomous sensory inputs across distributed industrial robotics fleets.",
    approach:
      "Nerdvana Technologies engineered a microservices Kubernetes architecture with WebRTC data channels, sub-10ms edge processing, and automated failover.",
    results:
      "Aura onboarded 3 Fortune 500 manufacturing pilots and closed an oversubscribed $42M funding round with 99.999% uptime.",
    metrics: [
      { label: "Series B Raised", value: "$42M" },
      { label: "Edge Nodes", value: "1,200+" },
    ],
    technologyStack: [
      "Kubernetes",
      "Go",
      "Terraform",
      "WebSockets",
      "AWS IoT Core",
    ],
    creativeStrategy:
      "High-contrast technical visualization giving operators instant glanceable clarity.",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Nerdvana delivered the engineering infrastructure that made our robotics technology viable for industrial deployment.",
      author: "Elena Rostova",
      role: "CEO, Aura Intelligence",
    },
    featured: true,
    order: 1,
  },
  {
    id: "proj-2",
    title: "Vesper Spatial Audio",
    slug: "vesper-audio",
    client: "Vesper Audio",
    industry: "Consumer Electronics & Audio",
    year: "2024",
    division: "Figures by Nerdvana",
    category: "Web",
    services: [
      "UI/UX Design",
      "Web Design & Development",
      "Creative Production",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Immersive WebGL soundscape visualizer and high-conversion e-commerce flagship.",
    challenge:
      "Vesper developed breakthrough acoustic hardware but lacked a digital experience that demonstrated spatial sound visually.",
    approach:
      "Figures by Nerdvana designed a bespoke WebGL sound wave visualizer responding dynamically to cursor movement, paired with a sub-second checkout experience.",
    results:
      "Conversion increased by 142% within 60 days of launch, achieving an Awwwards Site of the Day.",
    metrics: [
      { label: "Conversion Lift", value: "+142%" },
      { label: "Session Duration", value: "4m 45s" },
      { label: "AOV", value: "$320" },
      { label: "Award", value: "Awwwards SOTD" },
    ],
    technologyStack: [
      "Next.js 16",
      "Three.js / WebGL",
      "Tailwind CSS",
      "Shopify Headless",
    ],
    creativeStrategy:
      "Dark, tactile Swiss aesthetic with visceral acoustic vibrations.",
    gallery: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "The digital flagship Figures built for us turned casual website visitors into die-hard audiophile brand advocates.",
      author: "Julian Meier",
      role: "Head of Product, Vesper",
    },
    featured: true,
    order: 2,
  },
  {
    id: "proj-3",
    title: "Nerve Protocol",
    slug: "nerve-protocol",
    client: "Nerve Foundation",
    industry: "Fintech & Web3 Infrastructure",
    year: "2024",
    division: "Nerdvana Technologies",
    category: "Technology",
    services: [
      "Cloud & Infrastructure",
      "Reliability & Security",
      "Software Engineering",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Institutional-grade validator infrastructure, SRE observability, and developer SDK documentation.",
    challenge:
      "Enterprise financial partners required guaranteed 99.99% network uptime and verified security posture.",
    approach:
      "Nerdvana Technologies implemented automated multi-region failover, automated penetration testing pipelines, and real-time observability.",
    results:
      "Over $1.8B in total value secured across 400+ institutional validation nodes.",
    metrics: [
      { label: "Value Locked", value: "$1.8B" },
      { label: "Network Uptime", value: "99.99%" },
      { label: "Validator Nodes", value: "400+" },
      { label: "Security Score", value: "100/100" },
    ],
    technologyStack: [
      "Kubernetes",
      "Terraform",
      "Rust",
      "Datadog",
      "Cloudflare Magic Transit",
    ],
    creativeStrategy: "Mathematical clarity with zero fluff.",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Their infrastructure engineering is rock-solid. They are the only partner we trust with our mission-critical deployments.",
      author: "Dr. Kemi Adeleke",
      role: "Founding Researcher, Nerve",
    },
    featured: true,
    order: 3,
  },
  {
    id: "proj-4",
    title: "Kalon Living",
    slug: "kalon-living",
    client: "Kalon Studios",
    industry: "Luxury Architecture & Interiors",
    year: "2024",
    division: "Figures by Nerdvana",
    category: "Branding",
    services: ["Branding", "UI/UX", "Marketing & Growth"],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85",
    summary:
      "Complete rebrand and global growth marketing funnel for Scandinavian architectural furnishings.",
    challenge:
      "High-ticket bespoke furniture was struggling with long digital sales cycles and unclear brand identity.",
    approach:
      "Figures by Nerdvana designed a warm, editorial visual identity and engineered an interactive spatial room visualizer paired with targeted paid campaigns.",
    results:
      "Global sales surged 215%, with customer acquisition cost decreasing by 38%.",
    metrics: [
      { label: "Revenue Surge", value: "+215%" },
      { label: "CAC Reduction", value: "-38%" },
      { label: "Avg Order Value", value: "$2,950" },
      { label: "Lighthouse", value: "99/100" },
    ],
    technologyStack: [
      "Next.js 16",
      "Tailwind CSS",
      "Figma Design System",
      "Meta Ads API",
    ],
    creativeStrategy:
      "Warm editorial minimalism highlighting tactile natural timber and stone.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    ],
    testimonial: {
      quote:
        "Figures by Nerdvana completely transformed our commercial trajectory. The new brand and web experience changed how our market views us.",
      author: "Astrid Lindholm",
      role: "Founder, Kalon Living",
    },
    featured: true,
    order: 4,
  },
];
*/

export const projects: Project[] = [];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "Cloud & DevOps Architecture: Scaling Infrastructure without Bloat",
    slug: "scaling-cloud-infrastructure-without-bloat",
    subtitle:
      "How Nerdvana Technologies designs GitOps pipelines, multi-cloud topologies, and Kubernetes clusters that cut operational expenditure by 40%.",
    date: "OCTOBER 2026",
    readTime: "6 MIN READ",
    cover:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Tariq Adele",
      role: "Head of Technology",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
    },
    tags: ["Cloud", "DevOps", "Infrastructure"],
    content: `
### Beyond Infrastructure Sprawl

Engineering teams frequently scale compute resources as a blunt instrument to solve throughput bottlenecks, resulting in runaway AWS invoices and fragile deployment states.

At Nerdvana Technologies, our philosophy centers on surgical platform engineering: Terraform Infrastructure as Code, automated ephemeral testing environments, and strict FinOps telemetry.

### The Three Laws of Resilient Cloud Scaling

1. **GitOps as Single Source of Truth:** No manual console clicks. Every container ingress rule, VPC peering connection, and IAM policy is version-controlled and verified via automated CI pipelines.
2. **Container Density & Auto-Scaling:** Right-size Kubernetes pods based on observed P99 memory footprints rather than arbitrary resource requests.
3. **Multi-Region Observability:** Establish centralized distributed tracing with Datadog and OpenTelemetry before introducing complex microservices.
    `,
    featured: true,
  },
  {
    id: "post-2",
    title:
      "Why High-Performance Digital Flagships Out-Convert Generic SaaS Templates",
    slug: "why-digital-flagships-out-convert",
    subtitle:
      "Figures by Nerdvana breaks down the intersection of sub-second load times, tactile motion design, and commercial conversion.",
    date: "OCTOBER 2026",
    readTime: "5 MIN READ",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Darius Sterling",
      role: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85",
    },
    tags: ["Branding", "UI/UX", "Web"],
    content: `
### The Homogeny Problem

Look across the modern B2B tech landscape: everyone uses the same Bento grid templates, the same sterile illustrations, and the same interchangeable corporate copy.

When every business looks identical, buyers default to comparing price.

A bespoke digital flagship engineered by Figures by Nerdvana establishes instant credibility, commands pricing authority, and guides visitors through intuitive, problem-led conversion pathways.
    `,
    featured: true,
  },
];

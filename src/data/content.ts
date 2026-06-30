export const meta = {
  name: "Farah Dawoud",
  firstName: "Farah",
  title: "Senior Mobile Developer",
  tagline: "Senior Mobile Developer crafting high-performance ecosystems for the next generation of digital products.",
  email: "Farah.dawoudd@gmail.com",
  resume: "/Farah_Dawoud_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/farahyasserr/",
  github: "https://github.com/farahyasserr",
  location: "San Francisco, CA",
};

export const domains = [
  { label: "FinTech", icon: "💳" },
  { label: "E-commerce", icon: "🛍️" },
  { label: "Health & Fitness", icon: "🏋️" },
  { label: "Social Platforms", icon: "💬" },
  { label: "EdTech / Video", icon: "🎬" },
  { label: "Maps & Location", icon: "📍" },
];

export const skills = [
  "React Native",
  "Native Modules (iOS & Android)",
  "TypeScript",
  "Redux / Zustand",
  "React Navigation",
  "REST APIs & GraphQL",
  "Video Streaming",
  "GPS & Maps Integration",
  "Screen Recording & Annotation",
  "App Store & Play Store Deployment",
  "Performance Optimisation",
  "CI/CD",
];

export type Project = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  appStoreUrl?: string;
  websiteUrl?: string;
  logo?: string;
  builtFromScratch: boolean;
};

export const projects: Project[] = [
  {
    name: "ProShop",
    category: "Golf / Sports",
    description: "All-in-one golf coaching platform with structured lesson plans, GPS course mapping across 40k+ courses, and video content. Built an iOS ReplayKit + Android MediaProjection bridge for in-app screen recording with a JS annotation layer.",
    highlights: ["ReplayKit + MediaProjection bridge", "GPS & Maps", "JS annotation layer", "Social community", "Skill benchmarking"],
    appStoreUrl: "https://apps.apple.com/eg/app/proshop-app/id6673893799",
    logo: "/projects/proshop.png",
    builtFromScratch: true,
  },
  {
    name: "Voxa",
    category: "Golf / EdTech",
    description: "Golf learning app focused on video lessons and expert articles, giving golfers on-demand coaching content wherever they are.",
    highlights: ["Video player", "Articles CMS", "Personalised feed"],
    logo: "/projects/voxa.png",
    builtFromScratch: true,
  },
  {
    name: "Plate",
    category: "Social Platform",
    description: "A content-driven social platform built to connect communities around shared interests with a real-time feed and rich media support.",
    highlights: ["Real-time feed", "Rich media", "Social graph"],
    logo: "/projects/plate.png",
    builtFromScratch: true,
  },
  {
    name: "Homzmart",
    category: "E-commerce",
    description: "Egypt's leading online furniture & home decor marketplace, serving millions of users with a seamless shopping experience.",
    highlights: ["Large-scale e-commerce", "Complex product catalogue", "Payment integrations"],
    appStoreUrl: "https://apps.apple.com/eg/app/homzmart-all-things-home/id1533578928",
    logo: "/projects/homzmart.png",
    builtFromScratch: false,
  },
  {
    name: "Qashio",
    category: "FinTech",
    description: "Spend management solution for MENA businesses — issue cards, set budgets, approve expenses, and track transactions in real time.",
    highlights: ["Multi-level approvals", "Virtual & physical cards", "ERP integrations", "Real-time analytics"],
    appStoreUrl: "https://apps.apple.com/eg/app/qashio/id1609565376",
    logo: "/projects/qashio.png",
    builtFromScratch: false,
  },
  {
    name: "JB",
    category: "Banking / FinTech",
    description: "Saudi fintech app offering personalised financial solutions — car financing, cash loans, and post-sale services, all managed in a single mobile experience.",
    highlights: ["Car & cash financing", "Loan management", "In-app services", "Secure flows"],
    websiteUrl: "https://j-b.com.sa/en/personal-finance/",
    logo: "/projects/jb.png",
    builtFromScratch: false,
  },
  {
    name: "Get It Done",
    category: "Health & Fitness",
    description: "Personalised fitness app by UK expert Bradley Simmonds — workout plans, 100+ on-demand video classes, nutrition tracking, and progress tools.",
    highlights: ["Video streaming", "Personalised plans", "Macro & recipe tracking", "Progress photos"],
    appStoreUrl: "https://apps.apple.com/eg/app/get-it-done-fitness/id6476095795",
    logo: "/projects/gid.png",
    builtFromScratch: false,
  },
  {
    name: "Ellevate",
    category: "Health & Fitness",
    description: "Strength, conditioning & nutrition app for runners and fitness enthusiasts — structured programs without extremes.",
    highlights: ["Strength programs", "Nutrition guidance", "Subscription management"],
    appStoreUrl: "https://apps.apple.com/eg/app/ellevate-app/id6755840746",
    logo: "/projects/ellevate.png",
    builtFromScratch: false,
  },
  {
    name: "Fuze",
    category: "Health & Fitness",
    description: "Fitness coaching app delivering video-based workout content and personalised training programmes.",
    highlights: ["Video workouts", "Personalised coaching"],
    logo: "/projects/fuze.png",
    builtFromScratch: false,
  },
  {
    name: "Grow Girl",
    category: "Health & Fitness",
    description: "Women-focused fitness app with tailored workout plans and wellness content to support healthy lifestyle goals.",
    highlights: ["Women's wellness", "Tailored plans", "Community features"],
    logo: "/projects/growgirl.png",
    builtFromScratch: false,
  },
];

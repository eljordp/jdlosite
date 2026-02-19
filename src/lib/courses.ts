export type Module = {
  num: string;
  title: string;
  lessons: string[];
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  level: string;
  description: string;
  outcomes: string[];
  modules: Module[];
};

export const courses: Course[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tagline: "Build the systems that run businesses.",
    price: "$2,500",
    duration: "6 weeks",
    level: "Beginner → Advanced",
    description:
      "This is what I run my companies on. You'll go from understanding AI to building real automated systems — agents, workflows, integrations — the kind that save 20+ hours a week.",
    outcomes: [
      "Build AI agents that work autonomously",
      "Automate repetitive workflows end-to-end",
      "Connect AI to your existing tools and data",
      "Deploy systems your team can actually use",
    ],
    modules: [
      {
        num: "01",
        title: "AI Fundamentals",
        lessons: [
          "How LLMs actually work (no fluff)",
          "The model landscape: GPT, Claude, Gemini, open-source",
          "Tokens, context windows, and why it matters",
          "Choosing the right model for the right job",
        ],
      },
      {
        num: "02",
        title: "Prompt Engineering",
        lessons: [
          "The anatomy of a great prompt",
          "System prompts, roles, and context injection",
          "Chain-of-thought and reasoning techniques",
          "Building reusable prompt libraries",
        ],
      },
      {
        num: "03",
        title: "APIs & Integrations",
        lessons: [
          "Calling AI APIs without a CS degree",
          "Connecting AI to Airtable, Notion, Sheets, Slack",
          "Webhooks and real-time triggers",
          "Error handling and reliability",
        ],
      },
      {
        num: "04",
        title: "Automation Workflows",
        lessons: [
          "Make, Zapier, n8n — when to use what",
          "Building multi-step automated pipelines",
          "AI-powered email, CRM, and content workflows",
          "Testing and maintaining automations at scale",
        ],
      },
      {
        num: "05",
        title: "AI Agents",
        lessons: [
          "What agents actually are and how to build them",
          "Tool use: giving agents the ability to act",
          "Multi-agent systems and orchestration",
          "Real business agent builds: research, outreach, ops",
        ],
      },
      {
        num: "06",
        title: "Deploy & Operate",
        lessons: [
          "Putting systems into production",
          "Monitoring, logging, and alerting",
          "Handing off AI systems to a team",
          "Iterating and improving over time",
        ],
      },
    ],
  },
  {
    slug: "sales-systems",
    title: "Sales Systems",
    tagline: "The playbook I use to close. Systematized.",
    price: "$1,500",
    duration: "4 weeks",
    level: "Beginner → Intermediate",
    description:
      "Not theory from a book. These are the exact scripts, frameworks, and systems I've built to close deals consistently at scale — now AI-accelerated.",
    outcomes: [
      "Build a repeatable outbound system",
      "Close deals with a proven framework",
      "Set up a CRM that actually helps you sell",
      "Use AI to 10x your prospecting speed",
    ],
    modules: [
      {
        num: "01",
        title: "The Sales Foundation",
        lessons: [
          "The mindset that separates closers from order-takers",
          "Understanding buyer psychology",
          "Your offer: positioning to win before the call",
          "Building a personal sales identity",
        ],
      },
      {
        num: "02",
        title: "Prospecting & Lead Gen",
        lessons: [
          "Defining your exact ideal customer profile",
          "Building targeted lead lists at scale",
          "AI-powered research on prospects",
          "Warm vs cold — when to use what",
        ],
      },
      {
        num: "03",
        title: "Cold Outreach That Works",
        lessons: [
          "Cold email frameworks that get replies",
          "Cold DM strategy for Instagram and LinkedIn",
          "AI-personalized outreach at volume",
          "Follow-up sequences that don't annoy",
        ],
      },
      {
        num: "04",
        title: "The Sales Call",
        lessons: [
          "Discovery questions that open people up",
          "Presenting your offer without pitching",
          "Handling objections: price, timing, trust",
          "The close — asking for the sale without being weird",
        ],
      },
      {
        num: "05",
        title: "CRM & Pipeline",
        lessons: [
          "Setting up a CRM you'll actually use",
          "Pipeline stages and deal management",
          "Automating follow-up with AI",
          "Metrics: what to track and why",
        ],
      },
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    tagline: "Get what you want from AI. Every time.",
    price: "$800",
    duration: "2 weeks",
    level: "All Levels",
    description:
      "99% of people use AI at 10% of its capability. Prompt engineering is the skill that unlocks the rest. Learn the techniques I use daily to get elite output from any model.",
    outcomes: [
      "Write prompts that consistently produce great output",
      "Build system prompts for any use case",
      "Use advanced reasoning techniques",
      "Create prompt libraries your whole team can use",
    ],
    modules: [
      {
        num: "01",
        title: "How Models Think",
        lessons: [
          "What happens when you send a prompt",
          "Why AI fails and how to fix it",
          "Temperature, top-p, and generation settings",
          "Model differences: GPT vs Claude vs Gemini",
        ],
      },
      {
        num: "02",
        title: "Core Techniques",
        lessons: [
          "Role prompting and persona assignment",
          "Few-shot examples and in-context learning",
          "Chain-of-thought and step-by-step reasoning",
          "Output formatting: JSON, markdown, structured data",
        ],
      },
      {
        num: "03",
        title: "Advanced Patterns",
        lessons: [
          "System prompts that shape behavior long-term",
          "Prompt chaining and multi-step workflows",
          "Self-critique and iterative refinement loops",
          "Retrieval-augmented prompting (RAG basics)",
        ],
      },
      {
        num: "04",
        title: "Applied Prompting",
        lessons: [
          "Prompting for code: debugging, building, reviewing",
          "Prompting for content: writing, editing, repurposing",
          "Prompting for research and analysis",
          "Building and organizing prompt libraries",
        ],
      },
    ],
  },
  {
    slug: "content-brand",
    title: "Content & Brand",
    tagline: "Build a brand that makes money while you sleep.",
    price: "$1,200",
    duration: "4 weeks",
    level: "Beginner → Intermediate",
    description:
      "Content is the highest-leverage thing most people aren't doing. Learn how to build a personal brand with a production system so efficient it practically runs itself — all AI-accelerated.",
    outcomes: [
      "Develop a clear brand identity and voice",
      "Build a content production system using AI",
      "Grow across platforms with a distribution strategy",
      "Turn content into clients and revenue",
    ],
    modules: [
      {
        num: "01",
        title: "Brand Identity",
        lessons: [
          "Defining your positioning (what you stand for)",
          "Finding your voice and tone",
          "Audience clarity: who you're talking to and why",
          "The content pillars that drive your brand",
        ],
      },
      {
        num: "02",
        title: "Content Strategy",
        lessons: [
          "The content types that actually convert",
          "Building a content calendar without burning out",
          "Repurposing: one idea, ten pieces of content",
          "AI-assisted ideation and research",
        ],
      },
      {
        num: "03",
        title: "Production System",
        lessons: [
          "Short-form video: filming, editing, hooks",
          "Written content: threads, carousels, newsletters",
          "AI tools for script writing and captioning",
          "Batch production: a week of content in one day",
        ],
      },
      {
        num: "04",
        title: "Distribution & Growth",
        lessons: [
          "Platform-specific growth strategy (IG, X, LinkedIn, TikTok)",
          "Posting cadence and timing",
          "Engagement loops that grow your audience",
          "Converting followers into buyers",
        ],
      },
    ],
  },
  {
    slug: "team-operations",
    title: "Team & Operations",
    tagline: "Build a team. Build systems. Scale without breaking.",
    price: "$2,000",
    duration: "5 weeks",
    level: "Intermediate → Advanced",
    description:
      "Scaling a business is about building systems that work without you. I've built teams from scratch, written the SOPs, made the management mistakes — so you don't have to.",
    outcomes: [
      "Hire the right people using a repeatable process",
      "Build SOPs and documentation that scale",
      "Manage performance without micromanaging",
      "Use AI to automate operations and reporting",
    ],
    modules: [
      {
        num: "01",
        title: "Hiring Right",
        lessons: [
          "Writing job descriptions that attract A-players",
          "Where to find talent (and where not to)",
          "Screening, interviews, and testing candidates",
          "Making the offer and onboarding fast",
        ],
      },
      {
        num: "02",
        title: "Systems & SOPs",
        lessons: [
          "Documenting your processes without wasting time",
          "Building SOPs people actually follow",
          "Tool stack: Notion, Loom, Slack, Linear",
          "AI-generated documentation and updates",
        ],
      },
      {
        num: "03",
        title: "Management",
        lessons: [
          "Running 1-on-1s that matter",
          "Setting goals and tracking performance (OKRs, KPIs)",
          "Giving feedback that changes behavior",
          "Dealing with underperformance and exits",
        ],
      },
      {
        num: "04",
        title: "Operations at Scale",
        lessons: [
          "Building dashboards for real-time visibility",
          "Automating reporting and status updates",
          "Identifying bottlenecks before they break you",
          "Delegating everything except the things only you can do",
        ],
      },
      {
        num: "05",
        title: "AI-Powered Ops",
        lessons: [
          "AI for scheduling, coordination, and admin",
          "Automating KPI tracking and reporting",
          "AI tools for hiring and HR workflows",
          "Building the ops stack of the future",
        ],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return courses.map((c) => c.slug);
}

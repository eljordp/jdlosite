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
  amount: number; // price in cents for Stripe
  duration: string;
  level: string;
  description: string;
  outcomes: string[];
  modules: Module[];
  gated?: boolean; // false = no prerequisite course required (default: true)
};

export const courses: Course[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    tagline: "Build with Claude. Automate everything.",
    price: "$297",
    amount: 29700,
    duration: "6 weeks",
    level: "Beginner → Advanced",
    description:
      "This entire site, every course, every system — built with Claude. You'll learn exactly how I use Claude to run businesses, automate operations, and build things that used to take teams of developers.",
    outcomes: [
      "Use Claude to build real systems from scratch",
      "Automate repetitive workflows end-to-end with AI",
      "Build Claude-powered agents that work autonomously",
      "Deploy AI systems your team can actually use",
    ],
    modules: [
      {
        num: "01",
        title: "Claude Fundamentals",
        lessons: [
          "How Claude works (and why it's different)",
          "Claude's capabilities: code, reasoning, vision, 200K context",
          "Tokens, context windows, and how to use them",
          "Claude models: Opus, Sonnet, Haiku — when to use what",
        ],
      },
      {
        num: "02",
        title: "Prompting Claude",
        lessons: [
          "The anatomy of a great Claude prompt",
          "System prompts, roles, and context injection",
          "Extended thinking and chain-of-thought",
          "Building reusable prompt libraries",
        ],
      },
      {
        num: "03",
        title: "Claude API & Integrations",
        lessons: [
          "Calling the Claude API (Messages API, tool use)",
          "Connecting Claude to Airtable, Notion, Sheets, Slack",
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
          "Claude-powered email, CRM, and content workflows",
          "Testing and maintaining automations at scale",
        ],
      },
      {
        num: "05",
        title: "Claude Agents",
        lessons: [
          "What agents are and how to build them with Claude",
          "Tool use: giving Claude the ability to act",
          "Multi-agent systems and orchestration",
          "Real business agent builds: research, outreach, ops",
        ],
      },
      {
        num: "06",
        title: "Deploy & Operate",
        lessons: [
          "Putting Claude systems into production",
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
    price: "$147",
    amount: 14700,
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
    tagline: "Get what you want from Claude. Every time.",
    price: "$67",
    amount: 6700,
    duration: "2 weeks",
    level: "All Levels",
    description:
      "99% of people use Claude at 10% of its capability. Prompt engineering is the skill that unlocks the rest. Learn the techniques I use daily to get elite output — every technique taught through Claude.",
    outcomes: [
      "Write Claude prompts that consistently produce great output",
      "Build system prompts for any use case",
      "Use extended thinking and advanced reasoning",
      "Create prompt libraries your whole team can use",
    ],
    modules: [
      {
        num: "01",
        title: "How Claude Thinks",
        lessons: [
          "What happens when you send a prompt",
          "Why Claude fails and how to fix it",
          "Temperature, top-p, and generation settings",
          "Opus vs Sonnet vs Haiku: choosing the right model",
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
    price: "$97",
    amount: 9700,
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
    price: "$197",
    amount: 19700,
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
  {
    slug: "personal-growth",
    title: "Personal Growth & Discipline",
    tagline: "The inner work that makes the outer work possible.",
    price: "$97",
    amount: 9700,
    duration: "4 weeks",
    level: "All Levels",
    description:
      "Nobody talks about this part. The discipline to show up every day, the resilience when shit falls apart, the confidence to charge what you're worth, and the networking skills to get in any room. This is the foundation everything else sits on.",
    outcomes: [
      "Build a daily structure that compounds results",
      "Develop unshakable confidence in yourself and your value",
      "Network and build real connections (not LinkedIn spam)",
      "Build resilience that keeps you moving when others quit",
    ],
    modules: [
      {
        num: "01",
        title: "Discipline & Daily Structure",
        lessons: [
          "Why most people fail before they start",
          "Designing a daily schedule that actually works",
          "The first 3 hours: how to win the morning",
          "Eliminating distractions (phone, people, habits)",
        ],
      },
      {
        num: "02",
        title: "Confidence & Mindset",
        lessons: [
          "Where real confidence comes from (not affirmations)",
          "Knowing your worth and communicating it",
          "Handling rejection without taking it personal",
          "The 'stop being a bitch' framework",
        ],
      },
      {
        num: "03",
        title: "Resilience & Mental Toughness",
        lessons: [
          "When everything falls apart — what to do first",
          "Dealing with flaky people and broken promises",
          "Financial stress: staying sharp when money is tight",
          "Long-game thinking in a short-game world",
        ],
      },
      {
        num: "04",
        title: "Networking & Relationships",
        lessons: [
          "How to get in any room (without being fake)",
          "Building connections that turn into opportunities",
          "The follow-up game: staying top of mind",
          "Cutting dead weight without burning bridges",
        ],
      },
      {
        num: "05",
        title: "Health & Energy",
        lessons: [
          "Why your body is a business asset",
          "Nutrition for performance (not aesthetics)",
          "Movement systems: gym, walks, bodyweight",
          "Sleep, recovery, and managing stress",
        ],
      },
    ],
  },
  {
    slug: "operator-playbook",
    title: "The Operator Playbook",
    tagline: "Become the person every business needs.",
    price: "$247",
    amount: 24700,
    duration: "5 weeks",
    level: "Intermediate → Advanced",
    description:
      "Operators are the most valuable people in business. You don't just do tasks — you see what's broken, fix it, build systems, and make the founder's life easier. This is how I became COO and how you can become indispensable.",
    outcomes: [
      "Understand what operators do and why they're irreplaceable",
      "Run someone else's business like it's your own",
      "Build systems that scale without you",
      "Position yourself for equity, partnerships, and leadership",
    ],
    modules: [
      {
        num: "01",
        title: "What an Operator Actually Is",
        lessons: [
          "Operator vs manager vs freelancer vs employee",
          "The operator mindset: own everything, blame nothing",
          "What founders actually need (and won't tell you)",
          "How I became COO at 22",
        ],
      },
      {
        num: "02",
        title: "Bringing Value Before Getting Paid",
        lessons: [
          "The audit: finding broken things in any business",
          "Showing your value before asking for money",
          "Building a track record with small wins",
          "Turning free work into paid positions",
        ],
      },
      {
        num: "03",
        title: "Running the Business",
        lessons: [
          "Understanding every function: sales, marketing, ops, finance",
          "Making decisions when the founder isn't around",
          "Managing up: keeping the CEO in the loop without hand-holding",
          "Cross-functional coordination and accountability",
        ],
      },
      {
        num: "04",
        title: "Systems Thinking",
        lessons: [
          "Seeing the whole machine, not just your part",
          "Finding bottlenecks and fixing root causes",
          "Building SOPs that survive your absence",
          "Automating yourself out of repetitive work",
        ],
      },
      {
        num: "05",
        title: "Scaling & Positioning",
        lessons: [
          "From operator to partner: the equity conversation",
          "Operating multiple businesses simultaneously",
          "Building your own operator brand and reputation",
          "The pipeline: from course to paid project to team member",
        ],
      },
    ],
  },
  {
    slug: "ai-for-business",
    title: "AI for Business",
    tagline: "Integrate Claude into your business. Print money.",
    price: "$497",
    amount: 49700,
    duration: "5 weeks",
    level: "Business Owners & Operators",
    gated: false,
    description:
      "This is the course for businesses that want to integrate Claude and stop leaving money on the table. I'll show you exactly how to use AI to cut costs, increase revenue, and run operations that scale — the same playbook I run for my clients.",
    outcomes: [
      "Identify the highest-ROI AI opportunities in any business",
      "Deploy Claude-powered systems that directly increase revenue",
      "Automate customer operations and reduce headcount costs",
      "Build an AI-first culture that compounds over time",
    ],
    modules: [
      {
        num: "01",
        title: "AI Revenue Strategy",
        lessons: [
          "Where AI actually makes businesses money",
          "The AI audit: finding your highest-ROI opportunities",
          "Calculating real ROI on AI investments",
          "Building your 90-day AI implementation roadmap",
        ],
      },
      {
        num: "02",
        title: "Customer Operations AI",
        lessons: [
          "Claude-powered customer support that scales",
          "Automating onboarding and client communication",
          "AI-driven retention and churn prevention",
          "Quality control: keeping AI responses on-brand",
        ],
      },
      {
        num: "03",
        title: "Sales & Marketing Automation",
        lessons: [
          "AI lead scoring and qualification",
          "Claude-powered outreach personalization at scale",
          "Automated content marketing pipelines",
          "AI-assisted proposal and pitch generation",
        ],
      },
      {
        num: "04",
        title: "Data Intelligence",
        lessons: [
          "Using Claude to analyze business data",
          "Automated reporting and executive summaries",
          "Competitive intelligence on autopilot",
          "Forecasting and decision support with AI",
        ],
      },
      {
        num: "05",
        title: "Implementation & ROI",
        lessons: [
          "Getting your team to actually use AI",
          "Change management for AI adoption",
          "Measuring and reporting AI impact",
          "Scaling from pilot to company-wide deployment",
        ],
      },
    ],
  },
  {
    slug: "ai-mastery",
    title: "AI Mastery — Expert",
    tagline: "The full power of Claude. Nothing held back.",
    price: "$9,997",
    amount: 999700,
    duration: "8 weeks",
    level: "Advanced → Expert",
    gated: false,
    description:
      "This is everything. Claude Code building full production apps from your terminal. MCP servers that give Claude custom tools. The Agent SDK for autonomous systems. Computer use. Vision. Extended thinking. This course shows you the absolute extremes of what Claude can do — and how to weaponize every capability for business.",
    outcomes: [
      "Build full production applications using Claude Code",
      "Create custom MCP servers that extend Claude's capabilities",
      "Deploy autonomous agent systems with the Claude Agent SDK",
      "Architect enterprise-grade AI infrastructure",
    ],
    modules: [
      {
        num: "01",
        title: "Claude Code",
        lessons: [
          "Claude Code: building apps from your terminal",
          "Project scaffolding, debugging, and iteration",
          "Multi-file codebases and complex refactors",
          "Deploying full-stack apps built entirely by Claude",
        ],
      },
      {
        num: "02",
        title: "The Claude API Deep Dive",
        lessons: [
          "Messages API: streaming, tool use, and vision",
          "Extended thinking: making Claude reason step-by-step",
          "Structured outputs and reliable data extraction",
          "Cost optimization: batching, caching, model routing",
        ],
      },
      {
        num: "03",
        title: "MCP — Model Context Protocol",
        lessons: [
          "What MCP is and why it changes everything",
          "Building your first MCP server",
          "Custom tools: database, API, and file system access",
          "Deploying MCP servers in production",
        ],
      },
      {
        num: "04",
        title: "Claude Agent SDK",
        lessons: [
          "Building autonomous agents with the Agent SDK",
          "Tool design: giving agents real-world capabilities",
          "Multi-agent orchestration and handoffs",
          "Guardrails, safety, and monitoring agents in production",
        ],
      },
      {
        num: "05",
        title: "Advanced Claude Capabilities",
        lessons: [
          "Vision: analyzing images, screenshots, and documents",
          "Computer use: Claude controlling your desktop",
          "PDF analysis, data extraction, and multimodal workflows",
          "Combining capabilities for complex business automation",
        ],
      },
      {
        num: "06",
        title: "Enterprise AI Architecture",
        lessons: [
          "Designing AI systems that handle millions of requests",
          "Security, compliance, and data privacy with Claude",
          "Team workflows: Claude in engineering, sales, and ops",
          "Building an AI-first company from the ground up",
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

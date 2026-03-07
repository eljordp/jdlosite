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
    duration: "8 weeks",
    level: "Beginner → Advanced",
    gated: false,
    description:
      "This entire site, every course, every system — built with Claude. You'll learn exactly how I use Claude to run businesses, automate operations, and build things that used to take teams of developers. From your first prompt to deploying agents that work while you sleep.",
    outcomes: [
      "Use Claude to build real systems from scratch",
      "Master advanced prompting techniques most people don't know exist",
      "Build Claude-powered agents that work autonomously",
      "Deploy AI systems that directly increase revenue and cut costs",
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
        title: "Advanced Prompting",
        lessons: [
          "Role prompting, few-shot examples, and in-context learning",
          "Prompt chaining and multi-step workflows",
          "Self-critique, iterative refinement, and RAG basics",
          "Prompting for code, content, research, and analysis",
        ],
      },
      {
        num: "04",
        title: "Claude API & Integrations",
        lessons: [
          "Calling the Claude API (Messages API, tool use)",
          "Connecting Claude to Airtable, Notion, Sheets, Slack",
          "Webhooks and real-time triggers",
          "Error handling and reliability",
        ],
      },
      {
        num: "05",
        title: "Automation Workflows",
        lessons: [
          "Make, Zapier, n8n — when to use what",
          "Building multi-step automated pipelines",
          "Claude-powered email, CRM, and content workflows",
          "Testing and maintaining automations at scale",
        ],
      },
      {
        num: "06",
        title: "AI for Business",
        lessons: [
          "The AI audit: finding your highest-ROI opportunities",
          "Claude-powered customer support and onboarding that scales",
          "AI lead scoring, outreach personalization, and content pipelines",
          "Data intelligence: automated reporting, competitive intel, forecasting",
        ],
      },
      {
        num: "07",
        title: "Claude Agents",
        lessons: [
          "What agents are and how to build them with Claude",
          "Tool use: giving Claude the ability to act",
          "Multi-agent systems and orchestration",
          "Real business agent builds: research, outreach, ops",
        ],
      },
      {
        num: "08",
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
    tagline: "Close deals. Build teams. Scale revenue.",
    price: "$197",
    amount: 19700,
    duration: "7 weeks",
    level: "Beginner → Advanced",
    gated: false,
    description:
      "Not theory from a book. These are the exact scripts, frameworks, and systems I've built to close deals consistently at scale — now AI-accelerated. Plus the hiring, SOPs, and management systems you need to build a team that runs without you.",
    outcomes: [
      "Build a repeatable outbound system that generates revenue",
      "Close deals with a proven framework — objections handled",
      "Hire the right people and build SOPs that scale",
      "Manage and operate a team without micromanaging",
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
      {
        num: "06",
        title: "Hiring & Team Building",
        lessons: [
          "Writing job descriptions that attract A-players",
          "Where to find talent (and where not to)",
          "Screening, interviews, and testing candidates",
          "Building SOPs people actually follow",
        ],
      },
      {
        num: "07",
        title: "Operations & Scale",
        lessons: [
          "Running 1-on-1s, setting goals, and tracking performance",
          "Building dashboards for real-time visibility",
          "AI for scheduling, coordination, and automated reporting",
          "Delegating everything except the things only you can do",
        ],
      },
    ],
  },
  {
    slug: "operator-playbook",
    title: "The Operator Playbook",
    tagline: "Become the person every business needs.",
    price: "$297",
    amount: 29700,
    duration: "7 weeks",
    level: "All Levels → Advanced",
    gated: false,
    description:
      "Operators are the most valuable people in business. You don't just do tasks — you see what's broken, fix it, build systems, and make the founder's life easier. This is how I became COO at 22, and it starts with the discipline, mindset, and resilience most people skip.",
    outcomes: [
      "Build the daily discipline and confidence to show up and execute",
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
        title: "Discipline & Mindset",
        lessons: [
          "Designing a daily schedule that actually works",
          "The first 3 hours: how to win the morning",
          "Where real confidence comes from (not affirmations)",
          "The 'stop being a bitch' framework",
        ],
      },
      {
        num: "03",
        title: "Resilience & Networking",
        lessons: [
          "When everything falls apart — what to do first",
          "Financial stress: staying sharp when money is tight",
          "How to get in any room (without being fake)",
          "Building connections that turn into opportunities",
        ],
      },
      {
        num: "04",
        title: "Bringing Value Before Getting Paid",
        lessons: [
          "The audit: finding broken things in any business",
          "Showing your value before asking for money",
          "Building a track record with small wins",
          "Turning free work into paid positions",
        ],
      },
      {
        num: "05",
        title: "Running the Business",
        lessons: [
          "Understanding every function: sales, marketing, ops, finance",
          "Making decisions when the founder isn't around",
          "Managing up: keeping the CEO in the loop without hand-holding",
          "Cross-functional coordination and accountability",
        ],
      },
      {
        num: "06",
        title: "Systems Thinking",
        lessons: [
          "Seeing the whole machine, not just your part",
          "Finding bottlenecks and fixing root causes",
          "Building SOPs that survive your absence",
          "Automating yourself out of repetitive work",
        ],
      },
      {
        num: "07",
        title: "Scaling & Positioning",
        lessons: [
          "From operator to partner: the equity conversation",
          "Operating multiple businesses simultaneously",
          "Health as a business asset: nutrition, movement, recovery",
          "The pipeline: from course to paid project to team member",
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

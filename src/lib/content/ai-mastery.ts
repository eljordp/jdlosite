import type { CourseContent, CourseQuizzes } from "./types";

export const aiMastery: CourseContent = {
  "01-1": {
    title: "Claude Code: building apps from your terminal",
    duration: "8 min read",
    content: `## Why Claude Code Changes Everything

Most people interact with Claude through chat. That's fine for brainstorming. But if you're building software, you need Claude where the code lives: **in your terminal**.

Claude Code is Anthropic's agentic CLI tool. It reads your codebase, writes files, runs commands, debugs errors, and iterates — all from a single terminal session. No copy-pasting between browser tabs. No losing context. It operates directly on your file system.

## Installation and Setup

\`\`\`bash
npm install -g @anthropic-ai/claude-code
claude
\`\`\`

On first launch, Claude Code authenticates via your Anthropic account. It drops you into an interactive REPL where you can issue natural language instructions that translate into real file operations, shell commands, and code generation.

## The Mental Model

Think of Claude Code as a senior engineer pair-programming with you. It has access to:

- **Read**: Any file in your project directory
- **Write**: Create or edit files with surgical precision
- **Bash**: Execute terminal commands (build, test, deploy)
- **Grep/Glob**: Search across your entire codebase instantly

The key insight: Claude Code maintains **context across your entire session**. Ask it to refactor a function, and it already knows every file that imports it. Ask it to fix a test, and it already read the test file, the source file, and the error output.

## Your First Real Workflow

\`\`\`
> Build me a Next.js API route that accepts a webhook from Stripe,
  verifies the signature, and updates the user's subscription status
  in our Prisma database.
\`\`\`

Claude Code will:
1. Read your \`schema.prisma\` to understand your data model
2. Check your existing API routes for patterns and conventions
3. Write the webhook handler with proper signature verification
4. Add the necessary environment variable references
5. Run \`npx tsc --noEmit\` to verify it compiles

## Power User Configuration

Create a \`.claude/settings.json\` in your project root to set persistent instructions:

\`\`\`json
{
  "permissions": {
    "allow": ["Read", "Write", "Bash(npm test)"],
    "deny": ["Bash(rm -rf *)"]
  }
}
\`\`\`

Use \`CLAUDE.md\` files in your repo root to give Claude Code persistent context about your project — architecture decisions, naming conventions, deployment targets. This is your leverage point. The better your \`CLAUDE.md\`, the less you repeat yourself.`,
    takeaways: [
      "Claude Code operates directly on your filesystem — no copy-pasting between a chat UI and your editor",
      "It maintains full session context across reads, writes, and command execution, making multi-step tasks seamless",
      "CLAUDE.md files act as persistent project instructions that compound in value over time",
      "The permission system gives you granular control over what Claude Code can and cannot execute",
    ],
    exercise:
      "Install Claude Code globally, initialize it in an existing project, and create a CLAUDE.md file that describes your project's architecture, tech stack, naming conventions, and deployment process. Then ask Claude Code to add a new feature — observe how it reads existing files for patterns before writing new code.",
  },
  "01-2": {
    title: "Project scaffolding, debugging, and iteration",
    duration: "9 min read",
    content: `## Scaffolding From Zero

Claude Code's most underrated capability is standing up entire projects from a single prompt. But there's a difference between a junior prompt and an expert one.

**Junior approach:**
\`\`\`
> Build me a todo app
\`\`\`

**Expert approach:**
\`\`\`
> Scaffold a Next.js 14 app with App Router, TypeScript strict mode,
  Tailwind CSS, shadcn/ui, Prisma with PostgreSQL, and NextAuth.js
  with Google OAuth. Use server actions for mutations. Structure:
  src/app for routes, src/lib for utilities, src/components for UI.
  Include a proper .env.example.
\`\`\`

The expert prompt front-loads decisions. Claude Code doesn't have to guess — it executes. The result is a production-grade scaffold in under 60 seconds.

## The Debug Loop

Here's where Claude Code earns its keep. Traditional debugging:

1. Read error message
2. Search Stack Overflow
3. Try a fix
4. Repeat

Claude Code debugging:

\`\`\`
> Run npm test and fix any failures
\`\`\`

It runs the tests. Reads the failures. Reads the source files. Identifies the root cause. Applies the fix. Runs the tests again. **This loop happens automatically.** You can watch it iterate 3-4 times until everything passes.

## Iterative Development Patterns

The highest-leverage pattern is **describe, verify, refine**:

\`\`\`
> Add rate limiting to the /api/generate endpoint.
  Use upstash/ratelimit with a sliding window of 10 requests
  per minute per API key. Return 429 with a Retry-After header.
\`\`\`

After it writes the code:

\`\`\`
> Now write integration tests for the rate limiter.
  Test the happy path, the limit exceeded case, and the
  header values.
\`\`\`

After tests pass:

\`\`\`
> Review what you just wrote. Are there any edge cases
  we're missing? What happens if Redis is down?
\`\`\`

This three-step loop — **build, test, review** — catches issues that would otherwise ship to production.

## Handling Build Errors

When a build breaks, don't describe the error. Let Claude Code see it:

\`\`\`
> Run npm run build and fix every error and warning
\`\`\`

It will read each TypeScript error, trace it to the source, and fix it with full type awareness. For complex chains of type errors, it resolves them in dependency order — fixing the root cause first, not each symptom individually.

## When to Reset Context

Long sessions accumulate context. If Claude Code starts making inconsistent choices, start a fresh session:

\`\`\`bash
claude --resume    # list recent sessions
claude             # fresh session with clean context
\`\`\`

A fresh session with a strong \`CLAUDE.md\` is often better than a stale session with 200 turns of accumulated drift.`,
    takeaways: [
      "Front-load architectural decisions in your scaffold prompts — specificity eliminates guesswork and produces production-grade output",
      "The build-test-review loop is the highest-leverage iterative pattern: write code, verify with tests, then self-review for edge cases",
      "Let Claude Code see errors directly by running commands rather than describing symptoms — it traces root causes automatically",
      "Reset sessions when context drift causes inconsistent behavior; a fresh session plus a strong CLAUDE.md outperforms a stale long session",
    ],
    exercise:
      "Scaffold a complete REST API project from scratch using Claude Code — specify the framework, database, auth strategy, and folder structure in your prompt. Then intentionally introduce 3 different bugs (a type error, a logic error, and a missing import) and use the command 'Run the tests and fix any failures' to watch Claude Code's autonomous debug loop in action.",
  },
  "01-3": {
    title: "Multi-file codebases and complex refactors",
    duration: "9 min read",
    content: `## Thinking in Systems, Not Files

When your codebase exceeds a few files, the game changes. Claude Code's real power is **cross-file awareness**. It doesn't edit in isolation — it understands how a change in one file ripples across your entire project.

## The Refactor That Would Take You a Day

Imagine renaming a core database model from \`User\` to \`Account\` across a 50-file codebase. Manually, you'd:

- Rename the Prisma model
- Update every query, every type import, every API route
- Fix every test file
- Update every component that displays user data

With Claude Code:

\`\`\`
> Rename the User model to Account everywhere in the codebase.
  Update the Prisma schema, all queries, all type references,
  all API routes, all tests, and all UI components. Run the
  type checker after to verify nothing is broken.
\`\`\`

Claude Code searches every file with Grep, builds a dependency graph in its reasoning, and makes coordinated edits across all files. One prompt. Five minutes. Zero missed references.

## Architecture-Level Changes

Complex refactors go beyond find-and-replace:

\`\`\`
> Migrate our API routes from the Pages Router to the App Router.
  Convert getServerSideProps to server components. Convert API
  routes in pages/api to route handlers in app/api. Keep the
  same external API contract — no breaking changes for clients.
\`\`\`

This requires understanding both architectures, mapping concepts between them, and preserving behavior. Claude Code handles it because it reads the existing implementation in full before writing anything.

## Managing Large Context Windows

Claude Code powered by Claude Opus 4.6 has a 200K token context window. That's roughly 150,000 words — enough to hold most codebases in working memory. But context management still matters.

Best practices for large projects:

- **Use specific instructions**: "Edit the auth middleware in \`src/middleware/auth.ts\`" beats "fix the auth"
- **Scope your requests**: "Refactor the payment module" is better than "refactor everything"
- **Leverage CLAUDE.md**: Document your project map so Claude Code knows where to look without scanning every file

## Coordinated Multi-File Edits

The pattern for complex changes:

\`\`\`
> I need to add a "workspace" concept to our SaaS app.
  A workspace has many users, and all existing resources
  (projects, documents, API keys) belong to a workspace.

  1. Update the Prisma schema with the Workspace model
     and all relations
  2. Generate and run the migration
  3. Update all CRUD operations to scope by workspace
  4. Add workspace selection to the dashboard layout
  5. Update all API routes to require workspace context
  6. Run the full test suite and fix any failures
\`\`\`

Numbered steps give Claude Code a clear execution plan. It will work through them sequentially, verifying each step before moving to the next.

## When Refactors Go Wrong

If a refactor breaks things mid-way, don't panic. Claude Code has access to git:

\`\`\`
> Run git diff to show me what you've changed so far
\`\`\`

\`\`\`
> The tests are failing after step 3. Roll back the changes
  to the API routes and try a different approach — scope by
  workspace using middleware instead of per-route logic.
\`\`\`

Git integration means every change is reversible. Use it as your safety net.`,
    takeaways: [
      "Claude Code builds cross-file dependency graphs before editing, so a single rename command can safely propagate across 50+ files",
      "Architecture-level migrations (e.g., Pages Router to App Router) work because Claude Code reads the full existing implementation before writing",
      "Numbered step lists in your prompts give Claude Code a clear execution plan it follows sequentially with verification at each stage",
      "Git integration is your safety net — review diffs mid-refactor and roll back partial changes when an approach isn't working",
    ],
    exercise:
      "Take an existing multi-file project (at least 10 files) and perform a significant architectural refactor using Claude Code. Examples: rename a core model and propagate changes everywhere, migrate from one state management library to another, or restructure your folder layout from feature-based to domain-based. Use git diff to verify the changes before committing.",
  },
  "01-4": {
    title: "Deploying full-stack apps built entirely by Claude",
    duration: "8 min read",
    content: `## From Terminal to Production

Building an app with Claude Code is one thing. Shipping it is another. This lesson covers the full deployment pipeline — CI/CD configuration, environment management, and production hardening — all driven from Claude Code.

## The Deployment Prompt Pattern

\`\`\`
> Set up deployment for this Next.js app on Vercel.
  Create a vercel.json with proper settings, ensure all
  environment variables are documented in .env.example,
  add a GitHub Actions workflow for CI that runs type checking,
  linting, and tests before allowing merge to main.
\`\`\`

Claude Code generates:

- \`vercel.json\` with framework presets and build configuration
- \`.github/workflows/ci.yml\` with a complete pipeline
- Updated \`.env.example\` with every required variable annotated

## CI/CD Pipelines From Scratch

\`\`\`yaml
# Claude Code generates this — you review and ship
name: CI
on:
  pull_request:
    branches: [main]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build
\`\`\`

The key insight: have Claude Code generate the pipeline, then **use Claude Code to test it locally** before pushing:

\`\`\`
> Run the same commands from our CI pipeline locally
  and fix anything that fails
\`\`\`

## Database Migrations in Production

For apps with Prisma:

\`\`\`
> Create a migration that adds a subscription_tier column to
  the Account table with a default value of 'free'. Make sure
  the migration is backward-compatible — existing rows should
  not break, and the app should work with both old and new
  schema during rollout.
\`\`\`

Claude Code generates the migration SQL and validates it won't break existing data. It thinks about zero-downtime deployment because you told it to.

## Production Hardening Checklist

Use Claude Code to audit your app before launch:

\`\`\`
> Audit this codebase for production readiness:
  1. Check for hardcoded secrets or API keys
  2. Verify all API routes have proper error handling
  3. Ensure rate limiting is configured
  4. Check that CORS is properly restricted
  5. Verify all user inputs are validated
  6. Check for SQL injection or XSS vulnerabilities
  7. Ensure proper logging is in place (no sensitive data logged)
  8. Verify environment variables are not exposed to the client
\`\`\`

This single prompt replaces a security review that would take hours manually.

## Infrastructure as Code

For AWS or other cloud deployments:

\`\`\`
> Write a Dockerfile for this Next.js app using multi-stage
  builds. Optimize for smallest image size. Then write a
  docker-compose.yml for local development that includes
  the app, PostgreSQL, and Redis.
\`\`\`

\`\`\`
> Create a Terraform configuration that deploys this app
  to AWS ECS Fargate with an ALB, RDS PostgreSQL, and
  ElastiCache Redis. Include auto-scaling based on CPU
  utilization.
\`\`\`

Claude Code generates production-grade infrastructure configs because it knows the patterns. Your job is to review, not to write from scratch.

## The Full Loop

The expert workflow is:

1. **Build** with Claude Code (features, tests, docs)
2. **Review** with Claude Code (security audit, performance check)
3. **Deploy** with Claude Code (CI/CD, infrastructure, migrations)
4. **Monitor** — this is where you take over (for now)

You're not just using an AI assistant. You're operating a full engineering team from your terminal.`,
    takeaways: [
      "Claude Code can generate complete CI/CD pipelines, Dockerfiles, and infrastructure-as-code configs — always run the pipeline locally first before pushing",
      "The production hardening audit prompt replaces hours of manual security review with a systematic, repeatable check",
      "Database migrations should always be prompted with backward-compatibility constraints to ensure zero-downtime deployments",
      "The full expert loop is build, review, deploy — Claude Code handles all three, and you operate as the architect and reviewer",
    ],
    exercise:
      "Take an app you've built with Claude Code and deploy it end-to-end. Have Claude Code generate a GitHub Actions CI pipeline, a Dockerfile with multi-stage builds, and a production hardening audit. Run the audit, fix every issue it finds, verify the CI pipeline passes locally, then deploy to your platform of choice (Vercel, Railway, Fly.io, or AWS).",
  },
  "02-1": {
    title: "Messages API: streaming, tool use, and vision",
    duration: "10 min read",
    content: `## The Foundation of Everything You'll Build

Every Claude-powered product runs on the Messages API. Chat wrappers, coding agents, document processors, customer support bots — they all hit the same endpoint. Mastery here is mastery of the entire platform.

## Anatomy of a Messages API Call

\`\`\`typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const response = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 4096,
  system: "You are a senior TypeScript engineer. Be precise and concise.",
  messages: [
    {
      role: "user",
      content: "Refactor this function to use proper error handling with Result types.",
    },
  ],
});

console.log(response.content[0].text);
\`\`\`

Key parameters you need to internalize:

- **model**: \`claude-opus-4-6\` (200K context, 128K output), \`claude-sonnet-4-6\` (fast + capable), \`claude-haiku-4-5\` (speed + cost)
- **max_tokens**: Hard ceiling on output length. Set it intentionally — too low truncates, too high wastes latency budget
- **system**: The system prompt. This is your primary control lever for behavior, tone, and output format

## Streaming for Real-Time UX

Non-streaming responses make users wait. Streaming delivers tokens as they're generated:

\`\`\`typescript
const stream = client.messages.stream({
  model: "claude-sonnet-4-6",
  max_tokens: 2048,
  messages: [{ role: "user", content: "Explain dependency injection." }],
});

for await (const event of stream) {
  if (
    event.type === "content_block_delta" &&
    event.delta.type === "text_delta"
  ) {
    process.stdout.write(event.delta.text);
  }
}

const finalMessage = await stream.finalMessage();
console.log("\\nStop reason:", finalMessage.stop_reason);
\`\`\`

The SDK abstracts server-sent events into an async iterator. Use \`stream.finalMessage()\` to get usage stats and the stop reason after streaming completes.

## Tool Use (Function Calling)

This is where Claude becomes an agent. You define tools. Claude decides when to call them:

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  tools: [
    {
      name: "get_stock_price",
      description: "Get the current stock price for a given ticker symbol.",
      input_schema: {
        type: "object",
        properties: {
          ticker: {
            type: "string",
            description: "The stock ticker symbol, e.g. AAPL",
          },
        },
        required: ["ticker"],
      },
    },
  ],
  messages: [{ role: "user", content: "What's Apple trading at right now?" }],
});

// response.stop_reason === "tool_use"
// response.content includes a tool_use block with name and input
\`\`\`

After Claude returns a \`tool_use\` block, you execute the function, then send the result back as a \`tool_result\` message. Claude synthesizes the final answer. This is the agentic loop.

## Vision: Multimodal Inputs

Claude can process images natively. Send them as base64 or URL references:

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/png",
            data: imageBase64,
          },
        },
        {
          type: "text",
          text: "Extract all text from this screenshot and return it as structured JSON.",
        },
      ],
    },
  ],
});
\`\`\`

Vision + tool use is a lethal combination. Build systems that screenshot a webpage, feed it to Claude, extract structured data, and pipe it into your database. Fully automated.`,
    takeaways: [
      "The Messages API is the single endpoint powering every Claude integration — master its parameters (model, max_tokens, system) to control behavior precisely",
      "Always use streaming in user-facing products; the SDK's async iterator and finalMessage() method make implementation straightforward",
      "Tool use transforms Claude from a text generator into an agent — define tools with clear schemas and descriptions, then implement the tool_use/tool_result loop",
      "Vision inputs (base64 or URL) combined with tool use enables fully automated pipelines: screenshot, extract, structure, store",
    ],
    exercise:
      "Build a working tool-use agent with the Messages API. Define at least 3 tools (e.g., get_weather, search_database, send_email), implement the full agentic loop (send message, detect tool_use, execute function, return tool_result, get final answer), and add streaming to the final response. Test with prompts that require multi-tool orchestration.",
  },
  "02-2": {
    title: "Extended thinking: making Claude reason step-by-step",
    duration: "8 min read",
    content: `## When Standard Prompting Isn't Enough

For straightforward tasks, Claude's default reasoning is sufficient. But for complex analysis — multi-step math, code architecture decisions, nuanced legal review, strategic planning — you need Claude to **think before it speaks**.

Extended thinking gives Claude a private scratchpad. It reasons through the problem step-by-step in \`thinking\` blocks before producing its visible response. The result: dramatically better accuracy on hard problems.

## Enabling Extended Thinking

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000,
  },
  messages: [
    {
      role: "user",
      content: \`Review this database schema and identify all normalization
      violations, potential performance bottlenecks at scale, and missing
      indexes. Then provide a prioritized migration plan.\`,
    },
  ],
});
\`\`\`

The \`budget_tokens\` parameter sets the upper bound on how many tokens Claude can use for internal reasoning. It won't always use the full budget — it stops when it's confident in its reasoning.

## Reading the Thinking Output

The response includes both thinking and text blocks:

\`\`\`typescript
for (const block of response.content) {
  if (block.type === "thinking") {
    console.log("REASONING:", block.thinking);
  } else if (block.type === "text") {
    console.log("ANSWER:", block.text);
  }
}
\`\`\`

The thinking content reveals Claude's reasoning chain. This is invaluable for:

- **Debugging**: See why Claude reached a conclusion
- **Auditing**: Verify the logic chain for high-stakes decisions
- **Tuning**: Understand where reasoning goes off-track so you can improve your prompts

## Budget Tokens: The Art of Allocation

Budget tokens are not a flat cost — Claude uses only what it needs:

| Task Complexity | Recommended Budget |
|---|---|
| Simple classification | 2,000 - 4,000 |
| Code review / analysis | 5,000 - 10,000 |
| Complex architecture decisions | 10,000 - 20,000 |
| Multi-step mathematical proofs | 15,000 - 30,000 |
| Deep research synthesis | 20,000 - 50,000 |

Setting the budget too low truncates reasoning and degrades quality. Setting it too high doesn't hurt — Claude stops early when confident. Err on the side of generous budgets for hard problems.

## Streaming with Extended Thinking

\`\`\`typescript
const stream = client.messages.stream({
  model: "claude-opus-4-6",
  max_tokens: 8192,
  thinking: {
    type: "enabled",
    budget_tokens: 8000,
  },
  messages: [{ role: "user", content: "Design a rate limiting system..." }],
});

for await (const event of stream) {
  if (event.type === "content_block_start") {
    if (event.content_block.type === "thinking") {
      process.stdout.write("[Thinking...] ");
    }
  }
  if (event.type === "content_block_delta") {
    if (event.delta.type === "thinking_delta") {
      // Optionally show reasoning to power users
      process.stdout.write(event.delta.thinking);
    } else if (event.delta.type === "text_delta") {
      process.stdout.write(event.delta.text);
    }
  }
}
\`\`\`

## When to Use Extended Thinking

Use it when the task has **multiple valid approaches** and choosing the right one matters. If you're asking Claude to generate a simple utility function, thinking is overkill. If you're asking it to design a distributed caching strategy for your microservices architecture, thinking is the difference between a generic answer and an answer that actually accounts for your constraints.

The rule of thumb: **if a senior engineer would need 10+ minutes to think through the problem, turn on extended thinking.**`,
    takeaways: [
      "Extended thinking gives Claude a private reasoning scratchpad that dramatically improves accuracy on complex, multi-step problems",
      "Budget tokens set an upper bound — Claude stops reasoning early when confident, so generous budgets don't waste money on simple tasks",
      "Thinking blocks are readable in the response, enabling you to debug reasoning chains, audit logic, and refine prompts",
      "Use extended thinking when a senior engineer would need 10+ minutes to reason through the problem — that's the complexity threshold where it pays off",
    ],
    exercise:
      "Build a code review tool that uses extended thinking. Send a pull request diff to Claude with thinking enabled (budget: 10,000 tokens), ask it to identify bugs, security issues, and performance problems. Log the thinking blocks separately from the final review. Compare the output quality with and without extended thinking on the same diff to see the difference firsthand.",
  },
  "02-3": {
    title: "Structured outputs and reliable data extraction",
    duration: "8 min read",
    content: `## The Problem With Free-Form Text

When you're building systems — not chatbots — you need Claude's output in a **predictable, parseable format**. Free-form text is useless to your downstream code. You need JSON, and you need it to conform to an exact schema every single time.

## Tool Use as Structured Output

The most reliable way to get structured output from Claude is to use tool use — even when you're not calling external functions. Define a tool whose schema matches your desired output shape, and Claude will return data that conforms to it:

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  tool_choice: { type: "tool", name: "extract_invoice" },
  tools: [
    {
      name: "extract_invoice",
      description: "Extract structured invoice data from the provided text or image.",
      input_schema: {
        type: "object",
        properties: {
          vendor_name: { type: "string" },
          invoice_number: { type: "string" },
          date: { type: "string", description: "ISO 8601 date" },
          line_items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                description: { type: "string" },
                quantity: { type: "number" },
                unit_price: { type: "number" },
                total: { type: "number" },
              },
              required: ["description", "quantity", "unit_price", "total"],
            },
          },
          subtotal: { type: "number" },
          tax: { type: "number" },
          total: { type: "number" },
        },
        required: [
          "vendor_name",
          "invoice_number",
          "date",
          "line_items",
          "subtotal",
          "tax",
          "total",
        ],
      },
    },
  ],
  messages: [
    {
      role: "user",
      content: "Extract the invoice data from this text: ...",
    },
  ],
});

const toolUseBlock = response.content.find((b) => b.type === "tool_use");
const invoiceData = toolUseBlock.input; // Typed, structured JSON
\`\`\`

The \`tool_choice: { type: "tool", name: "extract_invoice" }\` parameter **forces** Claude to use this specific tool, guaranteeing structured output.

## Schema Design Principles

Your schema is your contract. Design it like a database schema:

- **Use \`required\` fields aggressively** — optional fields invite missing data
- **Use \`description\` on every property** — Claude uses descriptions to understand intent
- **Use enums for categorical data**: \`{ "type": "string", "enum": ["low", "medium", "high"] }\`
- **Nest objects for complex structures** — flat schemas lose relational meaning

## Extraction Pipelines

Combine vision + structured output for powerful document processing:

\`\`\`typescript
async function processInvoice(imageBase64: string) {
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    tool_choice: { type: "tool", name: "extract_invoice" },
    tools: [invoiceTool],
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: { type: "base64", media_type: "image/png", data: imageBase64 },
          },
          { type: "text", text: "Extract all invoice data from this image." },
        ],
      },
    ],
  });

  const data = response.content.find((b) => b.type === "tool_use")?.input;
  // Validate with Zod, insert into database, trigger workflows
  return invoiceSchema.parse(data);
}
\`\`\`

## Validation Layer

Never trust raw output. Always validate with a schema library:

\`\`\`typescript
import { z } from "zod";

const InvoiceSchema = z.object({
  vendor_name: z.string().min(1),
  invoice_number: z.string().min(1),
  date: z.string().datetime(),
  line_items: z.array(
    z.object({
      description: z.string(),
      quantity: z.number().positive(),
      unit_price: z.number().nonnegative(),
      total: z.number().nonnegative(),
    })
  ).min(1),
  subtotal: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  total: z.number().positive(),
});
\`\`\`

Claude's structured output is highly reliable with tool use, but a Zod validation layer catches edge cases and gives you type safety throughout your application.`,
    takeaways: [
      "Tool use with tool_choice forced to a specific tool is the most reliable method for getting structured JSON output from Claude",
      "Schema design directly impacts extraction quality — use required fields, descriptive property descriptions, and enums for categorical data",
      "Vision + structured output enables fully automated document processing pipelines (invoices, receipts, forms, contracts)",
      "Always add a Zod (or equivalent) validation layer after extraction — it catches edge cases and provides end-to-end type safety",
    ],
    exercise:
      "Build a document extraction pipeline that processes 3 different document types (invoices, receipts, and business cards). Define a tool schema for each type, use vision to process photos/screenshots of real documents, validate output with Zod, and log any validation failures. Measure extraction accuracy across 10+ documents per type.",
  },
  "02-4": {
    title: "Cost optimization: batching, caching, model routing",
    duration: "9 min read",
    content: `## Why Cost Engineering Matters

At prototype scale, API costs are negligible. At production scale, they define your margin. A sloppy implementation can burn \$50K/month. An optimized one does the same work for \$5K. This lesson is about the 10x difference.

## Prompt Caching

If your system prompt or any large prefix is reused across requests, you're paying to process the same tokens over and over. Prompt caching fixes this:

\`\`\`typescript
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  system: [
    {
      type: "text",
      text: longSystemPrompt, // 3,000+ tokens of instructions
      cache_control: { type: "ephemeral" },
    },
  ],
  messages: [{ role: "user", content: userQuery }],
});
\`\`\`

The \`cache_control: { type: "ephemeral" }\` flag tells the API to cache this content block. Subsequent requests that include the same prefix get a **90% discount** on those cached input tokens. The cache has a 5-minute TTL that refreshes on each hit.

### What to Cache

- **System prompts**: Almost always cacheable (same instructions across users)
- **Few-shot examples**: Cache the examples block, vary only the user input
- **Document context**: When multiple queries reference the same document
- **Tool definitions**: Large tool arrays used across every request

### Cache Breakpoints

You can set up to 4 cache breakpoints per request. Each breakpoint marks the end of a cacheable prefix. Structure your messages so static content comes first:

\`\`\`typescript
messages: [
  { role: "user", content: [
    { type: "text", text: documentContent, cache_control: { type: "ephemeral" } },
    { type: "text", text: "Now answer this specific question: " + userQuestion },
  ]},
]
\`\`\`

## Message Batches API

For workloads that don't need real-time responses — bulk classification, overnight data processing, batch analysis — the Batches API cuts costs by **50%**:

\`\`\`typescript
const batch = await client.messages.batches.create({
  requests: items.map((item, i) => ({
    custom_id: \`item-\${i}\`,
    params: {
      model: "claude-haiku-4-5",
      max_tokens: 512,
      messages: [{ role: "user", content: item.text }],
    },
  })),
});

// Poll for completion
let result = await client.messages.batches.retrieve(batch.id);
while (result.processing_status === "in_progress") {
  await new Promise((r) => setTimeout(r, 30000));
  result = await client.messages.batches.retrieve(batch.id);
}

// Stream results
for await (const entry of client.messages.batches.results(batch.id)) {
  console.log(entry.custom_id, entry.result);
}
\`\`\`

Batches process within 24 hours (usually much faster). At 50% cost reduction, this is the obvious choice for any non-interactive workload.

## Model Routing

Not every task needs Opus. A smart routing layer matches task complexity to model capability:

\`\`\`typescript
function selectModel(task: TaskType): string {
  switch (task.complexity) {
    case "trivial":
      // Classification, formatting, simple extraction
      return "claude-haiku-4-5";        // $0.80 / $4 per MTok
    case "standard":
      // Summarization, code generation, analysis
      return "claude-sonnet-4-6";       // $3 / $15 per MTok
    case "complex":
      // Architecture decisions, research synthesis, multi-step reasoning
      return "claude-opus-4-6";         // $15 / $75 per MTok
    default:
      return "claude-sonnet-4-6";
  }
}
\`\`\`

Build a classifier (can be Haiku-powered) that evaluates incoming requests and routes to the cheapest model that can handle the task. This alone can cut costs 60-80%.

## The Cost Optimization Stack

Layer these strategies for maximum impact:

1. **Model routing**: Right-size every request (biggest savings)
2. **Prompt caching**: Eliminate redundant input processing (90% on cached tokens)
3. **Batching**: Async workloads at 50% cost
4. **Max tokens discipline**: Don't set max_tokens: 4096 when you need 200 tokens
5. **Prompt engineering**: Shorter, clearer prompts = fewer input tokens = lower cost

At production scale, these five layers compound. A system that would cost \$50K/month unoptimized can run at \$3-5K/month with proper cost engineering. That's the difference between a sustainable business and a cash furnace.`,
    takeaways: [
      "Prompt caching with cache_control gives a 90% discount on repeated prefixes — cache system prompts, few-shot examples, tool definitions, and document context",
      "The Message Batches API processes async workloads at 50% cost — use it for any non-interactive bulk processing (classification, extraction, analysis)",
      "Model routing (Haiku for simple, Sonnet for standard, Opus for complex) is the single biggest cost lever — build a complexity classifier to automate routing",
      "The five-layer optimization stack (routing, caching, batching, max_tokens discipline, prompt engineering) can reduce API costs by 90% or more at production scale",
    ],
    exercise:
      "Audit an existing Claude-powered application (or build a test harness) and implement all five cost optimization layers. Add prompt caching to every request with a shared system prompt. Build a model routing function that classifies task complexity. Convert at least one bulk workload to the Batches API. Measure before-and-after cost per request and calculate your projected monthly savings at 10,000 requests/day.",
  },
  "03-1": {
    title: "What MCP is and why it changes everything",
    duration: "8 min read",
    content: `## The Problem MCP Solves

Before MCP, every AI integration was a custom one-off. You'd write bespoke code to connect Claude to your database, your API, your file system — and none of it was reusable. Every new tool meant a new integration layer. This is the N×M problem: N models times M tools equals an explosion of custom connectors.

**Model Context Protocol (MCP)** is Anthropic's open standard that collapses this into N+M. One protocol. Any model. Any tool. Universal interoperability.

## How MCP Works Architecturally

MCP follows a client-server architecture with three distinct roles:

- **Host** — The application the user interacts with (Claude Desktop, your custom app)
- **Client** — Maintains a 1:1 connection with an MCP server, handles protocol negotiation
- **Server** — Exposes capabilities to the client via a standardized JSON-RPC 2.0 interface

Servers expose three primitive types:

- **Tools** — Model-invoked functions (e.g., \`query_database\`, \`send_email\`). These require user approval and are the primary way agents take action.
- **Resources** — Application-controlled data endpoints (e.g., \`file://config.json\`, \`db://users/schema\`). Think of these as GET endpoints the host can read.
- **Prompts** — Reusable prompt templates with arguments, exposed as slash commands or quick actions.

## Why This Is a Paradigm Shift

The real power isn't connecting Claude to one tool — it's **composability**. A single Claude session can connect to multiple MCP servers simultaneously. Now Claude can query your database, check a GitHub PR, and read local files — all in a single conversation, with zero custom integration code between them.

## Transport Mechanisms

MCP supports two transport layers:

- **stdio** — Server runs as a subprocess. Host communicates via stdin/stdout. Best for local tools, CLI integrations, and development.
- **SSE (Server-Sent Events)** — Server runs as an HTTP service. Supports remote connections, authentication, and multi-tenant deployments. This is your production transport.

The protocol handles capability negotiation, so clients and servers agree on supported features at connection time.`,
    takeaways: [
      "MCP is a JSON-RPC 2.0 protocol that standardizes how AI models connect to external tools, resources, and prompts — eliminating custom integration code",
      "The architecture separates Hosts (user-facing apps), Clients (protocol handlers), and Servers (capability providers) for clean separation of concerns",
      "Three primitives — Tools (model-invoked actions), Resources (data endpoints), and Prompts (reusable templates) — cover virtually every integration pattern",
      "Transport flexibility (stdio for local, SSE for remote) means the same server code works in development and production with minimal changes",
    ],
    exercise:
      "Map out 5 tools, 3 resources, and 2 prompts you would expose via MCP for a business you currently work with. For each tool, define the name, description, and input schema. For each resource, define the URI pattern.",
  },
  "03-2": {
    title: "Building your first MCP server",
    duration: "9 min read",
    content: `## Setting Up the MCP SDK

Install the official TypeScript SDK and initialize a server:

\`\`\`bash
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D typescript @types/node
\`\`\`

The \`McpServer\` class is your entry point. It handles protocol negotiation, message routing, and capability advertisement automatically.

## Building a Complete Server

Here's a production-quality MCP server that manages a task system:

\`\`\`typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "task-manager",
  version: "1.0.0",
});

// Tool: Create a task
server.tool(
  "create_task",
  "Create a new task with title and priority",
  {
    title: z.string().describe("Task title"),
    priority: z.number().min(1).max(5).describe("Priority 1-5"),
  },
  async ({ title, priority }) => {
    const id = crypto.randomUUID();
    const task = { id, title, status: "pending", priority };
    tasks.set(id, task);
    return {
      content: [{ type: "text", text: JSON.stringify(task, null, 2) }],
    };
  }
);

// Resource: List all tasks
server.resource(
  "tasks-list",
  "tasks://all",
  { description: "All current tasks" },
  async () => ({
    contents: [{
      uri: "tasks://all",
      mimeType: "application/json",
      text: JSON.stringify([...tasks.values()], null, 2),
    }],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
\`\`\`

## Registering With Claude Desktop

Add your server to \`claude_desktop_config.json\`:

\`\`\`json
{
  "mcpServers": {
    "task-manager": {
      "command": "node",
      "args": ["--loader", "ts-node/esm", "/absolute/path/to/server.ts"]
    }
  }
}
\`\`\`

## Key Patterns to Note

- **Zod schemas** define your tool inputs — MCP uses these to generate JSON Schema for Claude's function calling
- **\`isError: true\`** in the return signals a tool failure without crashing the server
- **Resources are read-only** — they provide data context, not mutation capability
- **Prompts are templates** — they inject pre-built conversation starters into the host UI`,
    takeaways: [
      "McpServer from @modelcontextprotocol/sdk handles all protocol complexity — you just define tools, resources, and prompts with simple method calls",
      "Zod schemas on .tool() provide both runtime validation and automatic JSON Schema generation that Claude uses for structured function calling",
      "Return { isError: true } from tools to signal failures gracefully — the server stays running and Claude can retry or adjust its approach",
      "StdioServerTransport is the fastest path to local development — add your server to claude_desktop_config.json and restart Claude Desktop to test",
    ],
    exercise:
      "Build a complete MCP server with at least 3 tools that wraps an API you use daily (GitHub, Linear, Notion, Slack, or your CRM). Include proper Zod validation, error handling with isError, and at least one resource endpoint. Test it with Claude Desktop.",
  },
  "03-3": {
    title: "Custom tools: database, API, and file system access",
    duration: "9 min read",
    content: `## Database Tools: Giving Claude SQL Access

The highest-leverage MCP pattern is giving Claude direct, controlled database access. Here's a PostgreSQL tool with query safety:

\`\`\`typescript
server.tool(
  "query_database",
  "Execute a read-only SQL query against the production database",
  { query: z.string().describe("SQL query (SELECT only)") },
  async ({ query }) => {
    const normalized = query.trim().toUpperCase();
    if (!normalized.startsWith("SELECT")) {
      return {
        content: [{ type: "text", text: "Only SELECT queries are allowed" }],
        isError: true,
      };
    }
    const client = await pool.connect();
    try {
      await client.query("SET statement_timeout = '5000'");
      await client.query("BEGIN TRANSACTION READ ONLY");
      const result = await client.query(query);
      await client.query("COMMIT");
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            rowCount: result.rowCount,
            rows: result.rows.slice(0, 100),
            truncated: (result.rowCount ?? 0) > 100,
          }, null, 2),
        }],
      };
    } finally {
      client.release();
    }
  }
);
\`\`\`

Key safety measures: read-only transactions, statement timeouts, row limits, and query prefix validation.

## API Bridge Tools

Wrap any REST API as MCP tools with proper error propagation:

\`\`\`typescript
server.tool(
  "search_customers",
  "Search CRM for customers by name, email, or company",
  {
    query: z.string().describe("Search term"),
    limit: z.number().default(10).describe("Max results"),
  },
  async ({ query, limit }) => {
    const res = await fetch(\`https://api.crm.com/v2/customers/search?\${new URLSearchParams({ q: query, limit: String(limit) })}\`, {
      headers: { Authorization: \`Bearer \${process.env.CRM_API_KEY}\` },
    });
    if (!res.ok) {
      return { content: [{ type: "text", text: \`API error: \${res.status}\` }], isError: true };
    }
    return { content: [{ type: "text", text: JSON.stringify(await res.json(), null, 2) }] };
  }
);
\`\`\`

## File System Tools With Boundaries

\`\`\`typescript
const ALLOWED_ROOT = "/projects/workspace";

server.tool(
  "read_project_file",
  "Read a file from the project workspace",
  { filePath: z.string().describe("Relative path from workspace root") },
  async ({ filePath }) => {
    const resolved = path.resolve(ALLOWED_ROOT, filePath);
    if (!resolved.startsWith(ALLOWED_ROOT)) {
      return { content: [{ type: "text", text: "Path traversal blocked" }], isError: true };
    }
    const text = await readFile(resolved, "utf-8");
    return { content: [{ type: "text", text }] };
  }
);
\`\`\`

## Tool Design Principles

- **Granular over monolithic** — \`search_customers\` + \`get_customer\` + \`update_customer\` beats one \`manage_customers\` tool
- **Rich descriptions** — Claude uses descriptions to decide when and how to call them
- **Fail loudly** — Always return \`isError: true\` with descriptive messages
- **Limit output size** — Truncate large results and tell Claude they were truncated`,
    takeaways: [
      "Database tools need defense in depth: read-only transactions, statement timeouts, row limits, and query validation",
      "API bridge tools should propagate real error messages with isError so Claude can reason about failures and retry",
      "File system tools must validate resolved paths against an allowed root directory to prevent path traversal attacks",
      "Design granular, single-purpose tools with rich descriptions rather than monolithic multi-action tools",
    ],
    exercise:
      "Build a database MCP server that connects to a real database (SQLite is fine). Implement 4 tools: query (read-only SELECT), list_tables, describe_table, and get_sample_rows. Add a resource that exposes the full schema. Test by having Claude analyze your data.",
  },
  "03-4": {
    title: "Deploying MCP servers in production",
    duration: "8 min read",
    content: `## From stdio to SSE: Production Transport

Local development uses stdio. Production uses SSE (Server-Sent Events) over HTTP, which enables remote connections, authentication, and horizontal scaling.

\`\`\`typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import express from "express";

const app = express();
const server = new McpServer({ name: "prod-server", version: "1.0.0" });

function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token || !isValidToken(token)) return res.status(401).json({ error: "Unauthorized" });
  next();
}

let transport;
app.get("/sse", authenticate, (req, res) => {
  transport = new SSEServerTransport("/messages", res);
  server.connect(transport);
});
app.post("/messages", authenticate, (req, res) => {
  transport.handlePostMessage(req, res);
});
app.listen(3001);
\`\`\`

## Production Checklist

**Infrastructure:**
- Deploy behind a reverse proxy with TLS termination
- Implement rate limiting per API key — a runaway agent can make thousands of tool calls
- Add request/response logging with correlation IDs
- Set resource limits: memory caps, CPU quotas, connection pool maximums

**Security:**
- API key or OAuth2 authentication on both /sse and /messages endpoints
- Input sanitization beyond Zod validation — especially for SQL and file path tools
- Principle of least privilege: each API key maps to specific permissions
- Audit logging: record every tool invocation with user, input, output, and timestamp

**Reliability:**
\`\`\`typescript
app.get("/health", (req, res) => {
  const checks = { database: pool.totalCount > 0, uptime: process.uptime() };
  res.status(checks.database ? 200 : 503).json(checks);
});

process.on("SIGTERM", async () => {
  await server.close();
  await pool.end();
  process.exit(0);
});
\`\`\`

**Monitoring:**
- Track tool invocation latency (p50, p95, p99) per tool
- Alert on error rate spikes
- Monitor connection count — each active Claude session holds an SSE connection
- Log token usage if your tools return large payloads`,
    takeaways: [
      "SSE transport enables remote, authenticated, multi-tenant MCP deployments — swap StdioServerTransport for SSEServerTransport and wrap with Express middleware",
      "Every production MCP server needs authentication, rate limiting, audit logging, and graceful shutdown",
      "Monitor tool invocation latency and error rates per tool — agent loops can amplify small performance issues into major incidents",
      "Multi-tenant isolation requires passing user context through the session and scoping every query to the authenticated user",
    ],
    exercise:
      "Take your database MCP server and deploy it as an SSE server with Express. Add Bearer token authentication, a health check endpoint, request logging, and graceful shutdown. Connect Claude Desktop to it via the SSE URL instead of stdio.",
  },
  "04-1": {
    title: "Building autonomous agents with the Agent SDK",
    duration: "9 min read",
    content: `## What the Agent SDK Is

The Claude Agent SDK is Anthropic's framework for building autonomous AI agents that can reason, plan, and execute multi-step tasks using tools. Unlike raw API calls where you manage the conversation loop, the Agent SDK handles the agentic loop internally — Claude decides which tools to call, processes results, and continues until the task is complete.

## Your First Agent

\`\`\`typescript
import { Agent, run } from "@anthropic-ai/claude-agent-sdk";

const researchAgent = new Agent({
  name: "Research Agent",
  model: "claude-sonnet-4-20250514",
  instructions: \`You are a research agent. When given a topic, you:
1. Search for relevant information using available tools
2. Synthesize findings into a structured report
3. Cite all sources with URLs
Never fabricate information. If you cannot find data, say so explicitly.\`,
  tools: [webSearchTool, readUrlTool, saveReportTool],
});

const result = await run(researchAgent, {
  input: "Analyze the competitive landscape for MCP-based developer tools",
  maxTurns: 25,
});

console.log(result.output);
\`\`\`

The \`run()\` function starts the agentic loop. Claude receives the input, examines available tools, decides what to do, calls tools, processes results, and repeats until it produces a final response or hits \`maxTurns\`.

## Defining Tools for Agents

\`\`\`typescript
import { tool } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";

const webSearchTool = tool({
  name: "web_search",
  description: "Search the web for current information on any topic.",
  parameters: z.object({
    query: z.string().describe("Search query"),
    numResults: z.number().default(5),
  }),
  execute: async ({ query, numResults }) => {
    const results = await searchAPI(query, numResults);
    return JSON.stringify(results);
  },
});
\`\`\`

## The Agentic Loop Explained

Every \`run()\` iteration follows this cycle:

1. Claude receives context (instructions + history + tool results)
2. Claude reasons about next steps
3. Claude either returns a final answer OR calls one or more tools
4. Tool results are appended to context
5. Loop back to step 1

This continues until Claude produces a response without tool calls (task complete) or \`maxTurns\` is reached.`,
    takeaways: [
      "The Agent SDK manages the entire agentic loop — you define instructions and tools, and run() handles reasoning, tool calling, and iteration",
      "Always set maxTurns to prevent runaway agents — without it, a confused agent can loop indefinitely burning tokens",
      "Model selection is critical: Sonnet for speed-sensitive tasks, Opus for complex multi-step reasoning where accuracy matters more than latency",
      "The onToolCall and onToolResult callbacks give you real-time visibility into agent behavior for logging and debugging",
    ],
    exercise:
      "Build a research agent that takes a company name as input, uses web search and URL reader tools to gather information, then produces a structured competitive analysis report. Set maxTurns to 20 and implement onToolCall logging.",
  },
  "04-2": {
    title: "Tool design: giving agents real-world capabilities",
    duration: "9 min read",
    content: `## Tool Design Is Agent Design

The tools you give an agent define the boundaries of what it can accomplish. Poorly designed tools create confused agents that loop and fail. Well-designed tools create agents that solve problems efficiently.

## The Five Rules of Agent Tool Design

### 1. Single Responsibility, Rich Description

\`\`\`typescript
// GOOD: Focused tools with detailed descriptions
const searchContacts = tool({
  name: "search_contacts",
  description: \`Search for contacts in the CRM by name, email, or company.
Returns up to 20 matching contacts. Use this BEFORE creating a contact to check for duplicates.
If no results found, returns an empty array — do NOT retry with the same query.\`,
  parameters: z.object({
    query: z.string().describe("Search term — matches against name, email, and company"),
    tag: z.string().optional().describe("Filter by tag (e.g., 'lead', 'customer')"),
  }),
  execute: async ({ query, tag }) => { /* ... */ },
});
\`\`\`

### 2. Return Structured, Actionable Data

Include \`availableActions\` in responses so the agent knows what it can do next.

### 3. Make Errors Informative and Recoverable

\`\`\`typescript
execute: async ({ email, subject, body }) => {
  try {
    await sendEmail(email, subject, body);
    return JSON.stringify({ success: true });
  } catch (err) {
    if (err.code === "INVALID_EMAIL") {
      return JSON.stringify({
        error: "Invalid email address",
        suggestion: "Use search_contacts to find the correct email",
      });
    }
    throw err;
  }
},
\`\`\`

### 4. Provide Confirmation Tools for Destructive Actions

Build preview/confirm pairs: \`preview_bulk_update\` shows what would change, \`execute_bulk_update\` applies it.

### 5. Design Tool Chains, Not Islands

Think about how tools connect. An agent working a sales pipeline needs: \`search_contacts\` → \`get_contact_details\` → \`get_deal_history\` → \`update_deal_stage\` → \`send_followup_email\`. Each tool's output should naturally inform the next tool's input.`,
    takeaways: [
      "Tool descriptions are prompts — include expected behavior, edge cases, return formats, and when NOT to use the tool",
      "Return structured data with available next actions so the agent can chain tools effectively",
      "Error responses should include recovery suggestions that reference other available tools",
      "Design tools as chains, not islands: each tool's output should contain identifiers needed for the next logical tool",
    ],
    exercise:
      "Design and implement a complete tool suite (minimum 6 tools) for a sales pipeline agent. Include: search_leads, get_lead_details, qualify_lead, update_lead_stage, draft_outreach_email, and log_activity. Every tool should return structured data with availableActions.",
  },
  "04-3": {
    title: "Multi-agent orchestration and handoffs",
    duration: "9 min read",
    content: `## Why Multi-Agent?

Single agents hit a ceiling. As you add more tools and broader instructions, performance degrades. Multi-agent architectures solve this by giving each agent a focused role with a limited toolset.

## Agent Handoffs

The Agent SDK supports direct handoffs between agents:

\`\`\`typescript
const salesAgent = new Agent({
  name: "Sales Agent",
  model: "claude-sonnet-4-20250514",
  instructions: \`You handle sales inquiries and manage the pipeline.
If a customer asks a technical question, hand off to the Technical Agent.
If a customer needs billing help, hand off to the Billing Agent.\`,
  tools: [searchLeads, qualifyLead, updateDeal],
  handoffs: [technicalAgent, billingAgent],
});

const technicalAgent = new Agent({
  name: "Technical Agent",
  instructions: \`You answer technical implementation questions.
When resolved, hand back to the Sales Agent.\`,
  tools: [searchDocs, readCodebase, generateExample],
  handoffs: [salesAgent],
});
\`\`\`

## Orchestration Patterns

### Pattern 1: Router
A lightweight agent that classifies and dispatches:

\`\`\`typescript
const routerAgent = new Agent({
  name: "Router",
  model: "claude-haiku-4-5-20251001", // Fast, cheap — just classifying
  instructions: "Analyze the request and hand off to the appropriate agent. Never answer directly.",
  tools: [],
  handoffs: [salesAgent, technicalAgent, billingAgent],
});
\`\`\`

### Pattern 2: Pipeline
Sequential agents where each stage processes and passes forward:

\`\`\`typescript
const research = await run(researchAgent, { input: topic, maxTurns: 15 });
const draft = await run(writerAgent, { input: research.output, maxTurns: 10 });
const final = await run(editorAgent, { input: draft.output, maxTurns: 10 });
\`\`\`

### Pattern 3: Orchestrator-Worker
A lead agent that breaks down complex tasks and delegates to workers.

## Handoff Context Management

Context accumulates across handoffs. After 5-6 handoffs, you may carry 50K+ tokens. Monitor this and summarize when needed.`,
    takeaways: [
      "Multi-agent architectures outperform single agents on complex tasks by giving each agent a focused role and limited toolset",
      "Three core patterns: Router (classify and dispatch), Pipeline (sequential stages), and Orchestrator-Worker (decompose, delegate, synthesize)",
      "Use cheap, fast models like Haiku for routing agents — save expensive models for agents doing substantive reasoning",
      "Monitor context accumulation across handoffs — conversation history grows with each transfer and can degrade performance",
    ],
    exercise:
      "Build a customer support system with 3 specialized agents: a Router (Haiku), Technical Support, and Billing. Test with 10 diverse customer messages and verify correct routing. Track every handoff with the onHandoff callback.",
  },
  "04-4": {
    title: "Guardrails, safety, and monitoring agents in production",
    duration: "9 min read",
    content: `## Why Guardrails Are Non-Negotiable

An autonomous agent with tools is software that writes its own control flow at runtime. Without guardrails, a single bad reasoning step can send emails to wrong people, delete production data, or leak sensitive information.

## Input Guardrails

Validate what goes into the agent before it starts reasoning:

\`\`\`typescript
const piiGuardrail = {
  name: "PII Detection",
  execute: async (input) => {
    const patterns = {
      ssn: /\\b\\d{3}-\\d{2}-\\d{4}\\b/,
      creditCard: /\\b\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}\\b/,
    };
    const violations = Object.entries(patterns)
      .filter(([, regex]) => regex.test(input))
      .map(([type]) => type);
    if (violations.length > 0) {
      return { blocked: true, reason: \`Input contains: \${violations.join(", ")}\` };
    }
    return { blocked: false };
  },
};
\`\`\`

## Tool-Level Guardrails

The most critical layer — control what the agent can actually do:

\`\`\`typescript
const sendEmail = tool({
  name: "send_email",
  parameters: z.object({ to: z.string().email(), subject: z.string(), body: z.string() }),
  execute: async ({ to, subject, body }) => {
    // Rate limit: max 10 emails per agent run
    emailCount++;
    if (emailCount > 10) return JSON.stringify({ error: "Rate limit reached" });
    // Domain allowlist
    const domain = to.split("@")[1];
    if (!ALLOWED_DOMAINS.includes(domain)) {
      return JSON.stringify({ error: \`Cannot send to domain: \${domain}\` });
    }
    // Human-in-the-loop for bulk operations
    if (emailCount > 3) await requestHumanApproval({ to, subject });
    await emailService.send({ to, subject, body });
    return JSON.stringify({ success: true });
  },
});
\`\`\`

## Production Monitoring

\`\`\`typescript
const result = await run(agent, {
  input: userMessage,
  maxTurns: 25,
  onToolCall: (toolName, input) => {
    metrics.increment(\`agent.tool_call.\${toolName}\`);
    // Anomaly detection: flag loops
    if (toolCallHistory.last(5).every(t => t.name === toolName)) {
      alerting.warn(\`Agent stuck in loop calling \${toolName}\`);
    }
  },
});
metrics.gauge("agent.total_turns", result.turns);
metrics.gauge("agent.cost_usd", calculateCost(result.usage));
\`\`\`

## The Human-in-the-Loop Pattern

For high-stakes actions, pause the agent and require human approval. This is not optional — it's the difference between a useful tool and a liability.`,
    takeaways: [
      "Implement guardrails at three layers: input validation, output validation, and tool-level controls (rate limits, allowlists, human approval)",
      "Tool-level rate limiting is your last line of defense — a looping agent can make thousands of API calls in minutes without caps",
      "Detect agent loops by monitoring tool call patterns — if the same tool is called 5+ times consecutively, interrupt",
      "Human-in-the-loop gates for destructive or high-stakes actions are essential — full autonomy is earned incrementally",
    ],
    exercise:
      "Add a complete guardrail system to your sales pipeline agent. Implement: PII detection on input, tool-level rate limits on email sending (max 5 per run), human-in-the-loop approval for deals above $10,000, and monitoring that tracks tool calls and error rates.",
  },
  "05-1": {
    title: "Vision: analyzing images, screenshots, and documents",
    duration: "8 min read",
    content: `## Claude's Vision Capabilities

Claude's vision allows you to pass images directly into the API and receive structured, intelligent analysis. This is not basic OCR — Claude understands spatial relationships, UI layouts, charts, handwriting, and contextual meaning within images.

## Passing Images to the API

Images are sent as content blocks. You have two options: **base64-encoded data** or **URL references**.

\`\`\`typescript
const response = await anthropic.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 1024,
  messages: [{
    role: "user",
    content: [
      {
        type: "image",
        source: { type: "base64", media_type: "image/png", data: imageBase64String },
      },
      {
        type: "text",
        text: "Extract all text from this invoice and return structured JSON with line items, totals, and vendor info.",
      },
    ],
  }],
});
\`\`\`

## Supported Formats and Limits

- **Formats:** PNG, JPEG, GIF, WebP
- **Max size:** 20MB per image
- **Max dimensions:** Images are rescaled if they exceed 1568px on the longest edge
- **Multiple images:** Pass multiple image blocks — Claude reasons across all of them

## Real-World Vision Patterns

**UI Audit Pipeline:** Screenshot your app, ask Claude to identify accessibility issues, broken layouts, or inconsistencies.

**Invoice Processing:** Pass scanned invoices and extract vendor, line items, tax, totals — then validate against your ERP data using tool use.

**Competitive Analysis:** Screenshot competitor dashboards or landing pages. Analyze information architecture, messaging hierarchy, and conversion patterns.

## Token Costs for Images

Image tokens are calculated based on dimensions. A 1568x1568 image costs approximately 1,600 tokens. When processing high volumes, resize images before sending to optimize costs.

## Multi-Image Reasoning

Claude can compare multiple images in a single request — before/after screenshots, multiple pages of a document, or a series of charts.`,
    takeaways: [
      "Images are passed as content blocks using base64 encoding or URL references, supporting PNG, JPEG, GIF, and WebP up to 20MB",
      "Claude understands spatial layout, UI structure, charts, and handwriting — not just raw OCR text extraction",
      "Multi-image reasoning lets you compare screenshots, analyze multi-page documents, or cross-reference visual data in a single request",
      "Image token costs scale with dimensions — resize images before sending to control costs in high-volume pipelines",
    ],
    exercise:
      "Build a script that takes a screenshot of any webpage using Puppeteer, sends it to Claude's vision API, and returns a structured JSON accessibility audit with severity ratings and suggested fixes. Process at least 3 pages.",
  },
  "05-2": {
    title: "Computer use: Claude controlling your desktop",
    duration: "9 min read",
    content: `## What Computer Use Does

Computer use is Claude's most powerful agentic capability — it allows Claude to see your screen, move the mouse, click elements, type text, and execute multi-step workflows on a real desktop environment. Claude visually interprets the screen and decides what to do next.

## Architecture

Computer use works through a tool called \`computer_20250124\`. You provide Claude with this tool, and it returns actions like \`screenshot\`, \`mouse_move\`, \`left_click\`, \`type\`, and \`key\`.

\`\`\`typescript
const response = await anthropic.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 4096,
  tools: [{
    type: "computer_20250124",
    name: "computer",
    display_width_px: 1920,
    display_height_px: 1080,
    display_number: 1,
  }],
  messages: [{
    role: "user",
    content: "Open the browser, go to our CRM, and export last month's sales report as CSV.",
  }],
});
\`\`\`

## The Agentic Loop

Computer use requires a loop: send a message, receive an action, execute it, take a screenshot, send the screenshot back.

## Key Actions

- **\`screenshot\`** — Captures the current screen state
- **\`mouse_move\`** — Moves cursor to (x, y) coordinates
- **\`left_click\` / \`right_click\` / \`double_click\`** — Mouse interactions
- **\`type\`** — Types a string of text
- **\`key\`** — Presses key combos like \`ctrl+s\` or \`Return\`
- **\`scroll\`** — Scrolls up/down at a coordinate

## Safety and Sandboxing

**Never run computer use on your primary machine with sensitive data.** Use Docker containers, VMs, or dedicated sandboxed environments. Claude can click anything it sees — including logout buttons, delete confirmations, or payment forms.

## Production Patterns

Run computer use inside a headless Docker container with a virtual display (Xvfb). Expose the action executor as an API. This lets you queue computer-use jobs and run them in parallel across isolated environments.`,
    takeaways: [
      "Computer use gives Claude visual perception and physical control of a desktop — it screenshots, reasons about the UI, and executes mouse/keyboard actions autonomously",
      "The implementation requires an agentic loop: send message, execute returned action, capture screenshot, feed result back until completion",
      "Always sandbox computer use in Docker containers or VMs — Claude can interact with anything visible on screen",
      "Production deployments use headless containers with virtual displays, enabling parallel execution of computer-use workflows at scale",
    ],
    exercise:
      "Set up a Docker container with Xvfb and a browser. Implement the full computer-use agentic loop that instructs Claude to navigate to a website, fill out a form, and download a file. Include error handling for when Claude gets stuck.",
  },
  "05-3": {
    title: "PDF analysis, data extraction, and multimodal workflows",
    duration: "8 min read",
    content: `## Native PDF Processing

Claude natively processes PDFs as document content blocks — no external parsing libraries needed. Combined with vision and tool use, this enables sophisticated document processing pipelines.

## Sending PDFs to Claude

\`\`\`typescript
import * as fs from "fs";

const pdfBase64 = fs.readFileSync("contract.pdf").toString("base64");

const response = await anthropic.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 4096,
  messages: [{
    role: "user",
    content: [
      {
        type: "document",
        source: { type: "base64", media_type: "application/pdf", data: pdfBase64 },
      },
      {
        type: "text",
        text: "Extract all parties, obligations, payment terms, and termination clauses. Return as structured JSON.",
      },
    ],
  }],
});
\`\`\`

## PDF Processing Capabilities

Claude processes both text-based and scanned PDFs:

- **Multi-page reasoning** — Cross-reference information across hundreds of pages
- **Table extraction** — Understands complex table structures, merged cells, and nested headers
- **Form field detection** — Identifies filled-in form values alongside their labels
- **Layout awareness** — Distinguishes headers, footers, sidebars, and main content

## Multimodal Pipelines

Combine PDFs with tool use for end-to-end automation:

1. Extract structured data from PDF
2. Validate against business rules using tools
3. Store results in your database
4. Flag anomalies for human review

## Batch Processing for Volume

For high-volume document processing, use the **Batch API** for 50% cost reduction. Results are returned within 24 hours — for contracts, invoices, and compliance documents, this is almost always acceptable latency.`,
    takeaways: [
      "PDFs are sent as base64 document content blocks — Claude handles both text-based and scanned PDFs with full layout awareness",
      "Multimodal pipelines combine PDF extraction with tool use for validation, storage, and downstream processing",
      "The Batch API provides 50% cost savings for high-volume document processing with results within 24 hours",
      "Claude reasons across multi-page PDFs, extracting tables, clauses, form fields, and structured data without external parsing",
    ],
    exercise:
      "Build a contract analysis pipeline that accepts a PDF, extracts key terms (parties, payment terms, obligations, termination clauses), validates against a policy ruleset using tool use, and outputs a structured risk assessment JSON. Test with at least 3 contracts.",
  },
  "05-4": {
    title: "Combining capabilities for complex business automation",
    duration: "9 min read",
    content: `## Capability Composition

The true power of Claude emerges when you combine vision, PDFs, tool use, computer use, and extended thinking into unified automation systems. Individual capabilities are useful. Combined capabilities replace entire departments.

## Composition Matrix

- **Vision + Tool Use** — Screenshot a dashboard, extract KPIs, push to Slack
- **PDF + Tool Use** — Process invoices, validate against PO system, trigger payments
- **Computer Use + Vision** — Navigate legacy apps with no API, extract data visually
- **Extended Thinking + Tool Use** — Complex multi-step reasoning with real-time data lookups
- **Batch + PDF** — Process thousands of documents overnight at 50% cost

## Real Architecture: Automated Invoice Processing

\`\`\`typescript
async function processInvoice(pdfBase64) {
  const extraction = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8192,
    thinking: { type: "enabled", budget_tokens: 4096 },
    messages: [{
      role: "user",
      content: [
        { type: "document", source: { type: "base64", media_type: "application/pdf", data: pdfBase64 } },
        { type: "text", text: "Extract vendor, invoice number, line items. Cross-check that line items sum to the stated total." },
      ],
    }],
    tools: [
      lookupVendorTool,
      matchPurchaseOrderTool,
      flagForReviewTool,
      approvePaymentTool,
    ],
  });
  return extraction;
}
\`\`\`

## Orchestration Patterns

**Sequential Pipeline:** PDF extraction → validation → enrichment → storage.

**Parallel Fan-Out:** Split a batch across multiple Claude calls. Aggregate results.

**Human-in-the-Loop:** Claude processes and flags. Humans review flagged items only. 80-95% workload reduction.

## Cost Optimization

- Use **Sonnet** for extraction tasks (fast, accurate for structured data)
- Use **Opus** only for complex reasoning requiring deep analysis
- Use **Batch API** for anything tolerating 24-hour latency
- Cache system prompts with **prompt caching** to cut costs 90%
- Resize images before sending to reduce vision token costs`,
    takeaways: [
      "Capability composition — combining vision, PDFs, tools, computer use, and thinking — is where Claude replaces entire manual workflows",
      "Production architectures use sequential pipelines, parallel fan-out, and human-in-the-loop patterns",
      "Cost optimization across combined capabilities requires strategic model selection, batch processing, prompt caching, and image resizing",
      "Human-in-the-loop designs where Claude processes everything and humans review only flagged edge cases reduce workload by 80-95%",
    ],
    exercise:
      "Design and implement a complete business automation combining at least 3 Claude capabilities. Example: expense report system that receives receipt photos (vision), matches to credit card statements (PDF), validates against company policy (tool use + thinking), and generates an approval-ready report.",
  },
  "06-1": {
    title: "Designing AI systems that handle millions of requests",
    duration: "9 min read",
    content: `## Scaling Claude to Production

Scaling from prototype to production means understanding rate limits, batching strategies, caching layers, and architectural patterns that maintain reliability under load.

## Understanding Rate Limits

Anthropic enforces rate limits at two levels:

- **Requests per minute (RPM)** — How many API calls you can make
- **Tokens per minute (TPM)** — Total input + output tokens consumed

Rate limits increase across usage tiers. You can request tier upgrades through the Anthropic console.

\`\`\`typescript
async function callWithRetry(params, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await anthropic.messages.create(params);
    } catch (error) {
      if (error.status === 429) {
        const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
        await new Promise(r => setTimeout(r, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
\`\`\`

## Architecture Patterns at Scale

**Request Queue + Worker Pool:** Push requests to a queue (SQS, Redis). Workers pull and process. Decouples ingestion from processing.

**Tiered Model Routing:** Route simple requests to Haiku, moderate to Sonnet, complex to Opus. Build a classifier to determine complexity.

\`\`\`typescript
function selectModel(complexity) {
  if (complexity === "low") return "claude-haiku-4-5-20251001";
  if (complexity === "high") return "claude-opus-4-6-20250620";
  return "claude-sonnet-4-6-20250514";
}
\`\`\`

**Response Caching:** Cache Claude's responses for identical inputs. Use semantic hashing. This reduces API calls 30-60% for support workloads.

## Prompt Caching for Cost and Latency

Cached tokens cost 90% less. Mark shared system prompts with \`cache_control: { type: "ephemeral" }\`.

## Batch API for Async Workloads

50% cost reduction. Use for nightly reports, document queues, data enrichment — anything not real-time.`,
    takeaways: [
      "Rate limits operate on both RPM and TPM, scaling across usage tiers — design with exponential backoff for 429s",
      "Prompt caching reduces costs by 90% on shared system prompts — enable on every production deployment",
      "The Batch API provides 50% cost savings for workloads tolerating up to 24-hour latency",
      "Tiered model routing (Haiku/Sonnet/Opus) optimizes both cost and latency across millions of requests",
    ],
    exercise:
      "Build a production-grade request pipeline with: a queue, worker pool with retry logic, tiered model routing, prompt caching, and a dashboard tracking cost per request, latency percentiles, and cache hit rates.",
  },
  "06-2": {
    title: "Security, compliance, and data privacy with Claude",
    duration: "8 min read",
    content: `## Anthropic's Security Foundation

- **SOC 2 Type II** certified
- **API data is not used for model training**
- **Data retention:** 30 days for abuse monitoring, then deleted (enterprise: custom retention)
- **Encryption:** TLS 1.2+ in transit, AES-256 at rest

## Data Privacy by Design

Never send raw PII when you can avoid it:

\`\`\`typescript
function anonymize(text, entities) {
  let anonymized = text;
  const mapping = {};
  entities.forEach((entity, i) => {
    const placeholder = \`[ENTITY_\${i}]\`;
    mapping[placeholder] = entity.value;
    anonymized = anonymized.replace(entity.value, placeholder);
  });
  return { anonymized, mapping };
}

// Send anonymized text to Claude, re-identify in the response
function reidentify(text, mapping) {
  let result = text;
  for (const [placeholder, value] of Object.entries(mapping)) {
    result = result.replaceAll(placeholder, value);
  }
  return result;
}
\`\`\`

## Claude for Enterprise

- **SSO/SAML** integration
- **Admin console** with user management and usage monitoring
- **Audit logs** for every interaction
- **Custom data retention** policies (including zero retention)
- **Dedicated capacity** for guaranteed availability
- **Role-based access control**

## Compliance Frameworks

| Requirement | How Claude Addresses It |
|---|---|
| GDPR | Data processing agreements, right to deletion, EU hosting |
| HIPAA | BAA available for enterprise, PHI handling controls |
| SOX | Audit logs, access controls, separation of duties |
| PCI DSS | Tokenize card data before sending |

## Production Guardrails

Layer your own safety on top:
- **Input validation** — Reject requests containing sensitive data patterns
- **Output filtering** — Scan responses before returning to users
- **Usage monitoring** — Alert on anomalous patterns
- **Circuit breakers** — Disable AI features if error rates spike`,
    takeaways: [
      "Anthropic holds SOC 2 Type II certification and does not use API data for model training — 30-day retention then deleted",
      "Anonymize PII before sending to Claude and re-identify in responses — gold standard for regulated industries",
      "Claude for Enterprise adds SSO, audit logs, custom retention, dedicated capacity, and role-based access control",
      "Layer your own guardrails — input validation, output filtering, anomaly detection, and circuit breakers — for defense in depth",
    ],
    exercise:
      "Implement a security middleware layer that: scans input for PII (SSN, credit card, email) and anonymizes, logs every API call with user ID and timestamp, implements per-user rate limiting, and scans output for leaked sensitive patterns.",
  },
  "06-3": {
    title: "Team workflows: Claude in engineering, sales, and ops",
    duration: "8 min read",
    content: `## Specialized Agents Per Department

Claude is not just a developer tool. When deployed across departments with role-specific prompts, tools, and guardrails, it becomes an organizational force multiplier.

## Engineering Workflows

**Code Review Agent:** Connect Claude to your Git provider. On every PR, Claude reviews the diff and posts inline comments.

\`\`\`typescript
const codeReviewSystem = \`You are a senior engineer reviewing pull requests.
Focus on: security vulnerabilities, performance issues, error handling gaps.
Be specific — reference line numbers. Skip stylistic issues handled by linters.\`;
\`\`\`

**Incident Response:** When PagerDuty fires, Claude pulls logs, analyzes stack traces, suggests root causes, and drafts runbook steps.

## Sales Workflows

**Pre-Call Research:** Claude pulls the prospect's website, news, LinkedIn, and CRM history to generate a brief with talking points and objection predictions.

**Proposal Generation:** Feed Claude your template, requirements from CRM notes, and pricing model. It generates a first draft.

## Operations Workflows

**Document Processing:** Invoices, purchase orders, compliance forms — automated.

**Reporting:** Connect Claude to your data warehouse via MCP. Teams ask natural language questions and get formatted summaries.

**Knowledge Base Agent:** Claude answers questions from your internal docs, SOPs, and wikis with sourced answers.

## Deployment Pattern

\`\`\`typescript
const agents = {
  engineering: { systemPrompt: engPrompt, tools: engTools, model: "claude-sonnet-4-20250514" },
  sales: { systemPrompt: salesPrompt, tools: salesTools, model: "claude-sonnet-4-20250514" },
  ops: { systemPrompt: opsPrompt, tools: opsTools, model: "claude-haiku-4-5-20251001" },
};
\`\`\`

Each team gets a specialized agent with appropriate permissions, tools, and guardrails.`,
    takeaways: [
      "Build role-specific agents with tailored system prompts, tools, and model selection — never deploy a generic chatbot across departments",
      "Engineering workflows include automated code review, incident analysis, and documentation generation",
      "Sales workflows use Claude for pre-call research, proposal generation, and CRM enrichment — reducing prep time 70-80%",
      "Operations workflows automate document processing, natural language reporting, and knowledge base Q&A",
    ],
    exercise:
      "Build three role-based agents: an engineering agent that reviews diffs, a sales agent that generates pre-call briefs from a company name, and an ops agent that answers HR policy questions from a knowledge base. Each needs its own system prompt, tools, and model.",
  },
  "06-4": {
    title: "Building an AI-first company from the ground up",
    duration: "9 min read",
    content: `## What AI-First Means

An AI-first company does not bolt AI onto existing processes. It designs every workflow, every role, and every system with Claude as a core primitive.

## The AI-First Stack

- **User Interfaces** — Chat, dashboards, APIs, Slack integrations
- **Orchestration Layer** — Agent SDK, routing, guardrails
- **Claude API Layer** — Sonnet/Opus/Haiku with caching
- **MCP Tool Layer** — CRM, database, APIs, file systems
- **Data & Knowledge Layer** — Vector DB, documents, policies

## Organizational Design

Instead of hiring 5 customer support reps, hire 1 support lead managing a Claude-powered system handling 90% of tickets. Instead of 3 data analysts, hire 1 analytics engineer who builds Claude-powered dashboards anyone can query.

**Key roles in an AI-first company:**
- **AI Systems Architect** — Designs orchestration, selects models, optimizes costs
- **Prompt Engineers** — Craft system prompts as critical business logic (version controlled, tested)
- **Domain Experts** — Provide knowledge and judgment that Claude applies at scale
- **Integration Engineers** — Build and maintain MCP servers and tool connections

## Building the Moat

1. **Proprietary data loops** — Every interaction improves your prompts and workflows
2. **Custom MCP servers** — Your tool ecosystem deeply integrated with your domain
3. **Institutional prompt knowledge** — System prompts encode years of expertise
4. **Speed** — Ship features in hours that competitors take weeks to build

## Implementation Roadmap

**Month 1-2:** Core infrastructure — API integration, prompt caching, basic agent for highest-volume workflow.

**Month 3-4:** Expand to 3 departments. Build MCP servers. Implement monitoring.

**Month 5-6:** Multi-agent orchestration, computer use for legacy systems, batch processing.

**Month 7+:** Optimize. A/B test prompts. Build feedback loops. Track cost per output unit.

## The Mindset Shift

Stop asking "where can we use AI?" Start asking "why would a human do this?" If the answer is not judgment, relationships, or creativity — Claude should be doing it.`,
    takeaways: [
      "AI-first companies design every workflow with Claude as a core primitive — a structural advantage, not just a tooling choice",
      "The org model shifts from large teams doing manual work to small teams of experts managing AI-powered systems at 10x throughput",
      "Competitive moats come from proprietary data loops, custom MCP integrations, institutional prompt knowledge, and shipping speed",
      "Implementation should be phased: start with highest-volume workflow, expand to departments, add multi-agent orchestration, then optimize",
    ],
    exercise:
      "Create a complete AI-first company blueprint: technology stack with specific Claude models per layer, org chart comparing AI-augmented vs traditional roles with cost analysis, implementation roadmap with monthly milestones, list of MCP servers to build, and metrics dashboard to track.",
  },
};

export const aiMasteryQuizzes: CourseQuizzes = {
  "01": {
    title: "Claude Code Mastery Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the primary advantage of Claude Code's CLAUDE.md file?",
        options: [
          "It provides persistent project-specific instructions and context that Claude reads automatically on every session",
          "It stores API keys and authentication credentials for Claude",
          "It replaces the need for a .gitignore file in your repository",
          "It compiles markdown into executable code for Claude to run",
        ],
        correctIndex: 0,
      },
      {
        type: "mc",
        question:
          "When Claude Code executes terminal commands, what safety mechanism is in place by default?",
        options: [
          "All commands run in a Docker container automatically",
          "Commands are logged to a remote server for audit",
          "Claude asks for user approval before running commands that modify files or execute code",
          "Commands are limited to read-only operations unless you pass --unsafe",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe a real-world workflow where Claude Code's ability to read, edit, and execute across an entire codebase provides a significant advantage over traditional AI chat assistants. Include what specific capabilities make this possible.",
        minLength: 50,
      },
    ],
  },
  "02": {
    title: "Claude API Deep Dive Quiz",
    questions: [
      {
        type: "mc",
        question:
          "When using extended thinking with the Claude API, what is the correct way to configure it?",
        options: [
          "Set `thinking: true` in the request body",
          "Add a `think_first: true` header to the HTTP request",
          "Set `thinking: { type: 'enabled', budget_tokens: N }` where N is the max thinking tokens",
          "Append '[THINK]' to the beginning of your system prompt",
        ],
        correctIndex: 2,
      },
      {
        type: "mc",
        question:
          "What is the cost benefit of using prompt caching with the Claude API?",
        options: [
          "Cached prompts are free with no additional cost",
          "Cached prompt tokens cost 90% less than uncached tokens on subsequent requests",
          "Caching doubles your rate limit allocation automatically",
          "Cached prompts bypass content moderation for faster responses",
        ],
        correctIndex: 1,
      },
      {
        type: "short",
        question:
          "Explain how Claude's tool use (function calling) works end-to-end, including what happens when Claude decides to call a tool, how results are returned, and how the agentic loop handles multi-step tool use workflows.",
        minLength: 50,
      },
    ],
  },
  "03": {
    title: "MCP Servers Quiz",
    questions: [
      {
        type: "mc",
        question:
          "In the Model Context Protocol (MCP) architecture, what are the three core primitives that an MCP server can expose?",
        options: [
          "Functions, variables, and constants",
          "Tools, resources, and prompts",
          "Endpoints, schemas, and handlers",
          "Actions, queries, and subscriptions",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "What transport protocols does MCP support for communication between clients and servers?",
        options: [
          "HTTP/REST and GraphQL only",
          "WebSocket and gRPC only",
          "Stdio (standard input/output) and HTTP with Server-Sent Events (SSE)",
          "TCP sockets and UDP datagrams",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe a practical MCP server you would build for a business use case. Include what tools and resources it would expose, how it would connect to external systems, and why MCP is a better approach than hardcoding API calls.",
        minLength: 50,
      },
    ],
  },
  "04": {
    title: "Agent SDK Quiz",
    questions: [
      {
        type: "mc",
        question:
          "In the Claude Agent SDK, what is the purpose of guardrails?",
        options: [
          "They encrypt all data sent to and from the agent",
          "They run validation checks on inputs and outputs to ensure the agent operates within defined safety boundaries",
          "They automatically scale the agent across multiple servers",
          "They provide real-time logging to third-party monitoring tools",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "How does multi-agent orchestration work in the Agent SDK?",
        options: [
          "Multiple Claude API keys are used simultaneously to increase throughput",
          "Agents are defined with specialized roles and can hand off tasks to other agents",
          "The SDK automatically splits every request across three agents for consensus",
          "Multi-agent requires running separate server instances that communicate via REST APIs",
        ],
        correctIndex: 1,
      },
      {
        type: "short",
        question:
          "Design a multi-agent system for a specific business workflow. Describe the role of each agent, what tools each has access to, how handoffs work, and what guardrails you would implement.",
        minLength: 50,
      },
    ],
  },
  "05": {
    title: "Advanced Capabilities Quiz",
    questions: [
      {
        type: "mc",
        question:
          "When using Claude's computer use capability, what is the correct tool type identifier?",
        options: [
          "desktop_control_v1",
          "computer_20250124",
          "screen_interaction_tool",
          "computer_use_2025_01_24",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "How are PDF documents sent to Claude via the API for analysis?",
        options: [
          "As a URL pointing to a publicly hosted PDF file",
          "As plain text extracted by a third-party parser",
          "As base64-encoded data in a document content block with media_type 'application/pdf'",
          "By uploading to Anthropic's file storage API and referencing the file ID",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe a multimodal pipeline that combines at least three Claude capabilities (vision, PDF analysis, tool use, computer use, extended thinking). Explain each step and what business problem it solves.",
        minLength: 50,
      },
    ],
  },
  "06": {
    title: "Enterprise AI Architecture Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What cost reduction does the Claude Batch API provide compared to standard synchronous API calls?",
        options: [
          "25% cost reduction with results in 1 hour",
          "50% cost reduction with results within 24 hours",
          "75% cost reduction with results within 7 days",
          "90% cost reduction but only for Haiku model requests",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "Regarding data privacy, which statement about Anthropic's API data handling is correct?",
        options: [
          "API data is used to train future Claude models unless you opt out",
          "API inputs and outputs are stored indefinitely for quality assurance",
          "API data is not used for model training, and is retained for 30 days for abuse monitoring then deleted",
          "API data is immediately deleted after the response is generated",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "You are designing an AI system that processes 100,000 customer support tickets per day using Claude. Describe your architecture including model selection, cost optimization, rate limit handling, and how to maintain quality under $5,000/month.",
        minLength: 50,
      },
    ],
  },
};

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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the key advantage of Claude Code maintaining full session context?",
        options: [
          "It can generate code faster than other AI tools",
          "It understands how changes in one file affect other files across the project without re-reading them each time",
          "It automatically deploys code to production after writing it",
        ],
        correctIndex: 1,
        explanation: "Claude Code maintains context across your entire session, meaning when you ask it to refactor a function, it already knows every file that imports it. This cross-file awareness is its core advantage. It doesn't auto-deploy (that requires explicit commands), and speed alone isn't the differentiator — contextual awareness is.",
      },
      {
        question: "When Claude Code receives a complex prompt like building a Stripe webhook handler, what does it do BEFORE writing new code?",
        options: [
          "It asks the user for clarification on every detail",
          "It reads existing files (schema, API routes) to understand patterns and conventions already in use",
          "It generates a project plan document and waits for approval",
        ],
        correctIndex: 1,
        explanation: "Claude Code reads your existing codebase first — your Prisma schema, existing API routes, and conventions — before writing anything. This is the 'read before write' pattern that produces code matching your project's style. It does not ask for clarification on every detail or generate plan documents.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Handling Build Errors

When a build breaks, don't describe the error. Let Claude Code see it:

\`\`\`
> Run npm run build and fix every error and warning
\`\`\`

It will read each TypeScript error, trace it to the source, and fix it with full type awareness. For complex chains of type errors, it resolves them in dependency order — fixing the root cause first, not each symptom individually.

<!-- check:2 -->

## When to Reset Context

Long sessions accumulate context. If Claude Code starts making inconsistent choices, start a fresh session:

\`\`\`bash
claude --resume    # list recent sessions
claude             # fresh session with clean context
\`\`\`

A fresh session with a strong \`CLAUDE.md\` is often better than a stale session with 200 turns of accumulated drift.`,
    checks: [
      {
        question: "What is the key difference between a junior and expert scaffold prompt?",
        options: [
          "Expert prompts are longer and include more adjectives describing desired quality",
          "Expert prompts front-load architectural decisions (framework, database, auth, structure) so Claude Code doesn't have to guess",
          "Expert prompts ask Claude Code to generate multiple options and let you pick",
        ],
        correctIndex: 1,
        explanation: "Expert prompts specify the framework, database, auth strategy, folder structure, and other decisions upfront. This eliminates guesswork and produces production-grade output in one pass. Length alone doesn't help — specificity of decisions is what matters. Generating multiple options wastes time when you already know what you want.",
      },
      {
        question: "What is the correct order of the highest-leverage iterative development pattern?",
        options: [
          "Review, build, test",
          "Build, test, review",
          "Test, review, build",
        ],
        correctIndex: 1,
        explanation: "The pattern is build, test, review. First you write the code, then you verify it works with tests, then you self-review for edge cases and missed scenarios. Reviewing before testing means you're reviewing unverified code. Testing before building makes no sense — there's nothing to test yet.",
      },
      {
        question: "How does Claude Code handle complex chains of TypeScript type errors during a build fix?",
        options: [
          "It fixes each error message individually in the order they appear",
          "It resolves them in dependency order, fixing the root cause first rather than each symptom",
          "It deletes the problematic files and rewrites them from scratch",
        ],
        correctIndex: 1,
        explanation: "Claude Code traces chains of type errors to their root cause and fixes in dependency order. Fixing errors in the order they appear would mean patching symptoms rather than causes, leading to cascading fixes. Deleting and rewriting files is destructive and unnecessary when the issues are specific type errors.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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

<!-- check:2 -->

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
    checks: [
      {
        question: "How does Claude Code handle a rename refactor across a 50-file codebase?",
        options: [
          "It does a simple find-and-replace across all files",
          "It searches every file with Grep, builds a dependency graph, and makes coordinated edits across all files",
          "It renames the model file and asks you to manually update the remaining references",
        ],
        correctIndex: 1,
        explanation: "Claude Code uses Grep to find all references, builds a mental dependency graph, and coordinates edits across every file — schema, queries, types, API routes, tests, and UI. A simple find-and-replace would miss context-dependent renames (like variable names derived from the model). Leaving manual work to you defeats the purpose.",
      },
      {
        question: "What is the best practice for managing large context windows with Claude Code on big projects?",
        options: [
          "Always load the entire codebase into context at the start of every session",
          "Use specific file references, scope requests to modules, and leverage CLAUDE.md for project mapping",
          "Keep all files under 100 lines so they fit easily in context",
        ],
        correctIndex: 1,
        explanation: "Specific instructions ('edit auth middleware in src/middleware/auth.ts'), scoped requests ('refactor the payment module'), and a well-written CLAUDE.md help Claude Code navigate large projects efficiently. Loading everything wastes context. Artificially limiting file size is impractical and unrelated to context management.",
      },
      {
        question: "Why should complex multi-file change prompts use numbered steps?",
        options: [
          "Claude Code requires numbered lists for multi-file operations to function",
          "Numbered steps give Claude Code a clear execution plan it follows sequentially with verification at each stage",
          "Numbered steps make the prompt shorter and save input tokens",
        ],
        correctIndex: 1,
        explanation: "Numbered steps provide a clear execution plan that Claude Code follows in order, verifying each step before moving to the next. This prevents it from attempting everything at once and missing dependencies. Claude Code doesn't require numbered lists — it's a prompting best practice. And numbered steps don't reduce token count.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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

<!-- check:2 -->

## The Full Loop

The expert workflow is:

1. **Build** with Claude Code (features, tests, docs)
2. **Review** with Claude Code (security audit, performance check)
3. **Deploy** with Claude Code (CI/CD, infrastructure, migrations)
4. **Monitor** — this is where you take over (for now)

You're not just using an AI assistant. You're operating a full engineering team from your terminal.`,
    checks: [
      {
        question: "After Claude Code generates a CI/CD pipeline, what should you do before pushing it to your repository?",
        options: [
          "Review the YAML syntax for formatting errors",
          "Have Claude Code run the same CI pipeline commands locally to verify they pass",
          "Push it immediately and fix issues from the CI logs",
        ],
        correctIndex: 1,
        explanation: "The key insight is to use Claude Code to run the CI pipeline commands locally before pushing. This catches failures early without wasting CI minutes or blocking your team. Just reviewing YAML syntax misses actual build/test failures. Pushing and fixing from CI logs is the slow, reactive approach.",
      },
      {
        question: "What should you always include when prompting Claude Code to create a database migration?",
        options: [
          "A request to drop and recreate the table for a clean slate",
          "Backward-compatibility constraints so existing data and the running app won't break during rollout",
          "A request to lock the table during migration to prevent concurrent access",
        ],
        correctIndex: 1,
        explanation: "Prompting with backward-compatibility constraints ensures zero-downtime deployments — existing rows don't break and the app works with both old and new schema. Dropping and recreating tables destroys data. Table locks cause downtime, which is exactly what you're trying to avoid.",
      },
      {
        question: "What is the expert deployment workflow order when using Claude Code?",
        options: [
          "Deploy, build, review, monitor",
          "Build, review, deploy, monitor",
          "Review, deploy, build, monitor",
        ],
        correctIndex: 1,
        explanation: "The correct order is build (features, tests, docs), review (security audit, performance check), deploy (CI/CD, infrastructure, migrations), monitor (observability). Deploying before reviewing skips security and quality checks. Reviewing before building means there is nothing to review.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "Which parameter is the primary control lever for shaping Claude's behavior, tone, and output format?",
        options: [
          "max_tokens — it determines how detailed the response can be",
          "model — different models have different default personalities",
          "system — the system prompt directly controls behavior, tone, and format",
        ],
        correctIndex: 2,
        explanation: "The system prompt is your primary control lever. It directly instructs Claude on how to behave, what tone to use, and how to format output. max_tokens only limits length, not behavior. While models do differ in capability, the system prompt is the parameter you use to actively shape responses.",
      },
      {
        question: "In the tool use (function calling) flow, what happens after Claude returns a tool_use block?",
        options: [
          "Claude automatically executes the function and returns the result",
          "You execute the function yourself, then send the result back as a tool_result message for Claude to synthesize",
          "The API retries the request without tool use enabled",
        ],
        correctIndex: 1,
        explanation: "You execute the function on your side and send the result back as a tool_result message. Claude then uses that result to synthesize a final answer. Claude never executes functions directly — it only decides which function to call and with what arguments. The API does not retry without tools.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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

<!-- check:2 -->

## When to Use Extended Thinking

Use it when the task has **multiple valid approaches** and choosing the right one matters. If you're asking Claude to generate a simple utility function, thinking is overkill. If you're asking it to design a distributed caching strategy for your microservices architecture, thinking is the difference between a generic answer and an answer that actually accounts for your constraints.

The rule of thumb: **if a senior engineer would need 10+ minutes to think through the problem, turn on extended thinking.**`,
    checks: [
      {
        question: "What are the three practical uses of reading Claude's thinking blocks?",
        options: [
          "Caching, batching, and cost optimization",
          "Debugging conclusions, auditing logic chains, and tuning prompts",
          "Rate limiting, load balancing, and error handling",
        ],
        correctIndex: 1,
        explanation: "Thinking blocks let you debug why Claude reached a conclusion, audit the logic chain for high-stakes decisions, and understand where reasoning goes off-track to improve prompts. Caching/batching/cost optimization and rate limiting/load balancing are infrastructure concerns unrelated to thinking output.",
      },
      {
        question: "What happens if you set budget_tokens too high for a simple task?",
        options: [
          "Claude uses all the budget tokens regardless, wasting money",
          "Nothing bad — Claude stops reasoning early when confident and only uses what it needs",
          "The API returns an error for exceeding the budget on simple tasks",
        ],
        correctIndex: 1,
        explanation: "Claude stops reasoning as soon as it's confident in its answer, so a generous budget on a simple task doesn't waste tokens. The budget is an upper bound, not a fixed cost. The API does not error on high budgets — it simply gives Claude room to think as much as needed.",
      },
      {
        question: "When streaming with extended thinking, how do you distinguish between thinking tokens and response tokens?",
        options: [
          "Thinking tokens arrive first as a single block, then response tokens stream afterward",
          "Check event.delta.type — thinking_delta contains reasoning, text_delta contains the visible response",
          "You cannot distinguish them — they arrive interleaved in the same stream",
        ],
        correctIndex: 1,
        explanation: "The stream events include delta types: thinking_delta for internal reasoning and text_delta for the visible response. This lets you handle them differently — for example, hiding thinking from end users or showing it to power users. They do arrive sequentially (thinking first), but the distinguishing mechanism is the delta type, not just ordering.",
      },
    ],
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

<!-- check:0 -->

## Schema Design Principles

Your schema is your contract. Design it like a database schema:

- **Use \`required\` fields aggressively** — optional fields invite missing data
- **Use \`description\` on every property** — Claude uses descriptions to understand intent
- **Use enums for categorical data**: \`{ "type": "string", "enum": ["low", "medium", "high"] }\`
- **Nest objects for complex structures** — flat schemas lose relational meaning

<!-- check:1 -->

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

<!-- check:2 -->

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
    checks: [
      {
        question: "What is the most reliable way to get structured JSON output from Claude?",
        options: [
          "Ask Claude to return JSON in the system prompt and parse the text response",
          "Use tool use with tool_choice forced to a specific tool whose schema matches your desired output",
          "Use a regex to extract JSON from Claude's free-form text response",
        ],
        correctIndex: 1,
        explanation: "Tool use with forced tool_choice guarantees Claude returns data conforming to your schema. Asking for JSON in the system prompt works most of the time but can fail with extra text or malformed JSON. Regex extraction is brittle and breaks on edge cases like nested objects or escaped characters.",
      },
      {
        question: "When designing a tool schema for structured extraction, which practice improves output quality?",
        options: [
          "Keep all properties optional so Claude has flexibility in what it returns",
          "Use required fields aggressively, add descriptions to every property, and use enums for categorical data",
          "Use a single string field and let Claude decide the format",
        ],
        correctIndex: 1,
        explanation: "Required fields prevent missing data, descriptions help Claude understand what each field means, and enums constrain categorical values to valid options. Optional fields invite missing data. A single string field defeats the entire purpose of structured output.",
      },
      {
        question: "What is the role of a vision + structured output extraction pipeline?",
        options: [
          "It converts images to text using OCR, then sends the text to Claude for formatting",
          "It sends images directly to Claude with a forced tool schema, extracting structured data from visual content in one API call",
          "It requires a separate OCR service before Claude can process any image",
        ],
        correctIndex: 1,
        explanation: "Claude processes images natively — no separate OCR step needed. You send the image directly with a forced tool schema, and Claude extracts structured data in a single call. This is more accurate than OCR-then-parse pipelines because Claude understands visual context, layout, and relationships between elements.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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

<!-- check:2 -->

## The Cost Optimization Stack

Layer these strategies for maximum impact:

1. **Model routing**: Right-size every request (biggest savings)
2. **Prompt caching**: Eliminate redundant input processing (90% on cached tokens)
3. **Batching**: Async workloads at 50% cost
4. **Max tokens discipline**: Don't set max_tokens: 4096 when you need 200 tokens
5. **Prompt engineering**: Shorter, clearer prompts = fewer input tokens = lower cost

At production scale, these five layers compound. A system that would cost \$50K/month unoptimized can run at \$3-5K/month with proper cost engineering. That's the difference between a sustainable business and a cash furnace.`,
    checks: [
      {
        question: "Which content types benefit most from prompt caching?",
        options: [
          "Dynamic user messages that change with every request",
          "System prompts, few-shot examples, tool definitions, and document context that are reused across requests",
          "Claude's output responses, which can be cached to avoid regeneration",
        ],
        correctIndex: 1,
        explanation: "Prompt caching works on input prefixes that are reused across requests — system prompts, few-shot examples, tool definitions, and shared document context. Dynamic user messages change every time, so they cannot be cached. Output responses are not cacheable through prompt caching (that would be response caching, a different strategy).",
      },
      {
        question: "What cost reduction does the Message Batches API provide, and when should you use it?",
        options: [
          "90% reduction, use for all requests to maximize savings",
          "50% reduction, use for non-interactive workloads like bulk classification and overnight processing",
          "25% reduction, use only when processing more than 1 million tokens",
        ],
        correctIndex: 1,
        explanation: "The Batches API provides 50% cost reduction for async workloads processed within 24 hours. It is ideal for bulk classification, data processing, and batch analysis that don't need real-time responses. You cannot use it for interactive workloads where users are waiting for responses. It's not 90% (that's prompt caching) or 25%.",
      },
      {
        question: "Why is tiered model routing the single biggest cost lever?",
        options: [
          "Because Opus is the only model accurate enough for production use",
          "Because most requests are simple enough for cheaper models — routing correctly avoids paying Opus prices for Haiku-level tasks",
          "Because using a single model for everything reduces infrastructure complexity",
        ],
        correctIndex: 1,
        explanation: "Most production requests (classification, formatting, simple extraction) can be handled by Haiku at a fraction of Opus's cost. Routing to the cheapest capable model per request can cut costs 60-80%. Opus is not the only production-ready model — Sonnet and Haiku are highly capable for their task classes. A single model simplifies code but wastes money.",
      },
    ],
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

<!-- check:0 -->

## Why This Is a Paradigm Shift

The real power isn't connecting Claude to one tool — it's **composability**. A single Claude session can connect to multiple MCP servers simultaneously. Now Claude can query your database, check a GitHub PR, and read local files — all in a single conversation, with zero custom integration code between them.

<!-- check:1 -->

## Transport Mechanisms

MCP supports two transport layers:

- **stdio** — Server runs as a subprocess. Host communicates via stdin/stdout. Best for local tools, CLI integrations, and development.
- **SSE (Server-Sent Events)** — Server runs as an HTTP service. Supports remote connections, authentication, and multi-tenant deployments. This is your production transport.

The protocol handles capability negotiation, so clients and servers agree on supported features at connection time.`,
    checks: [
      {
        question: "What are the three primitive types that MCP servers expose?",
        options: [
          "Requests, responses, and errors",
          "Tools (model-invoked functions), Resources (data endpoints), and Prompts (reusable templates)",
          "Inputs, outputs, and middleware",
        ],
        correctIndex: 1,
        explanation: "MCP servers expose Tools (functions Claude can invoke, like query_database), Resources (read-only data endpoints the host can access, like file://config.json), and Prompts (reusable templates exposed as slash commands). Requests/responses/errors describe protocol messages, not capability primitives. Inputs/outputs/middleware describe generic software patterns, not MCP-specific concepts.",
      },
      {
        question: "Why is MCP described as collapsing the N-times-M problem into N+M?",
        options: [
          "Because MCP reduces the number of AI models needed from N to 1",
          "Because one standard protocol means each model and each tool only needs one integration instead of custom connectors for every combination",
          "Because MCP batches N requests into M parallel connections",
        ],
        correctIndex: 1,
        explanation: "Without MCP, connecting N models to M tools requires N*M custom integrations. With MCP as a universal protocol, each model implements the protocol once and each tool implements it once, totaling N+M integrations. MCP doesn't reduce the number of models or batch requests — it standardizes the connection layer.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Key Patterns to Note

- **Zod schemas** define your tool inputs — MCP uses these to generate JSON Schema for Claude's function calling
- **\`isError: true\`** in the return signals a tool failure without crashing the server
- **Resources are read-only** — they provide data context, not mutation capability
- **Prompts are templates** — they inject pre-built conversation starters into the host UI`,
    checks: [
      {
        question: "What role do Zod schemas play in an MCP server's .tool() method?",
        options: [
          "They only validate input at runtime and have no other purpose",
          "They provide both runtime validation and automatic JSON Schema generation that Claude uses for function calling",
          "They generate TypeScript types but are not used at runtime",
        ],
        correctIndex: 1,
        explanation: "Zod schemas serve a dual purpose in MCP: they validate inputs at runtime (catching invalid data before your handler runs) and they automatically generate JSON Schema that Claude uses to understand tool parameters during function calling. They are not just runtime-only or types-only — they do both.",
      },
      {
        question: "How do you register a local MCP server with Claude Desktop for testing?",
        options: [
          "Run the server and Claude Desktop automatically discovers it via network scanning",
          "Add an entry to claude_desktop_config.json with the command and args to launch the server",
          "Upload the server code to Anthropic's cloud and connect via API key",
        ],
        correctIndex: 1,
        explanation: "You add your server to claude_desktop_config.json specifying the command (e.g., 'node') and args (path to your server file). Claude Desktop launches the server as a subprocess using stdio transport. There is no automatic discovery — you must configure it explicitly. MCP servers run locally, not on Anthropic's cloud.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Tool Design Principles

- **Granular over monolithic** — \`search_customers\` + \`get_customer\` + \`update_customer\` beats one \`manage_customers\` tool
- **Rich descriptions** — Claude uses descriptions to decide when and how to call them
- **Fail loudly** — Always return \`isError: true\` with descriptive messages
- **Limit output size** — Truncate large results and tell Claude they were truncated`,
    checks: [
      {
        question: "What are the four safety measures the database tool uses to prevent misuse?",
        options: [
          "Authentication, authorization, encryption, and logging",
          "Read-only transactions, statement timeouts, row limits, and query prefix validation",
          "Rate limiting, IP allowlisting, query caching, and connection pooling",
        ],
        correctIndex: 1,
        explanation: "The database tool uses read-only transactions (BEGIN TRANSACTION READ ONLY), statement timeouts (SET statement_timeout = '5000'), row limits (slice results to 100), and query prefix validation (only allow SELECT). These form defense in depth specifically for SQL access. Auth/encryption and rate limiting are important but are separate infrastructure concerns.",
      },
      {
        question: "How does the file system tool prevent path traversal attacks?",
        options: [
          "It blocks any file path containing '..' characters",
          "It resolves the full path with path.resolve() and checks that it starts with the allowed root directory",
          "It only allows reading files that are listed in a pre-approved whitelist",
        ],
        correctIndex: 1,
        explanation: "The tool uses path.resolve() to get the canonical absolute path, then checks it starts with ALLOWED_ROOT. This catches all traversal attempts, including those using symlinks or encoded characters. Checking for '..' is insufficient because there are other traversal techniques. A file whitelist is too rigid for practical use.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the key difference between stdio and SSE transport for MCP servers?",
        options: [
          "stdio is faster than SSE for all use cases",
          "stdio runs the server as a local subprocess via stdin/stdout, while SSE runs as an HTTP service enabling remote connections and authentication",
          "SSE is only for testing; stdio is the production transport",
        ],
        correctIndex: 1,
        explanation: "stdio communicates via stdin/stdout with the server as a subprocess — great for local development. SSE runs as an HTTP service, enabling remote connections, authentication middleware, and multi-tenant deployments — essential for production. Neither is universally faster; they serve different deployment contexts. SSE is the production transport, not stdio.",
      },
      {
        question: "Why is rate limiting per API key critical for production MCP servers?",
        options: [
          "To prevent users from accessing tools they don't have permission for",
          "Because a runaway agent can make thousands of tool calls in minutes, and rate limiting prevents resource exhaustion",
          "To ensure all users get equal response times",
        ],
        correctIndex: 1,
        explanation: "Agents operate in loops and can call tools thousands of times if they get stuck or encounter unexpected behavior. Rate limiting per API key prevents a single runaway agent from exhausting server resources, burning API costs, or overwhelming downstream systems. Permission control is a separate concern (authorization), and equal response times are handled by load balancing.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## The Agentic Loop Explained

Every \`run()\` iteration follows this cycle:

1. Claude receives context (instructions + history + tool results)
2. Claude reasons about next steps
3. Claude either returns a final answer OR calls one or more tools
4. Tool results are appended to context
5. Loop back to step 1

This continues until Claude produces a response without tool calls (task complete) or \`maxTurns\` is reached.`,
    checks: [
      {
        question: "What is the key difference between the Agent SDK and raw Messages API calls for building agents?",
        options: [
          "The Agent SDK uses a different AI model than the Messages API",
          "The Agent SDK manages the agentic loop internally — you define instructions and tools, and it handles reasoning, tool calling, and iteration automatically",
          "The Agent SDK is a cloud-hosted service while the Messages API runs locally",
        ],
        correctIndex: 1,
        explanation: "With raw Messages API calls, you manually manage the conversation loop: send a message, check for tool_use, execute tools, send results back, repeat. The Agent SDK handles all of this automatically via run(). It uses the same Claude models as the Messages API — the difference is the orchestration layer, not the model or deployment.",
      },
      {
        question: "What are the two conditions that stop the agentic loop in run()?",
        options: [
          "When all tools have been called at least once, or when the token budget is exhausted",
          "When Claude produces a response without tool calls (task complete), or when maxTurns is reached",
          "When the user sends a stop signal, or when an error occurs",
        ],
        correctIndex: 1,
        explanation: "The loop ends naturally when Claude returns a response without requesting any tool calls (it considers the task done), or artificially when maxTurns is hit (safety limit). Tools don't all need to be called. Token budget exhaustion would cause an error, not a clean stop. User stop signals are not part of the run() API.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

### 5. Design Tool Chains, Not Islands

Think about how tools connect. An agent working a sales pipeline needs: \`search_contacts\` → \`get_contact_details\` → \`get_deal_history\` → \`update_deal_stage\` → \`send_followup_email\`. Each tool's output should naturally inform the next tool's input.`,
    checks: [
      {
        question: "Why should tool descriptions include information about when NOT to use the tool?",
        options: [
          "To reduce the number of tools the agent has to consider",
          "Because descriptions are prompts — they guide Claude's decision-making on when and how to call each tool, preventing misuse and unnecessary retries",
          "To make the tool list shorter and easier for developers to read",
        ],
        correctIndex: 1,
        explanation: "Tool descriptions function as prompts that Claude reads to decide when and how to use each tool. Including negative guidance (e.g., 'do NOT retry with the same query if no results found') prevents the agent from looping or misusing tools. This is about agent behavior, not about reducing the tool count or developer readability.",
      },
      {
        question: "What is the recommended pattern for handling destructive actions in agent tools?",
        options: [
          "Disable destructive tools entirely and require manual intervention for all writes",
          "Build preview/confirm tool pairs — one tool shows what would change, another applies it",
          "Let the agent execute destructive actions freely but log everything for rollback",
        ],
        correctIndex: 1,
        explanation: "Preview/confirm pairs (like preview_bulk_update and execute_bulk_update) give the agent a safe way to plan destructive actions before executing them. Disabling all writes makes agents useless for real work. Executing freely with logging is dangerous — by the time you review logs, the damage may be irreversible.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Handoff Context Management

Context accumulates across handoffs. After 5-6 handoffs, you may carry 50K+ tokens. Monitor this and summarize when needed.`,
    checks: [
      {
        question: "What happens to a single agent's performance as you add more tools and broader instructions?",
        options: [
          "Performance improves because the agent has more capabilities to choose from",
          "Performance degrades — the agent gets confused with too many options and broader scope",
          "Performance stays the same regardless of tool count",
        ],
        correctIndex: 1,
        explanation: "Single agents hit a ceiling as tools and scope increase. With too many tools, the agent struggles to pick the right one and makes more errors. This is why multi-agent architectures assign each agent a focused role with a limited toolset — specialization improves performance.",
      },
      {
        question: "Why should routing agents use a cheap, fast model like Haiku instead of Opus?",
        options: [
          "Because Haiku is more accurate at classification tasks than Opus",
          "Because routing is a simple classification task — the agent just categorizes and dispatches, so expensive reasoning is wasted",
          "Because Opus cannot be used with the handoffs parameter",
        ],
        correctIndex: 1,
        explanation: "A router agent only classifies the incoming request and hands off to the right specialist — it doesn't do deep reasoning. Haiku handles classification well at a fraction of Opus's cost. Opus is not inherently worse at classification, just unnecessarily expensive for it. All models support handoffs.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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

<!-- check:2 -->

## The Human-in-the-Loop Pattern

For high-stakes actions, pause the agent and require human approval. This is not optional — it's the difference between a useful tool and a liability.`,
    checks: [
      {
        question: "Why are input guardrails important even though Claude won't intentionally misuse sensitive data?",
        options: [
          "Because Claude might accidentally output PII it received in the input, exposing it in logs or responses",
          "Because input guardrails make the API calls cheaper by reducing token count",
          "Because Claude cannot process inputs containing special characters like SSN formats",
        ],
        correctIndex: 0,
        explanation: "Even though Claude won't intentionally misuse PII, sensitive data in the input can end up in responses, logs, cached prompts, or downstream systems. Input guardrails catch and block PII before it enters the pipeline. It's not about cost reduction or character processing limitations — it's about preventing accidental data leakage.",
      },
      {
        question: "What three safeguards does the email tool implement to prevent agent misuse?",
        options: [
          "Spell checking, grammar validation, and tone analysis",
          "Rate limiting (max 10 per run), domain allowlisting, and human-in-the-loop approval for bulk operations",
          "Email encryption, read receipts, and delivery confirmation",
        ],
        correctIndex: 1,
        explanation: "The email tool implements rate limiting (max 10 emails per agent run), domain allowlisting (only send to approved domains), and human-in-the-loop approval when more than 3 emails are sent. These prevent a looping agent from spamming, sending to unauthorized recipients, or executing bulk operations without oversight.",
      },
      {
        question: "How do you detect that an agent is stuck in a loop during production monitoring?",
        options: [
          "Check if the agent has been running for more than 60 seconds",
          "Monitor tool call patterns — if the same tool is called 5+ times consecutively, flag it as a potential loop",
          "Count the total number of API calls and alert if it exceeds 100",
        ],
        correctIndex: 1,
        explanation: "Consecutive identical tool calls are the telltale sign of a loop — the agent keeps trying the same action expecting different results. Time-based checks are unreliable because legitimate complex tasks can take minutes. Total API call counts don't distinguish between productive diverse calls and repetitive loops.",
      },
    ],
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

<!-- check:0 -->

## Real-World Vision Patterns

**UI Audit Pipeline:** Screenshot your app, ask Claude to identify accessibility issues, broken layouts, or inconsistencies.

**Invoice Processing:** Pass scanned invoices and extract vendor, line items, tax, totals — then validate against your ERP data using tool use.

**Competitive Analysis:** Screenshot competitor dashboards or landing pages. Analyze information architecture, messaging hierarchy, and conversion patterns.

## Token Costs for Images

Image tokens are calculated based on dimensions. A 1568x1568 image costs approximately 1,600 tokens. When processing high volumes, resize images before sending to optimize costs.

<!-- check:1 -->

## Multi-Image Reasoning

Claude can compare multiple images in a single request — before/after screenshots, multiple pages of a document, or a series of charts.`,
    checks: [
      {
        question: "What image formats does Claude's vision API support, and what is the maximum file size?",
        options: [
          "PNG and JPEG only, up to 5MB per image",
          "PNG, JPEG, GIF, and WebP, up to 20MB per image",
          "All image formats including SVG and TIFF, up to 50MB per image",
        ],
        correctIndex: 1,
        explanation: "Claude supports PNG, JPEG, GIF, and WebP up to 20MB per image. SVG and TIFF are not supported. The 20MB limit is generous for most use cases but important to know for high-resolution photo processing pipelines.",
      },
      {
        question: "How should you optimize costs when processing high volumes of images through Claude's vision API?",
        options: [
          "Use batch processing to get 50% off — image token costs are the same regardless of dimensions",
          "Resize images before sending — token costs scale with dimensions, so smaller images cost less",
          "Convert all images to JPEG format since it's the cheapest format to process",
        ],
        correctIndex: 1,
        explanation: "Image token costs are calculated based on pixel dimensions, not file size or format. A 1568x1568 image costs approximately 1,600 tokens. Resizing images to smaller dimensions directly reduces token costs. Batch processing helps with overall API costs but doesn't change per-image token pricing. Image format does not affect token cost.",
      },
    ],
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

<!-- check:0 -->

## Safety and Sandboxing

**Never run computer use on your primary machine with sensitive data.** Use Docker containers, VMs, or dedicated sandboxed environments. Claude can click anything it sees — including logout buttons, delete confirmations, or payment forms.

<!-- check:1 -->

## Production Patterns

Run computer use inside a headless Docker container with a virtual display (Xvfb). Expose the action executor as an API. This lets you queue computer-use jobs and run them in parallel across isolated environments.`,
    checks: [
      {
        question: "What is the correct sequence of the computer use agentic loop?",
        options: [
          "Claude takes a screenshot, plans all actions, executes them all at once, then verifies",
          "Send a message to Claude, receive an action, execute it, take a screenshot of the result, send the screenshot back to Claude",
          "Claude receives a list of UI element coordinates, selects the right one, and clicks it directly",
        ],
        correctIndex: 1,
        explanation: "Computer use requires a tight loop: you send context to Claude, it returns one action (click, type, etc.), you execute that action on the real screen, take a screenshot of the new state, and send it back. Claude does not batch actions or receive pre-mapped coordinates — it visually interprets each screenshot to decide the next step.",
      },
      {
        question: "Why should you never run computer use on your primary machine with sensitive data?",
        options: [
          "Because computer use requires administrator privileges that could damage your OS",
          "Because Claude can interact with anything visible on screen — including logout buttons, delete confirmations, payment forms, and sensitive files",
          "Because computer use slows down your machine significantly during execution",
        ],
        correctIndex: 1,
        explanation: "Claude visually interprets the screen and can click anything it sees. If sensitive data, payment forms, admin panels, or delete confirmations are visible, Claude might interact with them unintentionally. Docker containers or VMs provide isolation so that even if Claude takes an unexpected action, the blast radius is contained.",
      },
    ],
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

<!-- check:0 -->

## Multimodal Pipelines

Combine PDFs with tool use for end-to-end automation:

1. Extract structured data from PDF
2. Validate against business rules using tools
3. Store results in your database
4. Flag anomalies for human review

<!-- check:1 -->

## Batch Processing for Volume

For high-volume document processing, use the **Batch API** for 50% cost reduction. Results are returned within 24 hours — for contracts, invoices, and compliance documents, this is almost always acceptable latency.`,
    checks: [
      {
        question: "What types of PDFs can Claude process natively?",
        options: [
          "Only text-based PDFs with standard formatting",
          "Both text-based and scanned PDFs, with full understanding of tables, forms, and layout",
          "Only scanned PDFs through its vision capabilities — text-based PDFs need a separate parser",
        ],
        correctIndex: 1,
        explanation: "Claude processes both text-based and scanned PDFs natively. It understands complex table structures, merged cells, form field values, headers, footers, and multi-page cross-references. No external parsing library is needed for either type.",
      },
      {
        question: "What are the four steps of a multimodal PDF pipeline?",
        options: [
          "Upload, parse, format, download",
          "Extract structured data, validate against business rules using tools, store results, flag anomalies for human review",
          "OCR, spellcheck, translate, summarize",
        ],
        correctIndex: 1,
        explanation: "The multimodal pipeline combines PDF extraction with tool use: extract structured data from the PDF, validate it against business rules using tools, store the validated results in your database, and flag anomalies for human review. This is end-to-end automation with a human-in-the-loop safety net.",
      },
    ],
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

<!-- check:0 -->

## Orchestration Patterns

**Sequential Pipeline:** PDF extraction → validation → enrichment → storage.

**Parallel Fan-Out:** Split a batch across multiple Claude calls. Aggregate results.

**Human-in-the-Loop:** Claude processes and flags. Humans review flagged items only. 80-95% workload reduction.

<!-- check:1 -->

## Cost Optimization

- Use **Sonnet** for extraction tasks (fast, accurate for structured data)
- Use **Opus** only for complex reasoning requiring deep analysis
- Use **Batch API** for anything tolerating 24-hour latency
- Cache system prompts with **prompt caching** to cut costs 90%
- Resize images before sending to reduce vision token costs`,
    checks: [
      {
        question: "Why does the automated invoice processing example use extended thinking alongside tool use?",
        options: [
          "Extended thinking is required whenever tool use is enabled in the API",
          "Extended thinking lets Claude reason through cross-checking line items against the stated total, catching calculation errors before calling validation tools",
          "Extended thinking makes the API response faster by pre-computing tool results",
        ],
        correctIndex: 1,
        explanation: "The invoice processor uses thinking to reason through the math — verifying that line items actually sum to the stated total before triggering downstream tools. This catches subtle calculation errors that would otherwise slip through. Thinking is not required with tool use, and it does not speed up responses.",
      },
      {
        question: "What workload reduction does the human-in-the-loop pattern achieve in production automation?",
        options: [
          "10-20% — humans still review most items but with AI-generated summaries",
          "80-95% — Claude processes everything and humans only review flagged edge cases",
          "100% — Claude handles everything with no human involvement needed",
        ],
        correctIndex: 1,
        explanation: "Human-in-the-loop designs where Claude processes everything and humans review only flagged items reduce workload by 80-95%. This is not 100% automation — edge cases, anomalies, and high-stakes decisions still need human judgment. And it's far more than 10-20% because Claude handles the vast majority of routine cases autonomously.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Prompt Caching for Cost and Latency

Cached tokens cost 90% less. Mark shared system prompts with \`cache_control: { type: "ephemeral" }\`.

## Batch API for Async Workloads

50% cost reduction. Use for nightly reports, document queues, data enrichment — anything not real-time.`,
    checks: [
      {
        question: "What two levels do Anthropic's rate limits operate on?",
        options: [
          "Cost per day and total monthly spend",
          "Requests per minute (RPM) and tokens per minute (TPM)",
          "Concurrent connections and total session duration",
        ],
        correctIndex: 1,
        explanation: "Rate limits enforce both requests per minute (RPM) and tokens per minute (TPM). You can hit either limit independently — for example, many small requests might hit RPM before TPM, while fewer large requests might hit TPM first. Design your retry logic to handle 429 responses from either limit.",
      },
      {
        question: "What are the three architecture patterns for scaling Claude to millions of requests?",
        options: [
          "Load balancing, database sharding, and CDN caching",
          "Request queue + worker pool, tiered model routing, and response caching",
          "Horizontal scaling, vertical scaling, and auto-scaling",
        ],
        correctIndex: 1,
        explanation: "The three patterns are: request queue + worker pool (decouples ingestion from processing), tiered model routing (match task complexity to Haiku/Sonnet/Opus), and response caching with semantic hashing (eliminates redundant API calls). These are AI-specific scaling patterns, not generic infrastructure patterns like load balancing or auto-scaling.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

## Production Guardrails

Layer your own safety on top:
- **Input validation** — Reject requests containing sensitive data patterns
- **Output filtering** — Scan responses before returning to users
- **Usage monitoring** — Alert on anomalous patterns
- **Circuit breakers** — Disable AI features if error rates spike`,
    checks: [
      {
        question: "What is the gold-standard approach for handling PII when using the Claude API in regulated industries?",
        options: [
          "Use Claude's built-in PII detection to automatically redact sensitive data",
          "Anonymize PII before sending to Claude using placeholder tokens, then re-identify placeholders in the response",
          "Only use Claude's enterprise tier, which automatically encrypts all PII",
        ],
        correctIndex: 1,
        explanation: "The anonymize/re-identify pattern replaces real PII with placeholders before sending to the API, then maps them back in the response. This ensures sensitive data never leaves your infrastructure. Claude does not have built-in PII auto-redaction, and enterprise encryption protects data in transit/at rest but doesn't prevent PII from being processed.",
      },
      {
        question: "What is Anthropic's data retention policy for API interactions?",
        options: [
          "Data is retained indefinitely for model improvement",
          "30 days for abuse monitoring, then deleted — API data is not used for model training",
          "No data is retained — everything is deleted immediately after the response is sent",
        ],
        correctIndex: 1,
        explanation: "Anthropic retains API data for 30 days for abuse monitoring purposes, then deletes it. Critically, API data is never used for model training. Enterprise customers can negotiate custom retention policies, including zero retention. Data is not kept indefinitely, nor is it deleted immediately.",
      },
    ],
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

<!-- check:0 -->

## Sales Workflows

**Pre-Call Research:** Claude pulls the prospect's website, news, LinkedIn, and CRM history to generate a brief with talking points and objection predictions.

**Proposal Generation:** Feed Claude your template, requirements from CRM notes, and pricing model. It generates a first draft.

## Operations Workflows

**Document Processing:** Invoices, purchase orders, compliance forms — automated.

**Reporting:** Connect Claude to your data warehouse via MCP. Teams ask natural language questions and get formatted summaries.

**Knowledge Base Agent:** Claude answers questions from your internal docs, SOPs, and wikis with sourced answers.

<!-- check:1 -->

## Deployment Pattern

\`\`\`typescript
const agents = {
  engineering: { systemPrompt: engPrompt, tools: engTools, model: "claude-sonnet-4-20250514" },
  sales: { systemPrompt: salesPrompt, tools: salesTools, model: "claude-sonnet-4-20250514" },
  ops: { systemPrompt: opsPrompt, tools: opsTools, model: "claude-haiku-4-5-20251001" },
};
\`\`\`

Each team gets a specialized agent with appropriate permissions, tools, and guardrails.`,
    checks: [
      {
        question: "Why should you build role-specific agents instead of deploying a single general-purpose chatbot across departments?",
        options: [
          "Because each department needs a different AI model — engineering needs Opus, sales needs Sonnet",
          "Because specialized agents with tailored system prompts, tools, and guardrails outperform generic chatbots at domain-specific tasks",
          "Because Anthropic's pricing requires separate API keys for each department",
        ],
        correctIndex: 1,
        explanation: "Specialization is the key. A code review agent with engineering-specific prompts and git tools performs far better than a generic chatbot asked to review code. Each agent gets the right system prompt, tools, and model for its domain. Model selection is one factor but not the primary reason. Anthropic does not require separate API keys per department.",
      },
      {
        question: "What three types of operations workflows can Claude automate?",
        options: [
          "Hiring, onboarding, and performance reviews",
          "Document processing (invoices, forms), natural language reporting from data warehouses, and knowledge base Q&A from internal docs",
          "Office management, travel booking, and expense approval",
        ],
        correctIndex: 1,
        explanation: "The three ops workflows are: automated document processing (invoices, purchase orders, compliance forms), natural language reporting connected to data warehouses via MCP, and knowledge base agents that answer questions from internal docs and SOPs. These are high-volume, repeatable tasks where AI delivers the most leverage.",
      },
    ],
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

<!-- check:0 -->

## Building the Moat

1. **Proprietary data loops** — Every interaction improves your prompts and workflows
2. **Custom MCP servers** — Your tool ecosystem deeply integrated with your domain
3. **Institutional prompt knowledge** — System prompts encode years of expertise
4. **Speed** — Ship features in hours that competitors take weeks to build

<!-- check:1 -->

## Implementation Roadmap

**Month 1-2:** Core infrastructure — API integration, prompt caching, basic agent for highest-volume workflow.

**Month 3-4:** Expand to 3 departments. Build MCP servers. Implement monitoring.

**Month 5-6:** Multi-agent orchestration, computer use for legacy systems, batch processing.

**Month 7+:** Optimize. A/B test prompts. Build feedback loops. Track cost per output unit.

<!-- check:2 -->

## The Mindset Shift

Stop asking "where can we use AI?" Start asking "why would a human do this?" If the answer is not judgment, relationships, or creativity — Claude should be doing it.`,
    checks: [
      {
        question: "How does an AI-first company's organizational structure differ from a traditional one?",
        options: [
          "It replaces all employees with AI agents and has no human staff",
          "It shifts from large teams doing manual work to small teams of experts managing AI-powered systems at 10x throughput",
          "It adds an AI department alongside existing departments with no structural changes",
        ],
        correctIndex: 1,
        explanation: "AI-first companies don't eliminate humans — they restructure. Instead of 5 support reps, you have 1 support lead managing a Claude-powered system handling 90% of tickets. Instead of 3 data analysts, 1 analytics engineer builds Claude-powered dashboards. The org is smaller but each person has dramatically higher leverage.",
      },
      {
        question: "What are the four sources of competitive moat for an AI-first company?",
        options: [
          "Patent portfolio, brand recognition, customer loyalty, and market share",
          "Proprietary data loops, custom MCP servers, institutional prompt knowledge, and shipping speed",
          "Lowest pricing, biggest team, most funding, and first-mover advantage",
        ],
        correctIndex: 1,
        explanation: "AI-first moats come from: proprietary data loops (every interaction improves your system), custom MCP integrations (deeply embedded in your domain), institutional prompt knowledge (system prompts encoding years of expertise), and speed (shipping in hours vs. weeks). These are compounding advantages specific to AI-native companies.",
      },
      {
        question: "What should you build first when implementing an AI-first strategy?",
        options: [
          "A company-wide AI chatbot that all departments can use",
          "Core infrastructure with API integration, prompt caching, and a basic agent for your highest-volume workflow",
          "Multi-agent orchestration with computer use for maximum capability from day one",
        ],
        correctIndex: 1,
        explanation: "Month 1-2 focuses on core infrastructure: API integration, prompt caching, and a basic agent for the highest-volume workflow. This delivers immediate ROI and builds the foundation for expansion. A generic chatbot doesn't solve specific workflow problems. Multi-agent orchestration is a Month 5-6 capability — you need the foundation first.",
      },
    ],
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
          "What is the primary purpose of a CLAUDE.md file in your project?",
        options: [
          "It stores API keys and credentials for Claude to authenticate",
          "It provides persistent project-specific instructions that Claude reads automatically every session",
          "It compiles markdown into executable code for the CLI",
        ],
        correctIndex: 1,
        explanation:
          "CLAUDE.md acts as persistent memory for Claude Code — it reads these instructions at the start of every session so your preferences, project conventions, and context carry forward automatically. It does not store credentials (those belong in environment variables) and it is not compiled into code — it is plain markdown that Claude interprets as instructions.",
      },
      {
        type: "mc",
        question:
          "When Claude Code wants to run a terminal command, what happens by default?",
        options: [
          "It asks for your approval before executing commands that modify files or run code",
          "All commands run automatically inside a Docker sandbox",
          "Commands are limited to read-only operations unless you pass --unsafe",
        ],
        correctIndex: 0,
        explanation:
          "Claude Code prompts you for approval before running potentially destructive commands — this is the core safety mechanism. It does not use Docker by default (it runs directly on your system), and there is no --unsafe flag — the approval prompt is the standard flow, not an opt-in mode.",
      },
      {
        type: "mc",
        question:
          "What makes Claude Code fundamentally different from pasting code into a ChatGPT-style AI chat?",
        options: [
          "It uses a more advanced language model than chat interfaces",
          "It operates directly on your file system with full codebase context, reading and writing real files",
          "It has a built-in code compiler that validates output before responding",
        ],
        correctIndex: 1,
        explanation:
          "The key advantage is that Claude Code works directly in your project — it reads your entire codebase, writes real files, and executes commands in your terminal. Chat interfaces require you to copy-paste snippets and lose context. Claude Code does not necessarily use a different model than chat, and it does not have a built-in compiler — it relies on your project's own build tools.",
      },
      {
        type: "mc",
        question:
          "Where can CLAUDE.md files be placed to affect Claude Code's behavior?",
        options: [
          "Only in the root of your home directory",
          "In the project root, subdirectories, and your home directory — each scoped to its context",
          "Only inside a .claude/ configuration folder",
        ],
        correctIndex: 1,
        explanation:
          "CLAUDE.md files work at multiple levels: a project-root file sets project-wide instructions, subdirectory files add context for specific parts of the codebase, and a home-directory file applies to all your projects globally. They are not limited to the home directory alone, and they do not require a .claude/ folder — they sit alongside your code.",
      },
      {
        type: "mc",
        question:
          "When Claude Code maintains context across a session, what does that enable?",
        options: [
          "It can refactor a function and automatically update every file that imports it without you listing them",
          "It permanently memorizes all sessions and never needs CLAUDE.md",
          "It shares context between different users on the same machine",
        ],
        correctIndex: 0,
        explanation:
          "Session-level context means Claude Code knows your entire project structure right now — so when you rename a function, it already knows every import and reference to update. However, this context resets between sessions (that is what CLAUDE.md solves for persistence), and context is per-session per-user, not shared across users.",
      },
    ],
  },
  "02": {
    title: "Claude API Deep Dive Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the correct way to enable extended thinking in a Claude API request?",
        options: [
          "Set `thinking: true` in the request body",
          "Set `thinking: { type: 'enabled', budget_tokens: N }` where N is the max thinking tokens",
          "Append '[THINK]' to the beginning of your system prompt",
        ],
        correctIndex: 1,
        explanation:
          "Extended thinking requires the structured object format with `type: 'enabled'` and a `budget_tokens` value that caps how many tokens Claude can use for reasoning. A simple boolean `true` is not a valid configuration. Prompt-based hacks like appending '[THINK]' do not activate the actual extended thinking feature — they would just be treated as text in your prompt.",
      },
      {
        type: "mc",
        question:
          "How much do cached prompt tokens cost compared to uncached tokens when using prompt caching?",
        options: [
          "They are completely free — no cost at all",
          "90% less than uncached tokens",
          "50% less than uncached tokens",
        ],
        correctIndex: 1,
        explanation:
          "Prompt caching gives you a 90% cost reduction on cached input tokens for subsequent requests that reuse the same prefix. They are not free — you still pay 10% of the normal rate. The 50% figure is the discount for the Batch API, not prompt caching — these are separate cost optimization features.",
      },
      {
        type: "mc",
        question:
          "In Claude's tool use flow, what happens after Claude decides to call a tool?",
        options: [
          "Claude executes the tool directly on Anthropic's servers and returns the result",
          "Claude returns a tool_use block with the tool name and inputs — your code executes it and sends the result back",
          "The tool call is queued in a batch and processed asynchronously",
        ],
        correctIndex: 1,
        explanation:
          "Claude never executes tools itself. It returns a `tool_use` stop reason with the tool name and structured inputs. Your application code runs the actual function, then sends a `tool_result` message back to Claude so it can continue. This client-side execution model is fundamental — Anthropic's servers do not run your tools, and tool calls are not batched asynchronously.",
      },
      {
        type: "mc",
        question:
          "What is the minimum token count for a prompt prefix to be eligible for caching?",
        options: [
          "No minimum — any prompt can be cached",
          "1,024 tokens for Claude 3.5 Sonnet and Claude 3.5 Haiku",
          "10,000 tokens for all models",
        ],
        correctIndex: 1,
        explanation:
          "There is a minimum threshold: 1,024 tokens for Sonnet and Haiku models (2,048 for Opus). This ensures caching is applied to substantial prefixes where the cost savings actually matter. There is not zero minimum — very short prompts cannot be cached. And the threshold varies by model, not a flat 10,000 across the board.",
      },
      {
        type: "mc",
        question:
          "In an agentic tool use loop, when does Claude stop calling tools and give a final text response?",
        options: [
          "After exactly three tool calls, regardless of the task",
          "When it has gathered enough information to answer and returns a response with stop_reason 'end_turn'",
          "When the API automatically times out after 60 seconds",
        ],
        correctIndex: 1,
        explanation:
          "Claude decides when it has enough information and stops the loop by returning a text response with `stop_reason: 'end_turn'` instead of another `tool_use` block. There is no fixed limit of three calls — it uses as many as needed. And the API does not auto-timeout tool loops — your code controls the loop and can set its own limits.",
      },
    ],
  },
  "03": {
    title: "MCP Servers Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the three core primitives that an MCP server can expose?",
        options: [
          "Functions, variables, and constants",
          "Tools, resources, and prompts",
          "Endpoints, schemas, and handlers",
        ],
        correctIndex: 1,
        explanation:
          "MCP servers expose tools (actions the model can invoke), resources (data the model can read), and prompts (reusable prompt templates). These are purpose-built for AI interaction. Functions/variables/constants are generic programming concepts, not MCP primitives. Endpoints/schemas/handlers describe REST APIs, not the MCP protocol.",
      },
      {
        type: "mc",
        question:
          "What transport protocols does MCP support for client-server communication?",
        options: [
          "HTTP/REST and GraphQL",
          "Stdio (standard input/output) and HTTP with Server-Sent Events (SSE)",
          "WebSocket and gRPC",
        ],
        correctIndex: 1,
        explanation:
          "MCP supports two transport protocols: stdio for local process communication (ideal for CLI tools like Claude Code) and HTTP+SSE for remote/networked servers. REST/GraphQL are general web API patterns, not MCP transports. WebSocket/gRPC are not part of the MCP specification.",
      },
      {
        type: "mc",
        question:
          "Why is MCP's resource primitive valuable compared to stuffing all context into the system prompt?",
        options: [
          "Resources let the model selectively read data on demand instead of front-loading everything into the context window",
          "Resources automatically compress data to use fewer tokens",
          "Resources bypass the context window limit entirely",
        ],
        correctIndex: 0,
        explanation:
          "Resources give the model access to data it can pull when needed, rather than bloating every request with all possible context. This is more efficient and keeps the context window focused. Resources do not compress data — the tokens still count when loaded. And nothing bypasses the context window limit — resources just let you be smarter about what goes in it.",
      },
      {
        type: "mc",
        question:
          "When would you choose stdio transport over HTTP+SSE for an MCP server?",
        options: [
          "When you need the server accessible over a network by multiple clients",
          "When the MCP server runs locally as a child process of the client application",
          "When you need to support browser-based clients",
        ],
        correctIndex: 1,
        explanation:
          "Stdio transport is designed for local communication where the client spawns the MCP server as a subprocess and communicates via stdin/stdout. It is fast and simple for single-client local setups like Claude Code. Network access and multi-client scenarios require HTTP+SSE. Browser clients also need HTTP+SSE since browsers cannot use stdio.",
      },
      {
        type: "mc",
        question:
          "What is the role of MCP prompts as a primitive?",
        options: [
          "They define the system prompt that Claude must use for every request",
          "They are reusable prompt templates that clients can discover and present to users as slash commands or workflow starters",
          "They store conversation history for long-running sessions",
        ],
        correctIndex: 1,
        explanation:
          "MCP prompts are reusable templates that servers expose and clients can surface as actions — like slash commands in an IDE. They standardize common workflows. They do not override or define the system prompt — that is controlled by the client application. And they are not conversation storage — that is a separate concern handled by the client.",
      },
    ],
  },
  "04": {
    title: "Agent SDK Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the purpose of guardrails in the Claude Agent SDK?",
        options: [
          "They encrypt all data flowing between agents",
          "They run validation checks on inputs and outputs to keep the agent within defined safety boundaries",
          "They automatically scale agents across multiple servers",
        ],
        correctIndex: 1,
        explanation:
          "Guardrails are validation functions that check what goes into and comes out of an agent — catching prompt injections, off-topic requests, or unsafe outputs before they reach the user. They are not encryption (that is a transport-layer concern) and they are not auto-scaling infrastructure (that is a deployment concern). Guardrails are purely about behavioral safety.",
      },
      {
        type: "mc",
        question:
          "How do agent handoffs work in a multi-agent system built with the Agent SDK?",
        options: [
          "The SDK sends requests to multiple agents simultaneously and picks the best response",
          "One agent transfers control to another specialized agent along with relevant context",
          "Agents communicate through a shared database that all agents poll",
        ],
        correctIndex: 1,
        explanation:
          "Handoffs are explicit transfers where one agent recognizes a task outside its specialty and passes it — along with context — to the right specialist agent. This is intentional routing, not parallel racing (which wastes tokens) or database polling (which adds latency and complexity). The handoff pattern keeps each agent focused on what it does best.",
      },
      {
        type: "mc",
        question:
          "Why would you give different agents different tool sets in a multi-agent system?",
        options: [
          "To reduce API costs since each tool definition adds to the prompt size",
          "To enforce the principle of least privilege — each agent only accesses what it needs for its role",
          "Because the API limits each agent to a maximum of three tools",
        ],
        correctIndex: 1,
        explanation:
          "Giving each agent only the tools it needs follows least privilege — a research agent should not have database-write access, and a writing agent should not have code-execution tools. While fewer tools do reduce prompt size, the primary reason is safety and role clarity. There is no three-tool limit in the API — you can define many tools per agent.",
      },
      {
        type: "mc",
        question:
          "What happens when an output guardrail detects a policy violation in an agent's response?",
        options: [
          "The response is silently logged and delivered to the user anyway",
          "The agent run is interrupted and raises a guardrail exception that your code can handle",
          "The SDK automatically retries with a different model",
        ],
        correctIndex: 1,
        explanation:
          "When an output guardrail trips, the SDK raises an exception that stops the response from reaching the user — your application code decides what to do next (retry, escalate, return a safe fallback). Silently logging and delivering defeats the purpose of a guardrail. Auto-retrying with a different model is not a built-in behavior — you control the recovery logic.",
      },
      {
        type: "mc",
        question:
          "What is the benefit of agent role specialization over a single do-everything agent?",
        options: [
          "Specialized agents are cheaper because they use smaller models automatically",
          "Each agent gets a focused system prompt and toolset, improving accuracy and making the system easier to debug",
          "Specialized agents share memory so you never lose context between steps",
        ],
        correctIndex: 1,
        explanation:
          "Specialization means each agent has a tight system prompt and only the tools it needs — this reduces confusion, improves task accuracy, and makes failures easy to trace to a specific agent. Specialized agents do not automatically use smaller models (you choose the model). And agents do not share memory by default — context is passed explicitly through handoffs.",
      },
    ],
  },
  "05": {
    title: "Advanced Capabilities Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the correct tool type identifier for Claude's computer use capability?",
        options: [
          "desktop_control_v1",
          "computer_20250124",
          "screen_interaction_tool",
        ],
        correctIndex: 1,
        explanation:
          "The tool type is `computer_20250124` — a versioned identifier that Anthropic uses to track the capability version. `desktop_control_v1` and `screen_interaction_tool` are made-up names that do not exist in the API. Always use the exact identifier from the documentation since the API will reject unrecognized tool types.",
      },
      {
        type: "mc",
        question:
          "How do you send a PDF document to Claude via the API for analysis?",
        options: [
          "As plain text extracted by a third-party PDF parser before sending",
          "As base64-encoded data in a document content block with media_type 'application/pdf'",
          "By uploading to Anthropic's file storage API and referencing the file ID",
        ],
        correctIndex: 1,
        explanation:
          "PDFs are sent as base64-encoded data inside a document content block with `type: 'document'` and `media_type: 'application/pdf'`. Claude processes the PDF directly — no third-party parser needed (which would lose formatting and layout). Anthropic does not have a separate file storage/upload API — the document is embedded inline in the request.",
      },
      {
        type: "mc",
        question:
          "What actions can Claude perform through the computer use tool?",
        options: [
          "Only taking screenshots and reading screen content",
          "Screenshots, mouse clicks, keyboard input, and cursor movement — full desktop interaction",
          "Only filling out web forms through a browser automation API",
        ],
        correctIndex: 1,
        explanation:
          "Computer use gives Claude full desktop interaction: it takes screenshots to see the screen, then issues mouse clicks, keyboard typing, and cursor movements to interact with any application. It is not limited to screenshots (that would be read-only) or browser forms (it works with any desktop application, not just web browsers).",
      },
      {
        type: "mc",
        question:
          "What is a multimodal pipeline in the context of Claude's capabilities?",
        options: [
          "A system that routes requests to different AI providers based on the input type",
          "A workflow that chains multiple Claude capabilities — such as vision, PDF analysis, and tool use — to process different data types in sequence",
          "A way to run Claude on multiple GPUs simultaneously for faster inference",
        ],
        correctIndex: 1,
        explanation:
          "A multimodal pipeline chains Claude's capabilities together: for example, extracting data from a PDF, analyzing an image, using tools to look up additional data, then generating a final report. It is not about routing to different providers (it all stays within Claude) or GPU parallelism (that is infrastructure, not an application pattern).",
      },
      {
        type: "mc",
        question:
          "When combining vision and tool use in a single workflow, what is the correct approach?",
        options: [
          "You must make separate API calls — one for vision analysis and one for tool use",
          "Include the image in the message content and define tools in the same request so Claude can see and act in one turn",
          "Vision and tool use cannot be used together in the current API",
        ],
        correctIndex: 1,
        explanation:
          "Claude can handle images and tools in the same request — you include the image as a content block and define your tools in the request. Claude analyzes the image and can immediately call a tool based on what it sees, all in a single turn. Separate calls would lose context. And these capabilities absolutely work together — combining them is one of Claude's key strengths for automation.",
      },
    ],
  },
  "06": {
    title: "Enterprise AI Architecture Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What cost reduction does the Claude Batch API provide compared to standard synchronous calls?",
        options: [
          "25% cost reduction with results in 1 hour",
          "50% cost reduction with results within 24 hours",
          "90% cost reduction but only for the Haiku model",
        ],
        correctIndex: 1,
        explanation:
          "The Batch API gives you a 50% cost reduction in exchange for asynchronous processing with results delivered within 24 hours. The 25% figure is incorrect — the actual discount is 50%. The 90% reduction applies to prompt caching, not the Batch API, and the Batch API works with all Claude models, not just Haiku.",
      },
      {
        type: "mc",
        question:
          "How does Anthropic handle API data regarding privacy and model training?",
        options: [
          "API data is used to train future models unless you submit an opt-out form",
          "API data is not used for model training and is retained for 30 days for abuse monitoring, then deleted",
          "API data is immediately deleted after the response is generated",
        ],
        correctIndex: 1,
        explanation:
          "Anthropic does not use API data for model training — period, no opt-out form needed. Data is retained for 30 days for trust and safety (abuse monitoring), then deleted. It is not immediately deleted (the 30-day retention is necessary for safety compliance). This is a strong privacy posture that makes Claude suitable for enterprise and sensitive data workloads.",
      },
      {
        type: "mc",
        question:
          "When designing a high-volume system that processes 100K+ requests per day, which cost optimization strategy has the biggest impact?",
        options: [
          "Using the longest possible system prompts to reduce back-and-forth",
          "Combining prompt caching for repeated prefixes with the Batch API for non-urgent requests",
          "Switching to the most expensive model since it requires fewer retries",
        ],
        correctIndex: 1,
        explanation:
          "Stacking prompt caching (90% input savings) with the Batch API (50% savings for async work) is the highest-impact cost strategy at scale. Longer system prompts increase cost, not reduce it. And using the most expensive model rarely pays off in retry savings — the cost-per-token difference far outweighs occasional retries with a cheaper model.",
      },
      {
        type: "mc",
        question:
          "What is the correct approach to handling rate limits in a production Claude API system?",
        options: [
          "Exponential backoff with retry logic, request queuing, and monitoring usage against tier limits",
          "Sending all requests simultaneously and letting the API handle the queuing internally",
          "Creating multiple Anthropic accounts to multiply your rate limits",
        ],
        correctIndex: 0,
        explanation:
          "Production systems need exponential backoff (wait longer between retries), a request queue to smooth traffic spikes, and monitoring to stay within your tier's limits. The API does not queue requests for you — it returns 429 errors when you exceed limits. And creating multiple accounts to bypass limits violates Anthropic's terms of service.",
      },
      {
        type: "mc",
        question:
          "For an enterprise deployment processing sensitive customer data, what architecture decision ensures both cost efficiency and data privacy?",
        options: [
          "Route all traffic through a third-party AI gateway that caches responses publicly",
          "Use the API directly (not the consumer chat product), enable prompt caching for repeated context, and leverage the 30-day retention policy with no training guarantee",
          "Fine-tune a custom Claude model on your data so it memorizes the answers",
        ],
        correctIndex: 1,
        explanation:
          "The API's privacy guarantees (no training, 30-day retention) make it enterprise-ready. Combining this with prompt caching keeps costs down for repetitive workflows. A third-party cache that stores responses publicly would violate data privacy. And Claude does not currently support fine-tuning — you work with prompt engineering, caching, and RAG instead.",
      },
    ],
  },
};

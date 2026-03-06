import type { CourseContent, CourseQuizzes } from "./types";

export const aiAutomation: CourseContent = {
  "01-1": {
    title: "How Claude works (and why it's different)",
    duration: "5 min read",
    content: `Claude is built by Anthropic and it works fundamentally different from other AI models. Not in the "every company says they're different" way — in ways that actually matter for how you use it.

## The foundation: how all LLMs work

Every large language model, Claude included, predicts the next token. Your text gets split into tokens (roughly 3/4 of a word each), processed through layers of attention mechanisms, and the model outputs probability scores for what comes next. It picks the most likely next token and repeats.

**The key insight:** Claude doesn't "know" things. It's compressed patterns from training data into weights. When you ask a question, it reconstructs an answer from those patterns. This is why:

- More context = better output (the model has more patterns to work with)
- Specific instructions beat vague ones (you're narrowing the prediction space)
- AI can be confidently wrong (it's predicting likely text, not verified facts)

## What makes Claude different

**Constitutional AI:** Claude was trained with a set of principles (a "constitution") that guide its behavior. It's not just RLHF'd into compliance — it reasons about whether its outputs are helpful, honest, and harmless. This means Claude is less likely to blindly follow harmful instructions while still being genuinely useful.

**200K context window:** Claude can process roughly 150,000 words in a single conversation. You can paste entire codebases, full legal contracts, or weeks of email threads and Claude processes all of it at once. Most models tap out at 128K or less.

**Extended thinking:** Claude can show its reasoning process step by step before giving you an answer. This isn't just chain-of-thought prompting — it's a built-in capability where Claude actually thinks through complex problems in a structured way before responding.

**Instruction following:** Claude is consistently the best model at following complex, multi-step instructions exactly as written. When you give Claude a detailed system prompt with specific formatting, tone, and behavioral rules, it follows them. This matters enormously when building automated systems.

## The practical takeaway

You're not asking a genius for answers. You're steering a prediction engine that happens to be exceptionally good at following instructions, handling massive context, and reasoning through complex problems. Everything else in this course builds on this.`,
    takeaways: [
      "Claude predicts the next token — it doesn't truly understand, but it's trained to reason well",
      "200K context window means you can process entire codebases and documents at once",
      "Extended thinking gives Claude built-in step-by-step reasoning capabilities",
      "Claude's instruction following is best-in-class — critical for building automated systems",
    ],
    exercise:
      "Open Claude (claude.ai). Ask the same question two ways: first vague ('tell me about sales'), then specific ('give me a 5-step cold email framework for selling SaaS to small businesses'). Compare the outputs. Then try pasting a long document (3,000+ words) and asking Claude to analyze it — notice how it handles the full context without losing details.",
  },
  "01-2": {
    title: "Claude's capabilities: code, reasoning, vision, 200K context",
    duration: "6 min read",
    content: `Claude isn't just a chatbot. It's a multi-modal reasoning engine with capabilities that directly translate to business value. Here's what it can actually do and how to leverage each capability.

## Code generation and debugging

Claude is consistently one of the best models for writing, debugging, and explaining code. It handles everything from Python scripts to full-stack web apps. But here's what sets it apart:

- **Claude Code:** Anthropic's CLI tool that lets Claude operate directly in your terminal — reading files, writing code, running tests, and committing changes. It's not just generating code in a chat window. It's acting as a developer on your machine.
- **Full codebase understanding:** With 200K context, you can paste your entire project and Claude understands the relationships between files, functions, and data flows.
- **Debugging with reasoning:** Claude doesn't just find bugs — it explains why they happen and suggests architectural improvements.

## Reasoning and analysis

**Extended thinking** is Claude's killer feature for complex tasks. When you enable it, Claude thinks through problems step by step before responding. This dramatically improves accuracy on:

- Multi-step business analysis
- Strategic planning with trade-offs
- Complex math and logic problems
- Evaluating multiple options against criteria

## Vision

Claude can see and analyze images. Upload screenshots, diagrams, charts, photos of whiteboards, or design mockups. Claude will:

- Extract text from images (OCR)
- Analyze charts and data visualizations
- Review UI designs and suggest improvements
- Read handwritten notes
- Compare visual layouts

## 200K context window

This is the single biggest practical advantage. 150,000 words in one conversation means:

- Paste an entire codebase and ask questions about it
- Upload a 300-page contract and get a summary with key risks flagged
- Feed weeks of sales emails and get pattern analysis
- Process full meeting transcripts without losing any context

## Tool use (function calling)

Claude can call external tools and functions you define. This is what turns Claude from a text generator into an agent that can act in the real world. Define a function like \`search_database(query)\` or \`send_email(to, subject, body)\`, and Claude decides when and how to use it. We'll go deep on this in Module 5.

## The practical framework

Match the capability to the task:

- **Need code?** Use Claude Code or paste your codebase into context
- **Need deep analysis?** Enable extended thinking
- **Need to process images?** Upload them directly
- **Need to handle long documents?** Leverage the full 200K context
- **Need Claude to take actions?** Use tool use

Don't use a hammer for every nail. Claude has a full toolbox — use the right tool for each job.`,
    takeaways: [
      "Claude Code lets Claude operate directly in your terminal as a developer",
      "Extended thinking dramatically improves accuracy on complex reasoning tasks",
      "Vision capabilities: OCR, chart analysis, design review, handwriting",
      "Tool use turns Claude from a text generator into an agent that can act",
    ],
    exercise:
      "Test each capability: (1) Paste a code snippet and ask Claude to debug it, (2) Upload a screenshot of a chart or dashboard and ask Claude to analyze it, (3) Ask a complex business question and request extended thinking. Notice how each capability changes the quality and type of output you get.",
  },
  "01-3": {
    title: "Tokens, context windows, and how to use them",
    duration: "5 min read",
    content: `Tokens are the currency of Claude. Every input and output costs tokens. Understanding this lets you build smarter, cheaper systems.

## What's a token?

A token is roughly 3/4 of a word. "Automation" is 1-2 tokens. "I want to build a Claude agent" is about 8 tokens. Punctuation, spaces, and special characters are also tokens.

**Why it matters:** You pay per token on API calls. You also have a maximum number of tokens per conversation (the context window). Hit the limit and Claude starts losing your earlier instructions.

## Claude's context window advantage

Claude's 200K token context window (~150,000 words) is one of its biggest practical advantages. Here's what fits:

- An entire novel
- A full codebase (most projects)
- 300+ pages of documentation
- Weeks of email correspondence
- Multiple long documents at once

**Practical implication:** Where other models force you to chunk and summarize, Claude can process the whole thing at once. This means better analysis, fewer missed details, and simpler workflows.

## How to be token-efficient

Even with 200K tokens, efficiency matters — especially at scale.

1. **Be concise in prompts.** Don't repeat yourself. Say it once, clearly.
2. **Summarize conversation history** instead of keeping everything. After a long back-and-forth, ask Claude to summarize key decisions, then start fresh with that summary.
3. **Use system prompts wisely.** They persist across every message — keep them focused.
4. **Chunk large tasks.** Instead of one massive prompt, break it into steps and process sequentially.
5. **Use the right model tier.** Don't burn Opus tokens on a task Haiku can handle.

## The cost equation

If you're building an automation that runs 1,000 times per day with 2,000 tokens per run, that's 2 million tokens per day.

- At Haiku 4.5 rates (~$0.25/M input): **$0.50/day**
- At Sonnet 4.6 rates (~$3/M input): **$6/day**
- At Opus 4.6 rates (~$15/M input): **$30/day**

Same task, 60x price difference between Haiku and Opus. Pick the right model for the task complexity.

## Token counting in practice

Use Anthropic's token counting tools or the API's \`usage\` field in responses to track actual consumption. When building systems, always log token usage per run so you can optimize later.`,
    takeaways: [
      "1 token is roughly 3/4 of a word — everything costs tokens",
      "Claude's 200K context window fits entire codebases and long documents",
      "Summarize and chunk to stay efficient, even with a large context window",
      "Model choice dramatically affects cost at scale — Haiku is 60x cheaper than Opus",
    ],
    exercise:
      "Take one of your recent Claude conversations and estimate the token count (word count x 1.33). Now think about how you'd optimize it: what could you cut? What could be more concise? Calculate what it would cost at Haiku vs. Opus rates if it ran 100 times per day. This skill saves you real money at scale.",
  },
  "01-4": {
    title: "Claude models: Opus, Sonnet, Haiku — when to use what",
    duration: "5 min read",
    content: `This is where most people waste money and get worse results. They use one model for everything. Don't be that person.

## The Claude model lineup

**Opus 4.6 — The most capable model**
- Best at: complex reasoning, multi-step analysis, difficult coding, strategy, nuanced writing
- Use when: the task is hard, the stakes are high, or quality matters more than speed
- Cost: ~$15/M input tokens
- Speed: Slowest (but with extended thinking, the extra time is the reasoning)

**Sonnet 4.6 — The daily driver**
- Best at: everything that doesn't need Opus-level reasoning. Fast, capable, and cost-effective.
- Use when: writing, summarizing, code generation, data processing, most business tasks
- Cost: ~$3/M input tokens
- Speed: Fast — good balance of capability and responsiveness

**Haiku 4.5 — The workhorse**
- Best at: simple, high-volume tasks. Classification, extraction, formatting, routing, yes/no decisions.
- Use when: the task is straightforward and you're running it hundreds or thousands of times
- Cost: ~$0.25/M input tokens
- Speed: Fastest — sub-second responses

## The decision framework

Ask yourself three questions before every Claude task:

**1. How complex is this task?**
- Simple (classification, extraction, reformatting) -> Haiku
- Medium (writing, summarizing, basic analysis) -> Sonnet
- Complex (multi-step reasoning, difficult coding, strategy) -> Opus

**2. How important is quality?**
- Internal use only -> Haiku or Sonnet
- Client-facing output -> Sonnet or Opus
- High-stakes decisions -> Always Opus

**3. How often does this run?**
- One-time -> Cost doesn't matter, use Opus
- Daily -> Sonnet is your sweet spot
- Thousands of times per day -> Haiku, every token matters

## My model routing playbook

Here's exactly how I route tasks across my operations:

**Haiku tier:**
- Classifying incoming emails (spam, lead, support)
- Extracting data from structured documents
- Simple formatting and reformatting
- Yes/no decisions and routing logic

**Sonnet tier:**
- Writing first drafts of emails and content
- Summarizing meetings and documents
- Code generation for standard patterns
- Research synthesis and data analysis

**Opus tier:**
- Complex strategy documents
- Debugging difficult code
- Multi-step agent workflows with extended thinking
- Anything where being wrong is expensive

## The automation angle

When you build automated systems (which we'll do in this course), you want a routing layer. The system looks at the incoming task, classifies its complexity (using Haiku — it's cheap), and routes to the appropriate Claude model. This alone can cut your costs by 60-80% while maintaining quality where it matters.`,
    takeaways: [
      "Opus 4.6 for complex reasoning and high-stakes tasks — most capable, most expensive",
      "Sonnet 4.6 for daily work — fast, capable, cost-effective",
      "Haiku 4.5 for high-volume simple tasks — cheapest and fastest",
      "Build routing logic into your automations to match model to task complexity",
    ],
    exercise:
      "List 10 tasks you regularly use AI for. Categorize each as simple, medium, or complex. Assign the appropriate Claude model (Haiku, Sonnet, or Opus) to each. Calculate what you'd save monthly by routing instead of using Opus for everything.",
  },
  "02-1": {
    title: "The anatomy of a great Claude prompt",
    duration: "5 min read",
    content: `A great Claude prompt has four parts. Miss any one of them and your output suffers. Claude is especially responsive to well-structured prompts — its instruction-following is the best in the industry, so your effort here pays off more than with any other model.

## The four components

**1. Role** — Tell Claude who it is.
"You are a senior sales consultant who specializes in B2B SaaS."

This isn't fluff. It loads relevant patterns and expertise into Claude's generation. A "senior sales consultant" generates different text than a "helpful assistant."

**2. Context** — Give it the situation.
"I'm reaching out to a VP of Marketing at a 200-person company. They currently use HubSpot for marketing automation but are struggling with lead scoring."

The more relevant context you provide, the more targeted the output. Don't dump everything — give what matters for this specific task. Claude handles context better than any other model because of its 200K window, but relevance still beats volume.

**3. Task** — Tell it exactly what to do.
"Write a cold email that acknowledges their HubSpot setup, identifies the lead scoring gap, and positions our AI-powered scoring tool as the solution. Keep it under 150 words."

Be specific about format, length, tone, and deliverable.

**4. Constraints** — Set boundaries.
"Don't use buzzwords like 'revolutionary' or 'game-changing.' Don't include a generic CTA. End with a specific question about their current lead scoring process."

Constraints prevent Claude from falling into generic patterns. Claude is especially good at respecting constraints — it won't "forget" them halfway through like other models tend to.

## The difference in practice

**Bad prompt:** "Write me a cold email for my product"

**Good prompt:** "You are a B2B sales rep who's closed $2M+ in SaaS deals. I'm selling an AI lead scoring tool to mid-market companies using HubSpot. Write a cold email to a VP of Marketing at a 200-person e-commerce company. Keep it under 120 words. Open with something specific to e-commerce, not a generic opener. End with a question, not a 'let me know if you're interested.' No buzzwords."

The second prompt takes 30 seconds longer to write and saves you 20 minutes of editing.

## Claude-specific prompting tips

- **Use XML tags** to structure your prompts. Claude was trained to understand XML structure: \`<context>...\</context>\`, \`<instructions>...\</instructions>\`, \`<examples>...\</examples>\`. This makes complex prompts cleaner and more reliable.
- **Be direct.** Claude doesn't need flattery or "please." Just tell it what you want.
- **Give examples.** Claude excels at few-shot learning — show it what good output looks like and it'll match the pattern.`,
    takeaways: [
      "Every great prompt has: Role, Context, Task, and Constraints",
      "Claude's instruction following is best-in-class — your prompt structure pays off more",
      "Use XML tags to structure complex prompts for Claude",
      "30 extra seconds writing the prompt saves 20 minutes editing the output",
    ],
    exercise:
      "Take your most common AI task. Write the prompt using all four components: Role, Context, Task, Constraints. Wrap each section in XML tags (<role>, <context>, <task>, <constraints>). Run it in Claude and compare the output to what you normally get. Keep this as a template.",
  },
  "02-2": {
    title: "System prompts, roles, and context injection",
    duration: "5 min read",
    content: `System prompts are the instructions that run before every conversation. They're the most important thing you'll write when building Claude-powered systems.

## What a system prompt does

When you use the Claude API (not just the chat interface), you set a "system" parameter that Claude treats as its core instructions. Everything the user sends gets interpreted through this lens.

**Why this matters for automation:** Every Claude agent, chatbot, or automated workflow you build starts with a system prompt. Get it right and the system works 95% of the time. Get it wrong and you're debugging forever.

## How to write a Claude system prompt

**Start with identity:**
"You are the AI assistant for [Company]. You handle customer inquiries about [products/services]."

**Define behavior:**
"Always respond in a professional but friendly tone. Never make promises about delivery dates. If you don't know the answer, say 'Let me connect you with our team' and collect their email."

**Set boundaries:**
"Never discuss competitor products. Never share internal pricing beyond what's on the website. Never pretend to be human."

**Provide reference data:**
"Our products: [list]. Our pricing tiers: [list]. Our support hours: [hours]. Our return policy: [policy]."

## Context injection

Context injection means dynamically inserting relevant information into the prompt before sending it to Claude. This is how you make Claude-powered systems that feel personalized.

**Example:** A customer support bot receives a message. Before sending it to Claude, you:
1. Look up the customer's name and order history
2. Check if they have open support tickets
3. Inject this into the prompt: "Customer: John Smith. Recent order: #4521 (shipped 3 days ago). Open ticket: billing question from yesterday."

Now Claude responds with specific, relevant information instead of generic answers.

## Claude-specific system prompt techniques

**Use XML structure in your system prompts:**
\`\`\`
<identity>You are a B2B sales assistant for Acme Corp.</identity>
<behavior>
- Respond professionally but conversationally
- Always ask qualifying questions before recommending a product
</behavior>
<constraints>
- Never discuss competitor pricing
- Never make guarantees about delivery times
</constraints>
<reference_data>
Products: [dynamically injected]
Customer info: [dynamically injected]
</reference_data>
\`\`\`

Claude parses XML structure natively and it keeps complex system prompts organized and reliable.

## The template I use

Every system prompt I write follows this structure:
1. Who you are (2 sentences)
2. What you do (3-5 behaviors)
3. What you don't do (3-5 constraints)
4. Reference data (injected dynamically)
5. Output format (how to structure responses)`,
    takeaways: [
      "System prompts are the foundation of every Claude-powered system you build",
      "Structure: identity, behavior, boundaries, reference data, output format",
      "Context injection makes Claude feel personalized and specific",
      "Use XML tags in system prompts — Claude parses them natively",
    ],
    exercise:
      "Write a system prompt for a Claude-powered assistant that handles customer inquiries for a business you know well. Use XML tags to structure it into sections: <identity>, <behavior>, <constraints>, <reference_data>, <output_format>. Test it using the Claude API or claude.ai's system prompt field.",
  },
  "02-3": {
    title: "Extended thinking and chain-of-thought",
    duration: "5 min read",
    content: `Extended thinking is Claude's built-in reasoning capability and the single biggest unlock for getting Claude to handle complex tasks. Instead of jumping straight to an answer, Claude thinks through the problem step by step before responding.

## The difference between prompting and extended thinking

**Chain-of-thought prompting** is when you ask any model to "think step by step." The model writes its reasoning as part of the visible output.

**Extended thinking** is a Claude-specific feature where Claude has a dedicated thinking phase before generating its response. The thinking happens in a separate block — Claude reasons through the problem, considers alternatives, catches its own errors, and then gives you a refined answer. You can see the thinking or hide it.

## Why extended thinking is a game-changer

When you enable extended thinking on Claude (via the API or claude.ai), accuracy on complex tasks jumps dramatically:

- Multi-step math problems: significantly fewer errors
- Coding tasks: Claude catches edge cases it would otherwise miss
- Business analysis: deeper consideration of trade-offs
- Strategy: more nuanced recommendations

The model is literally thinking harder. It's not just generating text — it's reasoning.

## How to use extended thinking

**In the API:** Set \`thinking.type: "enabled"\` and \`thinking.budget_tokens\` in your request. The budget controls how much thinking Claude can do — more budget means deeper reasoning but higher cost.

**In claude.ai:** Toggle extended thinking on for complex tasks.

**When to use it:**
- Complex analysis or strategy
- Debugging difficult code
- Multi-step reasoning problems
- When accuracy matters more than speed
- High-stakes decisions

**When NOT to use it:**
- Simple tasks (classification, formatting, extraction)
- High-volume automations where speed matters
- Tasks where Haiku would suffice

## Chain-of-thought prompting (for any Claude model)

Even without extended thinking, you can improve Claude's reasoning with structured prompts:

**Direct (often wrong):** "What's the best pricing strategy for my SaaS?"

**Chain-of-thought (usually right):** "I need to decide on a pricing strategy for my SaaS. Think through this step by step:
1. List the common SaaS pricing models
2. Evaluate each against my product (B2B, 50-200 seat companies, data analytics)
3. Consider competitive positioning
4. Factor in customer acquisition cost
5. Make a recommendation with reasoning"

## Self-critique technique

After Claude gives you an answer, ask it to critique its own work:

"Now review your recommendation. What are the weakest parts of your argument? What assumptions might be wrong? Revise your answer based on this critique."

This catches errors Claude would otherwise miss. With extended thinking enabled, Claude does this internally — but the explicit version is still useful for important decisions.`,
    takeaways: [
      "Extended thinking is Claude's built-in reasoning phase — deeper than chain-of-thought prompting",
      "Enable it via the API with thinking.type and budget_tokens parameters",
      "Use it for complex tasks where accuracy matters more than speed",
      "Self-critique catches errors — ask Claude to review its own output",
    ],
    exercise:
      "Take a real business decision you're facing. Run it through Claude twice: once with a simple prompt, once with extended thinking enabled and a structured chain-of-thought format. Compare the depth and quality of the answers. Notice how extended thinking produces more nuanced analysis.",
  },
  "02-4": {
    title: "Building reusable prompt libraries",
    duration: "4 min read",
    content: `If you're writing the same type of Claude prompt more than twice, you should template it. Prompt libraries are how you scale Claude usage across a team without everyone reinventing the wheel.

## What a prompt library is

A collection of tested, proven Claude prompts organized by use case. Each prompt is a template with variables you fill in for each specific use.

## How to build one

**Step 1: Identify your repeating tasks**
- Writing cold emails
- Summarizing meeting notes
- Generating social media posts
- Analyzing competitor websites
- Writing project briefs

**Step 2: Write and test the base prompt**
For each task, write the best Claude prompt you can using the Role/Context/Task/Constraints framework with XML tags. Test it 10+ times with different inputs. Refine until it produces good output at least 9/10 times.

**Step 3: Templatize with variables**

\`\`\`
<role>You are a B2B sales rep specializing in {{INDUSTRY}}.</role>
<context>Reaching out to {{TITLE}} at {{COMPANY}} ({{COMPANY_SIZE}} employees). They use {{CURRENT_TOOL}} and struggle with {{PAIN_POINT}}.</context>
<task>Write a cold email under {{WORD_COUNT}} words.</task>
<constraints>{{CONSTRAINTS}}</constraints>
\`\`\`

**Step 4: Tag each template with the right Claude model**
- Simple templates (extraction, formatting): Tag as "Haiku"
- Standard templates (writing, summarizing): Tag as "Sonnet"
- Complex templates (strategy, analysis): Tag as "Opus"

This way your team knows which model to use and your automations route correctly.

**Step 5: Organize by category**
Group prompts into folders: Sales, Marketing, Operations, Customer Support, Internal.

## Where to store them

For solo use: A Notion database or simple folder of text files works.
For a team: A shared doc with version history. Or build them directly into your automation tools.

**For automation:** These templates become the backbone of your Claude-powered workflows. When a new lead comes in, the system fills in the variables, selects the right Claude model, and generates personalized outreach automatically. When a meeting ends, the transcript gets plugged into the summary template. This is how you go from using Claude manually to having it work for you in the background.

## The maintenance cycle

Review your library monthly. Kill prompts that don't perform. Update ones where you've found better approaches. Add new ones as you discover new use cases. A prompt library is a living system — and as Claude models improve, your prompts should evolve too.`,
    takeaways: [
      "Template any prompt you use more than twice with fill-in variables",
      "Use XML tags in templates for clean structure that Claude parses natively",
      "Tag each template with the right Claude model tier (Haiku, Sonnet, Opus)",
      "Prompt libraries become the backbone of your automated Claude workflows",
    ],
    exercise:
      "Create your first Claude prompt library. Pick your 5 most common tasks. Write a templatized prompt for each one using XML tags and clear variables. Tag each with the appropriate Claude model. Save them in a Notion page or folder. Use them for the next week and refine based on results.",
  },
  "03-1": {
    title: "Calling the Claude API (Messages API, tool use)",
    duration: "6 min read",
    content: `You don't need to be a developer to call the Claude API. You need to understand what an API is and use tools that handle the technical parts.

## What's an API?

An API is a way for two systems to talk to each other. When you use claude.ai, your browser is calling Anthropic's API behind the scenes. When you build automations, you call the same API directly.

Think of it like ordering food. The restaurant (Claude) can make anything on the menu. The API is the waiter — you tell it what you want, it goes to the kitchen, and brings back your order.

## The Claude Messages API

Claude uses the Messages API. It's clean, well-documented, and straightforward.

**What you need:**

**1. An API key** — Your ID that says you're allowed to use Claude. Get it from console.anthropic.com. Guard it like a password.

**2. The endpoint** — \`https://api.anthropic.com/v1/messages\`

**3. The request body** — What you're asking for. Includes your prompt, which Claude model to use, and settings.

## The basic API call structure

Every Claude API call includes:

- **URL:** \`https://api.anthropic.com/v1/messages\`
- **Headers:** Your API key (\`x-api-key\`), content type, and API version (\`anthropic-version\`)
- **Body:** The model name (\`claude-sonnet-4-6-20250514\`, \`claude-haiku-4-5-20250414\`, etc.), your messages (system + user), and settings
- **Response:** Claude's output, plus metadata like token usage

## Tool use (function calling)

This is where Claude gets powerful. You can define tools — functions that Claude can decide to call.

**Example:** You define a tool called \`lookup_customer\` that takes an email address and returns customer data. When a user asks "What's the status of john@company.com's order?", Claude recognizes it needs customer data, calls \`lookup_customer\`, gets the results, and incorporates them into its response.

This is the foundation of building Claude agents. We go deep on this in Module 5.

## No-code ways to call Claude

**Make.com / n8n:** These tools have built-in HTTP modules. You set the URL, headers, and body — no code needed. Make.com also has dedicated Claude/Anthropic modules.

**HTTP request modules:** Set the endpoint, add your API key in headers, and structure the body. Point and click.

## Key settings

**Temperature (0-1):** How creative vs. deterministic Claude's output is.
- 0 = Same answer every time (good for data extraction, classification)
- 0.7 = Balanced (good for most tasks)
- 1.0 = Maximum creativity (good for brainstorming)

**Max tokens:** Limits the response length. Set this to prevent runaway costs.

**Model selection:** Always specify the model. Use \`claude-haiku-4-5-20250414\` for cheap tasks, \`claude-sonnet-4-6-20250514\` for daily work, \`claude-opus-4-6-20250514\` for complex reasoning.

Start with no-code tools. Once you're comfortable with the flow, you can move to code if you need more control.`,
    takeaways: [
      "The Claude Messages API is clean and straightforward — endpoint, headers, body",
      "Tool use lets Claude call functions you define — the foundation of agents",
      "No-code tools like Make.com handle API calls with drag-and-drop modules",
      "Always specify the right Claude model and set max_tokens to control costs",
    ],
    exercise:
      "Sign up for Make.com (free tier). Create a scenario with one step: an HTTP module calling the Claude API. Set the endpoint to https://api.anthropic.com/v1/messages, add your API key in headers, specify claude-haiku-4-5-20250414 as the model, and write a simple prompt. Run it. You just called Claude's API. This is the foundation of everything we build from here.",
  },
  "03-2": {
    title: "Connecting Claude to Airtable, Notion, Sheets, Slack",
    duration: "5 min read",
    content: `This is where Claude goes from a chat tool to a business tool. When you connect Claude to the apps you already use, it can read, write, and act on real data automatically.

## The concept: triggers and actions

Every automation has two parts:
- **Trigger:** What starts the automation (new row in Sheets, new message in Slack, form submission, scheduled time)
- **Action:** What happens (Claude processes something, then writes the result somewhere)

## Common Claude integrations

**Claude + Google Sheets:**
Trigger: New row added -> Claude analyzes the data -> Writes analysis back to the sheet.
Use case: Lead comes in via form -> Claude scores and qualifies -> Result appears in your CRM sheet.

**Claude + Slack:**
Trigger: Message in a channel -> Claude reads and responds.
Use case: Team asks questions in #ask-claude -> Claude pulls from your company knowledge base and answers.

**Claude + Notion:**
Trigger: New page created -> Claude processes content -> Updates properties.
Use case: Meeting notes pasted -> Claude extracts action items, assigns owners, sets due dates.

**Claude + Airtable:**
Trigger: New record -> Claude enriches data -> Updates fields.
Use case: New lead record -> Claude researches the company -> Fills in industry, size, and a personalized outreach draft.

## MCP: Model Context Protocol

Anthropic built MCP (Model Context Protocol) specifically to standardize how Claude connects to external tools and data sources. MCP servers act as bridges between Claude and your business tools — Notion, Slack, databases, file systems, APIs.

**Why MCP matters:** Instead of building custom integrations for each tool, MCP provides a standard protocol. Claude can connect to any MCP-compatible server and use its tools. This is the future of how Claude integrates with business systems.

## How to build these (step by step)

1. Open Make.com and create a new scenario
2. Add your trigger module (e.g., "Watch new rows" in Google Sheets)
3. Add an HTTP module calling the Claude API
4. Map the data from the trigger into your Claude prompt (e.g., "Analyze this lead: {{name}}, {{company}}, {{website}}")
5. Add an action module to write Claude's response back (e.g., "Update row" in Google Sheets)
6. Test with real data
7. Turn on scheduling (run every 5 minutes, every hour, etc.)

## The power move

Chain multiple integrations together. Lead comes in (Sheets) -> Claude qualifies it (Sonnet) -> If qualified, Claude drafts personalized email (Sonnet) -> Email sends (Gmail) -> Logs in CRM (Airtable) -> Notifies you in Slack. All automatic. All happening while you sleep.`,
    takeaways: [
      "Every automation has a trigger (what starts it) and an action (what happens)",
      "Connect Claude to tools you already use — Sheets, Slack, Notion, Airtable",
      "MCP (Model Context Protocol) is Anthropic's standard for Claude integrations",
      "Chain integrations together for end-to-end Claude-powered workflows",
    ],
    exercise:
      "Build your first real Claude integration: Google Sheets + Claude. Create a sheet with a 'Lead Name' and 'Company' column. Set up a Make.com scenario that watches for new rows, sends the data to Claude (via HTTP module to the Messages API) with a qualification prompt, and writes Claude's response back to a 'Score' column.",
  },
  "03-3": {
    title: "Webhooks and real-time triggers",
    duration: "5 min read",
    content: `Webhooks are how you make Claude-powered systems respond instantly to real-world events. Instead of checking every 5 minutes, your system reacts the moment something happens.

## Polling vs. webhooks

**Polling:** Your automation checks every X minutes. "Any new data? No. Any new data? No. Any new data? Yes!" Slow, wastes API calls, and creates delays.

**Webhooks:** The source system sends you a notification the instant something happens. "Hey, a new order just came in. Here's the data." Instant, efficient, real-time.

## How webhooks work

1. You create a webhook URL (Make.com, n8n, or your own server generates one)
2. You register that URL with the source app (Stripe, Shopify, GitHub, etc.)
3. When an event happens, the source app sends the data to your URL
4. Your automation receives it instantly and sends it to Claude for processing

## Common webhook + Claude use cases

**Stripe payment -> Claude follow-up:**
Customer pays -> webhook fires -> Claude generates a personalized welcome email with onboarding steps based on what they purchased -> Email sends automatically.

**Form submission -> instant Claude processing:**
Someone fills out your contact form -> webhook fires -> Claude analyzes the inquiry, classifies it, and drafts a response -> You review and send (or it auto-sends for simple queries).

**GitHub push -> Claude code review:**
Developer pushes code -> webhook fires -> Claude reviews the changes using its code analysis capabilities -> Posts comments on the pull request.

## Setting up a webhook in Make.com

1. Add a "Custom Webhook" module as your trigger
2. Copy the webhook URL it generates
3. Go to the source app's webhook settings
4. Paste your URL and select which events to send
5. Test by triggering an event
6. Build your Claude processing logic after the webhook module

## Security basics

- Webhook URLs are like passwords — don't share them publicly
- Most platforms sign webhooks with a secret so you can verify they're legit
- Always validate incoming data before sending it to Claude
- Set up error handling for when Claude processing fails`,
    takeaways: [
      "Webhooks deliver data instantly — no polling delays",
      "Source apps push data to your URL when events happen",
      "Common pattern: event -> webhook -> Claude processes -> action taken",
      "Treat webhook URLs like passwords and validate incoming data",
    ],
    exercise:
      "Set up a webhook in Make.com. Create a Custom Webhook trigger, copy the URL. Use a tool like webhook.site to send a test payload to it. Watch the data arrive in Make.com in real time. Then add a Claude API step that processes the incoming data. This is the foundation for real-time Claude-powered systems.",
  },
  "03-4": {
    title: "Error handling and reliability",
    duration: "5 min read",
    content: `Your Claude automations will fail. APIs go down, data comes in weird formats, rate limits get hit. The difference between a toy and a production system is how it handles failure.

## The most common failures

**1. API rate limits:** You're sending too many requests to Claude too fast. Anthropic has rate limits based on your plan tier. Solution: Add delays between calls, queue requests and process them gradually, or upgrade your API tier.

**2. Timeout errors:** Claude takes too long to respond (usually on complex prompts with extended thinking). Solution: Set reasonable timeouts, break complex tasks into smaller ones, or use Sonnet instead of Opus for faster responses.

**3. Malformed data:** The trigger sends unexpected data (empty fields, wrong types). Solution: Validate data before sending it to Claude. Check that required fields exist.

**4. Claude hallucination:** Claude generates incorrect or nonsensical output. Solution: Add validation steps. For critical outputs, check format and reasonableness before acting on them. Use extended thinking for tasks where accuracy is critical.

**5. Cost overruns:** A loop goes infinite or data volume spikes. Solution: Set daily spending limits on your Anthropic API keys (available in console.anthropic.com). Add circuit breakers that stop processing after N runs.

## How to build reliable Claude systems

**Retry logic:** If a Claude API call fails, wait 5 seconds and try again. If it fails 3 times, alert you and stop. Anthropic's API returns clear error codes — use them to decide whether to retry or bail.

**Model fallback:** If Opus is slow or hitting limits, fall back to Sonnet. If Sonnet is having issues, fall back to Haiku for simple tasks. Always have a backup path.

**Logging:** Log every input, output, and error. When something goes wrong (and it will), logs are how you debug it. Include the Claude model used, token count, and response time.

**Monitoring:** Set up Slack alerts for failures. If your automation errors 3 times in an hour, you get a message. Don't discover failures when a customer complains.

**Validation:** Before writing Claude's output to your CRM or sending it in an email, validate it. Does it contain required fields? Is it the right format? Is it a reasonable length? This 30-second check prevents embarrassing errors.

## The 80/20 of reliability

You don't need perfect systems on day one. Start with:
1. Basic retry logic (3 attempts with exponential backoff)
2. Error notifications to Slack/email
3. Input validation on required fields
4. Daily spending limits on your Anthropic API key

These four things catch 80% of issues. Add more sophistication as your systems mature.`,
    takeaways: [
      "Plan for failure: APIs hit rate limits, data gets weird, Claude can hallucinate",
      "Retry logic, model fallback, and validation are the essentials",
      "Log everything including model used, tokens, and response time",
      "Set spending limits on your Anthropic API key from day one",
    ],
    exercise:
      "Take an automation you've built (or the one from the previous exercise). Add three things: (1) a retry step if the Claude API call fails, (2) a Slack/email notification on error, (3) a validation check that Claude's output isn't empty before writing it back. These three changes make it production-ready.",
  },
  "04-1": {
    title: "Make, Zapier, n8n — when to use what",
    duration: "5 min read",
    content: `Three major automation platforms. Each has strengths. Here's how I think about them for building Claude-powered workflows.

## Make.com (my primary tool)

**Best for:** Complex, multi-step automations with branching logic, data transformation, and Claude integration.

**Why I use it:** Visual flow builder is intuitive. Handles complex scenarios that Zapier can't. HTTP modules make Claude API calls flexible. Pricing is based on operations, not tasks, so complex automations cost less.

**Limitations:** Steeper learning curve than Zapier. Can get messy with very large scenarios.

## Zapier

**Best for:** Simple, linear automations. "When X happens, do Y." Great for non-technical users.

**Why it's popular:** Easiest to set up. Huge app library (6,000+ integrations). Works well for straightforward workflows.

**Limitations:** Gets expensive fast for complex logic. Multi-step zaps cost more. Limited branching and looping. Claude integration is basic compared to what you can do with raw API calls.

## n8n

**Best for:** Developers or technical operators who want full control. Self-hosted option means your data stays private.

**Why it's powerful:** Open-source. Self-hostable. No per-operation pricing. Full code access when you need it. Best for teams building many Claude automations at scale. Has good AI/LLM nodes built in.

**Limitations:** Requires technical setup (Docker, hosting). UI is less polished. Smaller integration library (but growing fast).

## My recommendation

**Start with Make.com.** It hits the sweet spot of power and usability. You can build anything from simple email automations to complex Claude agent workflows.

**Use Zapier** for quick, simple connections where you just need "when this, do that."

**Graduate to n8n** when you're running 50+ automations and the per-operation costs on Make/Zapier add up, or when you need self-hosting for data privacy.

## The real insight

The platform doesn't matter as much as the thinking. The skill is in designing the Claude-powered automation — what triggers it, what Claude prompt processes the data, what actions it takes. That transfers across any platform.`,
    takeaways: [
      "Make.com is the best balance of power and usability for Claude automations",
      "Zapier is simplest for basic 'when X, do Y' automations",
      "n8n is best for technical teams running many Claude automations at scale",
      "The automation design skill transfers across all platforms",
    ],
    exercise:
      "If you haven't already, create accounts on Make.com and Zapier (both have free tiers). Build the same simple Claude automation on both: 'When I get an email with subject line containing X, send the body to Claude for summarization, then Slack me the summary.' Compare the experience. Decide which feels more natural to you.",
  },
  "04-2": {
    title: "Building multi-step automated pipelines",
    duration: "6 min read",
    content: `Single-step automations are nice. Multi-step Claude-powered pipelines are where the real value is. This is how you build systems that handle entire workflows autonomously.

## What a pipeline looks like

A pipeline is a series of connected steps where each step's output feeds into the next. Think of it as an assembly line for information, with Claude doing the thinking at key decision points.

**Example: Claude-powered lead processing pipeline**

1. New lead submits form (trigger)
2. Claude enriches lead data using Haiku — fast and cheap (research company, find LinkedIn, estimate revenue)
3. Claude scores the lead 1-10 based on fit criteria using Sonnet — needs more reasoning
4. Router: If score >= 7, go to step 5. If < 7, go to step 8
5. Claude drafts personalized outreach email using Sonnet
6. Email sends to the lead
7. Lead gets added to CRM with all enriched data. End.
8. Lead gets added to nurture list with lower priority. End.

**This entire pipeline runs in under 30 seconds, unattended. Notice how different Claude models handle different steps based on complexity.**

## How to design a pipeline

**Step 1: Map the manual process first.** Write out every step a human would take. Don't skip anything.

**Step 2: Identify decision points.** Where does a human make a judgment call? These become router/filter modules with Claude handling the judgment.

**Step 3: Assign Claude models to each AI step.** Simple extraction? Haiku. Writing and analysis? Sonnet. Complex strategy? Opus.

**Step 4: Identify data dependencies.** What information does each step need? Make sure earlier steps produce it.

**Step 5: Build sequentially.** Start with step 1. Get it working. Add step 2. Test. Add step 3. Test. Don't build the whole thing and then test — you'll spend hours debugging.

**Step 6: Add error handling at each step.** If step 3 fails, what happens? Should it retry? Skip? Alert you?

## Data flow between steps

The key concept in Make.com/Zapier is mapping. Each step produces output data. The next step can reference any field from any previous step.

Step 1 output: \`{name: "John", email: "john@company.com"}\`
Step 2 Claude prompt: "Research {{step1.name}} at {{step1.email.domain}}..."
Step 2 Claude output: \`{company_size: 200, industry: "SaaS", ...}\`
Step 3 Claude prompt: "Score this lead: {{step1.name}}, {{step2.industry}}, {{step2.company_size}}..."

Each step builds on the data accumulated from all previous steps.

## The compound effect

One pipeline saves you 15 minutes of manual work. Ten pipelines save you 2.5 hours per day. At scale, this is the difference between a one-person operation that handles 10 leads per day and one that handles 200.`,
    takeaways: [
      "Pipelines chain multiple steps where each output feeds the next",
      "Use different Claude models at each step based on task complexity",
      "Map the manual process first, then automate each step",
      "10 well-built Claude pipelines can save 2.5+ hours per day",
    ],
    exercise:
      "Pick your most time-consuming repeating workflow. Map out every manual step on paper. Identify which steps can be automated with Claude and assign the right model tier (Haiku, Sonnet, Opus) to each. Build the first 3 steps as a pipeline in Make.com. Test it with real data.",
  },
  "04-3": {
    title: "Claude-powered email, CRM, and content workflows",
    duration: "5 min read",
    content: `These three workflows alone can transform a small operation. I run variations of all three using Claude across my businesses.

## Claude-powered email workflow

**Inbound email processing:**
1. Email arrives in inbox
2. Claude (Haiku) classifies: lead, support, spam, or internal
3. For leads: Claude (Sonnet) drafts a personalized response based on their inquiry
4. For support: Claude (Sonnet) generates an answer from your knowledge base
5. Draft goes to your inbox for quick review and send (or auto-sends for common questions)

**Result:** Instead of writing 30 emails from scratch daily, you review and tweak 30 Claude-drafted responses. Saves 2+ hours.

## Claude-powered CRM workflow

**Lead enrichment on entry:**
1. New contact added to CRM (manually or from form)
2. Claude (Haiku) extracts and normalizes data from the submission
3. Claude (Sonnet) researches the person/company using their email domain and any available context
4. Claude fills in: company size, industry, estimated revenue, recent news
5. Claude (Sonnet) scores the lead based on your ideal customer profile
6. Claude (Sonnet) drafts a first-touch message personalized to their situation
7. High-score leads get flagged for immediate outreach

**Result:** Every lead gets the research and personalization that used to take 10 minutes, in 10 seconds. Claude's 200K context window means you can inject your full ICP criteria, past successful outreach examples, and company info all at once.

## Claude-powered content workflow

**Content repurposing pipeline:**
1. You record a 10-minute video or voice memo (your raw thoughts on a topic)
2. Transcription service converts it to text
3. Claude (Sonnet) generates 5 pieces of content from that one recording:
   - A long-form LinkedIn post
   - 3 tweet-length social posts
   - An email newsletter paragraph
4. Each piece is formatted for its platform with the right tone
5. Drafts go to your content calendar for review

**Result:** One 10-minute recording becomes a week of content. Instead of sitting in front of a blank page, you talk about what you know and Claude handles the rest.

## The common thread

Notice the pattern: human does the high-value part (the thinking, the decision, the relationship), Claude handles the repetitive execution (research, drafting, formatting, routing). That's the model for every workflow you'll build.`,
    takeaways: [
      "Claude email processing: classify with Haiku, draft with Sonnet — saves 2+ hours daily",
      "Claude CRM enrichment: every lead gets instant research and personalization",
      "Claude content repurposing: one recording becomes a week of multi-platform content",
      "Pattern: humans do high-value thinking, Claude handles repetitive execution",
    ],
    exercise:
      "Pick one of these three workflows and build a basic version this week. Start with the email workflow — it's the easiest to set up and has the most immediate impact. Set up email -> Claude classification (Haiku) -> Claude draft response (Sonnet). Test with 5 real emails.",
  },
  "04-4": {
    title: "Testing and maintaining automations at scale",
    duration: "4 min read",
    content: `Building Claude automations is the fun part. Keeping them running is the real job. Here's how to not let your systems break silently while you sleep.

## Testing before launch

**Test with edge cases, not just happy paths.** Your Claude automation works with perfect data. But what about:
- Empty fields
- Extra-long text that exceeds token limits
- Special characters that break formatting
- Duplicate entries
- Data in the wrong language

Run at least 10 test cases including 3-4 edge cases before going live.

## Monitoring in production

**Daily health check (2 minutes):**
- Check your automation platform's run history
- Look for failed runs
- Check error rates (some failures are normal, a spike isn't)
- Glance at Claude API usage in console.anthropic.com

**Weekly review (15 minutes):**
- Review Claude output quality on a random sample
- Check costs vs. budget in Anthropic's dashboard
- Identify any automations that should be adjusted

**Monthly optimization (1 hour):**
- Kill automations that aren't delivering value
- Update Claude prompts based on observed output quality
- Test whether a cheaper Claude model (e.g., Haiku instead of Sonnet) produces acceptable results for any steps
- Consolidate redundant workflows

## The maintenance checklist

When something breaks, run through this:
1. **Check the trigger.** Is data still flowing in? Did the source app change something?
2. **Check the Claude step.** Is the API responding? Did you hit a rate limit? Is the prompt still producing good output? Check console.anthropic.com for errors.
3. **Check the action.** Can the destination still accept data? Did permissions change?
4. **Check the data.** Is the format what you expected? Are any fields missing?

## Scaling: from 5 to 50 automations

When you have 50+ Claude automations, organization matters:
- **Name them clearly:** "Lead Enrichment - Inbound Form (Sonnet)" not "Scenario 47"
- **Group by function:** Sales, Marketing, Operations, Support
- **Document each one:** What it does, which Claude model it uses, what triggers it, what it touches, who owns it
- **Version control:** When you update a Claude prompt, note what changed and why
- **Cost tracking:** Tag each automation with its Claude model tier and track monthly spend per workflow

This documentation takes 5 minutes per automation and saves hours of debugging later.`,
    takeaways: [
      "Test with edge cases — empty fields, long text, special characters",
      "Daily 2-minute health checks catch problems before customers do",
      "Name, group, and document every automation including which Claude model it uses",
      "Monthly optimization: test if cheaper Claude models can handle any steps",
    ],
    exercise:
      "Audit your current automations. For each one: give it a clear name (include the Claude model), write a one-line description of what it does, and check the last 10 runs for errors. Fix anything broken. Check your Anthropic API usage dashboard. Set a recurring calendar reminder for weekly automation reviews.",
  },
  "05-1": {
    title: "What agents are and how to build them with Claude",
    duration: "6 min read",
    content: `A Claude agent is Claude with the ability to take actions, not just generate text. Instead of you copying output from claude.ai and pasting it somewhere, the agent does it itself.

## The difference: chatbot vs. agent

**Chatbot:** You ask Claude a question, it gives an answer. You do something with that answer.

**Agent:** You give Claude a goal, it figures out the steps, executes them using tools, and reports back. It can search the web, write files, call APIs, update databases, send emails — whatever tools you give it.

## The components of a Claude agent

**1. The brain (Claude):** The model that does the thinking and decision-making. Use Sonnet for most agents, Opus for agents that need deep reasoning.

**2. Tools:** Functions Claude can call. Examples:
- \`search_web(query)\` — searches and returns results
- \`send_email(to, subject, body)\` — sends an email
- \`update_crm(contact_id, data)\` — updates a CRM record
- \`read_database(query)\` — reads from a database

**3. Memory:** The agent's ability to remember context across steps. Short-term memory is the conversation context (up to 200K tokens with Claude). Long-term memory is stored data it can reference via tools.

**4. The loop:** Think -> Act -> Observe -> Think again. Claude decides what to do, calls a tool, sees the result, and decides the next step. This is called the "agentic loop."

## A real example

**Agent task:** "Find 10 SaaS companies in Austin with 50-200 employees, find their VP of Marketing on LinkedIn, and draft a personalized cold email for each."

**What the Claude agent does:**
1. Searches for SaaS companies in Austin (tool: web search)
2. Filters by employee count (Claude's reasoning)
3. For each company, finds the VP of Marketing (tool: LinkedIn search)
4. Researches each person's recent posts and company news (tool: web search)
5. Drafts a personalized email for each (Claude's writing ability + prompt template)
6. Saves everything to a spreadsheet (tool: write to Sheets)

A human doing this: 3-4 hours. The Claude agent: 15 minutes.

## How to build your first Claude agent

**With Claude's tool use API:** Define your tools as JSON schemas in the API call. Claude decides when to call which tool, you execute the tool and return results, Claude continues reasoning. This is the native, most powerful approach.

**With the Agent SDK:** Anthropic's Agent SDK provides a framework for building multi-step agents with tool use, memory, and orchestration built in.

**With Claude Code:** For developer tasks, Claude Code is already an agent — it reads your codebase, writes code, runs tests, and commits changes. It's a reference implementation of what a Claude agent looks like.

**No-code approach:** Make.com scenarios with loops and routers can behave like agents. The Claude step decides what to do next, the router directs flow based on the decision, and it loops until the task is complete.`,
    takeaways: [
      "Claude agents take actions autonomously — they don't just generate text",
      "Four components: brain (Claude), tools, memory, and the agentic loop",
      "Claude's tool use API is the native way to build agents",
      "Claude Code and the Agent SDK are reference implementations of Claude agents",
    ],
    exercise:
      "Design a Claude agent on paper (don't build it yet). Pick a task you do manually that involves multiple steps and tools. Write out: (1) the goal, (2) which Claude model to use, (3) the tools it would need (with descriptions), (4) the step-by-step logic it would follow. This is your agent blueprint.",
  },
  "05-2": {
    title: "Tool use: giving Claude the ability to act",
    duration: "5 min read",
    content: `Tools are what make Claude agents useful. Without tools, a Claude agent is just a chatbot. With the right tools, it can do anything you can do on a computer.

## How Claude's tool use works

You define tools as JSON schemas with names, descriptions, and parameters. Claude reads the descriptions and decides when to call which tool. When Claude wants to use a tool, it returns a \`tool_use\` response with the tool name and arguments. You execute the function and send the results back as a \`tool_result\`. Claude incorporates the results and continues.

**Example tool definition:**
\`\`\`json
{
  "name": "search_contacts",
  "description": "Search the CRM for contacts matching a query by name, email, company, or any field",
  "input_schema": {
    "type": "object",
    "properties": {
      "query": {"type": "string", "description": "Search query"},
      "limit": {"type": "number", "description": "Max results to return"}
    },
    "required": ["query"]
  }
}
\`\`\`

When Claude encounters a task like "find our recent leads from New York," it recognizes this as a \`search_contacts\` task, calls the function with the right parameters, gets the results, and continues its work.

## MCP: Model Context Protocol

MCP is Anthropic's open protocol for connecting Claude to external tools and data sources. Instead of building custom tool definitions for every integration, MCP provides a standard way to expose tools to Claude.

**MCP servers** provide tools that Claude can use. There are MCP servers for:
- File systems (read/write files)
- Databases (query and update)
- APIs (Slack, GitHub, Notion, etc.)
- Web browsing and search

This means you can give Claude access to dozens of tools through standardized MCP connections instead of building each one from scratch.

## Designing good tools

**Keep tools focused.** Each tool should do one thing well. Don't build a "do_everything" tool — Claude won't know when to use it.

**Write clear descriptions.** Claude decides which tool to use based on the description. "Search for contacts in the CRM database by name, email, company, or any other field" is better than "search stuff."

**Handle errors gracefully.** If a tool fails, return an error message Claude can understand. "No contacts found matching 'xyz'" is better than crashing.

**Return useful data.** Don't return raw database dumps. Return formatted, relevant data Claude can work with.

## Essential tools for business agents

**Information tools (read):**
- Search your knowledge base / docs
- Look up customer information
- Check inventory / status / availability
- Search the web for research

**Action tools (write):**
- Send emails or messages
- Create or update CRM records
- Schedule meetings or tasks
- Generate and save documents

**Analysis tools (process):**
- Calculate metrics from data
- Compare options against criteria
- Summarize long documents
- Score or classify inputs

## The security consideration

Every tool you give Claude is a capability it can use autonomously. Be thoughtful about what actions Claude can take without human approval. A "read" tool is low risk. A "send email to client" tool needs guardrails. A "delete database" tool probably needs human confirmation.

Start with read-only tools. Add write tools carefully with validation and approval steps.`,
    takeaways: [
      "Tools are JSON schemas that Claude calls to take real-world actions",
      "MCP (Model Context Protocol) standardizes how Claude connects to external tools",
      "Keep tools focused — one thing per tool with clear descriptions",
      "Start with read-only tools, add write tools with guardrails",
    ],
    exercise:
      "For the agent you designed in the previous exercise, define 3-5 tools as JSON schemas. For each tool, write: the name, a clear description, the input_schema with parameter types, and what it returns. This is exactly how you'd implement them in Claude's tool use API.",
  },
  "05-3": {
    title: "Multi-agent systems and orchestration",
    duration: "5 min read",
    content: `One Claude agent is powerful. Multiple Claude agents working together is transformative. This is how you build systems that handle complex operations end-to-end.

## Why multi-agent?

Some tasks are too complex for one agent with one set of tools. A research agent thinks differently than a writing agent. A sales agent needs different tools than a support agent. By splitting responsibilities, each Claude agent can be specialized and excellent at its job — and you can use different Claude models for different agents based on task complexity.

## Architecture patterns

**Sequential pipeline:** Agent A does its work, passes results to Agent B, who passes to Agent C.
- Example: Research Agent (Sonnet) -> Analysis Agent (Opus) -> Writing Agent (Sonnet)
- Lead research -> qualification scoring -> email drafting

**Supervisor pattern:** One "manager" Claude agent (Opus) delegates tasks to specialist agents (Sonnet/Haiku) and synthesizes their results.
- Manager receives a request
- Delegates research to Research Agent (Sonnet)
- Delegates data extraction to Extraction Agent (Haiku)
- Delegates drafting to Writing Agent (Sonnet)
- Reviews and combines outputs (Opus reasoning)
- Returns final result

**Parallel execution:** Multiple Claude agents work simultaneously on different parts of the same task.
- Researching 10 companies? Spin up 10 research agents in parallel.
- Each finishes in 30 seconds instead of 5 minutes sequentially.

## A real multi-agent system

**Claude-Powered Sales Team:**

1. **Prospecting Agent (Haiku):** Finds companies matching ideal customer profile. Tools: web search, database queries. Output: list of qualified companies.

2. **Research Agent (Sonnet):** Deep-dives on each company. Tools: web search, LinkedIn, news APIs. Output: company brief with pain points and opportunities.

3. **Outreach Agent (Sonnet):** Writes personalized emails using research. Tools: email templates, CRM. Output: ready-to-send emails.

4. **Manager Agent (Opus):** Orchestrates the pipeline, handles errors, ensures quality. Reviews outputs before they go out. Uses extended thinking for quality assessment.

## Building multi-agent with Claude

**Agent SDK:** Anthropic's Agent SDK is purpose-built for multi-agent orchestration. It handles tool routing, agent-to-agent communication, and the agentic loop.

**Make.com:** A Make.com scenario with multiple Claude API steps, each with different system prompts and tools, is a multi-agent system. The "manager" is your routing logic. Different steps can use different Claude models.

**Code-based:** Build each agent as a separate function with its own system prompt, tools, and Claude model. Wire them together with a manager function that routes tasks and collects results.

Start simple. Build one agent. Get it working. Then add a second agent that handles a different part of the process. Scale from there.`,
    takeaways: [
      "Split complex tasks across specialized Claude agents for better results",
      "Use different Claude models for different agents: Opus for management, Sonnet for work, Haiku for simple tasks",
      "Three patterns: sequential pipeline, supervisor, and parallel execution",
      "Anthropic's Agent SDK is purpose-built for multi-agent Claude orchestration",
    ],
    exercise:
      "Take the agent you've been designing. Identify which parts could be handled by separate specialized Claude agents. Draw the architecture: which agent does what, which Claude model each uses, what data flows between them, and which pattern (sequential, supervisor, parallel) fits best.",
  },
  "05-4": {
    title: "Real business agent builds: research, outreach, ops",
    duration: "6 min read",
    content: `Theory is over. Here are three Claude agent builds I use in production. Study the architecture, then build your own version.

## Build 1: Company Research Agent

**Goal:** Given a company name, produce a comprehensive brief in under 60 seconds.

**Claude model:** Sonnet 4.6 (good balance of reasoning and speed)

**Tools (defined as tool use schemas):**
- \`search_web(query)\` — searches and returns results
- \`scrape_website(url)\` — reads company website content
- \`lookup_linkedin(company_name)\` — finds key people

**System prompt:** "You are a business research analyst. Given a company name, produce a brief covering: what they do, company size, funding/revenue, key decision-makers, recent news, and potential pain points our services could solve. Use your tools to gather information, then synthesize into a structured brief."

**Flow:**
1. Claude searches the web for the company (calls \`search_web\`)
2. Claude scrapes their website for product/service info (calls \`scrape_website\`)
3. Claude finds 2-3 key people (calls \`lookup_linkedin\`)
4. Claude synthesizes everything into a structured brief (reasoning)
5. Result saved to your database/sheet

**Estimated build time:** 2-3 hours using Claude's tool use API or Make.com, including testing.

## Build 2: Outreach Agent

**Goal:** Generate personalized outreach emails at scale using research briefs.

**Claude model:** Sonnet 4.6

**Tools:**
- \`read_research_brief(company_id)\` — reads from research database
- \`get_email_templates(category)\` — loads relevant templates
- \`queue_email(to, subject, body)\` — queues for sending with human approval gate

**System prompt:** "You are a B2B sales expert. Using the company research brief, write a cold email that: references something specific about their company, identifies a likely pain point, positions our solution, and ends with a specific question. Keep it under 100 words. Never use buzzwords."

**Flow:**
1. Claude reads the research brief (calls \`read_research_brief\`)
2. Claude generates personalized email (reasoning + writing)
3. Claude self-checks: is it specific enough? Does it mention something real about the company?
4. If it passes, Claude queues for sending (calls \`queue_email\` with optional human review)
5. Result logged to CRM

## Build 3: Operations Agent

**Goal:** Handle daily operational tasks automatically.

**Claude model:** Sonnet 4.6 (Haiku for the Slack reading, Sonnet for synthesis)

**Tools:**
- \`read_slack_messages(channel, hours)\` — reads recent Slack messages
- \`check_project_status(project_id)\` — checks project management tool
- \`generate_report(data, template)\` — creates formatted reports
- \`send_slack_message(channel, message)\` — sends summary to Slack

**Morning routine (runs at 8 AM):**
1. Claude reads all Slack messages from the last 12 hours (calls \`read_slack_messages\`)
2. Claude summarizes key discussions and decisions (200K context handles all of it)
3. Claude checks project management for overdue or blocked tasks (calls \`check_project_status\`)
4. Claude generates a daily briefing (calls \`generate_report\`)
5. Claude sends to your inbox or Slack (calls \`send_slack_message\`)

This replaces the 30 minutes you'd spend catching up every morning.

## The pipeline bonus

Complete these three builds and you've earned your shot at a real paid project from my operations. That's not a hypothetical — I actively need operators who can build and maintain Claude-powered systems. Prove you can do it in the course, and you're first in line.`,
    takeaways: [
      "Research Agent: company brief in 60 seconds using Claude Sonnet + web tools",
      "Outreach Agent: personalized emails at scale from research data",
      "Operations Agent: daily briefings, task monitoring, team summaries",
      "Build all three and you're ready for real paid project work",
    ],
    exercise:
      "Build the Company Research Agent. This is your capstone for the agents module. Set up the tools (web search API, website scraper), write the system prompt, build the flow using Claude's tool use API or Make.com, and test it with 5 real companies. Save the briefs. This is the skill that gets you paid projects.",
  },
  "06-1": {
    title: "Putting Claude systems into production",
    duration: "5 min read",
    content: `Building a Claude system that works in testing is step one. Making it work reliably at scale, every day, without you babysitting it — that's the real skill.

## The production checklist

Before any Claude system goes live, run through this:

**Data validation:** Does your system handle bad input gracefully? Test with empty fields, extra-long text, special characters, and unexpected formats. Claude handles messy input better than most models, but garbage in still means garbage out.

**Error handling:** When something fails (and it will), does your system retry, alert you, or fail gracefully? Never let it fail silently. Use Anthropic's API error codes to handle different failure modes.

**Rate limits:** Are you staying within Anthropic's rate limits? If you're processing 500 leads per day, make sure your API tier supports that volume. Check console.anthropic.com for your current limits and usage.

**Cost projections:** Run the math. How many Claude API calls per day x average tokens per call x cost per token x 30 days. Factor in which Claude model each step uses (Haiku vs. Sonnet vs. Opus). Make sure it fits your budget before launching.

**Permissions and access:** Are API keys stored securely (environment variables, not hardcoded)? Can only authorized people trigger or modify the system?

## The staging -> production pattern

**Never go straight to production.** Always:

1. Build and test in a staging environment (separate Make.com scenario, test API keys, dummy data)
2. Run with real data but don't take real actions (draft emails instead of sending, log to test database instead of production CRM)
3. Monitor for 3-5 days looking for issues
4. Check Claude output quality on a random sample each day
5. Switch to production once you're confident

## Scaling considerations

**What works at 10 runs/day might break at 1,000.** Watch for:
- Anthropic API rate limits (add queuing and delays, or upgrade your tier)
- Context window limits (summarize and chunk long inputs)
- Cost scaling (optimize model selection — switch steps from Sonnet to Haiku where quality holds)
- Data volume (archive old data, index for search)

## The handoff

If someone else needs to run or modify your Claude system:
- Document what it does, why, and how
- List all accounts and tools it depends on (Anthropic API key, Make.com, etc.)
- Note any quirks or known issues
- Show them how to monitor and troubleshoot
- Include the Claude prompts and explain the reasoning behind them

A system only you understand is a liability, not an asset.`,
    takeaways: [
      "Run the production checklist before every launch: validation, errors, limits, costs",
      "Always test in staging with real data before going live with Claude systems",
      "What works at 10/day might break at 1,000 — plan for rate limits and cost scaling",
      "Document everything including Claude prompts so the system isn't dependent on you",
    ],
    exercise:
      "Take your best Claude automation and run it through the production checklist. Test with 5 edge cases. Add error handling if it's missing. Calculate your monthly Anthropic API cost at current volume (use console.anthropic.com for actual rates). Write a one-page doc explaining what it does and how to maintain it.",
  },
  "06-2": {
    title: "Monitoring, logging, and alerting",
    duration: "4 min read",
    content: `You can't fix what you can't see. Monitoring is how you know your Claude systems are healthy before your customers tell you they're not.

## The three layers

**Logging:** Recording what happened. Every Claude run should log: timestamp, input data, Claude model used, Claude's output, actions taken, token count, cost, and any errors. This is your audit trail and debugging tool.

**Monitoring:** Watching for patterns. Track: success rate, average processing time, cost per run, token efficiency, and output quality. Look for trends, not just individual failures.

**Alerting:** Getting notified when something's wrong. Set up alerts for: error rate spikes, processing time increases, cost overruns, and quality drops.

## What to log for Claude systems

For every Claude automation run, capture:
- **Input:** What triggered it and what data came in
- **Claude call:** Which model was used, the prompt sent, the response received, tokens consumed
- **Tool calls:** Which tools Claude called, what arguments it passed, what results came back
- **Output:** What action was taken (email sent, record created, etc.)
- **Metadata:** Timestamp, duration, total token count, estimated cost
- **Errors:** Any failures and the error message (including Anthropic API error codes)

## Where to log

**Simple:** Google Sheets with one row per run. Works for low volume.
**Better:** Airtable with filtered views for errors vs. successes, plus cost tracking.
**Best:** A proper logging service (Logflare, Datadog, or even a database table). Anthropic's console also shows API usage metrics.

## Alert rules that matter

Don't alert on every failure — you'll get alert fatigue. Alert on:
- Error rate above 10% in a 1-hour window
- Any Claude system down for more than 15 minutes
- Daily Anthropic API cost exceeding your budget by 20%+
- Zero runs in a period where you expect runs (system might be silently broken)
- Claude output quality drop (set up a validation check that flags outputs below expected length or missing expected fields)

## The 5-minute daily review

Every morning:
1. Check last 24 hours of run history (30 seconds)
2. Look at error rate — is it normal? (30 seconds)
3. Check Anthropic API costs in console — any spikes? (30 seconds)
4. Skim 3 random Claude outputs — quality still good? (2 minutes)
5. If something's off, investigate. If not, move on. (1 minute)

This 5-minute habit catches problems before they compound.`,
    takeaways: [
      "Log every Claude run: input, model used, output, tokens, cost, and errors",
      "Monitor success rate, processing time, Anthropic API costs, and quality trends",
      "Alert on patterns (error rate spikes, cost overruns), not individual failures",
      "5-minute daily review catches problems before they compound",
    ],
    exercise:
      "Add logging to your most important Claude automation. Create a Google Sheet or Airtable base that captures: timestamp, Claude model used, input summary, output summary, token count, estimated cost, success/fail. Set up a simple Slack alert that fires if any run fails. Review your first week of logs and identify cost optimization opportunities.",
  },
  "06-3": {
    title: "Handing off AI systems to a team",
    duration: "4 min read",
    content: `You built it. Now someone else needs to run it. This is the difference between being an operator and being a bottleneck.

## The handoff document

Every Claude system needs a one-page doc covering:

**1. What it does (2 sentences)**
"This system processes inbound leads from the website form using Claude Sonnet, enriches them with company data, scores them 1-10, and routes high-scoring leads to the sales team via Slack."

**2. How it works (bullet points)**
- Triggered by new Google Sheets row
- Claude (Haiku) classifies the lead type
- Claude (Sonnet) enriches via web search tools
- Claude (Sonnet) scores based on ICP criteria
- Score >= 7 -> Slack notification to #sales
- Score < 7 -> Added to nurture list

**3. Where it lives**
- Make.com scenario: [link]
- Google Sheet: [link]
- Slack channel: #sales
- Anthropic API key: stored in [secure location]

**4. What can go wrong**
- Anthropic API key expires or hits rate limits — check console.anthropic.com
- If Google Sheets API errors, retry the scenario manually
- If Claude output quality drops, check/update the scoring prompt
- Monthly Anthropic API cost should be under $[amount]

**5. How to modify it**
- To change scoring criteria, edit the Claude system prompt in step 3
- To change Slack channel, update the channel ID in step 5
- To switch Claude models (e.g., Haiku to Sonnet), update the model parameter in the HTTP module
- To add new data sources, add a new step between steps 2 and 3

## Training the team

Don't just send the doc. Walk through it live:
1. Show them the Claude system running end-to-end
2. Let them trigger a test run and watch Claude's output
3. Simulate a failure and show them how to diagnose it
4. Let them make a small change (update a Claude prompt, change a setting)

Once they can run it, debug it, and modify it — you're free.

## Permissions and access

Give team members the minimum access they need. If they need to monitor, give read access. If they need to fix issues, give edit access to the specific scenario. Create separate Anthropic API keys for different team members or systems — never share your master key.

## The goal

Build yourself out of every system. Your value is in designing and building new Claude-powered systems, not maintaining old ones. If you're the only person who can fix something, you haven't built a system — you've built a dependency.`,
    takeaways: [
      "Every Claude system needs a one-page doc: what, how, where, risks, modifications",
      "Walk the team through it live — don't just send documentation",
      "Create separate Anthropic API keys per system — never share master keys",
      "Your job is building new Claude systems, not maintaining old ones",
    ],
    exercise:
      "Pick your best Claude automation. Write the one-page handoff document covering all 5 sections. Include the Claude prompts used and which model each step calls. Walk someone through it (a team member, friend, or even record a Loom video). If they can understand and operate it from your doc + walkthrough, it's ready for handoff.",
  },
  "06-4": {
    title: "Iterating and improving over time",
    duration: "4 min read",
    content: `Your first version of any Claude system is never the best version. The operators who win are the ones who consistently improve their systems based on real data.

## The improvement cycle

**Weekly:** Review Claude output quality on a random sample. Are the responses still good? Has anything drifted? Check if Anthropic has released model updates that might affect output.

**Monthly:** Check overall metrics. Success rate, Anthropic API cost, time saved, and business impact. Is this system still worth running? Could a cheaper Claude model handle it?

**Quarterly:** Evaluate the entire system. Are there new Claude capabilities (new models, new features, better tool use) that could make it significantly better? Should you rebuild or retire it?

## What to improve

**Prompt quality:** The single highest-leverage improvement. Small prompt changes can dramatically improve Claude's output. A/B test different prompts with the same inputs and measure which produces better results. Try adding XML structure, more examples, or clearer constraints.

**Model selection:** Anthropic releases new Claude models regularly. What needed Opus 6 months ago might work fine with the latest Sonnet. Test newer or cheaper models periodically — you might get the same quality for less. Haiku gets better with every release.

**Tool efficiency:** Are there tools Claude calls unnecessarily? Can you pre-fetch data to reduce tool calls? Can you combine multiple tool results into a single context injection?

**Extended thinking budget:** If you're using extended thinking, tune the budget. Some tasks need more thinking tokens, others work fine with less. Over-budgeting wastes money, under-budgeting hurts quality.

**Speed:** Can you parallelize steps that currently run sequentially? Can you cache Claude responses for inputs that don't change often? Can you use Haiku for intermediate steps and Sonnet only for final output?

## When to rebuild vs. patch

**Patch** when: The core logic is sound but needs small fixes. A prompt needs tweaking, a step needs updating, a new edge case needs handling.

**Rebuild** when: The requirements have fundamentally changed. A new Claude model or capability makes a better architecture possible. The original design can't handle current volume.

Rule of thumb: if you're patching the same system for the third time, it's time to rebuild.

## The compound effect

A system that improves 5% per month is 80% better after a year. That's not marginal — it's transformational. The discipline of consistent improvement separates amateurs from professionals.

**You've completed the Claude Mastery course.** You now have the knowledge to build real Claude-powered systems. But knowledge isn't enough — execution is. Build the three agent systems from Module 5. Get them running in production. That's your ticket to paid project work on my team.`,
    takeaways: [
      "Review output quality weekly, Anthropic costs monthly, architecture quarterly",
      "Prompt improvements are the highest-leverage optimization for Claude systems",
      "Test newer and cheaper Claude models regularly — Haiku and Sonnet keep getting better",
      "5% monthly improvement compounds to 80% better in a year",
    ],
    exercise:
      "Final exercise: Build your portfolio. Take the three Claude agent systems you built in Module 5, document them with handoff docs, record a Loom walkthrough of each, and compile everything into a portfolio page. This is what you'll submit for paid project consideration.",
  },
};

export const aiAutomationQuizzes: CourseQuizzes = {
  "01": {
    title: "Claude Fundamentals Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What makes Claude's 200K context window a practical advantage over other models?",
        options: [
          "It makes Claude run faster by pre-loading more data",
          "It lets you process entire codebases, long documents, and extensive conversation histories in a single call",
          "It bypasses Claude's safety filters for more detailed responses",
          "It automatically summarizes content so you never hit limits",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "When building automations that run hundreds of times per day, what is the most effective cost strategy with Claude models?",
        options: [
          "Always use Haiku regardless of task complexity",
          "Use Opus for everything to ensure quality",
          "Route tasks to Haiku, Sonnet, or Opus based on complexity, quality needs, and frequency",
          "Avoid API calls and use claude.ai instead",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Explain the three Claude model tiers (Opus 4.6, Sonnet 4.6, Haiku 4.5) and describe a specific use case where each model is the right choice for a business automation.",
        minLength: 50,
      },
    ],
  },
  "02": {
    title: "Prompting Claude Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the four components of a well-structured Claude prompt as taught in this module?",
        options: [
          "Input, Processing, Output, Feedback",
          "Role, Context, Task, Constraints",
          "System, User, Assistant, Function",
          "Hook, Body, CTA, Format",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "What is the difference between chain-of-thought prompting and Claude's extended thinking feature?",
        options: [
          "They are the same thing with different names",
          "Chain-of-thought is faster but less accurate than extended thinking",
          "Extended thinking is a built-in Claude capability with a dedicated reasoning phase, while chain-of-thought is a prompting technique",
          "Extended thinking only works with Opus, while chain-of-thought works with any model",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe how you would build a reusable Claude prompt library for a team, including how to use XML tags, templatize prompts with variables, and tag each template with the appropriate Claude model tier.",
        minLength: 50,
      },
    ],
  },
  "03": {
    title: "Claude API & Integrations Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the three things you need to make a Claude API call?",
        options: [
          "A database, a frontend, and a backend",
          "An API key from console.anthropic.com, the Messages API endpoint, and the request body",
          "A webhook, a trigger, and an action",
          "A system prompt, user message, and temperature setting",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "What is MCP (Model Context Protocol) and why does it matter for Claude integrations?",
        options: [
          "MCP is a way to make Claude run faster by compressing messages",
          "MCP is a pricing model that reduces API costs",
          "MCP is Anthropic's open protocol that standardizes how Claude connects to external tools and data sources",
          "MCP is a monitoring tool for tracking Claude API usage",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Explain the 80/20 of reliability for Claude automations. What are the four essential things you should implement from day one to catch most issues?",
        minLength: 50,
      },
    ],
  },
  "04": {
    title: "Automation Workflows Quiz",
    questions: [
      {
        type: "mc",
        question:
          "According to the course, what is the recommended starting platform for building Claude-powered automations and why?",
        options: [
          "Zapier, because it has the most integrations",
          "n8n, because it's open-source and free",
          "Make.com, because it hits the sweet spot of power and usability for Claude workflows",
          "Custom code, because it gives full control",
        ],
        correctIndex: 2,
      },
      {
        type: "mc",
        question:
          "What is the correct approach to building a multi-step Claude-powered pipeline?",
        options: [
          "Build all steps at once, then test the entire pipeline end-to-end",
          "Map the manual process first, assign Claude models to each step, then build and test sequentially",
          "Start with the most complex step to ensure it works before adding simpler ones",
          "Copy an existing automation template and modify it for your use case",
        ],
        correctIndex: 1,
      },
      {
        type: "short",
        question:
          "Describe the pattern that all three Claude-powered workflows (email, CRM, content) share in terms of how they divide work between humans and Claude, and how different Claude models are used at different steps.",
        minLength: 50,
      },
    ],
  },
  "05": {
    title: "Claude Agents Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the four core components of a Claude agent as defined in this module?",
        options: [
          "Input, output, processing, storage",
          "The brain (Claude), tools, memory, and the agentic loop (think-act-observe)",
          "API key, endpoint, request body, and response handler",
          "System prompt, user message, function calls, and database",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "In a multi-agent Claude system, how should you assign Claude models to different agent roles?",
        options: [
          "Use the same model for all agents to keep things simple",
          "Always use Opus for every agent to ensure quality",
          "Use Opus for the manager agent, Sonnet for work agents, and Haiku for simple classification/routing agents",
          "Use Haiku for everything since multi-agent systems are already expensive",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Explain how Claude's tool use works (the tool_use and tool_result flow) and why you should start with read-only tools when building agents. Give an example of the risk of giving Claude write tools without guardrails.",
        minLength: 50,
      },
    ],
  },
  "06": {
    title: "Deploy & Operate Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the staging-to-production pattern for launching Claude systems?",
        options: [
          "Build in production and fix issues as they appear",
          "Build in staging, run with real data but no real actions, monitor Claude output quality for 3-5 days, then switch to production",
          "Test with dummy data for one day, then go live immediately",
          "Deploy to production and set up monitoring after launch",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "What should you log for every Claude automation run?",
        options: [
          "Just the final output and whether it succeeded",
          "Only errors and failures for debugging",
          "Input, Claude model used, prompt sent, response received, tokens consumed, cost, actions taken, and errors",
          "Just the timestamp and a pass/fail indicator",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe what a handoff document for a Claude-powered system should contain, including Claude-specific details, and why building yourself out of every system is critical for scaling.",
        minLength: 50,
      },
    ],
  },
};

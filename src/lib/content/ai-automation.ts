import type { CourseContent } from "./types";

export const aiAutomation: CourseContent = {
  "01-1": {
    title: "How LLMs actually work (no fluff)",
    duration: "5 min read",
    content: `Large language models predict the next word. That's it. Every response you get from ChatGPT, Claude, or Gemini is just the model calculating the most likely next token based on everything before it.

## Why this matters for you

Understanding this changes how you use AI. You stop treating it like a search engine and start treating it like a reasoning machine that needs clear direction.

**The key insight:** LLMs don't "know" things. They've compressed patterns from training data into weights. When you ask a question, the model reconstructs an answer from those patterns. This is why:

- More context = better output (the model has more patterns to work with)
- Specific instructions beat vague ones (you're narrowing the prediction space)
- AI can be confidently wrong (it's predicting likely text, not verified facts)

## How they actually process your input

1. Your text gets split into tokens (roughly 3/4 of a word each)
2. Each token gets converted to a number the model understands
3. The model processes all tokens through layers of attention mechanisms
4. It outputs probability scores for what comes next
5. It picks the most likely next token and repeats

The "attention" part is what makes modern AI good. It lets the model focus on relevant parts of your input when generating each word. When you write a long prompt, the model weighs which parts matter most for each word it generates.

## The practical takeaway

You're not asking a genius for answers. You're steering a prediction engine. The better your steering (prompts, context, structure), the better your output. Everything else in this course builds on this.`,
    takeaways: [
      "LLMs predict the next token — they don't truly understand or know things",
      "More context and specificity always produces better output",
      "AI can be confidently wrong because it optimizes for likely text, not truth",
      "Your job is to steer the prediction engine with clear direction",
    ],
    exercise:
      "Open Claude or ChatGPT. Ask the same question two ways: first vague ('tell me about sales'), then specific ('give me a 5-step cold email framework for selling SaaS to small businesses'). Compare the outputs. Notice how specificity changes everything.",
  },
  "01-2": {
    title: "The model landscape: GPT, Claude, Gemini, open-source",
    duration: "6 min read",
    content: `Not all AI models are the same. Picking the right one for the right job is a skill that saves you time and money.

## The big players

**Claude (Anthropic)** — Best for long documents, nuanced writing, following complex instructions, and coding. My daily driver. Handles 200K+ token context windows, meaning you can paste entire codebases or documents and it processes all of it.

**GPT-4 / GPT-4o (OpenAI)** — The most well-known. Strong at general tasks, coding, and creative writing. GPT-4o is faster and cheaper, good enough for most tasks. The ecosystem (plugins, API, integrations) is the largest.

**Gemini (Google)** — Best for tasks involving Google's ecosystem. Strong multimodal capabilities (text + images + video). Good for research tasks with Google Search integration.

**Open-source (Llama, Mistral, DeepSeek)** — Free to run on your own hardware. Good for privacy-sensitive tasks or when you need to customize the model. Smaller models can run on a laptop. Larger ones compete with GPT-4.

## When to use what

- **Writing sales copy, emails, proposals:** Claude or GPT-4o
- **Coding and debugging:** Claude (best at following technical instructions)
- **Quick research:** Gemini (integrated search) or GPT with browsing
- **Bulk processing on a budget:** GPT-4o-mini or open-source
- **Sensitive data you can't send to the cloud:** Open-source models locally

## Cost comparison

API pricing matters when you're building automations that run hundreds of times per day.

- GPT-4o-mini: ~$0.15 per million input tokens (cheapest quality option)
- Claude Haiku: ~$0.25/M input (fast, cheap, good for simple tasks)
- GPT-4o: ~$2.50/M input (mid-tier)
- Claude Sonnet: ~$3/M input (best value for complex tasks)
- Claude Opus / GPT-4: ~$15/M input (premium, use only when needed)

## The real move

Don't marry one model. Use cheap models for simple tasks, premium models for complex ones. Route automatically based on task complexity. That's how you build cost-effective AI systems.`,
    takeaways: [
      "Claude excels at long documents, coding, and complex instructions",
      "GPT-4o is the best general-purpose option with the largest ecosystem",
      "Use cheap models (GPT-4o-mini, Haiku) for simple tasks to save money",
      "The best operators use multiple models strategically, not just one",
    ],
    exercise:
      "Take one task you do regularly (writing emails, summarizing docs, etc). Run it through Claude, GPT-4o, and Gemini. Note which gives the best output and which is fastest. Start building your mental model of which tool fits which job.",
  },
  "01-3": {
    title: "Tokens, context windows, and why it matters",
    duration: "4 min read",
    content: `Tokens are the currency of AI. Every input and output costs tokens. Understanding this lets you build smarter, cheaper systems.

## What's a token?

A token is roughly 3/4 of a word. "Automation" is 1-2 tokens. "I want to build an AI agent" is about 8 tokens. Punctuation, spaces, and special characters are also tokens.

**Why it matters:** You pay per token on API calls. You also have a maximum number of tokens per conversation (the context window). Hit the limit and the model starts forgetting your earlier instructions.

## Context windows

Think of the context window as the model's working memory. Everything in the conversation — your system prompt, the conversation history, and the current response — has to fit inside it.

- GPT-4o: 128K tokens (~96K words)
- Claude: 200K tokens (~150K words)
- Gemini: Up to 1M tokens

**Practical implication:** With Claude's 200K window, you can paste an entire codebase, a 300-page document, or weeks of email threads and the model processes all of it at once.

## How to be token-efficient

1. **Be concise in prompts.** Don't repeat yourself. Say it once, clearly.
2. **Summarize conversation history** instead of keeping everything. After a long back-and-forth, ask the model to summarize key decisions, then start fresh with that summary.
3. **Use system prompts wisely.** They persist across every message — keep them focused.
4. **Chunk large tasks.** Instead of one massive prompt, break it into steps and process sequentially.

## The cost equation

If you're building an automation that runs 1,000 times per day with 2,000 tokens per run, that's 2 million tokens per day. At GPT-4o-mini rates ($0.15/M), that's $0.30/day. At Claude Opus rates ($15/M), that's $30/day. Same task, 100x price difference. Pick the right model.`,
    takeaways: [
      "1 token ≈ 3/4 of a word — everything costs tokens",
      "Context window = the model's working memory, don't waste it",
      "Summarize and chunk to stay within limits on long tasks",
      "Model choice dramatically affects cost at scale — optimize early",
    ],
    exercise:
      "Go to platform.openai.com/tokenizer. Paste one of your recent prompts and see how many tokens it uses. Now rewrite it to be 50% shorter while keeping the same meaning. This skill saves you real money at scale.",
  },
  "01-4": {
    title: "Choosing the right model for the right job",
    duration: "5 min read",
    content: `This is where most people waste money and get worse results. They use one model for everything. Don't be that person.

## The decision framework

Ask yourself three questions before every AI task:

**1. How complex is this task?**
- Simple (classification, extraction, reformatting) → Use the cheapest model
- Medium (writing, summarizing, basic analysis) → Mid-tier model
- Complex (multi-step reasoning, coding, strategy) → Premium model

**2. How important is quality?**
- Internal use only → Cheaper is fine
- Client-facing output → Worth paying for premium
- High-stakes decisions → Always use the best available

**3. How often does this run?**
- One-time → Cost doesn't matter, use the best
- Daily → Optimize for cost-quality balance
- Thousands of times per day → Every token matters

## My model routing playbook

Here's exactly how I route tasks across my operations:

**Cheap tier (GPT-4o-mini / Claude Haiku):**
- Classifying incoming emails (spam, lead, support)
- Extracting data from structured documents
- Simple formatting and reformatting
- Yes/no decisions

**Mid tier (GPT-4o / Claude Sonnet):**
- Writing first drafts of emails and content
- Summarizing meetings and documents
- Code generation for standard patterns
- Research synthesis

**Premium tier (Claude Opus / GPT-4):**
- Complex strategy documents
- Debugging difficult code
- Multi-step agent workflows
- Anything where being wrong is expensive

## The automation angle

When you build automated systems (which we'll do in this course), you want a routing layer. The system looks at the incoming task, classifies its complexity, and routes to the appropriate model. This alone can cut your AI costs by 60-80% while maintaining quality where it matters.`,
    takeaways: [
      "Match model tier to task complexity — don't overpay for simple work",
      "Three factors: complexity, quality requirements, and frequency",
      "Build routing logic into your automations to optimize cost automatically",
      "Using one model for everything is the most expensive mistake",
    ],
    exercise:
      "List 10 tasks you regularly use AI for. Categorize each as simple, medium, or complex. Assign the appropriate model tier to each. Calculate what you'd save monthly by routing instead of using one model for everything.",
  },
  "02-1": {
    title: "The anatomy of a great prompt",
    duration: "5 min read",
    content: `A great prompt has four parts. Miss any one of them and your output suffers.

## The four components

**1. Role** — Tell the model who it is.
"You are a senior sales consultant who specializes in B2B SaaS."

This isn't fluff. It loads relevant patterns and expertise into the model's generation. A "senior sales consultant" generates different text than a "helpful assistant."

**2. Context** — Give it the situation.
"I'm reaching out to a VP of Marketing at a 200-person company. They currently use HubSpot for marketing automation but are struggling with lead scoring."

The more relevant context you provide, the more targeted the output. Don't dump everything — give what matters for this specific task.

**3. Task** — Tell it exactly what to do.
"Write a cold email that acknowledges their HubSpot setup, identifies the lead scoring gap, and positions our AI-powered scoring tool as the solution. Keep it under 150 words."

Be specific about format, length, tone, and deliverable.

**4. Constraints** — Set boundaries.
"Don't use buzzwords like 'revolutionary' or 'game-changing.' Don't include a generic CTA. End with a specific question about their current lead scoring process."

Constraints prevent the model from falling into generic patterns.

## The difference in practice

**Bad prompt:** "Write me a cold email for my product"

**Good prompt:** "You are a B2B sales rep who's closed $2M+ in SaaS deals. I'm selling an AI lead scoring tool to mid-market companies using HubSpot. Write a cold email to a VP of Marketing at a 200-person e-commerce company. Keep it under 120 words. Open with something specific to e-commerce, not a generic opener. End with a question, not a 'let me know if you're interested.' No buzzwords."

The second prompt takes 30 seconds longer to write and saves you 20 minutes of editing.`,
    takeaways: [
      "Every great prompt has: Role, Context, Task, and Constraints",
      "Roles load relevant expertise patterns into the model's output",
      "Constraints prevent generic, buzzword-filled responses",
      "30 extra seconds writing the prompt saves 20 minutes editing the output",
    ],
    exercise:
      "Take your most common AI task. Write the prompt using all four components: Role, Context, Task, Constraints. Run it and compare the output to what you normally get. Keep this as a template.",
  },
  "02-2": {
    title: "System prompts, roles, and context injection",
    duration: "5 min read",
    content: `System prompts are the instructions that run before every conversation. They're the most important thing you'll write when building AI systems.

## What a system prompt does

When you use the API (not just the chat interface), you can set a "system" message that the model treats as its core instructions. Everything the user sends gets interpreted through this lens.

**Why this matters for automation:** Every AI agent, chatbot, or automated workflow you build starts with a system prompt. Get it right and the system works 95% of the time. Get it wrong and you're debugging forever.

## How to write a system prompt

**Start with identity:**
"You are the AI assistant for [Company]. You handle customer inquiries about [products/services]."

**Define behavior:**
"Always respond in a professional but friendly tone. Never make promises about delivery dates. If you don't know the answer, say 'Let me connect you with our team' and collect their email."

**Set boundaries:**
"Never discuss competitor products. Never share internal pricing beyond what's on the website. Never pretend to be human."

**Provide reference data:**
"Our products: [list]. Our pricing tiers: [list]. Our support hours: [hours]. Our return policy: [policy]."

## Context injection

Context injection means dynamically inserting relevant information into the prompt before sending it to the model. This is how you make AI systems that feel personalized.

**Example:** A customer support bot receives a message. Before sending it to the AI, you:
1. Look up the customer's name and order history
2. Check if they have open support tickets
3. Inject this into the prompt: "Customer: John Smith. Recent order: #4521 (shipped 3 days ago). Open ticket: billing question from yesterday."

Now the AI responds with specific, relevant information instead of generic answers.

## The template I use

Every system prompt I write follows this structure:
1. Who you are (2 sentences)
2. What you do (3-5 behaviors)
3. What you don't do (3-5 constraints)
4. Reference data (injected dynamically)
5. Output format (how to structure responses)`,
    takeaways: [
      "System prompts are the foundation of every AI system you build",
      "Structure: identity → behavior → boundaries → reference data → output format",
      "Context injection makes generic AI feel personalized and specific",
      "Dynamic data (customer info, order history) gets injected before each call",
    ],
    exercise:
      "Write a system prompt for an AI assistant that handles customer inquiries for a business you know well. Include all 5 sections: identity, behavior, boundaries, reference data, and output format. Test it in Claude or ChatGPT's system prompt field.",
  },
  "02-3": {
    title: "Chain-of-thought and reasoning techniques",
    duration: "5 min read",
    content: `Chain-of-thought prompting is the single biggest unlock for getting AI to handle complex tasks. Instead of asking for a direct answer, you ask the model to think through it step by step.

## Why it works

Remember: LLMs predict the next token. When you ask for a direct answer to a complex question, the model has to make a giant leap. When you ask it to reason step by step, each step is a smaller, easier prediction. The accuracy difference is massive.

## How to use it

**Direct (often wrong):** "What's 17 × 24 + 156 / 3?"

**Chain-of-thought (usually right):** "Solve this step by step, showing your work: 17 × 24 + 156 / 3"

**For business tasks:**

"I need to decide whether to hire a full-time content creator or use contractors. Think through this step by step:
1. List the pros and cons of each option
2. Estimate the cost difference over 6 months
3. Consider the quality and consistency implications
4. Factor in management overhead
5. Make a recommendation with your reasoning"

## Advanced technique: self-critique

After the model gives you an answer, ask it to critique its own work:

"Now review your recommendation. What are the weakest parts of your argument? What assumptions might be wrong? Revise your answer based on this critique."

This catches errors the model would otherwise miss. It's like having a built-in editor.

## Structured reasoning

For repeatable tasks, give the model a reasoning framework:

"Evaluate this business opportunity using this framework:
- Market: Is the market large and growing?
- Problem: Is the problem painful enough that people pay to solve it?
- Solution: Can we build something 10x better than alternatives?
- Timing: Why now?
- Team: Do we have the right people?

Score each 1-5 and explain your score."

This produces consistent, comparable analysis every time.`,
    takeaways: [
      "Step-by-step reasoning dramatically improves accuracy on complex tasks",
      "Self-critique catches errors — ask the model to review its own output",
      "Structured frameworks produce consistent, comparable analysis",
      "Chain-of-thought works because each step is an easier prediction",
    ],
    exercise:
      "Take a real business decision you're facing. Write a chain-of-thought prompt that walks the AI through it step by step. Include a self-critique step at the end. Compare this output to what you get from a direct question.",
  },
  "02-4": {
    title: "Building reusable prompt libraries",
    duration: "4 min read",
    content: `If you're writing the same type of prompt more than twice, you should template it. Prompt libraries are how you scale AI usage across a team without everyone reinventing the wheel.

## What a prompt library is

A collection of tested, proven prompts organized by use case. Each prompt is a template with variables you fill in for each specific use.

## How to build one

**Step 1: Identify your repeating tasks**
- Writing cold emails
- Summarizing meeting notes
- Generating social media posts
- Analyzing competitor websites
- Writing project briefs

**Step 2: Write and test the base prompt**
For each task, write the best prompt you can using the Role/Context/Task/Constraints framework. Test it 10+ times with different inputs. Refine until it produces good output at least 9/10 times.

**Step 3: Templatize with variables**

\`\`\`
Role: You are a B2B sales rep specializing in {{INDUSTRY}}.
Context: Reaching out to {{TITLE}} at {{COMPANY}} ({{COMPANY_SIZE}} employees). They use {{CURRENT_TOOL}} and struggle with {{PAIN_POINT}}.
Task: Write a cold email under {{WORD_COUNT}} words.
Constraints: {{CONSTRAINTS}}
\`\`\`

**Step 4: Organize by category**
Group prompts into folders: Sales, Marketing, Operations, Customer Support, Internal.

## Where to store them

For solo use: A Notion database or simple folder of text files works.
For a team: A shared doc with version history. Or build them directly into your automation tools.

**For automation:** These templates become the backbone of your AI workflows. When a new lead comes in, the system fills in the variables and generates personalized outreach automatically. When a meeting ends, the transcript gets plugged into the summary template. This is how you go from using AI manually to having it work for you in the background.

## The maintenance cycle

Review your library monthly. Kill prompts that don't perform. Update ones where you've found better approaches. Add new ones as you discover new use cases. A prompt library is a living system.`,
    takeaways: [
      "Template any prompt you use more than twice with fill-in variables",
      "Test each template 10+ times before adding to the library",
      "Organize by category: Sales, Marketing, Operations, Support, Internal",
      "Prompt libraries become the backbone of your automated AI workflows",
    ],
    exercise:
      "Create your first prompt library. Pick your 5 most common AI tasks. Write a templatized prompt for each one with clear variables. Save them in a Notion page or folder. Use them for the next week and refine based on results.",
  },
  "03-1": {
    title: "Calling AI APIs without a CS degree",
    duration: "6 min read",
    content: `You don't need to be a developer to call AI APIs. You need to understand what an API is and use tools that handle the technical parts.

## What's an API?

An API is a way for two systems to talk to each other. When you use ChatGPT's website, your browser is calling OpenAI's API behind the scenes. When you build automations, you call the same API directly.

Think of it like ordering food. The restaurant (AI model) can make anything on the menu. The API is the waiter — you tell it what you want, it goes to the kitchen, and brings back your order.

## The three things you need

**1. An API key** — Your ID that says you're allowed to use the service. Get it from the provider's website (platform.openai.com, console.anthropic.com, etc). Guard it like a password.

**2. The endpoint** — The URL you send your request to. For OpenAI: \`https://api.openai.com/v1/chat/completions\`. For Anthropic: \`https://api.anthropic.com/v1/messages\`.

**3. The request body** — What you're asking for. Includes your prompt, which model to use, and settings like temperature.

## No-code ways to call APIs

**Make.com / Zapier / n8n:** These tools have built-in modules for OpenAI, Claude, etc. You just drag and drop, paste your API key, and write your prompt. No code needed.

**HTTP request modules:** Even for APIs without built-in modules, you can use a generic HTTP request. Set the URL, headers (including your API key), and body.

## The basic API call structure

Every AI API call looks roughly the same:

- **URL:** Where to send the request
- **Headers:** Your API key and content type
- **Body:** The model name, your messages (system + user), and settings
- **Response:** The AI's output, plus metadata like token usage

## Temperature and settings

**Temperature (0-1):** How creative vs. deterministic the output is.
- 0 = Same answer every time (good for data extraction, classification)
- 0.7 = Balanced (good for most tasks)
- 1.0 = Maximum creativity (good for brainstorming)

**Max tokens:** Limits the response length. Set this to prevent runaway costs.

Start with no-code tools. Once you're comfortable with the flow, you can move to code if you need more control.`,
    takeaways: [
      "APIs let systems talk to each other — no coding background required",
      "You need three things: API key, endpoint URL, and request body",
      "No-code tools like Make.com handle API calls with drag-and-drop",
      "Temperature controls creativity (0 = consistent, 1 = creative)",
    ],
    exercise:
      "Sign up for Make.com (free tier). Create a scenario with one step: an OpenAI or Claude module. Paste your API key, write a simple prompt, and run it. You just called an AI API. This is the foundation of everything we build from here.",
  },
  "03-2": {
    title: "Connecting AI to Airtable, Notion, Sheets, Slack",
    duration: "5 min read",
    content: `This is where AI goes from a chat tool to a business tool. When you connect AI to the apps you already use, it can read, write, and act on real data automatically.

## The concept: triggers and actions

Every automation has two parts:
- **Trigger:** What starts the automation (new row in Sheets, new message in Slack, form submission, scheduled time)
- **Action:** What happens (AI processes something, then writes the result somewhere)

## Common integrations

**AI + Google Sheets:**
Trigger: New row added → AI analyzes the data → Writes analysis back to the sheet.
Use case: Lead comes in via form → AI scores and qualifies → Result appears in your CRM sheet.

**AI + Slack:**
Trigger: Message in a channel → AI reads and responds.
Use case: Team asks questions in #ask-ai → AI pulls from your company knowledge base and answers.

**AI + Notion:**
Trigger: New page created → AI processes content → Updates properties.
Use case: Meeting notes pasted → AI extracts action items, assigns owners, sets due dates.

**AI + Airtable:**
Trigger: New record → AI enriches data → Updates fields.
Use case: New lead record → AI researches the company → Fills in industry, size, and a personalized outreach draft.

## How to build these (step by step)

1. Open Make.com and create a new scenario
2. Add your trigger module (e.g., "Watch new rows" in Google Sheets)
3. Add an AI module (OpenAI or HTTP request to Claude)
4. Map the data from the trigger into your prompt (e.g., "Analyze this lead: {{name}}, {{company}}, {{website}}")
5. Add an action module to write the result back (e.g., "Update row" in Google Sheets)
6. Test with real data
7. Turn on scheduling (run every 5 minutes, every hour, etc.)

## The power move

Chain multiple integrations together. Lead comes in (Sheets) → AI qualifies (Claude) → If qualified, sends personalized email (Gmail) → Logs in CRM (Airtable) → Notifies you in Slack. All automatic. All happening while you sleep.`,
    takeaways: [
      "Every automation has a trigger (what starts it) and an action (what happens)",
      "Connect AI to tools you already use — Sheets, Slack, Notion, Airtable",
      "Map data from triggers directly into AI prompts for personalized processing",
      "Chain integrations together for end-to-end automated workflows",
    ],
    exercise:
      "Build your first real integration: Google Sheets + AI. Create a sheet with a 'Lead Name' and 'Company' column. Set up a Make.com scenario that watches for new rows, sends the data to an AI model with a qualification prompt, and writes the result back to a 'Score' column.",
  },
  "03-3": {
    title: "Webhooks and real-time triggers",
    duration: "5 min read",
    content: `Webhooks are how you make AI systems respond instantly to real-world events. Instead of checking every 5 minutes, your system reacts the moment something happens.

## Polling vs. webhooks

**Polling:** Your automation checks every X minutes. "Any new data? No. Any new data? No. Any new data? Yes!" Slow, wastes API calls, and creates delays.

**Webhooks:** The source system sends you a notification the instant something happens. "Hey, a new order just came in. Here's the data." Instant, efficient, real-time.

## How webhooks work

1. You create a webhook URL (Make.com, Zapier, or your own server generates one)
2. You register that URL with the source app (Stripe, Shopify, GitHub, etc.)
3. When an event happens, the source app sends the data to your URL
4. Your automation receives it instantly and processes it

## Common webhook use cases

**Stripe payment → AI follow-up:**
Customer pays → webhook fires → AI generates a personalized welcome email with onboarding steps → Email sends automatically.

**Form submission → instant AI processing:**
Someone fills out your contact form → webhook fires → AI analyzes the inquiry → Drafts a response → You review and send (or it auto-sends for simple queries).

**GitHub push → AI code review:**
Developer pushes code → webhook fires → AI reviews the changes → Posts comments on the pull request.

## Setting up a webhook in Make.com

1. Add a "Custom Webhook" module as your trigger
2. Copy the webhook URL it generates
3. Go to the source app's webhook settings
4. Paste your URL and select which events to send
5. Test by triggering an event
6. Build your AI processing logic after the webhook module

## Security basics

- Webhook URLs are like passwords — don't share them publicly
- Most platforms sign webhooks with a secret so you can verify they're legit
- Always validate incoming data before processing it
- Set up error handling for when the AI processing fails`,
    takeaways: [
      "Webhooks deliver data instantly — no polling delays",
      "Source apps push data to your URL when events happen",
      "Common pattern: event → webhook → AI processes → action taken",
      "Treat webhook URLs like passwords and validate incoming data",
    ],
    exercise:
      "Set up a webhook in Make.com. Create a Custom Webhook trigger, copy the URL. Use a tool like webhook.site to send a test payload to it. Watch the data arrive in Make.com in real time. This is the foundation for real-time AI systems.",
  },
  "03-4": {
    title: "Error handling and reliability",
    duration: "5 min read",
    content: `Your automations will fail. APIs go down, data comes in weird formats, rate limits get hit. The difference between a toy and a production system is how it handles failure.

## The most common failures

**1. API rate limits:** You're sending too many requests too fast. Solution: Add delays between calls, or queue requests and process them gradually.

**2. Timeout errors:** The AI takes too long to respond (usually on complex prompts). Solution: Set reasonable timeouts, break complex tasks into smaller ones.

**3. Malformed data:** The trigger sends unexpected data (empty fields, wrong types). Solution: Validate data before processing. Check that required fields exist.

**4. AI hallucination:** The model generates incorrect or nonsensical output. Solution: Add validation steps. For critical outputs, check format and reasonableness before acting on them.

**5. Cost overruns:** A loop goes infinite or data volume spikes. Solution: Set daily spending limits on your API keys. Add circuit breakers that stop processing after N runs.

## How to build reliable systems

**Retry logic:** If a call fails, wait 5 seconds and try again. If it fails 3 times, alert you and stop.

**Fallback models:** If Claude is down, route to GPT. If GPT is down, queue the task for later.

**Logging:** Log every input, output, and error. When something goes wrong (and it will), logs are how you debug it.

**Monitoring:** Set up Slack alerts for failures. If your automation errors 3 times in an hour, you get a message. Don't discover failures when a customer complains.

**Validation:** Before writing AI output to your CRM or sending it in an email, validate it. Does it contain required fields? Is it the right format? Is it a reasonable length? This 30-second check prevents embarrassing errors.

## The 80/20 of reliability

You don't need perfect systems on day one. Start with:
1. Basic retry logic (3 attempts)
2. Error notifications to Slack/email
3. Input validation on required fields
4. Daily spending limits

These four things catch 80% of issues. Add more sophistication as your systems mature.`,
    takeaways: [
      "Plan for failure: APIs go down, data gets weird, models hallucinate",
      "Retry logic, fallback models, and validation are the essentials",
      "Log everything — debugging without logs is guessing",
      "Set spending limits and error alerts from day one",
    ],
    exercise:
      "Take an automation you've built (or the one from the previous exercise). Add three things: (1) a retry step if the AI call fails, (2) a Slack/email notification on error, (3) a validation check that the AI output isn't empty before writing it back. These three changes make it production-ready.",
  },
  "04-1": {
    title: "Make, Zapier, n8n — when to use what",
    duration: "5 min read",
    content: `Three major automation platforms. Each has strengths. Here's how I think about them.

## Make.com (my primary tool)

**Best for:** Complex, multi-step automations with branching logic, data transformation, and AI integration.

**Why I use it:** Visual flow builder is intuitive. Handles complex scenarios that Zapier can't. API calls are flexible. Pricing is based on operations, not tasks, so complex automations cost less.

**Limitations:** Steeper learning curve than Zapier. Can get messy with very large scenarios.

## Zapier

**Best for:** Simple, linear automations. "When X happens, do Y." Great for non-technical users.

**Why it's popular:** Easiest to set up. Huge app library (6,000+ integrations). Works well for straightforward workflows.

**Limitations:** Gets expensive fast for complex logic. Multi-step zaps cost more. Limited branching and looping. AI integration is basic.

## n8n

**Best for:** Developers or technical operators who want full control. Self-hosted option means your data stays private.

**Why it's powerful:** Open-source. Self-hostable. No per-operation pricing. Full code access when you need it. Best for teams building many automations at scale.

**Limitations:** Requires technical setup (Docker, hosting). UI is less polished. Smaller integration library (but growing fast).

## My recommendation

**Start with Make.com.** It hits the sweet spot of power and usability. You can build anything from simple email automations to complex AI agent workflows.

**Use Zapier** for quick, simple connections where you just need "when this, do that."

**Graduate to n8n** when you're running 50+ automations and the per-operation costs on Make/Zapier add up, or when you need self-hosting for privacy.

## The real insight

The platform doesn't matter as much as the thinking. The skill is in designing the automation — what triggers it, what logic it follows, what actions it takes. That transfers across any platform.`,
    takeaways: [
      "Make.com is the best balance of power and usability for AI automations",
      "Zapier is simplest for basic 'when X, do Y' automations",
      "n8n is best for technical teams running many automations at scale",
      "The automation design skill transfers across all platforms",
    ],
    exercise:
      "If you haven't already, create accounts on Make.com and Zapier (both have free tiers). Build the same simple automation on both: 'When I get an email with subject line containing X, send me a Slack message.' Compare the experience. Decide which feels more natural to you.",
  },
  "04-2": {
    title: "Building multi-step automated pipelines",
    duration: "6 min read",
    content: `Single-step automations are nice. Multi-step pipelines are where the real value is. This is how you build systems that handle entire workflows autonomously.

## What a pipeline looks like

A pipeline is a series of connected steps where each step's output feeds into the next. Think of it as an assembly line for information.

**Example: Lead processing pipeline**

1. New lead submits form (trigger)
2. AI enriches lead data (research company, find LinkedIn, estimate revenue)
3. AI scores the lead (1-10 based on fit criteria)
4. Router: If score >= 7, go to step 5. If < 7, go to step 8
5. AI drafts personalized outreach email
6. Email sends to the lead
7. Lead gets added to CRM with all enriched data. End.
8. Lead gets added to nurture list with lower priority. End.

**This entire pipeline runs in under 30 seconds, unattended.**

## How to design a pipeline

**Step 1: Map the manual process first.** Write out every step a human would take. Don't skip anything.

**Step 2: Identify decision points.** Where does a human make a judgment call? These become router/filter modules with AI handling the judgment.

**Step 3: Identify data dependencies.** What information does each step need? Make sure earlier steps produce it.

**Step 4: Build sequentially.** Start with step 1. Get it working. Add step 2. Test. Add step 3. Test. Don't build the whole thing and then test — you'll spend hours debugging.

**Step 5: Add error handling at each step.** If step 3 fails, what happens? Should it retry? Skip? Alert you?

## Data flow between steps

The key concept in Make.com/Zapier is mapping. Each step produces output data. The next step can reference any field from any previous step.

Step 1 output: \`{name: "John", email: "john@company.com"}\`
Step 2 prompt: "Research {{step1.name}} at {{step1.email.domain}}..."
Step 2 output: \`{company_size: 200, industry: "SaaS", ...}\`
Step 3 prompt: "Score this lead: {{step1.name}}, {{step2.industry}}, {{step2.company_size}}..."

Each step builds on the data accumulated from all previous steps.

## The compound effect

One pipeline saves you 15 minutes of manual work. Ten pipelines save you 2.5 hours per day. At scale, this is the difference between a one-person operation that handles 10 leads per day and one that handles 200.`,
    takeaways: [
      "Pipelines chain multiple steps where each output feeds the next",
      "Map the manual process first, then automate each step",
      "Build and test sequentially — don't build everything then debug",
      "10 well-built pipelines can save 2.5+ hours per day",
    ],
    exercise:
      "Pick your most time-consuming repeating workflow. Map out every manual step on paper. Identify which steps can be automated with AI. Build the first 3 steps as a pipeline in Make.com. Test it with real data.",
  },
  "04-3": {
    title: "AI-powered email, CRM, and content workflows",
    duration: "5 min read",
    content: `These three workflows alone can transform a small operation. I run variations of all three across my businesses.

## AI email workflow

**Inbound email processing:**
1. Email arrives in inbox
2. AI classifies: lead, support, spam, or internal
3. For leads: AI drafts a personalized response based on their inquiry
4. For support: AI generates an answer from your knowledge base
5. Draft goes to your inbox for quick review and send (or auto-sends for common questions)

**Result:** Instead of writing 30 emails from scratch daily, you review and tweak 30 drafts. Saves 2+ hours.

## AI CRM workflow

**Lead enrichment on entry:**
1. New contact added to CRM (manually or from form)
2. AI researches the person/company using their email domain
3. AI fills in: company size, industry, estimated revenue, recent news
4. AI scores the lead based on your ideal customer profile
5. AI drafts a first-touch message personalized to their situation
6. High-score leads get flagged for immediate outreach

**Result:** Every lead gets the research and personalization that used to take 10 minutes, in 10 seconds.

## AI content workflow

**Content repurposing pipeline:**
1. You record a 10-minute video or voice memo (your raw thoughts on a topic)
2. AI transcribes it
3. AI generates 5 pieces of content from that one recording:
   - A long-form LinkedIn post
   - 3 tweet-length social posts
   - An email newsletter paragraph
4. Each piece is formatted for its platform
5. Drafts go to your content calendar for review

**Result:** One 10-minute recording becomes a week of content. Instead of sitting in front of a blank page, you talk about what you know and AI handles the rest.

## The common thread

Notice the pattern: human does the high-value part (the thinking, the decision, the relationship), AI handles the repetitive execution (research, drafting, formatting, routing). That's the model for every workflow you'll build.`,
    takeaways: [
      "AI email processing: classify, draft, review — saves 2+ hours daily",
      "AI CRM enrichment: every lead gets instant research and personalization",
      "AI content repurposing: one recording becomes a week of multi-platform content",
      "Pattern: humans do high-value thinking, AI handles repetitive execution",
    ],
    exercise:
      "Pick one of these three workflows and build a basic version this week. Start with the email workflow — it's the easiest to set up and has the most immediate impact. Set up email → AI classification → draft response. Test with 5 real emails.",
  },
  "04-4": {
    title: "Testing and maintaining automations at scale",
    duration: "4 min read",
    content: `Building automations is the fun part. Keeping them running is the real job. Here's how to not let your systems break silently while you sleep.

## Testing before launch

**Test with edge cases, not just happy paths.** Your automation works with perfect data. But what about:
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

**Weekly review (15 minutes):**
- Review AI output quality on a random sample
- Check costs vs. budget
- Identify any automations that should be adjusted

**Monthly optimization (1 hour):**
- Kill automations that aren't delivering value
- Update prompts based on observed output quality
- Consolidate redundant workflows

## The maintenance checklist

When something breaks, run through this:
1. **Check the trigger.** Is data still flowing in? Did the source app change something?
2. **Check the AI step.** Is the API responding? Did you hit a rate limit? Is the prompt still producing good output?
3. **Check the action.** Can the destination still accept data? Did permissions change?
4. **Check the data.** Is the format what you expected? Are any fields missing?

## Scaling: from 5 to 50 automations

When you have 50+ automations, organization matters:
- **Name them clearly:** "Lead Enrichment - Inbound Form" not "Scenario 47"
- **Group by function:** Sales, Marketing, Operations, Support
- **Document each one:** What it does, what triggers it, what it touches, who owns it
- **Version control:** When you update a prompt, note what changed and why

This documentation takes 5 minutes per automation and saves hours of debugging later.`,
    takeaways: [
      "Test with edge cases — empty fields, long text, special characters",
      "Daily 2-minute health checks catch problems before customers do",
      "Name, group, and document every automation as you build it",
      "Monthly optimization: kill what's not working, improve what is",
    ],
    exercise:
      "Audit your current automations. For each one: give it a clear name, write a one-line description of what it does, and check the last 10 runs for errors. Fix anything broken. Set a recurring calendar reminder for weekly automation reviews.",
  },
  "05-1": {
    title: "What agents actually are and how to build them",
    duration: "6 min read",
    content: `An AI agent is an AI that can take actions, not just generate text. Instead of you copying output from ChatGPT and pasting it somewhere, the agent does it itself.

## The difference: chatbot vs. agent

**Chatbot:** You ask a question, it gives an answer. You do something with that answer.

**Agent:** You give it a goal, it figures out the steps, executes them, and reports back. It can search the web, write files, call APIs, update databases, send emails — whatever tools you give it.

## The components of an agent

**1. The brain (LLM):** The AI model that does the thinking and decision-making.

**2. Tools:** Functions the agent can call. Examples:
- \`search_web(query)\` — searches and returns results
- \`send_email(to, subject, body)\` — sends an email
- \`update_crm(contact_id, data)\` — updates a CRM record
- \`read_database(query)\` — reads from a database

**3. Memory:** The agent's ability to remember context across steps. Short-term memory is the conversation. Long-term memory is stored data it can reference.

**4. The loop:** Think → Act → Observe → Think again. The agent decides what to do, does it, sees the result, and decides the next step.

## A real example

**Agent task:** "Find 10 SaaS companies in Austin with 50-200 employees, find their VP of Marketing on LinkedIn, and draft a personalized cold email for each."

**What the agent does:**
1. Searches for SaaS companies in Austin (tool: web search)
2. Filters by employee count (reasoning)
3. For each company, finds the VP of Marketing (tool: LinkedIn search)
4. Researches each person's recent posts and company news (tool: web search)
5. Drafts a personalized email for each (reasoning + prompt template)
6. Saves everything to a spreadsheet (tool: write to Sheets)

A human doing this: 3-4 hours. The agent: 15 minutes.

## How to build your first agent

The simplest way: use Claude with tool use or OpenAI's function calling. Define your tools as functions, give the agent a goal, and let it work.

For no-code: Make.com scenarios with loops and routers can behave like agents. The AI step decides what to do next, the router directs flow based on the decision, and it loops until the task is complete.`,
    takeaways: [
      "Agents take actions autonomously — they don't just generate text",
      "Four components: brain (LLM), tools, memory, and the think-act-observe loop",
      "Tools are functions the agent can call: search, email, CRM, database",
      "Agents compress hours of manual work into minutes",
    ],
    exercise:
      "Design an agent on paper (don't build it yet). Pick a task you do manually that involves multiple steps and tools. Write out: (1) the goal, (2) the tools it would need, (3) the step-by-step logic it would follow. This is your agent blueprint.",
  },
  "05-2": {
    title: "Tool use: giving agents the ability to act",
    duration: "5 min read",
    content: `Tools are what make agents useful. Without tools, an agent is just a chatbot. With the right tools, it can do anything you can do on a computer.

## How tool use works

You define tools as functions with descriptions. The AI reads the descriptions and decides when to call which tool.

**Example tool definition:**
- Name: search_contacts
- Description: Search the CRM for contacts matching a query
- Parameters: query (string), limit (number, optional)

When the agent encounters a task like "find our recent leads from New York," it recognizes this as a search_contacts task, calls the function with the right parameters, gets the results, and continues its work.

## Designing good tools

**Keep tools focused.** Each tool should do one thing well. Don't build a "do_everything" tool — the AI won't know when to use it.

**Write clear descriptions.** The AI decides which tool to use based on the description. "Search for contacts in the CRM database by name, email, company, or any other field" is better than "search stuff."

**Handle errors gracefully.** If a tool fails, return an error message the AI can understand. "No contacts found matching 'xyz'" is better than crashing.

**Return useful data.** Don't return raw database dumps. Return formatted, relevant data the agent can work with.

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

Every tool you give an agent is a capability it can use autonomously. Be thoughtful about what actions an agent can take without human approval. A "read" tool is low risk. A "send email to client" tool needs guardrails. A "delete database" tool probably needs human confirmation.

Start with read-only tools. Add write tools carefully with validation and approval steps.`,
    takeaways: [
      "Tools are functions the AI calls to take real-world actions",
      "Keep tools focused — one thing per tool with clear descriptions",
      "Start with read-only tools, add write tools with guardrails",
      "The tool descriptions are how the AI decides which tool to use",
    ],
    exercise:
      "For the agent you designed in the previous exercise, define 3-5 tools it would need. For each tool, write: the name, a clear description, the input parameters, and what it returns. This is how you'd implement them in a real agent framework.",
  },
  "05-3": {
    title: "Multi-agent systems and orchestration",
    duration: "5 min read",
    content: `One agent is powerful. Multiple agents working together is transformative. This is how you build systems that handle complex operations end-to-end.

## Why multi-agent?

Some tasks are too complex for one agent with one set of tools. A research agent thinks differently than a writing agent. A sales agent needs different tools than a support agent. By splitting responsibilities, each agent can be specialized and excellent at its job.

## Architecture patterns

**Sequential pipeline:** Agent A does its work, passes results to Agent B, who passes to Agent C.
- Example: Research Agent → Analysis Agent → Writing Agent
- Lead research → qualification scoring → email drafting

**Supervisor pattern:** One "manager" agent delegates tasks to specialist agents and synthesizes their results.
- Manager receives a request
- Delegates research to Research Agent
- Delegates drafting to Writing Agent
- Reviews and combines outputs
- Returns final result

**Parallel execution:** Multiple agents work simultaneously on different parts of the same task.
- Researching 10 companies? Spin up 10 research agents in parallel.
- Each finishes in 30 seconds instead of 5 minutes sequentially.

## A real multi-agent system

**AI Sales Team (what I run):**

1. **Prospecting Agent:** Finds companies matching ideal customer profile. Tools: web search, database queries. Output: list of qualified companies.

2. **Research Agent:** Deep-dives on each company. Tools: web search, LinkedIn, news APIs. Output: company brief with pain points and opportunities.

3. **Outreach Agent:** Writes personalized emails using research. Tools: email templates, CRM. Output: ready-to-send emails.

4. **Manager Agent:** Orchestrates the pipeline, handles errors, ensures quality. Reviews outputs before they go out.

## Building multi-agent in practice

You don't need a fancy framework. A Make.com scenario with multiple AI steps, each with different system prompts and tools, is a multi-agent system. The "manager" is your routing logic.

For code-based systems, frameworks like LangChain, CrewAI, or Claude's tool use make it straightforward to define multiple agents and wire them together.

Start simple. Build one agent. Get it working. Then add a second agent that handles a different part of the process. Scale from there.`,
    takeaways: [
      "Split complex tasks across specialized agents for better results",
      "Three patterns: sequential pipeline, supervisor, and parallel execution",
      "A Make.com scenario with multiple AI steps IS a multi-agent system",
      "Start with one agent, then add specialists as complexity grows",
    ],
    exercise:
      "Take the agent you've been designing. Identify which parts could be handled by separate specialized agents. Draw the architecture: which agent does what, what data flows between them, and which pattern (sequential, supervisor, parallel) fits best.",
  },
  "05-4": {
    title: "Real business agent builds: research, outreach, ops",
    duration: "6 min read",
    content: `Theory is over. Here are three agent builds I use in production. Study the architecture, then build your own version.

## Build 1: Company Research Agent

**Goal:** Given a company name, produce a comprehensive brief in under 60 seconds.

**Tools:**
- Web search (Google/Bing API)
- Website scraper (reads company website)
- LinkedIn lookup (finds key people)

**System prompt:** "You are a business research analyst. Given a company name, produce a brief covering: what they do, company size, funding/revenue, key decision-makers, recent news, and potential pain points our services could solve."

**Flow:**
1. Search the web for the company
2. Scrape their website for product/service info
3. Find 2-3 key people on LinkedIn
4. Synthesize everything into a structured brief
5. Save to your database/sheet

**Estimated build time:** 2-3 hours in Make.com, including testing.

## Build 2: Outreach Agent

**Goal:** Generate personalized outreach emails at scale using research briefs.

**Tools:**
- Read from research database
- Email template library
- Send email (with human approval gate)

**System prompt:** "You are a B2B sales expert. Using the company research brief, write a cold email that: references something specific about their company, identifies a likely pain point, positions our solution, and ends with a specific question. Keep it under 100 words. Never use buzzwords."

**Flow:**
1. Pull research brief from database
2. Generate personalized email
3. Quality check: is it specific enough? Does it mention something real about the company?
4. If it passes, queue for sending (with optional human review)
5. Log to CRM

## Build 3: Operations Agent

**Goal:** Handle daily operational tasks automatically.

**Tools:**
- Read team updates from Slack
- Check project management tool (Linear, Asana)
- Generate status reports
- Send summaries

**Morning routine (runs at 8 AM):**
1. Pull all Slack messages from the last 12 hours
2. Summarize key discussions and decisions
3. Check project management for overdue or blocked tasks
4. Generate a daily briefing
5. Send to your inbox or Slack

This replaces the 30 minutes you'd spend catching up every morning.

## The pipeline bonus

Complete these three builds and you've earned your shot at a real paid project from my operations. That's not a hypothetical — I actively need operators who can build and maintain these systems. Prove you can do it in the course, and you're first in line.`,
    takeaways: [
      "Research Agent: company brief in 60 seconds (web search + scrape + LinkedIn)",
      "Outreach Agent: personalized emails at scale from research data",
      "Operations Agent: daily briefings, task monitoring, team summaries",
      "Build all three and you're ready for real paid project work",
    ],
    exercise:
      "Build the Company Research Agent. This is your capstone for the agents module. Set up the tools (web search API, website scraper), write the system prompt, build the flow in Make.com or code, and test it with 5 real companies. Save the briefs. This is the skill that gets you paid projects.",
  },
  "06-1": {
    title: "Putting systems into production",
    duration: "5 min read",
    content: `Building a system that works in testing is step one. Making it work reliably at scale, every day, without you babysitting it — that's the real skill.

## The production checklist

Before any system goes live, run through this:

**Data validation:** Does your system handle bad input gracefully? Test with empty fields, extra-long text, special characters, and unexpected formats.

**Error handling:** When something fails (and it will), does your system retry, alert you, or fail gracefully? Never let it fail silently.

**Rate limits:** Are you staying within API limits? If you're processing 500 leads per day, make sure your API plan supports that volume.

**Cost projections:** Run the math. How many API calls per day × cost per call × 30 days. Make sure it fits your budget before launching.

**Permissions and access:** Are API keys stored securely? Can only authorized people trigger or modify the system?

## The staging → production pattern

**Never go straight to production.** Always:

1. Build and test in a staging environment (separate Make.com scenario, test API keys, dummy data)
2. Run with real data but don't take real actions (draft emails instead of sending, log to test database instead of production CRM)
3. Monitor for 3-5 days looking for issues
4. Switch to production once you're confident

## Scaling considerations

**What works at 10 runs/day might break at 1,000.** Watch for:
- API rate limits (add queuing and delays)
- Memory/context limits (summarize and chunk)
- Cost scaling (optimize model selection)
- Data volume (archive old data, index for search)

## The handoff

If someone else needs to run or modify your system:
- Document what it does, why, and how
- List all accounts and tools it depends on
- Note any quirks or known issues
- Show them how to monitor and troubleshoot

A system only you understand is a liability, not an asset.`,
    takeaways: [
      "Run the production checklist before every launch: validation, errors, limits, costs",
      "Always test in staging with real data before going live",
      "What works at 10/day might break at 1,000 — plan for scale",
      "Document everything so the system isn't dependent on you",
    ],
    exercise:
      "Take your best automation and run it through the production checklist. Test with 5 edge cases. Add error handling if it's missing. Calculate your monthly cost at current volume. Write a one-page doc explaining what it does and how to maintain it.",
  },
  "06-2": {
    title: "Monitoring, logging, and alerting",
    duration: "4 min read",
    content: `You can't fix what you can't see. Monitoring is how you know your systems are healthy before your customers tell you they're not.

## The three layers

**Logging:** Recording what happened. Every run should log: timestamp, input data, AI output, actions taken, and any errors. This is your audit trail and debugging tool.

**Monitoring:** Watching for patterns. Track: success rate, average processing time, cost per run, and output quality. Look for trends, not just individual failures.

**Alerting:** Getting notified when something's wrong. Set up alerts for: error rate spikes, processing time increases, cost overruns, and quality drops.

## What to log

For every automation run, capture:
- **Input:** What triggered it and what data came in
- **Processing:** Which model was used, the prompt sent, the response received
- **Output:** What action was taken (email sent, record created, etc.)
- **Metadata:** Timestamp, duration, token count, cost
- **Errors:** Any failures and the error message

## Where to log

**Simple:** Google Sheets with one row per run. Works for low volume.
**Better:** Airtable with filtered views for errors vs. successes.
**Best:** A proper logging service (Logflare, Datadog, or even just a database table).

## Alert rules that matter

Don't alert on every failure — you'll get alert fatigue. Alert on:
- Error rate above 10% in a 1-hour window
- Any system down for more than 15 minutes
- Daily cost exceeding your budget by 20%+
- Zero runs in a period where you expect runs (system might be silently broken)

## The 5-minute daily review

Every morning:
1. Check last 24 hours of run history (30 seconds)
2. Look at error rate — is it normal? (30 seconds)
3. Check costs — any spikes? (30 seconds)
4. Skim 3 random outputs — quality still good? (2 minutes)
5. If something's off, investigate. If not, move on. (1 minute)

This 5-minute habit catches problems before they compound.`,
    takeaways: [
      "Log every run: input, processing, output, metadata, and errors",
      "Monitor success rate, processing time, cost, and quality trends",
      "Alert on patterns (error rate spikes), not individual failures",
      "5-minute daily review catches problems before they compound",
    ],
    exercise:
      "Add logging to your most important automation. Create a Google Sheet or Airtable base that captures: timestamp, input summary, output summary, success/fail, and cost. Set up a simple Slack alert that fires if any run fails. Review your first week of logs and identify any patterns.",
  },
  "06-3": {
    title: "Handing off AI systems to a team",
    duration: "4 min read",
    content: `You built it. Now someone else needs to run it. This is the difference between being an operator and being a bottleneck.

## The handoff document

Every system needs a one-page doc covering:

**1. What it does (2 sentences)**
"This system processes inbound leads from the website form, enriches them with company data, scores them 1-10, and routes high-scoring leads to the sales team via Slack."

**2. How it works (bullet points)**
- Triggered by new Google Sheets row
- AI enriches via web search
- AI scores based on ICP criteria
- Score >= 7 → Slack notification to #sales
- Score < 7 → Added to nurture list

**3. Where it lives**
- Make.com scenario: [link]
- Google Sheet: [link]
- Slack channel: #sales

**4. What can go wrong**
- API key expires every 90 days (next renewal: [date])
- If Google Sheets API errors, retry the scenario manually
- If AI output quality drops, check/update the scoring prompt

**5. How to modify it**
- To change scoring criteria, edit the system prompt in step 3
- To change Slack channel, update the channel ID in step 5
- To add new data sources, add a new step between steps 2 and 3

## Training the team

Don't just send the doc. Walk through it live:
1. Show them the system running end-to-end
2. Let them trigger a test run and watch the result
3. Simulate a failure and show them how to diagnose it
4. Let them make a small change (update a prompt, change a setting)

Once they can run it, debug it, and modify it — you're free.

## Permissions and access

Give team members the minimum access they need. If they need to monitor, give read access. If they need to fix issues, give edit access to the specific scenario. Never share your master API keys.

## The goal

Build yourself out of every system. Your value is in designing and building new systems, not maintaining old ones. If you're the only person who can fix something, you haven't built a system — you've built a dependency.`,
    takeaways: [
      "Every system needs a one-page doc: what, how, where, risks, modifications",
      "Walk the team through it live — don't just send documentation",
      "Give minimum necessary access — never share master API keys",
      "Your job is building new systems, not maintaining old ones",
    ],
    exercise:
      "Pick your best automation. Write the one-page handoff document covering all 5 sections. Walk someone through it (a team member, friend, or even record a Loom video). If they can understand and operate it from your doc + walkthrough, it's ready for handoff.",
  },
  "06-4": {
    title: "Iterating and improving over time",
    duration: "4 min read",
    content: `Your first version of any system is never the best version. The operators who win are the ones who consistently improve their systems based on real data.

## The improvement cycle

**Weekly:** Review output quality on a random sample. Are the AI responses still good? Has anything drifted?

**Monthly:** Check overall metrics. Success rate, cost, time saved, and business impact. Is this system still worth running?

**Quarterly:** Evaluate the entire system. Are there new tools, models, or approaches that could make it significantly better? Should you rebuild or retire it?

## What to improve

**Prompt quality:** The single highest-leverage improvement. Small prompt changes can dramatically improve output. A/B test different prompts with the same inputs and measure which produces better results.

**Model selection:** New models release frequently. What was the best option 6 months ago might not be now. Test newer, cheaper models periodically — you might get the same quality for less.

**Tool efficiency:** Are there steps that could be combined? Data sources that are no longer needed? Redundant processing?

**Speed:** Can you parallelize steps that currently run sequentially? Can you cache results that don't change often?

## When to rebuild vs. patch

**Patch** when: The core logic is sound but needs small fixes. A prompt needs tweaking, a step needs updating, a new edge case needs handling.

**Rebuild** when: The requirements have fundamentally changed. The original architecture can't handle current volume. A much better approach is now possible.

Rule of thumb: if you're patching the same system for the third time, it's time to rebuild.

## The compound effect

A system that improves 5% per month is 80% better after a year. That's not marginal — it's transformational. The discipline of consistent improvement separates amateurs from professionals.

**You've completed the AI & Automation course.** You now have the knowledge to build real AI systems. But knowledge isn't enough — execution is. Build the three agent systems from Module 5. Get them running in production. That's your ticket to paid project work on my team.`,
    takeaways: [
      "Review output quality weekly, metrics monthly, architecture quarterly",
      "Prompt improvements are the highest-leverage optimization",
      "If you're patching the same system for the third time, rebuild it",
      "5% monthly improvement compounds to 80% better in a year",
    ],
    exercise:
      "Final exercise: Build your portfolio. Take the three agent systems you built in Module 5, document them with handoff docs, record a Loom walkthrough of each, and compile everything into a portfolio page. This is what you'll submit for paid project consideration.",
  },
};

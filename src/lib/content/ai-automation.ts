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

<!-- check:0 -->

## What makes Claude different

**Constitutional AI:** Claude was trained with a set of principles (a "constitution") that guide its behavior. It's not just RLHF'd into compliance — it reasons about whether its outputs are helpful, honest, and harmless. This means Claude is less likely to blindly follow harmful instructions while still being genuinely useful.

**200K context window:** Claude can process roughly 150,000 words in a single conversation. You can paste entire codebases, full legal contracts, or weeks of email threads and Claude processes all of it at once. Most models tap out at 128K or less.

**Extended thinking:** Claude can show its reasoning process step by step before giving you an answer. This isn't just chain-of-thought prompting — it's a built-in capability where Claude actually thinks through complex problems in a structured way before responding.

**Instruction following:** Claude is consistently the best model at following complex, multi-step instructions exactly as written. When you give Claude a detailed system prompt with specific formatting, tone, and behavioral rules, it follows them. This matters enormously when building automated systems.

<!-- check:1 -->

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
    checks: [
      {
        question: "Why does giving Claude more context generally improve output quality?",
        options: [
          "More context gives the model more patterns to work with when predicting the next token",
          "More context makes Claude run faster because it can skip reasoning steps",
          "More context forces Claude to use its extended thinking feature automatically",
        ],
        correctIndex: 0,
        explanation:
          "LLMs predict the next token based on patterns. More context means more relevant patterns to draw from, leading to better predictions. It doesn't make Claude faster (option B) or automatically trigger extended thinking (option C) — those are separate capabilities.",
      },
      {
        question: "What is Constitutional AI and why does it matter for Claude?",
        options: [
          "It's a pricing model that makes Claude cheaper for constitutional law firms",
          "It's a training method using principles that guide Claude's behavior, making it reason about helpfulness and safety rather than just being compliance-filtered",
          "It's a separate AI model that runs alongside Claude to check its outputs",
        ],
        correctIndex: 1,
        explanation:
          "Constitutional AI means Claude was trained with guiding principles, so it reasons about whether its outputs are helpful and safe — not just pattern-matched against a blocklist. It's not related to pricing (option A) or a separate model (option C).",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What makes Claude Code different from using Claude in a chat window for coding tasks?",
        options: [
          "Claude Code is a different AI model optimized specifically for programming languages",
          "Claude Code operates directly in your terminal — reading files, writing code, running tests, and committing changes on your machine",
          "Claude Code only works with Python while the chat interface handles all languages",
        ],
        correctIndex: 1,
        explanation:
          "Claude Code is a CLI tool that lets Claude act as a developer on your machine, not just generate code in a chat. It reads your files, writes code, runs tests, and commits. It's not a different model (option A) — it uses the same Claude models. And it works with all programming languages, not just Python (option C).",
      },
      {
        question: "Why is Claude's 200K context window described as its 'single biggest practical advantage'?",
        options: [
          "It makes Claude's responses 200K times more accurate than competitors",
          "It lets you process entire codebases, long contracts, and weeks of data in one call without chunking or summarizing",
          "It means Claude can remember 200K previous conversations permanently",
        ],
        correctIndex: 1,
        explanation:
          "The 200K context window means you can feed Claude massive amounts of information at once — entire projects, long documents, extensive histories — and get analysis without losing details. It doesn't multiply accuracy (option A), and it's per-conversation context, not permanent memory across conversations (option C).",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What happens when you hit Claude's context window limit during a conversation?",
        options: [
          "Claude automatically compresses the conversation to fit more content",
          "Claude starts losing your earlier instructions and context",
          "Claude switches to a model with a larger context window",
        ],
        correctIndex: 1,
        explanation:
          "When you exceed the context window, earlier messages get dropped, meaning Claude loses your initial instructions and prior context. Claude does not auto-compress (option A) or switch models (option C) — it simply can't see the earlier parts of the conversation anymore.",
      },
      {
        question: "An automation runs 1,000 times per day at 2,000 tokens per run. What's the approximate daily cost difference between Haiku and Opus?",
        options: [
          "About $0.50 — Haiku and Opus cost roughly the same at this volume",
          "About $29.50 — Haiku costs ~$0.50/day while Opus costs ~$30/day",
          "About $300 — Opus is 300x more expensive than Haiku",
        ],
        correctIndex: 1,
        explanation:
          "At 2M tokens/day, Haiku at ~$0.25/M costs $0.50/day while Opus at ~$15/M costs $30/day — a roughly $29.50 daily difference (60x, not equal as in option A). The 300x figure in option C is wrong — the actual multiplier is about 60x between Haiku and Opus.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "Which Claude model should you use for classifying incoming emails as spam, lead, or support?",
        options: [
          "Opus — classification requires deep reasoning to get right",
          "Sonnet — it's the best all-around model for any task",
          "Haiku — it's fast, cheap, and more than capable for straightforward classification tasks",
        ],
        correctIndex: 2,
        explanation:
          "Email classification is a simple, pattern-based task that Haiku handles perfectly at a fraction of the cost. Opus (option A) is overkill — you don't need deep reasoning for tagging emails. Sonnet (option B) works but costs 12x more than Haiku for a task that doesn't need its extra capability.",
      },
      {
        question: "You need to write a strategy document analyzing three potential market entries. Which model and why?",
        options: [
          "Haiku — it's the fastest and speed matters for long documents",
          "Opus — complex multi-step strategy with trade-offs needs the deepest reasoning capability",
          "Sonnet — it's cost-effective and handles writing tasks well",
        ],
        correctIndex: 1,
        explanation:
          "Strategy documents require weighing complex trade-offs, multi-step reasoning, and nuanced analysis — exactly what Opus excels at. Haiku (option A) is too simple for strategic analysis. Sonnet (option B) is good for standard writing, but high-stakes strategy where being wrong is expensive warrants Opus-level reasoning.",
      },
    ],
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

<!-- check:0 -->

## The difference in practice

**Bad prompt:** "Write me a cold email for my product"

**Good prompt:** "You are a B2B sales rep who's closed $2M+ in SaaS deals. I'm selling an AI lead scoring tool to mid-market companies using HubSpot. Write a cold email to a VP of Marketing at a 200-person e-commerce company. Keep it under 120 words. Open with something specific to e-commerce, not a generic opener. End with a question, not a 'let me know if you're interested.' No buzzwords."

The second prompt takes 30 seconds longer to write and saves you 20 minutes of editing.

<!-- check:1 -->

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
    checks: [
      {
        question: "Which of the four prompt components prevents Claude from falling into generic output patterns?",
        options: [
          "Role — telling Claude who it is filters its response through specific expertise",
          "Context — giving Claude the situation provides relevant background",
          "Constraints — setting boundaries stops Claude from using generic language and patterns",
        ],
        correctIndex: 2,
        explanation:
          "Constraints like 'don't use buzzwords' and 'end with a specific question, not a generic CTA' directly prevent generic output. Role (option A) helps activate expertise patterns but doesn't prevent specific bad habits. Context (option B) targets the output but doesn't set the boundaries that stop generic responses.",
      },
      {
        question: "Why does a specific prompt with Role, Context, Task, and Constraints save you 20 minutes of editing compared to a vague prompt?",
        options: [
          "Claude generates shorter responses with specific prompts, so there's less to edit",
          "Specific prompts narrow the prediction space so Claude's first output is already close to what you need",
          "Claude uses a different, faster algorithm when it detects a structured prompt",
        ],
        correctIndex: 1,
        explanation:
          "When you give Claude specific role, context, task, and constraint information, you're narrowing the prediction space. The model has clearer signals for what good output looks like, so the first draft needs minimal editing. It doesn't necessarily produce shorter output (option A), and there's no special algorithm for structured prompts (option C) — it's the same model working with better input.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is context injection and why does it make Claude-powered systems feel personalized?",
        options: [
          "It's a technique where you fine-tune Claude on customer data so it permanently remembers each person",
          "It's dynamically inserting relevant information (like customer name, order history) into the prompt before sending it to Claude",
          "It's a Claude API feature that automatically pulls customer data from your CRM",
        ],
        correctIndex: 1,
        explanation:
          "Context injection means looking up relevant data (customer info, order history, open tickets) and inserting it into the prompt before Claude sees it. This makes responses specific and personalized. It's not fine-tuning (option A) — you're not retraining the model. And it's not automatic (option C) — you build the lookup and injection logic yourself.",
      },
      {
        question: "Why does Claude parse XML tags in system prompts better than plain text for complex instructions?",
        options: [
          "XML tags were invented by Anthropic specifically for Claude prompts",
          "Claude was trained to understand XML structure, so tags like <identity> and <constraints> create clear, labeled sections that reduce ambiguity",
          "XML tags compress the prompt to use fewer tokens",
        ],
        correctIndex: 1,
        explanation:
          "Claude was trained on data that includes XML, so it naturally understands the structure. Tags create clear boundaries between sections — identity vs. constraints vs. reference data — reducing the chance Claude mixes up instructions. XML wasn't invented by Anthropic (option A), and tags actually add tokens rather than compress them (option C). The benefit is clarity, not compression.",
      },
    ],
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the key difference between chain-of-thought prompting and Claude's extended thinking feature?",
        options: [
          "Chain-of-thought is free while extended thinking costs extra tokens",
          "Chain-of-thought is a prompting technique you write yourself; extended thinking is a built-in Claude capability with a dedicated, separate reasoning phase",
          "They produce identical results but extended thinking is faster",
        ],
        correctIndex: 1,
        explanation:
          "Chain-of-thought is a prompting technique where you ask Claude to reason step by step in its visible output. Extended thinking is a native feature with a separate thinking phase before the response. While both cost tokens (option A is misleading — chain-of-thought also uses output tokens for reasoning), extended thinking often produces superior results on complex tasks, not identical ones (option C).",
      },
      {
        question: "When should you NOT use extended thinking?",
        options: [
          "When working on complex strategy documents with multiple trade-offs",
          "When running high-volume simple tasks like classification where speed matters and Haiku would suffice",
          "When debugging difficult code that requires careful reasoning",
        ],
        correctIndex: 1,
        explanation:
          "Extended thinking adds processing time and cost, making it a poor fit for simple, high-volume tasks like classification where speed matters. Complex strategy (option A) and difficult debugging (option C) are exactly the tasks where extended thinking shines — they benefit from deeper reasoning.",
      },
    ],
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

<!-- check:0 -->

**Step 5: Organize by category**
Group prompts into folders: Sales, Marketing, Operations, Customer Support, Internal.

## Where to store them

For solo use: A Notion database or simple folder of text files works.
For a team: A shared doc with version history. Or build them directly into your automation tools.

**For automation:** These templates become the backbone of your Claude-powered workflows. When a new lead comes in, the system fills in the variables, selects the right Claude model, and generates personalized outreach automatically. When a meeting ends, the transcript gets plugged into the summary template. This is how you go from using Claude manually to having it work for you in the background.

<!-- check:1 -->

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
    checks: [
      {
        question: "Why should you tag each prompt template with a specific Claude model tier (Haiku, Sonnet, Opus)?",
        options: [
          "Because each Claude model uses a different prompt syntax that's incompatible with other tiers",
          "So your team knows which model to use and your automations route to the right model automatically",
          "Because prompts only work with the specific model they were written for",
        ],
        correctIndex: 1,
        explanation:
          "Tagging templates with model tiers ensures your team picks the right model for cost and quality, and your automations route correctly. All Claude models use the same prompt syntax (option A is wrong), and prompts generally work across models (option C is wrong) — the tag is about optimization, not compatibility.",
      },
      {
        question: "What transforms prompt templates from a personal tool into the backbone of automated workflows?",
        options: [
          "Sharing them on social media so more people can use them",
          "Using variables like {{INDUSTRY}} and {{PAIN_POINT}} that get filled in programmatically when automations run",
          "Writing them in a specific programming language instead of plain text",
        ],
        correctIndex: 1,
        explanation:
          "Variables make templates programmable. When a new lead comes in, the automation fills in {{COMPANY}}, {{INDUSTRY}}, etc. automatically and sends it to Claude. Sharing on social media (option A) helps others but doesn't create automation. And templates work as plain text with variables — no programming language is needed (option C).",
      },
    ],
  },
  "03-1": {
    title: "Role prompting and persona assignment",
    duration: "5 min read",
    content: `Role prompting is the single fastest way to improve your Claude output. By telling Claude who it is before you tell it what to do, you activate specific patterns in its training data that dramatically change the quality of the response.

## How it works

When you say "You are a senior sales copywriter with 15 years of experience in DTC brands," you're not just adding flavor text. You're filtering Claude's entire response through patterns associated with that expertise. Claude has been trained on text written by senior copywriters, and the role prompt surfaces those patterns.

## The formula

**Role + Context + Task + Constraints = Great output**

Here's a basic example vs. an optimized one:

**Basic:** "Write me a product description for running shoes."

**With role prompting:** "You are a senior DTC copywriter who specializes in athletic brands. You write punchy, benefit-driven copy that converts. Write a product description for lightweight running shoes targeting marathon trainers. Keep it under 100 words. Focus on performance benefits, not features."

The second version will be dramatically better. Every time.

<!-- check:0 -->

## Advanced persona stacking

You can layer multiple traits into a single role:

"You are a technical writer who also has deep experience in sales. You explain complex SaaS features in simple terms that highlight business value, not technical specs. Your writing style is direct, uses short sentences, and always ties features back to ROI."

This gives Claude a very specific intersection of expertise to pull from.

## Roles I use daily

- **"You are a senior full-stack developer"** — for code review, debugging, architecture decisions
- **"You are a direct-response copywriter"** — for sales pages, emails, ad copy
- **"You are a business strategist who thinks in systems"** — for operational planning
- **"You are a skeptical analyst"** — for finding flaws in ideas, plans, or proposals
- **"You are a client success manager"** — for writing client-facing communications

<!-- check:1 -->

## Common mistakes

1. **Too vague:** "You are an expert" — expert at what? Be specific.
2. **Conflicting traits:** "You are creative and always follow rules exactly" — pick a direction.
3. **Forgetting the role mid-conversation:** Reinforce the role if the conversation runs long.`,
    takeaways: [
      "Role prompting filters model output through specific expertise patterns from training data",
      "Use the formula: Role + Context + Task + Constraints for consistently better output",
      "Layer multiple traits for precise persona control at the intersection of skills",
      "Be specific — 'senior DTC copywriter' beats 'expert writer' every time",
    ],
    exercise:
      "Write 3 different role prompts for tasks you do regularly. For each, write the prompt without a role and with a role. Run both versions and compare. Save the best role prompts — you'll build a library of these by the end of this course.",
    checks: [
      {
        question: "Why does telling Claude 'You are a senior DTC copywriter' produce better output than 'You are an expert writer'?",
        options: [
          "Claude charges fewer tokens for shorter role descriptions",
          "Specific roles activate specific patterns from training data — 'senior DTC copywriter' loads different expertise than 'expert writer'",
          "Claude refuses to follow vague role instructions and will return an error",
        ],
        correctIndex: 1,
        explanation:
          "Specificity matters because role prompts filter Claude's output through patterns associated with that expertise. 'Senior DTC copywriter' surfaces patterns from DTC sales copy, while 'expert writer' is too broad to activate any specific expertise. Claude doesn't charge differently based on role length (option A), and it won't refuse vague roles (option C) — it just produces more generic output.",
      },
      {
        question: "What is persona stacking and when would you use it?",
        options: [
          "Running the same prompt through multiple Claude models and combining the results",
          "Layering multiple traits into a single role to create a specific intersection of expertise, like 'technical writer with sales experience'",
          "Assigning different roles to different paragraphs within the same prompt",
        ],
        correctIndex: 1,
        explanation:
          "Persona stacking means combining traits like 'technical writer who also has deep experience in sales' to get output at the intersection of multiple skill sets. It's not about multiple models (option A) or switching roles mid-prompt (option C) — it's about giving Claude a rich, multi-dimensional persona to draw from.",
      },
    ],
  },
  "03-2": {
    title: "System prompts that shape behavior long-term",
    duration: "6 min read",
    content: `System prompts are the single most important piece of prompt engineering for anything you build in production. They run before every message, they set the rules, and they define who Claude is for the entire conversation. Get this right and every interaction is better. Get it wrong and you're fighting Claude constantly.

## What system prompts do

A system prompt is a special instruction that sits above the conversation. The model treats it as persistent context — it applies to every response. In the Claude API, it's the \`system\` parameter. In claude.ai, it's the project instructions or custom style. This is the most powerful lever you have for shaping Claude's behavior.

This is where you put:
- **Identity:** Who Claude is and how it behaves
- **Rules:** What it should always or never do
- **Context:** Background information it needs for every response
- **Format:** Default output structure
- **Tone:** Communication style

## My system prompt framework

\`\`\`
IDENTITY: You are [specific role] for [specific context].

RULES:
- Always [behavior 1]
- Never [behavior 2]
- When uncertain, [default action]

CONTEXT: [Background Claude needs]

FORMAT: [Default output structure]

TONE: [Communication style description]
\`\`\`

<!-- check:0 -->

## Real example: Client-facing AI assistant

"IDENTITY: You are a customer success assistant for a SaaS company called FlowOps that does workflow automation for agencies.

RULES:
- Always be helpful, direct, and solution-oriented
- Never make promises about features that don't exist
- Never share pricing — direct pricing questions to the sales team at sales@flowops.com
- When you don't know something, say so and offer to connect them with the team
- Keep responses under 150 words unless the user asks for detail

CONTEXT: FlowOps integrates with Slack, Notion, and Google Workspace. Plans are Starter ($49/mo), Pro ($149/mo), and Enterprise (custom). Common issues: integration setup, workflow triggers not firing, permission errors.

FORMAT: Lead with the answer, then explain. Use bullet points for multi-step solutions.

TONE: Professional but warm. No corporate jargon. Like a smart coworker helping you out."

<!-- check:1 -->

## System prompt mistakes

1. **Too long:** If your system prompt is 2,000 words, Claude will lose track of rules. Keep it under 500 words. (Claude's 200K context helps, but focused system prompts still perform better.)
2. **Contradictory rules:** "Be concise" and "Provide thorough explanations" — pick one and specify when each applies.
3. **No examples:** Rules without examples are ambiguous. Show what you mean.
4. **Forgetting edge cases:** What should Claude do when it doesn't know the answer? When the user is angry? When asked something off-topic?`,
    takeaways: [
      "System prompts define identity, rules, context, format, and tone for every response",
      "Use the framework: Identity + Rules + Context + Format + Tone",
      "Keep system prompts under 500 words — too long and Claude loses track of rules",
      "Always define edge cases: what to do when uncertain, off-topic, or facing angry users",
    ],
    exercise:
      "Write a system prompt for a business use case you're working on (client chatbot, internal tool, content generator). Use the framework above. Test it with 10 different types of user messages including edge cases. Refine until it handles all of them correctly.",
    checks: [
      {
        question: "What five sections should every system prompt include according to the framework?",
        options: [
          "Input, Output, Processing, Storage, and Logging",
          "Identity, Rules, Context, Format, and Tone",
          "Header, Body, Footer, Signature, and Timestamp",
        ],
        correctIndex: 1,
        explanation:
          "The system prompt framework covers Identity (who Claude is), Rules (always/never behaviors), Context (background info), Format (output structure), and Tone (communication style). The other options describe data processing (option A) or document formatting (option C), not prompt architecture.",
      },
      {
        question: "Why should you keep system prompts under 500 words even though Claude has a 200K context window?",
        options: [
          "System prompts over 500 words are rejected by the Claude API",
          "Focused system prompts perform better because Claude can track all rules clearly — too many instructions and it starts losing track",
          "Longer system prompts cost 10x more per token than user messages",
        ],
        correctIndex: 1,
        explanation:
          "Even with Claude's massive context window, focused system prompts perform better because every rule stays salient. Long, rambling system prompts lead to missed instructions and inconsistent behavior. The API doesn't reject long prompts (option A), and system prompt tokens cost the same as other input tokens (option C).",
      },
    ],
  },
  "03-3": {
    title: "Prompt chaining and multi-step workflows",
    duration: "6 min read",
    content: `Single prompts have limits. When a task is too complex for one prompt — and most real tasks are — you chain prompts together. Each prompt handles one step, and the output of one becomes the input for the next. This is how you build AI workflows that actually work in production.

## Why chaining beats mega-prompts

A 500-word mega-prompt that tries to do everything at once will fail. Claude loses focus, mixes up instructions, and produces inconsistent output. Chaining lets you:

1. **Keep each prompt focused** — one task, one prompt
2. **Validate between steps** — check output quality before proceeding
3. **Use different settings per step** — temperature 0 for extraction, 0.7 for writing
4. **Debug easily** — when something breaks, you know exactly which step failed
5. **Swap Claude models per step** — Haiku for simple extraction, Sonnet for generation, Opus for complex analysis

## Basic chain structure

**Step 1: Extract** — Pull structured data from raw input
**Step 2: Analyze** — Process the extracted data
**Step 3: Generate** — Create the final output
**Step 4: Validate** — Check the output against criteria

## Real example: Client proposal generator

I built this for a consulting business. Four prompts, chained together:

**Prompt 1 (Extract):** "From this discovery call transcript, extract: client_name, company, industry, pain_points (array), budget_range, timeline, decision_makers"

**Prompt 2 (Analyze):** "Given this client data: [output from prompt 1]. Identify the top 3 services we should propose, ranked by impact. For each, estimate ROI and implementation timeline."

**Prompt 3 (Generate):** "Using this analysis: [output from prompt 2]. Write a professional proposal with sections: Executive Summary, Recommended Solutions, Timeline, Investment, Next Steps. Tone: confident, direct, value-focused."

**Prompt 4 (Validate):** "Review this proposal: [output from prompt 3]. Check for: pricing consistency, timeline feasibility, tone appropriateness, missing sections. Flag any issues."

<!-- check:0 -->

## Implementation patterns

**Sequential chain:** A -> B -> C -> D. Each step needs the previous output. Simple, reliable, easy to debug.

**Parallel chain:** Run A and B simultaneously, combine outputs into C. Faster, but more complex to manage.

**Conditional chain:** If A's output meets criteria X, go to B. Otherwise, go to C. Useful for routing different types of input.

<!-- check:1 -->

## Pro tips

- **Save intermediate outputs.** If step 3 fails, you don't want to re-run steps 1 and 2.
- **Add error handling.** What if Claude returns malformed JSON? Build a retry with clearer instructions.
- **Log everything.** In production, you need to see every step's input and output for debugging.
- **Start simple.** Build a 2-step chain first, get it working perfectly, then add steps.`,
    takeaways: [
      "Chain prompts when tasks are too complex for a single prompt — most real tasks are",
      "Each step should have one job: extract, analyze, generate, or validate",
      "Save intermediate outputs and add error handling for production reliability",
      "Use different Claude models (Opus, Sonnet, Haiku) and temperature settings for different steps in the chain",
    ],
    exercise:
      "Pick a multi-step task you do manually (proposal writing, content creation, research analysis). Break it into 3-4 discrete steps. Write a prompt for each step where the output feeds into the next. Test the full chain end-to-end and iterate on the weakest link.",
    checks: [
      {
        question: "In the client proposal generator example, why are Extract, Analyze, Generate, and Validate handled as separate prompts instead of one mega-prompt?",
        options: [
          "Claude can only handle one paragraph of instructions at a time",
          "Each prompt stays focused on one task, lets you validate between steps, use different Claude models per step, and debug easily when something breaks",
          "Separate prompts are required by the Claude API — you can't send multi-step instructions in one call",
        ],
        correctIndex: 1,
        explanation:
          "Chaining keeps each prompt focused, lets you check output quality between steps, use different models (Haiku for extraction, Sonnet for generation), and pinpoint exactly which step failed during debugging. Claude can handle long instructions (option A is wrong), and the API supports complex multi-step prompts in one call (option C is wrong) — chaining is a design choice for reliability.",
      },
      {
        question: "What is a conditional chain and when would you use it?",
        options: [
          "A chain where each step always runs in the same order regardless of output",
          "A chain that routes to different next steps based on the output of the current step — useful for handling different types of input differently",
          "A chain that only runs when certain time conditions are met, like business hours",
        ],
        correctIndex: 1,
        explanation:
          "A conditional chain evaluates the output of one step and routes to different paths based on criteria. For example, if a lead scores high, route to personalized outreach; if low, route to nurture. That's different from sequential chains that always follow the same path (option A), and it's about data-driven routing, not time-based scheduling (option C).",
      },
    ],
  },
  "03-4": {
    title: "Building and organizing prompt libraries",
    duration: "5 min read",
    content: `By this point in the course, you've written dozens of prompts. Most people let those prompts die in chat history. Operators build libraries. A prompt library is your competitive advantage — a collection of tested, refined prompts you can deploy instantly for any task.

## Why a prompt library matters

Every great prompt you write is an asset. It took you time to get it right — the wording, the structure, the examples. Without a library, you rewrite prompts from scratch every time and get inconsistent results. With a library, you grab a proven template, fill in the variables, and get reliable output in seconds.

## How to structure your library

Organize by **function**, not by model:

\`\`\`
/prompts
  /sales
    cold-email-generator.md
    proposal-writer.md
    objection-handler.md
  /content
    blog-post-writer.md
    social-media-repurposer.md
    email-newsletter.md
  /code
    code-reviewer.md
    bug-debugger.md
    refactoring-assistant.md
  /research
    competitor-analysis.md
    market-research.md
  /operations
    meeting-notes-processor.md
    sop-generator.md
    data-extractor.md
\`\`\`

## Template format

Every prompt in your library should follow this format:

\`\`\`markdown
# [Prompt Name]
**Purpose:** What this prompt does
**Best model:** Which model works best
**Temperature:** Recommended setting
**Last updated:** Date

## System Prompt
[If applicable]

## Prompt Template
[The actual prompt with {{variables}} for customizable parts]

## Example Input
[A real example of filled-in variables]

## Example Output
[What good output looks like]

## Notes
[Edge cases, tips, what to watch for]
\`\`\`

## Variables make prompts reusable

Instead of hardcoding specifics, use variables:

"You are a {{role}} writing a {{content_type}} for {{audience}}. The topic is {{topic}}. Tone: {{tone}}. Length: {{word_count}} words."

Now you fill in the blanks for each use case instead of rewriting the whole prompt.

<!-- check:0 -->

## Versioning your prompts

When you improve a prompt, don't overwrite the old one. Version it:
- v1: Original
- v2: Added few-shot examples
- v3: Refined based on edge case failures

Keep notes on what changed and why. When a prompt breaks in production, you can roll back.

## Building the habit

After every significant AI interaction:
1. **Did I create a new prompt that worked well?** Save it.
2. **Did I refine an existing prompt?** Update the library.
3. **Did I discover an edge case?** Add it to the notes.
4. **Did I find a better model for this task?** Update the recommendation.

<!-- check:1 -->

## What your library becomes

Over time, your prompt library becomes:
- **A training resource** for team members — they use your proven prompts instead of starting from scratch
- **An operational asset** for your business — standardized AI operations across the team
- **A competitive moat** — your prompts are tuned to your specific business, clients, and workflows
- **A product** — well-organized prompt libraries can be sold as part of consulting packages

This is what separates someone who "uses Claude" from someone who **operates** with Claude. You're building systems, not typing into chatbots.`,
    takeaways: [
      "Every great prompt is a reusable asset — save, organize, and version them",
      "Organize by function (sales, content, code) not by model",
      "Use variables like {{audience}} and {{tone}} to make prompts instantly reusable",
      "Your prompt library becomes a training resource, operational asset, and competitive moat",
    ],
    exercise:
      "Create your prompt library right now. Make folders organized by function. Go through this course and save every prompt template you built during exercises. Add the metadata (purpose, model, temperature, notes) to each one. Commit to adding every good prompt you write from now on. This library will compound over time into one of your most valuable assets.",
    checks: [
      {
        question: "Why should you organize your prompt library by function (sales, content, code) rather than by Claude model?",
        options: [
          "Because Claude models change names frequently, making model-based organization unstable",
          "Because when you need a prompt, you're thinking about the task (write a cold email, debug code) not the model — function-based organization matches how you actually search for prompts",
          "Because each function can only use one specific Claude model",
        ],
        correctIndex: 1,
        explanation:
          "You search for prompts by what you need to do, not which model to use. When you need a cold email prompt, you look in the sales folder. The model tag is metadata on the template, not the organizing principle. Model names are relatively stable (option A is not the main reason), and any function can use multiple models (option C is wrong).",
      },
      {
        question: "Why should you version your prompts instead of overwriting them when making improvements?",
        options: [
          "Because older prompts are always better than newer ones",
          "Because versioning lets you roll back when a new version breaks in production and track what changed and why",
          "Because the Claude API requires you to specify a prompt version number",
        ],
        correctIndex: 1,
        explanation:
          "Versioning gives you a safety net. If v3 of a prompt starts producing worse results, you can roll back to v2 immediately. The change notes help you understand what worked and what didn't. Older prompts aren't always better (option A) — but sometimes a change that seemed like an improvement causes edge case failures. The API doesn't require version numbers (option C).",
      },
    ],
  },
  "04-1": {
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

<!-- check:0 -->

## Tool use (function calling)

This is where Claude gets powerful. You can define tools — functions that Claude can decide to call.

**Example:** You define a tool called \`lookup_customer\` that takes an email address and returns customer data. When a user asks "What's the status of john@company.com's order?", Claude recognizes it needs customer data, calls \`lookup_customer\`, gets the results, and incorporates them into its response.

This is the foundation of building Claude agents. We go deep on this in Module 5.

## No-code ways to call Claude

**Make.com / n8n:** These tools have built-in HTTP modules. You set the URL, headers, and body — no code needed. Make.com also has dedicated Claude/Anthropic modules.

**HTTP request modules:** Set the endpoint, add your API key in headers, and structure the body. Point and click.

<!-- check:1 -->

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
    checks: [
      {
        question: "What three things do you need to make a Claude API call?",
        options: [
          "A Claude account, a web browser, and an internet connection",
          "An API key from console.anthropic.com, the Messages API endpoint URL, and a request body with model and messages",
          "A Make.com subscription, a webhook URL, and a Slack integration",
        ],
        correctIndex: 1,
        explanation:
          "Every Claude API call requires your API key for authentication, the endpoint URL (https://api.anthropic.com/v1/messages), and a properly formatted request body specifying the model and messages. A Claude chat account (option A) is different from API access. Make.com (option C) is one way to call the API but isn't required — you can call it from any HTTP client.",
      },
      {
        question: "What does Claude's tool use (function calling) capability enable that regular chat cannot?",
        options: [
          "It lets Claude generate longer responses by splitting output across multiple function calls",
          "It lets Claude decide when to call external functions you define — like searching a database or sending an email — and incorporate the results into its response",
          "It lets Claude access the internet directly without any setup from you",
        ],
        correctIndex: 1,
        explanation:
          "Tool use lets you define functions (like lookup_customer or send_email) that Claude can decide to call during a conversation. Claude recognizes when it needs external data or actions, calls the appropriate tool, and uses the results. It's not about longer responses (option A), and Claude doesn't access the internet directly (option C) — you define and execute the tools.",
      },
    ],
  },
  "04-2": {
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

<!-- check:0 -->

## How to build these (step by step)

1. Open Make.com and create a new scenario
2. Add your trigger module (e.g., "Watch new rows" in Google Sheets)
3. Add an HTTP module calling the Claude API
4. Map the data from the trigger into your Claude prompt (e.g., "Analyze this lead: {{name}}, {{company}}, {{website}}")
5. Add an action module to write Claude's response back (e.g., "Update row" in Google Sheets)
6. Test with real data
7. Turn on scheduling (run every 5 minutes, every hour, etc.)

<!-- check:1 -->

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
    checks: [
      {
        question: "What is MCP (Model Context Protocol) and why does it matter for building Claude integrations?",
        options: [
          "MCP is a monitoring dashboard for tracking Claude API costs across multiple projects",
          "MCP is Anthropic's open protocol that standardizes how Claude connects to external tools and data sources, replacing the need for custom integrations",
          "MCP is a premium API tier that gives Claude faster response times",
        ],
        correctIndex: 1,
        explanation:
          "MCP provides a standard protocol for connecting Claude to external tools — Notion, Slack, databases, file systems, and more. Instead of building custom integrations for each tool, MCP servers act as standardized bridges. It's not a monitoring dashboard (option A) or a premium API tier (option C) — it's an integration standard.",
      },
      {
        question: "What are the seven steps to build a Claude integration with Make.com?",
        options: [
          "Create scenario, add trigger module, add Claude HTTP module, map trigger data into the prompt, add action module to write results back, test with real data, turn on scheduling",
          "Install Claude plugin, connect your Google account, write a prompt, click run",
          "Set up a server, install dependencies, write code, deploy to production, configure DNS, set up SSL, monitor logs",
        ],
        correctIndex: 0,
        explanation:
          "The process is: create a scenario, add your trigger (e.g., watch new rows), add an HTTP module calling Claude's API, map the trigger data into your prompt, add an action to write results back, test with real data, and schedule it. It's not as simple as a plugin install (option B), and it doesn't require server setup or coding (option C) — Make.com handles the infrastructure.",
      },
    ],
  },
  "04-3": {
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

<!-- check:0 -->

## Setting up a webhook in Make.com

1. Add a "Custom Webhook" module as your trigger
2. Copy the webhook URL it generates
3. Go to the source app's webhook settings
4. Paste your URL and select which events to send
5. Test by triggering an event
6. Build your Claude processing logic after the webhook module

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the key advantage of webhooks over polling for triggering Claude automations?",
        options: [
          "Webhooks are free while polling costs money for each check",
          "Webhooks deliver data instantly when events happen, while polling checks periodically and creates delays",
          "Webhooks work with more apps than polling does",
        ],
        correctIndex: 1,
        explanation:
          "Webhooks push data to your system the instant an event occurs — no delay, no wasted API calls checking for nothing. Polling checks every X minutes, creating delays and wasting resources on empty checks. Cost isn't the main differentiator (option A) — speed and efficiency are. Both methods work with most modern apps (option C).",
      },
      {
        question: "Why should you treat webhook URLs like passwords?",
        options: [
          "Because webhook URLs expire after 24 hours if not kept secret",
          "Because anyone with your webhook URL can send data to your automation, potentially triggering unintended Claude processing and actions",
          "Because webhook URLs contain your API key embedded in the URL string",
        ],
        correctIndex: 1,
        explanation:
          "If someone gets your webhook URL, they can send arbitrary data to your automation — triggering Claude processing, consuming API credits, and potentially causing unintended actions. URLs don't expire from being shared (option A), and they don't contain your API key (option C) — but they are direct access points to your system.",
      },
    ],
  },
  "04-4": {
    title: "Error handling and reliability",
    duration: "5 min read",
    content: `Your Claude automations will fail. APIs go down, data comes in weird formats, rate limits get hit. The difference between a toy and a production system is how it handles failure.

## The most common failures

**1. API rate limits:** You're sending too many requests to Claude too fast. Anthropic has rate limits based on your plan tier. Solution: Add delays between calls, queue requests and process them gradually, or upgrade your API tier.

**2. Timeout errors:** Claude takes too long to respond (usually on complex prompts with extended thinking). Solution: Set reasonable timeouts, break complex tasks into smaller ones, or use Sonnet instead of Opus for faster responses.

**3. Malformed data:** The trigger sends unexpected data (empty fields, wrong types). Solution: Validate data before sending it to Claude. Check that required fields exist.

**4. Claude hallucination:** Claude generates incorrect or nonsensical output. Solution: Add validation steps. For critical outputs, check format and reasonableness before acting on them. Use extended thinking for tasks where accuracy is critical.

**5. Cost overruns:** A loop goes infinite or data volume spikes. Solution: Set daily spending limits on your Anthropic API keys (available in console.anthropic.com). Add circuit breakers that stop processing after N runs.

<!-- check:0 -->

## How to build reliable Claude systems

**Retry logic:** If a Claude API call fails, wait 5 seconds and try again. If it fails 3 times, alert you and stop. Anthropic's API returns clear error codes — use them to decide whether to retry or bail.

**Model fallback:** If Opus is slow or hitting limits, fall back to Sonnet. If Sonnet is having issues, fall back to Haiku for simple tasks. Always have a backup path.

**Logging:** Log every input, output, and error. When something goes wrong (and it will), logs are how you debug it. Include the Claude model used, token count, and response time.

**Monitoring:** Set up Slack alerts for failures. If your automation errors 3 times in an hour, you get a message. Don't discover failures when a customer complains.

**Validation:** Before writing Claude's output to your CRM or sending it in an email, validate it. Does it contain required fields? Is it the right format? Is it a reasonable length? This 30-second check prevents embarrassing errors.

<!-- check:1 -->

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
    checks: [
      {
        question: "Why is Claude hallucination listed as a common failure mode for automations, and what's the solution?",
        options: [
          "Claude sometimes generates incorrect output that looks correct — the solution is adding validation steps that check format and reasonableness before acting on outputs",
          "Claude hallucination only happens with Haiku, so the solution is always using Opus",
          "Claude hallucination is caused by API errors, so retry logic fixes it automatically",
        ],
        correctIndex: 0,
        explanation:
          "Claude can produce confident-sounding but incorrect output. The fix is validation: check that outputs have the right format, expected fields, and reasonable content before sending emails, updating CRMs, or taking other actions. Hallucination affects all models (option B is wrong), and retrying won't fix it (option C) — the model will confidently generate a different wrong answer.",
      },
      {
        question: "What four things should you implement from day one to catch 80% of reliability issues?",
        options: [
          "Load balancing, auto-scaling, database replication, and CDN caching",
          "Basic retry logic with exponential backoff, error notifications to Slack/email, input validation on required fields, and daily spending limits on your API key",
          "Unit tests, integration tests, end-to-end tests, and performance benchmarks",
        ],
        correctIndex: 1,
        explanation:
          "The 80/20 of reliability is: retry logic (handles transient API failures), error notifications (so you know immediately when something breaks), input validation (prevents garbage data from hitting Claude), and spending limits (prevents cost runaway). Infrastructure scaling (option A) is for different problems. Traditional testing (option C) is valuable but doesn't address runtime reliability of Claude API calls.",
      },
    ],
  },
  "05-1": {
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

<!-- check:0 -->

## My recommendation

**Start with Make.com.** It hits the sweet spot of power and usability. You can build anything from simple email automations to complex Claude agent workflows.

**Use Zapier** for quick, simple connections where you just need "when this, do that."

**Graduate to n8n** when you're running 50+ automations and the per-operation costs on Make/Zapier add up, or when you need self-hosting for data privacy.

<!-- check:1 -->

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
    checks: [
      {
        question: "Why is Make.com recommended as the starting platform over Zapier for Claude automations?",
        options: [
          "Make.com is free while Zapier requires a paid subscription",
          "Make.com offers visual flow building with flexible HTTP modules, branching logic, and better handling of complex multi-step Claude workflows",
          "Make.com has an exclusive partnership with Anthropic that Zapier doesn't have",
        ],
        correctIndex: 1,
        explanation:
          "Make.com hits the sweet spot of power and usability: visual flow building, flexible HTTP modules for raw Claude API calls, and strong support for branching and looping logic. Both have free tiers (option A is wrong), and there's no exclusive partnership (option C) — Make.com's architecture is just better suited for complex Claude workflows.",
      },
      {
        question: "When should you consider moving from Make.com to n8n?",
        options: [
          "Immediately — n8n is always the better choice for Claude automations",
          "When you're running 50+ automations and per-operation costs add up, or when you need self-hosting for data privacy",
          "Only when Make.com shuts down or removes Claude support",
        ],
        correctIndex: 1,
        explanation:
          "n8n makes sense at scale: when you have many automations and per-operation pricing becomes expensive, or when data privacy requires self-hosting. It's not always better (option A) — it has a steeper technical setup. And you don't need to wait for Make.com problems (option C) — it's a proactive scaling decision.",
      },
    ],
  },
  "05-2": {
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

<!-- check:0 -->

## Data flow between steps

The key concept in Make.com/Zapier is mapping. Each step produces output data. The next step can reference any field from any previous step.

Step 1 output: \`{name: "John", email: "john@company.com"}\`
Step 2 Claude prompt: "Research {{step1.name}} at {{step1.email.domain}}..."
Step 2 Claude output: \`{company_size: 200, industry: "SaaS", ...}\`
Step 3 Claude prompt: "Score this lead: {{step1.name}}, {{step2.industry}}, {{step2.company_size}}..."

Each step builds on the data accumulated from all previous steps.

<!-- check:1 -->

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
    checks: [
      {
        question: "Why should you build and test pipeline steps sequentially rather than building the whole thing at once?",
        options: [
          "Because Make.com only allows you to add one step at a time",
          "Because testing step by step means when something breaks, you know exactly which step failed — building all at once makes debugging nearly impossible",
          "Because each step needs separate API keys that must be configured one at a time",
        ],
        correctIndex: 1,
        explanation:
          "Sequential building isolates failures. If you build all 6 steps and test, a failure could be in any step — and you're debugging blindly. Building step by step lets you verify each one works before adding the next. Make.com doesn't restrict adding steps (option A), and API keys don't need per-step configuration (option C).",
      },
      {
        question: "How does data flow between steps in a Make.com pipeline?",
        options: [
          "Each step can only access data from the immediately previous step",
          "Each step can reference output data from any previous step through field mapping — data accumulates as the pipeline progresses",
          "Data must be manually copied between steps by the user each time the pipeline runs",
        ],
        correctIndex: 1,
        explanation:
          "In Make.com (and similar tools), each step's output is available to all subsequent steps through field mapping. Step 3 can reference data from both step 1 and step 2. It's not limited to the previous step only (option A), and it's fully automatic once configured (option C) — that's the whole point of automation.",
      },
    ],
  },
  "05-3": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "In the email workflow, why does classification use Haiku while response drafting uses Sonnet?",
        options: [
          "Haiku can only read emails while Sonnet can only write emails",
          "Classification is a simple, fast task suited for cheap Haiku, while drafting personalized responses requires Sonnet's stronger writing capability",
          "Haiku processes emails faster because it was specifically trained on email data",
        ],
        correctIndex: 1,
        explanation:
          "Classification (spam vs. lead vs. support) is a straightforward pattern-matching task that Haiku handles perfectly at minimal cost. Writing a personalized, high-quality response requires more language capability, which Sonnet provides. Both models can read and write (option A is wrong), and Haiku isn't email-specific (option C) — it's just the right tool for the simpler task.",
      },
      {
        question: "What pattern do all three workflows (email, CRM, content) share?",
        options: [
          "Claude handles everything autonomously with no human involvement at any step",
          "Humans do the high-value work (thinking, decisions, relationships) while Claude handles repetitive execution (research, drafting, formatting, routing)",
          "Claude only works on one workflow at a time and requires manual switching between modes",
        ],
        correctIndex: 1,
        explanation:
          "The consistent model is human-AI collaboration: humans provide direction, make key decisions, and manage relationships, while Claude handles the time-consuming repetitive work. It's not fully autonomous (option A) — humans review drafts and make final calls. And Claude can power multiple workflows simultaneously (option C).",
      },
    ],
  },
  "05-4": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "Why should you test with edge cases like empty fields and extra-long text before launching an automation?",
        options: [
          "Edge cases only occur in testing environments, not in production",
          "Real-world data is messy — empty fields, long text, and special characters are common and will break automations that only work with perfect data",
          "Edge case testing is only necessary for Opus-powered automations since Haiku handles them automatically",
        ],
        correctIndex: 1,
        explanation:
          "Production data is unpredictable. People leave fields blank, paste entire documents into form fields, and use special characters. If your automation only handles clean, perfect data, it will fail in the real world. Edge cases happen in production too (option A is wrong), and all models need proper input handling (option C) — Haiku doesn't magically handle bad data.",
      },
      {
        question: "When scaling from 5 to 50 automations, what organizational practice becomes critical?",
        options: [
          "Keeping all automations in a single scenario for easier management",
          "Naming them clearly (including the Claude model used), grouping by function, documenting each one, and tracking costs per workflow",
          "Running all automations on the same schedule so they're easier to monitor",
        ],
        correctIndex: 1,
        explanation:
          "At scale, organization is everything. Clear names like 'Lead Enrichment - Inbound Form (Sonnet)' beat 'Scenario 47'. Grouping by function, documenting what each does, and tracking per-workflow costs lets you manage 50+ automations without chaos. Combining into one scenario (option A) creates a maintenance nightmare. Same-schedule running (option C) doesn't help with organization.",
      },
    ],
  },
  "06-1": {
    title: "Where AI actually makes businesses money",
    duration: "6 min read",
    content: `Let's cut through the noise. Every tech company is screaming about AI, but 90% of what you see is hype designed to sell software subscriptions. What I'm going to show you is where Claude — specifically — puts real dollars on your bottom line.

## The three revenue levers

AI makes businesses money in exactly three ways:

1. **Cost reduction** — Replace or augment expensive manual labor. A customer support team of 5 handling 200 tickets/day can handle 800 with Claude doing first-pass responses and routing. That's not a 4x headcount reduction — it's a 4x capacity increase without hiring.
2. **Revenue acceleration** — Close more deals, faster. Claude can personalize outreach to 500 prospects in the time your sales rep writes 5 emails. Same quality, 100x the volume. One client went from 30 cold emails/day to 500 — booked 3x more meetings in month one.
3. **Intelligence advantage** — Make better decisions with data you already have. Most businesses are sitting on goldmines of customer data, sales records, and market intel they never analyze. Claude reads 200 pages in seconds and gives you a structured summary your team would take a week to produce.

## Where the real money is

Here's what I've seen generate the fastest ROI across businesses I've worked with:

- **Customer support automation:** 40-70% ticket deflection. At $15/ticket fully loaded cost, a business doing 1,000 tickets/month saves $6,000-$10,500/month.
- **Sales outreach personalization:** 2-5x increase in response rates. If your pipeline is $500K and you double your meeting-to-close ratio, that's real money.
- **Document processing:** Contracts, invoices, applications — anything your team reads and extracts data from. 10 hours/week of manual review becomes 30 minutes.
- **Content production:** Blog posts, social media, email sequences, SOPs. A marketing team producing 4 blog posts/month can produce 16 without adding headcount.

<!-- check:0 -->

## Why Claude specifically

I'm not telling you to use AI generically. I'm telling you to use Claude because:

- **200K token context window** — Feed it your entire operations manual, product catalog, or customer database. It reads and reasons over the whole thing.
- **Tool use** — Claude doesn't just chat. It can call your APIs, search your databases, and take actions in your systems.
- **Vision** — Upload screenshots, photos of whiteboards, scanned documents. Claude reads and processes images natively.
- **Reliability** — Claude follows instructions precisely. When you build business systems, you need consistency, not creativity.

<!-- check:1 -->

## The uncomfortable truth

Most businesses that "tried AI" spent $20/month on ChatGPT, had one person play with it for a week, and declared it "not ready." That's like buying a CRM and never importing your contacts. The tool isn't the problem — the implementation is.

This course fixes that.`,
    takeaways: [
      "AI drives revenue through three levers: cost reduction, revenue acceleration, and intelligence advantage",
      "The highest-ROI opportunities are customer support automation, sales personalization, document processing, and content production",
      "Claude's 200K context window, tool use, and vision capabilities make it uniquely suited for business operations",
      "Most AI failures aren't tool problems — they're implementation problems",
    ],
    exercise:
      "List every repetitive task in your business that involves reading, writing, or analyzing information. For each one, estimate hours spent per week and fully loaded cost. Rank them by cost. Your top 3 are where Claude starts.",
    checks: [
      {
        question: "What are the three revenue levers where AI makes businesses money?",
        options: [
          "Building AI products, selling AI consulting, and training teams on AI tools",
          "Cost reduction (replace/augment manual labor), revenue acceleration (close more deals faster), and intelligence advantage (better decisions from existing data)",
          "Automating HR, replacing customer support entirely, and eliminating management roles",
        ],
        correctIndex: 1,
        explanation:
          "The three levers are: reducing costs by augmenting labor (not replacing — a 5-person team handles 4x more work), accelerating revenue through personalized outreach at scale, and gaining intelligence advantages by analyzing data you already have. These are internal operational levers, not business models (option A) or blanket role elimination (option C).",
      },
      {
        question: "Why does the lesson specifically recommend Claude over 'AI generically' for business operations?",
        options: [
          "Claude is the only AI model available for business use",
          "Claude's 200K context window, tool use, vision capabilities, and precise instruction following make it uniquely suited for building reliable business systems",
          "Claude is free for business users while other models charge per API call",
        ],
        correctIndex: 1,
        explanation:
          "Claude's specific capabilities — 200K context for processing entire documents, tool use for taking actions, vision for reading images, and best-in-class instruction following for consistency — make it ideal for business automation. Other AI models exist for business (option A is wrong), and Claude has standard API pricing (option C is wrong).",
      },
    ],
  },
  "06-2": {
    title: "The AI audit: finding your highest-ROI opportunities",
    duration: "7 min read",
    content: `Before you automate anything, you need to know where the money actually is. I've seen businesses waste months automating the wrong things — building a fancy AI chatbot when their real bottleneck was proposal generation. This lesson gives you the exact audit framework I use with every client.

## The 4-quadrant opportunity matrix

Map every potential AI opportunity on two axes:

**X-axis: Implementation difficulty** (Easy to Hard)
**Y-axis: Business impact** (Low to High)

- **Quadrant 1 (Easy + High Impact):** Start here. These are your quick wins. Example: Using Claude to draft client emails from bullet points. Takes 30 minutes to set up, saves 5+ hours/week.
- **Quadrant 2 (Hard + High Impact):** Plan these for months 2-3. Example: Building a Claude-powered customer support system with your knowledge base. Takes weeks to build, but saves thousands monthly.
- **Quadrant 3 (Easy + Low Impact):** Do these when you have downtime. Example: Using Claude to summarize meeting notes. Nice to have, not transformative.
- **Quadrant 4 (Hard + Low Impact):** Skip entirely. Example: Building an AI-powered internal wiki nobody will use.

## The audit process (step by step)

### Step 1: Department mapping

Walk through each function in your business and list every task that involves:
- **Reading and processing information** (emails, documents, data, reports)
- **Writing and generating content** (emails, proposals, reports, social media)
- **Analyzing and deciding** (evaluating options, scoring leads, prioritizing work)
- **Repeating patterns** (same email to different people, same report every week)

### Step 2: Time and cost quantification

For each task, document:
- Who does it (role and hourly cost)
- How long it takes per occurrence
- How often it happens (daily, weekly, monthly)
- Total monthly cost: (hours x frequency x hourly rate)

### Step 3: AI feasibility scoring

Rate each task 1-5 on:
- **Text-heavy:** Does it primarily involve reading or writing? (Higher = better fit for Claude)
- **Pattern-based:** Is it the same general process each time? (Higher = easier to automate)
- **Error tolerance:** How bad is a mistake? (Lower tolerance = needs human oversight)
- **Volume:** How often does this happen? (Higher = bigger ROI)

<!-- check:0 -->

### Step 4: Prioritize ruthlessly

Multiply your monthly cost by your feasibility score. Sort descending. That's your implementation order.

## Real example: $2M services company

I ran this audit for a professional services firm. Here's what we found:

| Task | Monthly Cost | Feasibility | Priority Score |
|------|-------------|-------------|----------------|
| Proposal writing | $4,200 | 4.5 | 18,900 |
| Client email responses | $3,100 | 4.0 | 12,400 |
| Weekly reporting | $2,800 | 4.8 | 13,440 |
| Lead qualification | $2,400 | 3.5 | 8,400 |
| Social media content | $1,800 | 4.2 | 7,560 |

Proposal writing was the clear winner. We built a Claude-powered system that took their average proposal time from 6 hours to 45 minutes. At 15 proposals/month, that freed up 75+ hours — roughly one full-time employee's worth of capacity.

<!-- check:1 -->

## The audit deliverable

Your output should be a simple spreadsheet with: Task, Department, Monthly Cost, Feasibility Score, Priority Score, Recommended Timeline (Month 1, 2, or 3).

Don't overcomplicate this. The goal is to have a clear, prioritized list within 2-3 hours of work.`,
    takeaways: [
      "Use the 4-quadrant matrix (difficulty vs. impact) to categorize every AI opportunity before building anything",
      "Quantify every task by who does it, how long it takes, how often it happens, and total monthly cost",
      "Score each opportunity on text-heaviness, pattern-basis, error tolerance, and volume to determine AI feasibility",
      "Your audit deliverable is a prioritized spreadsheet that becomes your implementation roadmap",
    ],
    exercise:
      "Run the full AI audit on your business or one department. Create the spreadsheet with at least 10 tasks. Score each one and rank them. Share the top 3 with your team and get their input on feasibility — they'll know the edge cases you don't.",
    checks: [
      {
        question: "In the AI audit framework, how do you calculate the priority score for each task?",
        options: [
          "Rank tasks by how exciting they are to automate and start with the most interesting one",
          "Multiply the monthly cost of the task by its AI feasibility score — highest product goes first",
          "Count the number of employees involved and prioritize tasks with the most people",
        ],
        correctIndex: 1,
        explanation:
          "The priority score is calculated as monthly cost x feasibility score, giving you a data-driven ranking of where AI delivers the most value. Excitement-based prioritization (option A) often targets hard problems with low business impact. Headcount (option C) doesn't account for how automatable the task is or its total cost.",
      },
      {
        question: "In the $2M services company example, why was proposal writing the clear winner over other opportunities like social media content?",
        options: [
          "Because proposals are more fun to automate than social media",
          "Because proposal writing had both the highest monthly cost ($4,200) and a high feasibility score (4.5), giving it the top priority score of 18,900",
          "Because the CEO specifically requested proposal automation before the audit started",
        ],
        correctIndex: 1,
        explanation:
          "The math drove the decision: $4,200/month x 4.5 feasibility = 18,900 priority score, the highest of any task. Social media content scored lower ($1,800 x 4.2 = 7,560) despite decent feasibility. The audit framework removes subjective bias (option A) and CEO preferences (option C) from prioritization — data decides.",
      },
    ],
  },
  "06-3": {
    title: "Claude-powered customer support that scales",
    duration: "7 min read",
    content: `Customer support is where most businesses should start with Claude. The ROI is immediate, the use case is straightforward, and the impact is measurable from day one. I've built support systems that handle 70% of inbound tickets without a human touching them. Here's exactly how.

## The architecture

You're not building a chatbot. You're building a tiered support system:

**Tier 1: Claude handles directly (60-70% of tickets)**
- FAQ-type questions with clear answers
- Order status, account info, basic troubleshooting
- Password resets, billing inquiries, return policies
- Anything covered by your knowledge base

**Tier 2: Claude drafts, human approves (20-25% of tickets)**
- Complex issues requiring judgment
- Complaints with emotional context
- Requests outside standard policies
- Claude drafts the response, human edits and sends

**Tier 3: Human handles, Claude assists (5-10% of tickets)**
- Escalations, VIP clients, legal/compliance issues
- Claude provides context summary and suggested approach
- Human runs the conversation with Claude as copilot

## Building the knowledge base

Claude is only as good as the information you feed it. Your knowledge base needs:

**Product/service documentation**
- Every product, service, feature, and pricing detail
- Step-by-step troubleshooting guides
- Known issues and workarounds

**Policy documentation**
- Return/refund policies with exact conditions
- Shipping policies, timelines, exceptions
- Warranty terms, service level agreements

**Tone and brand guidelines**
- How you talk to customers (examples of good and bad responses)
- What you never say (competitors' names, internal jargon, promises you can't keep)
- Escalation triggers — what words or situations mean "get a human immediately"

Claude's 200K context window means you can feed it ALL of this in a single system prompt. No chunking, no retrieval systems, no complexity. Just one massive context block.

<!-- check:0 -->

## The prompt architecture

Here's the structure I use for every support system:

\`\`\`
System prompt:
1. Role definition (who Claude is, what company it represents)
2. Knowledge base (complete product/policy documentation)
3. Response rules (tone, format, length constraints)
4. Escalation rules (when to hand off to human)
5. What to never do (never make promises, never share internal info)
\`\`\`

The key insight: **Be explicit about what Claude should NOT do.** Most support bots fail because they try to help too much — making up answers, offering discounts they can't authorize, or handling situations they should escalate.

## Handling the edge cases

**Angry customers:** Claude should acknowledge the emotion first, then solve the problem. Include examples in your prompt: "When a customer expresses frustration, always start with 'I completely understand your frustration, and I want to make this right.' Never be defensive or dismissive."

**Questions Claude can't answer:** Train it to say "I want to make sure you get the best answer on this — let me connect you with a specialist who can help right away" instead of making something up.

**Repeat contacts:** If your system can access ticket history, include previous interactions in Claude's context. "Customer contacted 3 times this week about the same issue" changes how Claude should respond.

<!-- check:1 -->

## Measuring success

Track these weekly:
- **Deflection rate:** % of tickets fully handled by Claude without human intervention
- **Resolution time:** Average time from ticket open to close (should drop 50%+)
- **Customer satisfaction:** CSAT or NPS on AI-handled vs. human-handled tickets
- **Escalation rate:** % of tickets Claude sends to humans (should be 25-35%)
- **Cost per ticket:** Total support cost / total tickets (your north star metric)

<!-- check:2 -->

## The numbers

A typical implementation:
- **Before:** 5 support agents, 200 tickets/day, $15/ticket fully loaded, $3,000/day
- **After:** 2 support agents + Claude, 200 tickets/day, $4.50/ticket, $900/day
- **Monthly savings:** $63,000
- **Claude API cost:** ~$300/month
- **Net savings:** $62,700/month

Those aren't theoretical numbers. That's what properly implemented AI support looks like.`,
    takeaways: [
      "Build a tiered system: Claude handles 60-70% directly, drafts 20-25% for human approval, assists humans on the remaining 5-10%",
      "Feed Claude your complete knowledge base, policies, and brand guidelines in the 200K context window — no complex retrieval needed",
      "Be explicit about what Claude should NOT do — over-helpfulness causes more problems than under-helpfulness",
      "Track deflection rate, resolution time, CSAT, escalation rate, and cost per ticket weekly",
    ],
    exercise:
      "Collect your 50 most recent customer support tickets. Categorize each as Tier 1 (Claude handles), Tier 2 (Claude drafts), or Tier 3 (human handles). Calculate your current deflection potential. Then write the system prompt for Tier 1 — include your real product info, real policies, and real brand voice.",
    checks: [
      {
        question: "Why does the tiered support system feed Claude the complete knowledge base in the system prompt instead of using a retrieval system?",
        options: [
          "Because retrieval systems are too expensive to build for customer support",
          "Because Claude's 200K context window can hold all product docs, policies, and brand guidelines at once — no chunking or retrieval complexity needed",
          "Because Claude's system prompt is the only place where it can access external information",
        ],
        correctIndex: 1,
        explanation:
          "Claude's 200K context window is large enough to hold complete product documentation, policies, and brand guidelines in a single system prompt. This eliminates the need for complex retrieval systems. Retrieval systems aren't necessarily expensive (option A) — they're just unnecessary when the context window is big enough. Claude can also access info through tool use (option C), but the system prompt approach is simpler.",
      },
      {
        question: "Why is being explicit about what Claude should NOT do more important than what it should do in support systems?",
        options: [
          "Because Claude ignores positive instructions and only follows negative ones",
          "Because most support bot failures come from over-helpfulness — making up answers, offering unauthorized discounts, or handling situations they should escalate",
          "Because negative instructions use fewer tokens than positive instructions",
        ],
        correctIndex: 1,
        explanation:
          "Support bots fail when they try too hard to help — inventing answers, promising things they can't deliver, or handling sensitive situations they should escalate. Explicit 'never do' rules prevent these failures. Claude follows both positive and negative instructions (option A is wrong), and instruction length isn't about token savings (option C) — it's about preventing specific failure modes.",
      },
      {
        question: "What is the 'north star metric' for measuring AI support system success?",
        options: [
          "Number of tickets handled per day",
          "Cost per ticket — total support cost divided by total tickets",
          "Customer satisfaction score on AI-handled tickets only",
        ],
        correctIndex: 1,
        explanation:
          "Cost per ticket captures the full picture: efficiency (tickets per agent), AI effectiveness (deflection rate), and quality (if bad AI responses create repeat tickets, cost goes up). Total ticket volume (option A) doesn't account for cost or quality. AI-only CSAT (option C) is important to track but doesn't capture the overall system economics.",
      },
    ],
  },
  "06-4": {
    title: "AI lead scoring and qualification",
    duration: "7 min read",
    content: `Most businesses treat every lead the same — same follow-up, same timeline, same effort. That's a massive waste. Some leads are 10x more likely to close than others, and Claude can tell you which ones before your sales team spends a minute on them.

## Why traditional lead scoring fails

Traditional lead scoring uses basic rules: downloaded a whitepaper = 5 points, visited pricing page = 10 points, opened an email = 2 points. The problem? These rules are:

- **Static** — They don't adapt to changing buyer behavior
- **Surface-level** — They measure actions, not intent
- **Binary** — A CEO and an intern both get 10 points for visiting the pricing page

Claude does something fundamentally different. It reads the FULL context — the prospect's website, their LinkedIn activity, their email history, their company size — and makes a judgment call the way your best sales rep would.

## Building a Claude-powered lead scoring system

### The data Claude needs

For each lead, feed Claude:
1. **Company info:** Industry, size, revenue (estimate), growth stage, tech stack
2. **Contact info:** Title, role, department, LinkedIn summary
3. **Engagement data:** What pages they visited, emails opened, content downloaded
4. **Communication history:** Any emails, form submissions, or chat transcripts
5. **Firmographic data:** Location, number of employees, funding stage

### The scoring prompt

Here's the framework I use:

"You are a senior sales analyst at [company]. Analyze this lead and score them 1-100 on likelihood to close within 90 days. Consider:
- **Budget signal (25 points):** Company size, revenue indicators, role authority suggest they can afford our solution ($X-$Y range)
- **Need signal (25 points):** Their industry, current tools, and pain points align with what we solve
- **Timeline signal (25 points):** Engagement recency and frequency suggest active buying. Multiple visits in 7 days scores higher than 1 visit in 30 days
- **Fit signal (25 points):** Company profile matches our ideal customer (industry, size, growth stage)

Output: Score (1-100), confidence level (high/medium/low), top 3 scoring factors, recommended next action, and any red flags."

<!-- check:0 -->

### Making it operational

Run this scoring on every new lead as they come in. Set up three tiers:

- **Hot (75-100):** Route to senior sales rep immediately. Personalized outreach within 2 hours.
- **Warm (40-74):** Enter nurture sequence with Claude-personalized content. Sales follow-up within 24 hours.
- **Cool (1-39):** Automated nurture only. No sales time invested until score increases.

## Lead qualification with Claude

Beyond scoring, Claude can qualify leads through automated conversations:

**Website chat qualification:**
Claude asks smart qualifying questions in your website chat:
- "What's driving your interest in [product/service] today?" (Need)
- "Are you evaluating solutions for a specific project or exploring options?" (Timeline)
- "How many people would be using this?" (Size/budget indicator)
- "What's your timeline for making a decision?" (Urgency)

Based on answers, Claude scores and routes in real-time. Hot leads get transferred to a human immediately. Warm leads get booked into the next available meeting slot. Cool leads get a resource and enter the nurture sequence.

**Email qualification:**
When leads respond to outreach, Claude analyzes their response and classifies it:
- Positive intent with buying signals: "Upgrade to Hot, notify sales"
- Interested but early stage: "Keep at Warm, send case study"
- Information gathering only: "Downgrade to Cool, add to newsletter"
- Not interested: "Remove from active sequences"

<!-- check:1 -->

## The compound effect

Here's where it gets powerful. Claude doesn't just score leads once — it re-scores them continuously based on new data:

- Lead visits pricing page twice in one week: Score increases by 15
- Lead downloads case study in their industry: Score increases by 10
- Lead goes silent for 30 days: Score decreases by 20
- Lead responds to nurture email: Re-evaluate all signals

Your sales team always works on the highest-probability leads. No more gut feelings, no more working bad leads because they were enthusiastic on one call.

<!-- check:2 -->

## Real impact

A B2B services company I worked with implemented Claude-powered lead scoring:
- **Before:** Reps spent equal time on all leads. 8% close rate.
- **After:** Reps prioritized by AI score. Hot leads: 24% close rate. Overall: 15% close rate.
- **Revenue impact:** Same team, same effort, 87% more closed deals.`,
    takeaways: [
      "Score leads on four dimensions: budget signal, need signal, timeline signal, and fit signal — each worth 25 points",
      "Route Hot (75-100) to immediate personalized outreach, Warm (40-74) to nurture sequences, Cool (1-39) to automated-only",
      "Use Claude in website chat and email responses for real-time qualification based on buying signals",
      "Re-score leads continuously as new data comes in — scores should be dynamic, not static snapshots",
    ],
    exercise:
      "Take your last 20 closed deals and 20 lost deals. Feed each one's data to Claude with the scoring framework. Check if Claude would have scored your closed deals higher than your lost deals. If the separation is clear, your scoring model works. If not, adjust the signal weights until it accurately predicts your historical outcomes.",
    checks: [
      {
        question: "What are the four scoring dimensions in the Claude-powered lead scoring framework, each worth 25 points?",
        options: [
          "Email opens, website visits, content downloads, and social media engagement",
          "Budget signal, need signal, timeline signal, and fit signal",
          "Company size, industry type, geographic location, and annual revenue",
        ],
        correctIndex: 1,
        explanation:
          "The four dimensions are: budget signal (can they afford it?), need signal (do they have the problem you solve?), timeline signal (are they actively buying?), and fit signal (do they match your ideal customer profile?). Traditional metrics like email opens (option A) measure actions, not intent. Raw firmographic data (option C) is input to the scoring, not the scoring dimensions themselves.",
      },
      {
        question: "How does Claude-powered lead qualification in website chat work differently from a static form?",
        options: [
          "Claude asks the same fixed questions in the same order regardless of answers",
          "Claude asks smart qualifying questions, evaluates answers in real-time, and routes leads based on buying signals — Hot leads get transferred to humans immediately",
          "Claude replaces the form entirely and doesn't collect any structured data",
        ],
        correctIndex: 1,
        explanation:
          "Claude-powered chat qualification is dynamic: it asks questions about need, timeline, and budget, evaluates the responses in real-time, and routes accordingly. Hot leads go straight to a human, warm leads get booked for meetings, cool leads enter nurture sequences. Unlike static forms (option A), Claude adapts its questions. It still produces structured data for your CRM (option C is wrong).",
      },
      {
        question: "Why should lead scores be dynamic rather than static snapshots?",
        options: [
          "Because Claude can only generate scores in real-time, not store them",
          "Because buyer behavior changes — visiting the pricing page twice, downloading case studies, or going silent for 30 days should continuously update the score",
          "Because static scores use more API tokens than dynamic re-scoring",
        ],
        correctIndex: 1,
        explanation:
          "Leads are not static. A lead who visits your pricing page twice in a week is showing increasing intent — their score should go up. One who goes silent for 30 days is cooling off — their score should drop. Re-scoring on new data keeps your team focused on the hottest leads. Claude can store scores (option A is wrong), and dynamic scoring doesn't necessarily cost more (option C).",
      },
    ],
  },
  "07-1": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What are the four core components of a Claude agent?",
        options: [
          "API key, endpoint, request body, and response handler",
          "The brain (Claude model), tools (functions it can call), memory (context), and the agentic loop (think-act-observe cycle)",
          "System prompt, user message, assistant response, and tool results",
        ],
        correctIndex: 1,
        explanation:
          "A Claude agent has four components: the brain (Claude does the reasoning), tools (functions like search_web or send_email), memory (conversation context up to 200K tokens plus stored data), and the agentic loop (think -> act -> observe -> think again). API components (option A) are how you call Claude, not agent architecture. Message types (option C) are API structure, not agent design.",
      },
      {
        question: "In the SaaS prospecting example, what makes this an agent rather than a simple automation?",
        options: [
          "It runs faster than a human could do the same task",
          "Claude decides what to do at each step — searching, filtering, researching, writing — based on the results it gets, rather than following a fixed script",
          "It uses the Opus model instead of Haiku",
        ],
        correctIndex: 1,
        explanation:
          "An agent is defined by autonomous decision-making. Claude decides when to search, what to filter, which person to research next, and how to personalize each email based on what it finds. A simple automation follows a fixed script regardless of results. Speed (option A) doesn't define an agent, and model choice (option C) doesn't either — the agentic loop is the key difference.",
      },
    ],
  },
  "07-2": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "How does Claude decide which tool to use during a conversation?",
        options: [
          "You must explicitly tell Claude which tool to call in every message",
          "Claude reads the tool descriptions you defined and autonomously decides which tool fits the current task based on those descriptions",
          "Claude randomly selects from available tools until one works",
        ],
        correctIndex: 1,
        explanation:
          "Claude uses the tool descriptions in your JSON schemas to determine when and which tool to call. Clear descriptions like 'Search the CRM for contacts by name, email, or company' help Claude match the right tool to the task. You don't need to specify the tool each time (option A) — Claude decides autonomously. And it's not random (option C) — it's based on understanding the descriptions.",
      },
      {
        question: "Why should you start with read-only tools when building Claude agents and add write tools later?",
        options: [
          "Because read-only tools are faster and cheaper to run",
          "Because read-only tools let the agent gather information without risk of unintended modifications — you can validate its decision-making before granting write access",
          "Because Claude can't use read and write tools in the same conversation",
        ],
        correctIndex: 1,
        explanation:
          "Starting read-only is a safety principle. The agent can search, look up, and analyze without any risk of sending wrong emails, deleting records, or corrupting data. Once you've validated that Claude makes good decisions with read tools, you add write tools with guardrails. Speed/cost isn't the main concern (option A). Claude absolutely can use both types together (option C).",
      },
    ],
  },
  "07-3": {
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

<!-- check:0 -->

## A real multi-agent system

**Claude-Powered Sales Team:**

1. **Prospecting Agent (Haiku):** Finds companies matching ideal customer profile. Tools: web search, database queries. Output: list of qualified companies.

2. **Research Agent (Sonnet):** Deep-dives on each company. Tools: web search, LinkedIn, news APIs. Output: company brief with pain points and opportunities.

3. **Outreach Agent (Sonnet):** Writes personalized emails using research. Tools: email templates, CRM. Output: ready-to-send emails.

4. **Manager Agent (Opus):** Orchestrates the pipeline, handles errors, ensures quality. Reviews outputs before they go out. Uses extended thinking for quality assessment.

<!-- check:1 -->

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
    checks: [
      {
        question: "What are the three architecture patterns for multi-agent Claude systems?",
        options: [
          "Frontend, backend, and database agents",
          "Sequential pipeline (A -> B -> C), supervisor pattern (manager delegates to specialists), and parallel execution (multiple agents work simultaneously)",
          "Input agent, processing agent, and output agent",
        ],
        correctIndex: 1,
        explanation:
          "The three patterns are: sequential (each agent passes results to the next), supervisor (a manager agent delegates and synthesizes), and parallel (multiple agents work on different parts simultaneously). These are architectural patterns, not role labels (option A or option C) — any pattern can include various agent roles.",
      },
      {
        question: "In the Claude-Powered Sales Team example, why does the Manager Agent use Opus while worker agents use Sonnet or Haiku?",
        options: [
          "Because Opus can manage more API connections simultaneously",
          "Because the manager needs deep reasoning for orchestration, error handling, and quality assessment, while worker agents handle more straightforward specialized tasks",
          "Because Opus is the only model that supports the supervisor pattern",
        ],
        correctIndex: 1,
        explanation:
          "The manager agent makes complex decisions: which agent to call next, whether outputs pass quality checks, how to handle errors. This requires Opus-level reasoning with extended thinking. Worker agents do focused tasks (prospecting, research, writing) that Sonnet or Haiku handle well. It's not about API connections (option A), and all models support any pattern (option C).",
      },
    ],
  },
  "07-4": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What three tools does the Company Research Agent use, and what does each provide?",
        options: [
          "send_email, update_crm, and schedule_meeting — for outreach automation",
          "search_web (finds general info), scrape_website (reads company website content), and lookup_linkedin (finds key people)",
          "read_database, write_database, and delete_database — for CRM management",
        ],
        correctIndex: 1,
        explanation:
          "The Research Agent needs information-gathering tools: search_web finds general company info, scrape_website reads their actual website for product/service details, and lookup_linkedin identifies key decision-makers. The other options describe action tools (option A) or database operations (option C) — the research agent is read-only by design.",
      },
      {
        question: "Why does the Outreach Agent include a self-check step before queuing emails?",
        options: [
          "Because Claude's API requires a validation step before any email can be sent",
          "To verify the email is specific enough — referencing something real about the company — rather than sending generic outreach that wastes the research data",
          "Because the self-check converts the email from plain text to HTML formatting",
        ],
        correctIndex: 1,
        explanation:
          "The self-check catches a common failure: the agent generating generic emails that don't use the research brief. By having Claude verify 'is it specific enough? Does it mention something real about the company?', bad emails get caught before sending. The API doesn't require validation (option A), and the self-check is about content quality, not formatting (option C).",
      },
    ],
  },
  "08-1": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the staging-to-production pattern for launching Claude systems?",
        options: [
          "Build in production with real data and fix issues as users report them",
          "Build in staging, run with real data but no real actions (draft emails, test database), monitor for 3-5 days, then switch to production",
          "Test with dummy data for one hour, then go live immediately to start delivering value",
        ],
        correctIndex: 1,
        explanation:
          "The staging-to-production pattern validates Claude's behavior on real data without real consequences. Running for 3-5 days catches edge cases that synthetic tests miss. Building directly in production (option A) means real users see every mistake. One hour of dummy data (option C) is too short and too artificial to catch the variety of real-world inputs your system will encounter.",
      },
      {
        question: "Why might a Claude system that works at 10 runs/day break at 1,000 runs/day?",
        options: [
          "Because Claude's model quality degrades with higher usage volume",
          "Because rate limits get hit, costs scale unexpectedly, and context window limits may be reached with higher data volumes",
          "Because Claude can only handle 100 API calls per account per day",
        ],
        correctIndex: 1,
        explanation:
          "At scale, multiple factors compound: Anthropic's API rate limits may throttle your requests, token costs multiply (a $3/day system becomes $300/day), and higher data volumes may push against context window limits. Claude's quality doesn't degrade with usage (option A), and there's no 100-call daily limit (option C) — limits depend on your API tier.",
      },
    ],
  },
  "08-2": {
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

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What six things should you log for every Claude automation run?",
        options: [
          "Just the final output and whether it passed or failed",
          "Input data, Claude model used, prompt sent, response received, tokens consumed, and any errors",
          "Only the timestamp and total cost per run",
        ],
        correctIndex: 1,
        explanation:
          "Comprehensive logging captures input, model, prompt, response, tokens, and errors — giving you everything needed to debug, optimize, and audit. Logging only output/pass-fail (option A) makes it impossible to understand why something went wrong. Timestamp and cost only (option C) misses the data you need for quality analysis and troubleshooting.",
      },
      {
        question: "Why should you alert on patterns (like error rate spikes) rather than individual failures?",
        options: [
          "Because individual failures never matter and can always be ignored",
          "Because alerting on every failure causes alert fatigue — pattern-based alerts catch real problems while filtering out normal occasional failures",
          "Because monitoring tools can only detect patterns, not individual events",
        ],
        correctIndex: 1,
        explanation:
          "Occasional API failures are normal. Alerting on each one means you get paged constantly and start ignoring alerts. Pattern-based alerts (error rate above 10%, zero runs when expected, cost spikes) surface real problems that need attention. Individual failures can matter (option A is too extreme), and monitoring tools can detect both (option C) — the choice is about signal-to-noise ratio.",
      },
    ],
  },
  "08-3": {
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

<!-- check:0 -->

## Training the team

Don't just send the doc. Walk through it live:
1. Show them the Claude system running end-to-end
2. Let them trigger a test run and watch Claude's output
3. Simulate a failure and show them how to diagnose it
4. Let them make a small change (update a Claude prompt, change a setting)

Once they can run it, debug it, and modify it — you're free.

<!-- check:1 -->

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
    checks: [
      {
        question: "What five sections should every Claude system handoff document include?",
        options: [
          "Executive summary, budget, timeline, risks, and sign-off",
          "What it does (2 sentences), how it works (bullet points), where it lives (links), what can go wrong (failure modes), and how to modify it (change instructions)",
          "Introduction, methodology, results, discussion, and conclusion",
        ],
        correctIndex: 1,
        explanation:
          "The handoff doc covers: what (purpose in 2 sentences), how (step-by-step flow), where (links to scenarios, sheets, API keys), risks (failure modes and fixes), and modifications (how to change prompts, channels, or models). This is operational documentation, not a business proposal (option A) or academic paper (option C).",
      },
      {
        question: "Why should you create separate Anthropic API keys for different team members or systems?",
        options: [
          "Because each API key has a different set of Claude models it can access",
          "Because separate keys let you track usage per person/system and revoke access for one without affecting everyone else",
          "Because Anthropic offers a discount when you use multiple API keys",
        ],
        correctIndex: 1,
        explanation:
          "Separate API keys give you granular control: you can see which system or person is using how many tokens, and if someone leaves or a system goes rogue, you revoke that key without disrupting everything else. All keys access the same models (option A is wrong), and there's no multi-key discount (option C).",
      },
    ],
  },
  "08-4": {
    title: "Iterating and improving over time",
    duration: "4 min read",
    content: `Your first version of any Claude system is never the best version. The operators who win are the ones who consistently improve their systems based on real data.

## The improvement cycle

**Weekly:** Review Claude output quality on a random sample. Are the responses still good? Has anything drifted? Check if Anthropic has released model updates that might affect output.

**Monthly:** Check overall metrics. Success rate, Anthropic API cost, time saved, and business impact. Is this system still worth running? Could a cheaper Claude model handle it?

**Quarterly:** Evaluate the entire system. Are there new Claude capabilities (new models, new features, better tool use) that could make it significantly better? Should you rebuild or retire it?

<!-- check:0 -->

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

<!-- check:1 -->

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
    checks: [
      {
        question: "What is the single highest-leverage improvement you can make to a Claude system?",
        options: [
          "Upgrading to a more expensive hosting provider for faster response times",
          "Prompt quality — small prompt changes can dramatically improve Claude's output, and A/B testing different prompts reveals what works best",
          "Adding more tools so Claude has more options to choose from",
        ],
        correctIndex: 1,
        explanation:
          "Prompt improvements have the highest impact-to-effort ratio. A small wording change, adding XML structure, or including better examples can dramatically change output quality. Hosting upgrades (option A) affect infrastructure, not AI quality. More tools (option C) can help but also adds complexity — better prompts improve every single run.",
      },
      {
        question: "When should you rebuild a Claude system from scratch rather than patching it?",
        options: [
          "Every time Anthropic releases a new Claude model",
          "When requirements have fundamentally changed, a new Claude capability makes a better architecture possible, or you've patched the same system for the third time",
          "Never — always patch existing systems since rebuilding wastes the original investment",
        ],
        correctIndex: 1,
        explanation:
          "Rebuild when the foundation no longer fits: requirements changed significantly, new Claude features enable a better approach, or repeated patches signal the architecture can't handle current needs. Not every model release warrants a rebuild (option A) — test the new model with your existing system first. And sometimes rebuilding is the right investment (option C) — clinging to a patched-up system costs more in maintenance than a clean rebuild.",
      },
    ],
  },
};

export const aiAutomationQuizzes: CourseQuizzes = {
  "01": {
    title: "Claude Fundamentals Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What makes Claude's 200K context window a practical advantage for business automations?",
        options: [
          "It makes Claude run faster by pre-loading more data into cache",
          "It lets you process entire codebases, long documents, and extensive conversation histories in a single call",
          "It automatically summarizes content so you never hit token limits",
        ],
        correctIndex: 1,
        explanation:
          "The 200K context window means you can feed Claude massive inputs — full codebases, lengthy contracts, or long conversation histories — in one call without chunking. It does not make Claude faster (option A) or auto-summarize content (option C); it simply allows more information to fit in a single request.",
      },
      {
        type: "mc",
        question:
          "When building automations that run hundreds of times per day, what is the most effective cost strategy with Claude models?",
        options: [
          "Always use Haiku regardless of task complexity",
          "Use Opus for everything to ensure maximum quality",
          "Route tasks to Haiku, Sonnet, or Opus based on complexity, quality needs, and frequency",
        ],
        correctIndex: 2,
        explanation:
          "Smart model routing is the key cost strategy. Haiku handles simple, high-frequency tasks cheaply; Sonnet covers mid-complexity work; Opus tackles the hardest problems. Using only Haiku (option A) sacrifices quality on complex tasks, and using only Opus (option B) wastes money on simple tasks that a cheaper model handles just as well.",
      },
      {
        type: "mc",
        question:
          "Which Claude model tier is best suited for high-volume, simple classification tasks like tagging support tickets?",
        options: [
          "Opus — the most capable model for any task",
          "Haiku — fast, cheap, and sufficient for straightforward classification",
          "Sonnet — the default choice for every automation",
        ],
        correctIndex: 1,
        explanation:
          "Haiku is purpose-built for fast, low-cost tasks like classification, tagging, and routing. Opus (option A) is overkill and expensive for simple pattern matching. Sonnet (option C) is a good general-purpose model but still more expensive than Haiku for tasks that don't need its extra capability.",
      },
      {
        type: "mc",
        question:
          "What is a key difference between Opus and Sonnet in terms of when you should use each?",
        options: [
          "Opus is for complex reasoning, strategy, and nuanced writing; Sonnet is for everyday tasks that need good quality at lower cost",
          "Opus is only for coding; Sonnet is only for writing",
          "Opus and Sonnet produce identical output, but Opus is just slower",
        ],
        correctIndex: 0,
        explanation:
          "Opus excels at complex reasoning, multi-step analysis, and nuanced creative work, while Sonnet delivers strong results for standard business tasks at a fraction of the cost. They are not limited to single domains (option B), and Opus produces meaningfully different — often higher quality — output on hard problems, not identical output (option C).",
      },
      {
        type: "mc",
        question:
          "Why is understanding token pricing important when building Claude automations at scale?",
        options: [
          "Tokens only matter for billing; they have no effect on output quality",
          "Token costs compound at scale, so choosing the right model and managing prompt length directly impacts profitability",
          "Token limits are the same across all Claude models, so pricing is irrelevant",
        ],
        correctIndex: 1,
        explanation:
          "At hundreds or thousands of runs per day, even small per-token cost differences multiply into significant expenses. Managing prompt length and selecting the right model tier keeps margins healthy. Tokens do relate to context capacity and quality tradeoffs, not just billing (option A), and different model tiers have different pricing and capabilities (option C).",
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
        ],
        correctIndex: 1,
        explanation:
          "The RCTC formula — Role, Context, Task, Constraints — gives Claude a clear identity, background information, a specific job to do, and boundaries for the output. Input/Processing/Output/Feedback (option A) is a generic data flow model, not a prompting framework. System/User/Assistant/Function (option C) are API message roles, not prompt structure components.",
      },
      {
        type: "mc",
        question:
          "What is the difference between chain-of-thought prompting and Claude's extended thinking feature?",
        options: [
          "They are the same thing with different names",
          "Extended thinking is a built-in Claude capability with a dedicated reasoning phase, while chain-of-thought is a prompting technique you write yourself",
          "Chain-of-thought is faster and more accurate than extended thinking in all cases",
        ],
        correctIndex: 1,
        explanation:
          "Chain-of-thought is a prompting technique where you explicitly ask Claude to reason step-by-step in its response. Extended thinking is a native Claude feature that gives the model a separate, dedicated reasoning phase before it responds. They are not the same (option A), and extended thinking often outperforms manual chain-of-thought on complex tasks (option C).",
      },
      {
        type: "mc",
        question:
          "How should you use XML tags in Claude prompts?",
        options: [
          "XML tags are only for the API and do not work in regular prompts",
          "Use XML tags like <context>, <instructions>, and <examples> to clearly separate and label sections of your prompt",
          "XML tags should replace natural language entirely for best results",
        ],
        correctIndex: 1,
        explanation:
          "XML tags help Claude parse prompt sections clearly — for example, separating context from instructions from examples. They work in both the API and Claude.ai (option A is wrong). They complement natural language rather than replacing it (option C); the tags provide structure while natural language provides the actual instructions.",
      },
      {
        type: "mc",
        question:
          "What is the purpose of building a reusable prompt library for your team?",
        options: [
          "It ensures consistent, high-quality outputs by templatizing proven prompts with variables and tagging them by model tier",
          "It eliminates the need to understand prompting because anyone can copy and paste",
          "It locks prompts so they can never be modified or improved",
        ],
        correctIndex: 0,
        explanation:
          "A prompt library standardizes quality across your team by capturing what works, using variables for customization, and noting which model tier each prompt is optimized for. It does not eliminate the need to understand prompting (option B) — team members still need to fill in variables and adapt templates. And prompts should be iterated and improved over time, not locked (option C).",
      },
      {
        type: "mc",
        question:
          "When should you use the system prompt versus the user message in Claude's API?",
        options: [
          "The system prompt sets persistent instructions, role, and constraints; the user message contains the specific task or input for that request",
          "There is no meaningful difference — put everything in the user message",
          "The system prompt is only for safety filters and cannot contain custom instructions",
        ],
        correctIndex: 0,
        explanation:
          "The system prompt is where you set Claude's role, tone, rules, and persistent context that applies across the conversation. The user message is for the specific request or data. There is a meaningful difference (option B) — system prompts carry more weight for behavioral instructions. And system prompts absolutely support custom instructions, not just safety filters (option C).",
      },
    ],
  },
  "03": {
    title: "Advanced Prompting Quiz",
    questions: [
      {
        type: "mc",
        question:
          "You need Claude to write sales copy for a DTC skincare brand. Which prompt follows the RCTC formula correctly?",
        options: [
          "\"Write good sales copy for skincare products that converts well\"",
          "\"You are a senior DTC copywriter specializing in skincare. Write a 100-word product description for an anti-aging serum targeting women 35-50. Tone: confident, benefit-driven. Focus on results, not ingredients.\"",
          "\"Act like you know about skincare and write something persuasive about our new product\"",
        ],
        correctIndex: 1,
        explanation:
          "Option B nails RCTC: Role (senior DTC copywriter), Context (skincare, anti-aging serum), Task (100-word product description for women 35-50), Constraints (confident tone, benefit-driven, results over ingredients). Option A has no role, no context, and no constraints — it is too vague. Option C is informal and lacks specifics on audience, length, or tone.",
      },
      {
        type: "mc",
        question:
          "You want Claude to classify customer support tickets. Zero-shot prompting gives inconsistent results. What technique would most improve accuracy?",
        options: [
          "Increase the temperature setting for more creative flexibility",
          "Add few-shot examples showing 3-5 correctly classified tickets before the new ones",
          "Make the prompt shorter so Claude focuses on the core task",
        ],
        correctIndex: 1,
        explanation:
          "Few-shot prompting gives Claude concrete examples of correct classifications, dramatically improving consistency. Increasing temperature (option A) adds randomness, which makes classification less consistent, not more. Shorter prompts (option C) remove helpful context — the issue is not length, it is the lack of examples.",
      },
      {
        type: "mc",
        question:
          "What is the key difference between zero-shot and few-shot prompting?",
        options: [
          "Zero-shot asks Claude to perform a task with no examples; few-shot provides examples of correct input-output pairs first",
          "Zero-shot is free and few-shot costs extra tokens, but they produce the same results",
          "Zero-shot only works with Haiku; few-shot only works with Opus",
        ],
        correctIndex: 0,
        explanation:
          "Zero-shot means giving Claude a task with no examples, relying on its training. Few-shot means providing example input-output pairs so Claude can learn the pattern. Few-shot does cost more tokens (option B), but it often produces significantly better results — they are not the same. Both techniques work across all model tiers (option C).",
      },
      {
        type: "mc",
        question:
          "When is chain-of-thought prompting most valuable compared to asking for a direct answer?",
        options: [
          "When the task involves simple lookups or single-step answers",
          "When the task requires multi-step reasoning, math, logic, or weighing tradeoffs",
          "When you want the shortest possible response to save tokens",
        ],
        correctIndex: 1,
        explanation:
          "Chain-of-thought shines on tasks requiring multi-step reasoning — calculations, logical analysis, strategic decisions — because it forces Claude to show its work and catch errors. Simple lookups (option A) do not benefit from step-by-step reasoning. And chain-of-thought intentionally produces longer responses (option C), trading tokens for accuracy.",
      },
      {
        type: "mc",
        question:
          "How does Claude's extended thinking feature improve output quality on complex tasks?",
        options: [
          "It gives Claude a separate reasoning phase to think through the problem before generating the visible response",
          "It doubles the context window so Claude can process more data",
          "It automatically switches to Opus regardless of which model you selected",
        ],
        correctIndex: 0,
        explanation:
          "Extended thinking adds a dedicated reasoning phase where Claude works through the problem internally before producing its final answer. This improves quality on complex tasks. It does not change the context window size (option B) or switch models (option C) — it enhances the reasoning process of whichever model you are using.",
      },
    ],
  },
  "04": {
    title: "Claude API & Integrations Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the three things you need to make a Claude API call?",
        options: [
          "A database, a frontend, and a backend server",
          "An API key from console.anthropic.com, the Messages API endpoint, and the request body with model and messages",
          "A webhook URL, a trigger event, and an action step",
        ],
        correctIndex: 1,
        explanation:
          "A Claude API call requires your API key for authentication, the Messages API endpoint to send requests to, and a properly formatted request body specifying the model and messages. You do not need a database or frontend (option A) — API calls can be made from scripts, automation tools, or backends. Webhooks and triggers (option C) are automation platform concepts, not API requirements.",
      },
      {
        type: "mc",
        question:
          "What is MCP (Model Context Protocol) and why does it matter for Claude integrations?",
        options: [
          "MCP is a way to make Claude run faster by compressing message payloads",
          "MCP is Anthropic's open protocol that standardizes how Claude connects to external tools and data sources",
          "MCP is a monitoring dashboard for tracking Claude API usage and costs",
        ],
        correctIndex: 1,
        explanation:
          "MCP is an open protocol from Anthropic that gives Claude a standardized way to connect to external tools, databases, and services. This matters because it means you can build tool integrations once and reuse them across projects. It is not about compression or speed (option A), and it is not a monitoring tool (option C) — it is an integration standard.",
      },
      {
        type: "mc",
        question:
          "What are the essential reliability patterns you should implement from day one for Claude automations?",
        options: [
          "Only log errors and fix them when users complain",
          "Retry logic with exponential backoff, input/output logging, error alerts, and output validation",
          "Run every request twice and compare outputs manually",
        ],
        correctIndex: 1,
        explanation:
          "The 80/20 of reliability includes retry logic (APIs fail occasionally), logging inputs and outputs (for debugging), error alerts (so you know immediately when something breaks), and output validation (catching bad responses before they reach users). Waiting for user complaints (option A) means silent failures go unnoticed. Running everything twice (option C) doubles cost without systematic error handling.",
      },
      {
        type: "mc",
        question:
          "How should you handle API key security when building Claude integrations?",
        options: [
          "Store the API key in environment variables or a secrets manager, never in source code",
          "Hardcode the API key in your application so it is always available",
          "Share one API key across all team members and projects for simplicity",
        ],
        correctIndex: 0,
        explanation:
          "API keys should live in environment variables or a secrets manager to prevent accidental exposure in version control. Hardcoding keys in source code (option B) means anyone with repo access can see and misuse them. Sharing a single key (option C) makes it impossible to track usage per team member or revoke access for one person without affecting everyone.",
      },
      {
        type: "mc",
        question:
          "What is the purpose of output validation in a Claude automation pipeline?",
        options: [
          "To make Claude responses shorter and save on token costs",
          "To check that Claude's response matches the expected format and quality before passing it downstream",
          "To automatically retrain Claude on better answers",
        ],
        correctIndex: 1,
        explanation:
          "Output validation catches malformed or low-quality responses before they reach users or trigger downstream actions. This could mean checking JSON structure, verifying required fields, or flagging responses that seem off. It is not about reducing length (option A) — it is about correctness. And you cannot retrain Claude through the API (option C); validation is about catching issues, not training.",
      },
    ],
  },
  "05": {
    title: "Automation Workflows Quiz",
    questions: [
      {
        type: "mc",
        question:
          "According to the course, what is the recommended starting platform for building Claude-powered automations?",
        options: [
          "Zapier, because it has the most app integrations",
          "Custom code, because it gives you full control from the start",
          "Make.com, because it hits the sweet spot of power and usability for Claude workflows",
        ],
        correctIndex: 2,
        explanation:
          "Make.com offers visual workflow building with enough flexibility to handle complex Claude integrations, HTTP modules, and branching logic. Zapier (option A) has many integrations but is more limited for complex multi-step Claude workflows. Custom code (option B) offers full control but is slower to build and iterate, making it better for later optimization than initial prototyping.",
      },
      {
        type: "mc",
        question:
          "What is the correct approach to building a multi-step Claude-powered pipeline?",
        options: [
          "Build all steps at once, then test the entire pipeline end-to-end",
          "Map the manual process first, assign Claude models to each step, then build and test sequentially",
          "Start with the most complex step to prove feasibility before adding simpler ones",
        ],
        correctIndex: 1,
        explanation:
          "You start by understanding the manual workflow, then decide which steps Claude should handle and which model tier fits each step, then build and test one step at a time. Building all at once (option A) makes debugging nearly impossible when something fails. Starting with the hardest step (option C) often blocks progress when simpler wins would build momentum and validate the approach.",
      },
      {
        type: "mc",
        question:
          "What pattern do the email, CRM, and content automation workflows all share?",
        options: [
          "Claude handles everything end-to-end with no human involvement",
          "Humans set strategy and approve critical outputs, while Claude handles drafting, classification, and repetitive processing",
          "Humans do the creative work and Claude only handles data entry",
        ],
        correctIndex: 1,
        explanation:
          "The consistent pattern is human-AI division: humans provide strategic direction and final approval on high-stakes outputs, while Claude handles the heavy lifting of drafting, sorting, classifying, and processing. Fully autonomous (option A) is risky for business-critical workflows. Limiting Claude to data entry (option C) wastes its ability to draft, analyze, and generate creative output.",
      },
      {
        type: "mc",
        question:
          "How should you assign different Claude model tiers within a single automation pipeline?",
        options: [
          "Use the same model for every step to keep the pipeline simple",
          "Use Haiku for fast classification and routing steps, Sonnet for standard generation, and Opus for complex reasoning steps",
          "Always use the cheapest model and only upgrade if output quality is unacceptable",
        ],
        correctIndex: 1,
        explanation:
          "Different steps in a pipeline have different complexity requirements. Haiku is fast and cheap for sorting and tagging, Sonnet handles most generation well, and Opus brings top-tier reasoning for the hardest steps. Using one model everywhere (option A) either wastes money or sacrifices quality. Starting with the cheapest and upgrading reactively (option C) leads to quality issues that are harder to diagnose after the fact.",
      },
      {
        type: "mc",
        question:
          "What is the main advantage of n8n over Make.com for Claude automations?",
        options: [
          "n8n is easier to learn and has more templates",
          "n8n is open-source, self-hostable, and gives you full control over data and infrastructure",
          "n8n has a built-in Claude integration that Make.com lacks",
        ],
        correctIndex: 1,
        explanation:
          "n8n's key advantage is that it is open-source and self-hostable, meaning you control your data, infrastructure, and costs at scale. Make.com is generally considered easier to learn (option A is backwards). Both platforms can integrate with Claude via HTTP modules (option C) — neither has a uniquely exclusive built-in integration.",
      },
    ],
  },
  "06": {
    title: "AI for Business Quiz",
    questions: [
      {
        type: "mc",
        question:
          "According to the AI audit framework, how should you prioritize AI opportunities in a business?",
        options: [
          "Start with the most technically impressive use case to build excitement",
          "Multiply monthly cost of the task by its AI feasibility score and sort descending to find the highest-ROI opportunities",
          "Focus on whatever the CEO is most interested in automating",
        ],
        correctIndex: 1,
        explanation:
          "The AI audit framework is data-driven: you score each task by its cost (time and money) and how feasible it is to automate with AI, then multiply to get an ROI priority score. Starting with impressive demos (option A) often targets hard problems with low business impact. Following CEO interest (option C) skips the analysis and may miss the real high-value opportunities buried in operations.",
      },
      {
        type: "mc",
        question:
          "In a Claude-powered tiered support system, what percentage of tickets should Claude handle directly without human intervention?",
        options: [
          "90-95% — humans should only handle legal and compliance issues",
          "60-70% — FAQ-type questions, order status, and basic troubleshooting",
          "10-20% — AI should only handle the very simplest requests",
        ],
        correctIndex: 1,
        explanation:
          "Claude can reliably handle 60-70% of support volume — the repetitive FAQ, status check, and basic troubleshooting tickets that follow clear patterns. 90-95% (option A) is too aggressive and risks Claude handling complex or sensitive situations it should not. 10-20% (option C) dramatically underutilizes AI and leaves the support team doing work Claude could handle easily.",
      },
      {
        type: "mc",
        question:
          "What are the three revenue levers where AI makes businesses money?",
        options: [
          "Cutting costs, increasing output speed, and improving quality or conversion rates",
          "Replacing all employees, eliminating office space, and removing management layers",
          "Building custom AI products, selling AI training courses, and offering AI consulting",
        ],
        correctIndex: 0,
        explanation:
          "AI drives revenue through three levers: reducing operational costs (doing the same work for less), increasing throughput (producing more output in the same time), and improving quality or conversion (better outputs lead to more revenue). Replacing employees entirely (option B) is not a revenue lever — it is a cost-cutting fantasy that ignores the human-AI collaboration model. Selling AI services (option C) describes business models, not the internal revenue levers the framework teaches.",
      },
      {
        type: "mc",
        question:
          "How should you calculate ROI when pitching an AI automation to a business client?",
        options: [
          "Estimate time saved per task, multiply by frequency and labor cost, then compare against the AI system cost",
          "Use industry benchmarks and promise a specific percentage improvement",
          "Focus on the technology and let the client figure out their own ROI",
        ],
        correctIndex: 0,
        explanation:
          "Concrete ROI comes from real numbers: how long the task takes now, how often it runs, what that labor costs, and what the AI system costs to operate. This gives the client a clear dollar figure. Industry benchmarks (option B) are too generic and come across as unsubstantiated claims. Letting the client figure it out (option C) means they probably will not, and you lose the sale.",
      },
      {
        type: "mc",
        question:
          "When running an AI audit for a client, what is the first step?",
        options: [
          "Build a proof-of-concept automation to demonstrate AI capabilities",
          "Map every repetitive, time-consuming, or error-prone process in the business and score each for AI feasibility",
          "Purchase AI tools and set up the infrastructure before analyzing needs",
        ],
        correctIndex: 1,
        explanation:
          "The audit starts with discovery: listing all processes, identifying which are repetitive or error-prone, and scoring each for AI feasibility and business impact. Building a proof-of-concept first (option A) skips the analysis and may target the wrong process. Purchasing tools before understanding needs (option C) is backwards — you need to know what you are solving before choosing how to solve it.",
      },
    ],
  },
  "07": {
    title: "Claude Agents Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What are the four core components of a Claude agent?",
        options: [
          "Input, output, processing, and storage",
          "The brain (Claude), tools, memory, and the agentic loop (think-act-observe)",
          "API key, endpoint, request body, and response handler",
        ],
        correctIndex: 1,
        explanation:
          "A Claude agent is built from four components: the brain (Claude model for reasoning), tools (functions it can call), memory (context it retains), and the agentic loop (the think-act-observe cycle that drives autonomous behavior). Input/output/processing/storage (option A) is a generic computing model. API key/endpoint/request body (option C) are API call components, not agent architecture components.",
      },
      {
        type: "mc",
        question:
          "In a multi-agent Claude system, how should you assign model tiers to different agent roles?",
        options: [
          "Use the same model for all agents to keep configuration simple",
          "Use Haiku for everything since multi-agent systems are already expensive",
          "Use Opus for the manager/orchestrator agent, Sonnet for worker agents, and Haiku for simple classification and routing agents",
        ],
        correctIndex: 2,
        explanation:
          "Different agent roles have different intelligence requirements. The manager agent needs strong reasoning (Opus), worker agents need solid generation ability (Sonnet), and routing agents just need fast classification (Haiku). One model for all (option A) either overspends or underperforms. All-Haiku (option B) saves money but the manager agent will make poor orchestration decisions on complex tasks.",
      },
      {
        type: "mc",
        question:
          "Why should you start with read-only tools when building Claude agents?",
        options: [
          "Read-only tools are faster and cheaper than write tools",
          "Read-only tools let the agent gather information without risk of unintended modifications, so you can validate behavior before granting write access",
          "Claude cannot use write tools without a special license",
        ],
        correctIndex: 1,
        explanation:
          "Starting read-only is a safety principle: the agent can search, retrieve, and analyze data without risk of corrupting databases, sending unintended emails, or modifying records. You validate its decision-making before giving it write power. Speed and cost (option A) are not the main concern — safety is. There is no special license required for write tools (option C); it is a design choice.",
      },
      {
        type: "mc",
        question:
          "What is the 'agentic loop' in a Claude agent system?",
        options: [
          "A retry mechanism that re-sends failed API calls",
          "The think-act-observe cycle where the agent reasons about the task, takes an action using a tool, observes the result, and repeats until done",
          "A logging system that records every step the agent takes",
        ],
        correctIndex: 1,
        explanation:
          "The agentic loop is the core behavior pattern: the agent thinks about what to do next, acts by calling a tool, observes the result, and then decides the next step — repeating until the task is complete. It is not a retry mechanism (option A), which handles API failures, not task reasoning. And it is not a logging system (option C), although you should log what happens in the loop.",
      },
      {
        type: "mc",
        question:
          "What is a key risk of giving a Claude agent write access to production systems without guardrails?",
        options: [
          "The agent might use too many tokens and increase costs",
          "The agent could take unintended destructive actions — like deleting records, sending incorrect emails, or modifying production data based on a misunderstood instruction",
          "The agent will refuse to use write tools entirely due to built-in safety filters",
        ],
        correctIndex: 1,
        explanation:
          "Without guardrails, a Claude agent with write access can misinterpret an instruction and take irreversible actions — deleting data, sending wrong messages, or corrupting records. Token costs (option A) are a concern but not a safety risk. Claude does not blanket-refuse write tools (option C); it will use them if provided, which is exactly why guardrails matter.",
      },
    ],
  },
  "08": {
    title: "Deploy & Operate Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the staging-to-production pattern for launching Claude systems?",
        options: [
          "Build directly in production and fix issues as they appear from real user feedback",
          "Build in staging, run with real data but no real actions, monitor Claude output quality for 3-5 days, then switch to production",
          "Test with dummy data for one day, then go live immediately to start generating value",
        ],
        correctIndex: 1,
        explanation:
          "The staging-to-production pattern lets you validate Claude's behavior on real data without real consequences. Running for 3-5 days catches edge cases that synthetic tests miss. Building in production (option A) means real users experience every mistake. One day of dummy data testing (option C) is too short and too artificial to catch the variety of real-world inputs.",
      },
      {
        type: "mc",
        question:
          "What should you log for every Claude automation run?",
        options: [
          "Just the final output and a pass/fail status",
          "Only errors and failures so you can debug when things break",
          "Input, model used, prompt sent, response received, tokens consumed, cost, actions taken, and errors",
        ],
        correctIndex: 2,
        explanation:
          "Comprehensive logging captures everything you need to debug, optimize, and audit your automation. Logging only the final output (option A) makes it impossible to understand why something went wrong. Logging only errors (option B) means you cannot investigate quality issues that did not trigger an explicit error — like a technically successful but low-quality response.",
      },
      {
        type: "mc",
        question:
          "What should a handoff document for a Claude-powered system include?",
        options: [
          "Just the source code and a README file",
          "System architecture, every prompt used, model tiers per step, expected costs, monitoring instructions, and escalation procedures",
          "A video demo and login credentials",
        ],
        correctIndex: 1,
        explanation:
          "A proper handoff doc covers everything someone needs to operate, maintain, and troubleshoot the system independently. Source code and a README (option A) miss the operational knowledge — prompts, costs, monitoring, and escalation paths. A video and credentials (option C) help with initial access but do not provide the reference documentation needed for ongoing operations.",
      },
      {
        type: "mc",
        question:
          "Why is 'building yourself out of every system' critical for scaling an AI automation business?",
        options: [
          "It lets you move on to higher-value projects instead of being stuck maintaining every system you build",
          "It reduces your liability because you are no longer responsible for the system",
          "It is not important — you should stay hands-on with every system to ensure quality",
        ],
        correctIndex: 0,
        explanation:
          "If you are the bottleneck for every system you build, you cannot scale. Proper handoff documentation and operational procedures let the client's team (or a junior operator) maintain the system while you take on new projects. It does not eliminate liability (option B) — you may still have contractual obligations. Staying hands-on with everything (option C) caps your income at your personal bandwidth.",
      },
      {
        type: "mc",
        question:
          "What is the most important thing to monitor in a production Claude automation?",
        options: [
          "The number of API calls per day to track usage volume",
          "Output quality and accuracy, because a system that runs without errors but produces bad outputs is worse than one that fails loudly",
          "Server uptime and response times only",
        ],
        correctIndex: 1,
        explanation:
          "Output quality is the most critical metric because Claude can return technically successful responses that are wrong, off-tone, or unhelpful. Silent quality degradation is harder to catch than outright errors. API call volume (option A) is useful for billing but does not tell you if the outputs are good. Server metrics (option C) matter for infrastructure but miss the AI-specific quality dimension entirely.",
      },
    ],
  },
};

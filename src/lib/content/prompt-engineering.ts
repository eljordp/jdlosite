import type { CourseContent, CourseQuizzes } from "./types";

export const promptEngineering: CourseContent = {
  "01-1": {
    title: "What happens when you send a prompt",
    duration: "5 min read",
    content: `Most people type into ChatGPT like they're Googling something. They get mediocre output and blame the AI. The problem isn't the model — it's that they have no idea what's actually happening under the hood.

## The pipeline

When you hit send on a prompt, here's what actually happens:

1. **Tokenization** — Your text gets broken into tokens (roughly 3/4 of a word each). "Build me a landing page" becomes about 6 tokens. The model doesn't see words — it sees numbers.
2. **Context assembly** — Your prompt gets combined with the system prompt (if any), conversation history, and any other context. All of it goes into one big input.
3. **Attention processing** — The model runs your input through billions of parameters, using attention mechanisms to figure out which parts of your input matter most for each word it generates.
4. **Token prediction** — The model outputs a probability distribution for the next token. It picks one, adds it to the sequence, and repeats until it's done.

## Why this changes everything

Once you understand this, you stop writing prompts like search queries and start writing them like **instructions to a very capable but literal assistant**.

**Bad prompt:** "marketing ideas"
**Good prompt:** "You're a growth marketer for a DTC skincare brand doing $500K/year. Give me 5 acquisition channel ideas ranked by cost-effectiveness, with estimated CAC for each."

The second prompt works better because you've given the model more tokens to attend to, more patterns to match against, and a clearer prediction path.

## The key mental model

Think of the AI as a prediction engine with incredible pattern recognition but zero initiative. It will only go where your prompt points it. Vague input = vague output. Specific input = specific output. Every single time.

The rest of this course is about getting surgical with that input.`,
    takeaways: [
      "AI models predict the next token — they don't think, reason, or understand on their own",
      "Your prompt gets tokenized, combined with context, and processed through attention layers",
      "Specific prompts dramatically outperform vague ones because they narrow the prediction space",
      "Treat the model as a literal, capable assistant — not a search engine",
    ],
    exercise:
      "Open any AI model. Send the prompt 'marketing ideas' and note the output. Then send: 'You're a growth marketer for a local gym doing $200K/year. Give me 5 acquisition ideas ranked by cost-effectiveness with estimated monthly budget for each.' Compare the two. The difference is what this entire course teaches you to control.",
  },
  "01-2": {
    title: "Why AI fails and how to fix it",
    duration: "6 min read",
    content: `AI doesn't fail randomly. It fails predictably, and once you learn the failure modes, you can prevent almost all of them. I've built AI systems for real businesses — these are the exact issues I see every time.

## Failure mode 1: Vague instructions

The #1 reason people get bad output. "Write me an email" gives the model infinite directions to go. It picks one — usually the most generic, average one.

**Fix:** Be specific about audience, tone, length, format, and goal. "Write a 3-paragraph cold email to a SaaS founder offering AI automation services. Tone: direct and confident. End with a single CTA to book a call."

## Failure mode 2: No context

The model doesn't know your business, your customers, or your situation unless you tell it. It fills in the gaps with generic patterns from training data.

**Fix:** Front-load your prompts with context. Paste in relevant background, examples of what you want, or constraints the model needs to know. The more context, the better the output.

## Failure mode 3: Hallucinations

AI confidently makes things up. It'll cite fake studies, invent statistics, create plausible-sounding but wrong technical explanations. This isn't a bug — it's how prediction works.

**Fix:** Ask the model to cite sources or flag uncertainty. Use phrases like "Only include information you're confident about" and "If you're unsure, say so." Always verify critical facts.

## Failure mode 4: Lost instructions

In long conversations, the model loses track of earlier instructions. Your carefully crafted system prompt gets buried under messages.

**Fix:** Repeat key instructions periodically. Use system prompts for persistent rules. Break long tasks into shorter conversations.

## Failure mode 5: Wrong format

You wanted bullet points but got paragraphs. You wanted JSON but got markdown.

**Fix:** Explicitly state the format. Show an example of exactly what you want the output to look like. Models follow demonstrated patterns better than described ones.

## The operator mindset

Bad output is never the AI's fault. It's a prompt problem. Every time you get garbage output, ask yourself: "What did I fail to specify?" That mindset is what separates operators from tourists.`,
    takeaways: [
      "AI failures are predictable — vague instructions, missing context, hallucinations, lost instructions, wrong format",
      "Always specify audience, tone, length, format, and goal in your prompts",
      "Front-load context so the model doesn't fill gaps with generic patterns",
      "Bad output is always a prompt problem — adopt the operator mindset",
    ],
    exercise:
      "Take a prompt you've used recently that gave mediocre results. Identify which failure mode caused it. Rewrite the prompt fixing that specific issue and run it again. Document the before/after difference.",
  },
  "01-3": {
    title: "Temperature, top-p, and generation settings",
    duration: "5 min read",
    content: `Most people never touch generation settings. That's like driving a car and never adjusting the mirrors. These settings give you direct control over how the model generates output.

## Temperature

Temperature controls randomness. It's a number between 0 and 2 (usually 0 to 1).

- **Temperature 0:** The model always picks the most likely next token. Output is deterministic, consistent, and predictable. Best for: code, data extraction, factual tasks, structured output.
- **Temperature 0.3-0.5:** Slight variation. Good balance of creativity and reliability. Best for: business writing, emails, analysis.
- **Temperature 0.7-1.0:** More creative and varied. Best for: brainstorming, creative writing, generating diverse options.
- **Temperature 1.0+:** Wild and unpredictable. Rarely useful in production.

**My defaults:** I run temperature 0 for anything touching code or data. Temperature 0.5 for client work and business content. Temperature 0.8+ only when brainstorming.

## Top-p (nucleus sampling)

Top-p controls which tokens the model considers. A top-p of 0.9 means the model only considers tokens that make up the top 90% of probability mass.

- **Top-p 0.1:** Very narrow — only the most likely tokens. Similar effect to low temperature.
- **Top-p 0.9:** Considers most reasonable options. Good default.
- **Top-p 1.0:** Considers everything. Maximum variety.

**Rule of thumb:** Adjust temperature OR top-p, not both. They do similar things. I usually leave top-p at 0.9 and only adjust temperature.

## Other settings that matter

- **Max tokens:** Caps response length. Set this to avoid runaway responses that burn through your API budget.
- **Stop sequences:** Tell the model when to stop generating. Useful for structured output — you can stop at a closing bracket, for example.
- **Frequency/presence penalty:** Reduces repetition. Useful for longer content generation where models tend to loop.

## When to use what

| Task | Temperature | Top-p |
|------|------------|-------|
| Code generation | 0 | 0.9 |
| Data extraction | 0 | 0.9 |
| Business emails | 0.3 | 0.9 |
| Blog posts | 0.5 | 0.9 |
| Brainstorming | 0.8 | 0.95 |
| Creative fiction | 1.0 | 1.0 |`,
    takeaways: [
      "Temperature controls randomness — 0 for precision, 0.7+ for creativity",
      "Top-p controls which tokens are considered — adjust one or the other, not both",
      "Use temperature 0 for code, data, and structured output",
      "Set max tokens to prevent runaway responses and control API costs",
    ],
    exercise:
      "Pick one prompt and run it at temperature 0, 0.5, and 1.0. Use the same prompt each time. Notice how the output changes — the structure, word choice, creativity, and reliability. This builds your intuition for when to use each setting.",
  },
  "01-4": {
    title: "Model differences: GPT vs Claude vs Gemini",
    duration: "6 min read",
    content: `Different models have different strengths. Using the wrong model for a task is like using a hammer to turn a screw — it technically works but the result is ugly. Here's what I've learned building with all of them.

## Claude (Anthropic)

**Best at:** Following complex, multi-step instructions. Long document processing. Coding. Nuanced writing that doesn't sound like AI. Staying in character with detailed system prompts.

**Context window:** 200K tokens — you can paste entire codebases, full contracts, or 300-page documents.

**Where it falls short:** Can be overly cautious. Sometimes refuses tasks that are perfectly fine. Slower to adopt new integrations.

**My take:** Claude is my daily driver. For anything that requires precision, long context, or serious coding — it's the best option. Period.

## GPT-5.3 (OpenAI)

**Best at:** General-purpose tasks. Largest plugin/integration ecosystem. Image generation. Good at creative writing with personality.

**Context window:** 128K tokens.

**Where it falls short:** Can be verbose and "corporate" in tone. API costs add up at scale.

**My take:** Best ecosystem, and the model most clients are familiar with. I use it when I need tool integrations or when the client's stack is already OpenAI.

## Gemini 2.5 (Google)

**Best at:** Multimodal tasks (text + images + video + audio). Integration with Google Workspace. Massive context window (up to 1M tokens). Research with built-in search.

**Where it falls short:** Instruction following isn't as tight as Claude. Can be inconsistent on complex tasks.

**My take:** Great for research and anything touching Google's ecosystem. The 1M context window is insane for processing massive documents.

## How I choose for client work

- **Building AI automations:** Claude API for the core logic, Haiku for simple routing tasks
- **Content generation pipelines:** Claude for quality drafts, Haiku for bulk variations
- **Research tools:** Gemini for Google-integrated search, Claude for analysis
- **Client-facing chatbots:** GPT-5.3 for the ecosystem, Claude for quality

## The real skill

Don't be loyal to one model. Be loyal to results. The best prompt engineers test their prompts across models and pick the one that performs best for each specific use case. Models update constantly — what's best today might not be best next month.`,
    takeaways: [
      "Claude excels at complex instructions, long context, and coding tasks",
      "GPT-5.3 has the largest ecosystem and is best for general-purpose work",
      "Gemini leads in multimodal tasks and Google ecosystem integration",
      "The best operators use multiple models strategically based on the task",
    ],
    exercise:
      "Take a prompt you use regularly and run it through Claude, GPT-5.3, and Gemini. Score each output on accuracy, tone, format, and speed. Build a simple comparison chart. Start developing your instinct for which model fits which job.",
  },
  "02-1": {
    title: "Role prompting and persona assignment",
    duration: "5 min read",
    content: `Role prompting is the single fastest way to improve your AI output. By telling the model who it is before you tell it what to do, you activate specific patterns in its training data that dramatically change the quality of the response.

## How it works

When you say "You are a senior sales copywriter with 15 years of experience in DTC brands," you're not just adding flavor text. You're filtering the model's entire response through patterns associated with that expertise. The model has been trained on text written by senior copywriters, and the role prompt surfaces those patterns.

## The formula

**Role + Context + Task + Constraints = Great output**

Here's a basic example vs. an optimized one:

**Basic:** "Write me a product description for running shoes."

**With role prompting:** "You are a senior DTC copywriter who specializes in athletic brands. You write punchy, benefit-driven copy that converts. Write a product description for lightweight running shoes targeting marathon trainers. Keep it under 100 words. Focus on performance benefits, not features."

The second version will be dramatically better. Every time.

## Advanced persona stacking

You can layer multiple traits into a single role:

"You are a technical writer who also has deep experience in sales. You explain complex SaaS features in simple terms that highlight business value, not technical specs. Your writing style is direct, uses short sentences, and always ties features back to ROI."

This gives the model a very specific intersection of expertise to pull from.

## Roles I use daily

- **"You are a senior full-stack developer"** — for code review, debugging, architecture decisions
- **"You are a direct-response copywriter"** — for sales pages, emails, ad copy
- **"You are a business strategist who thinks in systems"** — for operational planning
- **"You are a skeptical analyst"** — for finding flaws in ideas, plans, or proposals
- **"You are a client success manager"** — for writing client-facing communications

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
  },
  "02-2": {
    title: "Few-shot examples and in-context learning",
    duration: "6 min read",
    content: `Few-shot prompting is when you show the model examples of what you want before asking it to perform the task. It's the difference between telling someone how to do something and showing them. Models learn from examples in the prompt far better than from instructions alone.

## Zero-shot vs. few-shot

**Zero-shot:** No examples. Just instructions.
"Classify this customer email as positive, negative, or neutral."

**One-shot:** One example.
"Classify customer emails as positive, negative, or neutral.

Example:
Email: 'Your product changed my workflow completely. Love it!'
Classification: positive

Now classify: 'I've been waiting 3 weeks for a response from support.'"

**Few-shot:** Multiple examples (usually 3-5).

The more examples you provide, the more reliable and consistent the output. Three examples is usually the sweet spot between quality and token efficiency.

## Why few-shot is so powerful

When you give examples, you're doing several things at once:

1. **Defining the format** — the model sees exactly how to structure its response
2. **Setting the tone** — your examples demonstrate the writing style you want
3. **Establishing boundaries** — the model sees what's in scope and what's not
4. **Reducing ambiguity** — examples eliminate misinterpretation of instructions

## Practical few-shot template

\`\`\`
[Role and context]

Here are examples of how to handle this task:

Input: [example input 1]
Output: [example output 1]

Input: [example input 2]
Output: [example output 2]

Input: [example input 3]
Output: [example output 3]

Now handle this:
Input: [actual input]
Output:
\`\`\`

## Real example: Lead qualification

"You qualify inbound leads for a B2B SaaS company. Rate each lead as HOT, WARM, or COLD with a one-sentence reason.

Lead: CEO of a 50-person company, filled out demo request form, budget approved
Rating: HOT — Decision maker with budget and intent.

Lead: Marketing intern, downloaded a whitepaper, no company email
Rating: COLD — No decision-making authority, low intent signal.

Lead: VP of Ops, attended webinar, asked pricing question in Q&A
Rating: WARM — Senior role with interest, but no direct demo request yet.

Now rate this lead:
Lead: CTO of a 200-person company, replied to cold email asking for a case study"

## Choosing your examples

Pick examples that cover the range of possible inputs. Include an easy case, a hard case, and an edge case. This teaches the model how to handle ambiguity, not just the obvious stuff.`,
    takeaways: [
      "Few-shot examples teach the model format, tone, boundaries, and edge cases simultaneously",
      "3 examples is the sweet spot — enough for consistency without burning tokens",
      "Cover easy, hard, and edge cases in your examples to handle ambiguity",
      "Few-shot beats zero-shot for any task where consistency matters",
    ],
    exercise:
      "Pick a task you repeat frequently (email classification, content categorization, lead scoring, etc). Write 3 few-shot examples that cover the range of scenarios. Test the prompt with and without examples and compare consistency across 5 different inputs.",
  },
  "02-3": {
    title: "Chain-of-thought and step-by-step reasoning",
    duration: "5 min read",
    content: `Chain-of-thought (CoT) prompting forces the model to show its work. Instead of jumping straight to an answer, the model walks through its reasoning step by step. This dramatically improves accuracy on complex tasks — math, logic, analysis, planning, anything that requires thinking through multiple factors.

## Why it works

When you ask a model to answer directly, it makes a single prediction. When you ask it to think step by step, it generates intermediate reasoning tokens that inform the next prediction. Each step builds context for the next one. It's literally giving itself more information to work with.

## Basic chain-of-thought

Just add "Think step by step" or "Walk through your reasoning" to any prompt. Seriously — those five words can improve accuracy by 20-40% on reasoning tasks.

**Without CoT:** "A store has 3 shirts at $25 each and offers a 20% discount on orders over $50. What's the total?"
Model might just say: "$60" (wrong)

**With CoT:** "A store has 3 shirts at $25 each and offers a 20% discount on orders over $50. What's the total? Think step by step."
Model: "3 shirts x $25 = $75. $75 > $50, so 20% discount applies. 20% of $75 = $15. $75 - $15 = $60." (correct with visible reasoning)

## Structured chain-of-thought

For complex business tasks, give the model a reasoning framework:

"Analyze this business opportunity. Work through it in this order:
1. Market size and demand signals
2. Competition and differentiation
3. Revenue model and unit economics
4. Required resources and timeline
5. Risk factors
6. Final recommendation with confidence level"

This forces the model through a complete analysis instead of cherry-picking whatever patterns come up first.

## When to use CoT

- **Math and calculations** — always. Models are terrible at math without step-by-step.
- **Business analysis** — complex decisions with multiple factors
- **Debugging code** — "Walk through this code line by line and explain what each part does"
- **Comparison tasks** — "Compare these options by evaluating each against these criteria"
- **Planning** — "Break this project into phases and think through dependencies"

## When NOT to use CoT

- Simple factual questions ("What's the capital of France?")
- Creative writing where you want flow, not analysis
- Quick formatting tasks
- Any task where the reasoning steps are obvious and just waste tokens

## Pro tip: Hidden reasoning

If you want the benefits of CoT without the verbose output, use this: "Think through this carefully in your head, then give me only the final answer." Some models handle this well, but showing the work is usually better for verification.`,
    takeaways: [
      "Chain-of-thought improves accuracy 20-40% on reasoning tasks by generating intermediate context",
      "Adding 'think step by step' to any complex prompt instantly improves output quality",
      "Use structured reasoning frameworks for business analysis and planning tasks",
      "Skip CoT for simple factual questions and creative writing — it adds tokens without value",
    ],
    exercise:
      "Find a complex analysis task (pricing decision, business strategy, technical architecture choice). Run it twice: once with just the question, once with 'Think step by step and evaluate each factor before giving your recommendation.' Compare the depth and accuracy of both responses.",
  },
  "02-4": {
    title: "Output formatting: JSON, markdown, structured data",
    duration: "5 min read",
    content: `If you're building anything with AI — automations, tools, pipelines — you need structured output. Getting clean JSON from a model instead of prose paragraphs is the difference between output you can use programmatically and output you have to manually parse.

## Getting clean JSON

The key is showing exactly what you want. Don't describe the JSON — demonstrate it.

**Bad:** "Return the data as JSON with fields for name, email, and score."

**Good:** "Return your response as JSON matching this exact structure:
\`\`\`json
{
  "name": "string",
  "email": "string",
  "score": number,
  "reasoning": "string"
}
\`\`\`
Return ONLY the JSON object. No markdown code fences. No explanation before or after."

That last line is critical. Without it, most models wrap the JSON in explanation text that breaks your parser.

## Markdown formatting

For content that humans will read, markdown gives you control over structure:

"Format your response using these rules:
- Use ## for section headers
- Use **bold** for key terms
- Use numbered lists for sequential steps
- Use bullet points for non-sequential items
- Keep paragraphs under 3 sentences"

## Tables

Models are great at generating tables when you ask explicitly:

"Present this comparison as a markdown table with columns: Feature, Plan A, Plan B, Recommendation"

## Structured data patterns I use daily

**Lead extraction from emails:**
"Extract the following from this email and return as JSON: sender_name, company, role, intent (inquiry/complaint/request), urgency (low/medium/high), action_required (string)"

**Content analysis:**
"Analyze this article and return: title, summary (2 sentences), key_points (array of strings), sentiment (positive/negative/neutral), relevance_score (1-10)"

**Meeting notes processing:**
"Extract from these meeting notes: action_items (array of {task, owner, deadline}), decisions_made (array), open_questions (array)"

## Forcing format compliance

When a model keeps breaking format:

1. **Show an example** of the exact output you want
2. **Add a constraint:** "Your entire response must be valid JSON. Nothing else."
3. **Use temperature 0** — reduces creative deviations from format
4. **Use the API's JSON mode** if available (OpenAI and Anthropic both support this)
5. **Validate and retry** — in production, parse the output and re-prompt if it's malformed`,
    takeaways: [
      "Show the exact structure you want — don't describe it, demonstrate it",
      "Always add 'Return ONLY the JSON' to prevent models from wrapping output in explanation",
      "Use temperature 0 and JSON mode for reliable structured output in production",
      "Build reusable extraction templates for common tasks like lead parsing and meeting notes",
    ],
    exercise:
      "Build 3 structured output prompts: one that extracts data from text into JSON, one that formats analysis as a markdown table, and one that generates a specific data structure for a task you do regularly. Test each and refine until the output is consistently parseable.",
  },
  "03-1": {
    title: "System prompts that shape behavior long-term",
    duration: "6 min read",
    content: `System prompts are the single most important piece of prompt engineering for anything you build in production. They run before every message, they set the rules, and they define who the AI is for the entire conversation. Get this right and every interaction is better. Get it wrong and you're fighting the model constantly.

## What system prompts do

A system prompt is a special instruction that sits above the conversation. The model treats it as persistent context — it applies to every response. In the API, it's the \`system\` role. In ChatGPT, it's the "Custom Instructions." In Claude, it's the system parameter.

This is where you put:
- **Identity:** Who the AI is and how it behaves
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

CONTEXT: [Background the model needs]

FORMAT: [Default output structure]

TONE: [Communication style description]
\`\`\`

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

## System prompt mistakes

1. **Too long:** If your system prompt is 2,000 words, the model will lose track of rules. Keep it under 500 words.
2. **Contradictory rules:** "Be concise" and "Provide thorough explanations" — pick one and specify when each applies.
3. **No examples:** Rules without examples are ambiguous. Show what you mean.
4. **Forgetting edge cases:** What should the model do when it doesn't know the answer? When the user is angry? When asked something off-topic?`,
    takeaways: [
      "System prompts define identity, rules, context, format, and tone for every response",
      "Use the framework: Identity + Rules + Context + Format + Tone",
      "Keep system prompts under 500 words — too long and the model loses track of rules",
      "Always define edge cases: what to do when uncertain, off-topic, or facing angry users",
    ],
    exercise:
      "Write a system prompt for a business use case you're working on (client chatbot, internal tool, content generator). Use the framework above. Test it with 10 different types of user messages including edge cases. Refine until it handles all of them correctly.",
  },
  "03-2": {
    title: "Prompt chaining and multi-step workflows",
    duration: "6 min read",
    content: `Single prompts have limits. When a task is too complex for one prompt — and most real tasks are — you chain prompts together. Each prompt handles one step, and the output of one becomes the input for the next. This is how you build AI workflows that actually work in production.

## Why chaining beats mega-prompts

A 500-word mega-prompt that tries to do everything at once will fail. The model loses focus, mixes up instructions, and produces inconsistent output. Chaining lets you:

1. **Keep each prompt focused** — one task, one prompt
2. **Validate between steps** — check output quality before proceeding
3. **Use different settings per step** — temperature 0 for extraction, 0.7 for writing
4. **Debug easily** — when something breaks, you know exactly which step failed
5. **Swap models per step** — cheap model for simple steps, premium for complex ones

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

## Implementation patterns

**Sequential chain:** A -> B -> C -> D. Each step needs the previous output. Simple, reliable, easy to debug.

**Parallel chain:** Run A and B simultaneously, combine outputs into C. Faster, but more complex to manage.

**Conditional chain:** If A's output meets criteria X, go to B. Otherwise, go to C. Useful for routing different types of input.

## Pro tips

- **Save intermediate outputs.** If step 3 fails, you don't want to re-run steps 1 and 2.
- **Add error handling.** What if the model returns malformed JSON? Build a retry with clearer instructions.
- **Log everything.** In production, you need to see every step's input and output for debugging.
- **Start simple.** Build a 2-step chain first, get it working perfectly, then add steps.`,
    takeaways: [
      "Chain prompts when tasks are too complex for a single prompt — most real tasks are",
      "Each step should have one job: extract, analyze, generate, or validate",
      "Save intermediate outputs and add error handling for production reliability",
      "Use different models and temperature settings for different steps in the chain",
    ],
    exercise:
      "Pick a multi-step task you do manually (proposal writing, content creation, research analysis). Break it into 3-4 discrete steps. Write a prompt for each step where the output feeds into the next. Test the full chain end-to-end and iterate on the weakest link.",
  },
  "03-3": {
    title: "Self-critique and iterative refinement loops",
    duration: "5 min read",
    content: `One of the most powerful patterns in prompt engineering: make the AI critique its own work and then improve it. First-draft output from any model is almost never the best it can do. But most people accept the first response and move on. That's leaving quality on the table.

## The basic pattern

1. **Generate** — Ask the model to produce output
2. **Critique** — Ask the model to evaluate that output against specific criteria
3. **Refine** — Ask the model to improve based on the critique
4. Repeat steps 2-3 as needed

## Simple self-critique prompt

"Here's your previous response: [paste response]

Now critique it against these criteria:
- Is it specific enough with actionable details?
- Does the tone match [desired tone]?
- Are there any claims that need evidence?
- Is anything redundant or filler?
- What's the weakest part?

List each issue, then rewrite the response fixing all identified problems."

## Why this works so well

When a model generates text, it's optimizing for "most likely next token." When it critiques text, it's doing a fundamentally different task — evaluation. It can spot issues in existing text that it wouldn't have avoided during generation. This is similar to how humans are better editors than writers on the first pass.

## Advanced: Multi-criteria evaluation

For client deliverables, I use a structured evaluation:

"Rate this [content type] on a 1-10 scale for each criterion:
- Clarity: Is it easy to understand?
- Accuracy: Are all claims correct?
- Persuasiveness: Does it compel action?
- Brevity: Is every word earning its place?
- Tone: Does it match the target audience?

For any score below 8, explain what's wrong and how to fix it. Then rewrite the full piece incorporating all fixes."

## The iterative loop in production

In automated systems, you can build this into your pipeline:

1. Generate content
2. Run a critique prompt (can be a cheaper model)
3. If critique finds issues, feed original + critique back for revision
4. Repeat until critique passes all criteria or you hit a max iteration limit (usually 3)

## When to use this

- **Client-facing content** — proposals, emails, presentations. Always worth a refinement pass.
- **Code generation** — have the model review its own code for bugs, edge cases, and optimization.
- **Data analysis** — critique the analysis for missed factors, biased interpretations, or unsupported conclusions.
- **Sales copy** — first draft is never punchy enough. The critique pass tightens it.`,
    takeaways: [
      "First-draft AI output is almost never the best the model can produce",
      "Generate -> Critique -> Refine is a repeatable pattern that dramatically improves quality",
      "Use structured evaluation criteria with numerical scores for consistent refinement",
      "In production, automate the loop with a max of 3 iterations to balance quality and cost",
    ],
    exercise:
      "Take any piece of AI-generated content you've produced recently. Run it through a critique prompt with 5 specific criteria relevant to that content type. Then ask the model to rewrite it fixing every issue. Compare the original to the refined version. You'll never skip this step again.",
  },
  "03-4": {
    title: "Retrieval-augmented prompting (RAG basics)",
    duration: "6 min read",
    content: `RAG is how you make AI actually useful for your specific business. Instead of relying on the model's training data (which is generic and outdated), you feed it your own data at query time. This is the foundation of every custom AI assistant, internal knowledge base, and smart search tool.

## The concept

**Without RAG:** User asks a question -> Model answers from training data -> Generic, possibly outdated answer

**With RAG:** User asks a question -> System searches your data for relevant info -> Relevant chunks get injected into the prompt -> Model answers using your specific data -> Accurate, contextual answer

## How it works (simplified)

1. **Index your data:** Take your documents, FAQs, knowledge base, whatever — and split them into chunks (usually 200-500 words each). Convert each chunk into an embedding (a numerical representation).
2. **Store embeddings:** Put them in a vector database (Pinecone, Weaviate, Supabase pgvector, or even a simple local store).
3. **Query:** When a user asks a question, convert their question to an embedding, find the most similar chunks in your database.
4. **Inject:** Take the top 3-5 most relevant chunks and paste them into the prompt as context.
5. **Generate:** The model answers using that context.

## The prompt pattern

\`\`\`
You are a helpful assistant for [company]. Answer the user's question using ONLY the context provided below. If the context doesn't contain the answer, say "I don't have that information" — do not make anything up.

CONTEXT:
[chunk 1]
[chunk 2]
[chunk 3]

USER QUESTION: [question]

ANSWER:
\`\`\`

## Why "ONLY the context" matters

Without that constraint, the model blends your data with its training data. It might hallucinate details that sound like they came from your docs but didn't. The constraint keeps it grounded.

## Practical RAG without infrastructure

You don't need a vector database to start using RAG patterns. For small datasets:

- **Manual RAG:** Copy-paste relevant docs into the prompt yourself. This is what most people should start with.
- **File upload:** Claude and GPT both let you upload files. The model searches them per question. This is RAG with zero code.
- **Simple script:** Write a basic search function that finds relevant text files and injects them into the prompt.

## Chunking matters

Bad chunks = bad retrieval = bad answers. Rules:

- **Keep chunks self-contained.** Each chunk should make sense on its own.
- **Include headers/titles** in each chunk so the model knows what it's reading.
- **Overlap chunks slightly** (50-100 words) so you don't lose context at boundaries.
- **Don't chunk too small.** Below 100 words, chunks lose context. Below 50, they're useless.

## Where I use RAG

- **Client knowledge bases** — internal docs, SOPs, product info
- **Sales assistants** — pricing, case studies, objection handling playbooks
- **Support bots** — FAQ databases, troubleshooting guides
- **Personal assistants** — my own notes, meeting transcripts, project docs`,
    takeaways: [
      "RAG lets AI answer from your specific data instead of generic training knowledge",
      "The core pattern: search your data, inject relevant chunks into the prompt, generate",
      "Always constrain the model to answer ONLY from provided context to prevent hallucination",
      "Start with manual RAG (copy-paste) or file uploads before building infrastructure",
    ],
    exercise:
      "Take a set of business documents (FAQ, SOPs, product info — even just 3-5 pages). Manually split them into chunks. When you have a question, find the relevant chunks yourself and paste them into a prompt with the RAG template above. Test 5 questions and verify the model answers accurately from your data.",
  },
  "04-1": {
    title: "Prompting for code: debugging, building, reviewing",
    duration: "6 min read",
    content: `AI is the best coding partner most people will ever have. But most developers prompt it wrong — they dump error messages or vague requests and wonder why the output doesn't work. Here's how I actually use AI for code every single day.

## Prompting for debugging

When you have a bug, the model needs three things: **the code, the error, and the expected behavior.**

**Bad:** "My code isn't working. Here's the error: TypeError undefined."

**Good:** "I have a Next.js API route that fetches user data from Supabase. When I call it, I get: TypeError: Cannot read properties of undefined (reading 'email').

Here's the full route code:
[paste code]

Here's my Supabase query:
[paste query]

Expected behavior: Return user object with email field.
Actual behavior: Crashes with TypeError on line 15.

Walk through the code line by line and identify why the email field is undefined."

The "walk through line by line" instruction triggers chain-of-thought reasoning, which catches bugs the model would miss with a quick answer.

## Prompting for building

When you want AI to write code, be specific about:

1. **Language and framework** — "TypeScript, Next.js 14 App Router"
2. **What it does** — "An API route that accepts a POST request with a JSON body"
3. **Input/output** — "Input: { email: string, name: string }. Output: { success: boolean, userId: string }"
4. **Constraints** — "Use Supabase for the database. Handle errors with try-catch. Return proper HTTP status codes."
5. **Style** — "Use async/await, not promises. Add TypeScript types for all inputs and outputs."

**Template I use:**
"Build a [language/framework] [component/function/route] that [does what].

Input: [shape]
Output: [shape]

Technical requirements:
- [requirement 1]
- [requirement 2]

Error handling: [approach]

Style: [conventions]"

## Prompting for code review

This is underrated. Before shipping code, I run it through a review prompt:

"Review this code for:
1. Bugs or logic errors
2. Security vulnerabilities (SQL injection, XSS, auth bypass)
3. Performance issues (N+1 queries, unnecessary re-renders, memory leaks)
4. Edge cases that aren't handled
5. Code that could be simplified

For each issue found, explain the problem, show the problematic code, and provide a fix."

## Prompting for refactoring

"Refactor this code to be more maintainable. Priorities:
1. Extract repeated logic into reusable functions
2. Add proper TypeScript types
3. Improve variable names for clarity
4. Add error handling where missing
5. Keep the same functionality — don't change behavior

Show me the refactored code and explain each change."

## The meta-skill

Always paste the full relevant code, not just snippets. Models lose context without the surrounding code. If it's too long, give the model the file structure first, then focus on the specific file. More context = better code output.`,
    takeaways: [
      "For debugging: always provide the code, the error, and the expected behavior",
      "For building: specify language, framework, I/O shapes, constraints, and coding style",
      "Use AI code review before shipping — it catches bugs, security issues, and edge cases",
      "Always paste full relevant code, not just snippets — context drives quality",
    ],
    exercise:
      "Take a piece of code you've written recently. Run it through the code review prompt above with all 5 criteria. Fix every issue the model identifies. Then ask it to refactor the fixed code for maintainability. Compare the original to the final version.",
  },
  "04-2": {
    title: "Prompting for content: writing, editing, repurposing",
    duration: "6 min read",
    content: `Content is where AI saves the most time for most businesses. But there's a massive gap between "AI-generated slop" and content that actually sounds like a human wrote it. The difference is entirely in how you prompt.

## Writing original content

Never prompt with just "Write a blog post about X." You'll get 800 words of generic nothing. Instead, give the model everything it needs:

"Write a blog post for [audience] about [topic].

Key message: [the one thing readers should take away]
Tone: [specific description — not just 'professional']
Length: [word count]
Structure: [intro hook -> problem -> solution -> examples -> CTA]
What to avoid: [filler phrases, generic advice, cliches]
What to include: [specific examples, data points, personal angle]"

**Tone examples that actually work:**
- "Like a smart friend explaining over coffee — casual but knowledgeable"
- "Direct and confident, short sentences, no hedging"
- "Technical but accessible — a senior developer writing for junior developers"

## Editing and refining

AI is an incredible editor. Give it a piece of content and specific editing criteria:

"Edit this content with these goals:
1. Cut the word count by 30% without losing meaning
2. Replace vague statements with specific examples
3. Break up any paragraph longer than 3 sentences
4. Make the opening sentence more compelling
5. Ensure every paragraph adds new information — cut repetition

Tone target: [description]
Audience: [who's reading this]"

## Repurposing content

This is where AI becomes a multiplier. One piece of content becomes five:

"I have this blog post: [paste full post]

Repurpose it into:
1. A Twitter/X thread (8-10 tweets, hook first tweet, end with CTA)
2. A LinkedIn post (conversational tone, line breaks between sentences, hot take opening)
3. An email newsletter snippet (150 words, one key insight, link to full post)
4. 3 Instagram carousel slides (headline + 2-3 bullet points per slide)
5. A 60-second video script (spoken word, casual tone, strong hook)"

Each format has different rules. The key is specifying those rules per platform so the model adapts appropriately.

## Matching your voice

The fastest way to get AI to write like you:

1. **Give it 3-5 examples** of your past writing
2. **Add explicit style rules:** "Use short sentences. Start some sentences with 'And' or 'But.' Never use phrases like 'in today's world' or 'it's important to note.'"
3. **Tell it what NOT to write:** "Don't use emojis. Don't use exclamation marks. Don't start paragraphs with 'So' or 'Now.'"

## The editing workflow I use

1. **Brain dump** — I write rough notes or bullet points of what I want to say
2. **Draft** — AI turns my notes into a structured first draft
3. **Critique** — I run the self-critique pattern from Module 03
4. **Edit** — AI tightens, cuts, and polishes based on critique
5. **Human pass** — I read it once, make it mine, and ship`,
    takeaways: [
      "Always specify audience, tone, structure, and constraints when generating content",
      "AI editing is powerful — give specific criteria like 'cut 30%' and 'replace vague with specific'",
      "One piece of content can become 5+ formats — specify platform-specific rules for each",
      "Feed the model examples of your writing and explicit style rules to match your voice",
    ],
    exercise:
      "Take a piece of content you've published (blog post, email, social post). Run it through the repurposing prompt to create 3 new formats. Then take one of those outputs and run it through an editing pass with specific criteria. This workflow should become automatic for everything you publish.",
  },
  "04-3": {
    title: "Prompting for research and analysis",
    duration: "5 min read",
    content: `AI can compress hours of research into minutes — if you prompt it correctly. The key is giving it a research framework, not just a topic. "Research X" gets you a Wikipedia summary. A structured research prompt gets you actionable intelligence.

## The research prompt framework

"Research [topic] for [purpose/decision I'm making].

Structure your research as:
1. **Current state** — What's happening right now?
2. **Key players** — Who are the major companies/people?
3. **Trends** — What's changing and in what direction?
4. **Opportunities** — Where are the gaps?
5. **Risks** — What could go wrong?
6. **My action items** — What should I do with this information?

Constraints:
- Focus on [specific angle]
- Time horizon: [next 6 months / 1 year / 5 years]
- Flag any claims you're uncertain about"

## Competitive analysis

"Analyze [competitor] for me. I run [your business description].

Research:
- Their pricing model and tiers
- Their target customer profile
- Their strengths (be specific — what do customers praise?)
- Their weaknesses (what do customers complain about in reviews?)
- Their marketing channels and messaging
- How they position against competitors

Then tell me: Where can I win against them? What do they do that I should copy? Where should I avoid competing directly?"

## Data analysis prompts

When you have data to analyze, paste it and give clear direction:

"Here's my sales data for the last 6 months: [paste data]

Analyze this data and tell me:
1. Which products/services drive the most revenue?
2. What's the trend month-over-month?
3. Are there seasonal patterns?
4. Which customer segments are most profitable?
5. What's the biggest risk in this data?
6. What would you change about the sales strategy based on this?"

## Market research for new offerings

"I'm considering launching [product/service] for [target audience] at [price point].

Research and analyze:
1. Is there existing demand? What are people searching for / asking about?
2. Who else offers something similar? How are they priced?
3. What's the realistic TAM (total addressable market)?
4. What are the top 3 objections prospects would have?
5. What's the fastest path to first 10 customers?
6. What's your honest assessment — should I do this?"

## Important caveats

- **AI research is a starting point, not the ending point.** It's pulling from training data that may be outdated. Always verify critical facts, especially numbers, dates, and market data.
- **Ask the model to flag uncertainty.** "If you're not sure about a data point, say so" prevents false confidence.
- **Use web-connected models for current data.** Standard Claude and GPT don't browse the web. Use Perplexity, Gemini with search, or GPT with browsing for current information.
- **Cross-reference.** Run the same research prompt through 2 different models and compare. Where they disagree, dig deeper.`,
    takeaways: [
      "Give AI a research framework, not just a topic — structure drives useful output",
      "Always ask the model to flag uncertainty to prevent false confidence in research",
      "Use competitive analysis prompts to find gaps where your business can win",
      "AI research is a starting point — verify critical facts with current sources",
    ],
    exercise:
      "Pick a market or competitor you need to research for your business. Use the competitive analysis prompt template above with real specifics. Run it through 2 different models and compare results. Note where they agree (likely accurate) and disagree (needs verification).",
  },
  "04-4": {
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

## What your library becomes

Over time, your prompt library becomes:
- **A training resource** for team members — they use your proven prompts instead of starting from scratch
- **An operational asset** for your business — standardized AI operations across the team
- **A competitive moat** — your prompts are tuned to your specific business, clients, and workflows
- **A product** — well-organized prompt libraries can be sold as part of consulting packages

This is what separates someone who "uses AI" from someone who **operates** with AI. You're building systems, not typing into chatbots.`,
    takeaways: [
      "Every great prompt is a reusable asset — save, organize, and version them",
      "Organize by function (sales, content, code) not by model",
      "Use variables like {{audience}} and {{tone}} to make prompts instantly reusable",
      "Your prompt library becomes a training resource, operational asset, and competitive moat",
    ],
    exercise:
      "Create your prompt library right now. Make folders organized by function. Go through this course and save every prompt template you built during exercises. Add the metadata (purpose, model, temperature, notes) to each one. Commit to adding every good prompt you write from now on. This library will compound over time into one of your most valuable assets.",
  },
};

export const promptEngineeringQuizzes: CourseQuizzes = {
  "01": {
    title: "How Models Think Quiz",
    questions: [
      {
        type: "mc",
        question:
          "You send a prompt to Claude and get a vague, generic response. Based on how language models process input, what is the most likely cause?",
        options: [
          "Claude's training data didn't cover that topic",
          "Your prompt was too specific and overwhelmed the model",
          "Your prompt lacked specificity, giving the model too wide a prediction space to narrow down",
          "The API was rate-limited and returned a degraded response",
        ],
        correctIndex: 2,
      },
      {
        type: "mc",
        question:
          "You're building an automation that extracts invoice data into JSON using the GPT-5.3 API. Which temperature setting gives you the most reliable, consistent output?",
        options: [
          "Temperature 0 — deterministic and predictable, best for structured data extraction",
          "Temperature 0.7 — balanced creativity helps interpret varied invoice formats",
          "Temperature 1.0 — maximum flexibility to handle unexpected edge cases",
          "Temperature doesn't matter as long as you provide good few-shot examples",
        ],
        correctIndex: 0,
      },
      {
        type: "short",
        question:
          "Explain the key differences between GPT-5.3, Claude, and Gemini 2.5. When would you choose each model for a real business task, and what strengths make each one the better pick for that task?",
        minLength: 50,
      },
    ],
  },
  "02": {
    title: "Core Techniques Quiz",
    questions: [
      {
        type: "mc",
        question:
          'You need Claude to write sales copy for a DTC skincare brand. Which prompt follows the Role + Context + Task + Constraints formula correctly?',
        options: [
          '"Write good sales copy for skincare products that converts well"',
          '"You are a marketing expert. Write copy."',
          '"You are a senior DTC copywriter specializing in skincare. Write a 100-word product description for an anti-aging serum targeting women 35-50. Tone: confident, benefit-driven. Focus on results, not ingredients."',
          '"Act like you know about skincare and write something persuasive about our new product"',
        ],
        correctIndex: 2,
      },
      {
        type: "mc",
        question:
          "You want GPT-5.3 to classify customer support tickets into categories. Zero-shot prompting gives inconsistent results. What technique would most improve accuracy?",
        options: [
          "Increase the temperature to give the model more creative flexibility",
          "Add few-shot examples showing 3-5 correctly classified tickets before asking it to classify new ones",
          "Make the prompt shorter so the model focuses on the core task",
          "Switch to Gemini 2.5 since GPT-5.3 cannot handle classification well",
        ],
        correctIndex: 1,
      },
      {
        type: "short",
        question:
          "Describe how chain-of-thought prompting works and give a specific example of a business task where forcing Claude or GPT-5.3 to reason step-by-step would produce better output than a direct answer.",
        minLength: 50,
      },
    ],
  },
  "03": {
    title: "Advanced Patterns Quiz",
    questions: [
      {
        type: "mc",
        question:
          "You're building a customer-facing chatbot on the Claude API for a SaaS product. Which system prompt component is MOST critical to prevent the assistant from making false promises about features?",
        options: [
          "TONE — setting a professional, friendly communication style",
          "IDENTITY — defining the assistant's name and personality",
          "RULES — explicit instructions like 'Never promise features that don't exist' and 'Direct pricing questions to the sales team'",
          "FORMAT — specifying bullet points vs. paragraphs for responses",
        ],
        correctIndex: 2,
      },
      {
        type: "mc",
        question:
          "In the RAG (Retrieval-Augmented Generation) pattern, why is the instruction 'answer ONLY from the context provided' critical when using GPT-5.3, Claude, or Gemini 2.5?",
        options: [
          "It makes the model respond faster by limiting its search space",
          "It prevents the model from blending retrieved data with generic training data, which causes hallucinated details",
          "It reduces API costs by limiting the number of output tokens generated",
          "It ensures the model always provides a response instead of saying it doesn't know",
        ],
        correctIndex: 1,
      },
      {
        type: "short",
        question:
          "Explain the self-critique and iterative refinement pattern (Generate -> Critique -> Refine). Why is Claude or GPT-5.3 better at evaluating text than generating perfect text on the first pass, and what is one risk of overusing this loop?",
        minLength: 50,
      },
    ],
  },
  "04": {
    title: "Applied Prompting Quiz",
    questions: [
      {
        type: "mc",
        question:
          "You're debugging a Next.js API route that returns a TypeError. Which prompting approach will get you the best debugging help from Claude or GPT-5.3?",
        options: [
          "Paste the error message and ask 'why is this broken?'",
          "Provide the code, the error, and the expected vs. actual behavior, then ask the model to walk through the code line by line",
          "Ask the model to rewrite the entire route from scratch without seeing the original",
          "Send just the stack trace and let the model figure out the context",
        ],
        correctIndex: 1,
      },
      {
        type: "mc",
        question:
          "You want to repurpose a 3,000-word blog post into LinkedIn posts, tweets, and an email newsletter using Gemini 2.5. What is the most effective prompting strategy?",
        options: [
          "Paste the entire blog post and ask the model to create all content formats in one prompt",
          "Ask the model to summarize the post first, then manually write the platform-specific content",
          "Use prompt chaining: first extract key insights, then generate each content format separately with platform-specific constraints and your voice guidelines",
          "Use a single zero-shot prompt for each platform with no reference to the original post",
        ],
        correctIndex: 2,
      },
      {
        type: "short",
        question:
          "Describe how you would organize a prompt library for a business that uses Claude, GPT-5.3, and Gemini 2.5 daily. What categories would you create, what metadata would you store with each prompt, and why does this library become a competitive moat over time?",
        minLength: 50,
      },
    ],
  },
};

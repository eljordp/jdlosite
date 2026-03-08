import type { CourseContent, CourseQuizzes } from "./types";

export const salesSystems: CourseContent = {
  "01-1": {
    title: "The mindset that separates closers from order-takers",
    duration: "5 min read",
    content: `Most people in sales are order-takers. They wait for someone to say "I want this," then they process it. That's not sales. That's cashiering.

## The closer mindset

Closers operate from a fundamentally different frame. They don't ask "how can I sell this?" They ask **"how can I solve this person's problem so clearly that saying no would be stupid?"**

Here's the shift that changed everything for me: I stopped trying to convince people and started trying to understand them. When I closed a deal with a $92B company, I didn't walk in with a pitch deck. I walked in with a deep understanding of their problem and a specific solution.

## The three beliefs every closer holds

1. **What I offer is genuinely valuable.** If you don't believe this, fix your offer before you try to sell it. You can't fake conviction.
2. **I'm doing them a disservice by NOT selling.** If your solution works, letting someone walk away with their problem unsolved is actually selfish.
3. **The outcome matters more than the transaction.** When you care about their result more than your commission, everything changes. Your tone changes. Your questions change. People feel it.

<!-- check:0 -->

## Order-taker vs. closer behaviors

**Order-takers:**
- Wait for inbound leads
- Present features and pricing
- Accept "let me think about it" as an answer
- Follow up once, maybe twice, then give up

**Closers:**
- Create opportunities through outreach
- Present outcomes and transformations
- Dig into what "let me think about it" actually means
- Follow up with value until they buy or die

<!-- check:1 -->

## The real secret

Sales is a transfer of conviction. If you're more certain about the value than they are uncertain about the risk, you win. That's it. The rest of this course teaches you the mechanics, but this belief system is the engine.

You don't need to be loud, aggressive, or manipulative. You need to be convicted, curious, and direct.`,
    takeaways: [
      "Sales is solving problems so clearly that saying no is irrational — not convincing or pressuring",
      "The three core beliefs: your offer is valuable, not selling is a disservice, outcomes matter more than transactions",
      "Closers create opportunities and follow through — order-takers wait and give up",
      "Conviction transfers: be more certain about the value than they are uncertain about the risk"
    ],
    exercise: "Write down the top 3 problems your offer solves. For each one, write a single sentence that makes the value so obvious a 12-year-old would get it. If you can't do this clearly, your offer needs work before your sales skills do.",
    checks: [
      {
        question: "Which of the three core beliefs says that letting a prospect walk away unsolved is actually selfish?",
        options: [
          "What I offer is genuinely valuable",
          "I'm doing them a disservice by NOT selling",
          "The outcome matters more than the transaction"
        ],
        correctIndex: 1,
        explanation: "The second belief — 'I'm doing them a disservice by NOT selling' — reframes selling as a service. If your solution genuinely works, letting someone leave with their problem unsolved means you prioritized your comfort over their outcome. 'What I offer is valuable' (A) is about conviction in your product. 'Outcome over transaction' (C) is about caring more about their result than your commission."
      },
      {
        question: "What is the key difference between how closers and order-takers handle 'let me think about it'?",
        options: [
          "Closers offer a discount to speed up the decision",
          "Closers dig into what 'let me think about it' actually means",
          "Closers move on immediately to the next prospect"
        ],
        correctIndex: 1,
        explanation: "Closers treat 'let me think about it' as a signal that something unspoken is holding the prospect back, so they dig deeper to uncover the real objection. Offering a discount (A) is an order-taker move that devalues the offer. Moving on immediately (C) is giving up — closers follow up with value until they get a real answer."
      }
    ]
  },

  "01-2": {
    title: "Understanding buyer psychology",
    duration: "6 min read",
    content: `People don't buy logically. They buy emotionally and justify logically. Every decision, from a $10 t-shirt to a $50K consulting contract, runs through the same mental process. Learn it and you'll never be confused about why someone said no again.

## The buyer's internal monologue

Every prospect is running a silent calculation the entire time you talk to them. It goes like this:

1. **"Do I have a problem?"** — If they don't feel pain, nothing you say matters
2. **"Is this person credible?"** — Can they actually solve it?
3. **"Will this actually work for me?"** — Not in theory. For MY situation.
4. **"Is this worth the money/time/risk?"** — The value has to clearly outweigh the cost
5. **"What happens if I do nothing?"** — The cost of inaction vs. the cost of action

Your entire sales conversation should walk them through these five questions in order. Skip one and the deal falls apart.

<!-- check:0 -->

## The three buying triggers

**1. Pain (moving away from something)**
This is the strongest trigger. People will pay almost anything to stop active pain. "I'm losing $20K/month because my sales process is broken" is a buyer who will move fast.

**2. Aspiration (moving toward something)**
Second strongest. "I want to scale from $50K to $200K/month." These buyers are motivated but less urgent. You need to create urgency by quantifying the cost of delay.

**3. Logic (it makes sense on paper)**
Weakest trigger alone. "The ROI looks good." These buyers stall the most. They need emotional fuel — either pain or aspiration — to actually commit.

## The trust equation

People buy from people they trust. Trust is built from four things:

- **Credibility** — Do you know what you're talking about? (Proof: results, case studies, specifics)
- **Reliability** — Do you do what you say? (Proof: showing up on time, following through on small things)
- **Intimacy** — Do you understand my specific situation? (Proof: asking good questions, listening)
- **Low self-orientation** — Are you here for me or for your commission? (Proof: recommending against your own interest when appropriate)

<!-- check:1 -->

## What this means in practice

Stop selling features. Start identifying which buying trigger is active and feed it. If someone has pain, amplify the pain. If someone has aspiration, paint the future. Then stack trust on top.

The person who understands the buyer's psychology better than the buyer understands it themselves — that's the person who closes.`,
    takeaways: [
      "Buyers process five internal questions in sequence — skip one and the deal stalls",
      "Pain is the strongest buying trigger, followed by aspiration, then logic alone",
      "Trust is built from credibility, reliability, intimacy, and low self-orientation",
      "Stop selling features — identify which emotional trigger is active and speak to it"
    ],
    exercise: "Think of the last three things you bought over $100. For each one, identify: (1) which buying trigger drove the purchase, (2) what trust signals made you confident, and (3) what the seller said or did that pushed you over the edge. Write it down — you're reverse-engineering your own buyer psychology.",
    checks: [
      {
        question: "A prospect says 'I don't really have a problem right now.' According to the buyer's internal monologue, what does this mean for the sale?",
        options: [
          "Skip to presenting your proof and credibility to change their mind",
          "Nothing you say will matter because the first internal question — 'Do I have a problem?' — is unanswered",
          "Move straight to discussing price since they clearly don't need convincing"
        ],
        correctIndex: 1,
        explanation: "The buyer's internal monologue processes five questions in sequence, starting with 'Do I have a problem?' If they don't feel pain, questions 2-5 are irrelevant — nothing else you say will land. Skipping to proof (A) addresses question 2 when question 1 is unsettled. Discussing price (C) addresses question 4, which is even further out of sequence."
      },
      {
        question: "Which component of the trust equation is demonstrated by recommending against your own interest when appropriate?",
        options: [
          "Credibility — it shows deep domain expertise",
          "Reliability — it proves you follow through",
          "Low self-orientation — it proves you're focused on them, not your commission"
        ],
        correctIndex: 2,
        explanation: "Recommending against your own interest is the clearest signal of low self-orientation — you're putting their outcome above your revenue. This is the hardest trust component to fake and the most powerful when genuine. Credibility (A) is about domain knowledge and proof. Reliability (B) is about consistency in doing what you say."
      }
    ]
  },

  "01-3": {
    title: "Your offer: positioning to win before the call",
    duration: "6 min read",
    content: `If your offer is weak, no amount of sales skill saves you. I've seen talented closers struggle because they're pushing something confusing, generic, or underpriced. Your offer is your weapon. Sharpen it before you go to war.

## The anatomy of a killer offer

A great offer has five components:

1. **A specific target** — Who exactly is this for? "Small businesses" is garbage. "E-commerce brands doing $50K-$200K/month who are spending too much on manual customer support" is a target.

2. **A specific outcome** — What do they get? Not "better marketing." Something like: "A fully automated lead gen system that books 15-20 qualified calls per month."

3. **A mechanism** — How does it work? This is your secret sauce. "We use AI-powered outreach combined with a custom CRM pipeline" is a mechanism.

4. **Proof** — Why should they believe you? Case studies, screenshots, testimonials, specific numbers. "We did this for a DHL division and reduced their process time by 60%" hits different than "we've worked with big companies."

5. **A risk reversal** — What makes saying yes safe? Money-back guarantee, pay-on-results, free audit first. Something that shifts the risk from them to you.

<!-- check:0 -->

## The positioning framework

Here's the formula I use:

**I help [specific target] achieve [specific outcome] through [mechanism], without [biggest objection/fear].**

Examples:
- "I help service businesses book 20+ qualified sales calls per month through AI-automated outreach, without hiring a sales team."
- "I help agencies automate their client onboarding in 2 weeks using custom AI workflows, without changing their existing tools."

<!-- check:1 -->

## Price anchoring

Your price should feel like a steal compared to the outcome. If you're charging $5K for something that will make them $50K, that's a no-brainer.

**The 10x rule:** Your price should be 1/10th (or less) of the value you deliver. If you can't make that math work, your offer isn't valuable enough yet — or you're targeting the wrong people.

Always present your price after you've established the value. Never lead with price. If they ask early, say: "I want to make sure this is actually the right fit first. If it's not, I'll tell you — no hard feelings."

<!-- check:2 -->

## Packaging matters

Don't sell hours. Sell outcomes. "40 hours of consulting" vs. "A complete sales system installed in your business in 30 days." Same work. Completely different perceived value.

Package your work into clear deliverables with defined timelines. Buyers want to know what they're getting and when they're getting it.`,
    takeaways: [
      "A killer offer needs: specific target, specific outcome, clear mechanism, proof, and risk reversal",
      "Use the positioning formula: I help [target] achieve [outcome] through [mechanism] without [fear]",
      "Apply the 10x rule — your price should be 1/10th of the value delivered",
      "Sell outcomes and packages, never hours — same work, completely different perceived value"
    ],
    exercise: "Write out your offer using the five components. Then write your positioning statement using the formula. Read it out loud. If it doesn't immediately make sense and sound compelling, rewrite it until it does. Share it with one person today and get their honest reaction.",
    checks: [
      {
        question: "Which of the following is a properly specific target for your offer?",
        options: [
          "Small businesses that need help with marketing",
          "E-commerce brands doing $50K-$200K/month spending too much on manual customer support",
          "Companies that want to grow their revenue"
        ],
        correctIndex: 1,
        explanation: "A specific target defines the industry, revenue range, and the exact pain point. 'E-commerce brands doing $50K-$200K/month spending too much on manual customer support' nails all three. 'Small businesses' (A) is vague — it could be anyone. 'Companies that want to grow revenue' (C) describes literally every company on earth."
      },
      {
        question: "What is the correct structure of the positioning formula?",
        options: [
          "I help [target] save money by [mechanism] with [guarantee]",
          "I help [target] achieve [outcome] through [mechanism] without [biggest fear]",
          "I offer [service] to [target] at [price] for [timeline]"
        ],
        correctIndex: 1,
        explanation: "The positioning formula is: I help [specific target] achieve [specific outcome] through [mechanism], without [biggest objection/fear]. This covers who you serve, what they get, how it works, and removes the main hesitation. Saving money (A) is too narrow and misses the outcome framing. Listing service/price/timeline (C) is a proposal, not a positioning statement."
      },
      {
        question: "According to the 10x rule, if you charge $5K for a project, what value should the client expect?",
        options: [
          "At least $10K in value — double the investment",
          "At least $50K in value — 10 times the investment",
          "At least $15K in value — a 3x return"
        ],
        correctIndex: 1,
        explanation: "The 10x rule says your price should be 1/10th or less of the value you deliver. A $5K price means the client should see at least $50K in value, making the investment feel like a no-brainer. A 2x return (A) isn't compelling enough to overcome risk. A 3x return (C) is decent but doesn't meet the 10x standard that makes the price irrelevant."
      }
    ]
  },

  "01-4": {
    title: "Building a personal sales identity",
    duration: "5 min read",
    content: `People buy from people, not companies. Especially at our level. Nobody cares about your LLC name or your logo. They care about whether YOU can deliver. Your personal sales identity is the brand that precedes you into every conversation.

## Why this matters

When I message someone on Instagram or send a cold email, they Google me. They check my profile. They look at my content. Before I ever get on a call, they've already formed an opinion. Your personal sales identity is what controls that opinion.

## The three pillars of sales identity

**1. Authority — What do you know?**

You build authority by sharing what you know publicly. This doesn't mean posting motivational quotes. It means:
- Breaking down how you solved a specific problem
- Sharing real results with real numbers (with permission)
- Teaching something useful that demonstrates your expertise
- Having opinions and standing by them

You don't need 100K followers. You need 500 of the right people seeing your stuff and thinking "this person knows what they're doing."

**2. Proof — What have you done?**

Collect everything. Screenshots of results, thank-you messages from clients, before/after comparisons, revenue numbers, time saved. Put it in a folder. Update it weekly.

When someone asks "why should I trust you?" you should be able to pull up 5-10 specific pieces of proof instantly.

**Proof hierarchy (strongest to weakest):**
- Revenue/results you generated for a client (with their name)
- Screenshots/recordings of the work in action
- Written testimonials from clients
- Case studies you've written
- Your own results

**3. Consistency — Do you show up?**

The fastest way to build a sales identity is consistency. Post 3-5 times per week. Show up to every meeting on time. Follow through on every small promise. Most people are so inconsistent that just being reliable makes you stand out.

<!-- check:0 -->

## The practical system

1. **Pick your platform** — Where do your buyers hang out? LinkedIn for B2B, Instagram for local/creative, Twitter for tech. Pick one. Master it.
2. **Content cadence** — 3 posts per week minimum. One case study, one insight, one personal/behind-the-scenes.
3. **Profile optimization** — Your bio should be your positioning statement. Your pinned post should be your best proof. Your profile picture should be professional but approachable.
4. **Engage before you pitch** — Comment on your prospects' posts for 2 weeks before you ever DM them. When you do reach out, you're not a stranger.

<!-- check:1 -->

## The long game

Your personal sales identity compounds. Every post, every delivered project, every relationship builds on the last. Six months from now, people will come to you instead of you chasing them. But you have to start now.`,
    takeaways: [
      "People buy from people — your personal brand precedes you into every sales conversation",
      "Build authority through sharing real expertise, proof through collecting results, and consistency through showing up",
      "Know the proof hierarchy: client revenue results > screenshots > testimonials > case studies > your own results",
      "Pick one platform, post 3x/week minimum, and engage with prospects before you ever pitch them"
    ],
    exercise: "Audit your online presence right now. Google yourself. Check your Instagram/LinkedIn/Twitter bio. Would a prospect with $5K to spend trust you based on what they see? Write down three specific things to fix this week and pick one piece of proof to post tomorrow.",
    checks: [
      {
        question: "According to the proof hierarchy, which type of proof is strongest?",
        options: [
          "Written testimonials from satisfied clients",
          "Revenue or results you generated for a client with their name attached",
          "Case studies you've written about your own process"
        ],
        correctIndex: 1,
        explanation: "Revenue/results with the client's name attached is the strongest proof because it's specific, measurable, and attributed — a prospect can verify it. Written testimonials (A) are strong but they're the client's words about feelings, not hard numbers. Case studies you wrote (C) are self-reported and rank lower because there's no external validation."
      },
      {
        question: "What is the recommended approach before ever DMing a prospect on social media?",
        options: [
          "Send a polished pitch immediately while your profile looks professional",
          "Engage genuinely with their content for 2 weeks so you're not a stranger when you reach out",
          "Post 10 pieces of content tagging them so they notice you"
        ],
        correctIndex: 1,
        explanation: "Engaging with their content for 2 weeks makes you a familiar name before you ever reach out — your DM feels expected, not intrusive. Sending a pitch immediately (A) makes you one of dozens of strangers in their inbox. Tagging them 10 times (C) comes across as desperate and spammy, not as genuine engagement."
      }
    ]
  },

  "02-1": {
    title: "Defining your exact ideal customer profile",
    duration: "5 min read",
    content: `Selling to everyone is selling to no one. I learned this the hard way. I used to take any project from anyone who could pay. The result? Nightmare clients, scope creep, and work I hated. The day I defined exactly who I serve is the day my close rate doubled.

## What an ICP actually is

Your Ideal Customer Profile (ICP) is a specific description of the person or company most likely to buy from you, get great results, and be easy to work with. All three matter.

## The ICP framework

Answer these seven questions as specifically as possible:

**1. Industry/Niche**
Not "businesses." What specific vertical? E-commerce, real estate, restaurants, SaaS, agencies, local services? Pick one or two to start.

**2. Revenue/Size**
A solopreneur with $5K/month has different problems than a company doing $500K/month. Who can afford you AND benefit most?

**3. The specific pain point**
What keeps them up at night that you directly solve? "They're manually doing outreach and it's eating 20 hours a week" is specific. "They need help with marketing" is useless.

**4. Current situation**
What are they doing right now to solve this problem? This tells you what you're replacing or improving. If they're already paying someone else $3K/month for mediocre results, you know exactly how to position against that.

**5. Decision maker**
Who actually signs the check? The business owner? A marketing director? A COO? Know exactly who you're selling to.

**6. Where they hang out**
LinkedIn? Instagram? Industry conferences? Facebook groups? Specific subreddits? This determines your outreach strategy.

**7. Budget reality**
Can they realistically afford what you charge? Don't waste time selling $5K services to people who've never spent more than $500.

<!-- check:0 -->

## My ICP example

When I started closing consistently, my ICP looked like this: **Service-based businesses doing $20K-$100K/month, run by a founder who handles sales personally, who's losing deals because they can't follow up fast enough, active on Instagram or LinkedIn, and has spent money on marketing before.**

That's specific enough to build a targeted list and write outreach that resonates.

<!-- check:1 -->

## The anti-ICP

Equally important: define who you DON'T want. For me:
- People who want to "pick my brain" for free
- Clients who need 15 meetings before making a decision
- Anyone who negotiates your rate before understanding the value
- People who've burned through 3 agencies already (the problem is them)

Write your anti-ICP down. When one of these people shows up, recognize them early and politely move on.`,
    takeaways: [
      "Your ICP must answer: industry, revenue/size, specific pain point, current situation, decision maker, location, and budget",
      "A specific ICP doubles your close rate — selling to everyone means converting no one",
      "Define your anti-ICP to recognize bad-fit clients early and save yourself time and headaches",
      "Your ICP should describe people who will buy, get results, AND be easy to work with"
    ],
    exercise: "Fill out all seven ICP questions for your offer. Then write your anti-ICP — the three to five types of people you refuse to work with. Put both on a single page and tape it next to your monitor. Every lead you get, check it against this before you spend time on them.",
    checks: [
      {
        question: "Which of these ICP descriptions is specific enough to be useful?",
        options: [
          "Businesses that need better marketing and are ready to invest",
          "Service-based businesses doing $20K-$100K/month, run by a founder who handles sales personally and is losing deals from slow follow-up",
          "Companies with 10-50 employees that want to grow"
        ],
        correctIndex: 1,
        explanation: "The second option nails it: industry type (service-based), revenue range ($20K-$100K/month), decision maker (founder), and specific pain (losing deals from slow follow-up). 'Businesses that need better marketing' (A) describes almost everyone. 'Companies with 10-50 employees that want to grow' (C) specifies size but nothing about pain or situation."
      },
      {
        question: "What is the purpose of defining an anti-ICP?",
        options: [
          "To create a blacklist of competitors you don't want to work with",
          "To recognize bad-fit clients early and avoid wasting time on people who won't produce good outcomes",
          "To filter out prospects who can't afford your premium pricing tier"
        ],
        correctIndex: 1,
        explanation: "The anti-ICP helps you spot red-flag clients before you invest time — people who need 15 meetings to decide, burn through agencies, or want free advice. It's about fit, not just budget. A competitor blacklist (A) is a separate concern from client fit. Filtering only by budget (C) misses behavioral red flags like indecisiveness or chronic scope creep."
      }
    ]
  },

  "02-2": {
    title: "Building targeted lead lists at scale",
    duration: "6 min read",
    content: `Your ICP means nothing if you can't find real people who match it. This lesson is about building lead lists — the actual, practical work of finding names, emails, and information about people who fit your profile.

## The lead list essentials

Every entry on your list needs:
- **Name** (first and last)
- **Company/Business name**
- **Role/Title**
- **Email** (verified — more on this below)
- **LinkedIn or Instagram profile**
- **One relevant detail** (recent post, company news, pain indicator)

That last item is what separates spray-and-pray from targeted outreach.

## Free tools that work

**LinkedIn Sales Navigator** ($99/month but worth every penny)
This is the single best B2B prospecting tool. You can filter by industry, company size, role, geography, recent activity, and more. If you're doing B2B, get this.

**Instagram search + hashtags**
For local businesses or creative industries: search location tags, industry hashtags, and the "suggested" accounts feature. If your ICP is restaurant owners in Austin, search #austinrestaurant and start building your list.

**Google Maps**
Criminally underrated. Search your ICP's business type + location. You get name, website, phone, reviews. Restaurants, dentists, agencies, gyms — they're all there with contact info.

**Apollo.io (free tier)**
Gives you verified email addresses and company data. The free plan gets you 100 credits/month. Enough to get started.

**Hunter.io**
Find email patterns for any company. If you know the company domain, Hunter tells you the email format (first.last@, first@, etc.) and verifies individual addresses.

<!-- check:0 -->

## The 100-list method

Here's my system: build a list of exactly 100 leads that match your ICP. Not 20, not 500. 100.

**Why 100:**
- It's enough to get meaningful data on what works
- It's small enough to personalize every outreach
- It forces you to be selective (not everyone makes the cut)
- You can work through it in 2-3 weeks

**How to build it:**
1. Spend 2-3 hours using the tools above
2. Put everything in a spreadsheet (Google Sheets is fine)
3. Verify every email using Hunter or NeverBounce
4. Add your personalization detail for each lead
5. Prioritize: sort by how closely they match your ICP (A, B, C tier)

<!-- check:1 -->

## Qualifying your list

Not everyone on your list is equal. Rate each lead:

- **A-tier:** Matches every ICP criteria, shows active pain signals (hiring, complaining about current solution, growing fast)
- **B-tier:** Matches most criteria, no obvious pain signal yet
- **C-tier:** Partially matches, might be worth a shot

Start outreach with A-tier. Always.

<!-- check:2 -->

## Maintenance

Your list isn't a one-time thing. Add 10-20 new leads per week. Remove anyone who's been contacted and said no. Keep it fresh. A stale list is a dead list.`,
    takeaways: [
      "Every lead needs: name, company, role, verified email, social profile, and one personalized detail",
      "Use LinkedIn Sales Navigator for B2B, Instagram + Google Maps for local, and Apollo/Hunter for emails",
      "Build a list of exactly 100 qualified leads — enough for data, small enough to personalize",
      "Tier your leads A/B/C based on ICP fit and pain signals — always start outreach with A-tier"
    ],
    exercise: "Build your first 25 leads right now. Use the tools listed above. For each lead, fill out all six fields including the personalization detail. This is the hardest part of sales and most people skip it. Don't be most people.",
    checks: [
      {
        question: "What separates a good lead list entry from a generic one?",
        options: [
          "Having at least three phone numbers and two email addresses for each contact",
          "Including one relevant, personalized detail about the prospect — like a recent post or company news",
          "Scoring each lead on a 1-100 scale based on estimated deal size"
        ],
        correctIndex: 1,
        explanation: "The personalization detail is what turns spray-and-pray into targeted outreach. A recent post, company news, or pain indicator gives you a warm entry point. Multiple phone numbers (A) is about redundancy, not relevance. A 1-100 score (C) over-engineers what should be a simple A/B/C tier system."
      },
      {
        question: "Why does the course recommend building exactly 100 leads to start?",
        options: [
          "It's enough for meaningful data, small enough to personalize each one, and forces you to be selective",
          "100 leads guarantees at least 10 sales based on average conversion rates",
          "It matches the free tier limit on most email verification tools"
        ],
        correctIndex: 0,
        explanation: "100 is the sweet spot: large enough to generate real patterns about what works, small enough that you can deeply research and personalize each outreach, and it forces you to be choosy about who makes the list. No number of leads guarantees sales (B) — conversion depends on execution. Tool limits (C) vary widely and aren't the reasoning."
      },
      {
        question: "What makes an A-tier lead different from a B-tier lead?",
        options: [
          "A-tier leads have bigger budgets than B-tier leads",
          "A-tier leads match every ICP criteria AND show active pain signals like hiring or complaining about current solutions",
          "A-tier leads are in your personal network while B-tier leads are cold"
        ],
        correctIndex: 1,
        explanation: "A-tier leads match your full ICP and show visible signs of active pain — hiring posts, complaints about their current solution, rapid growth. B-tier matches most criteria but lacks those pain signals. Budget alone (A) doesn't determine tier — a rich prospect with no pain won't buy. Network proximity (C) affects outreach temperature, not lead quality."
      }
    ]
  },

  "02-3": {
    title: "AI-powered research on prospects",
    duration: "5 min read",
    content: `This is where you get an unfair advantage. Most salespeople spend 2 minutes looking at a prospect's LinkedIn before reaching out. You're going to spend 2 minutes and know more about them than their own team does. AI makes this possible.

## The research stack

Here's what I use before any outreach or sales call:

**1. Company research prompt**

Feed this to Claude or ChatGPT:

*"Research [Company Name]. Tell me: what they do, their approximate revenue, recent news or changes, their main competitors, and any obvious problems or opportunities based on their website and public presence."*

This gives you a briefing in 60 seconds that would take 30 minutes manually.

**2. LinkedIn deep dive**

Copy the prospect's LinkedIn profile text and paste it into AI with this prompt:

*"Based on this LinkedIn profile, tell me: their career trajectory, what they likely care about professionally, any recent accomplishments or changes, and 3 conversation starters that would feel personal and relevant."*

**3. Website audit**

Drop their company URL into AI:

*"Audit this website from a [your service] perspective. What are they doing well? What's broken or missing? Give me 3 specific things I could improve and the likely business impact of each."*

Now you have a personalized insight to lead with in your outreach.

## The 3-layer research method

For every A-tier prospect, I do three layers:

**Layer 1: Public basics (30 seconds)**
Name, role, company, what they do. Just get oriented.

**Layer 2: AI-powered analysis (2 minutes)**
Run the prompts above. Get the smart insights.

**Layer 3: Content and activity (2 minutes)**
What have they posted recently? What have they liked or commented on? What podcasts have they been on? This gives you warm entry points.

Total time: under 5 minutes per prospect. But you'll sound like you've been studying them for a week.

<!-- check:0 -->

## What to do with the research

Don't dump it all into your outreach message. That's creepy. Use it to:

- **Pick the right angle** — Lead with the problem most relevant to them
- **Personalize your opener** — Reference something specific and recent
- **Prepare for objections** — If you know their situation, you know their hesitations
- **Ask better questions on calls** — "I noticed you recently expanded to Dallas — how's that affecting your sales process?" shows you did your homework

<!-- check:1 -->

## The research document

For every A-tier lead, create a quick note (even just bullet points) with your findings. When you get on a call two weeks later, you'll thank yourself. Keep these in your CRM or a simple Google Doc organized by prospect name.`,
    takeaways: [
      "AI lets you research any prospect in under 5 minutes with the depth that used to take 30+ minutes",
      "Use the three prompts: company research, LinkedIn deep dive, and website audit",
      "Apply the 3-layer method: public basics, AI analysis, and content/activity review",
      "Use research to pick your angle and personalize — don't dump it all into the message"
    ],
    exercise: "Pick 5 leads from your list. Run the full 3-layer research method on each one. Save your findings in a document. Time yourself — you should be under 5 minutes per prospect. If it's taking longer, you're overcomplicating it.",
    checks: [
      {
        question: "What are the three layers of the AI research method, in order?",
        options: [
          "Website audit, competitor analysis, pricing research",
          "Public basics (30 sec), AI-powered analysis (2 min), content and activity review (2 min)",
          "LinkedIn profile, email history, phone call notes"
        ],
        correctIndex: 1,
        explanation: "The 3-layer method moves from fast surface-level intel (name, role, company) to deeper AI-generated insights (pain points, opportunities) to reviewing their recent content and activity for personalized entry points. Total: under 5 minutes. A website audit (A) is just one AI prompt, not the whole system. Email history and call notes (C) are CRM data from after contact, not pre-outreach research."
      },
      {
        question: "How should you use your prospect research in outreach?",
        options: [
          "Include everything you found to show you did your homework",
          "Use it to pick the right angle, personalize your opener, and prepare for objections — not dump it all in the message",
          "Save it for the sales call and keep outreach generic to avoid seeming intrusive"
        ],
        correctIndex: 1,
        explanation: "Research informs your strategy but shouldn't all appear in the message — that's creepy. Use it to choose which problem to lead with, reference one specific thing in your opener, and anticipate what they'll push back on. Dumping everything (A) makes you look like a stalker. Keeping outreach generic (C) defeats the entire purpose of doing research."
      }
    ]
  },

  "02-4": {
    title: "Warm vs cold — when to use what",
    duration: "5 min read",
    content: `Not all outreach is created equal. Understanding the temperature of your approach changes everything about your messaging, timing, and expectations. Get this wrong and you're burning leads unnecessarily.

## Defining the temperatures

**Cold:** They don't know you exist. No prior interaction, no mutual connections, no engagement. You're a stranger.

**Warm:** There's some existing connection. They follow you, you've commented on their posts, you have a mutual contact, or they've seen your content.

**Hot:** They've expressed interest. They filled out a form, replied to your outreach, someone referred them directly, or they DM'd you first.

## When to go cold

Cold outreach works when:
- You have a highly specific, valuable offer for a clearly defined ICP
- Your outreach is personalized (not mass-blasted templates)
- You're targeting a market where people don't know solutions like yours exist
- You need volume and speed — cold scales faster than warm

Cold outreach does NOT work when:
- Your offer is vague or generic
- You're copy-pasting the same message to everyone
- You have no proof or credibility to reference
- Your ICP is too broad

**Expected response rates for cold:** 3-8% is good. 10%+ means your targeting and messaging are excellent.

<!-- check:0 -->

## When to go warm

Warm outreach works when:
- You're building a personal brand and have some audience
- Your ICP is active on social media
- You have time to invest before expecting returns (2-4 weeks of warming)
- Your offer requires higher trust (expensive, complex, or personal)

**The warming process:**
1. Follow them and engage genuinely with their content for 1-2 weeks
2. Add value in their comments (real insights, not "Great post!")
3. Share or reference their work in your own content
4. THEN send a DM or email that feels natural, not salesy

**Expected response rates for warm:** 15-30% is normal. 40%+ when done well.

<!-- check:1 -->

## The hybrid approach (what I actually do)

I don't pick one or the other. I run both simultaneously:

- **Cold email** hits 50-100 new prospects per week on autopilot (using AI-personalized sequences — we'll cover this in Module 3)
- **Warm social selling** runs daily — 15 minutes of engaging, 5 minutes of DMs to warmed-up prospects
- **Hot leads** get called immediately or responded to within 1 hour

The cold feeds the top of the funnel. The warm builds the middle. The hot is where the money is. You need all three.

<!-- check:2 -->

## Temperature-appropriate messaging

**Cold message:** Lead with a specific insight or result. No small talk. "I noticed [specific thing about their business]. We helped a similar company [specific result]. Worth a conversation?"

**Warm message:** Reference the relationship. "Hey [Name], been enjoying your posts about [topic]. I actually work on something related — [brief offer]. Would love to chat if you're open to it."

**Hot response:** Match their energy and move fast. "Great to hear from you. Let's get a call on the books — here's my calendar link. Looking forward to it."`,
    takeaways: [
      "Cold works for volume and speed with specific offers — expect 3-8% response rates",
      "Warm works for high-trust, high-ticket sales — expect 15-30% response rates after 2+ weeks of engagement",
      "Run both simultaneously: cold for top-of-funnel volume, warm for relationship-based middle-funnel",
      "Match your message tone to the temperature — cold gets straight to the point, warm references the relationship"
    ],
    exercise: "Categorize your 25 leads into cold, warm, and hot. For each category, write one template message tailored to that temperature. Then identify 5 cold leads you could start warming up today by engaging with their content.",
    checks: [
      {
        question: "What response rate should you realistically expect from cold outreach?",
        options: [
          "15-30% if your emails are well-personalized",
          "3-8% is good, 10%+ means your targeting and messaging are excellent",
          "Under 1% — cold outreach barely works anymore"
        ],
        correctIndex: 1,
        explanation: "Cold outreach to strangers typically yields 3-8% response rates, which is why volume and follow-up matter so much. 10%+ means you've nailed your targeting and message. 15-30% (A) is what warm outreach gets, not cold. Under 1% (C) usually means the messaging is bad or the targeting is off, not that cold outreach doesn't work."
      },
      {
        question: "What is the first step of the warming process before sending a DM?",
        options: [
          "Send a brief introduction message explaining who you are and what you do",
          "Follow them and engage genuinely with their content for 1-2 weeks",
          "Research their business and prepare a custom pitch deck"
        ],
        correctIndex: 1,
        explanation: "Warming starts with becoming a familiar name — follow, react to stories, leave thoughtful comments for 1-2 weeks. By the time you DM, you're not a stranger. Sending an intro message first (A) is still cold outreach. Preparing a pitch deck (C) is overkill for a first interaction and skips the relationship-building step entirely."
      },
      {
        question: "Why does the course recommend running cold and warm outreach simultaneously?",
        options: [
          "To A/B test which channel your audience prefers",
          "Cold fills the top of the funnel with volume, warm builds the middle with relationships, and hot is where money converts",
          "Because warm outreach alone takes too long and cold outreach alone is too impersonal"
        ],
        correctIndex: 1,
        explanation: "Each temperature serves a different part of the funnel. Cold generates volume at the top, warm nurtures relationships in the middle, and hot leads convert at the bottom. You need all three running simultaneously. A/B testing channels (A) misses the point — they serve different functions. Option C is partially right but doesn't capture the strategic funnel reasoning."
      }
    ]
  },

  "03-1": {
    title: "Cold email frameworks that get replies",
    duration: "6 min read",
    content: `Cold email is a skill. Most people are terrible at it because they write what THEY want to say instead of what the PROSPECT wants to read. Here are the frameworks that actually work, tested across hundreds of emails.

## The rules of cold email

Before frameworks, internalize these:

1. **Subject line is 50% of the battle.** If they don't open it, nothing else matters. Keep it under 6 words, make it look like a human wrote it, never use ALL CAPS or clickbait.
2. **First line is personal.** It proves you're not a bot. Reference something specific about them.
3. **Body is about THEM, not you.** The word "you" should appear more than "I."
4. **One CTA, one ask.** Don't ask them to "check out my website, watch this video, and book a call." Pick one.
5. **Under 100 words.** Seriously. Short emails get replies. Long emails get archived.

<!-- check:0 -->

## Framework 1: The PAS Email (Problem-Agitate-Solve)

**Subject:** [their company name] + [topic]

*"Hi [Name],*

*[Personalized first line — reference their work, a post, or their company.]*

*Most [their role/industry] struggle with [specific problem]. The worst part? [Agitate — what happens if they don't fix it.]*

*We've helped [similar company] [specific result] using [brief mechanism].*

*Worth a 15-minute conversation?*

*— Jordan"*

## Framework 2: The Before-After Email

**Subject:** Quick question about [their business area]

*"Hi [Name],*

*[Personalized first line.]*

*Before working with us, [similar client] was [their likely current situation — be specific]. After 30 days, they [specific measurable result].*

*I think we could do something similar for [their company].*

*Open to a quick chat this week?*

*— Jordan"*

## Framework 3: The Direct Ask

For when you have strong proof and a clear match:

**Subject:** [Mutual connection] said I should reach out

or

**Subject:** Idea for [their company name]

*"Hi [Name],*

*[One line about why you're reaching out.]*

*I built [specific thing] for [specific client], and it [specific result]. Looking at [their company], I see an opportunity to [specific improvement].*

*Would you be open to hearing about it?*

*— Jordan"*

<!-- check:1 -->

## Subject lines that work

- "[Their name] — quick question"
- "[Mutual connection] mentioned you"
- "Idea for [company name]"
- "[Result you achieved] for [similar company]"
- "RE: [topic they care about]" (use sparingly — this can feel deceptive)

## Subject lines that don't work

- "Revolutionary AI solution for your business!!!"
- "Partnership opportunity"
- "Can I pick your brain?"
- Anything longer than 8 words
- Anything that sounds like marketing

<!-- check:2 -->

## What NOT to do

- Don't attach files (triggers spam filters)
- Don't include more than one link
- Don't write a novel
- Don't use "hope this finds you well" — it screams automation
- Don't use your company signature with 15 social links — keep it clean`,
    takeaways: [
      "Subject line and first line determine 80% of your results — keep subjects under 6 words and personalize the opener",
      "Use PAS (Problem-Agitate-Solve), Before-After, or Direct Ask frameworks depending on your proof level",
      "Every cold email should be under 100 words, focused on THEM, with a single clear call to action",
      "Never attach files, include multiple links, or use corporate jargon — write like a real human"
    ],
    exercise: "Write three cold emails using each framework — one PAS, one Before-After, one Direct Ask — for three different A-tier leads from your list. Use their real names, real companies, and real personalization. Keep each under 100 words.",
    checks: [
      {
        question: "According to the cold email rules, what is the maximum word count for a cold email?",
        options: [
          "250 words — enough to explain your full value proposition",
          "Under 100 words with one clear call to action",
          "No limit as long as every paragraph adds value"
        ],
        correctIndex: 1,
        explanation: "Short emails get replies, long emails get archived. Under 100 words forces you to be ruthless about what matters. One CTA means you're not confusing them with multiple asks. 250 words (A) is an essay by cold email standards. No limit (C) ignores the reality that busy people scan, they don't read."
      },
      {
        question: "In the PAS framework, what does the 'Agitate' step accomplish?",
        options: [
          "It presents your solution as the obvious fix for their problem",
          "It amplifies the pain by showing what happens if they don't fix the problem",
          "It establishes your credibility with a relevant case study"
        ],
        correctIndex: 1,
        explanation: "Agitate intensifies the emotional weight of the problem — it makes the prospect feel the cost of inaction. Presenting your solution (A) is the 'Solve' step, which comes after Agitate. Establishing credibility (C) supports the Solve step but isn't what Agitate does. The sequence matters: name the Problem, Agitate to make it urgent, then Solve."
      },
      {
        question: "Which of these is an effective cold email subject line?",
        options: [
          "Revolutionary AI solution for your business!!!",
          "Idea for [company name]",
          "Partnership opportunity to discuss"
        ],
        correctIndex: 1,
        explanation: "'Idea for [company name]' works because it's short, specific, and curiosity-driven — it sounds like a human wrote it for that specific person. 'Revolutionary AI solution' (A) is clickbait with exclamation marks that screams mass marketing. 'Partnership opportunity' (C) is vague and overused — every spammer uses this subject line."
      }
    ]
  },

  "03-2": {
    title: "Cold DM strategy for Instagram and LinkedIn",
    duration: "6 min read",
    content: `DMs are more personal than email. That's both the opportunity and the risk. Get it right and you start a real conversation. Get it wrong and you're that annoying person in their message requests. Here's how to do it right on both platforms.

## Instagram DM strategy

**Who this works for:** Local businesses, personal brands, creative professionals, anyone consumer-facing.

**The warm-up (do this FIRST):**
1. Follow them
2. Watch their stories and react genuinely (not the fire emoji — say something real)
3. Comment on 2-3 posts with actual substance over a week
4. Share one of their posts to your story with a genuine compliment or insight

After a week of this, they know your name. Now your DM isn't cold. It's expected.

**The DM structure:**

*"Hey [Name], love what you're doing with [specific thing]. Quick question — are you handling [relevant area of your service] in-house right now? I've been helping [similar type of business] with [specific result], and I had a couple ideas for [their business]. No pressure, just thought it might be relevant."*

**Key principles:**
- Never open with "Hey! I have a service that could help your business"
- Ask a question, don't pitch
- Reference something specific about their content
- Keep it under 4 sentences
- End with low pressure ("no pressure," "just thought," "no worries if not")

<!-- check:0 -->

## LinkedIn DM strategy

**Who this works for:** B2B, professional services, agencies, SaaS, anyone selling to companies.

**Connection request note (under 300 characters):**

*"Hi [Name], been following your work on [topic]. I work in a similar space helping [ICP description] with [outcome]. Would love to connect."*

**DO NOT pitch in the connection request.** This is the number one mistake on LinkedIn. The connection request is just to get accepted.

**After they accept (wait 24 hours):**

*"Thanks for connecting, [Name]. I noticed [something specific about their profile/company/recent post]. We've been working on [related topic] and recently helped [client] achieve [specific result]. Curious — is [relevant problem] something you're thinking about?"*

**If they respond (the conversation continues):**

Ask questions. Learn about their situation. Only pitch when they express a problem you solve. The sequence should be:
1. Build rapport
2. Ask about their business
3. Identify a problem
4. Offer a relevant solution
5. Suggest a call

<!-- check:1 -->

## Platform-specific rules

**Instagram:**
- Story replies are the warmest entry point
- Voice messages stand out (send a 15-second intro)
- Don't send links in first message (Instagram suppresses them)
- Follow up after 3-5 days if no response, not the next day

**LinkedIn:**
- Post content regularly — your profile is your resume
- Engage in industry groups before DMing members
- Use LinkedIn's "Bell" notification feature to know when prospects post
- InMail has lower response rates than connection request + DM

<!-- check:2 -->

## Volume vs. quality

On social DMs, quality always beats volume. Sending 100 copy-pasted DMs will get you flagged and ignored. Sending 10 genuinely personalized DMs per day will get you 2-3 conversations per day. That's 15-20 conversations per week. That's more than enough to build a pipeline.

Consistency matters more than volume. 10 quality DMs per day, every day, for 30 days = 300 conversations started. Even a 10% meeting rate = 30 calls. That's a full pipeline from DMs alone.`,
    takeaways: [
      "Always warm up prospects with engagement before DMing — make your name familiar first",
      "Never pitch in the first message — ask a question, reference their work, and keep it low pressure",
      "On LinkedIn, never pitch in the connection request — that's just to get accepted",
      "10 quality personalized DMs per day beats 100 copy-pasted ones — consistency over volume"
    ],
    exercise: "Send 5 Instagram or LinkedIn DMs today to people on your lead list using the frameworks above. But first — spend 15 minutes engaging with their content genuinely. Track who responds and what your opener was so you can see what works.",
    checks: [
      {
        question: "What should you do before sending an Instagram DM to a prospect?",
        options: [
          "Prepare a polished pitch deck and include a link in your first message",
          "Follow them, react to stories, and comment on 2-3 posts over a week to make your name familiar",
          "Research their business thoroughly and send a detailed analysis of how you can help"
        ],
        correctIndex: 1,
        explanation: "The warm-up is essential on Instagram — follow, engage with stories genuinely, leave real comments over a week. By the time you DM, your name is familiar and the message feels natural. Including links in first DMs (A) gets suppressed by Instagram's algorithm. A detailed analysis (C) is too much too soon and feels presumptuous from a stranger."
      },
      {
        question: "What is the biggest mistake people make on LinkedIn DMs?",
        options: [
          "Pitching in the connection request instead of waiting until after they accept",
          "Using too casual a tone that doesn't match the professional platform",
          "Not including their company logo in the message header"
        ],
        correctIndex: 0,
        explanation: "Pitching in the connection request is the number one LinkedIn mistake. The connection request exists solely to get accepted — nothing more. Once connected, wait 24 hours, then start a conversation. Casual tone (B) isn't inherently bad on LinkedIn — authenticity matters more than formality. Company logos in messages (C) isn't a real LinkedIn feature or concern."
      },
      {
        question: "On social DMs, what is the recommended daily volume for quality outreach?",
        options: [
          "100+ DMs per day to maximize pipeline velocity",
          "1-2 DMs per week to keep things exclusive and high-value",
          "10 genuinely personalized DMs per day, consistently, every day"
        ],
        correctIndex: 2,
        explanation: "10 quality personalized DMs per day generates 2-3 conversations daily, which is 15-20 per week — more than enough for a full pipeline. Sending 100+ (A) means copy-pasting, which gets you flagged and ignored. Only 1-2 per week (C) is too slow to build any meaningful pipeline momentum."
      }
    ]
  },

  "03-3": {
    title: "AI-personalized outreach at volume",
    duration: "6 min read",
    content: `Here's where everything comes together. You've built your list, done your research, and learned the frameworks. Now we're going to use AI to personalize outreach at a scale that would be impossible manually. This is the competitive advantage most people don't know exists.

## The concept

Traditional outreach is a tradeoff: personalize and go slow, or template and go fast. AI breaks that tradeoff. You can personalize every single message AND send 50+ per day.

## The system

**Step 1: Build your prospect data sheet**

In a spreadsheet, for each prospect:
- Name, company, role
- One specific thing about their business (from your research)
- One pain point or opportunity you identified
- One relevant result you have (case study, number, proof)

**Step 2: Create your AI prompt template**

Here's what I use:

*"Write a cold email to [Name] who is [Role] at [Company]. Here's what I know about them: [specific detail]. The email should:*
- *Open with a personalized line referencing [specific detail]*
- *Identify the problem: [pain point]*
- *Present our solution briefly: [your offer in one line]*
- *Include this proof point: [relevant result]*
- *End with a soft CTA asking for a 15-minute call*
- *Be under 80 words total*
- *Sound like a real person wrote it, not AI*
- *Don't use words like 'excited,' 'thrilled,' 'synergy,' or 'leverage'"*

**Step 3: Batch process**

Feed each prospect's data into the prompt. Generate all your emails in one session. I do this once a week for the upcoming week's outreach.

**Step 4: Human review (non-negotiable)**

Read every single email before sending. AI is good but not perfect. Check for:
- Does the personalization make sense and feel natural?
- Is the tone right? (Direct, not corporate)
- Are the facts accurate?
- Would YOU respond to this email?

Edit anything that feels off. This takes 30-60 seconds per email. For 50 emails, that's under an hour.

**Step 5: Send with proper tooling**

Don't send from your main email. Use a tool like:
- **Instantly.co** — Cold email platform with warm-up and sending limits
- **Smartlead** — Similar, good for multiple email accounts
- **Lemlist** — Higher-end with more personalization features

These tools warm up your email domain, respect sending limits, and track opens/replies.

<!-- check:0 -->

## The numbers

With this system:
- **Time:** 2-3 hours per week (list building + AI generation + review)
- **Volume:** 50-100 personalized emails per week
- **Expected results:** 5-10 replies per week at 5-10% reply rate
- **Meetings booked:** 2-5 per week from those replies

That's a consistent pipeline built in under 3 hours a week.

<!-- check:1 -->

## What makes this ethical

Some people feel weird about AI-assisted outreach. Here's the thing: the emails are still personalized, still accurate, still relevant. AI is doing the writing, but YOU did the research, YOU built the list, and YOU will deliver the service. The prospect doesn't care if you typed every word yourself — they care if the message is relevant and the offer is real.

What's NOT ethical: mass-blasting AI-generated garbage to unqualified lists. That's spam. Our system is the opposite.`,
    takeaways: [
      "AI breaks the tradeoff between personalization and volume — you can have both",
      "The system: prospect data sheet, AI prompt template, batch process, human review, send with proper tools",
      "Human review is non-negotiable — read every email, fix what feels off, never send raw AI output",
      "This system takes 2-3 hours per week and generates 2-5 meetings — that's a full pipeline"
    ],
    exercise: "Set up your AI outreach system today. Create the spreadsheet with your prospect data, write your prompt template, and generate 10 personalized emails. Review and edit each one. If you have access to a cold email tool, load them up. If not, send them manually this week.",
    checks: [
      {
        question: "In the AI-personalized outreach system, what is Step 4 and why is it non-negotiable?",
        options: [
          "Sending a test batch to 10 prospects to measure open rates before scaling",
          "Human review of every AI-generated email to check tone, accuracy, and personalization quality",
          "Running the emails through a spam score checker to ensure deliverability"
        ],
        correctIndex: 1,
        explanation: "Human review is Step 4 and it's non-negotiable because AI can misread context, get facts wrong, or produce personalization that sounds robotic. You need human judgment on every email before it sends. Test batches (A) are a good practice but aren't the system's Step 4. Spam score checking (C) is a delivery concern, not a quality control step."
      },
      {
        question: "How much weekly time does the AI outreach system require to generate 50-100 personalized emails?",
        options: [
          "10-15 hours including research, writing, and review",
          "2-3 hours total for list building, AI generation, and human review",
          "30 minutes if you skip the review step and trust the AI output"
        ],
        correctIndex: 1,
        explanation: "The entire system — list building, AI prompt generation, and human review — takes 2-3 hours per week for 50-100 personalized emails. That's the power of AI breaking the personalization-volume tradeoff. 10-15 hours (A) would negate the efficiency gains. Skipping review (C) is explicitly called out as unacceptable — human review is non-negotiable."
      }
    ]
  },

  "03-4": {
    title: "Follow-up sequences that don't annoy",
    duration: "5 min read",
    content: `80% of deals close after the 5th contact. 44% of salespeople give up after one follow-up. Read those numbers again. If you're not following up, you're leaving most of your money on the table.

But there's a difference between persistent and annoying. Here's how to follow up without destroying the relationship.

## The follow-up philosophy

Every follow-up should add value or change the angle. If your follow-up is just "bumping this to the top of your inbox," you're telling them their time isn't worth anything new from you.

## The 5-touch sequence

Here's the exact sequence I use for cold email:

**Email 1 (Day 0):** Your initial outreach. PAS, Before-After, or Direct Ask framework.

**Email 2 (Day 3):** Short and different angle.
*"Hey [Name], wanted to add one thing — we just finished a project for [similar company] and the results were [specific result]. Thought it might be relevant to what you're doing at [their company]. Worth a quick chat?"*

**Email 3 (Day 7):** Social proof or case study.
*"Hi [Name], here's a quick look at what we did for [client]: [one sentence result]. I think there's a similar opportunity for [their company] specifically around [specific area]. Want me to walk you through it?"*

**Email 4 (Day 14):** The breakup angle.
*"[Name] — I don't want to keep bothering you if this isn't relevant. If [your service area] isn't a priority right now, no worries at all. But if it is, I'd love 15 minutes to show you what we've been doing for companies like [theirs]. Either way, respect your time."*

**Email 5 (Day 30):** The final value bomb.
*"Hey [Name], I put together a quick [audit/analysis/recommendation] for [their company] — no strings attached. [One specific insight.] If you want the full thing, happy to send it over. If not, I'll stop reaching out. Wishing you a great Q[current quarter]."*

<!-- check:0 -->

## Why this works

- **Email 2** adds new information (a result)
- **Email 3** adds social proof (a case study)
- **Email 4** gives them an out (which paradoxically increases responses)
- **Email 5** leads with pure value (an audit or analysis)

Each email stands on its own. They don't reference the previous ones with "per my last email" or "just following up." That's weak.

## DM follow-up rules

DMs require more subtlety because they feel more personal:

- **First follow-up (3-5 days later):** React to their recent story, THEN casually re-engage
- **Second follow-up (7-10 days later):** Share something relevant to them (an article, a tool, an observation about their industry)
- **Third attempt (2-3 weeks later):** New angle entirely, or just continue engaging with their content until they come to you

**Never follow up more than 3 times on DM.** Email can handle 5 touches because it's less personal. DM is in their personal inbox.

<!-- check:1 -->

## Timing matters

- **Tuesday, Wednesday, Thursday** between 8-10 AM their time zone get the best open rates
- **Monday** people are catching up from the weekend — your email gets buried
- **Friday** people are checking out mentally
- **Sunday evening** can work for executives who clear their inbox before Monday

<!-- check:2 -->

## The tracking system

Track every touchpoint in your CRM or spreadsheet:
- Date sent
- Which email in the sequence (1-5)
- Open/reply status
- Next action and date

If you don't track, you'll either follow up too much or not enough. Both kill deals.`,
    takeaways: [
      "80% of deals close after the 5th contact — most salespeople quit after 1-2 follow-ups",
      "Every follow-up should add new value or change the angle — never just 'bump this to the top'",
      "Use the 5-touch email sequence: initial, new angle, social proof, breakup, value bomb",
      "Track every touchpoint with date, sequence number, and status — follow-up without a system is chaos"
    ],
    exercise: "Write your full 5-email follow-up sequence using the frameworks above. Customize it for your offer and ICP. Then set it up in your cold email tool (or schedule them manually for your first 10 leads). The sequence should be ready to send by end of day.",
    checks: [
      {
        question: "What is the core principle that should guide every follow-up email?",
        options: [
          "Reference the previous email to remind them you already reached out",
          "Every follow-up should add new value or change the angle — never just 'bump this to the top'",
          "Keep the exact same message to reinforce brand recognition through repetition"
        ],
        correctIndex: 1,
        explanation: "Each follow-up must earn its place in their inbox by bringing something new — a different result, a case study, a free insight. Referencing previous emails (A) with 'per my last email' is weak and adds no value. Repeating the same message (C) is literally spam and tells them you have nothing new to offer."
      },
      {
        question: "Why does the 'breakup' email (Email 4) paradoxically increase response rates?",
        options: [
          "It creates a discount offer that activates their fear of missing a deal",
          "It gives them an out, which removes pressure and prompts fence-sitters to respond before losing the option",
          "It triggers guilt about not replying to your previous three emails"
        ],
        correctIndex: 1,
        explanation: "The breakup email works by removing pressure — signaling you'll stop reaching out gives the prospect control. People who were on the fence often respond because they don't want the option to disappear. It's not about discounts (A) — you never discount in the breakup email. And it's not about guilt (C) — guilt-based sales destroys trust."
      },
      {
        question: "What is the maximum number of DM follow-ups you should send to a non-responsive prospect?",
        options: [
          "5, matching the email sequence",
          "3 — DMs are more personal and feel more intrusive than email",
          "Unlimited, as long as you keep adding value"
        ],
        correctIndex: 1,
        explanation: "DMs max out at 3 follow-ups because they live in someone's personal inbox and feel more intrusive than email. Email can handle 5 touches because it's more professional and less personal. Matching the email sequence at 5 (A) risks annoying them in a more intimate channel. Unlimited follow-ups (C) crosses into harassment regardless of value added."
      }
    ]
  },

  "04-1": {
    title: "Discovery questions that open people up",
    duration: "6 min read",
    content: `The sales call is where everything either comes together or falls apart. And the single biggest factor is your discovery — the questions you ask in the first 10-15 minutes. Bad discovery = guessing at their problems. Good discovery = them literally telling you how to close them.

## Why discovery is everything

When I closed the DHL deal, I spent 70% of the call asking questions and 30% presenting. Most people do the opposite. They jump into their pitch because they're nervous and talking feels productive. It's not. Listening is productive.

**The goal of discovery:** Get the prospect to articulate their problem, the impact of that problem, and what solving it would mean for them — in their own words. When they hear themselves say it, they sell themselves.

<!-- check:0 -->

## The discovery framework: SPIN

This isn't new — it's been proven for decades — but most people don't actually use it:

**S — Situation questions** (understand their current state)
- "Walk me through how you're currently handling [relevant area]."
- "What does your typical [process/workflow/sales cycle] look like?"
- "How many [clients/deals/projects] are you managing right now?"

Keep these to 2-3. Don't interrogate. You should know most of this from research.

**P — Problem questions** (identify pain)
- "What's the biggest bottleneck in that process?"
- "Where are you losing the most time/money/deals?"
- "What's not working as well as you'd like?"

This is where you shut up and let them talk. When they mention a problem, don't rush to solve it. Dig deeper.

**I — Implication questions** (amplify the pain)
- "What happens if that doesn't get fixed in the next 6 months?"
- "How much is that costing you monthly in [time/revenue/missed opportunities]?"
- "How is that affecting [their team/their customers/their growth]?"

These are the power questions. They force the prospect to confront the real cost of their problem. Most people never quantify their pain until someone asks them to.

**N — Need-payoff questions** (let them envision the solution)
- "If that problem was solved, what would that mean for your business?"
- "What would it be worth to have [specific outcome] in place?"
- "How would [specific improvement] change things for you?"

Now they're describing the outcome they want. And when you present your offer, you just match it to what they already told you.

<!-- check:1 -->

## The two rules of discovery

**Rule 1: Shut up after you ask.**

Ask the question, then be quiet. Count to 5 in your head if you have to. Most people can't handle silence and fill it with their pitch. Don't. Let them think. Let them talk. The best insights come after 3-4 seconds of silence.

**Rule 2: Follow the thread.**

When they say something interesting, don't jump to the next question on your list. Pull on that thread. "You mentioned you're losing deals because follow-up takes too long — tell me more about that." The conversation should feel organic, not like a checklist.

<!-- check:2 -->

## What to listen for

- **Specific numbers** — "We're losing about $15K a month from..." Gold.
- **Emotional language** — "I'm frustrated because..." They're ready to buy if you can solve it.
- **Priority signals** — "The biggest thing for us right now is..." This is what your pitch should address.
- **Timeline indicators** — "We need this fixed by Q2." Urgency means faster close.`,
    takeaways: [
      "Spend 70% of the call asking questions and 30% presenting — listening is the actual selling",
      "Use the SPIN framework: Situation, Problem, Implication, Need-payoff questions in order",
      "Shut up after you ask a question — let silence work for you, the best insights come after 3-4 seconds",
      "Listen for specific numbers, emotional language, priorities, and timelines — these tell you how to close"
    ],
    exercise: "Write out 3 Situation, 3 Problem, 3 Implication, and 3 Need-payoff questions tailored to your ICP. Practice them out loud — they should sound natural, not scripted. Record yourself asking them and listen back. Do you sound curious and conversational, or robotic?",
    checks: [
      {
        question: "How should you split talking vs. listening time on a sales call?",
        options: [
          "50/50 — equal conversation between you and the prospect",
          "70% asking questions and listening, 30% presenting your solution",
          "80% presenting your offer so they have all the information they need to decide"
        ],
        correctIndex: 1,
        explanation: "Spend 70% of the call asking questions and listening, only 30% presenting. Listening is the actual selling because the prospect tells you exactly how to position your solution. A 50/50 split (A) means you're talking too much during discovery. Presenting 80% of the time (C) is the classic mistake — you're guessing at their problems instead of hearing them."
      },
      {
        question: "In the SPIN framework, what is the purpose of Implication questions?",
        options: [
          "To understand what tools and processes the prospect currently uses",
          "To force the prospect to confront and quantify the real cost of their problem",
          "To help the prospect envision what solving the problem would look like"
        ],
        correctIndex: 1,
        explanation: "Implication questions amplify the pain by making the prospect calculate the downstream effects of their problem — lost revenue, wasted time, missed opportunities. Understanding tools and processes (A) is what Situation questions do. Envisioning the solution (C) is the job of Need-payoff questions. Implication questions sit between identifying the problem and presenting the fix."
      },
      {
        question: "According to the two rules of discovery, what should you do after asking a question?",
        options: [
          "Immediately suggest a solution to show you understand their problem",
          "Shut up and let them think — count to 5 in your head if you have to",
          "Ask a follow-up question right away to keep the momentum going"
        ],
        correctIndex: 1,
        explanation: "Rule 1 is shut up after you ask. Silence feels uncomfortable but it's where the best insights come from — prospects need 3-4 seconds to formulate their real answer. Jumping to a solution (A) kills the discovery process. Rapid-fire follow-ups (C) feels like an interrogation and doesn't give them space to think or elaborate."
      }
    ]
  },

  "04-2": {
    title: "Presenting your offer without pitching",
    duration: "5 min read",
    content: `Nobody wants to be pitched. The moment a prospect feels like they're being sold to, their guard goes up. The goal is to present your offer in a way that feels like a natural continuation of the conversation, not a scripted infomercial.

## The transition

After discovery, you have everything you need. The transition sounds like this:

*"Based on what you've shared, here's what I think we could do for you. Does that sound fair?"*

Wait for the yes. Now you have permission to present.

## The presentation framework: Problem-Solution-Proof-CTA

**1. Mirror their problem (30 seconds)**

Repeat back what they told you in their own words:

*"So right now, you're spending about 15 hours a week on manual outreach, your close rate is around 10%, and you're losing deals because follow-up is inconsistent. And you said that's costing you roughly $20K a month in missed revenue."*

This does two things: confirms you listened and re-activates the pain.

**2. Present the solution (60 seconds)**

Map your offer directly to their stated problems. Don't list features — connect outcomes to pain:

*"What we'd do is build an AI-powered outreach system that handles the initial prospecting and follow-up automatically. That eliminates those 15 hours of manual work. We'd also implement a pipeline system so no deal falls through the cracks, which should bring that close rate up significantly."*

Notice: no jargon, no feature lists, no "our proprietary platform leverages cutting-edge AI." Just plain language that connects your solution to their specific problem.

**3. Drop proof (30 seconds)**

One case study, one result, directly relevant:

*"We did something similar for a service business doing about your revenue. Within 60 days, their booked calls went from 5 to 22 per month, and their close rate hit 28%. I can share the details if you want."*

**4. The CTA (15 seconds)**

Don't over-complicate this:

*"I think we could get you similar results. Want me to walk you through what the engagement would look like?"*

<!-- check:0 -->

## What NOT to do during the presentation

- **Don't talk for more than 3 minutes straight.** Check in: "Does that make sense so far?" "Any questions on that?"
- **Don't show a slide deck** unless they specifically asked for one. Conversations close. Presentations don't.
- **Don't mention price yet.** Wait for them to ask, or wait until you've fully established the value.
- **Don't compare yourself to competitors.** If they bring it up, address it. Don't volunteer it.
- **Don't oversell.** State what you can do confidently. If you overpromise and underdeliver, you'll lose the client and the referral.

<!-- check:1 -->

## Reading the room

During your presentation, watch for:
- **Nodding and "mm-hmm"** — They're tracking. Keep going.
- **Leaning forward, taking notes** — They're interested. This is buying behavior.
- **Crossed arms, looking at phone** — You lost them. Stop and ask: "What are you thinking so far?"
- **Asking specific questions about implementation** — They're already imagining buying. Move toward the close.

The best presentations feel like a conversation, not a monologue. You're two people figuring out if this is a good fit. If it is, great. If it's not, say so. That honesty builds more trust than any pitch ever could.`,
    takeaways: [
      "Transition from discovery to presentation by mirroring their problem back in their own words",
      "Follow the Problem-Solution-Proof-CTA framework — keep the whole presentation under 3 minutes",
      "Map your solution to their specific pain points, not generic feature lists",
      "Watch body language and engagement — if you're losing them, stop presenting and ask what they're thinking"
    ],
    exercise: "Practice your presentation for your main offer. Set a timer for 3 minutes and deliver it out loud. Record it. Did you stay under 3 minutes? Did you connect your solution to a specific problem? Did you include proof? Trim the fat and do it again until it's tight.",
    checks: [
      {
        question: "What is the first step of the Problem-Solution-Proof-CTA presentation framework?",
        options: [
          "Open with your credentials and why you're qualified to help",
          "Mirror their problem back to them in their own words to confirm you listened and re-activate the pain",
          "Present your solution immediately since they already know their problem"
        ],
        correctIndex: 1,
        explanation: "Mirroring their problem first does two things: it confirms you actually listened during discovery, and it re-activates the emotional weight of the pain right before you present the fix. Leading with credentials (A) is about you, not them. Jumping to the solution (C) skips the critical step of making them feel their problem again before offering the answer."
      },
      {
        question: "What should you do if a prospect appears disengaged during your presentation — crossed arms, looking at phone?",
        options: [
          "Power through the presentation and circle back to their concerns at the end",
          "Stop presenting and ask: 'What are you thinking so far?'",
          "Speed up the presentation to recapture their attention before they fully check out"
        ],
        correctIndex: 1,
        explanation: "When you see disengagement, stop immediately and check in. Asking 'what are you thinking?' surfaces the disconnect before it kills the deal. Powering through (A) means presenting to someone who's already mentally checked out. Speeding up (C) makes it worse — if they're lost, going faster just increases confusion."
      }
    ]
  },

  "04-3": {
    title: "Handling objections: price, timing, trust",
    duration: "6 min read",
    content: `Objections are not rejections. They're requests for more information. The moment you internalize this, objections stop being scary and start being the clearest signal of what the prospect needs to hear before they say yes.

## The objection handling framework

For every objection, use this three-step process:

1. **Acknowledge** — Don't argue. Validate their concern. "That's a fair point."
2. **Clarify** — Make sure you understand the real objection. "Can you tell me more about that?"
3. **Respond** — Address the actual concern with proof, reframe, or information.

Now let's break down the three most common objections:

## Objection 1: "It's too expensive"

**What they're really saying:** "I don't see enough value to justify this price."

This is almost never about the money. It's about the perceived value-to-price ratio. Here's how to handle it:

**Response 1 — The ROI reframe:**
*"I hear you. Let me ask — you mentioned you're losing about $20K/month from [their stated problem]. This investment is $5K. If we even get you halfway to solving that, you're making $10K back in the first month. Does that math work for you?"*

**Response 2 — The comparison:**
*"What are you spending right now on [current solution/employee/DIY]? Because if that's costing you $3K/month and not working, spending $5K to fix it permanently actually saves you money long term."*

**Response 3 — The isolation:**
*"If price wasn't a factor, would this be something you'd want to move forward on?" If yes, now you know price is the ONLY objection and you can work with that (payment plans, smaller scope, etc.).*

<!-- check:0 -->

## Objection 2: "The timing isn't right"

**What they're really saying:** "This isn't urgent enough to act on now."

**Response 1 — Cost of delay:**
*"Totally understand. But let me ask — if you wait 3 months, what does that cost you? You're currently losing [their stated number] per month. That's [number x 3] before this even gets started."*

**Response 2 — The soft start:**
*"What if we started with [smaller scope or phase 1] so you get value now without a huge commitment? Then we expand once you see results."*

**Response 3 — The plant:**
*"No pressure at all. I'll follow up next month. In the meantime, [give them something valuable — an insight, a resource, a quick win]. That way when the timing is right, you already have context."*

## Objection 3: "I need to think about it" / "I need to talk to my partner"

**What they're really saying:** "Something is making me hesitant and I haven't told you what it is."

**Response 1 — Dig deeper:**
*"Absolutely, take your time. Can I ask — what specifically do you need to think about? Is it the price, the fit, or something else? I want to make sure I've given you everything you need to make a good decision."*

**Response 2 — The concern check:**
*"Is there anything I haven't addressed or any concern that's holding you back? I'd rather talk through it now so you're not going back and forth in your head."*

**Response 3 — For the partner objection:**
*"Makes sense. What do you think their main concern will be? I can put together a summary that addresses those points so you can present it to them clearly."*

<!-- check:1 -->

## Objections to NEVER argue with

- **"We already have a solution"** — Respect it. Ask: "How's that going for you?" If they're happy, move on. If they're not, you're back in the game.
- **"I had a bad experience with [similar service]"** — Acknowledge it. Ask what went wrong. Position yourself against that specific failure.
- **"I'm not the decision maker"** — Get the decision maker's info and ask if you can include them in the next conversation.

<!-- check:2 -->

## The key insight

The best objection handlers don't have clever scripts. They have genuine curiosity. When someone objects, they think: "Interesting — what's really going on here?" That curiosity leads to the right response every time.`,
    takeaways: [
      "Objections are requests for more information, not rejections — use the Acknowledge-Clarify-Respond framework",
      "Price objections are almost always value objections — reframe with ROI math, not discounts",
      "Timing objections need cost-of-delay math or a smaller starting point to create urgency",
      "'I need to think about it' means something unspoken is holding them back — dig deeper with genuine curiosity"
    ],
    exercise: "Write out the top 3 objections you hear (or expect to hear) for your offer. For each one, write a response using the frameworks above. Practice them out loud with a friend or record yourself. The goal is to sound natural and curious, not rehearsed.",
    checks: [
      {
        question: "When a prospect says 'it's too expensive,' what are they really saying?",
        options: [
          "They literally cannot afford it and you should offer a lower price",
          "They don't see enough value to justify the price — it's a value objection, not a money objection",
          "They're comparing your price to a competitor and want you to match it"
        ],
        correctIndex: 1,
        explanation: "Price objections are almost always value objections in disguise. The prospect hasn't connected your price to a return that makes it feel small. The fix is ROI reframing, not discounting. Assuming they can't afford it (A) leads to unnecessary discounting. Assuming competitor comparison (C) may be true sometimes but isn't the default — address value first."
      },
      {
        question: "What is the correct response when someone says 'I need to think about it'?",
        options: [
          "Say 'no problem' and follow up in a week with another pitch",
          "Dig deeper with genuine curiosity: 'What specifically do you need to think about? Is it the price, the fit, or something else?'",
          "Immediately offer a payment plan to remove the financial barrier"
        ],
        correctIndex: 1,
        explanation: "'I need to think about it' means something unspoken is creating hesitation. The right move is to gently uncover it: ask what specifically they need to think about. This often reveals the real objection you can address right then. Just saying 'no problem' (A) lets the real concern fester unaddressed. Offering a payment plan (C) assumes price is the issue when it might be trust, fit, or timing."
      },
      {
        question: "When a prospect says 'We already have a solution for this,' what should you do?",
        options: [
          "Argue that your solution is better and present a comparison chart",
          "Respect it and ask 'How's that going for you?' — if they're happy, move on; if not, you're back in the game",
          "Offer to work alongside their current solution at a reduced rate"
        ],
        correctIndex: 1,
        explanation: "This is an objection you never argue with. Asking how their current solution is working opens the door without being combative — if they're satisfied, gracefully exit; if they're not, they'll tell you exactly what's wrong and you can position against that. Arguing superiority (A) is confrontational and defensive. Undercutting on price (C) devalues your offer from the start."
      }
    ]
  },

  "04-4": {
    title: "The close — asking for the sale without being weird",
    duration: "5 min read",
    content: `Here's the truth nobody tells you: if you've done the discovery right, presented well, and handled objections, the close should feel like the most natural thing in the world. It's not some manipulation trick. It's just the logical next step.

## Why people freeze at the close

Fear. Fear of rejection, fear of being pushy, fear of awkward silence. But here's the reframe: **if you genuinely believe your solution helps them, NOT asking for the sale is doing them a disservice.** You'd be letting them walk away with their problem because you felt uncomfortable for 10 seconds.

## The five closes that work

**1. The Assumptive Close**

Act as if the decision has already been made:

*"Awesome, sounds like this is a great fit. Let me send over the agreement and we can get started next week. Does Monday or Wednesday work better for a kickoff call?"*

Use this when: they've been nodding, asking implementation questions, and haven't raised objections.

**2. The Summary Close**

Recap everything and ask for the commitment:

*"So just to recap — we're going to [solution 1], [solution 2], and [solution 3]. You'll have [specific deliverables] within [timeline], and based on what we've seen with [similar client], you should see [expected result]. Ready to move forward?"*

Use this when: the conversation has been long and you need to re-ground them in the value.

**3. The Choice Close**

Give them two options (both result in a sale):

*"We can go with the full build-out which includes [everything], or we can start with phase 1 which covers [core deliverables] and expand from there. Which feels better for you?"*

Use this when: they seem interested but overwhelmed by the full scope.

**4. The Urgency Close**

Create real, honest urgency:

*"I should mention — I only take on 3 clients per month because of the hands-on nature of this work, and I have 2 spots filled already. If this is something you want to do, I'd grab that last spot. But no pressure — only if it makes sense."*

Use this when: the urgency is real. **Never fake scarcity.** People see through it and you lose trust instantly.

**5. The Direct Close**

Sometimes, just ask:

*"Do you want to work together?"*

That's it. No fancy technique. Direct, simple, honest. Use this when the vibe is good and you've built real rapport.

<!-- check:0 -->

## After you ask: shut up

This is the hardest part. After you ask the closing question, **stop talking.** The first person to speak loses negotiating position. Let them process. Let the silence sit. 5 seconds of silence feels like an eternity, but it's where decisions happen.

<!-- check:1 -->

## If they say yes

- Confirm the details immediately (scope, price, timeline)
- Send the agreement/invoice within 1 hour (speed matters — buyer's remorse is real)
- Set the kickoff call before you hang up
- Thank them genuinely — they just trusted you with their money

## If they say no

- Thank them for their time
- Ask: "Can I ask what the deciding factor was?" (This is gold for improving)
- Leave the door open: "If anything changes, I'm here."
- Follow up in 30 days with value, not a pitch

<!-- check:2 -->

## The close isn't a moment — it's the whole conversation

If you've been genuine, asked great questions, listened well, and presented a real solution to a real problem, the close is just the natural conclusion. You're not "closing" anyone. You're giving them a clear path to the outcome they already told you they want.`,
    takeaways: [
      "If your discovery and presentation were solid, the close is just the logical next step — not a manipulation",
      "Use the right close for the moment: assumptive, summary, choice, urgency, or direct",
      "After asking the closing question, stop talking — silence is where decisions happen",
      "Send the agreement within 1 hour of a yes — speed prevents buyer's remorse"
    ],
    exercise: "Write out your closing script using 2-3 of the closes above. Practice the transition from presentation to close until it feels seamless. Then practice sitting in silence for 10 seconds after asking — time yourself. Get comfortable with the discomfort.",
    checks: [
      {
        question: "When is the Assumptive Close the right choice?",
        options: [
          "When the prospect has been hesitant and you need to create urgency",
          "When they've been nodding, asking implementation questions, and haven't raised objections",
          "When you need to overcome a price objection by assuming they'll pay"
        ],
        correctIndex: 1,
        explanation: "The Assumptive Close works when buying signals are strong — nodding, asking 'how does onboarding work,' no unresolved objections. You act as if the decision is already made because their behavior suggests it is. Using it on hesitant prospects (A) feels pushy and ignores their signals. It's not an objection-handling tool (C) — it's for when objections are already resolved."
      },
      {
        question: "What should you do immediately after asking a closing question?",
        options: [
          "Reiterate the top three benefits to reinforce why they should say yes",
          "Stop talking completely and let silence do the work — the first person to speak loses leverage",
          "Offer a discount if they commit right now to create urgency"
        ],
        correctIndex: 1,
        explanation: "Silence after the close is the hardest and most important skill. The first person to speak loses negotiating position. Let 5 seconds of uncomfortable silence sit while they process. Reiterating benefits (A) signals insecurity and undermines the confidence of your ask. Offering a discount (C) devalues your offer at the exact moment you should be projecting certainty."
      },
      {
        question: "If the prospect says yes, what is the most important next step?",
        options: [
          "Wait a few days before sending the agreement so you don't seem too eager",
          "Send the agreement or invoice within 1 hour — speed prevents buyer's remorse",
          "Ask them to refer three other prospects before sending the contract"
        ],
        correctIndex: 1,
        explanation: "Speed matters after a yes because buyer's remorse is real. Send the agreement within 1 hour, set the kickoff call before you hang up, and lock in the commitment while their conviction is highest. Waiting a few days (A) gives doubt time to creep in. Asking for referrals before securing the contract (C) is premature and risks losing the deal over an extra ask."
      }
    ]
  },

  "05-1": {
    title: "Setting up a CRM you'll actually use",
    duration: "5 min read",
    content: `A CRM (Customer Relationship Management tool) is where your sales process lives. Without one, you're tracking deals in your head, forgetting follow-ups, and losing money you already earned. But most CRMs are bloated, confusing, and over-engineered. Here's how to set one up that you'll actually use daily.

## Why most people fail with CRMs

They pick something too complex, spend a week setting it up, and then never open it again because it feels like homework. Don't be that person.

## My recommendation: start simple

**If you're doing under $20K/month:** Use Notion, Airtable, or even Google Sheets. Seriously. A fancy CRM doesn't close deals — your process does. Start with a system you'll actually maintain.

**If you're doing $20K-$100K/month:** HubSpot free tier or Pipedrive. Both are intuitive, have mobile apps, and the free/starter plans are enough.

**If you're doing $100K+/month:** That's when Salesforce, Close.com, or HubSpot paid makes sense. But you probably already have a CRM by then.

<!-- check:0 -->

## The minimum viable CRM

Regardless of tool, you need these fields for every contact/deal:

**Contact info:**
- Name
- Email
- Phone
- Company
- Role/Title
- Source (how they found you / how you found them)

**Deal info:**
- Deal name (what you're selling them)
- Value (dollar amount)
- Stage (we'll cover stages next lesson)
- Next action (what you need to do next)
- Next action date (when)
- Notes (key info from conversations)

That's it to start. You can add fields later. If your CRM setup takes more than 30 minutes, you're overthinking it.

## The daily CRM routine

This is what makes a CRM work — not the tool, the habit:

**Every morning (5 minutes):**
1. Open your CRM
2. Check: what follow-ups are due today?
3. Check: what meetings do I have today?
4. Check: are there any deals that have been sitting in the same stage for too long?

**After every call/meeting (2 minutes):**
1. Update the deal stage if it changed
2. Log key notes (what did they say? what concerns do they have?)
3. Set the next action and date

**End of week (10 minutes):**
1. Review all active deals
2. Move dead deals to lost (be honest with yourself)
3. Count your pipeline value
4. Plan next week's follow-ups

<!-- check:1 -->

## The non-negotiable rule

**If it's not in the CRM, it didn't happen.** Every conversation, every email, every follow-up gets logged. Not because you love data entry, but because your future self needs this information to close the deal 3 weeks from now when you've forgotten the details.

When I started following this rule, my close rate went up 30%. Not because I got better at selling — because I stopped forgetting to follow up.

<!-- check:2 -->

## Quick setup guide

1. Pick your tool (right now — don't research for 3 days)
2. Create your contact and deal fields (use the list above)
3. Add your current leads and deals
4. Set a recurring daily alarm: "Check CRM" at 8 AM
5. Commit to the routine for 30 days straight

After 30 days, the CRM becomes as natural as checking your phone. Before that, you need the alarm.`,
    takeaways: [
      "Start with the simplest tool you'll actually use — Notion, Sheets, or Airtable beats a fancy CRM you never open",
      "Every deal needs: value, stage, next action, next action date, and notes — nothing else matters at the start",
      "Build the daily habit: 5 minutes every morning, 2 minutes after every call, 10-minute weekly review",
      "Non-negotiable rule: if it's not in the CRM, it didn't happen — logging follow-ups alone increased my close rate 30%"
    ],
    exercise: "Set up your CRM right now. Pick a tool (Notion, Sheets, Airtable, or HubSpot free), create the fields listed above, and add every current lead and deal you have. Set a daily alarm for 8 AM that says 'Check CRM.' Do not overcomplicate this.",
    checks: [
      {
        question: "What CRM does the course recommend if you're doing under $20K/month in revenue?",
        options: [
          "Salesforce, because you need a professional-grade system from the start",
          "Notion, Airtable, or Google Sheets — simple tools you'll actually maintain daily",
          "No CRM — just use your email inbox and calendar until you hit $20K/month"
        ],
        correctIndex: 1,
        explanation: "At under $20K/month, the tool doesn't matter — the habit does. Notion, Sheets, or Airtable are simple enough that you'll actually use them daily, which is what closes deals. Salesforce (A) is overkill and will overwhelm you into not using it. No CRM at all (C) means you're tracking deals in your head, which guarantees missed follow-ups."
      },
      {
        question: "How long should the after-call CRM update routine take?",
        options: [
          "15-20 minutes to thoroughly document every detail of the conversation",
          "2 minutes: update stage, log key notes, set next action and date",
          "No update needed until the weekly Friday review"
        ],
        correctIndex: 1,
        explanation: "Two minutes is all you need: update the deal stage if it changed, log the key points from the conversation, and set the next action with a date. Keep it lean. 15-20 minutes (A) turns CRM updates into a chore you'll eventually skip. Waiting until Friday (C) means five days of lost context — you'll forget critical details by then."
      },
      {
        question: "What is the non-negotiable CRM rule?",
        options: [
          "Only log deals worth over $1,000 to keep the CRM clean",
          "If it's not in the CRM, it didn't happen — log every conversation, email, and follow-up",
          "Update the CRM weekly during a dedicated Friday review session"
        ],
        correctIndex: 1,
        explanation: "Every interaction gets logged immediately because your future self needs this information to close deals weeks later. Following this rule alone increased close rates 30%. Filtering by deal size (A) loses data on smaller deals that could grow or generate referrals. Weekly updates (C) mean you're operating blind for five days between each update."
      }
    ]
  },

  "05-2": {
    title: "Pipeline stages and deal management",
    duration: "5 min read",
    content: `Your pipeline is a visual map of where every deal stands. Without clear stages, deals just sit in a vague pile of "maybe." Defined stages force you to know exactly what needs to happen next for every single opportunity.

## The 7-stage pipeline

Here are the stages I use. Adapt as needed, but don't overcomplicate:

**Stage 1: Lead**
They're on your list. You haven't contacted them yet. This is your raw prospect pool.
- *Action:* Research and prepare outreach.

**Stage 2: Contacted**
You've sent the first outreach (email, DM, call). No response yet.
- *Action:* Follow up per your sequence.

**Stage 3: Engaged**
They responded. You're in a conversation. Maybe exchanging messages or emails.
- *Action:* Qualify them and book a call.

**Stage 4: Meeting Booked**
Call is on the calendar. This is where your pipeline starts getting real.
- *Action:* Prepare for the call (research, talking points, presentation).

**Stage 5: Proposal Sent**
You've had the call, they're interested, and you've sent a formal proposal or agreement.
- *Action:* Follow up on proposal. Address any remaining objections.

**Stage 6: Closed Won**
They said yes and paid (or signed). This is money in the bank.
- *Action:* Onboard, deliver, and over-deliver.

**Stage 7: Closed Lost**
They said no or went silent after multiple follow-ups.
- *Action:* Log why you lost it. Follow up in 60-90 days.

## Managing your pipeline

**The pipeline review (weekly, 15 minutes):**

Go through every deal in stages 2-5 and ask:

1. **Is this deal still alive?** If they've been unresponsive for 3+ weeks despite follow-up, move to lost.
2. **What's the next action?** If you can't name a specific next step, the deal is stalling.
3. **What's the expected close date?** If it keeps pushing back, there's a problem you're not addressing.
4. **Am I talking to the decision maker?** If not, you need to be.

<!-- check:0 -->

## Pipeline math

Understanding your pipeline math tells you exactly how many leads you need:

Let's say your goal is $10K/month and your average deal is $2,500:
- You need 4 closed deals per month
- If your close rate from Meeting Booked to Won is 25%, you need 16 meetings
- If your booking rate from Contacted to Meeting is 10%, you need 160 contacts
- If you contact 50 people per week, that's about 3 weeks of outreach for a month of pipeline

**Know your numbers.** When you know your conversion rates at each stage, you can predict revenue and identify bottlenecks.

<!-- check:1 -->

## Common pipeline mistakes

**1. Too many deals in "Contacted" and nothing in "Meeting Booked"**
Your outreach isn't working. Fix your messaging or targeting.

**2. Lots of meetings but few proposals**
Your discovery is weak or your offer doesn't match the market. Revisit Module 1.

**3. Proposals sent but few closes**
Your pricing, proposal format, or follow-up needs work. You're losing them after you've done the hard work.

**4. Deals sitting in the same stage for weeks**
You're not following up or there's an objection you haven't uncovered. Pick up the phone.

<!-- check:2 -->

## The weighted pipeline

Not all deals are equal. A $10K deal at the Proposal stage is more valuable than a $10K deal at the Contacted stage:

- Lead: 5% weighted value
- Contacted: 10%
- Engaged: 20%
- Meeting Booked: 40%
- Proposal Sent: 60%

A $10K deal at Proposal = $6K weighted pipeline value. Use weighted values to get a realistic forecast of what you'll actually close this month.`,
    takeaways: [
      "Use 7 clear stages: Lead, Contacted, Engaged, Meeting Booked, Proposal Sent, Won, Lost",
      "Do a weekly pipeline review: is it alive, what's next, when does it close, am I talking to the decision maker?",
      "Know your pipeline math — work backward from your revenue goal to know exactly how many leads you need",
      "Use weighted pipeline values for realistic revenue forecasting (Proposal = 60%, Meeting = 40%, etc.)"
    ],
    exercise: "Map all your current opportunities into the 7 pipeline stages. Calculate your pipeline math based on your revenue goal. Identify the bottleneck — which stage has the biggest drop-off? That's where you focus this week.",
    checks: [
      {
        question: "During the weekly pipeline review, which question should you ask about every active deal?",
        options: [
          "Has the prospect visited our website this week?",
          "What is the specific next action and when is it happening?",
          "Have we sent them enough marketing materials?"
        ],
        correctIndex: 1,
        explanation: "If you can't name a specific next step for a deal, it's stalling. The weekly review forces clarity: is it alive, what's next, when does it close, and am I talking to the decision maker? Website visits (A) are vanity metrics that don't tell you deal status. Sending more marketing materials (C) isn't a pipeline management concern — it's a marketing activity."
      },
      {
        question: "If your goal is $10K/month with $2,500 average deals and a 25% close rate from meetings, how many meetings do you need per month?",
        options: [
          "4 meetings — one for each deal you need to close",
          "16 meetings — you need 4 closed deals and only 25% of meetings close",
          "40 meetings — always assume a 10% close rate to be safe"
        ],
        correctIndex: 1,
        explanation: "Pipeline math: $10K goal / $2,500 per deal = 4 deals needed. At a 25% close rate, you need 4 / 0.25 = 16 meetings. Assuming one meeting per deal (A) ignores the reality that most meetings don't result in closed deals. Assuming 10% (C) is overly conservative when your actual close rate is 25% — use real numbers, not arbitrary safety margins."
      },
      {
        question: "If lots of proposals are sent but few deals close, what does this indicate?",
        options: [
          "Your outreach messaging needs improvement to attract better-qualified leads",
          "Your pricing, proposal format, or post-proposal follow-up needs work — you're losing deals after doing the hard work",
          "You need more volume at the top of the funnel to compensate for the low close rate"
        ],
        correctIndex: 1,
        explanation: "Proposals sent but not closing means the problem is in the final conversion step — pricing may be off, the proposal might be confusing, or you're not following up effectively. You've already done the hard work of getting meetings and presenting. Outreach messaging (A) addresses a top-of-funnel problem, not proposal conversion. More volume (C) doesn't fix a broken close process."
      }
    ]
  },

  "05-3": {
    title: "Automating follow-up with AI",
    duration: "6 min read",
    content: `Manual follow-up is where deals go to die. You get busy, forget to send that email, and a warm lead goes cold. AI-powered follow-up automation ensures that no deal ever falls through the cracks — while still sounding personal and relevant.

## What to automate (and what not to)

**Automate:**
- Initial follow-up sequences (the 5-touch system from Module 3)
- Meeting reminders and confirmations
- Post-meeting recap emails
- Check-in emails for existing clients
- Re-engagement sequences for lost deals (at 60-90 days)

**Don't automate:**
- First-time discovery calls (always personal)
- Objection handling (requires human judgment)
- Proposal delivery (this should feel personal)
- Anything involving negotiation or custom pricing

## The AI follow-up system

**Layer 1: Automated email sequences**

Set these up in your cold email tool (Instantly, Smartlead, etc.) or even with Google Workspace + a scheduling plugin:

- **Post-no-reply sequence:** Triggers automatically when someone doesn't respond to your first email. Sends your 5-touch follow-up sequence at the intervals you defined.
- **Post-meeting no-response:** If someone had a call but didn't respond to the proposal in 3 days, auto-send: *"Hey [Name], just wanted to make sure you got the proposal. Any questions I can answer?"*
- **Closed-lost re-engagement:** 60 days after a deal goes to lost, auto-send: *"Hey [Name], we connected a couple months back about [topic]. Things have evolved on our end — [new result or feature]. Worth revisiting?"*

**Layer 2: AI-generated follow-ups**

For deals in active conversation where automation feels too robotic, use AI to draft follow-ups:

*Prompt: "Write a follow-up email to [Name] who I had a call with on [date]. Key points from the call: [notes]. They were interested but wanted to think about it. Their main concern was [objection]. The email should gently address the concern, add one new piece of value, and ask if they're ready to move forward. Keep it under 80 words."*

Review it, edit it, send it. 2 minutes per follow-up instead of 10 minutes of staring at a blank email.

**Layer 3: AI-powered CRM reminders**

Most CRMs have task/reminder features. Set rules:

- If a deal is in "Proposal Sent" for more than 5 days with no activity → create a task: "Follow up on proposal"
- If a deal is in "Engaged" for more than 7 days with no meeting booked → create a task: "Book the meeting or qualify out"
- If a closed-won client hasn't been contacted in 30 days → create a task: "Client check-in"

**Layer 4: Meeting prep automation**

Use AI to prepare for calls automatically:

*Prompt: "I have a sales call tomorrow with [Name], [Role] at [Company]. Here's what I know: [paste research + previous conversation notes]. Create a call prep sheet with: 3 discovery questions tailored to them, their likely objections, my proof points to use, and a proposed next step."*

This takes 2 minutes and makes you 10x more prepared than winging it.

<!-- check:0 -->

## The system in action (weekly time investment)

- **Monday:** Review CRM tasks generated by automation rules (10 min)
- **Tuesday-Thursday:** Send AI-drafted follow-ups for active deals (15 min/day)
- **Friday:** Review what worked this week, adjust sequences (15 min)

**Total time: under 2 hours per week** for a fully functional follow-up system that handles 50+ active deals without letting any slip.

<!-- check:1 -->

## The 3 automations to set up TODAY

If you do nothing else, set up these three:

1. **Post-first-email follow-up sequence** (5 emails, automated send)
2. **Post-meeting no-response email** (triggers after 3 days)
3. **Daily CRM reminder check** (takes 5 minutes every morning)

These three automations alone will recover 20-30% of deals that would otherwise die from neglect.`,
    takeaways: [
      "Automate sequences and reminders — never automate discovery calls, objection handling, or proposals",
      "Use AI to draft follow-ups in 2 minutes instead of 10 — always review before sending",
      "Set CRM rules to auto-create tasks when deals stall in any stage too long",
      "Three automations to set up immediately: post-email sequence, post-meeting reminder, daily CRM check"
    ],
    exercise: "Set up the three automations listed above. If you're using a cold email tool, build the post-first-email sequence. Set up a post-meeting reminder template. And create a daily CRM check habit (calendar alarm + 5 minutes). Document your setup so you can replicate it later.",
    checks: [
      {
        question: "Which of the following should you NOT automate in your sales process?",
        options: [
          "Post-meeting recap emails and meeting reminders",
          "First-time discovery calls and objection handling — these require human judgment",
          "Check-in emails for existing clients and re-engagement sequences"
        ],
        correctIndex: 1,
        explanation: "Discovery calls and objection handling require real-time human judgment — reading tone, adapting to new information, and building trust. These can't be scripted or automated effectively. Post-meeting recaps (A) are great candidates for automation since they follow a predictable format. Client check-ins and re-engagement (C) are routine touches that work well on autopilot."
      },
      {
        question: "What should an AI-powered CRM rule do when a deal has been in 'Proposal Sent' for more than 5 days with no activity?",
        options: [
          "Automatically send a follow-up email to the prospect",
          "Create a task for you to follow up on the proposal personally",
          "Move the deal to 'Closed Lost' since they're probably not interested"
        ],
        correctIndex: 1,
        explanation: "The CRM rule should create a task for human follow-up, not send an automated message. Proposal follow-up needs a personal touch — maybe they have questions, maybe timing changed. Auto-sending an email (A) risks sounding robotic at a critical deal stage. Moving to Closed Lost after only 5 days (C) is premature — many deals take a week or more to process proposals."
      }
    ]
  },

  "05-4": {
    title: "Metrics: what to track and why",
    duration: "5 min read",
    content: `What gets measured gets improved. What gets ignored gets worse. I'm not going to overwhelm you with 30 KPIs. Here are the metrics that actually matter at our level, and exactly how to use them.

## The 8 metrics that matter

**1. Outreach volume**
How many cold emails, DMs, and calls are you sending per week?
- **Target:** 50-100 outreaches per week minimum
- **Why it matters:** This is your top-of-funnel fuel. No outreach = no pipeline = no revenue.

**2. Response rate**
What percentage of your outreach gets a reply?
- **Target:** 5-10% for cold email, 15-30% for warm DM
- **Why it matters:** Low response rate means your messaging or targeting is off. Don't increase volume until you fix the rate.

**3. Meeting booking rate**
What percentage of conversations turn into scheduled calls?
- **Target:** 30-50% of engaged prospects should book a call
- **Why it matters:** If people are responding but not booking, your qualifying or CTA is weak.

**4. Show rate**
What percentage of booked meetings actually happen?
- **Target:** 80%+
- **Why it matters:** Below 80% means you're not confirming meetings, your calendar is confusing, or the lead wasn't qualified.

**To improve show rate:**
- Send a confirmation email immediately after booking
- Send a reminder 24 hours before
- Send a reminder 1 hour before
- Make it easy to reschedule (don't make them email you — include a link)

**5. Close rate**
What percentage of meetings turn into paid clients?
- **Target:** 20-30% is solid. 40%+ means you're qualifying well.
- **Why it matters:** This is the core metric. If you're taking good meetings and not closing, your sales skills need work (re-study Module 4).

**6. Average deal value**
What's the average dollar amount per closed deal?
- **Why it matters:** Tells you if you need more deals or bigger deals to hit your revenue goal. Sometimes raising your price by 20% is easier than getting 20% more clients.

**7. Sales cycle length**
How many days from first contact to closed deal?
- **Target:** Depends on your price point. Under $2K = 1-2 weeks. $2K-$10K = 2-4 weeks. $10K+ = 4-8 weeks.
- **Why it matters:** If your cycle is too long, deals die of natural causes. Identify where deals stall and fix that stage.

**8. Pipeline value**
What's the total dollar amount of all active deals (use weighted values from last lesson)?
- **Target:** 3-5x your monthly revenue goal
- **Why it matters:** If your pipeline is only 1x your goal, you're one bad month from zero. You need buffer.

<!-- check:0 -->

## The weekly scorecard

Create a simple tracker (spreadsheet is fine) and update weekly:

| Metric | This Week | Last Week | Target |
|--------|-----------|-----------|--------|
| Outreach sent | | | 75 |
| Response rate | | | 8% |
| Meetings booked | | | 5 |
| Show rate | | | 85% |
| Deals closed | | | 1-2 |
| Revenue closed | | | $5K |
| Pipeline value | | | $25K |

Fill this in every Friday. Takes 5 minutes. Over a month, you'll see exactly where your process breaks down.

## How to use the data

- **Low outreach volume** → You're not putting in the work. Increase volume before optimizing anything else.
- **Low response rate + high volume** → Your targeting or messaging is off. Revisit ICP and email frameworks.
- **High response rate + low meetings** → Your qualifying or CTA needs work. Are you asking for the call?
- **High meetings + low close rate** → Your discovery or presentation is weak. Go back to Module 4.
- **Everything looks good but revenue is low** → Your average deal value is too small. Raise prices or target bigger accounts.

<!-- check:1 -->

## This is where completers separate themselves

You just finished the Sales Systems course. If you did every exercise, you now have: a defined ICP, a lead list, outreach frameworks, follow-up sequences, a CRM, a pipeline, and a metrics system. That's more infrastructure than 90% of salespeople have.

**Here's what happens next:** People who complete this course with all exercises done get assigned to real paid projects through our network. You'll work actual deals — not practice scenarios. And the top performers get a shot at joining my sales team where we close deals for clients together.

This isn't hypothetical. I need people who can execute. If you can, there's money and opportunity waiting. If you can't — you'll know, because the metrics don't lie.

Ship the exercises. Track the numbers. Let's work.`,
    takeaways: [
      "Track 8 key metrics: outreach volume, response rate, booking rate, show rate, close rate, deal value, cycle length, pipeline value",
      "Fill in a weekly scorecard every Friday — 5 minutes that tells you exactly where your process breaks down",
      "Use the diagnostic framework: low volume = do more, low response = fix messaging, low close = fix sales skills",
      "Course completers get assigned real paid projects and a shot at joining Jordan's sales team — ship the exercises"
    ],
    exercise: "Build your weekly scorecard using the template above. Fill in this week's numbers (even if most are zero — that's your baseline). Calculate your pipeline math: based on your current numbers, how many outreaches per week do you need to hit your revenue goal? Write that number down and commit to it starting Monday.",
    checks: [
      {
        question: "Your show rate (booked meetings that actually happen) is below 80%. What is the most likely cause?",
        options: [
          "Your leads aren't qualified enough and don't actually want to meet",
          "You're not confirming meetings — send a confirmation immediately, a reminder 24 hours before, and another 1 hour before",
          "Your pricing is too high and they're ghosting instead of canceling"
        ],
        correctIndex: 1,
        explanation: "Low show rates are almost always a confirmation problem. The fix is mechanical: send a confirmation email immediately after booking, a reminder 24 hours before, and another reminder 1 hour before. Include an easy reschedule link. Unqualified leads (A) might cause low booking rates, but if they booked, they were interested. Pricing (C) usually isn't discussed before the meeting happens."
      },
      {
        question: "If your response rate is high but you're not booking meetings, what does the diagnostic framework tell you to fix?",
        options: [
          "Increase your outreach volume to generate more raw responses",
          "Your call-to-action or booking process is broken — people are engaging but not converting to calls",
          "Lower your prices so prospects see enough value to take the meeting"
        ],
        correctIndex: 1,
        explanation: "High response rate means your messaging resonates and the right people are engaging. Low meeting booking means the conversion step is failing — your CTA might be weak, your scheduling link might be confusing, or you're not effectively transitioning from conversation to call. More volume (A) won't fix a conversion problem. Pricing (C) is rarely the barrier to booking a first call."
      }
    ]
  },
  "06-1": {
    title: "Writing job descriptions that attract A-players",
    duration: "5 min read",
    content: `Most job descriptions are written by people who have never done the role. They copy-paste from Indeed, throw in a list of "nice to haves," and wonder why they get 200 applications from people who can't do the work.

## The real purpose of a job description

A job description isn't a wish list. It's a **filter**. The goal is to attract the right 5 people and repel the wrong 195. Every sentence should either excite an A-player or scare off a C-player.

**Stop writing JDs like HR wrote them.** Write them like someone who actually does the work.

## The framework I use

1. **Lead with the mission, not the company bio.** Nobody cares that you were "founded in 2019 with a passion for innovation." Tell them what they'll be building and why it matters.
2. **Describe outcomes, not tasks.** Instead of "manage social media accounts," write "grow our audience from 5K to 50K in 6 months." A-players want to know what winning looks like.
3. **Be honest about the hard parts.** "This role is fast-paced" means nothing. "You'll be managing 4 client accounts simultaneously with weekly deliverables and zero hand-holding" is real. The right person reads that and gets excited.
4. **List 5 requirements max.** Every requirement beyond 5 cuts your applicant pool in half. Only list what's truly non-negotiable.
5. **Include a filter question.** At the bottom, add: "In your application, tell me about a time you built something from scratch with no playbook." Anyone who doesn't answer gets auto-rejected.

<!-- check:0 -->

## What to include

- **Role title** (keep it standard so people can find it)
- **What you'll own** (3-4 key outcomes)
- **What success looks like at 30/60/90 days**
- **Non-negotiable skills** (5 max)
- **Compensation range** (yes, include it - A-players don't apply to mystery pay)
- **Filter question**

<!-- check:1 -->

## What to cut

- "Fast-paced environment" (meaningless)
- "Rockstar/ninja/guru" (cringe)
- 15-bullet requirement lists (nobody has all of those)
- "Duties as assigned" (red flag for candidates)`,
    takeaways: [
      "Job descriptions are filters, not wish lists - write to attract 5 right people and repel 195 wrong ones",
      "Describe outcomes and what winning looks like, not task lists",
      "Cap requirements at 5 non-negotiables and always include compensation range",
      "Add a filter question to auto-screen lazy applicants"
    ],
    exercise: "Rewrite one of your current job descriptions (or create one for your next hire) using this framework. Lead with mission, describe 3-4 outcomes, list 5 max requirements, include comp range, and add a filter question. Compare it side-by-side with the original and note what changed.",
    checks: [
      {
        question: "According to the JD framework, how many non-negotiable requirements should you list?",
        options: [
          "As many as possible so candidates self-select accurately",
          "5 maximum — every requirement beyond 5 cuts your applicant pool in half",
          "10-15 to be thorough and cover both required and nice-to-have skills"
        ],
        correctIndex: 1,
        explanation: "Cap at 5 non-negotiable requirements. Each additional requirement beyond 5 cuts your applicant pool in half, filtering out people who might excel at the job but don't tick every box. Listing as many as possible (A) creates a wall of text that repels strong generalists. 10-15 requirements (C) ensures only unicorns apply — and unicorns don't need your job posting."
      },
      {
        question: "Why should a job description describe outcomes instead of tasks?",
        options: [
          "Outcomes sound more professional and attract higher-caliber candidates",
          "A-players want to know what winning looks like — 'grow audience from 5K to 50K' is more compelling than 'manage social media accounts'",
          "Listing tasks creates legal liability if the role changes"
        ],
        correctIndex: 1,
        explanation: "Outcome-based descriptions attract A-players because they think in terms of results, not activity. 'Grow audience from 5K to 50K in 6 months' gives them a target to get excited about. Task lists (A) might sound professional but they attract task-followers, not result-drivers. Legal concerns (C) aren't the primary reason — it's about attracting the right mindset."
      }
    ]
  },
  "06-2": {
    title: "Screening, interviews, and testing candidates",
    duration: "6 min read",
    content: `I've been burned by people who interview like A-players and perform like C-players. Resumes lie. Interviews are performances. The only thing that doesn't lie is the work. Here's how I screen now.

## Phase 1: Application screening (5 minutes per person)

Before you look at a single resume, check:
1. **Did they answer the filter question?** No answer = instant reject. This alone eliminates 60% of applicants.
2. **Did they customize anything?** Generic cover letter = they applied to 50 jobs today. Skip.
3. **Do they have proof of work?** Portfolio, GitHub, case studies, anything. No proof = risky.

**Spend 5 minutes max per application.** If you're spending more, your JD isn't filtering well enough.

<!-- check:0 -->

## Phase 2: The async test (before any call)

Before I get on a single call, I send a paid test project. This is non-negotiable.

**Why paid:** Respect their time. You want their best work, not a rushed freebie. I pay $50-200 depending on the role.

**The test should:**
- Mirror actual work they'd do in the role
- Take 2-4 hours max
- Have a clear deliverable and deadline
- Be something you can objectively evaluate

**Examples:**
- Designer: "Redesign this landing page section. Here's the brief and brand guidelines."
- Developer: "Build this small feature. Here's the repo and specs."
- Writer: "Write 2 blog posts on these topics. Here's our style guide."
- Ops person: "Here's a messy process. Document it as an SOP in Notion."

This single step has saved me from more bad hires than everything else combined.

<!-- check:1 -->

## Phase 3: The interview (30 minutes, structured)

Only interview people who passed the test. Your interview should answer three questions:

1. **Can they do the work?** (You already know this from the test.)
2. **Will they do the work consistently?** Ask about their systems, routines, how they handle deadlines.
3. **Do they communicate well?** Pay attention to how clearly they explain their test project decisions.

**Questions I always ask:**
- "Walk me through how you approached the test project."
- "Tell me about the last time you dropped the ball. What happened?"
- "What does your ideal work week look like?"
- "What would make you quit this role in 3 months?"

**Red flags:**
- Can't explain their own work clearly
- Blames others for every failure
- Has no questions about the role or company
- Gives rehearsed answers to everything

<!-- check:2 -->

## Phase 4: Reference check (10 minutes)

Call one reference. Ask one question: **"Would you hire this person again?"** The pause before the answer tells you everything. A fast, enthusiastic "absolutely" is a green light. Anything else is a red flag.`,
    takeaways: [
      "Always use a paid async test before any interview - it reveals what resumes and calls can't",
      "The filter question in your application eliminates 60% of unqualified candidates instantly",
      "Structure interviews around three questions: can they, will they, and do they communicate well",
      "One reference check question matters: 'Would you hire this person again?'"
    ],
    exercise: "Design a paid test project for your next hire. Define: (1) the deliverable, (2) the brief/instructions, (3) the deadline, (4) the pay amount, and (5) your evaluation criteria (what does a pass vs. fail look like). Keep the test under 4 hours of work.",
    checks: [
      {
        question: "What single screening step eliminates 60% of unqualified applicants?",
        options: [
          "Requiring a minimum of 5 years experience in the role",
          "Including a filter question in the application that most people skip or ignore",
          "Running an automated skills assessment test"
        ],
        correctIndex: 1,
        explanation: "The filter question (like 'tell me about a time you built something from scratch with no playbook') eliminates 60% of applicants who don't bother answering it. It costs you nothing and instantly separates attentive candidates from mass-appliers. Requiring 5 years experience (A) is an arbitrary filter that eliminates talented people. Automated skills tests (C) add friction before you've even screened for basic effort."
      },
      {
        question: "Why should the async test project be paid?",
        options: [
          "It's legally required to pay candidates for any work they do during the hiring process",
          "Paying respects their time and incentivizes their best work — you want real output, not a rushed freebie",
          "It lets you claim the work product as company IP regardless of whether you hire them"
        ],
        correctIndex: 1,
        explanation: "Paying for the test shows you respect candidates' time and gets you their best work. You're asking for 2-4 hours of real effort — that deserves compensation. It's not a legal requirement in most places (A), but it's the right thing to do and attracts better candidates. IP ownership (C) isn't the motivation — it's about getting authentic work samples."
      },
      {
        question: "What is the single most revealing reference check question?",
        options: [
          "Can you confirm the dates this person worked at your company?",
          "Would you hire this person again? — and the pause before the answer tells you everything",
          "What are this person's three biggest weaknesses?"
        ],
        correctIndex: 1,
        explanation: "'Would you hire this person again?' cuts through politics and niceties. A fast, enthusiastic 'absolutely' is a green light. Any hesitation, qualification, or redirect is a red flag. Confirming dates (A) is administrative verification, not insight. Asking about weaknesses (C) usually gets rehearsed diplomatic answers that don't reveal much."
      }
    ]
  },
  "06-3": {
    title: "Documenting your processes without wasting time",
    duration: "5 min read",
    content: `Everyone knows they should document their processes. Almost nobody does it. Why? Because they think documentation means writing a 20-page manual for every task. It doesn't.

## The real reason you need documentation

It's not about organization. It's about **removing yourself as the bottleneck.** Every process that lives only in your head is a process that dies when you're unavailable. If your team can't function without you answering questions all day, you don't have a team. You have a group of people who depend on you.

**The test:** If you disappeared for a week, could your business keep running? If the answer is no, you have a documentation problem.

## The "just enough" approach

You don't need to document everything. You need to document:

1. **Things you do repeatedly** (if you've done it 3+ times, document it)
2. **Things you'll delegate** (if someone else will do it, write it down)
3. **Things that break when done wrong** (high-stakes processes)
4. **Things people keep asking you about** (if you've explained it twice, document it)

**That's it.** Don't document things that are intuitive, change constantly, or only you will ever do.

<!-- check:0 -->

## The 15-minute documentation method

Stop overthinking it. Here's how to document a process in 15 minutes or less:

1. **Open Loom and hit record** (5 minutes). Walk through the process while doing it. Talk out loud. Show your screen. Don't script it, don't edit it.
2. **Paste the Loom link into a Notion page** (1 minute). Add a title and date.
3. **Write 5-10 bullet points** below the video summarizing the key steps (5 minutes). Use plain language. Number them.
4. **Add a "common mistakes" section** (3 minutes). List 2-3 things people get wrong.
5. **Tag it and file it** (1 minute). Use a simple folder structure: department > process type.

**That's a complete piece of documentation.** Video for context, bullets for quick reference, mistakes for guardrails.

## When to document

- **Right after you do the thing.** Not "later." Not "when I have time." The process is freshest in your mind immediately after doing it. It takes 15 minutes. Do it now.
- **When someone asks you how to do something.** Instead of explaining, document it, then send the doc. You'll never have to explain it again.
- **Before you delegate.** Never hand off a task without documentation. That's just hoping they figure it out.

<!-- check:1 -->

## The documentation debt trap

Don't try to document your entire business in a weekend. You'll burn out and quit. Instead, document **one process per day** as you encounter it. In 30 days, you'll have 30 documented processes. In 90 days, your business runs without you.`,
    takeaways: [
      "Documentation exists to remove you as the bottleneck - if you vanish for a week, can the business run?",
      "Only document things you do repeatedly, will delegate, break when done wrong, or keep explaining",
      "Use the 15-minute method: Loom recording + bullet point summary + common mistakes",
      "Document one process per day as you encounter it instead of trying to do everything at once"
    ],
    exercise: "Pick the one process you explain to people most often. Set a 15-minute timer. Record a Loom walking through it, write 5-10 bullet steps, and add 2-3 common mistakes. Save it in a shared location and send it to the next person who asks.",
    checks: [
      {
        question: "According to the 'just enough' approach, which of the following should you document?",
        options: [
          "Every single process in your business for complete operational coverage",
          "Things you do repeatedly, will delegate, break when done wrong, or keep explaining to people",
          "Only processes that directly generate revenue"
        ],
        correctIndex: 1,
        explanation: "Document the four categories: things done 3+ times, things you'll hand off, things that break when done wrong, and things people keep asking about. That's it. Documenting everything (A) creates a mountain of documentation debt you'll never maintain. Only revenue processes (C) misses critical ops tasks like onboarding, support, and admin that break teams when undocumented."
      },
      {
        question: "What are the components of the 15-minute documentation method?",
        options: [
          "Write a detailed step-by-step manual, have two people review it, then publish to the wiki",
          "Record a Loom walkthrough, paste the link in Notion with bullet point steps, and add a common mistakes section",
          "Create a flowchart, write an FAQ document, and schedule a training session"
        ],
        correctIndex: 1,
        explanation: "The 15-minute method is: 5 min Loom recording (walk through it while doing it), 1 min paste link into Notion, 5 min write bullet points, 3 min add common mistakes, 1 min tag and file. Video for context, bullets for reference, mistakes for guardrails. A detailed manual (A) takes hours and never gets maintained. Flowcharts and FAQs and training sessions (C) over-engineer something that should take 15 minutes."
      }
    ]
  },
  "06-4": {
    title: "Building SOPs people actually follow",
    duration: "5 min read",
    content: `Here's the hard truth: most SOPs collect dust. People read them once during onboarding, forget they exist, and go back to doing things their own way. The problem isn't your team. The problem is how most SOPs are written.

## Why SOPs fail

1. **They're too long.** A 15-page SOP for posting on Instagram is insane. Nobody will read it, let alone follow it.
2. **They're written in corporate speak.** "Ensure alignment with brand guidelines and stakeholder expectations" means nothing to someone trying to get work done.
3. **They're not where the work happens.** If your SOP lives in a Google Doc buried in a folder, it's dead on arrival.
4. **They never get updated.** Processes change. If the SOP doesn't change with them, people stop trusting it.

## The anatomy of an SOP people actually follow

**Keep it to one page.** If your SOP is longer than one scroll on a screen, it's too long. Break it into multiple SOPs if needed.

**Use this structure:**

1. **Title:** What process this covers (be specific)
2. **Purpose:** One sentence on why this matters (not "for alignment" - the real reason)
3. **Trigger:** When does this process start? What kicks it off?
4. **Steps:** Numbered, specific actions. Each step = one action. Use screenshots.
5. **Output:** What does "done" look like? Be specific.
6. **Owner:** Who's responsible for this process?
7. **Last updated:** Date and who updated it

**Example step (bad):** "Process the client onboarding materials and ensure everything is set up correctly."

**Example step (good):** "1. Create a new folder in Google Drive using the client name. 2. Copy the onboarding checklist template into the folder. 3. Fill in the client's name, start date, and primary contact. 4. Share the folder with the client's email."

See the difference? **One action per step. No ambiguity.**

<!-- check:0 -->

## Where to put them

SOPs need to live where people work. Not in a random Google Drive folder.

- **Notion database** with tags by department and process type
- **Pinned in the relevant Slack channel**
- **Linked in the project management tool** (Linear, Asana, etc.) where the task lives

**The rule:** It should take fewer than 10 seconds to find any SOP. If it takes longer, your system is broken.

<!-- check:1 -->

## Keeping SOPs alive

Assign an **SOP owner** to each document. That person is responsible for:
- Reviewing it quarterly
- Updating it when the process changes
- Flagging it for deletion if it's obsolete

**Monthly SOP audit:** Spend 30 minutes once a month reviewing your most-used SOPs. Are they current? Are people following them? If not, why?

The best SOPs aren't documents. They're **living tools** that evolve with your business.`,
    takeaways: [
      "Most SOPs fail because they're too long, too corporate, and buried where nobody can find them",
      "One page max, one action per step, with screenshots - no ambiguity allowed",
      "SOPs must live where the work happens: Notion, pinned in Slack, linked in your PM tool",
      "Assign an owner to every SOP and run a 30-minute monthly audit to keep them current"
    ],
    exercise: "Take your most important recurring process and write a one-page SOP using the structure above: title, purpose, trigger, numbered steps (one action each), output, owner, and date. Put it where your team will actually see it. Then ask someone on your team to follow it without any additional explanation from you. Whatever they get confused by, fix in the SOP.",
    checks: [
      {
        question: "What is the maximum length for an effective SOP?",
        options: [
          "As long as needed to be thorough — completeness matters more than brevity",
          "One page maximum — if it's longer than one scroll, break it into multiple SOPs",
          "3-5 pages with an executive summary at the top"
        ],
        correctIndex: 1,
        explanation: "One page max. If your SOP is longer than one scroll on a screen, nobody will read it — let alone follow it consistently. Break long processes into multiple linked SOPs. Thoroughness at the expense of usability (A) produces documents that collect dust. A 3-5 page SOP with an executive summary (C) is a report, not a tool people use while doing the work."
      },
      {
        question: "How quickly should you be able to find any SOP in your system?",
        options: [
          "Under a minute using your company's search function",
          "Under 10 seconds — if it takes longer, your system is broken",
          "Within 5 minutes by browsing the correct folder structure"
        ],
        correctIndex: 1,
        explanation: "10 seconds or less. SOPs need to live where people work — pinned in the relevant Slack channel, linked in the project management tool, tagged in a Notion database. If someone has to hunt for it, they won't use it. Under a minute (A) is still too slow when you're mid-task. Browsing folders for 5 minutes (C) means your organizational system has failed."
      }
    ]
  },
  "07-1": {
    title: "Running 1-on-1s that matter",
    duration: "5 min read",
    content: `Most managers either skip 1-on-1s entirely or turn them into status update meetings. Both are wrong. Your weekly 1-on-1 is the single most important management ritual you have. It's where you catch problems early, build trust, and develop your people.

## Why 1-on-1s matter

Status updates belong in standups and project trackers. 1-on-1s exist for the stuff that doesn't surface in group settings: frustrations, career goals, interpersonal issues, ideas they're afraid to share publicly, and blockers they haven't escalated.

**If you're only hearing good news in 1-on-1s, your people don't trust you yet.**

## The format I use (30 minutes)

**Their agenda first (15 min).** The direct report drives the first half. They bring what's on their mind. This is non-negotiable. If they say "I don't have anything," that's a red flag - either they don't trust you or they don't know how to use the time. Coach them on it.

**Your agenda second (10 min).** This is where you bring feedback, ask about specific projects, or address concerns. Keep it focused on 1-2 topics max.

**Alignment and action items (5 min).** End every 1-on-1 with clear next steps. Who's doing what by when. Write them down in a shared doc.

## Questions that actually surface the truth

Don't ask "How's everything going?" You'll get "Fine." Ask:

- **"What's the biggest thing slowing you down right now?"** (surfaces blockers)
- **"What's something you wish was different about how we work?"** (surfaces process issues)
- **"Is there anything you've been hesitant to bring up?"** (surfaces trust issues)
- **"What do you want to be doing in 6 months that you're not doing now?"** (surfaces career goals)
- **"On a scale of 1-10, how are you feeling about work this week? Why?"** (surfaces morale)

**The follow-up matters more than the question.** When they share something, don't immediately solve it. Ask: "Tell me more about that." Then actually listen. Take notes. Follow up next week.

<!-- check:0 -->

## The 1-on-1 doc

Keep a running Google Doc or Notion page for each direct report. Before each meeting:
- They add their topics
- You add yours
- Review action items from last week

**This doc is gold during performance reviews.** You'll have 6 months of documented conversations, feedback, and progress instead of trying to remember what happened.

<!-- check:1 -->

## Common mistakes

- **Canceling 1-on-1s regularly.** This tells your team they're not a priority. Reschedule, never cancel.
- **Doing all the talking.** You should talk 30% of the time max. This is their meeting.
- **Only discussing problems.** Recognize wins too. People need to know when they're doing well.
- **Not following up on action items.** If you say you'll do something, do it. Otherwise they stop bringing things to you.`,
    takeaways: [
      "1-on-1s are for what doesn't surface in group settings - if you only hear good news, trust isn't there yet",
      "Let the direct report drive the first half, keep your topics to 1-2 max, and end with clear action items",
      "Ask specific questions that surface blockers, process issues, and career goals instead of 'how's it going'",
      "Keep a running doc for each person - it becomes invaluable for performance reviews and tracking patterns"
    ],
    exercise: "Set up a 1-on-1 doc for each person you manage (or will manage). Add the question framework from this lesson. Schedule recurring 30-minute 1-on-1s weekly. Before your next one, add 2 topics to your agenda and ask your direct report to add theirs before the meeting.",
    checks: [
      {
        question: "In the 1-on-1 format, who drives the first half of the meeting?",
        options: [
          "The manager, to set priorities and deliver feedback efficiently",
          "The direct report — they bring what's on their mind, which surfaces things you'd never hear otherwise",
          "Neither — the first half reviews last week's metrics together"
        ],
        correctIndex: 1,
        explanation: "The direct report owns the first 15 minutes because it surfaces what they're actually thinking, struggling with, or excited about. If the manager leads first, it becomes a status update, not a real conversation. Reviewing metrics together (C) is useful but belongs in a separate context — 1-on-1s are for the human stuff that doesn't surface in group settings."
      },
      {
        question: "What does a running 1-on-1 doc provide during performance reviews?",
        options: [
          "Legal protection in case of employee disputes",
          "6 months of documented conversations, feedback, and progress instead of trying to remember what happened",
          "A template for writing the employee's self-review"
        ],
        correctIndex: 1,
        explanation: "The running doc gives you months of documented conversations, feedback given, problems solved, and growth patterns. Come review time, you have specific examples instead of vague recollections. Legal protection (A) is a side benefit, not the primary purpose. It's your notes about them, not a template for their self-review (C)."
      }
    ]
  },
  "07-2": {
    title: "Building dashboards for real-time visibility",
    duration: "5 min read",
    content: `If you have to ask someone "what's the status?" you don't have a dashboard. Dashboards exist so that every person on the team - including you - can see what's happening without asking anyone. The best operators I know check a dashboard, not Slack.

## What belongs on a dashboard

Your dashboard should answer 5 questions at a glance:

1. **Are we making money?** (Revenue, MRR, pipeline value)
2. **Are we delivering?** (Tasks completed, projects on track, deadlines met)
3. **Are our customers happy?** (NPS, response times, churn rate)
4. **Is the team healthy?** (Utilization, burndown, blockers)
5. **What needs my attention right now?** (Red flags, overdue items, escalations)

**If your dashboard can't answer these in 30 seconds, it's too complicated.**

## Building it simple

You don't need Tableau or Looker to start. Here's what works at every stage:

**Stage 1: Google Sheets / Notion (0-10 team members)**
- One sheet per area (revenue, delivery, team)
- Updated manually once a week
- Color-coded: green = on track, yellow = watch, red = action needed
- Takes 15 minutes to update

**Stage 2: Integrated tools (10-25 team members)**
- Notion dashboards pulling from databases
- Linear project views with filters
- Google Sheets with automated imports (Zapier or Make)
- Updated semi-automatically

**Stage 3: Dedicated platforms (25+ team members)**
- Databox, Geckoboard, or similar
- Direct integrations with Stripe, Linear, HubSpot
- Real-time updates, no manual entry
- Custom views per department

<!-- check:0 -->

## Dashboard design principles

**Less is more.** 5-8 metrics max on any single view. If you have 30 metrics, nobody will look at it.

**Use visual hierarchy.** The most important number should be the biggest thing on the screen. Supporting metrics underneath. Details on click-through.

**Traffic light system.** Green, yellow, red. Instantly scannable. Every metric needs a target so the color is objective, not subjective.

**One source of truth.** Every metric on the dashboard should have one clear data source. If revenue is in two places with two different numbers, you have a data integrity problem, not a dashboard.

<!-- check:1 -->

## Who sees what

Not everyone needs the same view:
- **Executives:** Revenue, burn rate, top-level delivery metrics
- **Managers:** Team KPIs, project status, resource utilization
- **Individual contributors:** Their tasks, their metrics, team goals

**Don't overwhelm people with data they can't act on.** A designer doesn't need to see the burn rate. The CEO doesn't need to see individual task completion.

<!-- check:2 -->

## The daily check

Make dashboard review a habit. I check mine every morning in 2 minutes:
1. Any red items? Handle those first.
2. Any yellow trending toward red? Flag for the week.
3. Everything green? Great, move on to deep work.

**That's it.** Two minutes. No meetings. No Slack messages. No "quick question" to three people.`,
    takeaways: [
      "A good dashboard answers 5 questions in 30 seconds: money, delivery, customers, team health, and what needs attention",
      "Start simple with Google Sheets or Notion - you don't need fancy tools to get visibility",
      "Keep it to 5-8 metrics max with traffic light colors (green/yellow/red) for instant scanning",
      "Check your dashboard every morning in 2 minutes: red items first, yellow items flagged, green means move on"
    ],
    exercise: "Build a v1 dashboard in Notion or Google Sheets. List your 5-8 most important metrics across revenue, delivery, and team health. Add current values, targets, and color coding. Set it as your browser homepage or pin it in Slack. Check it every morning for one week and note how it changes your decision-making.",
    checks: [
      {
        question: "What five questions should a good operational dashboard answer at a glance?",
        options: [
          "Who is online, what meetings are today, which emails need replies, what's the weather, and stock prices",
          "Are we making money, are we delivering, are customers happy, is the team healthy, and what needs attention now",
          "Revenue this month, revenue last month, revenue target, revenue growth rate, and revenue per employee"
        ],
        correctIndex: 1,
        explanation: "A dashboard should cover the five critical areas: revenue health, delivery status, customer satisfaction, team health, and immediate action items. This gives you a complete business health check in 30 seconds. Daily logistics (A) belong in calendars, not dashboards. All-revenue metrics (C) give a one-dimensional financial view that ignores delivery, customers, and team health."
      },
      {
        question: "How many metrics should you display on any single dashboard view?",
        options: [
          "As many as possible to provide complete visibility",
          "5-8 metrics maximum with traffic light color coding for instant scanning",
          "Exactly 3 — one for revenue, one for delivery, one for team"
        ],
        correctIndex: 1,
        explanation: "5-8 metrics max with green/yellow/red color coding makes the dashboard instantly scannable. Every metric needs a target so the color is objective. Too many metrics (A) creates information overload that nobody looks at. Only 3 metrics (C) is too sparse — you'd miss important signals across different business areas."
      },
      {
        question: "Why shouldn't everyone on the team see the same dashboard?",
        options: [
          "Some data is confidential and should be restricted for security reasons",
          "Showing people data they can't act on is overwhelming — a designer doesn't need burn rate, the CEO doesn't need individual task completion",
          "Different teams use different tools so they can't access the same dashboards"
        ],
        correctIndex: 1,
        explanation: "Dashboard views should match decision-making authority. Showing a designer the burn rate or an IC the CEO's strategic metrics creates noise without enabling action. Each role should see the metrics they can influence. Security (A) is sometimes a factor but isn't the primary design principle. Tool access (C) is a technical issue, not a design philosophy."
      }
    ]
  },
  "07-3": {
    title: "Delegating everything except the things only you can do",
    duration: "5 min read",
    content: `Most founders and operators hold on to too much for too long. They tell themselves "it's faster if I just do it" or "nobody will do it as well as me." Both are true in the short term and catastrophic in the long term. You cannot scale yourself. You can only scale your systems and your team.

## The delegation matrix

Take everything you do in a week and sort it into four buckets:

**1. Only I can do this (keep).**
Strategic decisions, key relationships, vision, high-stakes negotiations. This should be 20% of your time or less.

**2. I'm the best at this but others could learn (train and delegate).**
This is the hardest bucket because your ego wants to hold on. Train someone. Accept 80% quality initially. They'll get to 95% within a month.

**3. Someone else is better at this (delegate now).**
Design, coding, bookkeeping, content creation - whatever isn't your zone of genius. Delegate immediately.

**4. This shouldn't be done at all (eliminate).**
Reports nobody reads. Meetings that could be emails. Processes that exist because "we've always done it this way." Kill them.

## How to delegate effectively

**The delegation brief:**
Every task you delegate needs:
- **What:** Clear deliverable description
- **Why:** Context on why it matters (people do better work when they understand the purpose)
- **When:** Specific deadline (not "when you get a chance")
- **How:** Link to the SOP or a Loom walkthrough (this is why Module 02 matters)
- **What good looks like:** An example of the finished product or clear success criteria

**Don't delegate and disappear.** Set check-in points. For a week-long project, check in on day 2 and day 5. Not to micromanage, but to catch misalignment early.

**Don't delegate and hover.** The opposite extreme is just as bad. If you're reviewing every email before it sends and approving every decision, you haven't delegated anything. You've just added yourself as a bottleneck.

<!-- check:0 -->

## The 80% rule

If someone can do a task 80% as well as you, delegate it. **Your time is not worth the 20% quality difference.** That 20% gap closes with practice and feedback. What doesn't close is the opportunity cost of you doing $20/hour tasks when you should be doing $200/hour work.

Calculate your hourly rate. If you make $100K/year, your hour is worth ~$50. Every task you do that you could pay someone $15-25/hour to do is losing you money.

<!-- check:1 -->

## What to delegate first

Start with the tasks that are:
1. **Recurring** (you'll save time every single week)
2. **Well-documented** (or easy to document)
3. **Low-risk** (mistakes are fixable, not catastrophic)
4. **Time-consuming** (frees up the most hours)

**Common first delegations:**
- Email management and inbox triage
- Social media scheduling and posting
- Invoice processing and bookkeeping
- Meeting scheduling and calendar management
- Data entry and report compilation
- Client onboarding logistics

<!-- check:2 -->

## The mindset shift

Delegation isn't about dumping tasks on people. It's about **building a machine that operates without you.** Every task you delegate successfully is a piece of freedom. Every task you hold onto is a chain.

Your job as an operator isn't to do the work. It's to **build the system that does the work.** The sooner you internalize this, the faster you scale.`,
    takeaways: [
      "Sort everything into four buckets: only you, train and delegate, delegate now, eliminate entirely",
      "Every delegated task needs a clear what, why, when, how, and example of what good looks like",
      "If someone can do it 80% as well as you, delegate it - your time isn't worth the 20% gap",
      "Your job isn't to do the work, it's to build the system that does the work"
    ],
    exercise: "Track everything you do for one full workday. At the end, sort each task into the four buckets: only me, train and delegate, delegate now, eliminate. Pick the top 3 tasks from the 'delegate now' bucket and create delegation briefs for each one (what, why, when, how, example). Assign them to someone this week.",
    checks: [
      {
        question: "What are the five elements every delegation brief needs?",
        options: [
          "Task name, deadline, budget, approver, and status update schedule",
          "What (clear deliverable), why (context/purpose), when (specific deadline), how (SOP or Loom), and what good looks like (example or success criteria)",
          "Description, priority level, team lead, dependencies, and risk assessment"
        ],
        correctIndex: 1,
        explanation: "The five elements are: What (the deliverable), Why (context so they understand the purpose), When (a specific deadline, not 'when you get a chance'), How (link to the SOP or walkthrough), and What good looks like (an example or clear criteria). Budget and approver (A) are project management concerns, not delegation brief essentials. Risk assessment and dependencies (C) over-engineer simple task handoffs."
      },
      {
        question: "According to the 80% rule, when should you delegate a task?",
        options: [
          "Only when someone can do it 100% as well as you — anything less risks quality",
          "When someone can do it 80% as well as you — your time isn't worth the 20% quality gap",
          "When the task takes less than an hour and doesn't require your expertise"
        ],
        correctIndex: 1,
        explanation: "If someone can do a task 80% as well as you, delegate it. The 20% quality gap closes with practice and feedback, but your time never comes back. Waiting for 100% (A) means you never delegate and become a permanent bottleneck. Task duration (C) is the wrong criteria — delegate based on whether someone else can handle the quality, not how long it takes."
      },
      {
        question: "What characteristics make a task ideal for early delegation?",
        options: [
          "High-stakes tasks that have the biggest impact on revenue",
          "Recurring, well-documented, low-risk tasks that free up the most hours",
          "Creative tasks that would benefit from a fresh perspective"
        ],
        correctIndex: 1,
        explanation: "Start delegating tasks that are recurring (saves time every week), well-documented (or easy to document), low-risk (mistakes are fixable), and time-consuming (frees up the most hours). High-stakes revenue tasks (A) should stay with you until you've built trust and proven the system works. Creative tasks (C) might eventually be delegated but aren't the place to start."
      }
    ]
  },
  "07-4": {
    title: "AI for scheduling, coordination, and admin",
    duration: "5 min read",
    content: `Admin work is the silent killer of productivity. Scheduling meetings, coordinating across time zones, managing calendars, handling repetitive emails - none of this is high-value work, but it eats hours every week. AI can handle most of it.

## Scheduling with AI

**The old way:** 5 emails back and forth to find a time that works. "How about Tuesday?" "I'm busy Tuesday." "Wednesday?" "Only after 3pm." Kill me.

**The AI way:**

**Option 1: AI scheduling assistants.** Tools like Reclaim.ai or Clockwise manage your calendar automatically. They block focus time, find optimal meeting slots, and reschedule when conflicts arise. Set your preferences once and let it run.

**Option 2: Calendar link + AI buffer.** Use Calendly or Cal.com with AI-managed buffers. Instead of back-and-forth, send a booking link. Use AI to analyze your calendar weekly and adjust available slots based on your energy patterns and priorities.

**Option 3: AI-powered email scheduling.** For people who won't use booking links, use Claude to draft scheduling emails:

"Draft a response to [name] suggesting 3 available times this week for a 30-minute call. My available slots are [paste from calendar]. Keep it brief and professional."

## Coordination across teams

**Daily coordination prompt:**
Feed your team's calendars and task lists into Claude:

"Here's my team's schedule and current tasks for today. Flag any conflicts, overloaded team members, or tasks that need resequencing. Suggest an optimal task order for each person."

**Meeting prep automation:**
Before any meeting, prompt AI with:

"I have a meeting with [name/company] in 1 hour about [topic]. Here's context: [paste relevant docs, emails, or notes]. Give me a 3-bullet briefing and 2 questions I should ask."

**Meeting follow-up:**
After any meeting, paste your notes or transcript:

"Extract action items, decisions made, and open questions from these meeting notes. Format as a table: action item, owner, deadline. Flag any items without clear owners."

<!-- check:0 -->

## Admin automation

**Email triage:** AI can categorize incoming emails by urgency and type. Set up rules in your email client, then use AI to draft responses for routine messages.

**Inbox zero prompt:**
"Here are my 15 unread emails. Categorize each as: (A) needs my personal response, (B) can be handled with a template response - draft it, (C) FYI only - no response needed, (D) delete/unsubscribe."

**Document management:** Use AI to organize files, summarize documents, and extract key information from contracts or proposals.

**Travel coordination:** Paste your travel requirements and preferences, and AI generates a complete itinerary with alternatives.

<!-- check:1 -->

## The executive assistant replacement myth

AI doesn't replace a great executive assistant. It replaces the need for one at the early stage when you can't afford one. As you grow, AI makes your EA 3x more productive by handling the routine stuff so they can focus on high-judgment coordination.

## Implementation priority

Start with whatever wastes the most time:
1. **Scheduling** (usually the biggest time sink)
2. **Email triage and responses** (second biggest)
3. **Meeting prep and follow-up** (third)
4. **Document management** (fourth)

Don't try to automate everything at once. Pick one, get it working, then add the next.`,
    takeaways: [
      "AI scheduling tools eliminate the back-and-forth - use Reclaim.ai, Calendly, or AI-drafted scheduling emails",
      "Automate meeting prep (3-bullet briefing + questions) and follow-up (action items extraction) with AI prompts",
      "Use AI for email triage: categorize by urgency, draft template responses, and identify what actually needs you",
      "Start with the biggest time sink (usually scheduling), get it working, then automate the next admin task"
    ],
    exercise: "Pick your biggest admin time waster (scheduling, email, meeting prep, or document management). Set up one AI automation for it this week. For scheduling: set up Calendly + AI buffer management. For email: create your inbox triage prompt and use it for one full week. Track how many hours it saves.",
    checks: [
      {
        question: "What AI prompt technique replaces the typical 5-email back-and-forth of meeting scheduling?",
        options: [
          "Using AI to generate a scheduling poll that you send to all participants",
          "Using a calendar link (Calendly/Cal.com) combined with AI to draft scheduling emails when people won't use booking links",
          "Having AI automatically accept every meeting request in your inbox"
        ],
        correctIndex: 1,
        explanation: "The system combines self-service booking links for most people with AI-drafted scheduling emails for those who won't click a link. AI pulls your available slots and drafts a brief professional message suggesting 3 times. Scheduling polls (A) still require manual coordination. Auto-accepting everything (C) destroys your calendar with no regard for priorities or availability."
      },
      {
        question: "After every meeting, what should you prompt AI to extract from your notes?",
        options: [
          "A full transcript of everything that was said for legal documentation",
          "Action items, decisions made, and open questions — formatted as a table with owner and deadline for each",
          "A summary email to send to all attendees praising their contributions"
        ],
        correctIndex: 1,
        explanation: "The meeting follow-up prompt extracts the three things that matter: what needs to get done (action items), what was decided (decisions), and what's still unresolved (open questions). Structuring it as a table with owners and deadlines makes it actionable. A full transcript (A) is overkill and not useful for follow-up. A praise summary (C) is not what post-meeting processing is for."
      }
    ]
  }
};

export const salesSystemsQuizzes: CourseQuizzes = {
  "01": {
    title: "Sales Foundation Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the core difference between a closer and an order-taker?",
        options: [
          "Closers use high-pressure tactics to force decisions",
          "Closers solve problems so clearly that saying no is irrational, while order-takers just process requests",
          "Closers have bigger networks and more referrals than order-takers",
        ],
        correctIndex: 1,
        explanation:
          "Closers frame their solution around the prospect's problem so clearly that buying becomes the obvious choice. High-pressure tactics (A) are the opposite of this — they create resistance. Having a bigger network (C) helps with lead gen but doesn't define the closer mindset.",
      },
      {
        type: "mc",
        question:
          "What are the three buying triggers ranked from strongest to weakest?",
        options: [
          "Logic, aspiration, pain",
          "Pain, aspiration, logic",
          "Fear, greed, urgency",
        ],
        correctIndex: 1,
        explanation:
          "Pain is the strongest trigger because people act fastest to escape a problem they already feel. Aspiration is next — the pull toward a better future. Logic is weakest because rational arguments alone rarely move people to act. Ranking logic first (A) inverts the hierarchy. Fear/greed/urgency (C) are emotional levers but not the framework taught in this course.",
      },
      {
        type: "mc",
        question:
          "Which of the following is a component of a killer offer?",
        options: [
          "A detailed hourly breakdown so clients see exactly what they pay for",
          "A specific, measurable outcome the client can expect",
          "A 90-day money-back guarantee on all deliverables",
        ],
        correctIndex: 1,
        explanation:
          "A killer offer leads with a specific outcome — what the client gets, not what you do. An hourly breakdown (A) commoditizes your work and invites comparison shopping. While guarantees (C) can reduce risk, the course teaches outcome-based framing, not blanket refund policies.",
      },
      {
        type: "mc",
        question: "What is the 10x pricing rule?",
        options: [
          "Charge 10 times your hourly rate to account for overhead and profit",
          "Your price should be 1/10th of the value you deliver so ROI is undeniable",
          "Raise prices by 10% each quarter until prospects push back",
        ],
        correctIndex: 1,
        explanation:
          "The 10x rule means if you charge $5K, the client should see at least $50K in value. This makes the price feel small relative to the result. Charging 10x your hourly rate (A) is still cost-based, not value-based. Incremental raises (C) are a pricing strategy but not the 10x principle.",
      },
      {
        type: "mc",
        question:
          "Why should you sell outcomes instead of hours?",
        options: [
          "Outcomes let you charge more because clients can't verify how long things take",
          "Hours create a ceiling on your income and reduce you to a commodity; outcomes align your incentives with the client's results",
          "Selling hours is illegal for independent contractors in most states",
        ],
        correctIndex: 1,
        explanation:
          "Selling hours caps your earning potential and puts you in a race to the bottom against cheaper alternatives. Outcome-based pricing ties your compensation to the value delivered, aligning both parties. Option A is cynical and misses the point — it's not about hiding effort, it's about framing value. Option C is simply false.",
      },
    ],
  },
  "02": {
    title: "Prospecting & Lead Gen Quiz",
    questions: [
      {
        type: "mc",
        question:
          "Why does the course recommend building a list of exactly 100 leads?",
        options: [
          "100 is the maximum most CRMs can handle on the free tier",
          "It's enough for meaningful data, small enough to personalize, and forces selectivity",
          "It guarantees at least 10 sales at standard conversion rates",
        ],
        correctIndex: 1,
        explanation:
          "100 leads is the sweet spot: large enough to generate real patterns and data, small enough that you can deeply research each one, and it forces you to be selective about who qualifies. CRM limits (A) vary wildly and aren't the reason. Guaranteeing 10 sales (C) is a fantasy — conversion depends on execution, not list size.",
      },
      {
        type: "mc",
        question:
          "What does each layer of the 3-layer AI research method cover?",
        options: [
          "Website audit, competitor comparison, pricing analysis",
          "Public basics (30 sec), AI-powered analysis (2 min), content and activity review (2 min)",
          "LinkedIn profile, email history, phone conversation notes",
        ],
        correctIndex: 1,
        explanation:
          "The 3-layer method moves from fast surface-level intel (company size, industry, role) to deeper AI analysis (pain points, opportunities) to reviewing their actual content and activity for personalization hooks. A website audit (A) is too narrow — it skips the person entirely. Email/phone notes (C) describe CRM data you'd log after contact, not pre-outreach research.",
      },
      {
        type: "mc",
        question:
          "What is the main difference between cold and warm outreach?",
        options: [
          "Cold outreach targets strangers with no prior connection; warm outreach leverages an existing relationship or shared context",
          "Cold outreach uses email only; warm outreach uses phone calls only",
          "Cold outreach is free; warm outreach requires paid advertising",
        ],
        correctIndex: 0,
        explanation:
          "Cold means no prior relationship — you're reaching out to someone who doesn't know you. Warm means there's a connection point (referral, mutual contact, prior interaction) that gives you credibility. The channel (B) doesn't define cold vs. warm — you can cold call or warm email. Paid advertising (C) is a separate lead gen channel, not warm outreach.",
      },
      {
        type: "mc",
        question:
          "What response rate should you realistically expect from cold outreach?",
        options: [
          "30-50% if your emails are good enough",
          "1-5%, which is why volume and follow-up matter",
          "Under 0.1% — cold outreach barely works anymore",
        ],
        correctIndex: 1,
        explanation:
          "Cold outreach typically yields 1-5% response rates, which is exactly why consistent follow-up and sufficient volume are essential. Expecting 30-50% (A) from cold outreach is unrealistic — those numbers are closer to warm/referral rates. Claiming it barely works (C) ignores that cold outreach built many of the biggest companies when done right.",
      },
      {
        type: "mc",
        question:
          "Why does the course recommend running cold and warm outreach simultaneously?",
        options: [
          "Cold outreach builds pipeline volume while warm outreach converts at higher rates — together they create consistent deal flow",
          "It's faster to hit your monthly sales target if you double the outreach channels",
          "Running both lets you A/B test which one your industry responds to better",
        ],
        correctIndex: 0,
        explanation:
          "Cold fills the top of your funnel with new prospects; warm converts at much higher rates from existing relationships. Running both ensures you always have volume AND quality in your pipeline. Simply doubling channels (B) misses the strategic reason — they serve different funnel stages. A/B testing (C) is a tactic, not the reason you need both running at once.",
      },
    ],
  },
  "03": {
    title: "Cold Outreach Quiz",
    questions: [
      {
        type: "mc",
        question:
          "Which of the following is one of the five rules of cold email?",
        options: [
          "Include a detailed case study in every first email",
          "The subject line is 50% of the battle — if they don't open, nothing else matters",
          "Always cc their team so multiple decision-makers see your email",
        ],
        correctIndex: 1,
        explanation:
          "The subject line determines whether your email gets opened at all — it's the gatekeeper to everything else. Attaching case studies (A) adds weight and length that kills open rates in cold emails. Cc'ing their team (C) is intrusive and signals mass outreach, not personalization.",
      },
      {
        type: "mc",
        question:
          "According to the five rules, how long should a cold email be?",
        options: [
          "As long as needed to fully explain your services and value proposition",
          "Under 100 words with one clear CTA",
          "Exactly 3 paragraphs with a P.S. line for social proof",
        ],
        correctIndex: 1,
        explanation:
          "Cold emails must be concise — under 100 words with a single call to action. Busy people scan, they don't read essays. Writing as long as needed (A) produces emails nobody finishes. The 3-paragraph format (C) is an arbitrary structure that doesn't prioritize brevity or clarity.",
      },
      {
        type: "mc",
        question:
          "What makes Email 4 (the breakup angle) in the 5-touch sequence effective?",
        options: [
          "It offers a steep discount to create urgency",
          "It gives them an out, which paradoxically increases response rates",
          "It includes a detailed competitor comparison to trigger fear of missing out",
        ],
        correctIndex: 1,
        explanation:
          "The breakup angle works because it removes pressure. By signaling you'll stop reaching out, you give the prospect control — and people who were on the fence often respond because they don't want the option to disappear. Discounts (A) devalue your offer. Competitor comparisons (C) feel aggressive and self-serving in a follow-up.",
      },
      {
        type: "mc",
        question:
          "In AI-personalized outreach at volume, what is the role of human review?",
        options: [
          "Optional quality check — AI is accurate enough to send directly",
          "Non-negotiable final step — AI drafts but a human catches tone-deaf or inaccurate personalization before sending",
          "Only needed for the first 10 emails until the AI learns your style",
        ],
        correctIndex: 1,
        explanation:
          "Human review is non-negotiable because AI can misread context, get facts wrong, or produce personalization that sounds robotic. A human catches what AI misses. Sending AI output directly (A) risks embarrassing errors at scale. AI doesn't 'learn your style' after 10 emails (C) — it needs review every time.",
      },
      {
        type: "mc",
        question:
          "Why should the body of a cold email focus on the prospect, not you?",
        options: [
          "People only care about their own problems — leading with your credentials makes them stop reading",
          "Talking about yourself is considered unprofessional in business email etiquette",
          "Focusing on the prospect lets you avoid making specific claims you'd have to back up",
        ],
        correctIndex: 0,
        explanation:
          "Prospects open emails thinking 'what's in it for me?' If you lead with your story, they tune out. Leading with their pain or opportunity earns attention. It's not about etiquette (B) — it's about psychology. And avoiding claims (C) is the opposite of what you should do — you want to make a specific, relevant claim about their situation.",
      },
    ],
  },
  "04": {
    title: "Sales Call Quiz",
    questions: [
      {
        type: "mc",
        question:
          "In the SPIN discovery framework, what do Implication questions accomplish?",
        options: [
          "They help you understand the prospect's current tools and processes",
          "They force the prospect to confront and quantify the real cost of their problem",
          "They let the prospect envision what solving the problem would look like",
        ],
        correctIndex: 1,
        explanation:
          "Implication questions make the prospect feel the weight of their problem by exploring its downstream effects and costs. Understanding current tools (A) is the job of Situation questions. Envisioning the solution (C) is what Need-Payoff questions do. Implication questions sit between identifying the problem and presenting the solution.",
      },
      {
        type: "mc",
        question:
          "What should you do immediately after asking a closing question?",
        options: [
          "Reiterate the key benefits to reinforce value",
          "Suggest they take time to think about it",
          "Stop talking and let silence do the work",
        ],
        correctIndex: 2,
        explanation:
          "Silence after a close is critical. The first person who speaks loses leverage. If you keep talking after asking for the sale, you undermine your own close. Reiterating benefits (A) signals insecurity and gives them reasons to stall. Suggesting they think about it (B) is giving them permission to leave without deciding.",
      },
      {
        type: "mc",
        question:
          "What is the first step in the Acknowledge-Clarify-Respond objection handling framework?",
        options: [
          "Restate your value proposition to counter their concern",
          "Acknowledge their concern so they feel heard before you address it",
          "Ask a probing question to find the real objection behind the stated one",
        ],
        correctIndex: 1,
        explanation:
          "Acknowledgment comes first because people can't hear your response until they feel understood. Jumping straight to your value prop (A) feels dismissive. Probing questions (C) belong in the Clarify step, which comes second — you can't clarify until you've first validated their concern.",
      },
      {
        type: "mc",
        question:
          "How should you handle the 'it's too expensive' objection?",
        options: [
          "Offer a discount to show flexibility and close the deal faster",
          "Reframe the conversation around ROI — the cost of NOT solving the problem is higher than your price",
          "Explain your cost structure so they understand why the price is fair",
        ],
        correctIndex: 1,
        explanation:
          "The ROI reframe shifts the conversation from cost to value. If your $5K solution prevents $50K in losses or generates $50K in revenue, the price becomes trivial. Discounting (A) trains clients to negotiate and erodes your positioning. Explaining cost structure (C) is defensive and puts you in a commodity frame.",
      },
      {
        type: "mc",
        question:
          "What do Situation questions in SPIN help you uncover?",
        options: [
          "The prospect's current state — their tools, processes, and context",
          "The emotional pain the prospect feels about their problem",
          "The financial impact of solving or not solving the problem",
        ],
        correctIndex: 0,
        explanation:
          "Situation questions gather facts about where the prospect is today — what tools they use, how their process works, what their setup looks like. Emotional pain (B) is uncovered by Problem and Implication questions. Financial impact (C) is the territory of Implication questions. Situation questions build the foundation for the rest of SPIN.",
      },
    ],
  },
  "05": {
    title: "CRM & Pipeline Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the non-negotiable CRM logging rule?",
        options: [
          "Update your CRM weekly during Friday reviews",
          "Log every conversation, email, and follow-up — if it's not in the CRM, it didn't happen",
          "Only log deals that are worth more than $1K to avoid clutter",
        ],
        correctIndex: 1,
        explanation:
          "Every interaction must be logged immediately because memory is unreliable and your CRM is your single source of truth. Weekly updates (A) mean five days of lost context and dropped follow-ups. Filtering by deal size (C) means you lose data on smaller deals that could grow or generate referrals.",
      },
      {
        type: "mc",
        question:
          "How do you calculate weighted pipeline value?",
        options: [
          "Add up all deal values regardless of stage",
          "Divide total pipeline value by number of deals to get average deal size",
          "Multiply each deal value by its probability of closing at that stage",
        ],
        correctIndex: 2,
        explanation:
          "Weighted pipeline multiplies deal value by close probability (e.g., a $10K deal at Proposal stage with 60% probability = $6K weighted value). This gives you a realistic revenue forecast. Adding all values (A) inflates your forecast with deals that may never close. Average deal size (B) is a useful metric but isn't how you weight a pipeline.",
      },
      {
        type: "mc",
        question:
          "If your response rate is high but meetings booked are low, what does the diagnostic framework tell you?",
        options: [
          "Your outreach is working but your call-to-action or booking process is broken",
          "You need to send more outreach volume to increase the raw number of meetings",
          "Your pricing is too high and prospects are dropping off before committing to a call",
        ],
        correctIndex: 0,
        explanation:
          "High response rate means your messaging resonates — people are engaging. Low meetings means the conversion step from reply to booked call is failing, which points to a weak CTA, clunky scheduling process, or poor reply handling. More volume (B) doesn't fix a conversion problem. Pricing (C) usually isn't discussed before a meeting is booked.",
      },
      {
        type: "mc",
        question:
          "Which of the following is one of the 8 key sales metrics?",
        options: [
          "Number of social media followers on your business page",
          "Close rate — the percentage of proposals that become signed deals",
          "Number of hours spent prospecting per week",
        ],
        correctIndex: 1,
        explanation:
          "Close rate is a core sales metric that tells you how effectively you convert opportunities into revenue. Social media followers (A) is a marketing vanity metric, not a sales metric. Hours spent prospecting (C) measures activity, not results — the 8 key metrics focus on outcomes at each pipeline stage.",
      },
      {
        type: "mc",
        question:
          "Why is a weighted pipeline more useful than a raw pipeline total?",
        options: [
          "It looks more professional in investor presentations",
          "It accounts for the reality that not every deal will close, giving you a forecast you can actually plan around",
          "It automatically removes stale deals from your CRM",
        ],
        correctIndex: 1,
        explanation:
          "A raw total treats every deal as if it's already closed, which creates dangerously optimistic projections. Weighted pipeline discounts each deal by its likelihood of closing, giving you a number you can actually use for cash flow planning and hiring decisions. Looking professional (A) isn't the point. Weighted pipeline doesn't remove deals (C) — it adjusts their projected value.",
      },
    ],
  },
  "06": {
    title: "Hiring & Team Building Quiz",
    questions: [
      {
        type: "mc",
        question:
          "What is the primary purpose of a job description according to the course?",
        options: [
          "To list every possible responsibility so candidates know exactly what they're signing up for",
          "To act as a filter that attracts the right 5 people and repels the wrong 195",
          "To satisfy HR compliance and legal documentation requirements",
        ],
        correctIndex: 1,
        explanation:
          "A job description is a filter, not a manual. Its job is to attract a small number of highly aligned candidates and scare off everyone who isn't a fit. Listing every responsibility (A) creates a wall of text that attracts generalists instead of specialists. Compliance (C) is a secondary concern — the primary function is filtering.",
      },
      {
        type: "mc",
        question:
          "What is the S-tier talent sourcing method?",
        options: [
          "LinkedIn Easy Apply, because it reaches the most candidates quickly",
          "Freelance platforms like Upwork, because you can review past work history",
          "Referrals from people you trust, because you skip 80% of the vetting process",
        ],
        correctIndex: 2,
        explanation:
          "Referrals from trusted people are the best source because the referrer has already vetted character, work ethic, and skill — you inherit their judgment. LinkedIn Easy Apply (A) produces high volume but low quality. Upwork (B) gives you work samples but no character reference or trust layer.",
      },
      {
        type: "mc",
        question:
          "Why does the course recommend a paid async test project before any interview call?",
        options: [
          "It's cheaper than running a full interview process with multiple rounds",
          "It reveals how someone actually works — their skill, communication, and reliability — without the performance of an interview",
          "It legally protects you from discrimination claims during the hiring process",
        ],
        correctIndex: 1,
        explanation:
          "A paid test project shows you real output, not interview polish. You see how they handle ambiguity, communicate updates, meet deadlines, and produce work. Cost savings (A) miss the point — you pay for the test project specifically because you value seeing real work. Legal protection (C) is not the motivation.",
      },
      {
        type: "mc",
        question:
          "What makes an effective test project for hiring?",
        options: [
          "A large project that takes 2-3 weeks so you can evaluate their stamina and commitment",
          "A small, paid task that mirrors real work, has a clear deliverable, and can be completed in a few hours",
          "An unpaid challenge that tests how badly they want the job",
        ],
        correctIndex: 1,
        explanation:
          "The best test project is small enough to respect their time, paid to show you value their work, and mirrors an actual task they'd do in the role. A 2-3 week project (A) is exploitative and will repel top talent. Unpaid work (C) signals that you don't value people's time — the best candidates will walk.",
      },
      {
        type: "mc",
        question:
          "Why do referrals outperform job board candidates?",
        options: [
          "Job board candidates apply to dozens of roles and have no specific interest in yours",
          "Referrals come pre-vetted for character and competence by someone whose judgment you trust",
          "Job boards charge high fees that inflate your cost-per-hire",
        ],
        correctIndex: 1,
        explanation:
          "The referrer has skin in the game — their reputation is on the line. This means they only refer people they genuinely believe in, which pre-screens for both skill and reliability. While job board candidates may apply broadly (A), that's a symptom, not the core reason referrals win. Job board fees (C) are a cost concern, not a quality concern.",
      },
    ],
  },
  "07": {
    title: "Operations & Scale Quiz",
    questions: [
      {
        type: "mc",
        question:
          "In the 1-on-1 format, who drives the first half of the meeting?",
        options: [
          "The manager, to set priorities and deliver feedback",
          "The direct report, bringing what's on their mind",
          "Neither — the first half is for reviewing metrics together",
        ],
        correctIndex: 1,
        explanation:
          "The direct report owns the first half because it surfaces what they're actually thinking, struggling with, or excited about — things you'd never hear if you lead with your agenda. If the manager drives first (A), it becomes a status update, not a real conversation. Reviewing metrics together (C) is useful but belongs in a different context, not the opening of a 1-on-1.",
      },
      {
        type: "mc",
        question:
          "What is the 80% rule in the delegation matrix?",
        options: [
          "Keep doing the task yourself until someone can match your quality exactly",
          "Delegate the task if someone can do it 80% as well as you — your time is not worth the 20% gap",
          "Spend 80% of your time on high-value tasks and delegate only the remaining 20%",
        ],
        correctIndex: 1,
        explanation:
          "If someone can do the task at 80% of your quality, delegate it. The 20% quality gap is almost always worth reclaiming your time for higher-leverage work. Waiting for 100% match (A) means you never delegate and become a bottleneck. The 80/20 time split (C) sounds reasonable but isn't the 80% rule — it's about task quality threshold, not time allocation.",
      },
      {
        type: "mc",
        question:
          "What should a good operational dashboard answer at a glance?",
        options: [
          "Every granular detail about every project, client, and team member",
          "Whether the business is healthy, what needs attention, and where trends are heading",
          "Only financial metrics — revenue, expenses, and profit margins",
        ],
        correctIndex: 1,
        explanation:
          "A dashboard should give you a health check in seconds: are we on track, what's off, and where are things trending? Granular details (A) create information overload — dashboards are for signals, not noise. Financial metrics only (C) miss operational health indicators like pipeline velocity, team capacity, and client satisfaction.",
      },
      {
        type: "mc",
        question:
          "In the four-bucket delegation matrix, what are the four categories for every task?",
        options: [
          "Urgent, important, both, neither",
          "Keep, delegate, automate, eliminate",
          "Do now, schedule, delegate, delete",
        ],
        correctIndex: 1,
        explanation:
          "The four buckets are: keep (only you can do this), delegate (someone else can), automate (a system can), and eliminate (it shouldn't be done at all). The Eisenhower matrix (A) is a prioritization tool, not a delegation framework. 'Do now / schedule / delegate / delete' (C) is similar in spirit but misses the automation bucket, which is critical for scaling.",
      },
      {
        type: "mc",
        question:
          "Why is the 'eliminate' bucket in the delegation matrix so important?",
        options: [
          "It reduces payroll costs by identifying roles you can cut",
          "It forces you to question whether a task should exist at all before spending time optimizing or delegating it",
          "It helps you identify which clients to fire for better profit margins",
        ],
        correctIndex: 1,
        explanation:
          "The biggest productivity gain often isn't doing something faster — it's realizing it shouldn't be done at all. The eliminate bucket catches busywork, legacy processes, and tasks that exist out of habit. Reducing payroll (A) is about roles, not tasks. Firing clients (C) is a separate strategic decision, not what the eliminate bucket addresses.",
      },
    ],
  },
};

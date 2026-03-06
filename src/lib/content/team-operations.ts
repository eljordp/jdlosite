import type { CourseContent } from "./types";

export const teamOperations: CourseContent = {
  "01-1": {
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

## What to include

- **Role title** (keep it standard so people can find it)
- **What you'll own** (3-4 key outcomes)
- **What success looks like at 30/60/90 days**
- **Non-negotiable skills** (5 max)
- **Compensation range** (yes, include it - A-players don't apply to mystery pay)
- **Filter question**

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
    exercise: "Rewrite one of your current job descriptions (or create one for your next hire) using this framework. Lead with mission, describe 3-4 outcomes, list 5 max requirements, include comp range, and add a filter question. Compare it side-by-side with the original and note what changed."
  },

  "01-2": {
    title: "Where to find talent (and where not to)",
    duration: "5 min read",
    content: `I've hired from every platform you can think of. LinkedIn, Indeed, Upwork, Fiverr, Twitter/X, Discord, referrals, cold DMs. Here's what actually works and what's a waste of time.

## The talent source tier list

**S-Tier: Referrals from people you trust.**
Nothing beats this. When someone you respect vouches for a person, you skip 80% of the vetting process. Build a network of operators and ask them first. Always. I pay referral bonuses because it's still cheaper than a bad hire.

**A-Tier: Twitter/X and niche communities.**
The best operators are posting their work publicly. They're in Discord servers for their craft. They're on Twitter sharing what they've built. These people aren't on job boards because they don't need to be. Find them where they hang out and reach out directly.

**B-Tier: LinkedIn (with the right approach).**
LinkedIn works if you use it like a search engine, not a job board. Don't post and pray. Search for people with specific skills, look at their actual work, and send personalized messages. The "Easy Apply" feature attracts the lowest-effort candidates.

**C-Tier: Upwork and freelance platforms.**
Good for project-based work with clear deliverables. Bad for finding long-term team members. The platform incentivizes volume over quality. If you use it, filter by earnings over $10K and job success score above 90%.

**D-Tier: Indeed, ZipRecruiter, traditional job boards.**
These are where you go to get flooded with unqualified applicants. The signal-to-noise ratio is terrible. I only use these for entry-level roles where volume matters.

## How to actually source

1. **Post your JD in 2-3 niche communities** (Slack groups, Discord servers, subreddits specific to the role)
2. **Send 10 cold DMs per day** to people whose public work impresses you
3. **Ask 5 people in your network** if they know someone perfect for the role
4. **Post on LinkedIn and Twitter** with a real description of the work, not corporate jargon

## The cold DM template that works

"Hey [name], I've been following your work on [specific thing]. We're building [one sentence about the project] and I think you'd be a great fit for [role]. Interested in a 15-minute call this week?"

**Short. Specific. Respectful of their time.** That's it.

## Where NOT to look

- Agencies that charge 20-30% placement fees (you're paying for their marketing, not better candidates)
- "Talent marketplaces" with monthly subscriptions
- Anyone who mass-applies to everything (check their application - if it's generic, skip it)`,
    takeaways: [
      "Referrals from trusted operators are the highest-quality talent source every time",
      "The best people aren't on job boards - find them on Twitter/X, Discord, and niche communities",
      "Cold DMs work when they're short, specific, and reference the person's actual work",
      "Traditional job boards are only worth it for entry-level volume hiring"
    ],
    exercise: "Map out your top 5 talent sources for your next hire. For each source, write down: (1) where you'll post or search, (2) how many people you'll reach out to, and (3) your message template. Then send 5 cold DMs this week to people whose work impresses you."
  },

  "01-3": {
    title: "Screening, interviews, and testing candidates",
    duration: "6 min read",
    content: `I've been burned by people who interview like A-players and perform like C-players. Resumes lie. Interviews are performances. The only thing that doesn't lie is the work. Here's how I screen now.

## Phase 1: Application screening (5 minutes per person)

Before you look at a single resume, check:
1. **Did they answer the filter question?** No answer = instant reject. This alone eliminates 60% of applicants.
2. **Did they customize anything?** Generic cover letter = they applied to 50 jobs today. Skip.
3. **Do they have proof of work?** Portfolio, GitHub, case studies, anything. No proof = risky.

**Spend 5 minutes max per application.** If you're spending more, your JD isn't filtering well enough.

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

## Phase 4: Reference check (10 minutes)

Call one reference. Ask one question: **"Would you hire this person again?"** The pause before the answer tells you everything. A fast, enthusiastic "absolutely" is a green light. Anything else is a red flag.`,
    takeaways: [
      "Always use a paid async test before any interview - it reveals what resumes and calls can't",
      "The filter question in your application eliminates 60% of unqualified candidates instantly",
      "Structure interviews around three questions: can they, will they, and do they communicate well",
      "One reference check question matters: 'Would you hire this person again?'"
    ],
    exercise: "Design a paid test project for your next hire. Define: (1) the deliverable, (2) the brief/instructions, (3) the deadline, (4) the pay amount, and (5) your evaluation criteria (what does a pass vs. fail look like). Keep the test under 4 hours of work."
  },

  "01-4": {
    title: "Making the offer and onboarding fast",
    duration: "5 min read",
    content: `You found the person. They passed the test. The interview went well. Now most people fumble by taking too long to make the offer or having zero onboarding. A-players have options. Move fast or lose them.

## Making the offer

**Speed matters.** The best candidates are talking to other companies. If you wait a week to send an offer, someone else already closed them. My rule: **offer goes out within 24 hours of the final interview.**

**What the offer should include:**
- **Role and title** (exactly what was discussed)
- **Compensation** (base, bonus structure if any, equity if applicable)
- **Start date** (ideally within 1-2 weeks)
- **Trial period** (30-90 days with clear success criteria)
- **Working arrangement** (hours, location, tools provided)

**The trial period is key.** Frame it as mutual: "We both get 90 days to make sure this is the right fit." This protects you and actually makes candidates more comfortable, not less. They know they won't be stuck if it's not right either.

**Always put it in writing.** Even for contractors. A simple agreement covering scope, pay, timeline, and IP ownership. No handshake deals. I learned this the hard way.

## The 7-day onboarding system

Most companies throw new hires into the deep end and wonder why they're lost for 3 months. Here's my onboarding framework:

**Day 1: Context dump**
- 30-minute call walking through the company, team, and their role
- Access to all tools (set this up BEFORE they start)
- Link to the team handbook/wiki
- Introduce them to everyone they'll work with directly

**Day 2-3: Shadow and learn**
- They shadow you or a senior team member
- Watch recorded Looms of key processes
- Read through existing SOPs
- Their only job: ask questions and take notes

**Day 4-5: Guided reps**
- They do real work with your review
- Assign a small, real task with low stakes
- Provide feedback within 24 hours
- Correct course immediately - don't let bad habits form

**Day 6-7: First solo project**
- Give them ownership of one small thing
- Set a clear deliverable and deadline
- Check in briefly but let them run
- Evaluate: Did they deliver? Did they ask good questions? Did they communicate proactively?

## The 30-day checkpoint

At day 30, have an honest conversation:
- "Here's what's going well."
- "Here's what needs to improve."
- "Here's what success looks like by day 60."

**Document everything.** If someone isn't working out, you need a paper trail. If they're crushing it, you want to know exactly what's working so you can replicate it with future hires.

## Common onboarding mistakes
- No tool access on day 1 (kills momentum)
- No clear first task (they sit around confused)
- No feedback for 2 weeks (bad habits solidify)
- Expecting full productivity in week 1 (unrealistic)`,
    takeaways: [
      "Send offers within 24 hours of the final interview - A-players have options and won't wait",
      "Always include a 30-90 day trial period framed as mutual, with clear success criteria",
      "Use a 7-day onboarding system: context dump, shadow, guided reps, then first solo project",
      "Hit the 30-day checkpoint with honest feedback and documented expectations for day 60"
    ],
    exercise: "Build your 7-day onboarding plan for your next hire. For each day, list: (1) what they'll do, (2) what tools/access they need, (3) who they'll interact with, and (4) what the deliverable or learning outcome is. Set up all tool access now so it's ready when they start."
  },

  "02-1": {
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

## The documentation debt trap

Don't try to document your entire business in a weekend. You'll burn out and quit. Instead, document **one process per day** as you encounter it. In 30 days, you'll have 30 documented processes. In 90 days, your business runs without you.`,
    takeaways: [
      "Documentation exists to remove you as the bottleneck - if you vanish for a week, can the business run?",
      "Only document things you do repeatedly, will delegate, break when done wrong, or keep explaining",
      "Use the 15-minute method: Loom recording + bullet point summary + common mistakes",
      "Document one process per day as you encounter it instead of trying to do everything at once"
    ],
    exercise: "Pick the one process you explain to people most often. Set a 15-minute timer. Record a Loom walking through it, write 5-10 bullet steps, and add 2-3 common mistakes. Save it in a shared location and send it to the next person who asks."
  },

  "02-2": {
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

## Where to put them

SOPs need to live where people work. Not in a random Google Drive folder.

- **Notion database** with tags by department and process type
- **Pinned in the relevant Slack channel**
- **Linked in the project management tool** (Linear, Asana, etc.) where the task lives

**The rule:** It should take fewer than 10 seconds to find any SOP. If it takes longer, your system is broken.

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
    exercise: "Take your most important recurring process and write a one-page SOP using the structure above: title, purpose, trigger, numbered steps (one action each), output, owner, and date. Put it where your team will actually see it. Then ask someone on your team to follow it without any additional explanation from you. Whatever they get confused by, fix in the SOP."
  },

  "02-3": {
    title: "Tool stack: Notion, Loom, Slack, Linear",
    duration: "5 min read",
    content: `Your tool stack is either making your team faster or creating more work. Most teams have too many tools, use each one wrong, and spend half their day switching between apps. Here's the stack I run and exactly how each tool fits.

## The core 4

**Notion = your brain.** This is where everything lives. SOPs, meeting notes, project wikis, client databases, team handbook. If it's information that needs to be referenced later, it goes in Notion.

**How I structure Notion:**
- Top level: one page per department (Ops, Sales, Marketing, Product)
- Inside each: databases for SOPs, projects, and resources
- Every database has consistent tags: status, owner, last updated
- Team handbook is its own section: onboarding, policies, contacts

**Loom = your voice.** Async video that replaces 80% of meetings. Use it for walkthroughs, feedback, process explanations, and status updates. A 3-minute Loom replaces a 30-minute meeting.

**When to Loom instead of type:**
- Explaining anything with more than 3 steps
- Giving feedback on visual work (designs, websites, decks)
- Walking someone through a new process
- Any context that's hard to convey in text

**Slack = real-time coordination.** Not a documentation tool. Not a project management tool. Slack is for quick decisions, urgent issues, and team culture.

**Slack rules I enforce:**
- Use channels, not DMs (transparency > privacy for work stuff)
- Threads always (main channels stay clean)
- No "hey" messages without the actual question (respect people's time)
- Status updates go in the dedicated channel, not scattered everywhere
- Anything important gets moved to Notion (Slack is temporary, Notion is permanent)

**Linear = your work tracker.** Issues, sprints, roadmaps. Every task that needs to get done lives here with an owner, deadline, and priority. If it's not in Linear, it doesn't exist.

**Linear setup:**
- One project per major initiative
- Issues broken into tasks that take 1-4 hours each
- Labels for type: bug, feature, ops, content
- Weekly cycles (sprints) to maintain rhythm

## How they connect

The flow is: **Linear assigns the work > Slack coordinates in real time > Loom explains context > Notion stores the knowledge.**

Don't reverse this. Don't manage projects in Slack. Don't store SOPs in Linear. Don't use Notion for real-time chat. Each tool has one job.

## Tools I've killed

- **Email for internal communication** (moved to Slack)
- **Google Docs for SOPs** (moved to Notion)
- **Zoom for quick updates** (replaced with Loom)
- **Trello / Asana** (replaced with Linear - it's faster and less cluttered)

## The "one more tool" trap

Every new tool has a learning curve, a subscription cost, and integration overhead. Before adding anything, ask: **"Can one of my existing 4 tools do this 80% as well?"** If yes, don't add the new tool. Simplicity scales. Complexity breaks.`,
    takeaways: [
      "Four core tools: Notion (knowledge), Loom (async video), Slack (real-time coordination), Linear (task tracking)",
      "Each tool has one job - don't manage projects in Slack or store docs in Linear",
      "The flow: Linear assigns work, Slack coordinates, Loom explains, Notion stores knowledge",
      "Before adding any new tool, ask if your existing stack can handle it 80% as well"
    ],
    exercise: "Audit your current tool stack. List every tool your team uses and what it's used for. For each one, decide: keep (it maps to one of the core 4 functions), consolidate (move its function into an existing tool), or kill (it's redundant). Aim to cut at least 2 tools this week."
  },

  "02-4": {
    title: "AI-generated documentation and updates",
    duration: "5 min read",
    content: `The biggest excuse for not documenting is "I don't have time." AI just eliminated that excuse. You can now generate, update, and maintain documentation in a fraction of the time it used to take.

## AI for creating documentation

**Method 1: Transcript to SOP.**
Record yourself doing the process on Loom (you should be doing this anyway). Download the transcript. Paste it into Claude or ChatGPT with this prompt:

"Turn this transcript into a step-by-step SOP. Use numbered steps with one action each. Add a purpose statement, trigger condition, and common mistakes section. Keep it under one page."

**You'll get a clean SOP in 30 seconds.** Review it, fix anything the AI missed, and publish. What used to take an hour now takes 10 minutes.

**Method 2: Meeting notes to action items.**
After any meeting, paste your rough notes (or the AI transcript from your meeting tool) into Claude:

"Extract all action items from these meeting notes. Format as: task, owner, deadline. Flag anything that was discussed but has no clear owner or deadline."

**Method 3: Brain dump to structured doc.**
When you know the process but don't want to structure it, just talk. Open a voice memo app, explain the process for 5 minutes, transcribe it, and feed it to AI:

"Organize this brain dump into a structured document with headers, bullet points, and clear sections. Remove filler words and repetition. Keep my voice and tone."

## AI for maintaining documentation

Documentation goes stale. Here's how AI keeps it fresh:

**Weekly doc review prompt:**
"Here's our SOP for [process]. Here's what actually happened this week: [paste Slack messages, updates, or your own notes]. Does the SOP need updating? If so, provide the updated version with changes highlighted."

**Changelog generation:**
When you update an SOP, paste the old and new versions into AI:

"Compare these two versions and generate a changelog. List what changed, what was added, and what was removed. Keep it brief."

This gives your team a quick summary of what's different without reading the whole doc.

## AI for status updates and reporting

**Daily standups:**
Instead of writing a standup from scratch, paste your Linear tasks and Slack activity into AI:

"Based on these tasks and messages, write a brief standup update: what I did yesterday, what I'm doing today, and any blockers."

**Weekly team updates:**
Pull data from your project tracker and paste it in:

"Summarize this week's progress for the team. Highlight: completed items, items in progress, blockers, and priorities for next week. Keep it under 200 words."

## The key rule

**AI generates. You review.** Never publish AI-generated documentation without reading it. AI doesn't know your specific context, edge cases, or team quirks. It gets you 80% there. The last 20% is your judgment.

Think of AI as a documentation intern who works instantly but always needs a manager's review before anything goes live.`,
    takeaways: [
      "Record yourself doing the process, transcribe it, and use AI to turn it into a structured SOP in minutes",
      "Use AI to extract action items from meetings, generate changelogs, and write status updates",
      "Run a weekly doc review by feeding AI your SOP plus what actually happened to spot needed updates",
      "AI generates, you review - never publish without reading and adding your specific context"
    ],
    exercise: "Pick a process you haven't documented yet. Record yourself explaining it (voice memo or Loom), transcribe it, and use AI to turn it into a formatted SOP. Time yourself: the whole thing should take under 15 minutes. Review the AI output, fix what's wrong, and publish it."
  },

  "03-1": {
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

## The 1-on-1 doc

Keep a running Google Doc or Notion page for each direct report. Before each meeting:
- They add their topics
- You add yours
- Review action items from last week

**This doc is gold during performance reviews.** You'll have 6 months of documented conversations, feedback, and progress instead of trying to remember what happened.

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
    exercise: "Set up a 1-on-1 doc for each person you manage (or will manage). Add the question framework from this lesson. Schedule recurring 30-minute 1-on-1s weekly. Before your next one, add 2 topics to your agenda and ask your direct report to add theirs before the meeting."
  },

  "03-2": {
    title: "Setting goals and tracking performance (OKRs, KPIs)",
    duration: "6 min read",
    content: `If you don't define what winning looks like, everyone on your team has a different definition. Some people think "doing their best" is enough. Some think showing up on time is success. You need numbers. Specific, measurable, time-bound numbers that everyone agrees on.

## OKRs vs KPIs: when to use each

**KPIs (Key Performance Indicators)** are ongoing metrics you track continuously. They measure the health of your business or team.

Examples:
- Revenue per month
- Customer response time
- Content pieces published per week
- Bug fix turnaround time

**OKRs (Objectives and Key Results)** are time-bound goals you set quarterly. They push the team toward specific outcomes.

- **Objective:** What you want to achieve (qualitative, inspiring)
- **Key Results:** How you'll measure it (quantitative, specific)

**Example OKR:**
- Objective: Build a world-class client onboarding experience
- KR1: Reduce average onboarding time from 14 days to 5 days
- KR2: Achieve 90%+ client satisfaction score in onboarding survey
- KR3: Zero missed onboarding steps across all new clients

**Use KPIs for "keep the lights on" metrics. Use OKRs for "move the needle" goals.**

## How to set goals that work

**The SMART filter still works:**
- **Specific:** "Increase revenue" is useless. "Increase MRR from $10K to $15K" is a goal.
- **Measurable:** If you can't put a number on it, you can't track it.
- **Achievable:** Stretch goals are fine. Impossible goals demoralize.
- **Relevant:** Every goal should connect to a business outcome.
- **Time-bound:** No deadline = no urgency.

**Set goals with your team, not for them.** People commit to goals they helped create. Walk through the objective, propose key results, and ask: "Is this achievable? What would you change?" When they have input, they own it.

## Tracking performance

**Weekly check-in:** 5-minute review of KPIs. Are we green, yellow, or red? Don't overcomplicate this. A simple traffic light system works.

**Monthly deep dive:** 30 minutes reviewing OKR progress. For each key result: where are we, what's working, what's blocking us, do we need to adjust?

**Quarterly review:** Full OKR review. Score each key result 0-1.0. A score of 0.7 is considered success (if you're hitting 1.0 on everything, your goals aren't ambitious enough).

## The dashboard

Build a simple dashboard your whole team can see. Notion, Google Sheets, or a proper tool like Databox. Include:

- 3-5 KPIs with current values and targets
- OKR progress (percentage toward each key result)
- Updated weekly (assign an owner for updates)

**Visibility drives accountability.** When everyone can see the numbers, nobody can hide from underperformance, and top performers get recognized automatically.

## The biggest mistake

**Setting goals and never looking at them again.** I've seen teams do a big goal-setting session in January and not review until December. That's not goal-setting, that's wishful thinking. Review weekly. Adjust monthly. Score quarterly. Repeat.`,
    takeaways: [
      "KPIs track ongoing business health; OKRs push toward specific quarterly outcomes - use both",
      "Set goals with your team, not for them - people commit to goals they helped create",
      "Use a simple traffic light system for weekly KPI check-ins and monthly OKR deep dives",
      "Build a visible dashboard everyone can see - visibility drives accountability automatically"
    ],
    exercise: "Define 3 KPIs for your team or business and 1 OKR for this quarter. For the OKR, write one clear objective and 3 measurable key results. Build a simple tracking dashboard in Notion or Google Sheets and share it with your team. Set a recurring weekly reminder to update it."
  },

  "03-3": {
    title: "Giving feedback that changes behavior",
    duration: "5 min read",
    content: `Most feedback is either too vague to be useful or too harsh to be received. "Good job" teaches nothing. "You messed up" creates defensiveness. The goal of feedback is behavior change. If behavior doesn't change after feedback, you failed, not them.

## The SBI framework

The simplest, most effective feedback framework I've used:

- **Situation:** When and where the behavior happened
- **Behavior:** What specifically they did (observable actions, not interpretations)
- **Impact:** What effect it had

**Example (positive):**
"In yesterday's client call (situation), you proactively brought up the timeline risk before the client asked (behavior). That built trust and saved us from a surprise escalation next week (impact)."

**Example (constructive):**
"In the project update this morning (situation), you reported the feature was on track when the dev team told me yesterday it's two days behind (behavior). Now the client is expecting delivery Friday and we'll have to reset their expectations, which hurts our credibility (impact)."

**Why SBI works:** It's specific, it's based on facts not feelings, and it connects behavior to outcomes. The person can't argue with what they did. They can only decide whether they want that impact to continue.

## Timing matters

**Give feedback within 24 hours.** The longer you wait, the less impact it has. Waiting until a quarterly review to mention something that happened in January is useless. The person doesn't remember the context, and the behavior has been reinforced for months.

**Positive feedback: public or private, either works.** Some people love public recognition. Some prefer private. Ask them.

**Constructive feedback: always private.** Never criticize someone in front of their peers. It destroys trust instantly and they won't hear a word you say because they're focused on the embarrassment.

## Making it a conversation, not a lecture

After delivering the SBI, ask: **"What's your perspective on this?"** Then listen. Sometimes there's context you don't have. Maybe the dev team told them it was on track and the delay happened after. Give them space to share their side.

Then move to: **"What can we do differently next time?"** Let them propose the solution. People follow through on their own ideas more than instructions.

## The feedback ratio

Research (Losada ratio) suggests teams perform best with roughly **5 positive interactions for every 1 constructive one.** This doesn't mean you avoid hard feedback. It means you also catch people doing things right and tell them. Most managers only give feedback when something goes wrong. That's how you build a team that's afraid to take risks.

## When feedback doesn't work

If you've given clear, specific feedback 3 times and the behavior hasn't changed:

1. **Check if it's a skill issue or a will issue.** Can they do it but aren't, or do they not know how?
2. **For skill: provide training or support.** Pair them with someone better, send them a resource, invest in their development.
3. **For will: have a direct conversation.** "I've brought this up three times. Help me understand what's getting in the way." If there's no real blocker, this is a performance issue and you move to a formal improvement plan.`,
    takeaways: [
      "Use the SBI framework: Situation, Behavior, Impact - specific facts, not vague feelings",
      "Give feedback within 24 hours while context is fresh; constructive feedback always in private",
      "Aim for a 5:1 ratio of positive to constructive feedback to build a team that takes risks",
      "If feedback doesn't work after 3 tries, determine if it's a skill issue (train) or a will issue (escalate)"
    ],
    exercise: "Think of one recent positive and one recent constructive situation with a team member. Write SBI feedback for both. Deliver the positive feedback today. Schedule a private time for the constructive feedback this week. After delivering it, ask for their perspective and co-create a solution."
  },

  "03-4": {
    title: "Dealing with underperformance and exits",
    duration: "6 min read",
    content: `Nobody likes firing people. But keeping underperformers is worse than firing them. It kills morale for your A-players, it drags down team output, and it sends the message that mediocrity is acceptable. If you're avoiding a hard conversation, you're choosing your comfort over your team's success.

## Identifying underperformance early

Underperformance doesn't start with missed deadlines. It starts with pattern changes:

- **Quality drops gradually.** Work that used to be polished now needs constant revision.
- **Communication decreases.** They stop asking questions, skip standups, go quiet in Slack.
- **Deadlines slip without explanation.** Not once (that happens), but repeatedly.
- **Attitude shifts.** Less enthusiasm, more complaints, resistance to feedback.
- **Other team members compensate.** This is the silent killer. Your A-players pick up slack and resent it.

**Track these patterns.** Write them down with dates. You'll need this documentation later.

## The performance improvement plan (PIP)

Before you fire anyone, give them a clear, documented chance to improve. This isn't HR theater - it's the right thing to do and it protects you legally.

**The PIP should include:**
1. **Specific problems** (with examples and dates, not vague "attitude issues")
2. **Clear expectations** for what success looks like
3. **A timeline** (typically 30 days, sometimes 60)
4. **Support you'll provide** (training, resources, adjusted workload)
5. **Consequences** if expectations aren't met (termination)

**Put it in writing. Have them sign it.** This isn't about being cold. It's about clarity. The person deserves to know exactly where they stand and exactly what they need to do.

## The direct conversation

When you sit down for the PIP conversation:

1. **Be direct.** "Your performance in [specific areas] hasn't met expectations. Here's what I've observed." Share the documented examples.
2. **Listen.** There might be personal issues, unclear expectations, or fixable problems. Hear them out.
3. **Present the plan.** "Here's what needs to change, by when, and how I'll support you."
4. **Set the check-in cadence.** Weekly during the PIP period. Not monthly. Weekly.
5. **Follow through.** Check in when you said you would. Provide the support you promised. Document progress or lack thereof.

## When it's time to let someone go

If the PIP period ends and expectations weren't met, or if the issue is severe enough to warrant immediate termination (theft, dishonesty, harassment), it's time.

**The exit conversation framework:**
1. Get straight to the point. "I've made the decision to end our working relationship effective [date]."
2. Be brief on the reason. "As we discussed during your performance plan, [specific unmet expectations]."
3. Cover logistics. Final pay, equipment return, access removal, any transition needs.
4. Be human. "I appreciate the work you've put in. This wasn't an easy decision."
5. Keep it under 15 minutes. This isn't a negotiation.

**After the exit:**
- Remove access to all tools and systems immediately
- Communicate to the team within 24 hours (brief, professional, no gossip)
- Reassign their work with clear owners
- Don't trash-talk them. Ever. To anyone.

## The hardest part

The hardest part isn't the firing conversation. It's the weeks before when you know it's coming and you keep hoping things will change. They rarely do. **If you know in your gut someone isn't going to make it, trust that instinct.** Start the process. Waiting helps no one - not you, not the team, and not the underperformer who could be finding a role that's a better fit.`,
    takeaways: [
      "Watch for early signs: declining quality, less communication, slipping deadlines, and A-players compensating",
      "Always do a documented PIP with specific problems, clear expectations, timeline, and consequences",
      "Keep the exit conversation under 15 minutes - be direct, brief, and human",
      "Remove access immediately after an exit and communicate to the team within 24 hours"
    ],
    exercise: "Think of someone on your team (current or past) who was or is underperforming. Write out: (1) the specific observed patterns with examples, (2) what a 30-day PIP would look like for them, and (3) the success criteria they'd need to meet. Even if you don't need this now, you will eventually. Having the framework ready is the difference between acting fast and agonizing for months."
  },

  "04-1": {
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

## Dashboard design principles

**Less is more.** 5-8 metrics max on any single view. If you have 30 metrics, nobody will look at it.

**Use visual hierarchy.** The most important number should be the biggest thing on the screen. Supporting metrics underneath. Details on click-through.

**Traffic light system.** Green, yellow, red. Instantly scannable. Every metric needs a target so the color is objective, not subjective.

**One source of truth.** Every metric on the dashboard should have one clear data source. If revenue is in two places with two different numbers, you have a data integrity problem, not a dashboard.

## Who sees what

Not everyone needs the same view:
- **Executives:** Revenue, burn rate, top-level delivery metrics
- **Managers:** Team KPIs, project status, resource utilization
- **Individual contributors:** Their tasks, their metrics, team goals

**Don't overwhelm people with data they can't act on.** A designer doesn't need to see the burn rate. The CEO doesn't need to see individual task completion.

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
    exercise: "Build a v1 dashboard in Notion or Google Sheets. List your 5-8 most important metrics across revenue, delivery, and team health. Add current values, targets, and color coding. Set it as your browser homepage or pin it in Slack. Check it every morning for one week and note how it changes your decision-making."
  },

  "04-2": {
    title: "Automating reporting and status updates",
    duration: "5 min read",
    content: `Reporting is necessary. Manual reporting is a waste of time. Every hour someone spends compiling a status update is an hour they could spend doing actual work. The goal: **reporting that generates itself.**

## What should be automated

**Automate anything that:**
- Happens on a recurring schedule (daily, weekly, monthly)
- Pulls data from existing tools you already use
- Follows the same format every time
- Takes more than 10 minutes to compile manually

**Don't automate:**
- Analysis and interpretation (AI can help, but a human needs to validate)
- Exception reporting (unusual situations need human judgment)
- Client-facing reports that need a personal touch

## The automation stack

**Level 1: Templates + copy-paste (5 min saved per report)**
- Create a template for every recurring report
- Pre-fill sections that don't change
- Use consistent formatting so your eyes know where to look

This isn't really automation, but it cuts reporting time in half immediately.

**Level 2: Zapier/Make integrations (30+ min saved per report)**
- Connect your tools to auto-populate data
- Example: Linear tasks completed this week auto-populate a Notion database
- Example: Stripe revenue data auto-updates your Google Sheet dashboard
- Example: Slack channel summary auto-generates via scheduled Zap

**Set these up:**
- Linear > Notion: Completed tasks log to a "Weekly Wins" database
- Stripe > Sheets: Revenue data updates daily
- Calendar > Slack: Today's meetings posted to #team-schedule every morning
- Form submissions > Notion: New leads auto-added to pipeline database

**Level 3: AI-generated summaries**
- Feed raw data into Claude/ChatGPT on a schedule
- Output: formatted status update ready to send
- Human reviews and sends (don't auto-send without review)

## The weekly team update (automated)

Here's my workflow for generating a weekly team update in under 5 minutes:

1. **Linear auto-exports** completed tasks and in-progress items to a Notion database (Zapier)
2. **I open the Notion view** filtered to this week
3. **Copy the data into Claude** with the prompt: "Write a weekly team update covering: completed items, in-progress items, blockers, and priorities for next week. Keep it under 200 words. Use bullet points."
4. **Review the output** (usually 90% accurate, I tweak 1-2 things)
5. **Post to #team-updates in Slack**

Total time: **5 minutes.** Used to take 30+.

## Client reporting

For client-facing reports, the same principle applies but with more polish:

1. Auto-pull metrics from your tools
2. Use AI to draft the narrative
3. Drop it into a branded template
4. Review, personalize, and send

**Pro tip:** Schedule client reports for the same day every week or month. Consistency builds trust. A client who gets an update every Monday at 9am before they have to ask for it will never question your professionalism.

## The rule of automation

**If you've manually created the same report 3 times, automate it.** The first time, you're learning the format. The second time, you're confirming the pattern. The third time, you're wasting time.`,
    takeaways: [
      "Automate anything recurring, data-driven, and format-consistent - keep analysis and exception reporting human",
      "Three levels: templates (quick win), Zapier/Make integrations (real automation), AI-generated summaries (next level)",
      "Weekly team updates can go from 30+ minutes to 5 minutes with the right automation flow",
      "If you've manually created the same report 3 times, it's time to automate it"
    ],
    exercise: "Identify your most time-consuming recurring report. Map out: (1) where the data comes from, (2) what format it needs to be in, (3) who receives it. Set up one Zapier/Make automation that pulls at least part of the data automatically. Then use AI to draft the next version and time how much faster it is."
  },

  "04-3": {
    title: "Identifying bottlenecks before they break you",
    duration: "5 min read",
    content: `Every operation has bottlenecks. The question is whether you find them before they cause a crisis or after. Most operators are reactive - they fix problems after things break. The best operators are proactive - they see the constraint forming and address it before anyone notices.

## What bottlenecks actually look like

A bottleneck is any point in your process where work piles up because capacity can't match demand. They show up as:

- **One person everyone's waiting on.** If removing one person would stop the entire operation, that's a bottleneck.
- **A step that always takes longer than expected.** Client approval, QA review, legal sign-off - wherever work consistently stalls.
- **Growing queues.** If your backlog keeps growing while your output stays flat, there's a constraint somewhere.
- **Repeated context switching.** When one person handles too many different functions, every task takes longer because they're constantly switching gears.
- **The "it's fine until it isn't" system.** Processes that work at low volume but collapse when volume increases. You won't see these until it's too late unless you stress-test.

## How to find them

**Method 1: The constraint walk.**
Map your process from start to finish. For each step, note: who does it, how long it takes, and what the capacity is. The step with the lowest capacity relative to demand is your bottleneck.

Example: Your content pipeline is Write (2 articles/week) > Edit (5 articles/week) > Design (1 article/week) > Publish (10 articles/week). Design is the bottleneck. Everything before it will pile up.

**Method 2: Ask the team.**
In your next 1-on-1, ask: "What's the one thing that slows you down most?" You'll hear the bottleneck from 3 different people before lunch.

**Method 3: Look at the data.**
Check your project tracker. Where are tasks sitting in "in progress" or "waiting" the longest? Sort by cycle time. The column with the highest average time is your bottleneck.

**Method 4: The "what if" test.**
Ask: "What if volume doubled tomorrow? What breaks first?" The answer is your biggest constraint. Even if volume won't double, this reveals where you're closest to capacity.

## How to fix them

**Option 1: Increase capacity.** Hire, outsource, or reassign resources to the bottleneck step.

**Option 2: Reduce demand on the bottleneck.** Can you eliminate unnecessary work flowing through it? Does every deliverable actually need to go through this step?

**Option 3: Parallelize.** Can the bottleneck step run alongside other steps instead of blocking them?

**Option 4: Automate.** If the bottleneck is a repetitive, rule-based task, build automation or use AI to handle it.

**Option 5: Change the process.** Sometimes the step shouldn't exist at all. Challenge whether it's truly necessary.

## Prevention over detection

The best way to handle bottlenecks is to prevent them:

- **Build with capacity headroom.** If you need 10 widgets/week, build capacity for 15. The buffer saves you when demand spikes.
- **Cross-train your team.** If only one person can do a critical step, you're one sick day away from a crisis.
- **Review your constraint map monthly.** Bottlenecks shift as your business grows. What's fine today might break next month.`,
    takeaways: [
      "Bottlenecks show up as one person everyone waits on, growing queues, and systems that collapse at higher volume",
      "Use four methods: constraint walk (map capacity), ask the team, check cycle time data, and the 'what if volume doubled' test",
      "Fix bottlenecks by increasing capacity, reducing demand, parallelizing, automating, or eliminating the step",
      "Prevent future bottlenecks with capacity headroom, cross-training, and monthly constraint reviews"
    ],
    exercise: "Map out your core workflow from start to finish. For each step, write down: who does it, how long it takes, and what the maximum weekly capacity is. Identify the step with the lowest capacity relative to demand. That's your bottleneck. Write a plan to fix it using one of the five options above."
  },

  "04-4": {
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

## The 80% rule

If someone can do a task 80% as well as you, delegate it. **Your time is not worth the 20% quality difference.** That 20% gap closes with practice and feedback. What doesn't close is the opportunity cost of you doing $20/hour tasks when you should be doing $200/hour work.

Calculate your hourly rate. If you make $100K/year, your hour is worth ~$50. Every task you do that you could pay someone $15-25/hour to do is losing you money.

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

## The mindset shift

Delegation isn't about dumping tasks on people. It's about **building a machine that operates without you.** Every task you delegate successfully is a piece of freedom. Every task you hold onto is a chain.

Your job as an operator isn't to do the work. It's to **build the system that does the work.** The sooner you internalize this, the faster you scale.`,
    takeaways: [
      "Sort everything into four buckets: only you, train and delegate, delegate now, eliminate entirely",
      "Every delegated task needs a clear what, why, when, how, and example of what good looks like",
      "If someone can do it 80% as well as you, delegate it - your time isn't worth the 20% gap",
      "Your job isn't to do the work, it's to build the system that does the work"
    ],
    exercise: "Track everything you do for one full workday. At the end, sort each task into the four buckets: only me, train and delegate, delegate now, eliminate. Pick the top 3 tasks from the 'delegate now' bucket and create delegation briefs for each one (what, why, when, how, example). Assign them to someone this week."
  },

  "05-1": {
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

## Admin automation

**Email triage:** AI can categorize incoming emails by urgency and type. Set up rules in your email client, then use AI to draft responses for routine messages.

**Inbox zero prompt:**
"Here are my 15 unread emails. Categorize each as: (A) needs my personal response, (B) can be handled with a template response - draft it, (C) FYI only - no response needed, (D) delete/unsubscribe."

**Document management:** Use AI to organize files, summarize documents, and extract key information from contracts or proposals.

**Travel coordination:** Paste your travel requirements and preferences, and AI generates a complete itinerary with alternatives.

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
    exercise: "Pick your biggest admin time waster (scheduling, email, meeting prep, or document management). Set up one AI automation for it this week. For scheduling: set up Calendly + AI buffer management. For email: create your inbox triage prompt and use it for one full week. Track how many hours it saves."
  },

  "05-2": {
    title: "Automating KPI tracking and reporting",
    duration: "5 min read",
    content: `Manual KPI tracking is how metrics die. Someone forgets to update the spreadsheet, numbers get stale, and within a month nobody looks at the dashboard anymore. The fix: build a system where KPIs update themselves.

## The automated KPI stack

**Layer 1: Data source integrations**
Every KPI comes from somewhere. Map each metric to its source:

| KPI | Source | Update frequency |
|-----|--------|-----------------|
| MRR | Stripe | Real-time |
| Tasks completed | Linear | Daily |
| Client satisfaction | Typeform/survey | Weekly |
| Website traffic | Google Analytics | Daily |
| Pipeline value | CRM (HubSpot, etc.) | Real-time |

**Layer 2: Automation connectors**
Use Zapier, Make, or native integrations to pipe data from sources to your dashboard:

- **Stripe > Google Sheets:** New charges auto-log to a revenue tracker
- **Linear > Notion:** Task completions update your delivery database
- **Google Analytics > Sheets:** Weekly traffic summary auto-populates
- **HubSpot > Sheets:** Pipeline value updates in real-time

**Layer 3: AI analysis layer**
Raw numbers are useless without interpretation. Schedule a weekly AI analysis:

"Here are this week's KPIs compared to last week and our targets. For each metric: (1) state whether we're above, at, or below target, (2) identify the trend direction, (3) flag anything that needs immediate attention, and (4) suggest one action for any metric that's below target."

## Building it step by step

**Week 1: Identify your 5 core KPIs.** Don't track 20 things. Track 5 that actually matter for your business right now.

**Week 2: Set up data sources.** Make sure each KPI has a single, reliable data source. If you're pulling revenue from both Stripe and a manual spreadsheet, pick one.

**Week 3: Build automations.** Connect each data source to your dashboard. Start with the easiest integration (usually Stripe or your project tracker) and add one per day.

**Week 4: Add the AI layer.** Create your weekly analysis prompt. Set a calendar reminder to run it every Monday morning. Feed it the data, review the output, share with the team.

## The weekly KPI email

Automate a weekly email to your team (or yourself) with this format:

**Subject: Weekly KPI Report - [Date]**

- **Revenue:** $X (+/-Y% vs last week) [GREEN/YELLOW/RED]
- **Delivery:** X tasks completed, Y in progress [GREEN/YELLOW/RED]
- **Customer:** X NPS score, Y response time [GREEN/YELLOW/RED]
- **Pipeline:** $X total value, Y new leads [GREEN/YELLOW/RED]
- **Focus this week:** [AI-generated priority based on the data]

**This takes 5 minutes to generate with AI and automations.** Compare that to the 45 minutes it takes to manually compile.

## Advanced: Alerts and anomaly detection

Set up automated alerts for when KPIs cross thresholds:

- Revenue drops 20%+ week over week > Slack alert to #revenue channel
- Customer response time exceeds 24 hours > Alert to team lead
- Pipeline value drops below 3x monthly target > Alert to sales team
- Task completion rate drops below 80% > Alert to ops

Most tools support this natively (Stripe, Linear, HubSpot all have webhook/notification features). For custom alerts, use Zapier with filter conditions.

## The meta-KPI

Track one more thing: **how long it takes to generate your KPI report.** If it takes more than 10 minutes, your automation isn't good enough. Keep reducing friction until reporting is effortless.`,
    takeaways: [
      "Map every KPI to a single data source and connect them to your dashboard with Zapier or Make",
      "Add an AI analysis layer: feed weekly data into Claude for trend analysis, flags, and action suggestions",
      "Automate a weekly KPI email with traffic-light status for each metric and an AI-generated focus area",
      "Set up threshold-based alerts so you're notified instantly when metrics cross critical boundaries"
    ],
    exercise: "Pick your 5 core KPIs. For each one, identify the data source and set up one automation that pulls the data into a central dashboard (Notion or Google Sheets). Then write your weekly AI analysis prompt and run it with this week's data. Time the whole process - your goal is under 10 minutes."
  },

  "05-3": {
    title: "AI tools for hiring and HR workflows",
    duration: "5 min read",
    content: `Hiring is one of the most time-consuming operations in any business. Reviewing resumes, scheduling interviews, sending follow-ups, checking references - it's a mountain of repetitive work wrapped around a few critical decisions. AI can handle the repetitive parts so you can focus on the decisions.

## AI-powered job descriptions

We covered writing great JDs in Module 01. Here's how to use AI to generate them faster:

**The prompt:**
"Write a job description for a [role] at [company]. The person will own [3 key outcomes]. Requirements: [3-5 must-haves]. Compensation: [range]. Include a filter question that tests [specific skill or quality]. Write in a direct, no-BS tone. Avoid corporate jargon. Keep it under 400 words."

**Then iterate:** "Make the outcomes more specific." "Add a 30/60/90 day expectation." "Make it sound more human."

You go from a blank page to a polished JD in 10 minutes.

## Resume screening with AI

When you get 100+ applications, screening manually takes hours. Here's the AI-assisted workflow:

1. **Export all applications** to a CSV or spreadsheet (most platforms support this)
2. **Feed them to Claude in batches** with this prompt:

"I'm hiring for [role]. Here are the requirements: [list them]. Review these 20 applications and categorize each as: A (strong match, interview), B (possible match, review further), or C (not a match, reject). For each A candidate, explain in one sentence why they stand out. For each C, explain in one sentence why they don't fit."

3. **Review the A and B candidates yourself.** AI does the initial filter; you make the final call.

**This cuts screening time by 70%** while catching candidates you might have skimmed past during manual review.

## Automated interview scheduling

After screening, you need to schedule interviews. Instead of the email back-and-forth:

1. Set up a Calendly link dedicated to interviews
2. Use AI to draft personalized outreach to each A candidate:

"Draft an email to [name] inviting them to interview for the [role] position. Reference something specific from their application: [detail]. Include my Calendly link. Keep it warm and brief."

3. Send. Done.

## AI-assisted interview notes

During or right after the interview, brain-dump your notes into AI:

"Here are my raw notes from the interview with [name] for the [role] position. Organize these into: (1) strengths, (2) concerns, (3) culture fit observations, and (4) my hiring recommendation (hire/maybe/pass). Flag anything I should follow up on in references."

This gives you structured interview notes in seconds instead of trying to organize them yourself later.

## Onboarding automation

When someone is hired, AI can generate their entire onboarding sequence:

"Create a 7-day onboarding plan for a new [role]. Include: daily tasks, tools to set up, people to meet, Looms to watch, and deliverables for each day. The person will be working on [projects] and using [tools]. Include a 30-day checkpoint with evaluation criteria."

## Reference check prep

Before calling references:

"I'm checking references for [name] who's been offered a [role] position. Based on their interview and test project, here are my observations: [paste notes]. Generate 5 targeted reference check questions that would validate my positive observations and explore my concerns."

## The ethical line

**AI assists, you decide.** Never let AI make the final hiring or firing decision. Use it for drafting, screening, summarizing, and organizing. The human judgment on who to bring onto your team is too important to outsource entirely.

Also: be transparent. If candidates ask whether AI is part of your process, tell them. There's nothing wrong with using AI tools. There is something wrong with pretending you personally read 200 resumes when AI screened them.`,
    takeaways: [
      "AI cuts resume screening time by 70% - batch applications into Claude for A/B/C categorization",
      "Use AI to generate job descriptions, personalized interview invites, and structured interview notes",
      "Automate onboarding plans and reference check question generation for every new hire",
      "AI assists the process, but never let it make the final hiring decision - human judgment is non-negotiable"
    ],
    exercise: "Set up an AI-assisted hiring workflow for your next role. Create: (1) your JD generation prompt, (2) your resume screening prompt with specific criteria, (3) your interview notes organization prompt, and (4) your onboarding plan generation prompt. Save all four as templates you can reuse for every future hire."
  },

  "05-4": {
    title: "Building the ops stack of the future",
    duration: "6 min read",
    content: `Everything we've covered in this course comes together here. The future of operations isn't more people doing manual work. It's lean teams powered by AI, connected by smart automations, and guided by real-time data. Here's how to build it.

## The modern ops stack

**Layer 1: Source of truth (Notion)**
Everything starts here. Your team handbook, SOPs, project wikis, KPI databases, client information, meeting notes. Notion is your organization's brain. If it's not in Notion, it doesn't exist.

**Layer 2: Work execution (Linear + domain-specific tools)**
Linear tracks what needs to get done. Domain-specific tools (Figma for design, VS Code for development, Canva for content) are where the work actually happens. Linear is the spine connecting all the limbs.

**Layer 3: Communication (Slack + Loom)**
Slack for real-time coordination and quick decisions. Loom for async context and explanations. Together they eliminate 80% of meetings while keeping everyone aligned.

**Layer 4: Automation (Zapier/Make + custom scripts)**
This is the glue connecting everything. Data flows automatically between tools. Reports generate themselves. Notifications fire when thresholds are crossed. Status updates compile without human input.

**Layer 5: AI layer (Claude, ChatGPT, custom agents)**
AI sits on top of everything else. It analyzes data, generates drafts, screens candidates, writes documentation, summarizes meetings, and handles admin. This layer gets more powerful every month as models improve.

## Building AI agents for ops

The next evolution is **AI agents that handle entire workflows**, not just individual tasks. Here's what this looks like:

**Hiring agent:** Monitors job postings, screens incoming applications, schedules interviews, sends follow-ups, and compiles candidate summaries. You review and make decisions.

**Reporting agent:** Pulls data from all sources every Monday, generates the weekly KPI report, identifies anomalies, and posts the summary to Slack. You review and add commentary.

**Onboarding agent:** When a new hire is added to your HR system, it auto-creates their Notion workspace, sends welcome messages, schedules their first-week meetings, and generates their personalized onboarding plan.

**Client ops agent:** When a new client signs, it creates project folders, sets up communication channels, generates the onboarding checklist, and sends the welcome sequence.

## How to build this progressively

**Phase 1: Manual with templates (Week 1-4)**
Document everything. Create templates for every recurring process. Use AI as a tool you manually prompt for each task.

**Phase 2: Semi-automated (Month 2-3)**
Connect your tools with Zapier/Make. Automate the data flows. Create saved AI prompts for recurring tasks. Build your dashboard.

**Phase 3: Agent-assisted (Month 4-6)**
Build simple AI agents using tools like Claude with custom instructions or platforms like n8n. Start with one workflow (reporting is usually easiest) and expand.

**Phase 4: Autonomous ops (Month 6+)**
Multiple agents handling multiple workflows. You review, approve, and make decisions. The system runs itself for 80% of operations.

## The operator's evolving role

As your ops stack matures, your role shifts:

- **Early stage:** You do everything. You're the operator, admin, manager, and systems builder.
- **Growth stage:** You build systems and delegate execution. You manage people and processes.
- **Scale stage:** You manage the system that manages the people and processes. Your job is strategic: where to invest, what to build next, which bottlenecks to eliminate.
- **Mature stage:** You set direction, review dashboards, make key decisions, and develop your leaders. The machine runs.

**This is what being an operator really means.** Not doing more work. Building the machine that does the work. And now, with AI, that machine is more powerful than ever.

## Your competitive advantage

Most businesses are still running on manual processes, tribal knowledge, and reactive management. If you build what we've covered in this course - documented systems, automated reporting, AI-powered workflows, and a lean team of A-players - you'll operate at 3-5x the efficiency of your competitors. That's not a guess. That's what I've seen building and running operations across multiple businesses.

The tools are available to everyone. The difference is who actually implements them. Be the one who implements.`,
    takeaways: [
      "The modern ops stack has 5 layers: source of truth, work execution, communication, automation, and AI",
      "Build progressively: manual with templates, then semi-automated, then agent-assisted, then autonomous",
      "Your role evolves from doing everything to building the machine that does everything",
      "The competitive advantage isn't access to tools - it's who actually implements them"
    ],
    exercise: "Map your current ops stack against the 5-layer framework. For each layer, write down: (1) what tool you use today, (2) what's manual vs. automated, and (3) one improvement you'll make in the next 30 days. Then create a 90-day roadmap to move from your current phase (manual, semi-automated, agent-assisted) to the next one. Include specific milestones and deadlines."
  }
};

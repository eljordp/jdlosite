export type LessonSection = { heading: string; body: string };
export type LessonAssignment = { title: string; description: string; deliverable: string };
export type QuizQuestion = {
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
};
export type Lesson = {
  title: string;
  readingTime: string;
  overview: string;
  sections: LessonSection[];
  keyTakeaways: string[];
  assignment: LessonAssignment;
  quiz: QuizQuestion[];
};
export type CourseModule = { num: string; title: string; description: string; lessons: Lesson[] };

export const courseData: CourseModule[] = [
  {
    num: '01',
    title: 'Identity & Operator Mindset',
    description: 'Kill the version of yourself that\'s comfortable staying stuck. Build the operating system of someone who actually ships.',
    lessons: [
      {
        title: 'The Operator Audit',
        readingTime: '8 min',
        overview: 'Before you build anything else, you need an honest read on where you actually are — not where you tell people you are. The audit is brutal and necessary.',
        sections: [
          {
            heading: 'What the audit actually measures',
            body: 'Most people assess themselves on intentions, not outputs. You think you\'re an operator because you\'re thinking about the right things. But the audit only looks at one column: what shipped in the last 30 days. Not planned, not started — shipped. I ran this on myself when I was building the DHL Translator App and realized I\'d spent two weeks "planning" instead of building. The moment I started measuring outputs instead of activity, everything changed. The audit isn\'t about making you feel bad. It\'s about getting an honest baseline so you can actually move.',
          },
          {
            heading: 'Running your self-assessment',
            body: 'Pull up a blank doc and answer these four questions without softening them: How many clients paid you this month? What did you charge and why did you charge that number? What did you ship that someone else can use? Where did you spend your last 20 hours of working time? The answers expose the gap between your self-image and your current operating reality. When I first did this seriously, I had $2,550 total in cash collected across three clients. That number told me exactly what level I was operating at — and it made the path forward obvious. You can\'t fix what you won\'t measure.',
          },
          {
            heading: 'Diagnosing your actual bottleneck',
            body: 'After the audit, most people discover one of three bottlenecks: no pipeline (not enough people know what you do), no conversion (people know but they\'re not buying), or no delivery (buying but you\'re not shipping reliably). These require completely different fixes. Conflating them is why people take sales courses when they have a delivery problem, or work on their craft when they have a visibility problem. Be honest about which category you\'re in. For most people reading this, it\'s pipeline — not enough eyeballs on your work, not a skill deficit. That distinction matters more than anything else in this module.',
          },
          {
            heading: 'Setting your 90-day benchmark',
            body: 'Once you know your bottleneck, set a 90-day benchmark that addresses it specifically. Not a goal — a benchmark. A goal is "make more money." A benchmark is "$3,000 in new cash collected in the next 90 days from two clients, with one retainer proposal sent by day 30." Benchmarks are measurable, time-bound, and tied to exactly one lever. If you have a pipeline problem, your benchmark is a volume metric: 20 outreach messages per week. If you have a conversion problem, it\'s a close rate: 50% of calls should result in a yes or a clear no. Lock the benchmark in before you move to the next lesson.',
          },
        ],
        keyTakeaways: [
          'Measure outputs, not activity — only what shipped in 30 days counts as evidence',
          'Pipeline, conversion, and delivery are three separate problems requiring three separate fixes',
          'Most operators reading this have a visibility problem, not a skill problem',
          'A benchmark is specific and measurable — a goal is not',
          'An honest audit is the most valuable 30 minutes you\'ll spend this month',
        ],
        assignment: {
          title: 'Run your operator audit',
          description: 'Answer the four audit questions with zero softening: clients paid this month, what you charged and why, what you shipped that someone else can use, and where your last 20 hours went. Identify your bottleneck — pipeline, conversion, or delivery. Set one 90-day benchmark tied to that specific bottleneck.',
          deliverable: 'A one-page audit doc with your four answers, your diagnosed bottleneck, and your 90-day benchmark with a specific number attached.',
        },
        quiz: [
          {
            question: "According to the operator audit, what's the first thing you should calculate before fixing anything?",
            options: ["Your hourly rate", "Your real revenue numbers from the last 90 days", "Your social media following", "Your number of active clients"],
            correctIdx: 1,
            explanation: "You can't fix what you won't measure. The audit starts with real numbers — not estimates, not rounded up — so you know your actual baseline before diagnosing anything.",
          },
          {
            question: "What are the three distinct bottlenecks the audit diagnoses?",
            options: ["Branding, pricing, and delivery", "Pipeline, conversion, and delivery", "Marketing, sales, and operations", "Visibility, credibility, and capacity"],
            correctIdx: 1,
            explanation: "Pipeline (not enough people know what you do), conversion (they know but aren't buying), and delivery (buying but you're not shipping reliably) are three completely different problems requiring three completely different fixes.",
          },
          {
            question: "What distinguishes a benchmark from a goal?",
            options: ["A benchmark is more ambitious than a goal", "A benchmark is measurable and tied to one specific lever; a goal is vague", "A goal has a deadline and a benchmark doesn't", "Benchmarks are for businesses; goals are personal"],
            correctIdx: 1,
            explanation: "A goal is \"make more money.\" A benchmark is \"$3,000 in new cash collected in the next 90 days from two clients.\" Benchmarks are specific, time-bound, and tied to exactly one lever — that's what makes them actionable.",
          },
          {
            question: "What does the audit column that matters actually measure?",
            options: ["Activity and effort over the past month", "What shipped in the last 30 days that someone else can use", "Client satisfaction scores", "Revenue projections for the next quarter"],
            correctIdx: 1,
            explanation: "The audit only measures outputs — what shipped, not what was planned, started, or in progress. Intentions don't count. Only what shipped and someone else can use.",
          },
        ],
      },
      {
        title: 'Behavioral Architecture & Calendar Design',
        readingTime: '9 min',
        overview: 'Your calendar is not a scheduling tool. It\'s the physical blueprint of who you are becoming. Most people design their calendar around other people\'s priorities. This lesson shows you how to redesign it around outputs.',
        sections: [
          {
            heading: 'Why willpower fails and architecture works',
            body: 'Willpower is a finite resource that depletes by noon. Architecture is a system you set up once that removes the need for willpower entirely. I print my schedule and put it on the wall — not because I\'m disciplined, but because I built an environment where the default action is the right action. When your phone stays in another room until 2:30 PM, you don\'t resist checking it. The decision was already made. When deep work is blocked from 9 to noon every day, you don\'t negotiate with yourself about whether to start. The block is there. You fill it. Most operators waste their best mental hours on email and social because they never designed their day to protect those hours.',
          },
          {
            heading: 'Designing your deep work architecture',
            body: 'Deep work is the only work that moves the needle. Everything else is maintenance. Your deep work window should be your first work block of the day, before communication of any kind opens, and it should be a minimum of two hours — ideally three. During that window, one task only. Not the easiest task, not the most urgent task — the highest-leverage task. For me, that\'s usually building something: a client site, a new system, a pitch deck. When I was building the Pomaika\'i site on deadline, three hours of uninterrupted morning work got done what would have taken a full day of fragmented working. Block it, name it, protect it.',
          },
          {
            heading: 'The weekly review that keeps it honest',
            body: 'Architecture degrades without maintenance. The weekly review is how you catch drift before it becomes a habit. Every Sunday, 20 minutes: look at what you actually did versus what you planned to do. Not to judge yourself — to adjust the system. If you missed your deep work block four out of five days, something in the architecture is broken. Maybe your phone is too accessible. Maybe the block is at the wrong time. Maybe you\'re not being specific enough about what goes in the block. The review finds the failure point and fixes it. Without the review, you\'ll drift back to reactive mode within two weeks. Every serious operator I know has a weekly review ritual. It\'s not optional.',
          },
          {
            heading: 'Protecting the system from your own negotiation',
            body: 'The biggest threat to your calendar architecture is yourself. You will find reasons to break the rules — a "quick" client call at 9 AM, an "important" DM that needs answering now, a meeting that "only takes 20 minutes." Each exception is a negotiation, and each negotiation teaches your brain that the system is flexible. Once the system is flexible, it\'s not a system anymore. Build rules that require zero negotiation: no calls before noon, period. Phone in another room, period. One deep work task per morning block, period. The goal is to eliminate the moment of decision. When there\'s no decision to make, you can\'t make the wrong one. This is how operators stay productive when motivation is low.',
          },
        ],
        keyTakeaways: [
          'Architecture eliminates the need for willpower by making the right action the default action',
          'Deep work before communication every day — your first block is your highest-leverage block',
          'Weekly 20-minute reviews catch drift before it becomes a new default',
          'Every exception to your system is a negotiation that weakens the system',
          'Print your schedule and post it — the physical artifact matters',
        ],
        assignment: {
          title: 'Design and deploy your behavioral architecture',
          description: 'Map your current weekly schedule honestly, then design your target schedule. Identify your deep work window (minimum 2 hours), your communication window, and your review time. Build three hard rules with zero exceptions. Print the target schedule.',
          deliverable: 'Your target schedule printed and on your wall, with three non-negotiable rules written underneath it. Follow it for 7 consecutive days and note where the system broke.',
        },
        quiz: [
          {
            question: "Why does architecture work better than willpower for building productive habits?",
            options: ["Architecture is more inspiring than discipline", "Architecture eliminates the moment of decision so the right action becomes the default", "Architecture requires more initial effort so it feels more committed", "Architecture is easier to explain to others"],
            correctIdx: 1,
            explanation: "Willpower depletes. Architecture is a system you set up once — phone in another room, deep work blocked on the calendar — that removes the need for willpower entirely. No decision moment means no wrong decision.",
          },
          {
            question: "What is the purpose of the weekly review in a behavioral architecture system?",
            options: ["To celebrate wins and set new goals", "To catch drift before it becomes a new default and fix the failure point in the system", "To plan the upcoming week's meetings and calls", "To report progress to an accountability partner"],
            correctIdx: 1,
            explanation: "Without the weekly review, you drift back to reactive mode within two weeks. The review finds where the architecture broke and adjusts the system before drift becomes habit.",
          },
          {
            question: "What type of work should fill your first block of the day?",
            options: ["Email and client communications to clear the backlog", "The easiest task to build momentum", "Deep work on your highest-leverage task, before any communication", "Admin tasks to get them out of the way"],
            correctIdx: 2,
            explanation: "Deep work before communication, every day. Your first block is your highest-leverage block — mental energy is highest, interruptions haven't started. Admin and communication go in later windows after the needle-moving work is done.",
          },
          {
            question: "Why does every exception to your schedule architecture weaken the system?",
            options: ["Exceptions create resentment toward the system", "Each exception is a negotiation that teaches your brain the system is flexible, which dissolves it", "Exceptions signal to clients that you're inconsistent", "Exceptions interrupt your flow state and reduce creativity"],
            correctIdx: 1,
            explanation: "Once the system is flexible, it's not a system. Every exception trains your brain that negotiation is possible. The goal is zero-decision rules — no calls before noon, period — that eliminate the negotiation entirely.",
          },
        ],
      },
      {
        title: 'Decision Frameworks for Operators',
        readingTime: '8 min',
        overview: 'Every decision you make poorly costs you time you can\'t recover. Operators build decision frameworks so they stop relitigating the same questions every week.',
        sections: [
          {
            heading: 'Why bad decisions are usually repeated decisions',
            body: 'Most of the bad decisions operators make aren\'t novel — they\'re the same five decisions made over and over without a framework. Should I take this client? Is this price fair? Should I build this feature or ship what I have? Do I say yes to this partnership? Without a framework, each of these is a fresh negotiation with yourself, vulnerable to emotion, fatigue, and the specific circumstances of that moment. With a framework, it\'s a checklist. I spent the first year of my freelance work taking every client who expressed interest because I had no filter. Some of them cost me more in time and headaches than they paid me. The filter I now use — does this client have a clear budget, a clear problem, and a clear decision-maker — screens out 70% of bad fits before a single call.',
          },
          {
            heading: 'The client filter framework',
            body: 'A good client filter has three gates. Gate one: do they have a real budget? Not "we\'re looking to invest" — a number. If they can\'t name a budget, they haven\'t budgeted for this project and you\'ll spend half your time justifying your price. Gate two: do they have a specific, solvable problem? Vague problems produce scope creep and scope creep produces resentment. Gate three: is there one decision-maker? If three people have to approve your proposal, two of them will find a reason to say no. Any client who fails two of these three gates is a project you should decline or reprice aggressively. This framework alone saved me from three bad projects last year.',
          },
          {
            heading: 'The priority stack for competing tasks',
            body: 'When everything feels urgent, nothing gets done well. The priority stack is how operators decide what to work on when they have ten options and three hours. The stack has four levels: revenue-generating tasks (calls, proposals, invoices, client deliverables) always go first. Pipeline-building tasks (outreach, content, demos) go second. Skill-building tasks (new tools, frameworks, study) go third. Administrative tasks (email, scheduling, bookkeeping) go last. Most operators do this in reverse — they clear their inbox first because it feels productive. The inbox being empty doesn\'t move your business. Revenue tasks first, every single day.',
          },
          {
            heading: 'The "hell yes or no" rule for opportunities',
            body: 'Every opportunity you say yes to that isn\'t a clear yes is a no in disguise. Saying yes to a mediocre project fills the time slot that a great project would have occupied. I learned this the hard way taking a $650 project at a point when I should have been focused on closing a $5K one. The decision framework is simple: when an opportunity comes, your gut reaction is either "hell yes" or it\'s a no. Lukewarm, maybe, let me think about it — all of those are nos. The exception is when you\'re early-stage and need the experience or the cash, in which case your rule is "yes if it pays above my minimum and doesn\'t block a better opportunity." Define your minimum and hold it.',
          },
        ],
        keyTakeaways: [
          'Most bad decisions are repeated decisions — frameworks stop the repeat',
          'A three-gate client filter (budget, problem, decision-maker) screens 70% of bad fits',
          'Revenue tasks first, pipeline second, skill third, admin last — every day without exception',
          '"Hell yes or no" — lukewarm is a no',
          'Every yes is a no to everything else that time slot could hold',
        ],
        assignment: {
          title: 'Build your three core frameworks',
          description: 'Write your client filter with three specific gates (no vague criteria). Write your priority stack with concrete categories that match your actual work. Write your minimum project standard — the floor below which you decline regardless of circumstances.',
          deliverable: 'A one-page document with all three frameworks. Apply them to one real decision you\'re currently sitting on and document the outcome.',
        },
        quiz: [
          {
            question: "What is the correct order of the operator priority stack?",
            options: ["Admin, skill-building, pipeline, revenue", "Skill-building, pipeline, revenue, admin", "Revenue tasks, pipeline-building, skill-building, admin", "Pipeline-building, revenue tasks, admin, skill-building"],
            correctIdx: 2,
            explanation: "Revenue tasks always go first (calls, proposals, client deliverables). Pipeline second. Skill-building third. Admin last. Most operators do this in reverse — they clear email first because it feels productive, but an empty inbox doesn't move the business.",
          },
          {
            question: "The three gates of the client filter check for:",
            options: ["Budget, timeline, and team size", "Real budget, specific solvable problem, and a single decision-maker", "Industry fit, cultural alignment, and referral potential", "Payment history, company age, and project urgency"],
            correctIdx: 1,
            explanation: "Gate one: do they have a real budget? Gate two: do they have a specific, solvable problem? Gate three: is there one decision-maker? Failing two of three gates means you should decline or reprice aggressively.",
          },
          {
            question: "What does \"hell yes or no\" mean for evaluating opportunities?",
            options: ["Always negotiate before accepting — enthusiasm is a negotiating position", "Only say yes to opportunities that feel like an obvious yes; lukewarm is a no", "Be aggressive about accepting any project above your minimum rate", "Prioritize opportunities from your existing network over new prospects"],
            correctIdx: 1,
            explanation: "Lukewarm, maybe, let me think about it — all of those are nos. A mediocre yes fills the time slot a great opportunity would have occupied. The exception is early-stage when you need the experience or cash, with a clear minimum standard.",
          },
          {
            question: "Why do bad operator decisions tend to be repeated rather than novel?",
            options: ["Operators don't learn from their mistakes", "The same five decisions recur without frameworks, leaving them vulnerable to emotion and fatigue each time", "Bad decisions compound and create new bad decisions downstream", "Operators copy what other operators do without adapting to their situation"],
            correctIdx: 1,
            explanation: "Without a framework, every recurring decision is a fresh negotiation with yourself, vulnerable to the specific emotions and circumstances of that moment. A framework turns it into a checklist.",
          },
        ],
      },
      {
        title: 'Building Your Personal Board',
        readingTime: '8 min',
        overview: 'You don\'t need a mentor. You need a board — a curated group of people who challenge you, hold you accountable, and open doors you can\'t open alone.',
        sections: [
          {
            heading: 'Why the lone operator model fails',
            body: 'Operating alone means every blind spot stays blind. You\'re too close to your own work to see what\'s obvious to someone outside it. I built the Pomaika\'i site for months thinking it was solid, and one conversation with someone running a $400K/month business revealed three structural problems I\'d normalized. That conversation saved me from pitching the wrong thing to the wrong people. The lone operator model also caps your ceiling to what you can personally see and access. Every high-performer I know — whether they\'re running agencies, tech companies, or sales operations — has people around them who push back, challenge assumptions, and make introductions. Build that deliberately instead of waiting for it to happen organically.',
          },
          {
            heading: 'The four board seats',
            body: 'A personal board has four seats, each serving a different function. The challenger is someone operating 2-5x above your current level who will tell you the hard truth without softening it. The domain expert is someone who has solved the specific problem you\'re currently working on — sales, tech, operations, whatever your current gap is. The peer is someone at your exact level who is also building aggressively, so you can compare notes and hold each other to standards. The connector is someone with a network wider than yours who can open doors through introductions. You don\'t need twelve people in your corner. You need four people in the right seats, and you need to show up to those relationships with value, not just asks.',
          },
          {
            heading: 'How to get into those relationships',
            body: 'You don\'t ask someone to be your mentor. You demonstrate value until the relationship becomes natural. When I started building for Malachi at Pomaika\'i, I didn\'t ask for a relationship — I shipped work so fast and so well that the relationship formed around the output. The path to getting in front of someone operating above you is always the same: show up with something useful. A referral, a solved problem, a piece of work they didn\'t have to do. Useful people get access to useful networks. If you can\'t identify what you\'d bring to someone operating at the level you want to reach, you\'re not ready to be in the room yet. Fix that first.',
          },
          {
            heading: 'Maintaining the board and updating its composition',
            body: 'A personal board goes stale if you don\'t update it. The challenger who pushed you at $1K/month might not be the right challenger when you\'re at $10K/month. As you grow, some seats need to be upgraded. This isn\'t disrespectful — it\'s necessary. You also need to maintain the relationships you have: check in with your board members when you don\'t need anything, acknowledge their wins, refer business to them when you can. The maintenance is what keeps the relationship real instead of transactional. Set a recurring monthly touchpoint with each board member — even a single message updating them on your progress counts. Let them see you moving.',
          },
        ],
        keyTakeaways: [
          'Operating alone keeps your blind spots permanent — a board exposes them',
          'Four seats: challenger, domain expert, peer, connector — each serves a different function',
          'Value before access — show up with something useful before asking for anything',
          'Your board composition should evolve as you grow, not stay static',
          'Monthly touchpoints maintain real relationships; silence makes them transactional',
        ],
        assignment: {
          title: 'Map and activate your personal board',
          description: 'Identify one specific person for each of the four board seats — challenger, domain expert, peer, connector. For each person, write one specific thing you can bring to them before making any ask. Then reach out to one of the four this week with that thing.',
          deliverable: 'A board map with four names, four value-brings, and a sent message to one of them. Document the response.',
        },
        quiz: [
          {
            question: "What are the four seats on a personal board and what does each one do?",
            options: ["Mentor, investor, friend, and employee", "Challenger (hard truth at higher level), domain expert (solved your current problem), peer (same level building aggressively), connector (wider network)", "Coach, sponsor, advisor, and advocate", "Boss, client, collaborator, and referral source"],
            correctIdx: 1,
            explanation: "Four seats, four functions: challenger pushes you with hard truth from 2-5x your level. Domain expert has solved the specific problem you're working on. Peer matches your level and holds you to standards. Connector opens doors through introductions.",
          },
          {
            question: "What is the correct approach to getting into a relationship with someone operating above your current level?",
            options: ["Ask them directly to mentor you with a clear proposal of what you need", "Demonstrate value until the relationship forms naturally around your output", "Network at events where they're likely to be and follow up consistently", "Reference shared connections to establish credibility before reaching out"],
            correctIdx: 1,
            explanation: "You don't ask someone to be your mentor. You ship work so fast and so well that the relationship forms around the output. Show up with something useful — a referral, a solved problem, work they didn't have to do.",
          },
          {
            question: "Why does your board composition need to evolve as you grow?",
            options: ["Because relationships naturally expire after two to three years", "Because the challenger pushing you at $1K/month may not be the right challenger at $10K/month", "Because diversity of perspectives requires rotating board members", "Because your domain expertise changes and your expert contacts become less relevant"],
            correctIdx: 1,
            explanation: "A personal board goes stale if you don't update it. As you grow, some seats need upgrading. This isn't disrespectful — it's necessary. The right people for where you are now may not be the right people for where you're going.",
          },
          {
            question: "What is the minimum maintenance required to keep board relationships real rather than transactional?",
            options: ["Quarterly check-ins and annual in-person meetings", "Monthly touchpoints — even a single update message showing them you're moving", "Only reaching out when you have something valuable to offer them", "Weekly messages and regular referrals to keep them engaged"],
            correctIdx: 1,
            explanation: "Set a recurring monthly touchpoint with each board member. Even a single message updating them on your progress counts. The maintenance is what keeps the relationship real instead of transactional.",
          },
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'AI as Leverage',
    description: 'The operators winning right now aren\'t smarter — they\'re faster. Learn the stack, the prompting system, and the build framework that lets one person do the work of five.',
    lessons: [
      {
        title: 'The Operator AI Stack',
        readingTime: '8 min',
        overview: 'Three tools, clearly delineated roles, and a handoff protocol. That\'s the whole stack. Most people have fifteen tools and a mess. Here\'s what actually runs production projects.',
        sections: [
          {
            heading: 'Why tool sprawl kills operators',
            body: 'Every tool you add to your stack adds a context switch, a subscription, and a learning curve. I\'ve watched people spend four hours comparing note-taking apps instead of writing a single note. The operators building real things have a minimal, mastered stack — not a comprehensive one. When I built the Club Bot for Pomaika\'i, I used two tools: Claude Code for the logic and Vercel for deployment. That\'s it. When I built the DHL Translator App, same stack. The simplicity isn\'t a limitation — it\'s a forcing function. You get faster with the tools you actually use. You get slower every time you add one you don\'t.',
          },
          {
            heading: 'The three-tool stack and what each one does',
            body: 'Claude Code is your production builder. Use it for anything that needs to actually work — client sites, apps, automation logic, data processing. It handles complex, multi-file projects and maintains context across a session in a way that no other tool matches. ChatGPT is your research and drafting layer — use it for first-draft copy, research synthesis, market research, and anything where you need a broad answer fast. Lovable is your prototype layer — use it when a client needs to see something visual before you commit to building it properly. These are not interchangeable. Using the wrong tool for the job costs you hours. Claude Code for a quick visual prototype is overkill. Lovable for production code is a liability.',
          },
          {
            heading: 'The handoff protocol',
            body: 'The handoff between tools is where most operators lose time. Here\'s the protocol that works: start in Lovable or ChatGPT for the concept and client approval, then hand off to Claude Code with a complete spec — not a vague description, a spec. The spec includes: what the thing does, who it\'s for, what tech stack, what the success criteria are, and what edge cases matter. When I handed off the West Coast Terpz e-commerce build, I gave Claude Code a spec that was 400 words. The output was production-ready in four hours. When I\'ve handed off with a three-sentence description, I\'ve spent two days in back-and-forth. The spec is the leverage point.',
          },
          {
            heading: 'Versioning and recovering from mistakes',
            body: 'Every project goes to GitHub before it goes to a client. Not sometimes — always. This rule has saved me three times in the last year: once when a client changed their mind mid-build and I needed to roll back, once when I broke a working feature chasing a new one, and once when a client\'s hosting environment destroyed the build and I needed a clean version fast. GitHub with descriptive commit messages isn\'t overhead — it\'s insurance. The commit message practice also forces you to articulate what changed, which surfaces errors you would have missed. If you can\'t describe what changed in one sentence, you\'re probably not done with that step yet.',
          },
        ],
        keyTakeaways: [
          'Minimal mastered stack beats comprehensive sprawling stack every time',
          'Claude Code for production, ChatGPT for research, Lovable for prototypes — not interchangeable',
          'The handoff spec is the leverage point: 400 words of spec saves 2 days of back-and-forth',
          'Every project to GitHub before it goes to a client — no exceptions',
          'Commit message clarity forces you to articulate what changed, which surfaces errors',
        ],
        assignment: {
          title: 'Audit and lock your stack',
          description: 'List every tool you\'ve used in the last 30 days for client work. Identify which ones are actually in your stack versus which ones you tried once. Cut everything that isn\'t Claude Code, ChatGPT, or Lovable unless you have a specific, irreplaceable reason for it. Set up GitHub for any active project that doesn\'t have it.',
          deliverable: 'A cleaned stack with three primary tools and a list of everything you cut. One project moved to GitHub with at least five descriptive commits.',
        },
        quiz: [
          {
            question: "In the three-tool operator stack, what is Claude Code specifically used for?",
            options: ["Research, drafting, and market analysis", "Visual prototypes and client mockups", "Production builds — anything that needs to actually work in a client's hands", "Scheduling, project management, and client communication"],
            correctIdx: 2,
            explanation: "Claude Code is the production builder. Use it for complex, multi-file projects — client sites, apps, automation logic — where it needs to actually work. It's overkill for prototypes and the wrong tool for research drafts.",
          },
          {
            question: "What is the role of Lovable in the operator stack?",
            options: ["Production code for client deliverables", "Backend logic and API integrations", "Visual prototypes to show a client before committing to a production build", "Social content and marketing copy generation"],
            correctIdx: 2,
            explanation: "Lovable is the prototype layer — use it when a client needs to see something visual before you commit to building it properly. Using it for production code is a liability. The tools are not interchangeable.",
          },
          {
            question: "What does a complete handoff spec include when passing a project to Claude Code?",
            options: ["A wireframe, brand guide, and two-sentence description", "What the thing does, who it's for, tech stack, success criteria, and edge cases that matter", "The client's name, deadline, and budget", "A Lovable prototype and a list of required features"],
            correctIdx: 1,
            explanation: "A 400-word spec covering what the thing does, who it's for, the tech stack, success criteria, and edge cases produces production-ready output in hours. A three-sentence description produces two days of back-and-forth.",
          },
          {
            question: "Why does every project go to GitHub before it goes to a client — no exceptions?",
            options: ["Clients expect GitHub links as part of the professional standard", "GitHub commit messages help you communicate progress to your team", "It provides rollback capability, version history, and forces you to articulate what changed", "GitHub deployment integrates directly with Vercel for seamless hosting"],
            correctIdx: 2,
            explanation: "GitHub has saved projects three ways: rolling back to a pre-change version, recovering a clean version after a build was destroyed, and fixing broken features. Descriptive commit messages also force you to articulate what changed, surfacing errors you'd otherwise miss.",
          },
        ],
      },
      {
        title: 'Advanced Prompting for Production',
        readingTime: '9 min',
        overview: 'Prompting is a craft. The gap between a prompt that produces garbage and one that produces production-ready code is a few hundred words of context. Here\'s the framework.',
        sections: [
          {
            heading: 'The anatomy of a bad prompt',
            body: 'Bad prompts share three characteristics: they describe the output they want without explaining the context, they set no constraints so the AI makes assumptions, and they provide no examples so the AI defaults to generic patterns. "Build me a landing page for a cannabis brand" is a bad prompt. It produces a generic landing page that looks like every other AI-generated cannabis site. When I was building for West Coast Terpz, the prompt was seven paragraphs: who the customer is, what they already know about the brand, what the conversion goal is, what the brand voice sounds like with three examples, what competitors look like (and why we want to look different), what tech stack to use, and what the three non-negotiable design requirements are. That prompt produced something I could send to the client.',
          },
          {
            heading: 'The CCER framework: Context, Constraints, Examples, Result',
            body: 'Every production prompt needs four components. Context: who is this for, what problem does it solve, what is the environment it lives in. Constraints: tech stack, scope, what to avoid, timeline, format requirements. Examples: three references — what you want to emulate, what you want to avoid, and one existing piece of your own work that represents the standard. Result: what does done look like? How will you know it worked? The result component forces you to define success before you start, which means you\'ll recognize when you\'ve arrived instead of continuing to iterate forever. This framework works for code, copy, strategy, and analysis. It\'s not a prompting hack — it\'s a communication discipline.',
          },
          {
            heading: 'Iterative prompting: how to get from 60% to 100%',
            body: 'First output from any prompt is 60-70% of what you need. The mistake is starting over. The right move is iterating from what you have. Read the output and identify the three biggest gaps. Prompt specifically to close one gap at a time: "The navigation structure is correct. The typography is wrong — it needs to be [specific change] because [specific reason]. Keep everything else." Surgical prompts on top of existing output get you to 95% faster than any other approach. The final 5% is almost always a manual edit that\'s faster to do yourself than to prompt for. Know when to stop prompting and start editing.',
          },
          {
            heading: 'Saving and reusing your best prompts',
            body: 'Every time a prompt produces excellent output, save it as a template. I have a prompt library with about 30 templates — one for each type of project I build regularly. Client site prompt. E-commerce build prompt. Landing page prompt. API integration prompt. Each one has blank fields I fill in for the specific project. When a new client comes in for a site similar to one I\'ve built before, I\'m pulling from a proven template, not starting from scratch. This is leverage in its truest form: work you did once compounds into every project after it. Building the library takes three months of intentional effort. Using it saves you hours on every project for years.',
          },
        ],
        keyTakeaways: [
          'CCER framework: Context, Constraints, Examples, Result — use it on every production prompt',
          'First output is 60-70% — iterate surgically instead of starting over',
          'Define "done" in the prompt before you start — not after you\'re done iterating',
          'A prompt library of 30 templates compounds across every future project',
          'Know when to stop prompting and start editing — the last 5% is usually faster by hand',
        ],
        assignment: {
          title: 'Build your prompt library foundation',
          description: 'Write three production prompts using the CCER framework for the three project types you build most often. Test each one and iterate until the first output is 80% usable without changes. Save the final version of each as a reusable template.',
          deliverable: 'Three saved prompt templates with the CCER structure, each proven to produce 80%+ usable output on the first pass.',
        },
        quiz: [
          {
            question: "What does the CCER framework stand for?",
            options: ["Copy, Code, Execute, Review", "Context, Constraints, Examples, Result", "Client, Criteria, Execution, Revision", "Concept, Creation, Edit, Release"],
            correctIdx: 1,
            explanation: "CCER: Context (who it's for, what problem, what environment), Constraints (tech stack, scope, what to avoid), Examples (what to emulate, what to avoid, one piece of your own work), Result (what does done look like). Use it on every production prompt.",
          },
          {
            question: "What is the correct approach when the first output from a production prompt is at 60-70%?",
            options: ["Start over with a new prompt from scratch", "Iterate surgically — identify the three biggest gaps and prompt to close one at a time", "Accept it and manually rewrite the remaining 30-40%", "Ask the AI to self-improve by pointing out what's wrong overall"],
            correctIdx: 1,
            explanation: "The first output is always 60-70%. Starting over wastes what you have. Iterate surgically: \"The navigation is correct. The typography is wrong — change it to X because Y. Keep everything else.\" One gap at a time gets you to 95% fastest.",
          },
          {
            question: "What is the purpose of the \"Result\" component in the CCER framework?",
            options: ["To set a deadline for when the project must be completed", "To define what done looks like before you start so you recognize when you've arrived", "To describe the final deliverable format the client expects", "To summarize the other three components in a single sentence"],
            correctIdx: 1,
            explanation: "The Result component forces you to define success before you start, which means you'll recognize when you've arrived instead of iterating forever. Without it, you keep refining past the point of diminishing return.",
          },
          {
            question: "When should you stop prompting and start editing manually?",
            options: ["After the third iteration, regardless of quality", "When the output is at 95% — the final 5% is almost always faster to edit by hand", "Only when the AI explicitly says it cannot improve further", "After applying the CCER framework at least twice"],
            correctIdx: 1,
            explanation: "The last 5% is almost always a manual edit that's faster to do yourself than to prompt for. Know when to stop prompting and start editing — iterating past 95% through prompting wastes time that a direct manual fix would recover in minutes.",
          },
        ],
      },
      {
        title: 'Automation Chains',
        readingTime: '9 min',
        overview: 'A single automation can replace 10 hours of manual work per week. Most operators ignore this until they\'re drowning. Build your chains before you need them.',
        sections: [
          {
            heading: 'What an automation chain is and isn\'t',
            body: 'An automation chain is a sequence of triggered actions that moves information or executes tasks without you being present. It is not a chatbot, not a script you run manually, and not a Zapier integration that sends you a Slack message when someone fills out a form. A real automation chain has a trigger, a series of actions with logic, and an output that matches what you would have produced manually — or better. The DHL Translator App I built is a chain: a document comes in, the translation logic runs, the output gets formatted and delivered. Zero manual steps after the trigger. That\'s the standard to hold yourself to when building chains.',
          },
          {
            heading: 'The five chains every operator should have running',
            body: 'Five chains cover 80% of the repetitive work operators deal with: a lead intake chain (form submission → CRM entry → welcome message → calendar invite), a client onboarding chain (payment confirmed → contract sent → project folder created → kickoff scheduled), a content distribution chain (post published → cross-posted to other platforms → logged in tracker), a follow-up chain (no response after 48 hours → follow-up triggered automatically), and a weekly reporting chain (pull metrics → format report → send to relevant parties). If you have even two of these running, you\'ve bought back roughly eight hours a week. At $100/hour of your time, that\'s $800/week in recovered capacity.',
          },
          {
            heading: 'Building your first chain with Claude Code',
            body: 'Pick the most repetitive manual task in your current workflow. Write out every step you do manually, in order, with the decision logic at each step. That document is your chain spec. Hand it to Claude Code with the CCER framework from the previous lesson. The output will be 70-80% of what you need — you\'ll refine the logic during testing. The most common mistake is building too complex a chain on the first attempt. Start with a three-step chain that has no branching logic. Get it running and reliable before adding complexity. A three-step chain that runs without errors is worth more than a ten-step chain that breaks twice a week.',
          },
          {
            heading: 'Testing, monitoring, and maintaining chains',
            body: 'A chain that breaks silently is worse than no chain at all — it gives you a false sense of automation while work falls through the cracks. Every chain needs three things: a test case that simulates the trigger and checks the output, an error notification that fires when something breaks (email or text, not Slack — you need to see it), and a monthly audit to catch drift (when the chain was built for one workflow and the workflow has since changed). I learned this when a client onboarding chain I built for Pomaika\'i kept firing the wrong template because the intake form had changed without updating the chain logic. Monthly audits catch this before it becomes a client problem.',
          },
        ],
        keyTakeaways: [
          'A real chain has a trigger, logic, and output that requires zero manual steps',
          'Five core chains — lead intake, onboarding, content, follow-up, reporting — recover 8+ hours per week',
          'Start with a three-step chain with no branching logic; get it reliable before adding complexity',
          'Every chain needs a test case, an error notification, and a monthly audit',
          'A chain that breaks silently is worse than no chain',
        ],
        assignment: {
          title: 'Build and deploy your first automation chain',
          description: 'Identify the single most repetitive manual task in your workflow. Write out every manual step with the decision logic. Build a minimum three-step chain using Claude Code and the chain spec. Test it with three real inputs before considering it live.',
          deliverable: 'A running automation chain with a documented spec, three successful test cases, and an error notification configured.',
        },
        quiz: [
          {
            question: "What distinguishes a real automation chain from a basic notification integration?",
            options: ["A real chain uses multiple tools and has a dashboard", "A real chain has a trigger, logic, and output requiring zero manual steps after it fires", "A real chain involves AI at every step", "A real chain runs on a schedule rather than being event-triggered"],
            correctIdx: 1,
            explanation: "A chain that requires you to do anything after the trigger fires isn't fully automated. A real chain fires, processes through its logic, and produces a finished output — no human in the loop until the output arrives.",
          },
          {
            question: "Which of the five core chains recovers the most time for operators who don't have one?",
            options: ["The weekly reporting chain", "The content distribution chain", "The lead intake chain — form submission through CRM entry through welcome message through calendar invite", "The client onboarding chain"],
            correctIdx: 2,
            explanation: "The lead intake chain eliminates the most repetitive manual work for most operators. Every inbound lead requires the same four steps — and without the chain, each one is manual, inconsistent, and likely to fall through the cracks.",
          },
          {
            question: "Why should you start with a three-step chain with no branching logic?",
            options: ["Three-step chains are all most operators actually need", "Starting simple gets a reliable, running chain before adding complexity that can break it", "Branching logic requires a paid automation tool", "Three steps is the maximum Claude Code can handle in a single session"],
            correctIdx: 1,
            explanation: "A three-step chain that runs without errors is worth more than a ten-step chain that breaks twice a week. Start simple, get it reliable, then layer in complexity. Complexity kills chains that aren't tested first.",
          },
          {
            question: "What three things does every automation chain require to run safely in production?",
            options: ["A backup, a dashboard, and a team member who knows how to fix it", "A test case, an error notification, and a monthly audit for drift", "Documentation, version control, and a rollback procedure", "A staging environment, production environment, and monitoring tool"],
            correctIdx: 1,
            explanation: "A chain that breaks silently is worse than no chain at all. Test case confirms it works. Error notification (email or text, not Slack) ensures you see failures. Monthly audit catches drift — when the workflow changed but the chain didn't.",
          },
        ],
      },
      {
        title: 'The 72-Hour Build Framework',
        readingTime: '8 min',
        overview: 'Most projects that take two weeks should take three days. Not because you\'re cutting corners — because you\'re eliminating the friction that has nothing to do with building.',
        sections: [
          {
            heading: 'Why projects take longer than they should',
            body: 'Projects don\'t go long because building is slow. They go long because of three things: unclear requirements at the start, scope creep in the middle, and perfectionism at the end. When I built the West Coast Terpz site, the first version went live in 72 hours. Not because I\'m unusually fast — because I had a complete spec before I opened Claude Code, I held the scope to exactly what the spec said, and I shipped when it was functional rather than waiting until it was perfect. The client gave feedback on a live site instead of a mockup, which produced better feedback and faster iteration. The 72-hour framework is a forcing function for all three of these disciplines.',
          },
          {
            heading: 'Hour 0-4: Spec and scoping session',
            body: 'The first four hours of any build go entirely to the spec. No code, no design, no setup. Just answers to these questions: what is the primary action this thing needs to make possible? Who is the user and what do they already know? What does success look like, specifically? What is explicitly out of scope for this version? What\'s the tech stack and why? The spec session with the client should produce a shared document that both parties sign off on. "Sign off" can be a text reply saying "yes this is right" — it doesn\'t need to be a legal document. But it needs to exist. Scope creep only happens when scope was never defined. Define the scope.',
          },
          {
            heading: 'Hour 4-60: Build in vertical slices',
            body: 'Build in vertical slices, not horizontal layers. A vertical slice means you build one complete user journey end-to-end before building the second one. A horizontal layer means you build all the navigation, then all the pages, then all the forms. Horizontal building produces a project that\'s 60% done everywhere and 0% done anywhere — you can\'t ship it, you can\'t demo it, you can\'t get real feedback on it. Vertical building produces something shippable after every slice. By hour 16, you should have one complete user flow working. By hour 32, two. By hour 60, the core of the product is functional and demoable. Save styling and polish for after the logic works.',
          },
          {
            heading: 'Hour 60-72: Harden and deploy',
            body: 'The last twelve hours are for hardening and deployment, not new features. This means: test every user flow you built with inputs the user will actually provide, including edge cases. Fix what breaks. Write the deployment checklist (environment variables, domain, SSL, analytics). Deploy. Send the client a link. That\'s the 72-hour framework. Everything after this point is iteration on a live product, which is where the best feedback comes from anyway. I\'ve shipped fifteen projects using this framework. Every single one improved faster after going live than it did during the build. Live feedback from real users is worth more than any amount of pre-ship polish.',
          },
        ],
        keyTakeaways: [
          'Projects go long because of unclear requirements, scope creep, and perfectionism — not because building is slow',
          'Hours 0-4 are spec only — no code until the scope is signed off on',
          'Vertical slices produce something shippable after every feature; horizontal layers produce nothing shippable until the end',
          'Hours 60-72 are hardening and deployment — no new features after hour 60',
          'Live feedback from a real user outweighs any amount of pre-ship polish',
        ],
        assignment: {
          title: 'Run a 72-hour build',
          description: 'Pick a real project — a client site, a tool, a landing page — and run the full 72-hour framework on it. Write the spec in hours 0-4. Build in vertical slices through hour 60. Harden and deploy in hours 60-72. Document where the framework broke down and why.',
          deliverable: 'A live project at a real URL, built and deployed in 72 hours or less, with a one-paragraph post-mortem on where the framework held and where it didn\'t.',
        },
        quiz: [
          {
            question: "According to the 72-hour framework, what are the three real reasons projects take longer than they should?",
            options: ["Scope complexity, team communication, and unclear tech stack", "Unclear requirements at the start, scope creep in the middle, and perfectionism at the end", "Client revisions, dependency management, and deployment issues", "Poor time estimates, context switching, and technical debt"],
            correctIdx: 1,
            explanation: "Projects don't go long because building is slow. They go long because requirements weren't clear at the start, scope expanded in the middle, and the operator kept polishing instead of shipping at the end.",
          },
          {
            question: "What happens during hours 0-4 of the 72-hour framework?",
            options: ["Environment setup, tool configuration, and initial scaffolding", "Spec only — no code until the scope is signed off by both parties", "Client kickoff call and design mockups", "Research, competitive analysis, and feature planning"],
            correctIdx: 1,
            explanation: "The first four hours go entirely to the spec. No code, no design, no setup. Just clear answers to: what is the primary action this needs to make possible, who is the user, what does success look like, and what is explicitly out of scope.",
          },
          {
            question: "What does building in \"vertical slices\" mean and why does it matter?",
            options: ["Building one complete user journey end-to-end before building the second — so you always have something shippable", "Building the visual layers first, then adding functionality underneath", "Cutting scope vertically to reduce the project to a minimum viable version", "Assigning different features to different team members simultaneously"],
            correctIdx: 0,
            explanation: "Horizontal building (all navigation, then all pages, then all forms) produces 60% done everywhere and 0% done anywhere. Vertical slices produce something shippable after every feature. By hour 16, you should have one complete working user flow.",
          },
          {
            question: "What is the rule for hours 60-72 of the framework?",
            options: ["Final polish, animations, and visual refinement", "Hardening and deployment only — no new features after hour 60", "Client review and revision incorporation", "Documentation and handoff preparation"],
            correctIdx: 1,
            explanation: "The last twelve hours are for testing every user flow with real inputs, fixing what breaks, running the deployment checklist, and going live. No new features. Everything after this point is iteration on a live product — which is where the best feedback comes from anyway.",
          },
        ],
      },
    ],
  },
  {
    num: '03',
    title: 'Sales & Closing',
    description: 'A pipeline full of the right people, priced correctly, closed without desperation. This is the module most operators skip. Don\'t.',
    lessons: [
      {
        title: 'Pipeline Management',
        readingTime: '8 min',
        overview: 'Your pipeline is either a living system or a graveyard of conversations you\'ve forgotten to follow up on. Most operators have the latter and wonder why revenue is inconsistent.',
        sections: [
          {
            heading: 'What a pipeline actually is',
            body: 'A pipeline is a real-time view of where every potential client sits in your sales process. Not a list of people you\'ve talked to — a stage-based system that tells you what action is required for each person today. Without this, you\'re operating from memory, which means you follow up with the people you like talking to instead of the people closest to closing. I ran without a real pipeline for the first year and left money on the table because I forgot to follow up, forgot what was discussed, or spent time on cold leads while warm ones went quiet. The pipeline is not optional if you want revenue to be predictable.',
          },
          {
            heading: 'The five pipeline stages',
            body: 'Every lead belongs in one of five stages: Identified (you know they could be a client and have their contact info), Contacted (first outreach sent, no response yet), Engaged (they\'ve responded, a conversation has started), Proposed (you\'ve sent a proposal or had a pricing conversation), Closed (won or lost, deal finalized). For each stage, the action required is clear: Identified leads need a first outreach. Contacted leads need a follow-up if no response in 48 hours. Engaged leads need a proposal. Proposed leads need a close attempt with a deadline. Closed leads need an offboarding or an onboarding. If you know what stage someone is in, you know exactly what to do next.',
          },
          {
            heading: 'Minimum viable pipeline hygiene',
            body: 'Pipeline hygiene is the discipline of keeping your CRM accurate and current. Minimum viable hygiene: log every conversation within 24 hours, move leads to the correct stage after every interaction, set a follow-up date for every open deal, and remove leads who haven\'t responded after three touchpoints. This takes 10 minutes a day if you do it daily. It takes two hours if you let it pile up for a week. Most operators let it pile up, which is why their pipeline becomes a graveyard. The CRM I use for my own deals is at jdlo-crm.vercel.app. Use whatever tool you\'ll actually maintain — the tool is irrelevant, the discipline is everything.',
          },
          {
            heading: 'Reading pipeline health at a glance',
            body: 'A healthy pipeline has leads distributed across all five stages and a conversion rate you can calculate. Take your last 20 leads. How many converted from Identified to Contacted? From Contacted to Engaged? From Engaged to Proposed? From Proposed to Closed? Each of those conversion rates tells you something specific. Low Identified-to-Contacted means your outreach volume is wrong. Low Contacted-to-Engaged means your opening message is off. Low Engaged-to-Proposed means your discovery process is failing. Low Proposed-to-Closed means your pricing or proposals are missing something. You can\'t fix what you don\'t measure. Run this audit on your pipeline right now.',
          },
        ],
        keyTakeaways: [
          'A pipeline is a stage-based action system, not a list of people you\'ve talked to',
          'Five stages: Identified, Contacted, Engaged, Proposed, Closed — each has one clear next action',
          '10 minutes daily of pipeline hygiene beats 2 hours weekly of catchup — do it daily',
          'Conversion rate at each stage points to the specific thing that\'s broken',
          'Three touchpoints with no response — remove the lead and move on',
        ],
        assignment: {
          title: 'Audit and rebuild your pipeline',
          description: 'List every person you\'ve had a sales conversation with in the last 60 days. Assign each one to a pipeline stage. Calculate your conversion rate at each stage. Identify which stage has the worst conversion rate — that\'s your current sales bottleneck. Build a simple CRM tracker (spreadsheet, Notion, or dedicated tool) if you don\'t have one.',
          deliverable: 'A live pipeline with every active lead in the correct stage, conversion rates calculated for each stage, and your bottleneck stage identified with one hypothesis for why it\'s low.',
        },
        quiz: [
          {
            question: "What is the correct definition of a pipeline for an operator?",
            options: ["A list of everyone you've had a sales conversation with in the past year", "A stage-based action system that tells you what action is required for each lead today", "A CRM database of contacts organized by industry and company size", "A spreadsheet tracking your revenue projections for the next quarter"],
            correctIdx: 1,
            explanation: "A pipeline is not a list — it's a stage-based system. Each stage has one clear next action. Without this, you follow up with people you like talking to instead of the people closest to closing.",
          },
          {
            question: "What do the five pipeline stages tell you about each lead?",
            options: ["Their budget, timeline, and decision-maker status", "Where they are in the process and exactly what action is required next", "Their likelihood of closing and expected revenue value", "How long they've been in your pipeline and when to remove them"],
            correctIdx: 1,
            explanation: "Identified → first outreach. Contacted → follow-up at 48 hours. Engaged → send proposal. Proposed → close attempt with deadline. Closed → onboard or offboard. The stage tells you the action. No guessing.",
          },
          {
            question: "What does low conversion from Engaged to Proposed indicate?",
            options: ["Your pricing is too high for the leads you're attracting", "Your discovery process is failing — you're not converting conversations into proposals", "Your content isn't attracting the right type of prospect", "Your follow-up cadence after the first response is too slow"],
            correctIdx: 1,
            explanation: "Each stage conversion rate points to a specific problem. Low Engaged-to-Proposed means your discovery process is failing. Low Contacted-to-Engaged means your opening message is off. Low Proposed-to-Closed means pricing or proposals are missing something.",
          },
          {
            question: "When should you remove a lead from your pipeline?",
            options: ["After 30 days with no response", "After three touchpoints with no response", "After six months with no movement", "Only after they explicitly say they're not interested"],
            correctIdx: 1,
            explanation: "Three touchpoints with no response — remove the lead and move on. Keeping dead leads in your pipeline inflates the numbers and obscures your real conversion rates. A clean pipeline shows you accurately what's actually moving.",
          },
        ],
      },
      {
        title: 'Value-Based Pricing',
        readingTime: '9 min',
        overview: 'You are pricing your time when you should be pricing the outcome. That single shift is worth more than any negotiation tactic you\'ll ever learn.',
        sections: [
          {
            heading: 'Why hourly and project-rate pricing caps you',
            body: 'Hourly pricing ties your income to your hours, which means the only way to make more is to work more. Project-rate pricing is slightly better but still anchors to your inputs rather than the client\'s outcomes. The client who pays $2K for a website doesn\'t care that it took you 20 hours — they care that the website generates leads or customers. If that website generates $50K in revenue in its first year, $2K was a steal. You delivered $50K of value and charged $2K. That\'s not a sustainable pricing model for you. I priced the West Coast Terpz e-commerce build the same way until a client showed me their first-month numbers. I raised my prices the following week.',
          },
          {
            heading: 'How to identify the value being delivered',
            body: 'Before pricing any project, answer three questions: what is the primary outcome this client is paying for? What is that outcome worth to them in revenue, time saved, or risk avoided? What would they pay a traditional agency for the same deliverable? The first question gets you to the right conversation. The second anchors the price to their reality, not yours. The third sets your floor — you should not be charging less than a traditional agency for comparable or better work just because you\'re faster. For a client doing $30K/month with a broken checkout flow, fixing the checkout is potentially worth $5-10K in recovered monthly revenue. Your price should reflect that, not your time.',
          },
          {
            heading: 'Presenting price with confidence',
            body: 'Price confidence is not about being aggressive — it\'s about presenting a number without the verbal hedges that signal doubt. "I usually charge around $3K, but I can do $2K for you" is not a price. It\'s a negotiation with yourself before the client has said anything. The correct way to present a price: state the outcome, state the investment, stop talking. "This project delivers a fully operational e-commerce site with three months of sales history to test — the investment is $4,500." Then wait. The first person to speak after a price is stated is usually in the weaker position. Let them respond. If they push back, you understand why before you move. Never discount before they ask.',
          },
          {
            heading: 'Anchoring, tiering, and the right-size close',
            body: 'Anchoring is presenting a higher-value option first so the option you actually want to sell feels reasonable by comparison. If your ideal close is $4,500, your pricing conversation should start at $6,500 with a more comprehensive scope. The $4,500 option is then presented as "the focused version that gets you the core outcomes." Tiering also gives the client a sense of agency — they\'re choosing between options you\'ve defined, not negotiating against a single number. Present three tiers: a basic tier that\'s almost too lean (sets the floor), your target tier (what you actually want to sell), and a comprehensive tier (anchors the top). Most clients pick the middle. Structure accordingly.',
          },
        ],
        keyTakeaways: [
          'Price the outcome, not the input — if the website generates $50K, charging $2K was a mistake',
          'Three pricing questions: what\'s the outcome, what\'s it worth to them, what does an agency charge',
          'State the price and stop talking — silence after price signals confidence',
          'Never discount before they ask — you\'re negotiating against yourself',
          'Three-tier pricing: floor, target, anchor — most clients pick the middle',
        ],
        assignment: {
          title: 'Reprice your current offer',
          description: 'Take your most common service. Calculate the value it delivers using the three questions: primary outcome, value to the client in dollars, traditional agency equivalent. Build a three-tier pricing structure with a floor, target, and anchor price. Write the exact language you\'ll use to present the target price, ending with a period — not a question mark.',
          deliverable: 'A repriced offer with three tiers, a written price presentation script, and a note on the last client you undercharged and what you\'d charge them today.',
        },
        quiz: [
          {
            question: "Why does hourly pricing fundamentally cap your income as an operator?",
            options: ["Clients don't respect hourly workers as much as project-based ones", "Hourly pricing ties your income to your hours — the only way to earn more is to work more", "Hourly rates are always lower than project rates for the same work", "Clients underestimate how many hours complex projects require"],
            correctIdx: 1,
            explanation: "Hourly pricing means your ceiling is determined by how many hours you can physically work. Value-based pricing ties your fee to the outcome — if a website generates $50K in its first year, charging $2K was a mistake regardless of how many hours it took.",
          },
          {
            question: "What three questions do you answer before pricing any project?",
            options: ["What's the scope, what's the timeline, and what's your hourly rate", "What's the primary outcome, what's it worth to the client in dollars, and what would a traditional agency charge", "Who is the decision-maker, what's their budget, and what's their deadline", "What's the deliverable, how many revisions are included, and what's the kill fee"],
            correctIdx: 1,
            explanation: "The first question gets you to the right conversation. The second anchors the price to their reality, not yours. The third sets your floor — you should not be charging less than an agency for comparable or better work just because you're faster.",
          },
          {
            question: "What is the correct way to present a price in a client conversation?",
            options: ["Start high and work down to create negotiating room", "State the outcome, state the investment, then stop talking and wait for their response", "Present three options and let the client choose based on their comfort level", "Frame the price as an estimate and refine it after the discovery call"],
            correctIdx: 1,
            explanation: "\"This project delivers X — the investment is $4,500.\" Then wait. The first person to speak after a price is stated is usually in the weaker position. Never discount before they ask — you're negotiating against yourself.",
          },
          {
            question: "In a three-tier pricing structure, which tier do most clients typically choose?",
            options: ["The lowest tier because it minimizes financial risk", "The middle tier — the target price designed to be the most appealing option", "The highest tier because it signals comprehensive value", "It varies equally across all three tiers"],
            correctIdx: 1,
            explanation: "Structure three tiers: a basic tier that's almost too lean (sets the floor), your target tier (what you actually want to sell), and a comprehensive tier (anchors the top). Most clients pick the middle. Structure accordingly.",
          },
        ],
      },
      {
        title: 'The Discovery Call Framework',
        readingTime: '9 min',
        overview: 'The discovery call is not a pitch. It\'s a diagnostic. Your job is to understand the problem clearly enough that the solution sells itself.',
        sections: [
          {
            heading: 'Why most sales calls fail',
            body: 'Most sales calls fail because the operator is pitching instead of diagnosing. They walk in with a solution and spend 45 minutes defending it against a prospect who hasn\'t yet articulated the actual problem. The prospect leaves feeling sold to instead of understood. The operator leaves frustrated that the deal didn\'t close. Real discovery flips this: you spend 70% of the call asking questions and listening, 20% reflecting back what you heard to confirm understanding, and 10% presenting a solution that directly addresses what the prospect just told you. When the solution is framed in the prospect\'s own language — their problem, their terms, their outcome — it doesn\'t need to be sold. It sells itself.',
          },
          {
            heading: 'The seven discovery questions',
            body: 'Seven questions cover 90% of what you need to know before presenting any solution. One: what\'s the primary problem you\'re trying to solve right now? Two: how long has this been a problem and what have you tried? Three: what does solving it mean for your business in the next 12 months? Four: who else is affected by this problem and who has to approve a solution? Five: what\'s your timeline for solving it? Six: what\'s your budget range for this kind of project? Seven: what would make this engagement an obvious success? Take notes. Reference the answers directly when you present. "You told me the primary goal is 30% more leads by Q3 — here\'s exactly how this delivers that."',
          },
          {
            heading: 'Handling the "I need to think about it" stall',
            body: '"I need to think about it" is almost never about thinking. It\'s about one of three things: they don\'t see enough value, they\'re not the decision-maker and don\'t want to admit it, or they have a concern they haven\'t voiced. Your response to "I need to think about it" is always a question: "Of course — what specifically is giving you pause?" This resets the conversation and surfaces the real objection. If it\'s a value issue, you have the discovery notes to address it directly. If it\'s a decision-maker issue, you can ask to include them in a follow-up call. If it\'s an unvoiced concern, you\'ve just given them permission to say it. The stall is a signal, not a wall.',
          },
          {
            heading: 'Closing on the call',
            body: 'Every discovery call should end with a clear next step, proposed by you, with a specific date. Not "I\'ll send something over" — "I\'ll send the proposal by Thursday at noon and we can reconnect Friday to walk through it." The specific date creates a micro-commitment and keeps the deal alive between touchpoints. If the prospect is ready to move on the call — and you\'ll know because they\'ll stop asking questions and start asking about process — close right there. "Based on what you\'ve shared, I\'m confident in the approach. If you\'re ready to move forward, here\'s how we get started." Then stop talking. The close is not a monologue.',
          },
        ],
        keyTakeaways: [
          'Discovery is diagnostic, not pitch — 70% listening, 20% reflecting, 10% presenting',
          'Seven questions cover 90% of what you need before presenting any solution',
          '"I need to think about it" is a signal — ask what specifically is giving them pause',
          'Every call ends with a specific next step and a specific date proposed by you',
          'When the prospect stops asking questions and starts asking about process, close immediately',
        ],
        assignment: {
          title: 'Run a discovery-first sales call',
          description: 'Book one sales call this week using the seven discovery questions as your structure. Take written notes. Present the solution using the prospect\'s exact language from your notes. End with a specific next step and date. After the call, score yourself: what percentage of the call was you talking versus them talking?',
          deliverable: 'Notes from the call with the seven answers filled in, the next step you proposed with the date, and your talk-time percentage. Target: 30% or less of call time is you speaking.',
        },
        quiz: [
          {
            question: "What is the correct ratio of talking to listening during a discovery call?",
            options: ["50/50 — equal time to understand the client and present your solution", "70% listening, 20% reflecting back, 10% presenting a solution", "60% presenting your capabilities, 40% asking about their needs", "80% asking questions, 20% pitching your services"],
            correctIdx: 1,
            explanation: "Discovery is diagnostic, not a pitch. 70% listening, 20% reflecting back what you heard to confirm understanding, 10% presenting a solution framed in the prospect's own language. When the solution addresses their exact problem in their own terms, it doesn't need to be sold.",
          },
          {
            question: "What does \"I need to think about it\" almost always mean in a sales conversation?",
            options: ["The prospect genuinely needs more time to evaluate the options", "They have a concern they haven't voiced, they don't see enough value, or they're not the real decision-maker", "Your price is too high and they're looking for a polite way to say no", "They want to compare you to a competitor before deciding"],
            correctIdx: 1,
            explanation: "'I need to think about it' is a signal, not a wall. It's almost never about thinking. Respond: 'Of course — what specifically is giving you pause?' This surfaces the real objection so you can address it directly.",
          },
          {
            question: "How should every discovery call end?",
            options: ["With a follow-up email summarizing the conversation", "With a clear next step proposed by you with a specific date attached", "With a verbal agreement and a handshake", "With an open invitation to reach out whenever they're ready"],
            correctIdx: 1,
            explanation: "'I'll send the proposal by Thursday at noon and we can reconnect Friday to walk through it.' The specific date creates a micro-commitment and keeps the deal alive between touchpoints. 'I'll send something over' is not a next step.",
          },
          {
            question: "When should you attempt to close on the discovery call itself?",
            options: ["Always — every call should end with a signed agreement", "Only when they're a referral from an existing client", "When the prospect stops asking questions and starts asking about process — that's the buying signal", "After you've sent a formal proposal and given them 48 hours to review it"],
            correctIdx: 2,
            explanation: "When the prospect stops asking questions and starts asking about process (how do we get started, what happens next), close right there. 'Based on what you've shared, I'm confident in the approach. If you're ready to move forward, here's how we get started.' Then stop talking.",
          },
        ],
      },
      {
        title: 'Contracts and Payment Structure',
        readingTime: '8 min',
        overview: 'A handshake is not a contract. An email confirmation is not a contract. If you\'ve been operating without written agreements and payment upfront, you\'ve been assuming the best about people who haven\'t proven themselves yet.',
        sections: [
          {
            heading: 'Why operators get burned without contracts',
            body: 'There are three common ways operators get burned without contracts: scope creep (the project grows but the price doesn\'t), non-payment (the client ghosts after delivery), and disputes (both parties remember the agreement differently). All three are almost completely preventable with a simple written agreement. I know operators who lost $3,000-$8,000 on projects because there was no contract. Not because the clients were bad people — because there was no documented agreement to fall back on when things got unclear. A contract isn\'t about distrust. It\'s about clarity. It protects both parties by making the agreement explicit before work begins.',
          },
          {
            heading: 'What your contract must include',
            body: 'A minimum viable contract has six components: scope of work (what you will deliver, described specifically), out of scope (what you explicitly will not deliver in this engagement), timeline (key milestones with dates), payment terms (amount, schedule, and method), revision policy (how many rounds of revisions are included, what additional revisions cost), and kill fee (what happens if the client cancels mid-project). The scope and out-of-scope sections are the most important — they are your protection against the single biggest project-killer, which is scope creep. Everything the client asks for after the contract is signed that isn\'t in the scope is a change order with a price. This is not negotiable.',
          },
          {
            heading: 'Payment structure that protects you',
            body: 'The correct payment structure is 50% upfront, 50% on delivery. Not net-30, not on completion, not "when they\'re happy." 50% before you write a single line of code. The upfront payment does three things: it confirms the client is serious (people who aren\'t ready to pay aren\'t ready to commit), it covers your materials and time during the project (you\'re not financing their project), and it creates a financial stake that motivates timely feedback. The 50% on delivery is due when you deliver the final asset — not after their internal review process, not after their team approves it. Delivery triggers the invoice. For retainers, payment is the first of the month, auto-charged if possible. No payment, no work.',
          },
          {
            heading: 'Handling late payment and non-payment',
            body: 'Late payment has a standard protocol: invoice sent on the agreed date, payment reminder at 48 hours if not received, direct message or call at 72 hours, work paused at 7 days with a written notice. Non-payment beyond 14 days moves to a demand letter citing the contract terms. This protocol is not aggressive — it\'s professional. Most late payments resolve at the 48-hour reminder step because the client simply forgot or the invoice went to spam. The ones that don\'t resolve are the ones you need the contract for. Having the contract doesn\'t guarantee you\'ll collect, but it creates a paper trail that makes collection significantly more likely and small claims court a realistic option.',
          },
        ],
        keyTakeaways: [
          'Scope creep, non-payment, and disputes are almost entirely preventable with a written agreement',
          'Minimum viable contract: scope, out of scope, timeline, payment terms, revision policy, kill fee',
          '50% upfront before any work begins — not a negotiating position, a requirement',
          'Work paused at 7 days of non-payment; demand letter at 14 days',
          'The contract protects both parties by making the agreement explicit before emotions are involved',
        ],
        assignment: {
          title: 'Draft and deploy your standard contract',
          description: 'Write a standard client contract with all six components. Use the /contract skill to generate a base version, then customize it for your specific services and payment terms. Send it to your next new client before doing any work. If you have a current client without a contract, send a scope-of-work addendum this week.',
          deliverable: 'A signed or acknowledged contract from one active or new client. The contract must include your 50% upfront payment term and your out-of-scope clause.',
        },
        quiz: [
          {
            question: "What are the three most common ways operators get burned without contracts?",
            options: ["Late delivery, poor communication, and quality disputes", "Scope creep, non-payment, and disputes where both parties remember the agreement differently", "Client cancellations, partial payment, and intellectual property claims", "Unclear timelines, missing deliverables, and refund demands"],
            correctIdx: 1,
            explanation: "Scope creep (project grows but price doesn't), non-payment (client ghosts after delivery), and disputes (both parties remember the agreement differently) are almost completely preventable with a simple written agreement.",
          },
          {
            question: "What is the most important section in a client contract for preventing scope creep?",
            options: ["The payment terms section", "The revision policy section", "The scope of work AND explicit out-of-scope section together", "The kill fee section"],
            correctIdx: 2,
            explanation: "Everything the client asks for after the contract is signed that isn't in the scope is a change order with a price. The out-of-scope clause is your protection against the single biggest project-killer. It must be explicit and specific.",
          },
          {
            question: "What is the correct payment structure for client projects?",
            options: ["100% on delivery to give the client confidence in your commitment", "Net-30 after delivery to match standard business payment terms", "50% upfront before any work begins, 50% on delivery", "25% upfront, 25% at midpoint, 50% on final delivery"],
            correctIdx: 2,
            explanation: "50% before you write a single line of code. It confirms the client is serious, covers your time and materials, and creates financial stake that motivates timely feedback. Delivery triggers the final invoice — not after their internal review process.",
          },
          {
            question: "What is the correct protocol when payment hasn't arrived after 7 days past the due date?",
            options: ["Send a final demand letter and immediately escalate to collections", "Pause work with written notice — work stops until payment is received", "Continue working but add a late fee to the outstanding balance", "Send a friendly reminder and give them another two weeks"],
            correctIdx: 1,
            explanation: "Invoice sent on agreed date → reminder at 48 hours → direct message or call at 72 hours → work paused at 7 days with written notice → demand letter at 14 days. Most late payments resolve at the 48-hour step because the client simply forgot.",
          },
        ],
      },
    ],
  },
  {
    num: '04',
    title: 'Network & Positioning',
    description: 'Visibility is a system, not a personality trait. Build the media strategy, the intro network, and the authority signals that make the right people come to you.',
    lessons: [
      {
        title: 'Personal Media Strategy',
        readingTime: '8 min',
        overview: 'You\'re not trying to build an audience. You\'re trying to be findable by the right people when they\'re ready to buy. Those are different goals with different strategies.',
        sections: [
          {
            heading: 'The difference between audience and authority',
            body: 'An audience is people who follow you. Authority is people who trust your judgment enough to pay for it or refer others to you. You can have 50,000 followers and zero authority in your market. You can have 500 followers and a waiting list of clients. The goal of a personal media strategy for an operator is not follower count — it\'s authority signals to a specific buyer type. When I post a screen recording of building a full e-commerce site in a day, I\'m not posting for engagement. I\'m posting as evidence of capability for the one person in my audience who runs a business that needs exactly that. That one person is worth more than 10,000 likes from people who will never buy.',
          },
          {
            heading: 'The content types that build operator authority',
            body: 'Three content types compound for operators: proof of work (screenshots, recordings, before/afters showing real client results), process visibility (showing how you work, what your stack looks like, how you think through a problem), and honest takes (opinions on your industry that demonstrate you have a point of view and aren\'t afraid to express it). Generic tips, motivational content, and engagement bait build followers. The three above build clients. The test for any piece of content is simple: does this help the right person see that I can solve their problem? If yes, post it. If no, cut it.',
          },
          {
            heading: 'Cadence over quantity',
            body: 'Three high-quality posts per week beats seven mediocre ones every time. Cadence matters because inconsistency signals unreliability — if you can\'t maintain a content schedule, what does that say about your ability to maintain a project schedule? Pick a cadence you can sustain for six months. Not a stretch cadence — a sustainable one. For most operators, that\'s two to three posts per week: one proof of work, one process visibility, one honest take. The posts don\'t need to be long. A single screenshot with two sentences of context is content. A screen recording with no caption is content. The bar is not production value. The bar is specificity and reality.',
          },
          {
            heading: 'The one-platform rule and when to break it',
            body: 'Build one platform deep before spreading to a second. Every platform has its own algorithm, content format, and audience behavior. Learning two simultaneously means being mediocre on both. Instagram first if your clients are consumer-facing businesses. LinkedIn first if your clients are B2B. Twitter/X first if you\'re building in tech or SaaS. The one-platform rule holds until you have 12 months of consistent output and a clear sense of what\'s working. At that point, repurposing content to a second platform is reasonable. Before that point, you\'re diluting your effort for marginal additional reach.',
          },
        ],
        keyTakeaways: [
          'Authority with 500 followers beats audience with 50,000 if it\'s the right 500',
          'Three content types: proof of work, process visibility, honest takes — these build clients',
          'Sustainable cadence beats maximum output — pick what you can maintain for six months',
          'One platform deep before spreading — Instagram, LinkedIn, or X depending on your client type',
          'The test for any piece of content: does this help the right person see I can solve their problem',
        ],
        assignment: {
          title: 'Build your 30-day content system',
          description: 'Choose your primary platform. Plan 12 posts (three per week for four weeks) using the three content types: at least four proof of work, four process visibility, four honest takes. Write the first three posts now. Schedule or create a reminder system for the rest. The content must be specific to real projects — no generic tips.',
          deliverable: 'A 12-post content plan with specific topics, three posts drafted and ready to publish, and a weekly recurring reminder to execute the plan.',
        },
        quiz: [
          {
            question: "What is the primary goal of a personal media strategy for an operator?",
            options: ["Maximize follower count and engagement rate", "Build authority signals to a specific buyer type who will pay for your work", "Create viral content that reaches the broadest possible audience", "Establish a posting schedule that demonstrates consistency to the algorithm"],
            correctIdx: 1,
            explanation: "You can have 50,000 followers and zero authority in your market. You can have 500 followers and a waiting list of clients. The goal is authority with the right people — not follower count. One right client is worth more than 10,000 likes from people who will never buy.",
          },
          {
            question: "What are the three content types that build operator authority rather than just audience?",
            options: ["Educational tips, motivational quotes, and industry news", "Proof of work, process visibility, and honest takes with a clear point of view", "Behind-the-scenes content, product demos, and client testimonials", "Daily updates, weekly recaps, and monthly results reports"],
            correctIdx: 1,
            explanation: "Proof of work (screenshots, recordings, before/afters), process visibility (how you work, what your stack looks like), and honest takes (opinions that show you have a point of view). Generic tips and engagement bait build followers. These three build clients.",
          },
          {
            question: "Which posting approach produces better authority-building results?",
            options: ["Seven posts per week with varied content types", "Three high-quality posts per week with a sustainable cadence", "Daily posting to maximize algorithmic reach", "Two posts per week with longer-form content"],
            correctIdx: 1,
            explanation: "Three high-quality posts per week beats seven mediocre ones. Cadence also signals reliability — if you can't maintain a content schedule, what does that say about your ability to maintain a project schedule? Pick a cadence you can sustain for six months.",
          },
          {
            question: "When should you expand to a second platform?",
            options: ["As soon as you have more than 1,000 followers on your first platform", "After 12 months of consistent output and a clear sense of what's working on the first platform", "When a client asks you to be active on a specific platform", "As soon as your first platform growth plateaus"],
            correctIdx: 1,
            explanation: "Build one platform deep before spreading to a second. Learning two simultaneously means being mediocre on both. The one-platform rule holds until you have 12 months of consistent output and a clear understanding of what resonates. Before that, you're diluting your effort.",
          },
        ],
      },
      {
        title: 'The Warm Intro System',
        readingTime: '8 min',
        overview: 'Cold outreach is a volume game. Warm intros are a leverage game. One good intro from the right person is worth 200 cold DMs. Build the system that generates them consistently.',
        sections: [
          {
            heading: 'Why warm intros convert at 10x',
            body: 'A warm intro carries borrowed trust. When Malachi introduced me to a potential client at Pomaika\'i, that introduction came with an implicit endorsement: "I trust this person and I think they can help you." The prospect came into the conversation already 60% sold. No cold DM produces that. Cold outreach has its place — it\'s how you build pipeline before you have a network. But as soon as you have even five satisfied clients or five strong professional relationships, your time is better spent activating intros than sending cold messages. The ROI is not close. One good introduction every two weeks beats 20 cold messages per day for most operators.',
          },
          {
            heading: 'Building your intro network deliberately',
            body: 'An intro network is built on three things: doing great work (so people have something to reference when they make the intro), staying visible (so your contacts think of you when the right person shows up), and making it easy (so the intro requires minimal effort from the person making it). The "making it easy" part is the most underused. When you want an intro, don\'t say "do you know anyone who might need what I do?" Instead, say "I\'m looking to work with [specific type of business] in [specific situation]. Do you know anyone like that?" The more specific you are, the faster your contact\'s brain can match you to someone. Vague asks produce no intros. Specific asks produce fast ones.',
          },
          {
            heading: 'The intro email template',
            body: 'When you ask someone for an intro, give them the email to forward. This removes all friction and ensures the message is framed the way you want it. Format: Subject: "Intro: [Your Name] / [Their Name]" — Body: two sentences about who you are and what you do, one sentence about why you think it\'s a relevant connection, one sentence offering a 15-minute call. Under 100 words total. The person making the intro just hits forward. This approach produces more intros than any other format I\'ve tried. People want to help — they just don\'t want to do work to do it.',
          },
          {
            heading: 'Maintaining and reciprocating the intro network',
            body: 'An intro network dies if it\'s only going one direction. For every intro you receive, make two. Not because you\'re keeping score — because it makes the network real and valuable for everyone in it. When you connect two people who benefit from knowing each other, both of them associate that benefit with you. That positive association compounds over time into more intros, more referrals, and more opportunities landing in your direction. Keep a running list of people in your network who might benefit from knowing each other. Make one intro per week with no agenda. Over 12 months, this practice generates more business than almost any other single habit.',
          },
        ],
        keyTakeaways: [
          'One warm intro per week beats 20 cold messages per day for most operators',
          'Specific asks produce fast intros — name the exact type of business and situation you\'re looking for',
          'Give them the forwarding email — remove all friction from the intro ask',
          'Make two intros for every one you receive — keep the network reciprocal',
          'One intro per week with no agenda for 12 months compounds into your largest source of business',
        ],
        assignment: {
          title: 'Activate your intro network',
          description: 'List 10 people in your current network who interact with the type of clients you want. For three of them, write a specific intro ask using the format from this lesson — who you\'re looking for, the exact situation, and the forwarding email. Send all three this week.',
          deliverable: 'Three intro requests sent, with the specific ask format and a forwardable email draft attached to each. Track responses for 14 days.',
        },
        quiz: [
          {
            question: "Why do warm intros convert at approximately 10x the rate of cold outreach?",
            options: ["The intro comes from a mutual connection who can provide social proof", "Warm intros carry borrowed trust — the prospect comes in already 60% sold", "Warm intros are always to more qualified, higher-budget prospects", "The intro removes the cold DM filter and gets you directly into conversation"],
            correctIdx: 1,
            explanation: "When someone trusted introduces you, the prospect comes in already 60% sold because the introduction carries an implicit endorsement: 'I trust this person and think they can help you.' No cold DM produces that borrowed trust.",
          },
          {
            question: "What is the most effective way to ask for an intro?",
            options: ["Ask broadly: 'Do you know anyone who might need what I do?'", "Ask specifically: 'I'm looking to work with [type of business] in [specific situation]. Do you know anyone like that?'", "Send a LinkedIn message to the person you want to meet and CC your mutual connection", "Post publicly asking your network for referrals and tag relevant people"],
            correctIdx: 1,
            explanation: "Vague asks produce no intros. Specific asks produce fast ones. The more specific you are about the type of business and situation, the faster your contact's brain can match you to someone. Give their brain something to search for.",
          },
          {
            question: "What format produces the highest rate of actual introductions when asking someone to make an intro?",
            options: ["A detailed one-page bio they can share about you", "A short forwarding email (under 100 words) that the contact just hits forward on", "A LinkedIn profile link with a brief message explaining the connection", "A Calendly link with a description of what you offer"],
            correctIdx: 1,
            explanation: "Give them the email to forward. Two sentences about who you are and what you do, one on why the connection is relevant, one offering a 15-minute call. Under 100 words. People want to help — they just don't want to do work to do it.",
          },
          {
            question: "What reciprocity ratio keeps an intro network healthy and growing?",
            options: ["One intro given for every one received — maintain exact balance", "Two intros made for every one you receive", "Make intros only when you genuinely see a strong fit", "Give three intros before asking for your first one"],
            correctIdx: 1,
            explanation: "For every intro you receive, make two. Not because you're keeping score — because it makes the network real and valuable for everyone. When you connect two people who benefit from knowing each other, both associate that benefit with you. That compounds over time.",
          },
        ],
      },
      {
        title: 'Authority Building',
        readingTime: '8 min',
        overview: 'Authority is not something you declare — it\'s something you demonstrate over time through specific, verifiable proof. Here\'s how to build it deliberately.',
        sections: [
          {
            heading: 'What authority signals actually look like',
            body: 'Authority signals are external evidence that your judgment and capability are validated by others. They include: client results with specific numbers (West Coast Terpz hit $12K in month one post-launch), published work that others reference or share, being named or quoted in content by people already seen as authorities, and a track record of predictions or recommendations that proved correct. The absence of these signals doesn\'t mean you lack authority — it means you haven\'t documented and published what you\'ve done. Most operators are sitting on years of relevant experience and zero public evidence of it. The work to build authority is mostly the work of documentation, not the work of doing more.',
          },
          {
            heading: 'The case study as authority infrastructure',
            body: 'A well-written case study is the highest-ROI content an operator can produce. It demonstrates capability (here\'s the problem I solved), methodology (here\'s how I solved it), and outcome (here\'s the specific result). A single strong case study — two to three pages with real numbers — outperforms a year of generic social content for converting serious prospects. The case study format: client situation before the engagement, the specific problem, the approach you took, the result in measurable terms, and a quote from the client. You have projects right now that could be case studies. The Pomaika\'i site, the WCT e-commerce build, the DHL Translator — all of these are case study material.',
          },
          {
            heading: 'Speaking, publishing, and the authority ladder',
            body: 'The authority ladder runs from case studies (what you\'ve done) to writing (what you know) to speaking (what you\'re known for). Each rung makes the previous rung more credible. A case study establishes a result. An article or post building on that result establishes a framework. A podcast guest spot or panel invitation establishes you as a named voice in the space. Most operators try to skip directly to speaking without the foundation of documented work and published thinking. Build the ladder from the bottom. One case study published this month, one article or post building on it next month, one speaking opportunity or interview in month three.',
          },
          {
            heading: 'The compound effect of consistent authority signals',
            body: 'Authority signals compound because they reference each other. A case study becomes the basis for an article. The article gets shared by someone with a larger platform. That share brings five new followers, two of whom are potential clients. One of those clients becomes your next case study. The cycle takes six months to feel like traction, and twelve months to feel like authority. The operators who gave up at month four because "nothing was working" missed the compounding. Consistency over twelve months produces more authority than any single high-visibility moment. Build the habit before you need the result.',
          },
        ],
        keyTakeaways: [
          'Authority is documentation of work you\'ve already done — you\'re sitting on years of undocumented proof',
          'One strong case study with real numbers outperforms a year of generic social content',
          'The authority ladder: case study → published thinking → speaking — build it from the bottom',
          'Authority signals compound and reference each other — six months to traction, twelve to authority',
          'Consistency over twelve months beats any single high-visibility moment',
        ],
        assignment: {
          title: 'Write your first case study',
          description: 'Pick your strongest completed project (West Coast Terpz, Pomaika\'i, a client site, any real result). Write a case study using the format: client situation before the engagement, specific problem, your approach, result in measurable terms, client quote. Keep it under 800 words. Publish it — on your site, on LinkedIn, or as a PDF you can send to prospects.',
          deliverable: 'A published case study with a real measurable result, available at a URL or as a shareable document. Send it to three people in your intro network.',
        },
        quiz: [
          {
            question: "Why is a well-written case study the highest-ROI content an operator can produce?",
            options: ["Case studies rank well in search engines and drive organic traffic", "A single strong case study with real numbers outperforms a year of generic social content for converting serious prospects", "Case studies are faster to produce than regular social content", "Clients trust written case studies more than any other format"],
            correctIdx: 1,
            explanation: "A case study demonstrates capability (here's the problem I solved), methodology (here's how I solved it), and outcome (here's the specific result). One two-to-three page case study with real numbers outperforms a year of generic social content for converting serious buyers.",
          },
          {
            question: "What does an authority signal actually consist of?",
            options: ["Follower count, engagement rate, and posting frequency", "External evidence that your judgment and capability are validated by others — client results, published work, track record", "Professional certifications and industry awards", "Testimonials and five-star reviews from previous clients"],
            correctIdx: 1,
            explanation: "Authority signals are external validation: client results with specific numbers, published work others reference, being quoted by people already seen as authorities. Most operators are sitting on years of relevant experience with zero public evidence of it.",
          },
          {
            question: "What is the correct order of the authority ladder?",
            options: ["Speaking first, then writing to support the speaking, then case studies as backup", "Case studies (what you've done) → writing/publishing (what you know) → speaking (what you're known for)", "Social media first, then writing, then case studies once you have credibility", "Writing first, then case studies as proof, then speaking once you're known"],
            correctIdx: 1,
            explanation: "Build the ladder from the bottom. Case studies establish results. Writing on those results establishes a framework. Speaking opportunities come after the documented work and published thinking are in place. Skipping rungs means no foundation.",
          },
          {
            question: "How long does consistent authority building take to feel like real traction?",
            options: ["Two to three months if you post consistently every day", "Six months to feel like traction, twelve months to feel like authority", "One year minimum before any visible business results", "Thirty days with a viral post or high-profile mention"],
            correctIdx: 1,
            explanation: "Authority signals compound because they reference each other, but the cycle takes six months to feel like traction. Operators who quit at month four missed the compounding. Consistency over twelve months produces more authority than any single high-visibility moment.",
          },
        ],
      },
      {
        title: 'Strategic Partnerships',
        readingTime: '8 min',
        overview: 'The right partnership is a distribution channel that costs you nothing but relationship maintenance. Most operators underinvest in partnerships and overspend on ads.',
        sections: [
          {
            heading: 'What a strategic partnership actually is',
            body: 'A strategic partnership is a structured, recurring relationship with another operator or business where you refer clients to each other or provide complementary services to the same client base. It is not a one-time referral. It is not a vague "let\'s work together sometime" conversation. It is a specific agreement: what triggers a referral, what the referral process looks like, and what (if anything) changes hands when a referral converts. The best partnerships are between operators whose services are adjacent but non-competing — a web developer and a copywriter, a systems operator and a paid ads person, an app builder and a digital marketing agency. The same client needs both, neither of you is competing for the same project, and every client you get is a potential referral for your partner.',
          },
          {
            heading: 'Identifying your partnership candidates',
            body: 'Your ideal partnership candidates are serving the same type of client as you, at a similar or slightly higher level, and providing a service that naturally precedes or follows yours in the client relationship. If you build sites, your partners are copywriters, brand designers, and SEO consultants. If you build automation systems, your partners are operations consultants and CRM specialists. Make a list of 10 people you\'ve crossed paths with who fit this profile. These are your first partnership conversations — not cold outreach to strangers, but structured conversations with people who already know you exist.',
          },
          {
            heading: 'How to structure the partnership conversation',
            body: 'The partnership conversation has three parts. Part one: establish mutual understanding of each other\'s work and ideal clients. Part two: identify the specific overlap — where does your work begin and theirs end, and where does theirs begin and yours end. Part three: propose a simple referral structure. Keep the structure simple for the first six months: when you encounter a client who needs their service, you send them a message with the client\'s info. They do the same for you. No formal commission unless the volume warrants it. Complexity kills partnerships early. Start with a handshake and a commitment to stay in touch. Most strong partnerships started with a 20-minute coffee conversation and a specific trigger for referring.',
          },
          {
            heading: 'Activating and maintaining partnerships over time',
            body: 'A partnership is activated by the first referral you make, not the conversation you had about making referrals. Send the first referral within two weeks of the partnership conversation — even if it\'s a small one. The act of sending it signals seriousness and triggers reciprocity. After that, maintain the partnership with monthly touchpoints: a check-in on what each of you is working on, a note when you encounter a potential referral, and a debrief when a referral converts. Partnerships that are maintained with regular communication outlast partnerships that only activate when one party needs something. The goal is to be the first person your partner thinks of when a client needs what you do.',
          },
        ],
        keyTakeaways: [
          'A partnership is a structured referral agreement, not a vague "let\'s collaborate" conversation',
          'Ideal partners serve the same client type with adjacent, non-competing services',
          'Keep the initial structure simple — complex agreements collapse under early-stage friction',
          'Send the first referral within two weeks of the conversation to activate the partnership',
          'Monthly touchpoints maintain partnerships; silence makes them dormant',
        ],
        assignment: {
          title: 'Initiate two strategic partnerships',
          description: 'Identify two people in your existing network whose services are adjacent to yours. Have a 20-minute call with each one using the three-part partnership conversation structure. Propose a simple referral arrangement. Send the first referral or potential lead to one of them within 14 days.',
          deliverable: 'Two partnership conversations documented with the outcome, and one referral sent within 14 days. Track whether it converts.',
        },
        quiz: [
          {
            question: "What distinguishes a strategic partnership from a vague 'let's collaborate' conversation?",
            options: ["A strategic partnership involves a formal revenue share agreement", "A strategic partnership is a structured, recurring referral agreement with a specific trigger and process", "A strategic partnership requires both parties to be at the same revenue level", "A strategic partnership is a legally binding contract between two businesses"],
            correctIdx: 1,
            explanation: "A partnership is a specific agreement: what triggers a referral, what the referral process looks like, and what changes hands when a referral converts. Not a one-time referral. Not a vague conversation. A structured, recurring relationship.",
          },
          {
            question: "Who are your ideal strategic partnership candidates?",
            options: ["Operators with larger audiences who can promote your services", "People serving the same client type with adjacent, non-competing services", "Businesses in your exact niche who can send overflow work your way", "Former clients who understand your work and can provide referrals"],
            correctIdx: 1,
            explanation: "Ideal partners serve the same type of client with adjacent but non-competing services. The same client needs both. Neither of you is competing for the same project. Every client you get is a potential referral for them, and vice versa.",
          },
          {
            question: "When should you send the first referral after establishing a partnership?",
            options: ["Wait until you have a genuinely strong match to maintain quality", "Within two weeks of the partnership conversation, even if it's a small one", "Only after they've sent you at least one referral first", "After six months of building the relationship before introducing business"],
            correctIdx: 1,
            explanation: "A partnership is activated by the first referral you make, not the conversation you had about making referrals. Sending the first referral within two weeks signals seriousness and triggers reciprocity. The conversation alone is not a partnership.",
          },
          {
            question: "What keeps a partnership active over time versus letting it go dormant?",
            options: ["Formal quarterly review meetings with documented outcomes", "Monthly touchpoints: check-in on what each of you is building, note potential referrals, debrief when a referral converts", "Sending a referral every month regardless of fit", "A shared project or client that keeps both parties regularly communicating"],
            correctIdx: 1,
            explanation: "Partnerships maintained with regular communication outlast partnerships that only activate when one party needs something. Monthly touchpoints keep you top of mind for each other. The goal is to be the first person your partner thinks of when a client needs what you do.",
          },
        ],
      },
    ],
  },
  {
    num: '05',
    title: 'Systems & Scale',
    description: 'Productize your work, lock in recurring revenue, build the systems that run without you, and design the path to $10K/month with real names and real numbers.',
    lessons: [
      {
        title: 'Productized Services',
        readingTime: '8 min',
        overview: 'A productized service is a defined offering with a fixed scope, fixed price, and fixed timeline. It sells faster, delivers more consistently, and scales without you reinventing the engagement every time.',
        sections: [
          {
            heading: 'Why custom scoping is a tax on your time',
            body: 'Every custom proposal you write takes two to four hours. The discovery, the scoping, the writing, the back-and-forth. For a $2K project, that\'s a 10-20% time overhead before you\'ve done any actual work. Multiply that across twelve projects a year and you\'ve spent a full month writing proposals. Productizing eliminates most of that overhead. When the scope is defined in advance, the proposal writes itself in 20 minutes. The price is set. The timeline is set. The client\'s job is to say yes or no — not to negotiate a custom engagement. I built my first productized offer after the third time I built the same type of site for a different client. Same scope, different price, different proposal. That inconsistency was costing me time and margin.',
          },
          {
            heading: 'The anatomy of a productized service',
            body: 'A productized service has five components: a name (makes it real and memorable), a clear target customer (who it\'s for, specifically), a defined scope (what\'s included and what explicitly is not), a fixed price (no ranges, no "starting at"), and a fixed timeline (delivery by day X after kickoff). Example: "The Operator Site — a 5-page conversion-focused website for service businesses, delivered in 7 days, $2,500. Includes: homepage, services, about, contact, and one custom integration. Excludes: copywriting, photography, and ongoing maintenance." That\'s a product. A client can read it and decide in three minutes whether it\'s what they need.',
          },
          {
            heading: 'How to productize what you already do',
            body: 'Look at your last eight to ten projects. What type of work shows up more than twice? What type of client shows up more than twice? The intersection of those two is your first product. Take the most common project type, define the scope based on what you delivered most of the time (not the outliers), price it at the median of what you\'ve charged for similar work, and set the timeline to the median delivery time plus 20%. The 20% buffer is not for you to work slower — it\'s so you can consistently deliver early, which builds client trust faster than any other single thing. "I said seven days, I delivered in five" is a powerful statement to have in every client relationship.',
          },
          {
            heading: 'Testing your product with real clients',
            body: 'A productized service is a hypothesis until a client buys it. Your first test is whether the product sells — does the defined scope and fixed price produce a "yes" without negotiation? Your second test is whether it delivers — can you actually build it in the defined scope and timeline, reliably, across multiple clients? Your third test is whether it refers — do clients who buy it send you other clients? Run three iterations of the product before declaring it fixed. After each one, update the scope or timeline based on what actually happened. By iteration three, you should have a product that sells in a single call, delivers without surprises, and produces referrals.',
          },
        ],
        keyTakeaways: [
          'Every custom proposal is a 10-20% time tax on the project before work begins',
          'Five components: name, target customer, defined scope, fixed price, fixed timeline',
          'Your first product is the intersection of your most common project type and client type',
          'Deliver early every time — "said seven days, delivered in five" compounds into referrals',
          'Three iterations to fix the product — scope, price, and timeline adjust based on real delivery',
        ],
        assignment: {
          title: 'Build and publish your first productized service',
          description: 'Review your last eight to ten projects. Identify the most common type. Define the five components: name, target customer, scope (with explicit exclusions), fixed price, fixed timeline. Write the product description in under 200 words. Publish it on your website or portfolio this week.',
          deliverable: 'A live product page or listing with all five components, reachable at a URL. Pitch it to one person in your pipeline this week.',
        },
        quiz: [
          {
            question: "What is the primary benefit of productizing a service versus custom scoping every project?",
            options: ["Productized services always command a higher price than custom work", "Productized services eliminate the 2-4 hour proposal overhead and enable consistent delivery", "Clients prefer productized services because they know exactly what they're getting", "Productized services are easier to delegate to a junior team member"],
            correctIdx: 1,
            explanation: "Every custom proposal is a 10-20% time tax on the project before any work begins. Multiply across twelve projects and you've spent a full month writing proposals. A productized service writes itself in 20 minutes. The scope is defined. The price is set.",
          },
          {
            question: "What are the five components of a well-defined productized service?",
            options: ["Name, price, timeline, case study, and client testimonial", "Name, target customer, defined scope (with exclusions), fixed price, and fixed timeline", "Description, ideal client profile, deliverables list, rate card, and revision policy", "Tagline, target market, features, pricing tiers, and FAQ"],
            correctIdx: 1,
            explanation: "A productized service has five components: a name (makes it real), a clear target customer (who it's for), a defined scope with explicit exclusions (what's in and what's out), a fixed price (no ranges), and a fixed timeline (delivery by day X). A client reads it and decides in three minutes.",
          },
          {
            question: "How do you determine the right scope and price for your first productized service?",
            options: ["Research competitor pricing and position yourself 20% below market rate", "Look at your last 8-10 projects — the most common type at median scope and median price plus a 20% timeline buffer", "Start with the most complex version of your service and reduce it based on client feedback", "Set the price based on what your most valuable client has paid you"],
            correctIdx: 1,
            explanation: "Your first product is the intersection of your most common project type and client type. Median scope, median price, timeline plus 20% buffer. The buffer lets you consistently deliver early — 'said seven days, delivered in five' compounds into referrals faster than any other single thing.",
          },
          {
            question: "How many real client iterations does it take before declaring a productized service fixed?",
            options: ["One — if the first client is happy, the product is validated", "At least five to get a statistically significant sample", "Three — scope, price, and timeline adjust based on what actually happened", "Two — one internal test and one paying client"],
            correctIdx: 2,
            explanation: "A productized service is a hypothesis until a client buys it. Run three iterations: does it sell without negotiation? Does it deliver on scope and timeline? Does it refer? Update scope or timeline based on real delivery after each one. By iteration three, you have a fixed product.",
          },
        ],
      },
      {
        title: 'Retainer Architecture',
        readingTime: '9 min',
        overview: 'Retainers are the difference between starting at zero every month and starting at $3K. The architecture of the retainer determines whether clients stay for six months or cancel after two.',
        sections: [
          {
            heading: 'What makes a retainer worth renewing',
            body: 'Clients renew retainers when two conditions are true: they feel the ongoing value is clear and the cost of stopping is higher than the cost of continuing. Most retainers fail because neither condition is met. The client stops seeing new value delivered each month (the operator is just "maintaining") and can\'t articulate a specific outcome they\'d lose if they cancelled. A retainer that just keeps a site running is easy to cancel. A retainer that drives five new leads per month is not. The difference is in how the retainer is scoped and reported. Report on outcomes, not activities. "Your lead form received 23 submissions this month" beats "I updated your site and responded to two bugs."',
          },
          {
            heading: 'The three retainer structures that work',
            body: 'Three retainer structures are consistently sellable and sustainable. The maintenance-and-improvement retainer ($500-$1,500/month) covers ongoing site maintenance, one new feature or page per month, and priority response time. The growth retainer ($1,500-$3,500/month) covers everything in maintenance plus ongoing optimization toward a growth metric — leads, sales, signups. The full-service operator retainer ($3,500-$7,500/month) covers ownership of an entire function — building new systems, running the tech stack, managing vendors. The right structure depends on what the client needs and what you can deliver consistently. Oversell the retainer and you\'ll hate the client by month three.',
          },
          {
            heading: 'Pitching the retainer at the right moment',
            body: 'The right moment to pitch a retainer is at the end of a successful project delivery — never at the beginning, never in the proposal. When you deliver the final deliverable, you say: "I want to share something before we close out. I\'ve gotten familiar with your business over this engagement and I see real opportunity to keep driving [specific outcome]. I offer a monthly arrangement for clients where [specific deliverable] — most of them stay on it because [specific result you\'ve seen]. Would you want to hear more about it?" This is not a pitch — it\'s a natural continuation of a successful relationship. The client already trusts you. You\'re just offering more of what already worked.',
          },
          {
            heading: 'Protecting the retainer with monthly reporting',
            body: 'A retainer without monthly reporting is a retainer that cancels when the client stops seeing movement. Monthly reporting takes 30 minutes per client and does three things: it documents the value delivered (making cancellation psychologically harder), it surfaces problems before they become crises (maintaining trust), and it creates a natural touchpoint for expanding the retainer or referrals (because you\'re visible and engaged). The report format: three bullet points of what happened, three bullet points of what\'s happening next, one metric that represents the retainer\'s core value. Under one page. Send it the same day every month. Predictability signals professionalism.',
          },
        ],
        keyTakeaways: [
          'Clients renew when value is clear and the cost of stopping is higher than the cost of continuing',
          'Three structures: maintenance ($500-$1,500), growth ($1,500-$3,500), full-service ($3,500-$7,500)',
          'Pitch the retainer at delivery of the project — never at the start',
          'Monthly reporting takes 30 minutes and is the primary reason retainers survive past month three',
          'Report on outcomes, not activities — leads generated beats "I fixed a bug"',
        ],
        assignment: {
          title: 'Design and pitch your retainer offer',
          description: 'Pick your best current or recently completed client. Design a retainer structure using one of the three formats — choose based on what they actually need. Write the pitch script using the delivery-moment format. Send the pitch or schedule a call to present it this week. Write your monthly report template with three outcome bullets and one core metric.',
          deliverable: 'A written retainer offer with scope, price, and monthly deliverables. A sent or scheduled pitch to one client. A monthly report template ready to use.',
        },
        quiz: [
          {
            question: "What two conditions must be true for a client to renew a retainer?",
            options: ["The price is competitive and the relationship is friendly", "The ongoing value is clear and the cost of stopping is higher than the cost of continuing", "Monthly reporting is provided and the operator is responsive", "The client has budget and the project scope fits their needs"],
            correctIdx: 1,
            explanation: "Most retainers fail because neither condition is met. The client stops seeing new value delivered each month and can't articulate a specific outcome they'd lose if they cancelled. Report on outcomes, not activities — 23 lead form submissions beats 'I fixed a bug.'",
          },
          {
            question: "When is the right moment to pitch a retainer to a client?",
            options: ["At the start of the initial project to set expectations upfront", "In the original proposal as one of the three pricing tiers", "At the end of a successful project delivery — never at the beginning", "Six months after the project ends once you've built the relationship"],
            correctIdx: 2,
            explanation: "At delivery, you say: 'I've gotten familiar with your business over this engagement and I see real opportunity to keep driving [specific outcome].' The client already trusts you. You're offering more of what already worked. This is not a cold pitch — it's a natural continuation.",
          },
          {
            question: "What does the growth retainer structure ($1,500-$3,500/month) cover?",
            options: ["Unlimited support, on-call availability, and dedicated account management", "Everything in maintenance plus ongoing optimization toward a specific growth metric — leads, sales, signups", "Monthly strategy calls, content creation, and competitive analysis", "Site maintenance, one new feature per month, and priority response time"],
            correctIdx: 1,
            explanation: "Three structures: maintenance ($500-$1,500) covers upkeep and one new feature per month. Growth ($1,500-$3,500) adds ongoing optimization toward a measurable growth metric. Full-service ($3,500-$7,500) means you own an entire function. Oversell the retainer and you'll hate the client by month three.",
          },
          {
            question: "What is the purpose of monthly reporting for retainer clients?",
            options: ["To justify your fees and prevent cancellation conversations", "To document value delivered, surface problems early, and create a natural touchpoint for expansion or referrals", "To show the client what you worked on and how much time it took", "To provide transparency about your process and build client trust"],
            correctIdx: 1,
            explanation: "Monthly reporting does three things: documents the value delivered (makes cancellation psychologically harder), surfaces problems before they become crises, and creates a natural touchpoint for expanding the retainer or getting referrals. Under one page, same day every month.",
          },
        ],
      },
      {
        title: 'The First Hire',
        readingTime: '8 min',
        overview: 'The first hire is the hardest and the most important. Most operators hire too late, hire for the wrong thing, and then wonder why they\'re doing more management than work. Here\'s how to do it right.',
        sections: [
          {
            heading: 'When you\'re actually ready to hire',
            body: 'You\'re ready to hire when two conditions are simultaneously true: you have more paying work than you can handle alone, and you can identify one specific type of task that represents 10+ hours per week of your time that someone else could do to 80% of your standard. If either condition is false, don\'t hire. Hiring before you have overflow work means you\'ll be managing someone who doesn\'t have enough to do, which is more draining than just doing the work yourself. Hiring without a clearly defined task means you\'ll spend your first month trying to figure out what to hand off, which costs you time you hired them to recover. Both conditions must be true.',
          },
          {
            heading: 'Hire for the role you hate, not the role you love',
            body: 'Most operators make their first hire in a role that\'s adjacent to their own expertise because they feel confident evaluating that work. A developer hires a junior developer. A designer hires a junior designer. This is usually the wrong call. Your highest-leverage first hire is the role you hate doing or are least qualified to do — the thing that either doesn\'t get done or gets done poorly because you\'re the bottleneck. For most operators I know, that\'s some combination of client communication, admin, and basic project management. Hiring one generalist who handles client follow-ups, scheduling, invoicing, and basic support frees up 15 hours a week of your highest-value time.',
          },
          {
            heading: 'The hiring process that filters for real operators',
            body: 'Don\'t hire from a resume. Hire from a paid test assignment. Give every serious candidate a 2-4 hour paid task that represents exactly what they\'d do in the role. Not a hypothetical — a real task from a real project (sanitized if needed). What you\'re looking for: do they deliver on time, do they communicate when they hit a blocker, and is the work quality 80% of what you\'d produce? If all three are yes, you have a candidate. If the work is late, undercommunicated, or significantly below your standard, you have your answer before you\'ve committed to onboarding someone. Pay them $50-$100 for the test. It\'s worth it to avoid a bad hire.',
          },
          {
            heading: 'Onboarding and setting standards from day one',
            body: 'The standards you set in the first two weeks are the standards you\'ll live with for the entire working relationship. If you tolerate late deliveries in week one, you\'ll get late deliveries in month six. The onboarding process should include: your communication expectations (response time, check-in cadence, how to flag blockers), your quality bar (show them a piece of work at your standard and explain what makes it that standard), and your project workflow (how tasks are assigned, how progress is tracked, how delivery is confirmed). Write it down. The operator who documents their standards is the operator whose team can eventually run without them.',
          },
        ],
        keyTakeaways: [
          'Two conditions for hiring: overflow work exists AND one specific 10+ hour/week task is identifiable',
          'Hire for the role you hate, not the role you love — that\'s your highest-leverage first hire',
          'Test assignments (paid, 2-4 hours) filter candidates better than any interview',
          'Standards set in week one persist for the entire working relationship — hold them from day one',
          'Document your workflow and quality standards before you hire, not after',
        ],
        assignment: {
          title: 'Define your first hire',
          description: 'Identify whether you currently meet both hiring conditions (overflow work and a specific 10+ hour weekly task). If yes, write a one-page role description: what the hire does, what the quality bar is, how success is measured, and what the test assignment will be. If no, define what condition you still need to meet and your timeline for meeting it.',
          deliverable: 'Either a one-page role description with a test assignment ready to send, or a written plan for when both conditions will be true with specific steps to get there.',
        },
        quiz: [
          {
            question: "What two conditions must both be true before you should hire anyone?",
            options: ["You have funding and a clear role description", "You have more paying work than you can handle AND one specific 10+ hour/week task someone else could do to 80% of your standard", "Your revenue is above $5K/month and you have at least two retainer clients", "You have a documented process and a clear onboarding plan"],
            correctIdx: 1,
            explanation: "If either condition is false, don't hire. Overflow work without a clear task means you'll spend your first month figuring out what to hand off. A clear task without overflow means you're managing someone who doesn't have enough to do. Both must be true.",
          },
          {
            question: "What type of role should your first hire fill?",
            options: ["The role most similar to your own expertise so you can evaluate their work", "The role you hate doing or are least qualified to do — the highest-leverage gap", "A junior version of your primary skill to handle overflow from your main service", "A client success role to maintain existing client relationships"],
            correctIdx: 1,
            explanation: "Hire for the role you hate, not the role you love. For most operators, that's some combination of client communication, admin, and project management. One generalist who handles follow-ups, scheduling, and invoicing frees up 15 hours a week of your highest-value time.",
          },
          {
            question: "What is the most effective way to evaluate a candidate before committing to hiring them?",
            options: ["A structured interview with behavioral and situational questions", "A paid test assignment (2-4 hours) that represents exactly what they'd do in the role", "A portfolio review and three professional references", "A trial week at full pay to observe their working style"],
            correctIdx: 1,
            explanation: "Don't hire from a resume. Give every serious candidate a paid 2-4 hour task — a real task from a real project. You're looking for three things: delivered on time, communicated when they hit a blocker, and work quality at 80%+ of your standard. $50-$100 for the test is worth it to avoid a bad hire.",
          },
          {
            question: "Why do the standards you set in the first two weeks of an employment relationship matter so much?",
            options: ["New hires form habits quickly and early impressions are hard to change", "The standards set in week one are the standards you'll live with for the entire working relationship", "Early performance predicts long-term quality better than any other indicator", "Legal protections for employees make it difficult to adjust standards later"],
            correctIdx: 1,
            explanation: "If you tolerate late deliveries in week one, you'll get late deliveries in month six. Document your communication expectations, your quality bar, and your project workflow. Show them a piece of work at your standard and explain what makes it that standard. Write it down.",
          },
        ],
      },
      {
        title: 'The $10K Blueprint',
        readingTime: '9 min',
        overview: 'This isn\'t a mindset exercise. It\'s a math problem with real names, real services, and a real timeline. You either have a path to $10K/month or you have a wish. This lesson builds the path.',
        sections: [
          {
            heading: 'Why most $10K plans fail',
            body: 'Most operators write a $10K plan that looks like this: "Get more clients, charge higher prices, build my brand." That\'s not a plan. That\'s a direction. A real $10K plan has names — specific people who could become specific clients paying specific amounts. It has services — specific productized offerings with fixed prices that add up to $10K. It has a timeline — specific milestones at specific dates. And it has a constraint — what\'s the one thing that needs to be true for the first domino to fall? Without those four elements, the plan is a wish dressed up in action language. I\'ve seen operators with genuinely strong skills stay stuck at $3K/month for a year because they had directions, not plans.',
          },
          {
            heading: 'Building the $10K math',
            body: 'There are multiple paths to $10K/month: ten clients at $1K, five clients at $2K, three clients at $3,333, two clients at $5K, or one client at $10K. Each has different acquisition requirements, different delivery demands, and different leverage. Ten clients at $1K is high volume, low leverage — you\'ll be busy. One client at $10K is low volume, high stakes — you need one relationship to go very right. For most operators building their first $10K month, the clearest path is three to five clients in the $2K-$3K range, with one retainer anchoring the floor at $1,500-$2,000/month. That gives you predictable baseline revenue plus upside from project work.',
          },
          {
            heading: 'Mapping the path with real names',
            body: 'Open your contact list. Your CRM. Your DMs. Write down every person who has paid you or expressed serious interest in the last six months. For each one, estimate: what could they pay you per month on retainer? What project are they most likely to buy in the next 90 days? Now build the math from those real names. If Malachi goes to $5K/month for the Pomaika\'i operator retainer, that\'s half your target. If West Coast Terpz adds a growth retainer at $1,500, that\'s $6,500. One new project client at $2,500 gets you to $9,000. One additional retainer at $1,000 closes the gap. This is a plan. It has names. It has numbers. It has a realistic path.',
          },
          {
            heading: 'The 90-day execution sequence',
            body: 'The $10K blueprint runs in 90 days. Month one: convert one current client to a retainer. Pitch two new projects. Publish your first productized service. Build your pipeline to 10 active leads. Month two: close one new project client. Send a retainer pitch to a second current client. Execute the content plan from Module 04. Make three intro asks. Month three: convert a second client to retainer. Close one more project. Run the full discovery call framework on your top three pipeline leads. By day 90, you should have a clear view of whether you\'re at $8K, $10K, or $12K/month — and a specific diagnosis of what to adjust if you\'re short. The blueprint is not a guarantee. It\'s a test with measurable outcomes.',
          },
        ],
        keyTakeaways: [
          'A plan has names, services, a timeline, and one key constraint — a direction has none of those',
          'Clearest first path: three to five clients at $2K-$3K with one anchor retainer',
          'Map the math using real names from your existing network before pursuing new leads',
          'Three-month sequence: convert, pitch, publish month one — close, pitch, build month two — convert, close, diagnose month three',
          'Day 90 gives you a measurable outcome and a specific diagnosis, not just a number',
        ],
        assignment: {
          title: 'Write your $10K blueprint',
          description: 'Build a $10K/month plan using real names from your network. For each name: what service, what price, what timeline for the pitch or close. Calculate the math until you hit $10K. Identify the one constraint that needs to be resolved for the first domino to fall. Write the month-by-month sequence for the next 90 days with specific actions for each week.',
          deliverable: 'A one-page blueprint with real names, real services, real prices that add up to $10K/month, and a 90-day week-by-week execution sequence. Review it every Sunday during the 90 days and update based on what actually happened.',
        },
        quiz: [
          {
            question: "What four elements separate a real $10K plan from a $10K wish?",
            options: ["A vision, a mission, values, and measurable KPIs", "Names (specific people), services (specific offerings), a timeline, and one key constraint", "A marketing plan, a sales plan, a delivery plan, and a financial plan", "Goals, objectives, strategies, and tactics"],
            correctIdx: 1,
            explanation: "'Get more clients, charge higher prices, build my brand' is a direction, not a plan. A real plan has specific names of people who could become clients, specific services at fixed prices that add up to $10K, a timeline with milestones, and one constraint that needs to be true for the first domino to fall.",
          },
          {
            question: "What is the clearest path to a first $10K month for most operators?",
            options: ["Ten clients at $1K each — high volume, lowest risk per client", "One client at $10K — maximum leverage, minimum delivery complexity", "Three to five clients in the $2K-$3K range with one anchor retainer at $1,500-$2,000/month", "Five clients at $2K with no retainers — project work is more reliable than recurring"],
            correctIdx: 2,
            explanation: "Ten clients at $1K is high volume with low leverage. One client at $10K is high stakes. The clearest path for most operators is three to five clients at $2K-$3K with one anchor retainer providing predictable baseline revenue plus upside from project work.",
          },
          {
            question: "When building the $10K math, where should you start?",
            options: ["With new outreach to find fresh prospects in your target market", "With your existing contact list, CRM, and DMs — map what real people could realistically pay", "With market research to determine the right price points for your services", "With your current clients and what additional services you could upsell to them"],
            correctIdx: 1,
            explanation: "Open your contact list. Your CRM. Your DMs. Write down every person who has paid you or expressed serious interest in the last six months. Build the math from real names. If you can't get to $10K from your existing network, then pursue new leads.",
          },
          {
            question: "What does the 90-day $10K blueprint prioritize in Month 1?",
            options: ["Launching a new marketing campaign and building brand awareness", "Converting one current client to a retainer, pitching two new projects, and publishing your productized service", "Hiring a team member to handle client delivery and free up selling time", "Raising all existing client prices to move toward higher-value work"],
            correctIdx: 1,
            explanation: "Month one: convert one current client to a retainer. Pitch two new projects. Publish your productized service. Build pipeline to 10 active leads. This sequence builds predictable base revenue while simultaneously opening new project opportunities.",
          },
        ],
      },
    ],
  },
];

export function getTotalLessons(): number {
  return courseData.reduce((sum, mod) => sum + mod.lessons.length, 0);
}

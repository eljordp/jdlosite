export type Lang = "en" | "hi";

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  hi: "हिंदी",
};

interface Niche {
  num: string;
  title: string;
  sub: string;
  desc: string;
}

interface Deliverable {
  label: string;
  desc: string;
}

interface Tier {
  name: string;
  inr: string;
  usd: string;
  sub: string;
  desc: string;
  fit: string;
  monthly: string;
  cta: string;
  featured?: boolean;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface Faq {
  q: string;
  a: string;
}

interface ProofItem {
  name: string;
  slug: string;
  cats: string[];
  headline: string;
  stat: string;
}

export interface CopyShape {
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    symptoms: string[];
  };
  niches: {
    eyebrow: string;
    h2: string;
    sub: string;
    items: Niche[];
  };
  deliverables: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    items: Deliverable[];
  };
  proof: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    items: ProofItem[];
    seeAll: string;
    caseStudy: string;
  };
  pricing: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    sub: string;
    tiers: Tier[];
    note: string;
    mostPopular: string;
  };
  process: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    steps: Step[];
  };
  team: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    jpRole: string;
    jpName: string;
    jpDesc: string;
    jpLink: string;
    kameshRole: string;
    kameshName: string;
    kameshDesc: string;
    kameshCta: string;
  };
  faq: {
    eyebrow: string;
    h2: string;
    items: Faq[];
  };
  finalCta: {
    eyebrow: string;
    h2a: string;
    h2b: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
}

const PROOF_ITEMS: ProofItem[] = [
  {
    name: "Lonely Love",
    slug: "lonely-love",
    cats: ["Fashion", "E-commerce"],
    headline: "Custom e-commerce site for a clothing brand with a real following.",
    stat: "Full storefront",
  },
  {
    name: "Onhizm",
    slug: "onhizm",
    cats: ["Fashion", "Website"],
    headline: "Custom site for a brand worn by celebrities. Premium positioning.",
    stat: "Empire connections",
  },
  {
    name: "Aesthetics By Kayy",
    slug: "aesthetics-by-kayy",
    cats: ["Website", "Booking"],
    headline: "Luxury skin, brow & lash studio with full booking system.",
    stat: "Hawaii-based",
  },
  {
    name: "Vacaville Appliance",
    slug: "vacaville-appliance",
    cats: ["AI", "Service Business"],
    headline: "AI receptionist that books appointments while the owner sleeps.",
    stat: "40+ bookings/mo",
  },
  {
    name: "West Coast Terpz",
    slug: "west-coast-terpz",
    cats: ["E-commerce", "Website"],
    headline: "Turned a local brand into an online business doing real revenue.",
    stat: "$12K+/mo",
  },
  {
    name: "Pomaika'i Co",
    slug: "pomaikai",
    cats: ["Website", "AI"],
    headline: "Centralized operations for a six-figure consultancy. Five tools → one.",
    stat: "20 hrs/wk saved",
  },
];

export const copy: Record<Lang, CopyShape> = {
  en: {
    hero: {
      eyebrow: "JDLO India · Websites + Systems",
      h1a: "Your business runs on WhatsApp.",
      h1b: "Your website should too.",
      desc: "We build websites and systems for Indian businesses — fashion brands, wedding photographers, coaches. WhatsApp-first. Razorpay built in. Live in two weeks.",
      ctaPrimary: "WhatsApp Kamesh",
      ctaSecondary: "See pricing",
    },
    problem: {
      eyebrow: "The Problem",
      h2a: "Your work is great.",
      h2b: "Your online presence makes you look smaller than you are.",
      symptoms: [
        "Customers ask for a website link. You send them your Insta.",
        "Orders pile up in WhatsApp. Half get lost in the chat.",
        "You're charging the same rate as someone with no portfolio site.",
        "Bigger brands are taking your customers because they look more legit.",
        "You spend hours every day answering the same 5 questions.",
      ],
    },
    niches: {
      eyebrow: "Who We Build For",
      h2: "Three kinds of businesses.",
      sub: "We're not a generic web shop. We build for the businesses we've seen scale fast in India. If you're one of these, we already know what you need.",
      items: [
        {
          num: "01",
          title: "Fashion & D2C Brands",
          sub: "Selling on WhatsApp + Insta",
          desc: "A clean catalog site that pulls from your Instagram, lets customers browse without DM-ing, and checks out via Razorpay or sends straight to WhatsApp. Look like the brand you actually are.",
        },
        {
          num: "02",
          title: "Wedding Photographers & Planners",
          sub: "Premium portfolios for premium clients",
          desc: "A portfolio site that makes families pay your full rate without negotiating. Galleries, packages, inquiry form, WhatsApp booking. The kind of site that gets shared at chai and books weddings.",
        },
        {
          num: "03",
          title: "Coaches & Educators",
          sub: "IELTS, fitness, business, dance",
          desc: "A landing page + course checkout that does the selling for you. Razorpay subscriptions, EMI option, automated WhatsApp follow-up. Stop chasing payments — let the system do it.",
        },
      ],
    },
    deliverables: {
      eyebrow: "What You Get",
      h2a: "Six pieces.",
      h2b: "One system.",
      items: [
        { label: "Custom website", desc: "Built around your business, not a template. Mobile-first because that's where your customers are." },
        { label: "Razorpay + UPI checkout", desc: "Accept payments from anywhere in India. Cards, UPI, net banking, EMI — all built in." },
        { label: "WhatsApp integration", desc: "One-tap WhatsApp button on every page. Auto-replies, order forms, customer chat — your way." },
        { label: "Instagram catalog sync", desc: "Your latest posts and products auto-pull onto your site. Update Insta, your site updates too." },
        { label: "Lead inbox + dashboard", desc: "Every inquiry, order, and booking in one place. Searchable. Never lose a customer in WhatsApp again." },
        { label: "Hindi or English (or both)", desc: "Built for your audience. Hindi, English, or bilingual — your call. Kamesh handles the language work." },
      ],
    },
    proof: {
      eyebrow: "Receipts",
      h2a: "We've done this before.",
      h2b: "For real businesses doing real numbers.",
      sub: "30+ projects shipped — fashion brands, service businesses, e-commerce stores, AI tools. Click any project to see the full case study.",
      items: PROOF_ITEMS,
      seeAll: "See all 30+ projects",
      caseStudy: "See case study →",
    },
    pricing: {
      eyebrow: "Pricing",
      h2a: "Five tiers.",
      h2b: "From a quick start to full premium.",
      sub: "All prices in INR. Payment plans available — 50% to start, 50% on delivery. EMI option through Razorpay. No hidden fees, no surprise bills.",
      mostPopular: "Most Popular",
      tiers: [
        {
          name: "Express",
          inr: "₹15,000",
          usd: "≈ $180",
          sub: "one-time",
          desc: "Single-page site, WhatsApp + UPI integration, mobile-first. Live in 5 days.",
          fit: "Best for: shops just getting online, want a digital business card",
          monthly: "+ ₹2,000/mo hosting",
          cta: "Talk to Kamesh",
        },
        {
          name: "Growth",
          inr: "₹35,000",
          usd: "≈ $420",
          sub: "one-time",
          desc: "Multi-page site, Razorpay + Instagram sync, lead inbox. Live in 10 days.",
          fit: "Best for: small D2C brands ready to take real orders online",
          monthly: "+ ₹3,000/mo hosting & care",
          cta: "Talk to Kamesh",
        },
        {
          name: "Starter",
          inr: "₹85,000",
          usd: "≈ $1,000",
          sub: "one-time",
          desc: "Custom-designed site (not a template), full Razorpay flow, lead capture. Live in 14 days.",
          fit: "Best for: brands wanting custom design + their own identity",
          monthly: "+ ₹4,000/mo hosting & care",
          cta: "Talk to Kamesh",
        },
        {
          name: "Studio",
          inr: "₹2,50,000",
          usd: "≈ $3,000",
          sub: "one-time",
          desc: "Multi-page site, full catalog, lead inbox, Instagram sync, automated WhatsApp follow-up. Live in 14 days.",
          fit: "Best for: established fashion brands, wedding studios, coaching businesses",
          monthly: "+ ₹8,000/mo hosting & care",
          cta: "Talk to Kamesh",
          featured: true,
        },
        {
          name: "Brand",
          inr: "₹5,00,000",
          usd: "≈ $6,000",
          sub: "one-time",
          desc: "Everything in Studio + custom features, AI follow-up agent, multi-language (Hindi + English), priority support.",
          fit: "Best for: brands doing ₹10L+/mo who want to look the part",
          monthly: "+ ₹15,000/mo hosting & care",
          cta: "Talk to Kamesh",
        },
      ],
      note: "Not sure which tier? WhatsApp Kamesh — he'll ask you 5 questions and tell you straight which one fits.",
    },
    process: {
      eyebrow: "How It Works",
      h2a: "Three steps.",
      h2b: "No middlemen.",
      steps: [
        { num: "01", title: "WhatsApp Kamesh", desc: "Send a message. He'll ask about your business, your customers, and what you need. 10 minutes, in Hindi or English. No sales pitch." },
        { num: "02", title: "Pay 50%, we start", desc: "Lock your slot with 50% via Razorpay or UPI. We start the build the same day. You get progress updates every few days on WhatsApp." },
        { num: "03", title: "Site goes live", desc: "7 to 14 days depending on tier. You see it before launch, not after. Pay the remaining 50% on delivery. Site is yours forever." },
      ],
    },
    team: {
      eyebrow: "The Team",
      h2a: "Built by JDLO.",
      h2b: "Run in India by Kamesh.",
      jpRole: "JDLO · Founder",
      jpName: "JP — Builder",
      jpDesc: "Builds the entire system. 30+ projects shipped. Clients in the US, Vegas, Hawaii, and now India. Every site is built personally — no outsourcing, no templates, no agency fluff.",
      jpLink: "See the work →",
      kameshRole: "JDLO India · Director",
      kameshName: "Kamesh Malhotra — Your Point of Contact",
      kameshDesc: "Based in India. Speaks your language. Handles every conversation from first WhatsApp message to launch day. Knows the Indian market inside out — what works, what doesn't, and what you can actually charge.",
      kameshCta: "Message Kamesh",
    },
    faq: {
      eyebrow: "FAQ",
      h2: "What people ask.",
      items: [
        { q: "Why ₹85,000 when I can get a website for ₹10,000?", a: "Because that ₹10,000 site is a Wix template that breaks in 6 months and makes you look like every other small business. We build custom — your branding, your offer, your customer flow. Razorpay, WhatsApp, Instagram sync, lead inbox, all integrated. It's not a website, it's a system." },
        { q: "How do payments work? Razorpay or international?", a: "All payments to us go through Razorpay or UPI in INR. No need for international banking, no currency conversion headaches. Kamesh handles all collection. You pay in rupees like any other Indian business." },
        { q: "Can I pay in EMI?", a: "Yes. Razorpay supports no-cost EMI on most credit cards (3-12 months). For Studio and Brand tiers we also offer a 50/50 plan — half upfront to start, half on delivery." },
        { q: "Will the site be in Hindi or English?", a: "Whichever you want. Most of our clients do bilingual — English for credibility, Hindi for warmth. We can also do regional languages (Tamil, Telugu, Marathi, etc.) on the Brand tier." },
        { q: "Do I own everything you build?", a: "Yes. Source code, domain, customer data, all of it. Nothing locked behind our account. If you want to leave us after launch, you keep the entire system. We just won't be there to fix things when they break." },
        { q: "What if I just need a simple WhatsApp catalog?", a: "Then go with Starter — that's exactly what it's for. WhatsApp catalog, basic site, payments. Live in 7 days for ₹85K. Most fashion D2C brands start here." },
        { q: "Can you handle SEO for India?", a: "Basic SEO is included in every tier — Google My Business setup, meta tags, sitemap. Deep SEO (content, backlinks, ranking work) is a separate engagement we can scope after launch." },
      ],
    },
    finalCta: {
      eyebrow: "Ready to start",
      h2a: "One WhatsApp message.",
      h2b: "That's how it starts.",
      desc: "Tell Kamesh about your business. He'll tell you straight if we can help, what tier fits, and how fast we can ship. No sales call, no pitch deck.",
      ctaPrimary: "WhatsApp Kamesh Now",
      ctaSecondary: "See JDLO on Instagram",
      note: "Kamesh responds within 2 hours · 9am–11pm IST",
    },
  },
  hi: {
    hero: {
      eyebrow: "JDLO India · वेबसाइट्स + सिस्टम्स",
      h1a: "आपका बिज़नेस WhatsApp पर चलता है।",
      h1b: "वेबसाइट भी वैसी होनी चाहिए।",
      desc: "हम भारतीय व्यवसायों के लिए वेबसाइट और सिस्टम बनाते हैं — फैशन ब्रांड्स, वेडिंग फोटोग्राफर, कोच। WhatsApp-first। Razorpay built-in। केवल दो हफ्तों में लाइव।",
      ctaPrimary: "WhatsApp Kamesh",
      ctaSecondary: "प्राइसिंग देखें",
    },
    problem: {
      eyebrow: "समस्या",
      h2a: "आपका काम बेहतरीन है।",
      h2b: "लेकिन ऑनलाइन आप जितने हैं, उससे छोटे दिखते हैं।",
      symptoms: [
        "ग्राहक वेबसाइट का लिंक माँगते हैं। आप अपना Insta भेज देते हैं।",
        "WhatsApp में ऑर्डर्स का ढेर लग जाता है। आधे चैट में खो जाते हैं।",
        "आप उतना ही चार्ज कर रहे हैं जितना बिना पोर्टफोलियो साइट वाला कोई भी।",
        "बड़े ब्रांड्स आपके ग्राहक ले जा रहे हैं क्योंकि वो ज़्यादा प्रोफेशनल दिखते हैं।",
        "रोज़ घंटों समय निकल जाता है वही 5 सवालों के जवाब देने में।",
      ],
    },
    niches: {
      eyebrow: "हम किसके लिए बनाते हैं",
      h2: "तीन तरह के व्यवसाय।",
      sub: "हम कोई आम वेब शॉप नहीं हैं। हम उन व्यवसायों के लिए बनाते हैं जिन्हें हमने भारत में तेज़ी से बढ़ते देखा है। अगर आप इनमें से एक हैं, तो हमें पहले से पता है आपको क्या चाहिए।",
      items: [
        {
          num: "01",
          title: "फैशन और D2C ब्रांड्स",
          sub: "WhatsApp + Insta पर बिक्री",
          desc: "एक साफ कैटलॉग साइट जो आपके Instagram से पुल करती है, ग्राहकों को बिना DM किए ब्राउज़ करने देती है, और Razorpay से चेकआउट या सीधे WhatsApp पर ले जाती है। जैसा ब्रांड आप वाकई हैं, वैसे दिखें।",
        },
        {
          num: "02",
          title: "वेडिंग फोटोग्राफर और प्लानर्स",
          sub: "प्रीमियम क्लाइंट्स के लिए प्रीमियम पोर्टफोलियो",
          desc: "एक पोर्टफोलियो साइट जो परिवारों से बिना मोलभाव के पूरा रेट दिलवाती है। गैलरीज़, पैकेजेज़, इन्क्वायरी फॉर्म, WhatsApp बुकिंग। ऐसी साइट जो चाय पर शेयर होती है और शादियाँ बुक करवाती है।",
        },
        {
          num: "03",
          title: "कोच और शिक्षक",
          sub: "IELTS, फिटनेस, बिज़नेस, डांस",
          desc: "एक लैंडिंग पेज + कोर्स चेकआउट जो आपके लिए बिक्री करता है। Razorpay सब्सक्रिप्शन्स, EMI ऑप्शन, ऑटोमेटेड WhatsApp फॉलो-अप। पेमेंट्स के पीछे भागना बंद — सिस्टम करेगा यह काम।",
        },
      ],
    },
    deliverables: {
      eyebrow: "आपको क्या मिलेगा",
      h2a: "6 चीज़ें।",
      h2b: "एक सिस्टम।",
      items: [
        { label: "कस्टम वेबसाइट", desc: "आपके बिज़नेस के लिए बनाई गई, टेम्पलेट नहीं। मोबाइल-फर्स्ट क्योंकि आपके ग्राहक वहीं हैं।" },
        { label: "Razorpay + UPI चेकआउट", desc: "भारत के किसी भी कोने से पेमेंट्स ले सकते हैं। कार्ड्स, UPI, नेट बैंकिंग, EMI — सब बिल्ट इन।" },
        { label: "WhatsApp इंटीग्रेशन", desc: "हर पेज पर one-tap WhatsApp बटन। ऑटो-रिप्लाइज़, ऑर्डर फॉर्म्स, कस्टमर चैट — आपके तरीके से।" },
        { label: "Instagram कैटलॉग सिंक", desc: "आपके लेटेस्ट पोस्ट्स और प्रोडक्ट्स साइट पर ऑटो-पुल हो जाते हैं। Insta अपडेट करें, साइट भी अपडेट होगी।" },
        { label: "लीड इनबॉक्स + डैशबोर्ड", desc: "हर इन्क्वायरी, ऑर्डर, बुकिंग एक जगह। Searchable। WhatsApp में ग्राहक कभी नहीं खोएगा।" },
        { label: "हिंदी या अंग्रेज़ी (या दोनों)", desc: "आपके दर्शकों के लिए बनाई। हिंदी, अंग्रेज़ी, या द्विभाषी — आपकी मर्ज़ी। भाषा का काम Kamesh संभालता है।" },
      ],
    },
    proof: {
      eyebrow: "Receipts",
      h2a: "यह काम पहले भी किया है।",
      h2b: "असली व्यवसायों के लिए, असली नंबर्स के साथ।",
      sub: "30+ प्रोजेक्ट्स शिप किए — फैशन ब्रांड्स, सर्विस बिज़नेस, ई-कॉमर्स स्टोर्स, AI टूल्स। किसी भी प्रोजेक्ट पर क्लिक करके पूरी केस स्टडी देखें।",
      items: PROOF_ITEMS,
      seeAll: "सभी 30+ प्रोजेक्ट्स देखें",
      caseStudy: "केस स्टडी देखें →",
    },
    pricing: {
      eyebrow: "प्राइसिंग",
      h2a: "पाँच टियर्स।",
      h2b: "क्विक स्टार्ट से लेकर फुल प्रीमियम तक।",
      sub: "सभी कीमतें INR में। पेमेंट प्लान्स उपलब्ध — 50% शुरू में, 50% डिलीवरी पर। Razorpay से EMI ऑप्शन। कोई छुपी फीस नहीं, कोई सरप्राइज़ बिल नहीं।",
      mostPopular: "सबसे लोकप्रिय",
      tiers: [
        {
          name: "Express",
          inr: "₹15,000",
          usd: "≈ $180",
          sub: "एक-बार",
          desc: "सिंगल-पेज साइट, WhatsApp + UPI इंटीग्रेशन, मोबाइल-फर्स्ट। 5 दिनों में लाइव।",
          fit: "Best for: ऑनलाइन शुरू करने वाली दुकानें, डिजिटल बिज़नेस कार्ड चाहिए",
          monthly: "+ ₹2,000/mo होस्टिंग",
          cta: "Kamesh से बात करें",
        },
        {
          name: "Growth",
          inr: "₹35,000",
          usd: "≈ $420",
          sub: "एक-बार",
          desc: "मल्टी-पेज साइट, Razorpay + Instagram सिंक, लीड इनबॉक्स। 10 दिनों में लाइव।",
          fit: "Best for: छोटे D2C ब्रांड्स जो ऑनलाइन ऑर्डर्स लेने को तैयार हैं",
          monthly: "+ ₹3,000/mo होस्टिंग एवं केयर",
          cta: "Kamesh से बात करें",
        },
        {
          name: "Starter",
          inr: "₹85,000",
          usd: "≈ $1,000",
          sub: "एक-बार",
          desc: "कस्टम-डिज़ाइन्ड साइट (टेम्पलेट नहीं), पूरा Razorpay फ्लो, लीड कैप्चर। 14 दिनों में लाइव।",
          fit: "Best for: ब्रांड्स जिन्हें कस्टम डिज़ाइन और अपनी पहचान चाहिए",
          monthly: "+ ₹4,000/mo होस्टिंग एवं केयर",
          cta: "Kamesh से बात करें",
        },
        {
          name: "Studio",
          inr: "₹2,50,000",
          usd: "≈ $3,000",
          sub: "एक-बार",
          desc: "मल्टी-पेज साइट, फुल कैटलॉग, लीड इनबॉक्स, Instagram सिंक, ऑटोमेटेड WhatsApp फॉलो-अप। 14 दिनों में लाइव।",
          fit: "Best for: स्थापित फैशन ब्रांड्स, वेडिंग स्टूडियो, कोचिंग बिज़नेस",
          monthly: "+ ₹8,000/mo होस्टिंग एवं केयर",
          cta: "Kamesh से बात करें",
          featured: true,
        },
        {
          name: "Brand",
          inr: "₹5,00,000",
          usd: "≈ $6,000",
          sub: "एक-बार",
          desc: "Studio का सब कुछ + कस्टम फीचर्स, AI फॉलो-अप एजेंट, मल्टी-लैंग्वेज (हिंदी + अंग्रेज़ी), प्रायोरिटी सपोर्ट।",
          fit: "Best for: ₹10L+/mo करने वाले ब्रांड्स जो उसी लेवल का दिखना चाहते हैं",
          monthly: "+ ₹15,000/mo होस्टिंग एवं केयर",
          cta: "Kamesh से बात करें",
        },
      ],
      note: "पता नहीं कौन सा टियर? WhatsApp Kamesh — वो आपसे 5 सवाल पूछेगा और सीधा बता देगा कौन सा फिट है।",
    },
    process: {
      eyebrow: "यह कैसे काम करता है",
      h2a: "तीन कदम।",
      h2b: "बीच में कोई नहीं।",
      steps: [
        { num: "01", title: "WhatsApp Kamesh", desc: "एक मैसेज भेजें। वो आपके बिज़नेस, ग्राहक, और ज़रूरतों के बारे में पूछेगा। 10 मिनट, हिंदी या अंग्रेज़ी में। कोई सेल्स पिच नहीं।" },
        { num: "02", title: "50% पे करें, हम शुरू करते हैं", desc: "Razorpay या UPI से 50% देकर अपना स्लॉट लॉक करें। हम उसी दिन बिल्ड शुरू करते हैं। हर कुछ दिनों में WhatsApp पर प्रोग्रेस अपडेट्स मिलते हैं।" },
        { num: "03", title: "साइट लाइव हो जाती है", desc: "टियर के हिसाब से 7 से 14 दिन। लॉन्च से पहले आप साइट देखते हैं, बाद में नहीं। डिलीवरी पर बाकी 50% पे करें। साइट हमेशा के लिए आपकी।" },
      ],
    },
    team: {
      eyebrow: "टीम",
      h2a: "JDLO ने बनाई।",
      h2b: "Kamesh ने भारत में चलाई।",
      jpRole: "JDLO · संस्थापक",
      jpName: "JP — बिल्डर",
      jpDesc: "पूरा सिस्टम खुद बनाता है। 30+ प्रोजेक्ट्स शिप किए। US, Vegas, Hawaii के क्लाइंट्स, अब भारत भी। हर साइट खुद बिल्ड करता है — कोई आउटसोर्सिंग नहीं, कोई टेम्पलेट्स नहीं, कोई एजेंसी ड्रामा नहीं।",
      jpLink: "काम देखें →",
      kameshRole: "JDLO India · डायरेक्टर",
      kameshName: "Kamesh Malhotra — आपका पॉइंट ऑफ कॉन्टैक्ट",
      kameshDesc: "भारत में रहते हैं। आपकी भाषा बोलते हैं। पहले WhatsApp मैसेज से लेकर लॉन्च डे तक हर बातचीत संभालते हैं। भारतीय बाज़ार को अंदर तक जानते हैं — क्या काम करता है, क्या नहीं, और आप वाकई कितना चार्ज कर सकते हैं।",
      kameshCta: "Kamesh को मैसेज करें",
    },
    faq: {
      eyebrow: "FAQ",
      h2: "लोग क्या पूछते हैं।",
      items: [
        { q: "₹85,000 क्यों जब ₹10,000 में वेबसाइट मिल जाती है?", a: "क्योंकि वो ₹10,000 की साइट Wix टेम्पलेट है जो 6 महीने में टूट जाती है और आपको हर दूसरे small business जैसा दिखाती है। हम कस्टम बनाते हैं — आपकी ब्रांडिंग, आपका ऑफर, आपका ग्राहक फ्लो। Razorpay, WhatsApp, Instagram सिंक, लीड इनबॉक्स, सब इंटीग्रेटेड। यह वेबसाइट नहीं, सिस्टम है।" },
        { q: "पेमेंट्स कैसे काम करते हैं? Razorpay या इंटरनेशनल?", a: "हमें सारे पेमेंट्स Razorpay या UPI से INR में आते हैं। इंटरनेशनल बैंकिंग की ज़रूरत नहीं, करेंसी कन्वर्ज़न का टेंशन नहीं। Kamesh सब कलेक्शन संभालता है। आप रुपयों में पे करते हैं, जैसे कोई भी भारतीय बिज़नेस।" },
        { q: "EMI में पे कर सकता हूँ?", a: "हाँ। Razorpay ज़्यादातर क्रेडिट कार्ड्स पर no-cost EMI सपोर्ट करता है (3-12 महीने)। Studio और Brand टियर्स के लिए 50/50 प्लान भी है — आधा शुरू में, आधा डिलीवरी पर।" },
        { q: "साइट हिंदी में होगी या अंग्रेज़ी?", a: "आपकी मर्ज़ी। ज़्यादातर क्लाइंट्स bilingual करते हैं — credibility के लिए अंग्रेज़ी, warmth के लिए हिंदी। Brand टियर में regional languages भी (तमिल, तेलुगू, मराठी, etc.)।" },
        { q: "जो आप बनाते हैं वो सब मेरा होता है?", a: "हाँ। सोर्स कोड, डोमेन, ग्राहक डेटा, सब। हमारे अकाउंट के पीछे कुछ लॉक नहीं। लॉन्च के बाद अगर आप छोड़ कर जाना चाहें, पूरा सिस्टम आपका रहेगा। बस हम नहीं होंगे फिक्स करने के लिए जब कुछ टूटे।" },
        { q: "मुझे सिर्फ simple WhatsApp catalog चाहिए?", a: "तो Starter ले लें — इसी के लिए बनाया है। WhatsApp catalog, basic साइट, payments। ₹85K में 7 दिनों में लाइव। ज़्यादातर fashion D2C ब्रांड्स यहीं से शुरू करते हैं।" },
        { q: "भारत के लिए SEO संभाल सकते हैं?", a: "हर टियर में बेसिक SEO शामिल — Google My Business सेटअप, मेटा टैग्स, साइटमैप। डीप SEO (content, backlinks, ranking work) अलग एंगेजमेंट है जो लॉन्च के बाद scope कर सकते हैं।" },
      ],
    },
    finalCta: {
      eyebrow: "शुरू करने के लिए तैयार",
      h2a: "एक WhatsApp मैसेज।",
      h2b: "बस वहीं से शुरू होता है।",
      desc: "Kamesh को अपने बिज़नेस के बारे में बताएँ। वो सीधा बता देगा कि हम मदद कर सकते हैं या नहीं, कौन सा टियर फिट है, और कितनी जल्दी ship कर सकते हैं। कोई सेल्स कॉल नहीं, कोई pitch deck नहीं।",
      ctaPrimary: "अभी WhatsApp Kamesh",
      ctaSecondary: "JDLO को Instagram पर देखें",
      note: "Kamesh 2 घंटों में रिप्लाई करता है · 9am–11pm IST",
    },
  },
};

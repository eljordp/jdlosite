import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { analytics } = await req.json();

    // Try Groq first, then OpenAI
    const groqKey = process.env.GROQ_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!groqKey && !openaiKey) {
      return NextResponse.json(
        { insight: "No AI key configured. Add GROQ_API_KEY or OPENAI_API_KEY to .env.local" },
        { status: 200 }
      );
    }

    const prompt = `You are a conversion rate optimization expert analyzing a freelancer's portfolio website (jdlo.site). Here's the current data:

Total leads: ${analytics?.totalLeads || 0}
Today: ${analytics?.todayLeads || 0}
This week: ${analytics?.weekLeads || 0}
Lead types: ${JSON.stringify(analytics?.byType || {})}
Recent leads: ${analytics?.recentLeads?.length || 0}

The site sells: websites ($497-$3.5K), apps & AI systems ($1K-$5K+), creative/custom projects ($2K-$25K+). Traffic comes from Instagram, referrals, and cold outreach.

Give 3-5 specific, actionable recommendations to get more leads. Be direct, no fluff. Focus on what to change on the site or in the funnel. If there are no leads yet, focus on what to do to get the first ones.`;

    let insight = "";

    if (groqKey) {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${groqKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      insight = data.choices?.[0]?.message?.content || "Failed to get response from Groq.";
    } else if (openaiKey) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      insight = data.choices?.[0]?.message?.content || "Failed to get response from OpenAI.";
    }

    return NextResponse.json({ insight });
  } catch {
    return NextResponse.json({ insight: "AI analysis failed. Check your API key." }, { status: 200 });
  }
}

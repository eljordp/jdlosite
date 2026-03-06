import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const rateMap = new Map<string, { count: number; reset: number }>();
const LIMIT = 10;
const WINDOW = 60_000;

export async function middleware(req: NextRequest) {
  // Rate limit API routes
  if (req.nextUrl.pathname.startsWith("/api/")) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const now = Date.now();

    const entry = rateMap.get(ip);
    if (!entry || now > entry.reset) {
      rateMap.set(ip, { count: 1, reset: now + WINDOW });
    } else if (entry.count >= LIMIT) {
      return new NextResponse("Too Many Requests", { status: 429 });
    } else {
      entry.count++;
    }
  }

  // Refresh Supabase auth session
  return await updateSession(req);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

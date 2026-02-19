import { NextRequest, NextResponse } from 'next/server';

const rateMap = new Map<string, { count: number; reset: number }>();

const LIMIT = 10;
const WINDOW = 60_000; // 1 minute

export function middleware(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const now = Date.now();

  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW });
    return NextResponse.next();
  }

  if (entry.count >= LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  entry.count++;
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};

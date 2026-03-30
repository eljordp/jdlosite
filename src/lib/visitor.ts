// Save/read visitor data to localStorage for personalization

const KEY = "jdlo_visitor";

interface VisitorData {
  industry?: string;
  needs?: string[];
  email?: string;
  name?: string;
  firstVisit?: string;
  lastVisit?: string;
  pagesViewed?: string[];
}

export function getVisitor(): VisitorData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveVisitor(data: Partial<VisitorData>) {
  if (typeof window === "undefined") return;
  try {
    const current = getVisitor();
    const updated = {
      ...current,
      ...data,
      lastVisit: new Date().toISOString(),
      firstVisit: current.firstVisit || new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(updated));
  } catch {
    // localStorage not available
  }
}

export function trackPage(path: string) {
  if (typeof window === "undefined") return;
  try {
    const current = getVisitor();
    const pages = current.pagesViewed || [];
    if (!pages.includes(path)) {
      pages.push(path);
    }
    saveVisitor({ pagesViewed: pages });
  } catch {
    // silently fail
  }
}

// Default slider values based on industry
export function getIndustryDefaults(industry: string) {
  const defaults: Record<string, Record<string, number>> = {
    Restaurant: { callsPerDay: 40, missRate: 35, customerValue: 75, manualHours: 15, bookingsPerWeek: 30 },
    Retail: { callsPerDay: 15, missRate: 20, customerValue: 150, manualHours: 20, bookingsPerWeek: 10 },
    "E-commerce": { callsPerDay: 5, missRate: 10, customerValue: 50, manualHours: 30, bookingsPerWeek: 5 },
    "Real Estate": { callsPerDay: 25, missRate: 40, customerValue: 5000, manualHours: 25, bookingsPerWeek: 15 },
    Agency: { callsPerDay: 10, missRate: 25, customerValue: 3000, manualHours: 35, bookingsPerWeek: 8 },
    "Service Business": { callsPerDay: 30, missRate: 30, customerValue: 200, manualHours: 20, bookingsPerWeek: 25 },
    Entertainment: { callsPerDay: 20, missRate: 25, customerValue: 100, manualHours: 15, bookingsPerWeek: 40 },
    Other: { callsPerDay: 20, missRate: 30, customerValue: 200, manualHours: 25, bookingsPerWeek: 15 },
  };
  return defaults[industry] || defaults.Other;
}

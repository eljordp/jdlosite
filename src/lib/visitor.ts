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
    // Food & Drink
    Restaurant: { callsPerDay: 40, missRate: 35, customerValue: 75, manualHours: 15, bookingsPerWeek: 30 },
    "Bar / Nightclub": { callsPerDay: 25, missRate: 30, customerValue: 50, manualHours: 10, bookingsPerWeek: 40 },
    "Food Truck": { callsPerDay: 15, missRate: 20, customerValue: 30, manualHours: 10, bookingsPerWeek: 15 },
    Catering: { callsPerDay: 10, missRate: 25, customerValue: 2000, manualHours: 20, bookingsPerWeek: 5 },
    Bakery: { callsPerDay: 20, missRate: 25, customerValue: 40, manualHours: 12, bookingsPerWeek: 20 },
    // Retail & E-commerce
    Retail: { callsPerDay: 15, missRate: 20, customerValue: 150, manualHours: 20, bookingsPerWeek: 10 },
    "E-commerce": { callsPerDay: 5, missRate: 10, customerValue: 50, manualHours: 30, bookingsPerWeek: 5 },
    "Clothing Brand": { callsPerDay: 5, missRate: 10, customerValue: 80, manualHours: 25, bookingsPerWeek: 3 },
    "Dropshipping": { callsPerDay: 3, missRate: 10, customerValue: 35, manualHours: 20, bookingsPerWeek: 2 },
    // Services
    "Service Business": { callsPerDay: 30, missRate: 30, customerValue: 200, manualHours: 20, bookingsPerWeek: 25 },
    Salon: { callsPerDay: 25, missRate: 35, customerValue: 80, manualHours: 10, bookingsPerWeek: 40 },
    "Barber Shop": { callsPerDay: 20, missRate: 30, customerValue: 40, manualHours: 8, bookingsPerWeek: 50 },
    "Auto Shop": { callsPerDay: 15, missRate: 25, customerValue: 500, manualHours: 15, bookingsPerWeek: 12 },
    "Cleaning Service": { callsPerDay: 20, missRate: 35, customerValue: 200, manualHours: 15, bookingsPerWeek: 20 },
    Landscaping: { callsPerDay: 15, missRate: 30, customerValue: 300, manualHours: 12, bookingsPerWeek: 15 },
    Plumbing: { callsPerDay: 25, missRate: 35, customerValue: 400, manualHours: 10, bookingsPerWeek: 15 },
    HVAC: { callsPerDay: 20, missRate: 30, customerValue: 500, manualHours: 12, bookingsPerWeek: 12 },
    "Appliance Repair": { callsPerDay: 20, missRate: 30, customerValue: 250, manualHours: 10, bookingsPerWeek: 15 },
    // Real Estate & Property
    "Real Estate": { callsPerDay: 25, missRate: 40, customerValue: 5000, manualHours: 25, bookingsPerWeek: 15 },
    "Property Management": { callsPerDay: 30, missRate: 25, customerValue: 1500, manualHours: 30, bookingsPerWeek: 10 },
    // Health & Wellness
    "Gym / Fitness": { callsPerDay: 15, missRate: 20, customerValue: 100, manualHours: 15, bookingsPerWeek: 30 },
    "Personal Trainer": { callsPerDay: 8, missRate: 20, customerValue: 200, manualHours: 10, bookingsPerWeek: 20 },
    "Med Spa": { callsPerDay: 20, missRate: 30, customerValue: 500, manualHours: 15, bookingsPerWeek: 20 },
    Chiropractor: { callsPerDay: 20, missRate: 25, customerValue: 150, manualHours: 12, bookingsPerWeek: 25 },
    Dentist: { callsPerDay: 30, missRate: 30, customerValue: 300, manualHours: 15, bookingsPerWeek: 20 },
    Therapist: { callsPerDay: 10, missRate: 20, customerValue: 200, manualHours: 8, bookingsPerWeek: 15 },
    // Professional Services
    Agency: { callsPerDay: 10, missRate: 25, customerValue: 3000, manualHours: 35, bookingsPerWeek: 8 },
    "Law Firm": { callsPerDay: 20, missRate: 35, customerValue: 5000, manualHours: 25, bookingsPerWeek: 10 },
    Accounting: { callsPerDay: 15, missRate: 20, customerValue: 2000, manualHours: 30, bookingsPerWeek: 8 },
    Consulting: { callsPerDay: 8, missRate: 20, customerValue: 5000, manualHours: 30, bookingsPerWeek: 5 },
    Insurance: { callsPerDay: 25, missRate: 30, customerValue: 1500, manualHours: 20, bookingsPerWeek: 10 },
    // Creative & Media
    Photography: { callsPerDay: 8, missRate: 25, customerValue: 1000, manualHours: 15, bookingsPerWeek: 5 },
    Videography: { callsPerDay: 5, missRate: 20, customerValue: 2000, manualHours: 15, bookingsPerWeek: 3 },
    "Music Producer": { callsPerDay: 5, missRate: 15, customerValue: 500, manualHours: 10, bookingsPerWeek: 5 },
    "Content Creator": { callsPerDay: 3, missRate: 10, customerValue: 200, manualHours: 20, bookingsPerWeek: 3 },
    "Tattoo Artist": { callsPerDay: 15, missRate: 30, customerValue: 300, manualHours: 8, bookingsPerWeek: 12 },
    // Cannabis
    Dispensary: { callsPerDay: 30, missRate: 20, customerValue: 60, manualHours: 15, bookingsPerWeek: 10 },
    "Cannabis Brand": { callsPerDay: 10, missRate: 15, customerValue: 100, manualHours: 20, bookingsPerWeek: 5 },
    // Entertainment & Events
    Entertainment: { callsPerDay: 20, missRate: 25, customerValue: 100, manualHours: 15, bookingsPerWeek: 40 },
    "Event Planner": { callsPerDay: 15, missRate: 25, customerValue: 3000, manualHours: 25, bookingsPerWeek: 5 },
    Promoter: { callsPerDay: 10, missRate: 20, customerValue: 50, manualHours: 10, bookingsPerWeek: 50 },
    // Construction & Trades
    Construction: { callsPerDay: 15, missRate: 30, customerValue: 10000, manualHours: 20, bookingsPerWeek: 5 },
    Roofing: { callsPerDay: 20, missRate: 35, customerValue: 5000, manualHours: 15, bookingsPerWeek: 8 },
    Electrician: { callsPerDay: 20, missRate: 30, customerValue: 400, manualHours: 10, bookingsPerWeek: 15 },
    // Other
    "Non-Profit": { callsPerDay: 10, missRate: 20, customerValue: 100, manualHours: 20, bookingsPerWeek: 5 },
    "Tech Startup": { callsPerDay: 10, missRate: 15, customerValue: 1000, manualHours: 40, bookingsPerWeek: 5 },
    Logistics: { callsPerDay: 30, missRate: 25, customerValue: 500, manualHours: 25, bookingsPerWeek: 10 },
    Automotive: { callsPerDay: 20, missRate: 25, customerValue: 800, manualHours: 15, bookingsPerWeek: 12 },
    Other: { callsPerDay: 20, missRate: 30, customerValue: 200, manualHours: 25, bookingsPerWeek: 15 },
  };
  return defaults[industry] || defaults.Other;
}

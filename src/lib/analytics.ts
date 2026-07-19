import { track } from "@vercel/analytics";
import posthog from "posthog-js";

export type AnalyticsProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function captureSiteEvent(name: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") return;

  track(name, properties);
  posthog.capture(name, properties);
  window.gtag?.("event", name, properties);
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureSiteEvent } from "@/lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 90];
const ENGAGEMENT_MILESTONES = [15, 45, 90];

function cleanLabel(value: string | null) {
  return (value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

function safeInternalPath(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? url.pathname : "external";
  } catch {
    return "unknown";
  }
}

function safeExternalHost(href: string) {
  try {
    return new URL(href, window.location.origin).hostname || "unknown";
  } catch {
    return "unknown";
  }
}

export default function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const reachedScroll = new Set<number>();
    const reachedEngagement = new Set<number>();
    let maxScroll = 0;
    let activeSeconds = 0;
    let formStarted = false;
    let summarySent = false;
    const viewedSections = new Set<string>();

    const properties = () => ({ page_path: pathname || "/" });

    const recordScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const depth = scrollable <= 0 ? 100 : Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      maxScroll = Math.max(maxScroll, depth);

      for (const milestone of SCROLL_MILESTONES) {
        if (depth >= milestone && !reachedScroll.has(milestone)) {
          reachedScroll.add(milestone);
          captureSiteEvent("scroll_depth_reached", { ...properties(), depth_percent: milestone });
        }
      }
    };

    const recordClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      const destinationPath = safeInternalPath(rawHref);
      const label = cleanLabel(anchor.textContent);
      const shared = {
        ...properties(),
        destination_path: destinationPath,
        link_label: label || "unlabeled",
      };

      if (destinationPath.startsWith("/work/") && destinationPath !== "/work/") {
        captureSiteEvent("case_study_opened", {
          ...shared,
          case_study: destinationPath.replace("/work/", ""),
        });
        return;
      }

      if (destinationPath.startsWith("/services/")) {
        captureSiteEvent("service_opened", {
          ...shared,
          service: destinationPath.replace("/services/", ""),
        });
        return;
      }

      if (destinationPath === "/contact" || rawHref.startsWith("mailto:") || rawHref.includes("instagram.com")) {
        const contactMethod = rawHref.startsWith("mailto:")
          ? "email"
          : rawHref.includes("instagram.com")
            ? "instagram"
            : "contact_form";
        captureSiteEvent("contact_intent", { ...shared, contact_method: contactMethod });
        return;
      }

      if (destinationPath === "external" && rawHref.startsWith("http")) {
        captureSiteEvent("outbound_clicked", {
          ...shared,
          destination_host: safeExternalHost(rawHref),
        });
      }
    };

    const recordFormStart = (event: FocusEvent) => {
      if (formStarted) return;
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
      if (!target.closest("form")) return;

      formStarted = true;
      captureSiteEvent("lead_form_started", properties());
    };

    const sendSummary = () => {
      if (summarySent) return;
      summarySent = true;
      captureSiteEvent("page_engagement_summary", {
        ...properties(),
        active_seconds: activeSeconds,
        max_scroll_percent: maxScroll,
      });
    };

    recordScroll();

    const sectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) continue;
        const section = (entry.target as HTMLElement).dataset.analyticsSection;
        if (!section || viewedSections.has(section)) continue;

        viewedSections.add(section);
        captureSiteEvent("section_viewed", {
          ...properties(),
          section,
        });
        sectionObserver.unobserve(entry.target);
      }
    }, { threshold: 0.4 });

    document.querySelectorAll<HTMLElement>("[data-analytics-section]").forEach((section) => {
      sectionObserver.observe(section);
    });

    document.addEventListener("click", recordClick);
    document.addEventListener("focusin", recordFormStart);
    window.addEventListener("scroll", recordScroll, { passive: true });
    window.addEventListener("pagehide", sendSummary);

    const engagementTimer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      activeSeconds += 1;

      for (const milestone of ENGAGEMENT_MILESTONES) {
        if (activeSeconds >= milestone && !reachedEngagement.has(milestone)) {
          reachedEngagement.add(milestone);
          captureSiteEvent("engaged_time_reached", {
            ...properties(),
            seconds: milestone,
          });
        }
      }
    }, 1000);

    return () => {
      sendSummary();
      sectionObserver.disconnect();
      window.clearInterval(engagementTimer);
      document.removeEventListener("click", recordClick);
      document.removeEventListener("focusin", recordFormStart);
      window.removeEventListener("scroll", recordScroll);
      window.removeEventListener("pagehide", sendSummary);
    };
  }, [pathname]);

  return null;
}

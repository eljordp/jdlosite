import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/operator", destination: "/services", permanent: true },
      { source: "/packages", destination: "/services", permanent: true },
      { source: "/services/apps-systems", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/apps-systems/ai-receptionist", destination: "/services/client-communication-systems", permanent: true },
      { source: "/services/apps-systems/booking-scheduling", destination: "/services/client-communication-systems", permanent: true },
      { source: "/services/apps-systems/automation-workflows", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/apps-systems/crm-pipeline", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/apps-systems/custom-dashboards", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/apps-systems/internal-tools", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/websites", destination: "/services/web-design-systems", permanent: true },
      { source: "/services/websites/website", destination: "/services/web-design-systems", permanent: true },
      { source: "/services/websites/e-commerce-store", destination: "/services/web-design-systems", permanent: true },
      { source: "/services/creative", destination: "/work", permanent: true },
      { source: "/services/creative/enterprise-tools", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/creative/custom-platforms", destination: "/services/business-operating-systems", permanent: true },
      { source: "/services/creative/interactive-experiences", destination: "/work", permanent: true },
      { source: "/services/creative/online-casinos", destination: "/work", permanent: true },
      { source: "/services/creative/video-games", destination: "/work", permanent: true },
      { source: "/work/world-class-exotics", destination: "/work", permanent: true },
      { source: "/work/pearl-farms", destination: "/work/pearls-farm", permanent: true },
    ];
  },
};

export default nextConfig;

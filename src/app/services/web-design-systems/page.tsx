import type { Metadata } from "next";
import RevenueServicePage from "@/components/RevenueServicePage";

export const metadata: Metadata = { title: "Web Design Systems for Revenue | JDLO", description: "Custom web design systems that connect SEO, lead capture, booking, e-commerce, follow-up, and analytics to help businesses create revenue.", alternates: { canonical: "/services/web-design-systems" } };

export default function WebDesignSystemsPage() {
  return <RevenueServicePage
    eyebrow="Service / Web design systems"
    title={<>A website should be part of the <span className="text-text-secondary">revenue process.</span></>}
    intro="I design and build the public system that helps the right people find you, understand the offer, trust the business, and take the next step."
    problems={["The business looks smaller online than it is in real life.", "Traffic lands, but there is no clear path to call, book, buy, or inquire.", "Service details and frequent questions live in the owner’s head.", "Nobody can tell which pages or channels produce leads."]}
    deliverables={[
      { title: "Positioning + information architecture", body: "A clear offer, audience path, page structure, and message hierarchy based on what the business actually sells." },
      { title: "Custom website + design system", body: "Responsive, fast, accessible pages with reusable components and a visual system the business can grow without redesigning from scratch." },
      { title: "Conversion paths", body: "Calls, forms, quotes, booking, checkout, and lead routing connected to the right next action." },
      { title: "Search + measurement foundation", body: "Technical SEO, structured data, sitemap, Google Search Console, GA4, Vercel Analytics, and meaningful conversion events." },
    ]}
    outcomes={["More qualified visitors take action.", "Customers understand the business before they call.", "The brand earns trust faster.", "New pages and offers can launch without breaking the system.", "Lead sources and conversion paths become measurable.", "The website supports sales instead of acting like a brochure."]}
    proof={[
      { name: "Vacaville Appliance", result: "Website and intake ecosystem supporting a real local service operation.", href: "/work/vacaville-appliance" },
      { name: "The Sticker Smith", result: "A clearer public sales channel and custom ordering path for a print business.", href: "/work/sticker-smith" },
      { name: "Pomaika‘i Co", result: "Growth and leadership paths for a consultancy with multiple offers.", href: "/work/pomaikai" },
    ]}
  />;
}

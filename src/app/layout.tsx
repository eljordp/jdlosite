import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";
import SiteAnalytics from "@/components/SiteAnalytics";
import PageTransition from "@/components/PageTransition";
import { PortalProvider } from "@/components/PortalTransition";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://jdlo.site"),
  title: "JDLO | Revenue Systems for Growing Businesses",
  description:
    "JDLO builds web design, client communication, and business operating systems that help businesses capture leads, save time, and create revenue.",
  authors: [{ name: "Jordan Lopez", url: "https://jdlo.site/about" }],
  creator: "Jordan Lopez",
  publisher: "JDLO",
  icons: {
    icon: "/jordan.jpg",
  },
  openGraph: {
    title: "JDLO | Revenue Systems for Growing Businesses",
    description:
      "Web design, client communication, and business operations connected around revenue.",
    url: "https://jdlo.site",
    siteName: "JDLO",
    images: [{ url: "https://jdlo.site/jordan.jpg", width: 1200, height: 1500, alt: "Jordan Lopez | JDLO" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDLO | Revenue Systems for Growing Businesses",
    description:
      "Web design, client communication, and business operations connected around revenue.",
    images: ["https://jdlo.site/jordan.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jdlo.site/#organization",
    name: "JDLO",
    url: "https://jdlo.site",
    email: "joo@meaship.com",
    description:
      "JDLO builds custom websites, design systems, CRM workflows, AI follow-up, booking, payments, dashboards, and internal business tools.",
    founder: {
      "@type": "Person",
      "@id": "https://jdlo.site/#jordan-lopez",
      name: "Jordan Lopez",
      url: "https://jdlo.site/about",
    },
    sameAs: ["https://instagram.com/jdlo"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}',{anonymize_ip:true});`}</Script>
          </>
        ) : null}
        <CustomCursor />
        <PostHogProvider>
          <PortalProvider>
            <PageTransition>{children}</PageTransition>
          </PortalProvider>
          <SiteAnalytics />
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

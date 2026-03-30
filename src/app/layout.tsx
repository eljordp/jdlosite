import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";
import PageTransition from "@/components/PageTransition";
import { PortalProvider } from "@/components/PortalTransition";

export const metadata: Metadata = {
  title: "JDLO — I Build Whatever You Need",
  description:
    "Websites, apps, AI systems, games, casinos, enterprise tools. If you can think it, I can build it. Jordan Lopez — operator, builder.",
  icons: {
    icon: "/jordan.jpg",
  },
  openGraph: {
    title: "JDLO — Websites, AI Systems & Sales Operations",
    description:
      "I build websites that convert, AI systems that replace manual work, and sales operations that close.",
    url: "https://jdlo.site",
    siteName: "JDLO",
    images: [{ url: "https://jdlo.site/jordan.jpg", width: 1200, height: 1500, alt: "Jordan Lopez — JDLO" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDLO — Websites, AI Systems & Sales Operations",
    description:
      "I build websites that convert, AI systems that replace manual work, and sales operations that close.",
    images: ["https://jdlo.site/jordan.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </head>
      <body className="font-sans antialiased">
        <PostHogProvider>
          <PortalProvider>
            <PageTransition>{children}</PageTransition>
          </PortalProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

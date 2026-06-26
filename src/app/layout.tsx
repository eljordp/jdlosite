import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";
import PageTransition from "@/components/PageTransition";
import { PortalProvider } from "@/components/PortalTransition";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "JDLO | The Operator Stack",
  description:
    "I install the Operator Stack for your business: custom website, CRM, AI follow-up, booking, payments, automation, and dashboard.",
  icons: {
    icon: "/jordan.jpg",
  },
  openGraph: {
    title: "JDLO | The Operator Stack",
    description:
      "Your business is bigger than your website makes it look. JDLO builds the website, CRM, AI follow-up, booking flow, payments, and dashboard.",
    url: "https://jdlo.site",
    siteName: "JDLO",
    images: [{ url: "https://jdlo.site/jordan.jpg", width: 1200, height: 1500, alt: "Jordan Lopez | JDLO" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDLO | The Operator Stack",
    description:
      "Your business is bigger than your website makes it look. JDLO builds the Operator Stack behind it.",
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
        <CustomCursor />
        <PostHogProvider>
          <PortalProvider>
            <PageTransition>{children}</PageTransition>
          </PortalProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

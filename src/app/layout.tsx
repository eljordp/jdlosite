import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";
import ReferralCapture from "@/components/ReferralCapture";

export const metadata: Metadata = {
  title: "JDLO — AI Education & Operations",
  description:
    "Learn AI, sales, automation, and operations from someone who actually runs on it. Courses and mentorship by Jordan Lopez.",
  icons: {
    icon: "/jordan.jpg",
  },
  openGraph: {
    title: "JDLO — AI Education & Operations",
    description:
      "Learn AI, sales, automation, and operations from someone who actually runs on it.",
    url: "https://jdlo.site",
    siteName: "JDLO",
    images: [{ url: "https://jdlo.site/jordan.jpg", width: 1200, height: 1500, alt: "Jordan Lopez — JDLO" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDLO — AI Education & Operations",
    description:
      "Learn AI, sales, automation, and operations from someone who actually runs on it.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <PostHogProvider>
          {children}
          <Suspense fallback={null}>
            <ReferralCapture />
          </Suspense>
        </PostHogProvider>
      </body>
    </html>
  );
}

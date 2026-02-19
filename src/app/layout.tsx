import type { Metadata } from "next";
import "./globals.css";
import JordiChat from "@/components/JordiChat";

export const metadata: Metadata = {
  title: "JDLO — AI Education & Operations",
  description:
    "Learn AI, sales, automation, and operations from someone who actually runs on it. Courses, mentorship, and consulting by Jordan Lopez.",
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
        {children}
        <JordiChat />
      </body>
    </html>
  );
}

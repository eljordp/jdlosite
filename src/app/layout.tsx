import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JDLO — AI Education & Mentorship",
  description:
    "AI courses, mentorship, and consulting. Built by Jordan Lopez.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

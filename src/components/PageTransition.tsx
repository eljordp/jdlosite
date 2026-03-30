"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { trackPage } from "@/lib/visitor";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    trackPage(pathname);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div
      className={`page-transition ${visible ? "page-visible" : ""}`}
    >
      {children}
    </div>
  );
}

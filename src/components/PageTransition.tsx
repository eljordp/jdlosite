"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPage } from "@/lib/visitor";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [state, setState] = useState<"entering" | "visible" | "exiting">("visible");
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current === pathname) {
      // Initial load
      setState("entering");
      trackPage(pathname);
      const t = setTimeout(() => setState("visible"), 50);
      return () => clearTimeout(t);
    }

    // Route change
    trackPage(pathname);
    setState("entering");
    const t = setTimeout(() => setState("visible"), 50);
    prevPathRef.current = pathname;
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className={`page-transition page-${state}`}>
      {children}
    </div>
  );
}

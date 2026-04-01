"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPage } from "@/lib/visitor";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [state, setState] = useState<"entering" | "visible" | "exiting">("visible");
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    trackPage(pathname);
    prevPathRef.current = pathname;
    // Force entering state, then flip to visible on next paint
    setState("entering");
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setState("visible");
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div className={`page-transition page-${state}`}>
      {children}
    </div>
  );
}

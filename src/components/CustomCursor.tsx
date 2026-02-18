"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = dot.current;
    if (!d) return;

    const onMove = (e: MouseEvent) => {
      d.style.left = `${e.clientX}px`;
      d.style.top = `${e.clientY}px`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role=button], .skill-row, details summary")) {
        d.style.transform = "translate(-50%, -50%) scale(2.5)";
      }
    };

    const onOut = () => {
      d.style.transform = "translate(-50%, -50%) scale(1)";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={dot} className="cursor-dot hidden md:block" />;
}

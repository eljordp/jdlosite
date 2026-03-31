"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "up",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : variantClass} ${delay ? `reveal-delay-${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function SplitText({
  children,
  className = "",
  delay = 0,
  staggerMs = 60,
}: {
  children: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLSpanElement>(".split-word").forEach((word) => {
            word.style.animationPlayState = "running";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <span ref={ref} className={`split-text ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word inline-block"
          style={{
            animationDelay: `${delay * 1000 + i * staggerMs}ms`,
            animationPlayState: "paused",
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

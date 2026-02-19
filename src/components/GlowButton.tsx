"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

function useGlow() {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--glow-x", `${x}px`);
    el.style.setProperty("--glow-y", `${y}px`);
    el.style.setProperty("--glow-opacity", "1");
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow-opacity", "0");
  };

  return { ref, onMouseMove, onMouseLeave };
}

export function GlowLink({ href, children, className = "", external }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useGlow();

  const cls = `magnetic-btn ${className}`;

  if (external) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      className={cls}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

export function GlowButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const { ref, onMouseMove, onMouseLeave } = useGlow();

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`magnetic-btn ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

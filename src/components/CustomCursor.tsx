"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (no touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("summary") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest(".magnetic-btn") ||
        target.closest(".ghost-btn") ||
        target.closest(".skill-row")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    // Hide default cursor
    document.documentElement.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "a,button,summary,input,textarea,select,[role='button'],.magnetic-btn,.ghost-btn,.skill-row{cursor:none!important}";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      document.documentElement.style.cursor = "";
      style.remove();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
      style={{
        transform: `translate(${pos.x - (hovering ? 6 : 4)}px, ${pos.y - (hovering ? 6 : 4)}px) scale(${clicking ? 0.6 : 1})`,
        transition: "transform 0.06s ease-out, width 0.2s ease, height 0.2s ease",
      }}
    >
      <div
        className="rounded-full bg-white"
        style={{
          width: hovering ? 12 : 8,
          height: hovering ? 12 : 8,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  );
}

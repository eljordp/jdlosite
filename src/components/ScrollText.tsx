'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  startColor?: string;
  endColor?: string;
  as?: 'p' | 'span' | 'div';
};

export default function ScrollText({
  children,
  className = '',
  startColor = '#555555',
  endColor = '#f5f5f5',
  as: tag = 'p',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // starts animating when bottom 20% of screen, completes at top 30%
      const start = vh * 0.95;
      const end = vh * 0.3;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  function lerp(a: number, b: number, t: number) {
    return Math.round(a + (b - a) * t);
  }

  function hexToRgb(hex: string) {
    const h = hex.replace('#', '');
    return [
      parseInt(h.substring(0, 2), 16),
      parseInt(h.substring(2, 4), 16),
      parseInt(h.substring(4, 6), 16),
    ];
  }

  const [r1, g1, b1] = hexToRgb(startColor);
  const [r2, g2, b2] = hexToRgb(endColor);
  const color = `rgb(${lerp(r1, r2, progress)}, ${lerp(g1, g2, progress)}, ${lerp(b1, b2, progress)})`;

  return React.createElement(
    tag,
    { ref, className, style: { color } },
    children
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  startColor?: string; // default: #555
  endColor?: string;   // default: #f5f5f5
  as?: 'p' | 'span' | 'div';
};

export default function ScrollText({
  children,
  className = '',
  startColor = '#555',
  endColor = '#f5f5f5',
  as: Tag = 'p',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start animating when element enters bottom 30% of viewport
      // Complete when it reaches 20% from top
      const start = vh * 0.9;
      const end = vh * 0.2;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Interpolate hex colors
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

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={className}
      style={{ color, transition: 'color 0.1s linear' }}
    >
      {children}
    </Component>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface Props {
  text: string;
  className?: string;
}

export default function ScrollHighlightText({ text, className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLSpanElement>('[data-word]');

    const update = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      // Start when element enters viewport, finish when top hits ~35% down
      const progress = Math.min(1, Math.max(0, (wh - rect.top) / (wh * 0.65)));
      const count = Math.round(progress * spans.length);
      spans.forEach((span, i) => {
        span.style.color = i < count ? 'var(--color-text)' : 'var(--color-text-muted)';
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <h2 ref={ref} className={className}>
      {text.split(' ').map((word, i, arr) => (
        <span
          key={i}
          data-word
          style={{ color: 'var(--color-text-muted)', transition: 'color 0.25s ease' }}
        >
          {word}{i < arr.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  );
}

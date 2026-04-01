'use client';

import { useRef, useEffect } from 'react';

const BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/';

const photos = [
  { src: '/photos/suit-lv.jpg', alt: 'Suit in front of Louis Vuitton, Vegas' },
  { src: `${BASE}4b6dbfd71_image.png`, alt: 'Palm Trees' },
  { src: '/jordan-2.jpg', alt: 'Jordan Lopez' },
  { src: `${BASE}f97897ac6_image.png`, alt: 'Squad Up' },
  { src: `${BASE}654292d81_image.png`, alt: 'Boat Trip' },
  { src: `${BASE}af179ee70_image.png`, alt: 'Lake Day' },
  { src: `${BASE}4bf5d8f06_image.png`, alt: 'Universal Studios' },
  { src: `${BASE}88f2f3f42_image.png`, alt: 'Night Moves' },
  { src: `${BASE}841333415_image.png`, alt: 'Best Friend' },
  { src: `${BASE}b9df2764b_image.png`, alt: 'Hood Up' },
  { src: `${BASE}39df25997_image.png`, alt: 'Vineyard Work' },
  { src: `${BASE}2ee8ddcb2_image.png`, alt: 'Throwback' },
  { src: `${BASE}d5f039ffb_image.png`, alt: 'Dino Attack' },
  { src: `${BASE}b2da56def_image.png`, alt: 'Costumes' },
  { src: `${BASE}75b63b68e_image.png`, alt: 'Store Run' },
  { src: `${BASE}070611cda_image.png`, alt: 'Car Vibes' },
  { src: `${BASE}fe27f9341_image.png`, alt: 'Money Moves' },
  { src: `${BASE}0ac9313e2_image.png`, alt: 'Mirror Check' },
  { src: `${BASE}18559c7bf_image.png`, alt: 'Corvette Dreams' },
  { src: `${BASE}e11b820b2_image.png`, alt: 'Little One' },
  { src: `${BASE}4ab726703_image.png`, alt: 'Farm Life' },
  { src: `${BASE}58acf053c_image.png`, alt: 'Theme Park Fun' },
  { src: `${BASE}7573a5d21_image.png`, alt: 'Young Raiders' },
  { src: `${BASE}0dbb6c337_image.png`, alt: 'Baseball Team' },
  { src: `${BASE}c2e173e43_image.png`, alt: 'Batman Vibes' },
  { src: `${BASE}e30d6783b_image.png`, alt: 'Peace Out' },
  { src: `${BASE}b0a3ac17a_image.png`, alt: 'Squad Goals' },
  { src: `${BASE}93d8ce6d4_image.png`, alt: 'Burberry Boys' },
  { src: `${BASE}33387654d_image.png`, alt: 'Shopping Spree' },
  { src: `${BASE}a478626d9_B299E392-B142-4CD5-BB5E-8AFEEFCBD14C.jpeg`, alt: 'Suited Up' },
  { src: `${BASE}d8a64add0_image.png`, alt: 'Graduation Day' },
  { src: `${BASE}acf11c96c_image.png`, alt: 'Kabob Spot' },
  { src: `${BASE}ea4ef8bc1_image.png`, alt: 'Diggin in my butt' },
];

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tick = () => {
      if (!isPausedRef.current && container) {
        container.scrollLeft += 0.6;
        const half = container.scrollWidth / 2;
        if (container.scrollLeft >= half) {
          container.scrollLeft -= half;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const startDrag = (x: number) => {
    isPausedRef.current = true;
    dragRef.current = {
      active: true,
      startX: x,
      scrollLeft: containerRef.current?.scrollLeft ?? 0,
    };
  };

  const moveDrag = (x: number) => {
    if (!dragRef.current.active || !containerRef.current) return;
    const dx = dragRef.current.startX - x;
    const half = containerRef.current.scrollWidth / 2;
    let next = dragRef.current.scrollLeft + dx;
    if (next >= half) next -= half;
    if (next < 0) next += half;
    containerRef.current.scrollLeft = next;
  };

  const endDrag = () => {
    dragRef.current.active = false;
    setTimeout(() => { isPausedRef.current = false; }, 1500);
  };

  return (
    <>
      <style>{`
        .photo-strip::-webkit-scrollbar { display: none; }
      `}</style>
      <div
        ref={containerRef}
        className="photo-strip flex gap-[5px] overflow-x-scroll select-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x' }}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; endDrag(); }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        {[...photos, ...photos].map((photo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            draggable={false}
            className="h-[220px] md:h-[300px] w-auto rounded-xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </>
  );
}

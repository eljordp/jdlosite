'use client';

import { useRef, useEffect, useState } from 'react';

const BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/';

const photos = [
  { src: '/photos/suit-lv.jpg', alt: 'Suit in front of Louis Vuitton, Vegas', story: 'First time in Vegas. Popped out in front of LV just because I could. No plans, just moved.' },
  { src: `${BASE}4b6dbfd71_image.png`, alt: 'Palm Trees', story: 'LA does something to you. Every time I pull up it feels like opportunity.' },
  { src: '/jordan-2.jpg', alt: 'Jordan Lopez', story: 'Late night somewhere new. Built a whole business in the time most people spend thinking about it.' },
  { src: `${BASE}f97897ac6_image.png`, alt: 'Squad Up', story: 'The circle is everything. These are the people who were there before the wins.' },
  { src: `${BASE}654292d81_image.png`, alt: 'Boat Trip', story: 'Didn\'t plan this trip. Said yes on a Tuesday and was on the water by the weekend.' },
  { src: `${BASE}af179ee70_image.png`, alt: 'Lake Day', story: 'Sometimes you just need a day where nothing matters except the water and who\'s around you.' },
  { src: `${BASE}4bf5d8f06_image.png`, alt: 'Universal Studios', story: 'Universal at night hits different. Built memories that night I still think about.' },
  { src: `${BASE}88f2f3f42_image.png`, alt: 'Night Moves', story: 'Some of the best conversations happen after midnight. No phones, no agenda, just real talk.' },
  { src: `${BASE}841333415_image.png`, alt: 'Best Friend', story: 'Ride or die. No explanation needed.' },
  { src: `${BASE}b9df2764b_image.png`, alt: 'Hood Up', story: 'In my bag. When the hood goes up, everything else goes quiet.' },
  { src: `${BASE}39df25997_image.png`, alt: 'Vineyard Work', story: 'Did a full harvest season at a vineyard. Woke up at 5 AM, worked until dark. Taught me more about patience than anything else.' },
  { src: `${BASE}2ee8ddcb2_image.png`, alt: 'Throwback', story: 'Look at that kid. He had no idea what was coming. Still turned out right.' },
  { src: `${BASE}d5f039ffb_image.png`, alt: 'Dino Attack', story: 'Got attacked by a dinosaur. Survived. Added it to the résumé.' },
  { src: `${BASE}b2da56def_image.png`, alt: 'Costumes', story: 'We go all out. Every time. No half-measures on the fit.' },
  { src: `${BASE}75b63b68e_image.png`, alt: 'Store Run', story: 'The store run that turned into a 3-hour hangout. Classic.' },
  { src: `${BASE}070611cda_image.png`, alt: 'Car Vibes', story: 'Some of my best thinking happens in the car. Music up, windows down, everything clicking.' },
  { src: `${BASE}fe27f9341_image.png`, alt: 'Money Moves', story: 'Every move is a money move when you\'re building something real.' },
  { src: `${BASE}0ac9313e2_image.png`, alt: 'Mirror Check', story: 'Before you walk out the door, you have to be sure about yourself. This is that moment.' },
  { src: `${BASE}18559c7bf_image.png`, alt: 'Corvette Dreams', story: 'Sat in one just to know what it felt like. Now it\'s on the list.' },
  { src: `${BASE}e11b820b2_image.png`, alt: 'Little One', story: 'Family first. Always.' },
  { src: `${BASE}4ab726703_image.png`, alt: 'Farm Life', story: 'Grew up doing this kind of work. Groundedness comes from knowing where you started.' },
  { src: `${BASE}58acf053c_image.png`, alt: 'Theme Park Fun', story: 'You\'re never too old to act like a kid at a theme park. That\'s just facts.' },
  { src: `${BASE}7573a5d21_image.png`, alt: 'Young Raiders', story: 'Raider Nation since day one. Couldn\'t tell us nothing back then.' },
  { src: `${BASE}0dbb6c337_image.png`, alt: 'Baseball Team', story: 'Team era. Didn\'t miss a game that season. That discipline carried over into everything else.' },
  { src: `${BASE}c2e173e43_image.png`, alt: 'Batman Vibes', story: 'Nobody knew who was under the mask. That was the point.' },
  { src: `${BASE}e30d6783b_image.png`, alt: 'Peace Out', story: 'Sometimes you just have to dip. Peace.' },
  { src: `${BASE}b0a3ac17a_image.png`, alt: 'Squad Goals', story: 'This is what I work for. Moments like this with people like these.' },
  { src: `${BASE}93d8ce6d4_image.png`, alt: 'Burberry Boys', story: 'We were dressed like that at an age where we had no business dressing like that. Good times.' },
  { src: `${BASE}33387654d_image.png`, alt: 'Shopping Spree', story: 'When you\'re buying for the vision, not just the moment.' },
  { src: `${BASE}a478626d9_B299E392-B142-4CD5-BB5E-8AFEEFCBD14C.jpeg`, alt: 'Suited Up', story: 'There\'s a version of you that shows up different when the suit goes on. I like that version.' },
  { src: `${BASE}d8a64add0_image.png`, alt: 'Graduation Day', story: 'Watched people I love walk across that stage. Proud doesn\'t cover it.' },
  { src: `${BASE}acf11c96c_image.png`, alt: 'Kabob Spot', story: 'Found a spot with the best kabobs and went back every chance I got. No notes.' },
  { src: `${BASE}ea4ef8bc1_image.png`, alt: 'Diggin in my butt', story: 'No context. Just vibes.' },
];

type Photo = typeof photos[number];

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const [modal, setModal] = useState<Photo | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tick = () => {
      if (!isPausedRef.current && container) {
        container.scrollLeft += 1.2;
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

  // Pause scroll when modal is open
  useEffect(() => {
    isPausedRef.current = !!modal;
  }, [modal]);

  const startDrag = (x: number) => {
    isPausedRef.current = true;
    dragRef.current = {
      active: true,
      startX: x,
      scrollLeft: containerRef.current?.scrollLeft ?? 0,
      moved: false,
    };
  };

  const moveDrag = (x: number) => {
    if (!dragRef.current.active || !containerRef.current) return;
    const dx = dragRef.current.startX - x;
    if (Math.abs(dx) > 5) dragRef.current.moved = true;
    const half = containerRef.current.scrollWidth / 2;
    let next = dragRef.current.scrollLeft + dx;
    if (next >= half) next -= half;
    if (next < 0) next += half;
    containerRef.current.scrollLeft = next;
  };

  const endDrag = (photo?: Photo) => {
    const wasDrag = dragRef.current.moved;
    dragRef.current.active = false;
    dragRef.current.moved = false;
    if (!wasDrag && photo) {
      setModal(photo);
    } else {
      setTimeout(() => { isPausedRef.current = false; }, 1500);
    }
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
        onMouseEnter={() => { if (!modal) isPausedRef.current = true; }}
        onMouseLeave={() => { if (!modal) { isPausedRef.current = false; dragRef.current.active = false; dragRef.current.moved = false; } }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      >
        {[...photos, ...photos].map((photo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            draggable={false}
            className="h-[220px] md:h-[300px] w-auto rounded-xl object-cover flex-shrink-0 transition-opacity hover:opacity-90"
            onMouseUp={() => endDrag(photos[i % photos.length])}
            onTouchEnd={() => endDrag(photos[i % photos.length])}
          />
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-bg border border-border rounded-2xl overflow-hidden w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={modal.src}
              alt={modal.alt}
              className="w-full max-h-[60vh] object-cover"
            />
            <div className="p-6">
              <p className="text-text-muted text-[11px] tracking-[0.4em] uppercase font-mono mb-3">
                {modal.alt}
              </p>
              <p className="text-text text-[16px] leading-relaxed">
                {modal.story}
              </p>
              <button
                onClick={() => setModal(null)}
                className="mt-6 text-text-muted text-[12px] font-mono tracking-widest uppercase hover:text-text transition-colors"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

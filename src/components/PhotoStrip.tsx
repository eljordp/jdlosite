'use client';

import { useRef, useEffect, useState } from 'react';

const BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69705b759c8dc226ae265997/';

const photos = [
  { src: '/photos/suit-lv.jpg', alt: 'Suit in front of Louis Vuitton, Vegas', story: 'Vegas with the Pomaika\'i team. Pulled up suited outside LV just to do it. Six months earlier I didn\'t have two pennies to rub together. this trip was proof that things were moving.' },
  { src: `${BASE}4b6dbfd71_image.png`, alt: 'Palm Trees', story: 'LA. Every time I pull up it feels different. like the city knows you\'re serious now. Palm trees hitting, energy right, something always about to happen.' },
  { src: '/jordan-2.jpg', alt: 'Jordan Lopez', story: 'Vegas, right after a UFC fight. Looking off into the distance thinking about how high the limit actually goes. That city does something to your ambition.' },
  { src: `${BASE}f97897ac6_image.png`, alt: 'Squad Up', story: 'Me and my bro with Icewear Vezzo. Detroit rapper, serious catalog, and he just happened to be right there. That\'s the thing about moving in the right circles. you stop being surprised when you\'re next to people like this.' },
  { src: `${BASE}654292d81_image.png`, alt: 'Boat Trip', story: 'Senior trip to Cancun with the homies from De La Salle and Carondelet. Turquoise water, whole boat crew, nothing but good energy. One of those trips that closes out a chapter of your life the right way.' },
  { src: `${BASE}af179ee70_image.png`, alt: 'Lake Day', story: 'Sometimes the best thing you can do for your business is take a full day off from it. Lake day, no phone, just the people around you. Came back locked in.' },
  { src: `${BASE}4bf5d8f06_image.png`, alt: 'Universal Studios', story: 'Universal at night is a different experience. This was one of those nights where everything felt right. good people, good energy, nobody rushing anywhere. Still think about it.' },
  { src: `${BASE}88f2f3f42_image.png`, alt: 'Night Moves', story: 'Me and bro at a party. I\'m literally eating cake in this photo. Sometimes a night out is just that. no deep meaning, just a good time with good people.' },
  { src: `${BASE}841333415_image.png`, alt: 'Best Friend', story: 'Just a flick with bro in Vegas. Good trip.' },
  { src: `${BASE}b9df2764b_image.png`, alt: 'Hood Up', story: 'Hood up means I\'m in my bag. Everything goes quiet. no distractions, no noise. Some of the best work I\'ve ever done started in this exact headspace.' },
  { src: `${BASE}39df25997_image.png`, alt: 'Vineyard Work', story: 'Spent a full harvest season working vineyards. Up at 5 AM, out in the fields until it was dark. No shortcuts, no excuses. just the work in front of you. That season rewired how I think about patience and execution.' },
  { src: `${BASE}2ee8ddcb2_image.png`, alt: 'Throwback', story: 'Look at that version of me. Had no idea what was coming. the jail, the reset, the grind, the wins. But even then something in me already knew it would work out. It always does.' },
  { src: `${BASE}d5f039ffb_image.png`, alt: 'Dino Attack', story: 'Kauai. This is literally the same island and the same location where they filmed Jurassic Park. Those mountains in the background. that\'s the actual set. Got attacked by a T-Rex on a film location and lived to tell it. Not many people can say that.' },
  { src: `${BASE}b2da56def_image.png`, alt: 'Costumes', story: 'We pulled up as Teletubbies. Full suits, belly screens, the whole thing. This is what happens when you let us pick our own Halloween costumes with no supervision. No regrets.' },
  { src: `${BASE}75b63b68e_image.png`, alt: 'Store Run', story: 'This was shot at the 7-Eleven I was working at right after I got out. Stocking shelves during the day, learning AI and building websites at night on my phone. Nobody around me knew I was studying how to build platforms. Six months later I had paying clients. It started here.' },
  { src: `${BASE}070611cda_image.png`, alt: 'Car Vibes', story: 'Me and the bros flexing on the M5 Competition. BMW M5 Comp. one of the nastiest sedans ever built. We had no business being that comfortable next to it.' },
  { src: `${BASE}fe27f9341_image.png`, alt: 'Money Moves', story: 'Just chilling with some cash I took out the bank from a regular job. Before all of this. Funny how far things have come from here.' },
  { src: `${BASE}0ac9313e2_image.png`, alt: 'Mirror Check', story: 'This is the moment before you walk out and commit to who you\'re becoming. Not the guy you were last year. the one you\'ve been building toward. This is that check.' },
  { src: `${BASE}18559c7bf_image.png`, alt: 'Corvette Dreams', story: 'The LARP vehicle. Every time I hit LA, this is what I\'m riding in. C8 Corvette, Shell station in the background, music already playing. It\'s not mine yet. but it feels like it every single time.' },
  { src: `${BASE}e11b820b2_image.png`, alt: 'Little One', story: 'Lil bro. That\'s it.' },
  { src: `${BASE}4ab726703_image.png`, alt: 'Farm Life', story: 'Laptop open on the tractor. Even when I was doing farm work all day I was still learning. studying AI, watching tutorials, building on the side. The environment didn\'t matter. I was going to figure it out no matter what.' },
  { src: `${BASE}58acf053c_image.png`, alt: 'Theme Park Fun', story: 'Met Brandon Crawford at Six Flags. I\'m the one on the right. that\'s me and my big brother Nick on the left. Nick put me onto everything I now know. Baseball, music, how to carry yourself, what to care about. He\'s gone now and not a day goes by. Miss you more than words. Love you bro.' },
  { src: `${BASE}7573a5d21_image.png`, alt: 'Young Raiders', story: 'Raider Nation from day one. Growing up with this on my chest meant something. it was the underdog identity before I even knew what that meant for my life. Couldn\'t tell us nothing back then.' },
  { src: `${BASE}0dbb6c337_image.png`, alt: 'Baseball Team', story: 'The team era taught me more about showing up than anything else. You don\'t miss a game, you don\'t skip practice, you don\'t let the people around you down. That mentality never left.' },
  { src: `${BASE}c2e173e43_image.png`, alt: 'Batman Vibes', story: 'Nobody knew who was under the mask. that was the whole point. There\'s something freeing about moving through a room where no one knows what you\'re actually building. Then you unmask.' },
  { src: `${BASE}e30d6783b_image.png`, alt: 'Peace Out', story: 'Dirty as hell after a full day of work. I was 16. No complaints, just clocked out and went home. That version of me worked harder than most grown men I know.' },
  { src: `${BASE}b0a3ac17a_image.png`, alt: 'Squad Goals', story: 'This is what it\'s all for. Not the money, not the clout. moments like this with people who genuinely rock with each other. You can\'t buy this kind of energy in a room.' },
  { src: `${BASE}93d8ce6d4_image.png`, alt: 'Burberry Boys', story: 'We were draped in Burberry at an age where we had absolutely no business wearing Burberry. I don\'t even want to know how that happened. Good times, no questions asked.' },
  { src: `${BASE}33387654d_image.png`, alt: 'Shopping Spree', story: 'When you\'re shopping for the next level of yourself, not just for today. Every piece means something. you\'re buying into the version of you that\'s already arrived.' },
  { src: `${BASE}a478626d9_B299E392-B142-4CD5-BB5E-8AFEEFCBD14C.jpeg`, alt: 'Suited Up', story: 'There\'s a different version of you that shows up when you put the suit on. More deliberate, more commanding. This is the version I\'m becoming permanently. suit optional.' },
  { src: `${BASE}d8a64add0_image.png`, alt: 'Graduation Day', story: 'My graduation from De La Salle, 2021. That school shaped me more than I realized at the time. Walking out of there I had no idea what was coming. but I was ready for it.' },
  { src: `${BASE}acf11c96c_image.png`, alt: 'Kabob Spot', story: 'First time out in LA after moving here. Ended up at Jonah\'s Kabob in North Hollywood. and the guy next to me was Jonah, from David Dobrik\'s crew. That same month I was riding in @dominykas Lambo Urus. LA is a small city when you move right. Everything connects fast out here.' },
  { src: `${BASE}ea4ef8bc1_image.png`, alt: 'Diggin in my butt', story: 'I genuinely have no story for this one. It is what it is. Moving on.' },
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
              className="w-full object-cover"
              style={{ height: '55vw', maxHeight: '60vh', minHeight: '200px' }}
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

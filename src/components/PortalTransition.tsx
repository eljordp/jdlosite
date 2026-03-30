'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Direction = 'to-academy' | 'to-services';
type State = 'idle' | 'covering' | 'uncovering';

type PortalCtx = {
  portal: (href: string, dir: Direction) => void;
};

const PortalContext = createContext<PortalCtx>({ portal: () => {} });

export function usePortal() {
  return useContext(PortalContext);
}

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<State>('idle');
  const [direction, setDirection] = useState<Direction>('to-academy');

  const portal = useCallback(
    (href: string, dir: Direction) => {
      if (state !== 'idle') return;
      setDirection(dir);
      setState('covering');

      // Push route mid-animation so page loads under the overlay
      const t1 = setTimeout(() => router.push(href), 420);
      // Switch to uncovering once cover is complete
      const t2 = setTimeout(() => setState('uncovering'), 580);
      // Done
      const t3 = setTimeout(() => setState('idle'), 1160);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    },
    [router, state]
  );

  return (
    <PortalContext.Provider value={{ portal }}>
      {children}
      {state !== 'idle' && (
        <div className={`portal-overlay portal-${state} portal-${direction}`}>
          {state === 'covering' && (
            <span className="portal-word">
              {direction === 'to-academy' ? 'Academy' : 'JDLO'}
            </span>
          )}
        </div>
      )}
    </PortalContext.Provider>
  );
}

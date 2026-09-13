"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const LocomotiveScrollContext = createContext(null);

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const [scrollInstance, setScrollInstance] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let instance = null;

    const init = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        instance = new LocomotiveScroll({
          lenisOptions: {
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
          },
        });
        scrollRef.current = instance;
        setScrollInstance(instance);
      } catch (err) {
        console.error("LocomotiveScroll initialization error:", err);
      }
    };

    init();

    return () => {
      if (instance) {
        instance.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  // Recalculate dimensions and scroll to top on route navigation
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.resize();
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <LocomotiveScrollContext.Provider value={scrollInstance}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

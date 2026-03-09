"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Delay in ms before animating (for stagger) */
  delay?: number;
  /** Root margin for intersection (e.g. "0px 0px -40px 0px" to trigger slightly early) */
  rootMargin?: string;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  rootMargin = "0px 0px -50px 0px",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (delay > 0) {
            timeoutId = setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay, rootMargin]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}
      style={delay > 0 && !visible ? { transitionDelay: "0ms" } : undefined}
    >
      {children}
    </div>
  );
}

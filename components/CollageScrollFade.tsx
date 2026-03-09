"use client";

import { useEffect, useState } from "react";

/** Wraps the hero collage so it fades out and falls back (slight scale + translate) as the user scrolls. */
export function CollageScrollFade({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [style, setStyle] = useState({ opacity: 1, transform: "translateY(0) scale(1)" });

  useEffect(() => {
    const range = typeof window !== "undefined" ? Math.min(window.innerHeight * 0.7, 500) : 400;

    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(1, y / range);
      const opacity = 1 - t;
      const scale = 1 - t * 0.08;
      const translateY = t * 24;
      setStyle({
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`will-change-[opacity,transform] transition-none ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

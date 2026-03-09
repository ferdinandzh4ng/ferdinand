"use client";

import Image from "next/image";
import { useState } from "react";

interface HomeCollageProps {
  images: string[];
}

// Explicit grid placement so all 9 cells pack with no empty spots (3 cols × 5 rows)
const placements: { gridColumn: string; gridRow: string }[] = [
  { gridColumn: "1 / 3", gridRow: "1 / 3" },   // 0: big top-left (2×2)
  { gridColumn: "3 / 4", gridRow: "1 / 2" },   // 1
  { gridColumn: "3 / 4", gridRow: "2 / 4" },   // 2: tall right (1×2)
  { gridColumn: "1 / 2", gridRow: "3 / 4" },   // 3
  { gridColumn: "2 / 3", gridRow: "3 / 4" },   // 4
  { gridColumn: "1 / 3", gridRow: "4 / 5" },   // 5: wide (2×1)
  { gridColumn: "3 / 4", gridRow: "4 / 6" },   // 6: tall (1×2)
  { gridColumn: "1 / 2", gridRow: "5 / 6" },   // 7
  { gridColumn: "2 / 3", gridRow: "5 / 6" },   // 8
];

function CollageCell({
  src,
  placement,
}: {
  src: string;
  placement: { gridColumn: string; gridRow: string };
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-sm border border-white/20 bg-zinc-700 min-h-0"
      style={{
        gridColumn: placement.gridColumn,
        gridRow: placement.gridRow,
      }}
    >
      {failed ? (
        <div className="absolute inset-0 bg-zinc-700" aria-hidden />
      ) : (
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 20vw"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function HomeCollage({ images }: HomeCollageProps) {
  return (
    <div
      className="grid h-full min-h-[320px] w-full max-w-md grid-cols-3 gap-2 sm:gap-3 lg:min-h-[calc(100vh-4rem)]"
      style={{ gridTemplateRows: "repeat(5, 1fr)" }}
    >
      {images.slice(0, 9).map((src, i) => (
        <CollageCell
          key={i}
          src={src}
          placement={placements[i] ?? { gridColumn: "span 1", gridRow: "span 1" }}
        />
      ))}
    </div>
  );
}

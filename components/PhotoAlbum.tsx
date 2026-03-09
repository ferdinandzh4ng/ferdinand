"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoAlbumProps {
  images: string[];
  /** Scrollable collage layout (for More page side panel) */
  scrollable?: boolean;
}

export function PhotoAlbum({ images, scrollable = false }: PhotoAlbumProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-zinc-400">
        No photos yet. Upload images to the <code className="rounded bg-white/10 px-1">album</code> folder in your Supabase bucket, or add URLs in <code className="rounded bg-white/10 px-1">content/album.ts</code>.
      </p>
    );
  }

  if (scrollable) {
    return (
      <>
        <div className="flex max-h-[calc(100vh-12rem)] flex-col gap-3 overflow-y-auto pr-2">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              <Image
                src={src}
                alt={`Album photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 rounded bg-white/10 px-3 py-1 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Close
            </button>
            <div
              className="relative max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`Album photo ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
        {images.map((src, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative block aspect-square w-full overflow-hidden rounded-lg border border-white/15 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              <Image
                src={src}
                alt={`Album photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </button>
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 rounded bg-white/10 px-3 py-1 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Close
          </button>
          <div
            className="relative max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`Album photo ${lightboxIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

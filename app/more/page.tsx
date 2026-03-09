import Image from "next/image";
import Link from "next/link";
import { RandomThoughts } from "@/components/RandomThoughts";
import { albumImages } from "@/content/album";
import { MORE_PAGE_IMAGE_URL, PROFILE_IMAGE_URL } from "@/content/profile";
import { randomThoughts } from "@/content/thoughts";
import { getAlbumImageUrls } from "@/lib/supabase-server";

export default async function MorePage() {
  const profileSrc = MORE_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL;
  const albumFromBucket = await getAlbumImageUrls("images", "album");
  const images = albumFromBucket.length > 0 ? albumFromBucket : albumImages;
  const previewImage = images[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="flex flex-col items-center text-center">
        <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full ring-4 ring-white/20 sm:w-[280px]">
          <Image
            src={profileSrc}
            alt="Ferdinand"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 192px, 280px"
            priority
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white">
          More about me
        </h1>
        <p className="mt-2 text-zinc-400">
          Photo album and random thoughts
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Left: single album preview linking to full album page */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white lg:mb-5">
            Photo album
          </h2>
          {previewImage ? (
            <Link
              href="/more/album"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/15 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              <Image
                src={previewImage}
                alt="View photo album"
                fill
                className="object-cover transition group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
                <span className="text-sm font-medium text-white drop-shadow">
                  View all {images.length} {images.length === 1 ? "photo" : "photos"} →
                </span>
              </div>
            </Link>
          ) : (
            <p className="text-zinc-400">
              No photos yet. Upload images to the{" "}
              <code className="rounded bg-white/10 px-1">album</code> folder in
              your Supabase bucket, or add URLs in{" "}
              <code className="rounded bg-white/10 px-1">content/album.ts</code>.
            </p>
          )}
        </div>

        {/* Right: thoughts in tweet format */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white lg:mb-5">
            Thoughts
          </h2>
          <RandomThoughts thoughts={randomThoughts} />
        </div>
      </section>
    </div>
  );
}

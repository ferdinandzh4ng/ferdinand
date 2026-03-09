import Link from "next/link";
import { PhotoAlbum } from "@/components/PhotoAlbum";
import { albumImages } from "@/content/album";
import { getAlbumImageUrls } from "@/lib/supabase-server";

export default async function AlbumPage() {
  const albumFromBucket = await getAlbumImageUrls("images", "album");
  const images = albumFromBucket.length > 0 ? albumFromBucket : albumImages;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/more"
          className="text-zinc-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
          aria-label="Back to More"
        >
          ← Back
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Photo album
          {images.length > 0 && (
            <span className="ml-2 text-lg font-normal text-zinc-400">
              ({images.length} {images.length === 1 ? "photo" : "photos"})
            </span>
          )}
        </h1>
      </div>

      <PhotoAlbum images={images} />
    </div>
  );
}

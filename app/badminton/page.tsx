import Image from "next/image";
import { VideoList } from "@/components/VideoList";
import { badmintonVideos } from "@/content/badminton";
import { BADMINTON_PAGE_IMAGE_URL, PROFILE_IMAGE_URL } from "@/content/profile";

export default function BadmintonPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Left: scrollable match / video links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white lg:mb-5">
            Matches & clips
          </h2>
          <VideoList videos={badmintonVideos} scrollable />
        </div>

        {/* Right: image as background with text over it, pushed right */}
        <div className="flex justify-end">
          <div className="relative min-h-[320px] w-full max-w-lg overflow-hidden rounded-2xl md:min-h-[400px]">
            <Image
              src={BADMINTON_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Badminton
              </h1>
              <p className="mt-2 max-w-sm text-zinc-200">
                Not playing anymore — I only coach from time to time. Clips and
                matches from the court.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

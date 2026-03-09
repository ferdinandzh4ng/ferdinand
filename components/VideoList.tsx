import type { BadmintonVideo } from "@/content/badminton";

interface VideoListProps {
  videos: BadmintonVideo[];
  /** Scrollable list layout (for Badminton page left column) */
  scrollable?: boolean;
}

export function VideoList({ videos, scrollable = false }: VideoListProps) {
  if (videos.length === 0) {
    return (
      <p className="text-zinc-400">
        No videos yet. Add links in <code className="rounded bg-white/10 px-1">content/badminton.ts</code>.
      </p>
    );
  }

  if (scrollable) {
    return (
      <div className="flex max-h-[calc(100vh-12rem)] flex-col gap-4 overflow-y-auto pr-2">
        {videos.map((video) => (
          <div
            key={video.id}
            className="shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/5"
          >
            <div className="aspect-video w-full bg-black">
              <iframe
                src={video.url}
                title={video.title ?? "Badminton clip"}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {video.title && (
              <p className="p-3 text-sm font-medium text-white">
                {video.title}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {videos.map((video) => (
        <li key={video.id} className="overflow-hidden rounded-xl border border-white/15 bg-white/5">
          <div className="aspect-video w-full bg-black">
            <iframe
              src={video.url}
              title={video.title ?? "Badminton clip"}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {video.title && (
            <p className="p-3 text-sm font-medium text-white">
              {video.title}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

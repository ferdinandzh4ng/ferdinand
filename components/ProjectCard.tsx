import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";

// Match URLs so we can render them as clickable links in descriptions
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function descriptionWithLinks(text: string) {
  const parts = text.split(URL_REGEX);
  return parts.map((part, i) =>
    part.startsWith("http://") || part.startsWith("https://") ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-300 underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529] rounded"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

interface ProjectCardProps {
  project: Project;
  /** When true, image is on the right (for alternating layout) */
  imageOnRight?: boolean;
}

export function ProjectCard({ project, imageOnRight = false }: ProjectCardProps) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-sm md:grid-cols-2 md:gap-0">
      <div
        className={`relative aspect-video w-full bg-zinc-800 md:aspect-auto md:min-h-[280px] ${
          imageOnRight ? "md:order-2" : ""
        }`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div
        className={`flex flex-col justify-center p-6 sm:p-8 ${
          imageOnRight ? "md:order-1" : ""
        }`}
      >
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {descriptionWithLinks(project.description)}
        </p>
        {project.demoVideoUrl && (
          <div className="mt-4 aspect-video w-full max-w-md overflow-hidden rounded-lg bg-black">
            <iframe
              src={project.demoVideoUrl}
              title={`${project.title} demo`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {project.projectUrl && (
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529] rounded"
          >
            View project
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}

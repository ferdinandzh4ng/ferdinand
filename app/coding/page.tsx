import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { CODING_PAGE_IMAGE_URL, PROFILE_IMAGE_URL } from "@/content/profile";

export default function CodingPage() {
  const heroSrc = CODING_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL;
  return (
    <div>
      {/* Full-bleed hero: image background for entire section, no card */}
      <section className="relative min-h-[70vh] w-full overflow-hidden sm:min-h-[75vh]">
        <Image
          src={heroSrc}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Coding
          </h1>
          <p className="mt-2 text-zinc-200">
            Full Stack developer — projects and demos
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 space-y-10 sm:space-y-14">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            imageOnRight={index % 2 === 1}
          />
        ))}
      </section>
    </div>
  );
}

import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionCard } from "@/components/SectionCard";
import { HomeCollage } from "@/components/HomeCollage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CollageScrollFade } from "@/components/CollageScrollFade";
import {
  homeBio,
  homeCollageImages,
  homeSectionCards,
} from "@/content/home";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Full-height hero: name/bio vertically centered, collage fills right */}
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row lg:items-stretch lg:gap-12 lg:px-6 lg:pt-10 lg:pb-0">
        <ScrollReveal className="flex min-w-0 flex-1 flex-col justify-center text-left">
          <h1 className="font-hero text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ferdinand
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
            {homeBio}
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resumeFerdinand.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              Resume
            </Link>
            <Link
              href="/coding"
              className="rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              Explore Work
            </Link>
            <Link
              href="/more"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#252529]"
            >
              More About Me
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} className="flex min-h-[320px] min-w-0 flex-1 justify-center lg:min-h-0 lg:min-w-[28rem] lg:justify-end">
          <CollageScrollFade className="h-full w-full min-w-0 lg:max-w-md">
            <HomeCollage images={homeCollageImages} />
          </CollageScrollFade>
        </ScrollReveal>
      </div>

      {/* Big section cards with image, title, short bio */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-20 sm:pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeSectionCards.map((card, i) => (
            <ScrollReveal key={card.href} delay={i * 80} className="h-full">
              <SectionCard card={card} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

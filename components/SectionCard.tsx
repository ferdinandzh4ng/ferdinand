import Link from "next/link";
import Image from "next/image";
import type { HomeSectionCard } from "@/content/home";

interface SectionCardProps {
  card: HomeSectionCard;
}

export function SectionCard({ card }: SectionCardProps) {
  return (
    <Link
      href={card.href}
      className="group block overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-sm transition-all hover:border-white/25 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
    >
      <div className="relative aspect-[16/9] w-full bg-zinc-800">
        <Image
          src={card.imageUrl}
          alt=""
          fill
          className={`object-cover transition-transform group-hover:scale-[1.02] ${
            card.imagePosition === "top"
              ? "object-top"
              : card.imagePosition === "top-offset"
                ? "object-[top_1%]"
                : "object-center"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {card.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {card.shortBio}
        </p>
      </div>
    </Link>
  );
}

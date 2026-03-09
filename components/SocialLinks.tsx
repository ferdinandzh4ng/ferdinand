import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconClass =
  "h-5 w-5 text-zinc-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529] rounded";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3" aria-label="Social links">
      <li>
        <Link
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      </li>
      <li>
        <Link
          href={SOCIAL_LINKS.x}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="X (Twitter)"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
      </li>
    </ul>
  );
}

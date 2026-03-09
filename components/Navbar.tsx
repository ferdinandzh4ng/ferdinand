"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#252529]/95 backdrop-blur">
      <nav className="flex w-full items-center py-4 pl-4 pr-4 sm:py-5 sm:pl-6 sm:pr-6">
        {/* Ferdinand – all the way left with padding */}
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="rounded text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529]"
          >
            {SITE_NAME}
          </Link>
        </div>

        {/* Desktop: Coding, Badminton, More centered (no Home) */}
        <ul className="hidden shrink-0 items-center gap-1 sm:flex">
          {NAV_LINKS.filter(({ href }) => href !== "/").map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#252529] ${
                  pathname === href
                    ? "bg-white/15 text-white"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: same-width spacer with button at end so center links stay centered */}
        <div className="flex flex-1 sm:hidden" aria-hidden />
        <div className="hidden flex flex-1 justify-end sm:flex" aria-hidden>
          <Link
            href="https://cal.com/ferdinand-simmons-zhang-cnuxce"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#252529]"
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded p-2 text-zinc-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 sm:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#252529] px-4 py-3 sm:hidden">
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === href
                      ? "bg-white/15 text-white"
                      : "text-zinc-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-200 sm:hidden"
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  );
}

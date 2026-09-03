"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];

export default function StickyNavbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-4 z-50 container mx-auto px-4 max-w-7xl pt-2 pb-2">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-2xl border border-sky-100 px-6 py-3.5 grid grid-cols-3 items-center">
        {/* Left Logo & Club Text */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#0369A1] flex items-center justify-center text-[#F0F9FF] font-black text-lg shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-xs md:text-sm text-[#0C4A6E] block">
                Rotary Club Source of the Nile
              </span>
              <span className="text-[9px] md:text-[10px] text-[#0369A1]/75 tracking-widest uppercase block">
                sourceofthenile.org
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Tabs (Centered in the navbar) */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center gap-6 bg-sky-50/70 px-6 py-2 rounded-full border border-sky-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-[#0284C7]",
                    isActive ? "text-[#0284C7] underline underline-offset-4" : "text-[#0C4A6E]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side / Mobile menu */}
        <div className="flex items-center justify-end">
          <Link
            href="/events"
            className="text-[10px] font-bold tracking-wider uppercase bg-[#0284C7] text-white px-4 py-2 rounded-full shadow lg:hidden"
          >
            Menu
          </Link>
          <div className="hidden lg:block text-xs font-semibold text-[#0369A1]">
            District 9213
          </div>
        </div>
      </div>
    </div>
  );
}

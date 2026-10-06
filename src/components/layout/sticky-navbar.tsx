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
      <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-2xl border border-zinc-200 px-6 py-3.5 grid grid-cols-3 items-center">
        {/* Left Logo & Club Text */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-xs md:text-sm text-black block">
                Rotary Club Source of the Nile
              </span>
              <span className="text-[9px] md:text-[10px] text-zinc-500 tracking-widest uppercase block">
                sourceofthenile.org
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Tabs (Centered in the navbar) */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center gap-6 bg-zinc-100/80 px-6 py-2 rounded-full border border-zinc-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold tracking-wider uppercase transition-colors hover:text-black",
                    isActive ? "text-black underline underline-offset-4 font-black" : "text-zinc-700"
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
            className="text-[10px] font-bold tracking-wider uppercase bg-black text-white px-4 py-2 rounded-full shadow lg:hidden"
          >
            Menu
          </Link>
          <div className="hidden lg:block text-xs font-semibold text-black">
            District 9213
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 pt-20 pb-0 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 justify-between">
          {/* Brand Info (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-base shadow">
                R
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-wider">
                RC Source of the Nile
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Built for changemakers who believe community service and leadership should be the standard.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-600">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold">X</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold">Gh</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold">Dc</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold">In</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold">Li</a>
            </div>
          </div>

          {/* Links Columns (Col 6-12) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Club */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Club</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/leadership" className="text-slate-600 hover:text-slate-900 transition-colors">Leadership</Link></li>
                <li><Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</Link></li>
                <li><Link href="/fellowship" className="text-slate-600 hover:text-slate-900 transition-colors">Fellowship</Link></li>
                <li><Link href="/events" className="text-slate-600 hover:text-slate-900 transition-colors">Events</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">Documentation</Link></li>
                <li><Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">Help Center</Link></li>
                <li><Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">Community</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/leadership" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link></li>
                <li><Link href="/leadership" className="text-slate-600 hover:text-slate-900 transition-colors">Career</Link></li>
                <li><Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
                <li><Link href="/events" className="text-slate-600 hover:text-slate-900 transition-colors">Press</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-xs text-slate-400">
          &copy; {currentYear} RC Source of the Nile. All rights reserved.
        </div>
      </div>

      {/* Bottom landscape image with top white fade effect & fully visible huge white text */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden flex items-end justify-center">
        {/* Top white fade gradient blending into footer background */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />

        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
          alt="Green rolling hills landscape"
          fill
          className="object-cover object-center z-0"
          referrerPolicy="no-referrer"
        />
        
        {/* Huge White Text (Adjusted size and padding so all letters are 100% visible) */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-8 flex items-center justify-center pointer-events-none select-none px-6 z-20 w-full overflow-hidden">
          <span className="font-black text-[6.8vw] sm:text-[7.6vw] md:text-[8.5vw] tracking-tight text-white uppercase drop-shadow-2xl whitespace-nowrap leading-none text-center">
            RC SOURCE OF THE NILE
          </span>
        </div>
      </div>
    </footer>
  );
}

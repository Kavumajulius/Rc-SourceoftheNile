
"use client"

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/fellowship", label: "Fellowship" },
];

const secondaryNavLinks = [
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];


const socialLinks = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 pt-16 md:pt-20 pb-12 md:pb-16">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-background/20">
            <div className="max-w-sm text-center md:text-left">
                <p className="font-bold">A community of leaders creating positive, lasting change.</p>
            </div>
            <div className="flex items-center gap-6 mt-6 md:mt-0">
                {socialLinks.map(link => (
                    <Link href="#" key={link} className="text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors">
                        {link}
                    </Link>
                ))}
            </div>
        </div>

        {/* Main Content */}
        <div className="py-12 md:py-16">
            <a href="mailto:info@rcsourcethenile.org" className="text-2xl md:text-6xl font-bold flex items-center group hover:text-accent transition-colors break-all">
                info@rcsourcethenile.org
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 shrink-0" />
            </a>

            <div className="grid md:grid-cols-3 gap-8 mt-12 md:mt-16">
                <div>
                     {/* Intentionally left blank for spacing to match design */}
                </div>
                <div>
                    <h3 className="font-bold uppercase tracking-wider mb-4">Explore</h3>
                    <ul className="space-y-3">
                        {mainNavLinks.map(link => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold uppercase tracking-wider mb-4">Engage</h3>
                    <ul className="space-y-3">
                        {secondaryNavLinks.map(link => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
         <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {year} All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">People of Action</p>
        </div>

      </div>
       {/* Stylized text */}
       <div className="w-full bg-accent text-foreground text-center py-8 overflow-hidden">
            <h1 className="text-5xl md:text-9xl font-extrabold tracking-tighter leading-none">
                <span className="block">Rotary club</span>
                <span className="block">source of the nile</span>
            </h1>
       </div>
    </footer>
  );
}


"use client"

import Link from "next/link";
import { LogoIcon } from "../icons";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-12">
            <div className="flex flex-col items-start col-span-12 md:col-span-4">
                <div className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-accent" />
                    <span className="font-bold font-headline text-lg">RC Source of the Nile</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm max-w-xs">
                    A community of leaders creating positive, lasting change in our communities and around the world.
                </p>
            </div>
            <div className="col-span-6 md:col-span-2">
                <h3 className="font-headline font-bold text-background mb-4">Menu</h3>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-background hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-6 md:col-span-2">
                 <h3 className="font-headline font-bold text-background mb-4">Follow Us</h3>
                 <ul className="space-y-2">
                    {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(link => (
                        <li key={link}>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-background hover:underline">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-12 md:col-span-4">
                 <h3 className="font-headline font-bold text-background mb-4">Get In Touch</h3>
                 <p className="text-sm text-muted-foreground">We're here to answer your questions and welcome you to our community.</p>
                 <a href="mailto:info@rcsourcethenile.org" className="font-headline text-2xl font-bold mt-2 text-background hover:text-accent transition-colors block">
                    info@rcsourcethenile.org
                 </a>
            </div>
        </div>
        <div className="mt-12 border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {year} RC Source of the Nile. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

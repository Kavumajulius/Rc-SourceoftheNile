"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "../icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/history", label: "History" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/photo-tool", label: "Photo Tool" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        "font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary font-bold" : "text-foreground/60",
        className
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            RC Source of the Nile
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex rounded-full font-bold">
              <Link href="/events">
                  Join Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="px-2 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                        "text-2xl font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

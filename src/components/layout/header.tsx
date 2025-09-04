"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "../icons";
import { motion } from "framer-motion";

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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            RC Source of the Nile
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/80">
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
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                   <Link href="/" className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-primary" />
                  </Link>
                  <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)} className="px-2">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col items-center justify-center space-y-6 mt-16 text-center">
                {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-3xl font-headline font-bold transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                      {link.label}
                      </Link>
                    </motion.div>
                ))}
                </nav>
                 <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <Button asChild size="lg" className="rounded-full font-bold w-full">
                        <Link href="/events">
                            Join Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

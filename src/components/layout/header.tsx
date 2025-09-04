
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
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/members", label: "Members" },
  { href: "/contact", label: "Contact" },
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
        pathname === href ? "text-primary font-bold" : "text-foreground/70",
        className
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-background"
      )}>
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            RC Source of the Nile
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild className="rounded-full font-bold bg-accent-green text-white hover:bg-green-500 px-6 hidden md:flex">
              <Link href="/donate">
                  Donate
              </Link>
          </Button>
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" className="p-2 rounded-full h-auto">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                   <Link href="/" className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-primary" />
                    <span className="font-bold sm:inline-block font-headline text-lg">
                        RC Source of the Nile
                    </span>
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
                    <Button asChild size="lg" className="rounded-full font-bold w-full bg-accent-green text-white hover:bg-green-500">
                        <Link href="/donate">
                            Donate Now <ArrowRight className="ml-2 h-4 w-4" />
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

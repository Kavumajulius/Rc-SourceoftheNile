import Link from "next/link";
import { LogoIcon } from "../icons";
import { Button } from "../ui/button";

const quickLinks = [
  { href: "#", label: "My Rotary" },
  { href: "#", label: "End Polio Now" },
  { href: "#", label: "Rotary Brand Center" },
  { href: "#", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-start">
                <div className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-primary" />
                    <span className="font-bold font-headline text-lg">RC Source of the Nile</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                    A community of leaders creating positive, lasting change in our communities and around the world.
                </p>
            </div>
            <div>
                <h3 className="font-headline font-bold text-primary mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {quickLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h3 className="font-headline font-bold text-primary mb-4">Get In Touch</h3>
                 <p className="text-sm text-muted-foreground">P.O. Box 1234, Jinja, Uganda</p>
                 <p className="text-sm text-muted-foreground mt-1">info@rcsourcethenile.org</p>
                 <div className="mt-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/contact">Contact Form</Link>
                    </Button>
                 </div>
            </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} RC Source of the Nile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

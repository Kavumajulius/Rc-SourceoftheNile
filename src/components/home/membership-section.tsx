
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Section from "./section";

export default function MembershipSection() {
    return (
        <Section id="membership" className="bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="w-full md:w-auto">
                        <p className="font-bold text-sm text-accent">HANDPICKED FOR YOUR NEEDS</p>
                        <h2 className="text-5xl md:text-9xl font-extrabold tracking-tighter mt-4">Membership</h2>
                        <h2 className="text-5xl md:text-9xl font-extrabold tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--foreground))' }}>Essentials</h2>
                    </div>
                    <p className="max-w-xs text-muted-foreground mt-4 md:mt-4">We offer a carefully curated selection of membership benefits designed to enhance your service journey.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-s2">
                        <Image 
                        src="https://picsum.photos/800/600?random=30" 
                        alt="Rotary members collaborating"
                        fill
                        className="object-cover"
                        data-ai-hint="team collaboration"
                        />
                        <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm p-4 rounded-lg">
                            <p className="font-bold">Exclusive Benefits</p>
                            <ul className="mt-2 space-y-2 text-sm">
                            {[
                                "Global Networking",
                                "Leadership Training",
                                "Service Projects"
                            ].map(item => (
                                <li key={item} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-accent"/>
                                <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0">
                        <h3 className="text-2xl md:text-3xl font-bold">Become a Member</h3>
                        <p className="mt-4 text-base md:text-lg text-muted-foreground">Join a global network of volunteers making a difference. As a member, you will connect with diverse perspectives, develop leadership skills, make a tangible impact, and build lifelong friendships.</p>
                        <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold px-8 py-6 text-lg group" asChild>
                        <Link href="/events">See Products <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}

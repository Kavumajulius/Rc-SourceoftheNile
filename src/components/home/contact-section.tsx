
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "./section";

export default function ContactSection() {
    return (
        <Section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl py-24 px-6 md:px-16 text-center isolate bg-slate-900"
                >
                    {/* Background Moody Artistic Mesh / Bokeh Photograph */}
                    <Image
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
                        alt="Background texture"
                        fill
                        className="object-cover object-center opacity-70 filter saturate-125 contrast-110"
                        referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-950/70 via-slate-900/60 to-amber-950/70 backdrop-blur-[2px]" />

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight mb-4 drop-shadow-lg">
                            join over 500+ changemakers
                        </h2>
                        
                        <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed mb-10 max-w-lg drop-shadow">
                            who are dedicated to service above self, uplifting local communities along the Nile & making lifelong friends.
                        </p>

                        <Link
                            href="#membership"
                            className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-white/95 px-8 py-4 text-sm md:text-base font-medium shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            become a member
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}


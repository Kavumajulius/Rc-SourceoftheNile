
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./section";

const Stat = ({ value, label, description }: { value: string, label: string, description: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <p className="text-5xl font-bold text-foreground">{value}</p>
        <p className="mt-1 text-lg font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </motion.div>
);

export default function FellowshipSection() {
    return (
        <Section className="bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <motion.div 
                            className="inline-block px-4 py-1.5 text-sm font-semibold text-muted-foreground bg-background rounded-full shadow-s1"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Weekly Gatherings
                        </motion.div>

                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Building Bonds Through <span className="text-accent italic">Fellowship</span>
                        </motion.h2>

                        <motion.p 
                            className="text-muted-foreground text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            Our weekly fellowships are the cornerstone of our club's camaraderie. They are vibrant, engaging sessions where members connect, share ideas, and hear from inspiring guest speakers, fostering both personal and professional growth.
                        </motion.p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-4">
                           <Stat value="50+" label="Guest Speakers" description="Hosted in the last year" />
                           <Stat value="100%" label="Engagement" description="In our community projects" />
                        </div>
                    </div>
                    
                    <motion.div
                        className="relative h-[400px] md:h-[500px] w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="https://picsum.photos/600/800?random=40"
                            alt="Fellowship event"
                            fill
                            className="object-cover rounded-xl shadow-s2"
                            data-ai-hint="fellowship event"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}


"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";

const RotaryGearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M9.401 3.003c1.155.043 2.252.32 3.221.796l.962-.962a.75.75 0 011.06 1.06l-.962.962c.476.969.753 2.066.796 3.221h1.32a.75.75 0 010 1.5h-1.32c-.043 1.155-.32 2.252-.796 3.221l.962.962a.75.75 0 01-1.06 1.06l-.962-.962a6.723 6.723 0 01-3.221.796v1.32a.75.75 0 01-1.5 0v-1.32a6.723 6.723 0 01-3.221-.796l-.962.962a.75.75 0 01-1.06-1.06l.962-.962a6.723 6.723 0 01-.796-3.221H3a.75.75 0 010-1.5h1.32c.043-1.155.32-2.252.796-3.221l-.962-.962a.75.75 0 011.06-1.06l.962.962c.969-.476 2.066-.753 3.221-.796V3.003a.75.75 0 011.5 0v.001zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        <path d="M12 8.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" />
    </svg>
);


export default function HeroSection() {
    const headlineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5 + i * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        }),
    };

    return (
        <section className="relative w-full bg-background overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Left Column */}
                    <div className="md:col-span-7 lg:col-span-7 relative">
                        <motion.div
                            className="absolute -top-8 left-16"
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={tagVariants}
                        >
                            <div className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-gray-600 shadow-s1 flex items-center">
                                Community Service
                            </div>
                        </motion.div>
                        
                        <motion.h1
                            className="font-headline font-bold text-gray-900"
                            style={{ fontSize: "clamp(3rem, 6vw, 6.875rem)", lineHeight: 1.05 }}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span variants={headlineVariants} custom={0} className="block">Rotary</motion.span>
                            <motion.span variants={headlineVariants} custom={1} className="block">Club of</motion.span>
                            <motion.span variants={headlineVariants} custom={2} className="block text-primary">Source of the Nile</motion.span>
                        </motion.h1>

                        <motion.div
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={tagVariants}
                        >
                            <div className="bg-white rounded-full pl-4 pr-5 py-2 text-sm font-semibold text-gray-600 shadow-s1 flex items-center gap-2">
                                <RotaryGearIcon />
                                Leadership & Impact
                            </div>
                        </motion.div>

                        <motion.p
                            className="mt-6 max-w-lg text-lg text-gray-500"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Together, we serve communities, empower leaders, and create lasting impact along the Nile and beyond.
                        </motion.p>
                        
                        <motion.div
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <Button size="lg" className="bg-gray-900 text-white rounded-full font-bold px-8 py-6 text-base hover:bg-gray-700 hover:text-white transition-colors">
                                Join Us Today
                            </Button>
                             <Button size="lg" variant="outline" className="bg-accent-green border-accent-green text-white rounded-full font-bold px-8 py-6 text-base hover:bg-green-500 hover:text-white transition-colors">
                                Learn More
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-5 lg:col-span-5 flex items-center justify-center mt-12 md:mt-0">
                         <motion.div 
                            className="relative w-full h-[500px] max-w-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                        >
                            <Image
                                src="https://picsum.photos/600/800?random=42"
                                alt="Rotary members collaborating on a community project"
                                fill
                                className="rounded-3xl object-cover shadow-lg"
                                data-ai-hint="teamwork community"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

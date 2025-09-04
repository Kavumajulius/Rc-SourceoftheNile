
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HandHeart, Users, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Section from "./section";

export default function ContactSection() {
    return (
        <Section id="contact" className="bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text and Icons */}
                    <div className="text-center lg:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8"
                        >
                            Ready to Make a Difference? <br />
                            <span className="text-muted-foreground">Join Us Today.</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="flex items-center space-x-4 justify-center lg:justify-start"
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background shadow-md">
                                <HandHeart className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground shadow-md">
                                <Users className="h-8 w-8" />
                            </div>
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background shadow-md">
                                <Globe className="h-8 w-8 text-primary" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Cards and Button */}
                    <div className="relative flex items-center justify-center lg:justify-end h-[400px] lg:h-[400px] mt-12 lg:mt-0">
                        {/* Impact Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute left-0 top-0 w-64 bg-background p-6 rounded-2xl shadow-lg z-10"
                        >
                            <h3 className="font-bold text-lg">Community Impact</h3>
                            <p className="text-sm text-muted-foreground mb-4">Lives touched by our projects.</p>
                            <div className="text-4xl font-bold text-primary">5000+</div>
                            <div className="w-full bg-muted rounded-full h-2.5 mt-2">
                                <div className="bg-accent h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </motion.div>

                        {/* Image Card */}
                         <motion.div 
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="relative w-64 h-80 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image src="https://picsum.photos/400/500?random=99" alt="Community members" fill className="object-cover" data-ai-hint="happy people" />
                        </motion.div>

                         {/* Join Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                            className="absolute -right-4 md:-right-8 bottom-8"
                        >
                            <Button size="lg" className="rounded-full h-20 w-20 md:h-24 md:w-24 flex-col bg-primary hover:bg-primary/90 shadow-2xl text-lg font-bold">
                                Join <ArrowRight className="h-5 w-5 mt-1" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

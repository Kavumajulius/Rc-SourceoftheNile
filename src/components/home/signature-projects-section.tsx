
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Globe, Users, Leaf, Target, ShieldCheck, Heart, Droplets, BookOpen, Activity } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./section";

const getTags = (index: number) => {
    const tagsMap = [
        [
            { label: "Community Driven", icon: Users, color: "text-blue-400" },
            { label: "Global Impact", icon: Globe, color: "text-yellow-400" },
            { label: "Sustainable", icon: Leaf, color: "text-green-400" },
        ],
        [
            { label: "Targeted Goals", icon: Target, color: "text-red-400" },
            { label: "Health Focus", icon: ShieldCheck, color: "text-purple-400" },
            { label: "24/7 Care", icon: Heart, color: "text-pink-400" },
        ],
        [
            { label: "Education", icon: BookOpen, color: "text-orange-400" },
            { label: "Future Ready", icon: Activity, color: "text-cyan-400" },
            { label: "Empowerment", icon: Users, color: "text-blue-400" },
        ]
    ];
    return tagsMap[index % tagsMap.length];
};

export default function SignatureProjectsSection() {
    return (
        <Section className="bg-gray-50 text-foreground py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">OUR SIGNATURE PROJECTS</p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3 text-gray-900">Advanced Community Treatments</h2>
                    <p className="mt-4 text-gray-500 text-lg leading-relaxed">We offer a range of expert-driven services designed to address your unique community needs. Whether you're dealing with health, education, or environmental challenges, we've got you covered.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
                    >
                        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden h-[540px] flex flex-col group transition-all duration-500 hover:-translate-y-2 relative border border-gray-100">
                            
                            {/* Top Image Area */}
                            <div className="relative h-[280px] w-full shrink-0">
                                <Image 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    data-ai-hint={project.aiHint} 
                                />
                                {/* Bottom fade gradient blending perfectly into white */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
                                <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

                                {/* Tags Overlay */}
                                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                                    {getTags(index).map((tag, tagIndex) => (
                                        <div key={tagIndex} className="bg-black/60 backdrop-blur-md text-white/95 text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium shadow-sm">
                                            <tag.icon className={`w-3 h-3 ${tag.color}`} /> {tag.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="px-8 pb-8 pt-0 flex flex-col flex-1 bg-white relative z-20">
                                <h3 className="text-[28px] font-light tracking-tight text-gray-900 mb-3 leading-tight">{project.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 font-normal">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto flex items-center gap-3">
                                    <Button className="rounded-full bg-[#1A1A1A] hover:bg-black text-white px-6 h-11 font-medium text-sm">
                                        Support Project
                                    </Button>
                                    <Button variant="outline" className="rounded-full border-gray-200 text-gray-900 hover:bg-gray-50 px-6 h-11 font-medium text-sm shadow-sm">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

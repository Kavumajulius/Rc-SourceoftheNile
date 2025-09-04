
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./section";

export default function SignatureProjectsSection() {
    return (
        <Section className="bg-foreground text-background">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-sm font-bold text-accent">OUR SIGNATURE PROJECTS</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">Advanced Community Treatments</h2>
                        <p className="mt-4 text-muted-foreground max-w-xl">We offer a range of expert-driven services designed to address your unique community needs. Whether you're dealing with health, education, or environmental challenges, we've got you covered.</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button size="icon" variant="outline" className="rounded-full bg-transparent border-background/50 hover:bg-accent/10"><ArrowRight className="w-5 h-5 rotate-180"/></Button>
                        <Button size="icon" variant="outline" className="rounded-full bg-accent border-accent hover:bg-accent/80"><ArrowRight className="w-5 h-5"/></Button>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
                    >
                        <Card className="bg-transparent text-background border-background/20 overflow-hidden h-full group transition-all duration-300 hover:shadow-s2 hover:-translate-y-1 rounded-xl">
                        <CardContent className="p-5">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-3 h-16">{project.description}</p>
                            <div className="p-0 mt-4 text-accent font-bold flex items-center text-sm">
                                Learn More <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                            </div>
                        </CardContent>
                        <div className="relative h-64 w-full overflow-hidden mt-4 rounded-xl">
                            <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={project.aiHint} />
                        </div>
                        </Card>
                    </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

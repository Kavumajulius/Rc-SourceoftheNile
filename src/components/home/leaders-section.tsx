
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./section";
import { Button } from "../ui/button";

const leaders = [
  {
    name: "Benyamin Rolocov",
    role: "President",
    imageUrl: "https://picsum.photos/400/500?random=51",
    aiHint: "man portrait"
  },
  {
    name: "Alexandra Chabon",
    role: "CEO",
    imageUrl: "https://picsum.photos/400/500?random=52",
    aiHint: "woman portrait"
  },
  {
    name: "Rezchnag Shibana",
    role: "Financial Officer",
    imageUrl: "https://picsum.photos/400/500?random=53",
    aiHint: "man portrait"
  },
  {
    name: "Zhang Chiano",
    role: "Sergeant at Arms",
    imageUrl: "https://picsum.photos/400/500?random=54",
    aiHint: "man portrait"
  },
];

const LeaderCard = ({ name, role, imageUrl, aiHint, index }: (typeof leaders)[0] & { index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col group"
    >
        <div className="relative w-full overflow-hidden rounded-xl bg-secondary">
            <Image
                src={imageUrl}
                alt={`Portrait of ${name}`}
                width={400}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={aiHint}
            />
             <Button size="icon" variant="outline" className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
            </Button>
        </div>
        <div className="mt-4 text-left">
            <h3 className="text-lg font-bold uppercase tracking-wide">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
        </div>
    </motion.div>
);


export default function LeadersSection() {
    return (
        <Section className="bg-secondary">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Leaders</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leaders.map((leader, index) => (
                        <LeaderCard key={leader.name} {...leader} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

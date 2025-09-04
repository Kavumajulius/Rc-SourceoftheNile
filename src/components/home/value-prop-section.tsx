
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Section from "./section";

const ValueCard = ({
  number,
  title,
  imageUrl,
  aiHint,
  className,
}: {
  number: string;
  title: string;
  imageUrl: string;
  aiHint: string;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className={`relative rounded-xl overflow-hidden p-8 flex flex-col justify-between h-[450px] bg-secondary group ${className}`}
  >
    <div className="relative z-10">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold bg-background/50 text-foreground py-1 px-3 rounded-full backdrop-blur-sm">
          {`0${number}/`}
        </span>
        <Button
          size="icon"
          variant="outline"
          className="bg-background/50 backdrop-blur-sm rounded-full h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-45"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Button>
      </div>
      <h3 className="text-4xl font-bold max-w-xs mt-6">{title}</h3>
    </div>

    <div className="relative z-10">
      <Button
        variant="secondary"
        className="rounded-full bg-background/80 backdrop-blur-sm"
      >
        Explore <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>

    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      data-ai-hint={aiHint}
    />
     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
  </motion.div>
);

export default function ValuePropSection() {
  return (
    <Section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold max-w-2xl leading-tight">
            Creating lasting and <span className="text-primary">transformational impact</span> for the communities we serve.
          </h2>
          <Button variant="outline" className="rounded-full hidden md:flex">
            Learn More
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ValueCard
            number="1"
            title="Sustainable Community Projects"
            imageUrl="https://picsum.photos/800/600?random=11"
            aiHint="community work"
          />
          <ValueCard
            number="2"
            title="Empowering Local Leaders"
            imageUrl="https://picsum.photos/800/600?random=12"
            aiHint="leadership training"
          />
        </div>
      </div>
    </Section>
  );
}

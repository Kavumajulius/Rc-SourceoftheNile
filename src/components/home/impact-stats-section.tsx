
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Section from "./section";

const Stat = ({ value, label, description }: { value: string, label: string, description: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-left"
    >
      <p className="text-5xl lg:text-6xl font-bold text-foreground">{value}</p>
      <p className="mt-2 text-md font-semibold text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};


export default function ImpactStatsSection() {
    return (
        <Section className="bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="relative h-[450px] w-full rounded-xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image 
                            src="https://picsum.photos/600/800?random=60"
                            alt="Community Impact"
                            fill
                            className="object-cover"
                            data-ai-hint="community impact"
                        />
                    </motion.div>
                    <div className="flex flex-col justify-center h-full">
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Our Impact by the Numbers
                        </motion.h2>
                        <motion.p 
                            className="mt-4 text-muted-foreground text-lg max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            We measure our success by the lives we touch and the communities we strengthen through dedicated projects and fellowship.
                        </motion.p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <Stat value="95%" label="Project Completion" description="Across all initiatives" />
                            <Stat value="9/10" label="Member Satisfaction" description="In our programs" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

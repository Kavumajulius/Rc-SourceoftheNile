
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Section from "./section";

const AnimatedStat = ({ value, label, icon: Icon, suffix }: { value: string, label: string, icon?: React.ElementType, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const end = parseInt(value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(end)) return;
      
      let start = 0;
      const duration = 1200;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let currentFrame = 0;

      const counter = setInterval(() => {
        currentFrame++;
        const progress = Math.pow(currentFrame / totalFrames, 0.5); // Ease-out
        const currentNum = Math.round(end * progress);

        if (currentNum >= end) {
          clearInterval(counter);
          setDisplayValue(value);
        } else {
          setDisplayValue(currentNum.toLocaleString());
        }
      }, 1000 / frameRate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-left"
    >
      <p className="text-5xl lg:text-7xl font-bold text-foreground">
        {displayValue}
        {suffix && <span className="text-accent">{suffix}</span>}
      </p>
      <p className="mt-2 text-muted-foreground text-sm font-semibold tracking-wider">{label}</p>
    </motion.div>
  );
};


export default function ImpactStatsSection() {
    return (
        <Section className="bg-background">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-md">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Impact by the Numbers</h2>
                <p className="mt-4 text-muted-foreground text-lg">We measure our success by the lives we touch and the communities we strengthen.</p>
                <div className="mt-6 flex gap-2">
                    {Array(3).fill(0).map((_, i) => (
                    <Image key={i} src={`https://picsum.photos/100/100?random=${10+i}`} alt="member" width={60} height={60} className="rounded-full border-2 border-white"/>
                    ))}
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">
                    +
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-8 text-center">
                <AnimatedStat value="95%" label="PROJECT COMPLETION" />
                <AnimatedStat value="9/10" label="MEMBER SATISFACTION" />
                </div>
            </div>
            </div>
        </Section>
    );
}

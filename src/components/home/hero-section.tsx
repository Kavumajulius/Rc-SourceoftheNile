
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Main Typography */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="font-black leading-tight tracking-tighter text-foreground text-5xl lg:text-7xl"
            >
              Service in Action, <br />
              <span className="text-muted-foreground/50">Impact in Motion.</span>
            </h1>

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              We're committed to creating positive change in our community and beyond.
              Our dedicated members work together on impactful projects that address
              local and global challenges along the Source of the Nile.
            </p>

            <div className="flex items-center gap-4">
                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold text-lg transition-all group"
                >
                    Join Today{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                 <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-3 font-semibold text-lg transition-all group"
                >
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    See Our Work
                </Button>
            </div>
          </motion.div>

          {/* Right: Large Image Card */}
          <motion.div 
            className="relative flex items-center justify-center h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/1200/800?random=10"
                alt="Rotary members in action"
                fill
                className="object-cover"
                data-ai-hint="community service"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* New Full-Width Image Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
            className="relative w-full h-[540px] rounded-[20px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
            <Image
                src="https://picsum.photos/1980/1080?random=11"
                alt="Service project in the field"
                fill
                className="object-cover"
                data-ai-hint="community project"
            />
        </motion.div>
      </div>
    </section>
  );
}

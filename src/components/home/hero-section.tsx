
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Video } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder video URLs. Replace these with your actual video files.
const videoSources = [
    "https://videos.pexels.com/video-files/3846573/3846573-hd_1280_720_25fps.mp4",
    "https://videos.pexels.com/video-files/853875/853875-hd_1366_720_25fps.mp4",
    "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_24fps.mp4",
];

export default function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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

          {/* Right: iPhone-style Video Card */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-[320px] h-[640px] bg-foreground/10 rounded-[48px] shadow-2xl p-4 border-4 border-foreground/5">
                <div className="absolute top-1/2 left-2 -translate-y-1/2 space-y-1">
                    <div className="h-12 w-1.5 bg-foreground/10 rounded-full"></div>
                    <div className="h-24 w-1.5 bg-foreground/10 rounded-full"></div>
                </div>
                 <div className="absolute top-24 right-2 -translate-y-1/2 h-20 w-1.5 bg-foreground/10 rounded-full"></div>
                <div className="bg-background h-full w-full rounded-[32px] overflow-hidden relative">
                    {/* Video Grid */}
                    <div className="h-full w-full grid grid-rows-3 gap-2">
                         {videoSources.map((src, index) => (
                             <div key={index} className="relative overflow-hidden w-full h-full bg-secondary">
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10"></div>
                             </div>
                         ))}
                    </div>

                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 h-6 w-28 bg-background rounded-b-lg flex items-center justify-center">
                        <div className="h-1.5 w-12 bg-foreground/10 rounded-full"></div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

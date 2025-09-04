
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 gap-x-4 gap-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            {/* User Glow */}
            <motion.div
              className="col-start-1 col-span-5 row-start-1 flex items-center gap-2 text-sm"
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
            >
              <div className="flex -space-x-2">
                <Image src="https://picsum.photos/40/40?random=1" alt="member 1" width={24} height={24} className="rounded-full border-2 border-background"/>
                <Image src="https://picsum.photos/40/40?random=2" alt="member 2" width={24} height={24} className="rounded-full border-2 border-background"/>
                <Image src="https://picsum.photos/40/40?random=3" alt="member 3" width={24} height={24} className="rounded-full border-2 border-background"/>
              </div>
              <span className="font-semibold text-muted-foreground">200+ Members with Confidence</span>
            </motion.div>

            {/* Radiant */}
            <motion.h1
              className="col-start-1 col-span-9 row-start-2 row-span-2 font-headline text-[16vw] md:text-[10vw] leading-none font-extrabold tracking-tighter flex items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
            >
              Lasting
            </motion.h1>

            {/* Skin */}
            <motion.h1
              className="col-start-2 col-span-7 row-start-3 row-span-2 font-headline text-[12vw] md:text-[8vw] leading-none font-extrabold tracking-tighter text-foreground/10 flex items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.1 } } }}
            >
              Change
            </motion.h1>
            
            {/* Top Right Image */}
            <motion.div 
              className="col-start-10 col-span-3 row-start-2 row-span-2"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } } }}
            >
              <Image 
                src="https://picsum.photos/300/200?random=11"
                alt="Community work"
                width={300}
                height={200}
                className="rounded-xl object-cover"
                data-ai-hint="community work"
              />
            </motion.div>
            
            {/* Middle Paragraph */}
            <motion.p
              className="col-start-8 col-span-5 row-start-4 text-sm text-muted-foreground"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } } }}
            >
              We are a global network of community leaders and friends dedicated to creating lasting change in our communities and around the world.
            </motion.p>

            {/* Expert Solutions */}
            <motion.p
              className="col-start-1 col-span-4 row-start-5 font-bold"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } } }}
            >
              Expert Solutions for Community Needs
            </motion.p>
            
            {/* Awaits */}
            <motion.h1
              className="col-start-7 col-span-6 row-start-5 row-span-2 font-headline text-[16vw] md:text-[10vw] leading-none font-extrabold tracking-tighter flex items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } } }}
            >
              Awaits
            </motion.h1>

            {/* Free Consultation CTA */}
            <motion.div
              className="col-start-4 col-span-3 row-start-5"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } } }}
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-full font-bold px-6 py-6 text-base group w-full" asChild>
                <Link href="/events">Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </section>
    );
}

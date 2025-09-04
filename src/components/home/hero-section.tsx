"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Home } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Header (simplified for hero context) */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
          </div>
          <span className="text-sm text-gray-700 font-medium">200+ Members Serving With Impact</span>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-semibold">
          Rotary Club
        </Button>
      </header>

      {/* Main Content Container - Increased bottom padding */}
      <div className="container mx-auto max-w-7xl px-8 pt-24 pb-16 relative min-h-[800px]">
        
        {/* Top Right - Community service image */}
        <motion.div
          className="absolute top-20 right-8 rounded-3xl overflow-hidden shadow-2xl"
          style={{ width: '256px', height: '192px' }}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
            <Image 
              src="https://picsum.photos/256/192" 
              alt="Community Service"
              width={256}
              height={192}
              className="w-full h-full object-cover"
              data-ai-hint="community service"
            />
          </div>
        </motion.div>

        {/* Lock Icon */}
        <motion.div
          className="absolute bg-white rounded-full p-3 shadow-lg"
          style={{ top: '128px', right: '288px' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Lock className="w-5 h-5 text-gray-600" />
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          className="absolute bg-white text-black px-3 py-1 rounded-full shadow-sm text-sm font-medium"
          style={{ top: '160px', right: '320px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          (50)
        </motion.div>

        {/* Main Typography Layout */}
        <div className="relative">
          
          <motion.h1
            className="absolute font-black leading-none tracking-tighter text-black"
            style={{ 
              fontSize: '160px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              top: '60px',
              left: '0px'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Rotary
          </motion.h1>

          <motion.h1
            className="absolute font-black leading-none tracking-tighter text-gray-200"
            style={{ 
              fontSize: '160px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              top: '180px',
              left: '64px'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          >
            Club
          </motion.h1>

          <motion.div
            className="absolute max-w-xs"
            style={{ top: '180px', right: '0px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-gray-600 text-sm leading-relaxed text-right">
              We're committed to creating positive change in our community and beyond. Our dedicated 
              members work together on impactful projects that address local and global challenges 
              along the Source of the Nile.
            </p>
          </motion.div>

          <motion.div
            className="absolute bg-white rounded-full p-3 shadow-lg"
            style={{ top: '320px', left: '48px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Home className="w-5 h-5 text-gray-600" />
          </motion.div>

          <motion.p
            className="absolute text-lg font-bold text-black max-w-sm"
            style={{ top: '380px', left: '0px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Expert Community Solutions For Lasting Impact
          </motion.p>

          <motion.div
            className="absolute"
            style={{ top: '430px', left: '0px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-8 py-3 font-semibold text-lg transition-all group"
            >
              Join Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.h1
            className="absolute font-black leading-none tracking-tighter text-black w-full"
            style={{ 
              fontSize: '160px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              top: '480px',
              left: '0px',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Source of the Nile
          </motion.h1>
        </div>
      </div>
      
      {/* Bottom Image - Full Width */}
      <div className="w-full h-[540px] px-5 pb-5">
        <motion.div
            className="w-full h-full relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <Image 
            src="https://picsum.photos/1920/1080" 
            alt="Rotary Club Members"
            fill
            className="w-full h-full object-cover rounded-[20px]"
            data-ai-hint="teamwork community"
          />
        </motion.div>
      </div>
    </section>
  );
}

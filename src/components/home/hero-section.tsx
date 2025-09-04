"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between py-6 px-8">
        {/* User testimonial with avatars */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
          </div>
          <span className="text-sm text-gray-700 font-medium">200+ Members Serving With Impact</span>
        </div>

        {/* Rotary Club Button */}
        <Button
          className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-semibold"
        >
          Rotary Club
        </Button>

        {/* Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300"
        >
          <div className="w-4 h-4 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </Button>
      </header>

      {/* Main Content Container - Increased bottom padding to ensure visibility */}
      <div className="container mx-auto max-w-7xl px-8 pt-24 pb-32 relative h-[980px]">
        
        {/* Top Right - Community service image - EXACT SIZE: 256px × 192px */}
        <motion.div
          className="absolute top-20 right-8 rounded-3xl overflow-hidden shadow-2xl"
          style={{ width: '256px', height: '192px' }}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=256&h=192&fit=crop&crop=center" 
              alt="Community Service"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Lock Icon - Top Right Corner - EXACT POSITION */}
        <motion.div
          className="absolute bg-white rounded-full p-3 shadow-lg"
          style={{ top: '128px', right: '288px' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Lock className="w-5 h-5 text-gray-600" />
        </motion.div>

        {/* Rating Badge - EXACT POSITION */}
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
          
          {/* "Rotary" - Main headline - EXACT POSITIONING */}
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

          {/* "Club" - Overlapping gray text - EXACT POSITIONING */}
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

          {/* Center paragraph text - REPOSITIONED */}
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

          {/* Home icon - EXACT POSITIONING */}
          <motion.div
            className="absolute bg-white rounded-full p-3 shadow-lg"
            style={{ top: '320px', left: '48px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Home className="w-5 h-5 text-gray-600" />
          </motion.div>

          {/* "Expert Community Solutions For Lasting Impact" - EXACT POSITIONING */}
          <motion.p
            className="absolute text-lg font-bold text-black max-w-sm"
            style={{ top: '380px', left: '0px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Expert Community Solutions For Lasting Impact
          </motion.p>

          {/* Join Today Button - EXACT POSITIONING */}
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

          {/* "Source of the Nile" - REPLACED "Awaits" */}
          <motion.h1
            className="absolute font-black leading-none tracking-tighter text-black"
            style={{ 
              fontSize: '120px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              top: '420px',
              right: '0px',
              textAlign: 'right'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Source of the Nile
          </motion.h1>

          {/* Rotary wheel accent element - REPOSITIONED */}
          <motion.div
            className="absolute w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
            style={{ top: '380px', right: '32px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <span className="text-2xl">⚙️</span>
          </motion.div>
        </div>

        {/* Bottom Card - "Connect With Us For Community Impact" - EXACT SIZE & POSITION */}
        <motion.div
          className="absolute bg-white rounded-2xl shadow-xl p-6"
          style={{ 
            top: '620px', 
            left: '32px',
            width: '320px'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">🤝</span>
            </div>
            <div>
              <p className="text-blue-500 text-sm font-medium mb-1">Community</p>
              <h3 className="font-bold text-gray-900 leading-tight">
                Connect With Us For Community Impact
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Bottom Image - Group of Rotary members - RESIZED */}
        <motion.div
          className="absolute rounded-3xl overflow-hidden shadow-2xl"
          style={{ 
            top: '560px', 
            right: '32px',
            width: '576px', 
            height: '324px'
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop&crop=center" 
            alt="Rotary Club Members"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating "Service Above Self" text bubble - REPOSITIONED */}
        <motion.div
          className="absolute bg-blue-100 text-blue-600 px-4 py-2 rounded-full shadow-sm text-sm font-medium"
          style={{ top: '670px', left: '420px' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: 1.1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
        >
          Service Above Self
        </motion.div>

      </div>
    </section>
  );
}

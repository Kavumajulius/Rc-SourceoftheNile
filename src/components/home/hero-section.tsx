
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Home } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
          </div>
          <span className="text-sm text-gray-700 font-medium">
            200+ Members Serving With Impact
          </span>
        </div>
        <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-8 py-3 font-semibold text-lg transition-all group"
              >
                Join Today{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto max-w-7xl px-8 pt-32 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Main Typography */}
          <div className="space-y-6">
            <motion.h1
              className="font-black leading-tight tracking-tighter text-black text-6xl lg:text-8xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Rotary <br />
              <span className="text-gray-300">Club</span>
            </motion.h1>

            <motion.p
              className="text-lg font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Expert Community Solutions For Lasting Impact
            </motion.p>

            <motion.p
              className="text-gray-600 text-sm leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              We're committed to creating positive change in our community and beyond.
              Our dedicated members work together on impactful projects that address
              local and global challenges along the Source of the Nile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
             
            </motion.div>
          </div>

          {/* Right: Images + Badges */}
          <div className="relative flex flex-col items-center">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl w-80 h-[455px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src="https://picsum.photos/270/480"
                alt="Community Service"
                width={270}
                height={480}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Icons (can float around image) */}
            <motion.div
              className="absolute top-12 -left-6 bg-white rounded-full p-3 shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Lock className="w-5 h-5 text-gray-600" />
            </motion.div>

            <motion.div
              className="absolute top-16 -left-20 bg-white text-black px-3 py-1 rounded-full shadow-sm text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              (50)
            </motion.div>

            <motion.div
              className="absolute -bottom-6 left-12 bg-white rounded-full p-3 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <Home className="w-5 h-5 text-gray-600" />
            </motion.div>
          </div>
        </div>

        {/* Big Title at Bottom */}
        <motion.h1
          className="text-center font-black leading-tight tracking-tighter text-black mt-24 text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Source of the Nile
        </motion.h1>
      </div>

      {/* Bottom Image - Full Width */}
      <div className="w-full h-[540px] px-5 pb-5 mt-20">
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
          />
        </motion.div>
      </div>
    </section>
  );
}

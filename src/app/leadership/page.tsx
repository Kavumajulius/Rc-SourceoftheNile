"use client";

import { useState } from "react";
import { pastPresidents } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { Calendar, UserCheck, X, ArrowRight, Award } from "lucide-react";

export default function LeadershipPage() {
  const [selectedPresident, setSelectedPresident] = useState<typeof pastPresidents[0] | null>(null);

  // Curated premium background styles inspired by the concert poster reference
  const bannerStyles = [
    { bg: "from-slate-950 via-indigo-950 to-slate-900", accent: "text-pink-400", badge: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
    { bg: "from-slate-950 via-teal-950 to-slate-900", accent: "text-teal-400", badge: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
    { bg: "from-zinc-950 via-zinc-900 to-stone-950", accent: "text-amber-400", badge: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
    { bg: "from-slate-950 via-blue-950 to-indigo-950", accent: "text-cyan-400", badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    { bg: "from-stone-950 via-neutral-900 to-zinc-950", accent: "text-emerald-400", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[280px] md:h-[400px] flex items-center justify-center text-center overflow-hidden border-b border-slate-800"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80"
            alt="Leadership Hall of Fame"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0284C7] bg-sky-950/80 border border-sky-800/60 py-2 px-5 rounded-full inline-block mb-4 shadow-lg">
            Rotary Leadership Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" stagger={0.03} splitBy="words">
              Past Presidents Directory
            </ScrollFloat>
          </h1>
          <motion.p
            className="mt-3 max-w-xl mx-auto text-sm md:text-base text-slate-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Honoring the visionary leaders who have guided RC Source of the Nile since 1988.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Listing Section in Horizontal Concert Banner Style */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="space-y-6">
          {pastPresidents.map((president, index) => {
            const style = bannerStyles[index % bannerStyles.length];
            return (
              <motion.div
                key={president.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedPresident(president)}
                className={`group relative rounded-2xl md:rounded-3xl bg-gradient-to-r ${style.bg} border border-slate-800 hover:border-slate-600 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[160px] md:min-h-[200px]">
                  
                  {/* Left Block: Term & Role Badge */}
                  <div className="md:col-span-3 p-6 md:p-8 flex md:flex-col justify-between md:justify-center items-start border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-900/40">
                    <div>
                      <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border ${style.badge} inline-block mb-2`}>
                        Presidential Term
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                        {president.term}
                      </h3>
                    </div>
                    <div className="mt-0 md:mt-3 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>RC Source of the Nile</span>
                    </div>
                  </div>

                  {/* Middle Block: Name & Bio Snippet */}
                  <div className="md:col-span-6 p-6 md:p-8 space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase group-hover:text-sky-300 transition-colors">
                      {president.name}
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
                      {president.bio}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                      <span>View Presidential Record</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Right Block: Portrait Photo */}
                  <div className="md:col-span-3 h-44 md:h-full relative overflow-hidden flex items-center justify-end">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent z-10 md:block hidden" />
                    <Image
                      src={president.imageUrl}
                      alt={president.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* President Detail Popup Modal */}
      <AnimatePresence>
        {selectedPresident && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]"
            >
              {/* Modal Banner Header */}
              <div className="relative w-full h-72 md:h-80">
                <Image
                  src={selectedPresident.imageUrl}
                  alt={selectedPresident.name}
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedPresident(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-950 flex items-center justify-center text-white border border-slate-700 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-black uppercase tracking-widest bg-sky-600 text-white py-1.5 px-3 rounded-md mb-2 inline-block">
                    Term: {selectedPresident.term}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
                    {selectedPresident.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Presidential Overview & Legacy</h4>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {selectedPresident.bio}
                  </p>
                </div>

                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Club Leadership Excellence</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Served with utmost dedication, expanding community outreach, strengthening club fellowship, and driving impactful service projects across Jinja and the Source of the Nile region.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedPresident(null)}
                    className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold transition-colors cursor-pointer"
                  >
                    Close Record
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

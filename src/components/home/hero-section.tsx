"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Play, Search, Menu, ChevronUp, ChevronDown, MapPin, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { GradientWave } from "@/components/ui/gradient-wave";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/fellowship", label: "Fellowship" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
];

const carouselSlides = [
  {
    id: "01",
    title: "Community Outreach",
    subtitle: "By: Rotary District 9214",
    description: "Reaching out to serve our neighbors with compassion and care along the Source of the Nile.",
    image: "https://picsum.photos/1200/800?random=10",
    thumb: "https://picsum.photos/200/200?random=10",
    location: "Jinja Main Street, Uganda"
  },
  {
    id: "02",
    title: "Medical Camps",
    subtitle: "Healthcare Initiative",
    description: "Providing essential healthcare services, checkups, and medicine to underserved communities.",
    image: "https://picsum.photos/1200/800?random=12",
    thumb: "https://picsum.photos/200/200?random=12",
    location: "Community Hospital, Jinja"
  },
  {
    id: "03",
    title: "Youth Empowerment",
    subtitle: "Education & Skills",
    description: "Empowering the next generation through mentorship, digital literacy, and leadership training.",
    image: "https://picsum.photos/1200/800?random=13",
    thumb: "https://picsum.photos/200/200?random=13",
    location: "Jinja High School"
  },
  {
    id: "04",
    title: "Water & Sanitation",
    subtitle: "Clean Water Project",
    description: "Installing clean water boreholes and sanitation facilities in rural communities.",
    image: "https://picsum.photos/1200/800?random=14",
    thumb: "https://picsum.photos/200/200?random=14",
    location: "Nile Riverside Village"
  },
  {
    id: "05",
    title: "Environmental Care",
    subtitle: "Green Initiative",
    description: "Tree planting campaigns and riverbank conservation along the mighty Nile.",
    image: "https://picsum.photos/1200/800?random=15",
    thumb: "https://picsum.photos/200/200?random=15",
    location: "Source of the Nile Park"
  },
  {
    id: "06",
    title: "Rotary Fellowship",
    subtitle: "People of Action",
    description: "Connecting dedicated professionals and leaders for fellowship and community service.",
    image: "https://picsum.photos/1200/800?random=16",
    thumb: "https://picsum.photos/200/200?random=16",
    location: "Rotary Club House"
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = carouselSlides[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="relative w-full min-h-[750px] overflow-hidden bg-[#8C8C7E] py-8 md:py-16">
      {/* LAYER A: Ambient Backdrop (Blurred full bleed with scale-up and object-position) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute -inset-[15%] w-[130%] h-[130%]"
          >
            <Image
              src={currentSlide.image}
              alt="Ambience Backdrop"
              fill
              className="object-cover scale-110 filter blur-[18px] saturate-[0.55] brightness-[0.92]"
              style={{ objectPosition: "60% 25%" }}
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        {/* Olive overlay tint */}
        <div className="absolute inset-0 bg-[#6E7062]/25 mix-blend-multiply z-10" />
      </div>

      {/* LAYER B & C: Floating Card Container (inset ~22% vertical, ~4% horizontal) */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative bg-gradient-to-r from-[#E0F2FE] via-[#E0F2FE] to-[#BAE6FD] rounded-[32px] md:rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.25)] overflow-hidden border border-[#BAE6FD]/80 p-6 md:p-12">
          <GradientWave colors={["#38bdf8", "#bae6fd", "#e0f2fe", "#7dd3fc", "#38bdf8"]} className="absolute inset-0 z-0 opacity-75 pointer-events-none" />
          <div className="relative z-10">
          {/* Main Body Grid within Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[440px] md:min-h-[500px]">
            
            {/* Left Content Column (~45% width) */}
            <div className="lg:col-span-5 space-y-6 z-10 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-xs md:text-sm font-light tracking-wide italic text-[#0369A1]">
                    {currentSlide.subtitle}
                  </p>
                  
                  <h1 className="font-black text-4xl md:text-6xl tracking-tight text-[#0C4A6E] leading-[1.05]">
                    <ScrollFloat animationDuration={1} ease="back.inOut(2)" stagger={0.03} splitBy="words">
                      {currentSlide.title}
                    </ScrollFloat>
                  </h1>

                  <div className="pt-2">
                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0369A1] mb-1">
                      USEFUL INFORMATION
                    </h3>
                    <p className="text-sm md:text-base text-[#075985] leading-relaxed font-normal">
                      {currentSlide.description} Located at {currentSlide.location}, our dedicated members work hand in hand to create lasting change.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold rounded-full px-8 py-3 text-xs tracking-wider uppercase shadow-md transition-all"
                >
                  MORE
                </Button>
                <Button
                  size="lg"
                  className="bg-[#0C4A6E] hover:bg-black text-[#F0F9FF] rounded-full px-8 py-3 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current text-white" />
                  </span>
                  VIDEO
                </Button>
              </div>
            </div>

            {/* Center / Right Column (~55% width) - Sharp Hero Photo inside Card */}
            <div className="lg:col-span-7 relative h-[360px] md:h-[460px] rounded-[28px] overflow-hidden shadow-2xl border border-white/25">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 70%" }}
                    priority
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                  {/* Seamless blending gradient on the left edge matching reference card design */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#E0F2FE] via-[#E0F2FE]/60 to-transparent z-10 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Vertical Thumbnail Carousel & Index on right edge */}
              <div className="absolute right-4 inset-y-0 flex flex-col items-center justify-center gap-3 z-20">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-2 py-1">
                  {carouselSlides.map((slide, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                          isActive ? "border-white scale-110 shadow-lg ring-2 ring-[#C9A227]/60" : "border-white/50 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={slide.thumb}
                          alt={slide.title}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    );
                  })}
                </div>

                <button 
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Vertical Index Numbers Display */}
              <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1.5 text-[11px] font-mono font-bold text-white/80 bg-black/30 backdrop-blur-md px-2 py-3 rounded-full border border-white/10">
                {carouselSlides.map((slide, idx) => (
                  <span key={slide.id} className={idx === activeIndex ? "text-[#C9A227] font-black scale-110" : "text-white/60"}>
                    {slide.id}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer elements (bottom of card) */}
          <div className="mt-8 pt-6 border-t border-[#BAE6FD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#0369A1] gap-4">
            <div>
              <span className="font-extrabold uppercase tracking-widest text-[10px] text-[#0C4A6E] block mb-1">Social Network</span>
              <div className="flex items-center gap-3 text-[#0C4A6E]">
                <a href="#instagram" className="w-7 h-7 rounded-full bg-[#BAE6FD]/60 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold">in</a>
                <a href="#facebook" className="w-7 h-7 rounded-full bg-[#BAE6FD]/60 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold">o</a>
                <a href="#pinterest" className="w-7 h-7 rounded-full bg-[#BAE6FD]/60 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold">p</a>
                <a href="#whatsapp" className="w-7 h-7 rounded-full bg-[#BAE6FD]/60 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold">w</a>
              </div>
              <div className="w-12 h-1 bg-[#0284C7] mt-1.5 rounded-full" />
            </div>

            <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
              <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-[#0284C7] hover:text-white transition-colors shadow">
                <Play className="w-3.5 h-3.5 fill-current text-[#0C4A6E]" />
              </div>
              <p className="text-[11px] text-[#075985] max-w-[160px] leading-tight">
                Our Branding on the front-line. Together with Rotary Club.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Lower Part of Hero Section: Full-Width Image Card as requested */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        <motion.div
            className="relative w-full h-[300px] md:h-[540px] rounded-[32px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
            <Image
                src="https://picsum.photos/1980/1080?random=11"
                alt="Service project in the field"
                fill
                className="object-cover"
                data-ai-hint="community project"
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 md:p-12">
              <div className="text-white max-w-2xl">
                <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">Impact In Action</span>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">Transforming Lives Along the Nile</h2>
                <p className="text-white/80 text-sm md:text-base">Join hands with Rotarians across East Africa to deliver sustainable humanitarian projects.</p>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

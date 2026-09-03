"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Mail,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeaderTestimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

interface LeaderCarouselProps {
  leaders?: LeaderTestimonial[];
  className?: string;
}

const defaultLeaders: LeaderTestimonial[] = [
  {
    name: "Martin Asingwire",
    title: "Club President (2025-2026)",
    description:
      "Leading with passion and dedication to empower local communities along the Nile basin through impactful Rotary service, clean water initiatives, and sustainable community skilling.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
  {
    name: "Grace Namubiru",
    title: "President-Elect",
    description:
      "Committed to advancing our club's strategic vision, fostering international partnerships, and expanding youth empowerment and educational literacy programs across Jinja and beyond.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
  {
    name: "Julius Okello",
    title: "Club Secretary",
    description:
      "Ensuring seamless governance, transparent communication, and meticulous coordination across all community service projects and club fellowships.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
  {
    name: "Dr. Sarah Akello",
    title: "Community Service Director",
    description:
      "Spearheading vital healthcare outreaches, maternal child health camps, and sustainable environmental conservation efforts along the Source of the Nile.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "#",
    twitterUrl: "#",
  },
];

export function LeaderCarousel({ leaders = defaultLeaders, className }: LeaderCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % leaders.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + leaders.length) % leaders.length
    );

  const currentLeader = leaders[currentIndex];

  const socialIcons = [
    { icon: Linkedin, url: currentLeader.linkedinUrl, label: "LinkedIn" },
    { icon: Twitter, url: currentLeader.twitterUrl, label: "Twitter" },
    { icon: Github, url: currentLeader.githubUrl, label: "GitHub" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-neutral-800 flex-shrink-0 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentLeader.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentLeader.imageUrl}
                alt={currentLeader.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1 border border-slate-100 dark:border-border'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentLeader.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <span className="text-xs font-bold uppercase tracking-widest bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 py-1 px-3 rounded-full mb-3 inline-block">
                  Rotary Leadership
                </span>
                <h2 className='text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2'>
                  {currentLeader.name}
                </h2>

                <p className='text-sm font-semibold text-sky-600 dark:text-sky-400'>
                  {currentLeader.title}
                </p>
              </div>

              <p className='text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8'>
                {currentLeader.description}
              </p>

              <div className='flex space-x-4'>
                {socialIcons.filter(s => s.url).map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md'
                    aria-label={label}
                  >
                    <IconComponent className='w-5 h-5 text-white dark:text-slate-900' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden mb-6 shadow-lg'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentLeader.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentLeader.imageUrl}
                alt={currentLeader.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4 bg-white dark:bg-card rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-border'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentLeader.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 py-0.5 px-2.5 rounded-full mb-2 inline-block">
                Leadership
              </span>
              <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-1'>
                {currentLeader.name}
              </h2>
              
              <p className='text-xs font-semibold text-sky-600 dark:text-sky-400 mb-4'>
                {currentLeader.title}
              </p>
              
              <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6'>
                {currentLeader.description}
              </p>
              
              <div className='flex justify-center space-x-4'>
                {socialIcons.filter(s => s.url).map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-slate-900 dark:bg-slate-100 rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4 text-white dark:text-slate-900' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous leader'
          className='w-12 h-12 rounded-full bg-white dark:bg-card border border-slate-200 dark:border-border shadow-md flex items-center justify-center hover:bg-slate-50 dark:hover:bg-accent transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6 text-slate-700 dark:text-slate-200' />
        </button>

        {/* Dots */}
        <div className='flex gap-2'>
          {leaders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                index === currentIndex
                  ? "bg-sky-600 dark:bg-sky-400 w-8"
                  : "bg-slate-300 dark:bg-slate-700"
              )}
              aria-label={`Go to leader ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next leader'
          className='w-12 h-12 rounded-full bg-white dark:bg-card border border-slate-200 dark:border-border shadow-md flex items-center justify-center hover:bg-slate-50 dark:hover:bg-accent transition-colors cursor-pointer'
        >
          <ChevronRight className='w-6 h-6 text-slate-700 dark:text-slate-200' />
        </button>
      </div>
    </div>
  );
}


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Droplets,
  GraduationCap,
  HeartPulse,
  Menu,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import Section from "./section";

function PinIcon() {
  return (
    <svg
      className="destination-card__pin"
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21C12 21 19 14.8 19 8.8C19 4.94 15.87 2 12 2C8.13 2 5 4.94 5 8.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}

// Reusable Card Component precisely matching reference image 16:9 progressive blur style
const ValueCard = ({
  city,
  title,
  description,
  imageUrl,
  aiHint,
}: {
  city: string;
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className="destination-card group"
  >
    {/* Background photograph */}
    <Image
      className="destination-card__image"
      src={imageUrl}
      alt={title}
      fill
      draggable={false}
      data-ai-hint={aiHint}
    />

    {/* Large destination / keyword text sitting behind the image/content */}
    <div className="destination-card__city" aria-hidden="true">
      {city}
    </div>

    {/* Progressive blur layers */}
    <div className="destination-card__blur destination-card__blur--1" />
    <div className="destination-card__blur destination-card__blur--2" />
    <div className="destination-card__blur destination-card__blur--3" />

    {/* Soft bottom fade */}
    <div className="destination-card__bottom-fade" />

    {/* Foreground location information */}
    <div className="destination-card__content">
      <div className="destination-card__title-row">
        <PinIcon />
        <span className="destination-card__landmark">
          {title}
        </span>
      </div>

      <div className="destination-card__country">
        {description}
      </div>
    </div>
  </motion.article>
);

// Mobile App Mockup Component
const MobileAppMockup = () => (
  <div className="relative w-full max-w-sm mx-auto h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden">
    {/* Phone Frame */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200 p-4 flex flex-col gap-4">
      {/* Project Image 1 */}
      <div className="bg-white rounded-2xl p-2 w-full h-1/2 shadow-sm">
        <div className="w-full h-full bg-gray-200 rounded-xl relative overflow-hidden">
          <Image
            src="https://picsum.photos/400/300?random=50"
            alt="Rotary Project"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Project Image 2 */}
      <div className="bg-white rounded-2xl p-2 w-full h-1/2 shadow-sm">
        <div className="w-full h-full bg-gray-200 rounded-xl relative overflow-hidden">
          <Image
            src="https://picsum.photos/400/400?random=sunflower"
            alt="Rotary Community"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);

// Main Hero Content Component
const MainHeroContent = () => (
  <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-lg min-h-[400px] flex flex-col items-center text-center">
    {/* Main Tagline */}
    <div className="mb-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mx-1 md:mx-2 bg-blue-50 mb-2">Serve.</span>
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mx-1 md:mx-2 bg-blue-50 mb-2">Connect.</span>
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mx-1 md:mx-2 bg-blue-50 mb-2">Transform.</span>
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mx-1 md:mx-2 bg-blue-50 mb-2">Together.</span>
      </h1>
    </div>

    {/* Features List */}
    <div className="space-y-2 mb-6 flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm">Community-driven humanitarian projects across East Africa</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <span className="text-sm">Clean Water, Education & Healthcare Initiatives</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm">Rotary International Network Impact</span>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
      <Button className="rounded-full bg-blue-600 text-white px-6 hover:bg-blue-700">Become a Rotarian</Button>
      <Button variant="outline" className="rounded-full px-6 border-blue-600 text-blue-600 hover:bg-blue-50">
        Our Projects
      </Button>
    </div>

    {/* Bottom Message */}
    <div className="flex items-center gap-3 justify-center">
      <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">R</span>
        </div>
        <span className="text-xs md:text-sm font-medium">Service Above Self - People of Action 🌍</span>
      </div>
    </div>

    {/* Decorative Element */}
    <div className="absolute bottom-4 right-4 hidden sm:block">
      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default function RotaryImpactSection() {
  return (
    <Section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 space-y-16 md:space-y-20">
        {/* TOP HERO SECTION - Rotary Focused */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Mobile App Mockup */}
          <div className="flex justify-center">
            <MobileAppMockup />
          </div>

          {/* Right Column: Main Content */}
          <div className="mt-12 lg:mt-0">
            <MainHeroContent />
          </div>
        </div>

        {/* BOTTOM SECTION - Rotary Services */}
        <div className="bg-white rounded-3xl p-6 md:p-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold max-w-2xl text-center md:text-left">
              We empower local <span className="bg-blue-100 px-2 py-1 rounded">communities</span> & 
              <span className="bg-blue-100 px-2 py-1 rounded ml-2">changemakers</span> through Rotary service
            </h2>
            <Button variant="outline" className="mt-6 md:mt-0 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50">
              Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Rotary Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              city="WATER"
              title="Water & Sanitation"
              description="Clean water & sanitation along the Nile."
              imageUrl="https://picsum.photos/800/600?random=41"
              aiHint="water project"
            />
            <ValueCard
              city="EDUCATION"
              title="Education & Literacy"
              description="Schools, scholarships & youth literacy."
              imageUrl="https://picsum.photos/800/600?random=42"
              aiHint="education support"
            />
            <ValueCard
              city="HEALTH"
              title="Healthcare & Wellness"
              description="Medical care & community health outreach."
              imageUrl="https://picsum.photos/800/600?random=43"
              aiHint="healthcare outreach"
            />
          </div>

          {/* Rotary Focus Tags */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Rotary Foundation Grants</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Community-Led Solutions</span>
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">International Partnerships</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

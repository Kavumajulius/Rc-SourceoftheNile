
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

// Reusable Card Component
const ValueCard = ({
  number,
  icon: Icon,
  title,
  description,
  imageUrl,
  aiHint,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className="relative rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between h-[450px] bg-secondary group"
  >
    {/* Top Row: Number + Icon Button */}
    <div className="relative z-10">
      <div className="flex justify-between items-start">
        <span className="text-sm font-bold bg-background/50 text-foreground py-1 px-3 rounded-full backdrop-blur-sm">
          {`0${number}/`}
        </span>
        <Button
          size="icon"
          variant="outline"
          className="bg-background/50 backdrop-blur-sm rounded-full h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-45"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Icon + Title + Description */}
      <div className="absolute bottom-28 left-6 md:left-8">
        <Icon className="h-10 w-10 text-primary mb-3" />
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/80 max-w-[250px]">{description}</p>
      </div>
    </div>

    {/* Explore Button */}
    <div className="relative z-10">
      <Button
        variant="secondary"
        className="rounded-full bg-background/80 backdrop-blur-sm"
      >
        Explore <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>

    {/* Background Image */}
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      data-ai-hint={aiHint}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  </motion.div>
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
  <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-lg min-h-[400px]">
    {/* Main Tagline */}
    <div className="mb-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mr-2 bg-blue-50 mb-2">Serve.</span>
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mr-2 bg-blue-50 mb-2">Connect.</span>
        <ArrowRight className="inline h-6 w-6 md:h-8 md:w-8 ml-2 text-blue-600" />
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 mr-2 bg-blue-50 mb-2">Transform.</span>
        <span className="inline-block border-2 border-blue-600 rounded-full px-4 py-2 bg-blue-50">Together.</span>
      </h1>
    </div>

    {/* Features List */}
    <div className="space-y-2 mb-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm">Community-driven humanitarian projects across East Africa</span>
        <ArrowRight className="h-4 w-4 text-blue-600" />
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <span className="text-sm">Clean Water, Education & Healthcare Initiatives</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm">Rotary International Network Impact</span>
        <ArrowUpRight className="h-4 w-4 text-blue-600" />
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Button className="rounded-full bg-blue-600 text-white px-6 hover:bg-blue-700">Become a Rotarian</Button>
      <Button variant="outline" className="rounded-full px-6 border-blue-600 text-blue-600 hover:bg-blue-50">
        Our Projects <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>

    {/* Bottom Message */}
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">R</span>
        </div>
        <Button size="icon" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </Button>
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
              number="1"
              icon={Droplets}
              title="Water & Sanitation"
              description="Providing clean water access and sanitation facilities to underserved communities along the Nile basin."
              imageUrl="https://picsum.photos/800/600?random=41"
              aiHint="water project"
            />
            <ValueCard
              number="2"
              icon={GraduationCap}
              title="Education & Literacy"
              description="Supporting schools, scholarships, and educational programs that unlock potential in young minds."
              imageUrl="https://picsum.photos/800/600?random=42"
              aiHint="education support"
            />
            <ValueCard
              number="3"
              icon={HeartPulse}
              title="Healthcare & Wellness"
              description="Delivering medical care, health education, and wellness programs to strengthen communities."
              imageUrl="https://picsum.photos/800/600?random=43"
              aiHint="healthcare outreach"
            />
          </div>

          {/* Rotary Focus Tags */}
          <div className="flex flex-wrap gap-2 md:gap-4 mt-8 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Rotary Foundation Grants</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Community-Led Solutions</span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm">International Partnerships</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

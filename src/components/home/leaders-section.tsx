
"use client";

import Section from "./section";
import { LeaderCarousel, LeaderTestimonial } from "@/components/ui/profile-card-testimonial-carousel";

const rotaryLeaders: LeaderTestimonial[] = [
  {
    name: "Martin Asingwire",
    title: "Club President (2025-2026)",
    description:
      "Leading with passion and dedication to empower local communities along the Nile basin through impactful Rotary service, clean water initiatives, and sustainable community skilling.",
    imageUrl:
      "https://picsum.photos/600/600?random=51",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    githubUrl: "https://github.com",
  },
  {
    name: "Grace Namubiru",
    title: "President-Elect",
    description:
      "Committed to advancing our club's strategic vision, fostering international partnerships, and expanding youth empowerment and educational literacy programs across Jinja and beyond.",
    imageUrl:
      "https://picsum.photos/600/600?random=52",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    githubUrl: "https://github.com",
  },
  {
    name: "Julius Okello",
    title: "Club Secretary",
    description:
      "Ensuring seamless governance, transparent communication, and meticulous coordination across all community service projects and club fellowships.",
    imageUrl:
      "https://picsum.photos/600/600?random=53",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    githubUrl: "https://github.com",
  },
  {
    name: "Dr. Sarah Akello",
    title: "Community Service Director",
    description:
      "Spearheading vital healthcare outreaches, maternal child health camps, and sustainable environmental conservation efforts along the Source of the Nile.",
    imageUrl:
      "https://picsum.photos/600/600?random=54",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    githubUrl: "https://github.com",
  },
];

export default function LeadersSection() {
    return (
        <Section className="bg-secondary/50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950 py-1.5 px-4 rounded-full mb-3 inline-block">
                        Club Leadership
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
                        Meet Our Leaders
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
                        Dedicated Rotarians steering our mission of service above self along the Source of the Nile.
                    </p>
                </div>
                
                <LeaderCarousel leaders={rotaryLeaders} />
            </div>
        </Section>
    );
}


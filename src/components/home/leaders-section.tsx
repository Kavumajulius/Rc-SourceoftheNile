
"use client";

import Section from "./section";
import { LeaderCarousel, LeaderTestimonial } from "@/components/ui/profile-card-testimonial-carousel";

const rotaryLeaders: LeaderTestimonial[] = [
  {
    name: "Rtn Sarah Awebwa Nanja",
    title: "Vice President",
    description:
      "Serving as Vice President, steering club strategy and impactful community service along the Source of the Nile.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Ndimwibo Bob Felix",
    title: "Secretary & President-Elect",
    description:
      "Ensuring seamless club administration while preparing to lead our club as President-Elect for upcoming impactful initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn William Mugowa",
    title: "Treasurer",
    description:
      "Managing club financial records, budgeting, and accountability for our community development projects.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Joy Ogutu",
    title: "Club Administration",
    description:
      "Coordinating weekly fellowships, meeting logistics, and member engagement programs.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Irene Nairuba",
    title: "Membership Chair",
    description:
      "Driving membership growth, retention, and orientation of new visionary Rotarians into our fellowship.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Rose Kigere",
    title: "Service Projects Director",
    description:
      "Overseeing high-impact community projects including water boreholes, health camps, and educational support.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Otode Tom",
    title: "TRF Director",
    description:
      "Championing The Rotary Foundation (TRF), annual giving, and global grant project sponsorships.",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Julius Kigere",
    title: "Public Image",
    description:
      "Enhancing club visibility across media platforms and promoting our community impact stories.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "Rtn Doreen Naiwumbwe",
    title: "Sergeant at Arms",
    description:
      "Maintaining order, fellowship decorum, and warm hospitality during club meetings and weekly gatherings.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  {
    name: "IPP Rtn Nashir Muyimba",
    title: "Club Trainer",
    description:
      "Mentoring members and providing Rotary education and leadership development based on past presidential experience.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
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


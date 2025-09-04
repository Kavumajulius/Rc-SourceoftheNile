
"use client";

import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import ImpactStatsSection from "@/components/home/impact-stats-section";
import MembershipSection from "@/components/home/membership-section";
import CommunityProjectsSection from "@/components/home/community-projects-section";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <ImpactStatsSection />
      <CommunityProjectsSection />
      <MembershipSection />
      <ContactSection />
    </div>
  );
}

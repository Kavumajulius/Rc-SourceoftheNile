
"use client";

import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import ImpactStatsSection from "@/components/home/impact-stats-section";
import MembershipSection from "@/components/home/membership-section";
import SignatureProjectsSection from "@/components/home/signature-projects-section";
import FellowshipSection from "@/components/home/fellowship-section";
import LeadersSection from "@/components/home/leaders-section";
import TestimonialSection from "@/components/home/testimonial-section";
import ValuePropSection from "@/components/home/value-prop-section";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <ValuePropSection />
      <SignatureProjectsSection />
      <MembershipSection />
      <FellowshipSection />
      <LeadersSection />
      <ImpactStatsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}

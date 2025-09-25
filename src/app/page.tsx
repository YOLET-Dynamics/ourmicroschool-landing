"use client";

import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
}

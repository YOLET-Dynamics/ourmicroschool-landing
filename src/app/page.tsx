import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PersonasSection />
      <FeaturesSection />
      <WhyChooseSection />
      <ContactSection />
    </>
  );
}

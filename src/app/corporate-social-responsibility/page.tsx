"use client";

import Link from "next/link";
import { Globe, Heart, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FeatureCard,
  GradientText,
  Section,
  SectionHeading,
} from "@/components/layout";

const pillars = [
  {
    icon: Heart,
    title: "Educational access",
    description: "Breaking down barriers to quality learning for underserved communities.",
  },
  {
    icon: Sprout,
    title: "Environmental stewardship",
    description: "Promoting sustainable practices in education and operations.",
  },
  {
    icon: Users,
    title: "Community engagement",
    description: "Partnering with local organizations and educational institutions.",
  },
  {
    icon: Globe,
    title: "Global citizenship",
    description: "Fostering cultural understanding and global perspectives.",
  },
];

export default function CSRPage() {
  return (
    <>
      <Section spacing="tight">
        <SectionHeading
          as="h1"
          eyebrow="Social impact"
          title={
            <>
              Education that{" "}
              <GradientText>lifts every community.</GradientText>
            </>
          }
          lead="Programs that broaden access to thoughtful, learner-led education for every community."
        />
      </Section>

      <Section spacing="tight">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              tone={i % 2 === 0 ? "accent" : "primary"}
            />
          ))}
        </div>
      </Section>

      <Section spacing="tight" size="narrow">
        <div className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-10 md:p-14 text-center">
          <SectionHeading
            eyebrow="Coming soon"
            title={
              <>
                <GradientText>Initiatives</GradientText> in motion.
              </>
            }
            lead="We're shaping programs that broaden access to thoughtful, learner-led education. Stay close."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 text-base font-medium">
              <Link href="/contact">Get notified</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-12 px-7 text-base font-medium">
              <Link href="/partners">Partner with us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

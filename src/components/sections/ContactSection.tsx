import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GradientText,
  Orb,
  Section,
  SectionHeading,
} from "@/components/layout";

const OMS_APP_URL =
  process.env.NEXT_PUBLIC_OMS_URL ?? "https://app.ourmicroschool.com";

export function ContactSection() {
  return (
    <Section id="contact" size="narrow" className="relative overflow-hidden">
      <Orb tone="primary" size="lg" className="-bottom-32 left-1/2 -translate-x-1/2" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 sm:p-10 md:p-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(50%_100%_at_50%_0%,oklch(var(--primary)/0.12)_0%,transparent_100%)]"
        />
        <div className="relative">
          <SectionHeading
            eyebrow="Get started"
            title={
              <>
                Bring <GradientText>calm</GradientText> to your microschool.
              </>
            }
            lead="Open the app to start planning, or reach out and we'll help you get going."
          />
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 text-base font-medium">
              <a href={OMS_APP_URL} target="_blank" rel="noopener noreferrer">
                Open OurMicroSchool
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 px-7 text-base font-medium">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

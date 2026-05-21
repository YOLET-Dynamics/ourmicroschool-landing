import { GraduationCap, Smile, Target } from "lucide-react";
import {
  GradientText,
  IconBadge,
  Section,
  SectionHeading,
} from "@/components/layout";

const points = [
  {
    icon: Target,
    title: "Personalized learning playbooks",
    description:
      "Every learner gets a tailored path, progress checkpoints, and mentorship moments — orchestrated from one dashboard.",
  },
  {
    icon: GraduationCap,
    title: "All-in-one microschool hub",
    description:
      "Plan curriculum, automate communication, and keep families aligned with real-time insights and beautiful reports.",
  },
  {
    icon: Smile,
    title: "Built for families, guides, and learners",
    description:
      "From coaches to caregivers, everyone gets a simple, delightful experience on every device.",
  },
];

export function WhyChooseSection() {
  return (
    <Section id="why" tone="muted">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="Why OurMicroSchool"
            title={
              <>
                A platform{" "}
                <GradientText>your community will love.</GradientText>
              </>
            }
            lead="Calm, considered tools that respect the time of guides and parents — and the curiosity of learners."
          />
        </div>

        <ul className="lg:col-span-7 space-y-3">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-5 rounded-3xl border border-border/60 bg-card p-6 md:p-7"
            >
              <IconBadge icon={point.icon} tone="primary" size="md" className="shrink-0" />
              <div>
                <h3 className="text-h3 mb-2">{point.title}</h3>
                <p className="text-body text-muted-foreground">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

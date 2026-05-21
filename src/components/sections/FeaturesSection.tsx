import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle,
  MessageSquare,
  Target,
  Users,
} from "lucide-react";
import {
  FeatureCard,
  GradientText,
  Section,
  SectionHeading,
} from "@/components/layout";

const features = [
  {
    icon: Calendar,
    title: "Cadence planning",
    description:
      "Run your entire term — sprints, studios, expeditions — without spreadsheets.",
  },
  {
    icon: BookOpen,
    title: "Immersive learning",
    description:
      "Studio-style projects, seminars, and badges that spark curiosity every week.",
  },
  {
    icon: Target,
    title: "Adaptive skill building",
    description:
      "Surface the next best step for every learner with evidence-backed recommendations.",
  },
  {
    icon: BarChart3,
    title: "Living portfolios",
    description:
      "Share beautiful evidence of growth with families and advisory boards.",
  },
  {
    icon: CheckCircle,
    title: "Feedback loops",
    description:
      "Automate formative feedback and reflection prompts that keep momentum high.",
  },
  {
    icon: Users,
    title: "Community coordination",
    description:
      "Sync caregivers, guides, and specialists with shared calendars and gentle nudges.",
  },
  {
    icon: Bell,
    title: "Moments that matter",
    description:
      "Automated nudges and celebrations that keep every stakeholder engaged.",
  },
  {
    icon: MessageSquare,
    title: "Secure communication",
    description:
      "Replace text threads with thoughtful updates that keep everyone aligned.",
  },
] as const;

export function FeaturesSection() {
  return (
    <Section id="features" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-dots mask-fade-radial pointer-events-none absolute inset-0 -z-10"
      />
      <SectionHeading
        eyebrow="Everything in one place"
        title={
          <>
            Everything you need to{" "}
            <GradientText>run a beautiful microschool.</GradientText>
          </>
        }
        lead="Tools that fit how guides plan, how families stay close, and how learners grow."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            tone={index % 2 === 0 ? "accent" : "primary"}
          />
        ))}
      </div>
    </Section>
  );
}

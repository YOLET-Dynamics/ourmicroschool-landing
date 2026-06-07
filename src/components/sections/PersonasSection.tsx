import {
  BookOpenCheck,
  Check,
  GraduationCap,
  Heart,
  type LucideIcon,
} from "lucide-react";
import {
  GradientText,
  IconBadge,
  Orb,
  Section,
  SectionHeading,
} from "@/components/layout";

interface Persona {
  icon: LucideIcon;
  audience: string;
  title: string;
  description: string;
  points: string[];
  tone: "accent" | "primary";
}

const personas: Persona[] = [
  {
    icon: GraduationCap,
    audience: "For learners",
    title: "A place to grow at their pace",
    description:
      "Tools that help every learner see their progress and take ownership of it.",
    points: [
      "Personalized weekly plan",
      "Living portfolio of work",
      "Reflection prompts that build agency",
    ],
    tone: "accent",
  },
  {
    icon: BookOpenCheck,
    audience: "For guides",
    title: "Run your studio without spreadsheets",
    description:
      "Plan your week, capture evidence, and stay close to every learner — all in one place.",
    points: [
      "Cadence + curriculum planner",
      "Formative feedback loops",
      "Shared notes across guides",
    ],
    tone: "primary",
  },
  {
    icon: Heart,
    audience: "For families",
    title: "See the journey, not just the grades",
    description:
      "Clear weekly updates that bring families into the learning — not just the report card.",
    points: [
      "Weekly highlights & nudges",
      "Real evidence of growth",
      "Secure, private communication",
    ],
    tone: "accent",
  },
];

export function PersonasSection() {
  return (
    <Section id="for-everyone" className="relative overflow-hidden">
      <Orb tone="accent" size="xl" className="left-1/2 top-32 -translate-x-1/2 opacity-70" />
      <SectionHeading
        eyebrow="For learners, guides & families"
        title={
          <>
            One platform.{" "}
            <GradientText>Three experiences, each done right.</GradientText>
          </>
        }
        lead="Each role gets exactly what they need — and nothing they don't."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {personas.map((persona) => (
          <PersonaCard key={persona.audience} persona={persona} />
        ))}
      </div>
    </Section>
  );
}

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-foreground/15 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_oklch(var(--foreground)/0.12)]">
      <IconBadge icon={persona.icon} tone={persona.tone} size="md" />
      <p className="mt-6 text-eyebrow text-muted-foreground/70">
        {persona.audience}
      </p>
      <h3 className="mt-2 text-h3 text-balance">{persona.title}</h3>
      <p className="mt-3 text-body text-muted-foreground">
        {persona.description}
      </p>

      <ul role="list" className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
        {persona.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm">
            <Check
              className={
                "mt-0.5 h-4 w-4 shrink-0 " +
                (persona.tone === "accent" ? "text-accent" : "text-primary")
              }
              strokeWidth={2.5}
              aria-hidden
            />
            <span className="text-foreground/85">{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

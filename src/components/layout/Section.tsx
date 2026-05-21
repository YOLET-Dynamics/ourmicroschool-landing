import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
  spacing?: "default" | "tight" | "loose" | "none";
  tone?: "default" | "muted";
}

const spacingMap = {
  none: "py-0",
  tight: "py-14 md:py-20",
  default: "py-20 md:py-28",
  loose: "py-24 md:py-36",
} as const;

const toneMap = {
  default: "",
  muted: "bg-muted/40",
} as const;

export function Section({
  id,
  className,
  innerClassName,
  children,
  size = "default",
  spacing = "default",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24", spacingMap[spacing], toneMap[tone], className)}
    >
      <Container size={size} className={innerClassName}>
        {children}
      </Container>
    </section>
  );
}

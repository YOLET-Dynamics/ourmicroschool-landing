import { cn } from "@/lib/utils";

interface OrbProps {
  tone?: "accent" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
  intensity?: "soft" | "medium";
  className?: string;
}

const sizes = {
  sm: "h-64 w-64",
  md: "h-96 w-96",
  lg: "h-[32rem] w-[32rem]",
  xl: "h-[44rem] w-[44rem]",
} as const;

const tones = {
  accent: {
    soft: "bg-accent/[0.06]",
    medium: "bg-accent/[0.10]",
  },
  primary: {
    soft: "bg-primary/[0.06]",
    medium: "bg-primary/[0.10]",
  },
} as const;

export function Orb({
  tone = "accent",
  size = "md",
  intensity = "soft",
  className,
}: OrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-3xl",
        sizes[size],
        tones[tone][intensity],
        className
      )}
    />
  );
}

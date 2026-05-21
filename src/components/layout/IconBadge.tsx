import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: "accent" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5",
  md: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
  lg: "h-14 w-14 [&_svg]:h-7 [&_svg]:w-7",
} as const;

const tones = {
  accent: "bg-accent/10 text-accent",
  primary: "bg-primary/10 text-primary",
} as const;

export function IconBadge({ icon: Icon, tone = "accent", size = "md", className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl",
        sizes[size],
        tones[tone],
        className
      )}
    >
      <Icon strokeWidth={1.75} aria-hidden />
    </span>
  );
}

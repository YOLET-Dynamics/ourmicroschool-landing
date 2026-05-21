import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBadge } from "./IconBadge";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  tone?: "accent" | "primary";
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  tone = "accent",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-border/60 bg-card p-6 md:p-8 transition-all duration-300",
        "hover:border-foreground/15 hover:shadow-[0_8px_30px_-12px_oklch(var(--foreground)/0.12)]",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {icon && <IconBadge icon={icon} tone={tone} className="mb-5" />}
      <h3 className="text-h3 mb-2">{title}</h3>
      <p className="text-body text-muted-foreground">{description}</p>
    </div>
  );
}

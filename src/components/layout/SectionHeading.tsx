import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && <p className="text-eyebrow mb-4">{eyebrow}</p>}
      <Heading className={as === "h1" ? "text-display" : "text-h2"}>{title}</Heading>
      {lead && <p className="text-lead mt-5">{lead}</p>}
    </div>
  );
}

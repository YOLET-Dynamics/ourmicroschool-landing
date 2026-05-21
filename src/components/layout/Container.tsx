import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({ className, children, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-8 lg:px-10", sizes[size], className)}>
      {children}
    </div>
  );
}

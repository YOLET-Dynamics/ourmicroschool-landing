import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";

const proofs = [
  "Built with educators",
  "Family-first design",
  "FERPA-aware",
  "Made in Virginia",
];

export function TrustStrip() {
  return (
    <div className="py-20 md:py-24">
      <Container>
        <p className="text-eyebrow text-center text-muted-foreground/70">
          Trusted by communities reimagining learning
        </p>

        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-5 text-sm font-medium text-foreground/80 md:flex md:max-w-none md:flex-wrap md:items-center md:justify-center md:gap-x-12"
        >
          {proofs.map((proof) => (
            <li key={proof} className="flex items-center gap-2.5">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-accent/80"
                strokeWidth={2}
                aria-hidden
              />
              <span>{proof}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

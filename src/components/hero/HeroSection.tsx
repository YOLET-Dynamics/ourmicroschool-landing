"use client";

import { Button } from "@/components/ui/button";
import { GradientText, Orb, Section } from "@/components/layout";
import { ArrowRight, BookOpen, Calendar, MessageSquare, School } from "lucide-react";

const OMS_APP_URL =
  process.env.NEXT_PUBLIC_OMS_URL ?? "https://app.ourmicroschool.com";

export function HeroSection() {
  return (
    <Section spacing="tight" className="relative overflow-hidden">
      {/* Soft ambient gradient — deference, not decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(var(--accent)/0.10)_0%,transparent_70%)]"
      />
      <Orb tone="accent" size="lg" className="-top-24 -right-32 hidden md:block" />
      <Orb tone="primary" size="lg" className="top-[28rem] -left-32 hidden md:block" />

      <div className="flex flex-col items-center text-center animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-meta backdrop-blur">
          <School className="h-3.5 w-3.5 text-accent" aria-hidden />
          Built for modern microschools
        </span>

        <h1 className="text-display mt-8 max-w-3xl text-foreground">
          A <GradientText>calm home</GradientText>
          <br className="hidden sm:block" />
          for the whole microschool.
        </h1>

        <p className="text-lead mt-6 max-w-2xl text-pretty">
          Plan curriculum, share weekly progress, and stay close to every family —
          all from one beautifully simple workspace.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 px-7 text-base font-medium shadow-sm"
          >
            <a href={OMS_APP_URL} target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 px-7 text-base font-medium"
          >
            <a href="/#features">See how it works</a>
          </Button>
        </div>
      </div>

      <ProductMock className="mt-20 animate-fade-up animate-delay-200" />
    </Section>
  );
}

function ProductMock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative mx-auto max-w-5xl">
        {/* Reflection / glow */}
        <div
          aria-hidden
          className="absolute inset-x-12 -bottom-10 h-24 rounded-[3rem] bg-foreground/10 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_30px_80px_-20px_oklch(var(--foreground)/0.15)]">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/60" />
            <span className="h-3 w-3 rounded-full bg-accent/60" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="ml-3 text-xs text-muted-foreground">
              app.ourmicroschool.com — This week
            </span>
          </div>

          <div className="grid grid-cols-12 gap-4 p-4 sm:gap-6 sm:p-6 md:p-8">
            {/* Sidebar — desktop only */}
            <aside className="hidden md:col-span-3 md:block space-y-2">
              {[
                { label: "Plan", active: true },
                { label: "Classrooms" },
                { label: "Families" },
                { label: "Progress" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors " +
                    (item.active
                      ? "bg-accent/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted")
                  }
                >
                  <span
                    className={
                      "h-2 w-2 rounded-full " +
                      (item.active ? "bg-accent" : "bg-border")
                    }
                  />
                  {item.label}
                </div>
              ))}
            </aside>

            {/* Main */}
            <div className="col-span-12 md:col-span-9 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-eyebrow">This week · Studio cohort</p>
                  <h4 className="text-h3 mt-1.5">Spring expedition: Watershed</h4>
                </div>
                <div className="hidden md:flex -space-x-2">
                  {["bg-accent/30", "bg-primary/30", "bg-foreground/20"].map((c, i) => (
                    <span
                      key={i}
                      className={`h-8 w-8 rounded-full border-2 border-card ${c}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <MockCard icon={Calendar} title="Mon · Field study" meta="9:00 – 11:30" />
                <MockCard icon={BookOpen} title="Seminar reading" meta="Due Wed" tone="primary" />
                <MockCard icon={MessageSquare} title="Family update" meta="Drafted" />
              </div>

              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <div className="flex items-center justify-between text-meta">
                  <span>Cohort progress</span>
                  <span className="text-foreground">78%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-accent to-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockCard({
  icon: Icon,
  title,
  meta,
  tone = "accent",
}: {
  icon: typeof Calendar;
  title: string;
  meta: string;
  tone?: "accent" | "primary";
}) {
  const toneClass = tone === "accent" ? "text-accent" : "text-primary";
  return (
    <div className="rounded-2xl border border-border/60 bg-background p-4">
      <Icon className={`h-4 w-4 ${toneClass}`} strokeWidth={1.75} />
      <p className="mt-3 text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
    </div>
  );
}

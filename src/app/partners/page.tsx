"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, ExternalLink, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientText, Section, SectionHeading } from "@/components/layout";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  websiteUrl: string | null;
  category: string;
  location: string;
  established: string;
  highlights: string[];
}

const partnersData: Partner[] = [
  {
    id: "r2r",
    name: "Root to Rise Microschool",
    logoUrl: "/r2r.png",
    description: `Root to Rise Microschool is a holistic educational community committed to raising conscious, confident, and connected young people. We exist to reimagine education by centering cultural wisdom, wellness, creativity, and community throughout the entire learning journey.

Our mission is to nurture rooted children who rise into their fullest potential — grounded in identity, guided by purpose, and equipped for liberation. We believe in the transformative power of ancestral wisdom, radical self-love, and collective care.

At Root to Rise, we create brave and affirming learning spaces where children — and their families — can reconnect with their innate brilliance and co-create new paradigms of education.`,
    websiteUrl: null,
    category: "Microschool Partner",
    location: "Community-Based",
    established: "2023",
    highlights: ["Holistic Education", "Cultural Wisdom", "Community-Centered", "Identity-Focused"],
  },
];

export default function PartnersPage() {
  return (
    <>
      <Section spacing="tight">
        <SectionHeading
          as="h1"
          eyebrow="Partners"
          title={
            <>
              Better learning,{" "}
              <GradientText>built together.</GradientText>
            </>
          }
          lead="We partner with organizations that share our commitment to holistic, learner-led education."
        />
      </Section>

      <Section spacing="tight">
        <div className="space-y-6">
          {partnersData.length > 0 ? (
            partnersData.map((partner) => <PartnerCard key={partner.id} partner={partner} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </Section>

      <PartnerInquiry />
    </>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = partner.description
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-background">
          <Image
            src={partner.logoUrl || "/placeholder.svg"}
            alt={`${partner.name} logo`}
            fill
            className="object-contain p-3"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <p className="text-eyebrow">{partner.category}</p>
            <h2 className="text-h2 mt-2">{partner.name}</h2>
          </div>

          <div className="flex flex-wrap gap-3 text-meta">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {partner.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> Est. {partner.established}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {partner.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {highlight}
              </span>
            ))}
          </div>

          {partner.websiteUrl && (
            <Button variant="outline" size="sm" asChild className="rounded-full">
              <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit website
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4 text-body text-muted-foreground">
        {(isExpanded ? paragraphs : paragraphs.slice(0, 1)).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {paragraphs.length > 1 && (
        <Button
          variant="link"
          size="sm"
          className="mt-2 h-auto p-0 text-accent"
          onClick={() => setIsExpanded((v) => !v)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-16 text-center">
      <h2 className="text-h2">Building our network</h2>
      <p className="text-lead mx-auto mt-4 max-w-md">
        We're currently growing our circle of partner schools and communities. Check back soon.
      </p>
    </div>
  );
}

function PartnerInquiry() {
  const [form, setForm] = useState({ name: "", organization: "", email: "", message: "" });

  const handleChange = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Section spacing="tight" size="narrow">
      <div className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8 md:p-12">
        <SectionHeading
          eyebrow="Partner with us"
          title={
            <>
              Let's <GradientText>build something</GradientText> together.
            </>
          }
          lead="Tell us about your organization and we'll be in touch."
        />
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Contact name">
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-11 rounded-xl"
              />
            </Field>
            <Field label="Organization">
              <Input
                placeholder="Organization name"
                value={form.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                required
                className="h-11 rounded-xl"
              />
            </Field>
          </div>
          <Field label="Email">
            <Input
              type="email"
              placeholder="you@organization.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="h-11 rounded-xl"
            />
          </Field>
          <Field label="Partnership proposal">
            <Textarea
              placeholder="Tell us how you'd like to partner with us…"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className="min-h-36 rounded-2xl resize-none"
            />
          </Field>
          <Button type="submit" className="h-12 w-full text-base font-medium">
            <Mail className="mr-1.5 h-4 w-4" aria-hidden />
            Submit inquiry
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { toast } from "sonner";

interface FooterProps {
  navItems: string[];
  handleComingSoonClick: () => void;
}

function navHref(item: string): string {
  const slug = item.toLowerCase().replace(/\s+/g, "-");
  if (slug === "partners") return "/partners";
  if (slug === "contact") return "/contact";
  return `/#${slug}`;
}

const SOCIAL_LINKS = [
  { label: "Twitter", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
] as const;

const Footer: React.FC<FooterProps> = ({ navItems, handleComingSoonClick }) => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      toast.error("Email required", {
        description: "Please enter your email to subscribe.",
      });
      return;
    }
    try {
      setIsSubscribing(true);
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }
      toast.success("Thanks for joining!", {
        description: "We'll send new updates straight to your inbox.",
      });
      setEmail("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again later.";
      toast.error("Subscription failed", { description: message });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logos/OMS_LogoDesign_01-08.png"
                alt="OurMicroSchool logo"
                width={64}
                height={64}
                className="h-12 w-12"
              />
              <span className="font-display text-xl font-bold tracking-tight">
                ourmicroschool
              </span>
            </Link>
            <p className="text-body text-muted-foreground max-w-sm">
              <span className="font-medium text-foreground/80">
                OurMicroSchool (OMS)
              </span>{" "}
              — the operating system for modern microschools. Built for guides,
              parents, and learners.
            </p>
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={handleComingSoonClick}
                  aria-label={`${label} (coming soon)`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 gap-8 md:gap-10 md:grid-cols-1">
            <FooterColumn title="Product">
              {navItems.map((item) => (
                <FooterLink key={item} href={navHref(item)}>
                  {item}
                </FooterLink>
              ))}
              <FooterLink href="/corporate-social-responsibility">CSR</FooterLink>
            </FooterColumn>

            <FooterColumn title="Legal">
              <FooterButton onClick={handleComingSoonClick}>
                Terms of Service
              </FooterButton>
              <FooterButton onClick={handleComingSoonClick}>
                Privacy Policy
              </FooterButton>
            </FooterColumn>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-foreground">
              Stay in the loop
            </p>
            <p className="mt-2 text-meta">
              Product updates, resources, and launch invites. No spam, ever.
            </p>
            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={handleNewsletterSubmit}
            >
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 rounded-xl flex-1"
                required
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="h-11 rounded-xl px-5 font-medium"
              >
                {isSubscribing ? "Joining…" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 text-meta md:flex-row md:items-center md:gap-6">
            <span>
              © {new Date().getFullYear()} OurMicroSchool, a product of{" "}
              <span className="text-foreground/80">SYMVERGE PLATFORMS LLC</span>.
              All rights reserved.
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden /> Virginia, USA
            </span>
          </div>
          <p className="text-meta">
            Built by{" "}
            <Link
              href="https://yoletent.com"
              className="text-foreground/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOLET Labs
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-eyebrow text-muted-foreground/70 mb-4">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </button>
    </li>
  );
}

export default React.memo(Footer);

"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FooterProps {
  navItems: string[];
  sectionAnimation: any;
  handleComingSoonClick: () => void;
}

const Footer: React.FC<FooterProps> = ({
  navItems,
  sectionAnimation,
  handleComingSoonClick,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newsletterEmail) {
      toast.error("Email required", { description: "Please enter your email to subscribe." });
      return;
    }

    try {
      setIsSubscribing(true);
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to subscribe right now.");
      }

      toast.success("Thanks for joining!", {
        description: "We'll send new updates straight to your inbox.",
      });
      setNewsletterEmail("");
    } catch (error: any) {
      toast.error("Subscription failed", {
        description: error.message ?? "Please try again later.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <motion.footer
      {...sectionAnimation}
      className="py-16 px-4 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logos/OMS_LogoDesign_01-08.png"
                alt="OurMicroSchool logo"
                width={96}
                height={96}
                className="h-20 w-20"
                priority
              />
              <span className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                ourmicroschool
              </span>
            </div>
            <p className="text-muted-foreground">
              The complete operating system for your family's homeschooling success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#coming-soon"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item.toLowerCase() === "partners"
                        ? "/partners"
                        : item.toLowerCase() === "contact"
                        ? "/contact"
                        : `/#${item.toLowerCase().replace(/\\s+/g, "-")}`
                    }
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/corporate-social-responsibility"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  CSR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#coming-soon"
                  onClick={handleComingSoonClick}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/#coming-soon"
                  onClick={handleComingSoonClick}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="mt-1 text-accent flex-shrink-0"
                />
                <span>Incorporated in Virginia, USA</span>
              </div>
              <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                <label className="block text-sm font-semibold text-foreground">
                  Join our newsletter
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="sm:flex-1"
                    required
                  />
                  <Button type="submit" disabled={isSubscribing} className="sm:w-auto w-full">
                    {isSubscribing ? "Joining..." : "Stay Updated"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Product updates, resources, and launch invites. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} OurMicroSchool, a product of SYMVERGE
            Platform L.L.C. All rights reserved.
          </p>
          <p className="text-muted-foreground">
            Built by{" "}
            <Link
              href="https://yoletent.com"
              className="text-accent hover:underline transition-all duration-200 hover:scale-105 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOLET Labs
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);

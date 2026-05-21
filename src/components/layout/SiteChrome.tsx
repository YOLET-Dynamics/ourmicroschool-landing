"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const navItems = ["Features", "Partners", "Contact"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const handleComingSoonClick = useCallback(() => {
    toast.info("Coming soon!", {
      description: "This feature is under development and will be available shortly.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
      />
      <main className="site-content">{children}</main>
      <Footer navItems={navItems} handleComingSoonClick={handleComingSoonClick} />
    </div>
  );
}

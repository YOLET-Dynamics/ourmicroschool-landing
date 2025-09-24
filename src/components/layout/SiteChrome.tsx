"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const navItems = ["Features", "Partners", "Contact"];
const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const handleComingSoonClick = useCallback(() => {
    toast.info("Coming soon!", {
      description: "This feature is under development and will be available shortly.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        handleComingSoonClick={handleComingSoonClick}
      />
      <main className="site-content">{children}</main>
      <Footer
        navItems={navItems}
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </div>
  );
}



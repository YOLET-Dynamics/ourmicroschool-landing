"use client";

import { useState } from "react";
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

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description:
        "This feature is under development and will be available shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        handleComingSoonClick={handleComingSoonClick}
      />
      {children}
      <Footer
        navItems={navItems}
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </div>
  );
}

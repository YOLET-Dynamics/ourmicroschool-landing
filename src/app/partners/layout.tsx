"use client";

import { useState, useEffect, useCallback } from "react";
import { Orbitron } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster, toast } from "sonner"; // Import toast

const orbitron = Orbitron({ subsets: ["latin"] });

const navItems = ["Features", "Partners", "Contact"]; // Consistent with page.tsx

// sectionAnimation can be defined here if Footer needs it, or passed as undefined/null if not critical for partners page
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description:
        "This feature is under development and will be available shortly.",
    });
  };

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <Header
        navItems={navItems}
        orbitron={orbitron}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        handleComingSoonClick={handleComingSoonClick}
      />
      <main>{children}</main>
      <Footer
        navItems={navItems}
        orbitron={orbitron}
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </>
  );
}

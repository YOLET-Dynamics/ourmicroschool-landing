"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  navItems: string[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
  handleComingSoonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMenuOpen,
  toggleMenu,
  isScrolled,
  handleComingSoonClick,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed max-w-7xl mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "floating-nav"
              : "mx-4 rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-sm shadow"
          }`}
        >
          <div
            className={`max-w-6xl mx-auto px-4 sm:px-6 ${
              isScrolled ? "py-3" : "py-4"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logos/OMS_LogoDesign_01-09.png"
                  alt="OMS logo"
                  width={72}
                  height={72}
                  className="h-18 w-18"
                  priority
                />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={
                      item.toLowerCase() === "partners"
                        ? "/partners"
                        : `/#${item.toLowerCase().replace(/\\s+/g, "-")}`
                    }
                    className="text-foreground hover:text-accent transition-colors duration-200 relative group"
                    onClick={(e) =>
                      handleNavClick(
                        e,
                        item.toLowerCase() === "partners"
                          ? "/partners"
                          : `/#${item.toLowerCase().replace(/\\s+/g, "-")}`
                      )
                    }
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <Link href="/login" passHref>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-foreground hover:text-accent hover:bg-accent/10 rounded-full transition-colors duration-200 border-gray-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="#contact" passHref>
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                    onClick={handleComingSoonClick}
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 mobile-menu-overlay z-40">
            <div className="bg-white mx-4 mt-2 rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={
                      item.toLowerCase() === "partners"
                        ? "/partners"
                        : `/#${item.toLowerCase().replace(/\\s+/g, "-")}`
                    }
                    className="text-lg text-gray-700 hover:text-accent transition-colors py-2"
                    onClick={(e) => {
                      toggleMenu();
                      handleNavClick(
                        e,
                        item.toLowerCase() === "partners"
                          ? "/partners"
                          : `/#${item.toLowerCase().replace(/\\s+/g, "-")}`
                      );
                    }}
                  >
                    {item}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link href="#contact" passHref>
                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-3"
                      onClick={() => {
                        handleComingSoonClick();
                        toggleMenu();
                      }}
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link href="/login" passHref>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full text-gray-700 hover:text-accent hover:bg-accent/10 rounded-full mt-2 transition-colors duration-200 border-gray-300"
                      onClick={() => toggleMenu()}
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default React.memo(Header);

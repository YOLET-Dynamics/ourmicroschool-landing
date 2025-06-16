"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface NavItem {
  toLowerCase: () => string;
  replace: (pattern: RegExp, replacement: string) => string;
}

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
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Handle scroll to section when coming from other pages
    const hash = window.location.hash;
    if (hash) {
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [searchParams]);

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
              : "mx-4 rounded-2xl border border-gray-200/70 bg-white/95 backdrop-blur-sm shadow-sm"
          }`}
        >
          <div
            className={`max-w-6xl mx-auto px-4 sm:px-6 ${
              isScrolled ? "py-3" : "py-4"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div
                  className={`text-2xl font-bold text-blue-600`}
                >
                  OMS
                </div>
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
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
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
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <Link href="/login" passHref>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200 border-gray-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="#contact" passHref>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
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
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
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
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
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
                      className="w-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full mt-2 transition-colors duration-200 border-gray-300"
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

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import React from "react";
import { Orbitron } from "next/font/google"; // Assuming Orbitron type might be needed if passed directly

interface NavItem {
  toLowerCase: () => string;
  replace: (pattern: RegExp, replacement: string) => string;
}

interface OrbitronFont {
  className: string;
}

interface HeaderProps {
  navItems: string[];
  orbitron: OrbitronFont;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  orbitron,
  isMenuOpen,
  toggleMenu,
  isScrolled,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "floating-nav" // This class is defined in globals.css (max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl border etc)
            : "mx-4 rounded-2xl border border-gray-200/70 bg-white/95 backdrop-blur-sm shadow-sm" // Explicit styling for non-scrolled, top state
        }`}
      >
        {/* Apply max-w- and mx-auto to the inner div to control content width, px for padding */}
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${isScrolled ? "py-3" : "py-4"}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div
                className={`text-2xl font-bold text-blue-600 ${orbitron.className}`}
              >
                OMS
              </div>
            </Link>

            {/* Desktop Navigation & Get Started Button */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link href="#contact" passHref>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Get Started
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 mobile-menu-overlay z-40">
          <div className="bg-white mx-4 mt-2 rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  {item}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="#contact" passHref>
                  <Button 
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3"
                    onClick={toggleMenu} // Close menu on click
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header); 
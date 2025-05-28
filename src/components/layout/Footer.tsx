"use client";

import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Orbitron } from "next/font/google"; // Assuming Orbitron type might be needed

interface NavItem {
  toLowerCase: () => string;
  replace: (pattern: RegExp, replacement: string) => string;
}

interface OrbitronFont {
  className: string;
}

interface SectionAnimation {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean; amount: number };
  transition: { duration: number; ease: string };
}

interface FooterProps {
  navItems: string[];
  orbitron: OrbitronFont;
  sectionAnimation: SectionAnimation;
}

const Footer: React.FC<FooterProps> = ({
  navItems,
  orbitron,
  sectionAnimation,
}) => {
  return (
    <motion.footer
      {...sectionAnimation}
      className="bg-gray-50 py-16 px-4 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div
              className={`text-2xl font-bold text-blue-600 mb-4 ${orbitron.className}`}
            >
              OMS
            </div>
            <p className="text-gray-700 mb-4">
              The complete operating system for your family's homeschooling
              success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-blue-600 transition-colors"
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
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#coming-soon"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#coming-soon"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="mt-1 text-blue-600 flex-shrink-0"
                />
                <span>
                  Washington DC, USA 
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <span>(571) 235-6218</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 mb-4 md:mb-0">
            © {new Date().getFullYear()} OurMicroSchool. All rights reserved.
          </p>
          <p className="text-gray-700">
            Built by{" "}
            <Link
              href="https://yoletent.com"
              className="text-blue-600 hover:underline transition-all duration-200 hover:scale-105 inline-block"
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
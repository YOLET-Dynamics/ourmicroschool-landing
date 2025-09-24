"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

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
  return (
    <motion.footer
      {...sectionAnimation}
      className="bg-gray-50 py-16 px-4 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <Image
                src="/logos/OMS_LogoDesign_01-09.png"
                alt="OMS logo with wordmark"
                width={448}
                height={112}
                className="h-28 w-auto"
                priority
              />
            </div>
            <p className="text-gray-700 mb-4">
              The complete operating system for your family's homeschooling
              success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#coming-soon"
                className="text-gray-400 hover:text-accent transition-colors"
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
                    className="text-gray-700 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/corporate-social-responsibility"
                  className="text-gray-700 hover:text-accent transition-colors"
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
                  className="text-gray-700 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/#coming-soon"
                  onClick={handleComingSoonClick}
                  className="text-gray-700 hover:text-accent transition-colors"
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
                  className="mt-1 text-accent flex-shrink-0"
                />
                <span>Incorporated in Virginia, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 mb-4 md:mb-0">
            © {new Date().getFullYear()} OurMicroSchool, a product of SYMVERGE
            Platform L.L.C. All rights reserved.
          </p>
          <p className="text-gray-700">
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

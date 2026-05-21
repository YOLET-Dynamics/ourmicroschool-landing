"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  navItems: string[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
}

const OMS_APP_URL =
  process.env.NEXT_PUBLIC_OMS_URL ?? "https://app.ourmicroschool.com";

function navHref(item: string): string {
  const slug = item.toLowerCase().replace(/\s+/g, "-");
  if (slug === "partners") return "/partners";
  if (slug === "contact") return "/contact";
  return `/#${slug}`;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMenuOpen,
  toggleMenu,
  isScrolled,
}) => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(id);
  }, [pathname]);

  const updateHeaderHeight = useCallback(() => {
    if (!headerRef.current) return;
    const height = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  }, []);

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [updateHeaderHeight, isScrolled]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("/#") || pathname !== "/") return;
    e.preventDefault();
    const element = document.querySelector(href.substring(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className={cn(
          "mx-4 max-w-6xl rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-300 md:mx-auto",
          isScrolled
            ? "shadow-lg shadow-black/5"
            : "shadow-sm"
        )}
      >
        <div className="flex items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-8 md:gap-10">
            <Link
              href="/"
              className="flex items-center"
              aria-label="OurMicroSchool home"
            >
              <Image
                src="/logos/OMS_LogoDesign_01-09.png"
                alt="OurMicroSchool"
                width={160}
                height={48}
                className="block h-9 w-auto md:hidden"
                priority
              />
              <Image
                src="/logos/OMS_LogoDesign_01-08.png"
                alt="OurMicroSchool"
                width={224}
                height={72}
                className="hidden h-12 w-auto md:block"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={navHref(item)}
                  onClick={(e) => handleNavClick(e, navHref(item))}
                  className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 rounded-full px-4 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <a href={OMS_APP_URL} target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="h-9 rounded-full px-4 text-sm font-medium shadow-sm"
            >
              <a href={OMS_APP_URL} target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay top-header fixed inset-x-0 bottom-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="mx-4 mt-2 rounded-2xl border border-border/60 bg-card p-6 shadow-xl"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={navHref(item)}
                    onClick={(e) => {
                      toggleMenu();
                      handleNavClick(e, navHref(item));
                    }}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-full text-base font-medium"
                >
                  <a
                    href={OMS_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    Get Started
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-full text-base font-medium"
                >
                  <a
                    href={OMS_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    Login
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Header);

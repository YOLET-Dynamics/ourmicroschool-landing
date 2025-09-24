"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Users,
  GraduationCap,
  Monitor,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Heart,
  Brain,
  Award,
  MessageSquare,
  BarChart3,
  Calendar,
  Bell,
  Target,
  LayoutDashboard,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ContactSection } from "@/components/sections/ContactSection";

const navItems = ["Features", "Partners", "Contact"];

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const benefitsData = [
  {
    id: "personalized",
    title: "Personalized Learning Paths",
    description:
      "Our platform adapts to each student's pace and learning style, ensuring effective and engaging education.",
    listIcon: Target,
    displayIcon: Target,
    displayTitle: "Adaptive Learning",
    bgColorClass: "bg-accent/10",
    iconContainerBgClass: "bg-accent",
    iconColorClass: "text-accent-foreground",
  },
  {
    id: "all-in-one",
    title: "All-In-One Homeschooling Hub",
    description:
      "Manage curriculum, assignments, progress, and communication seamlessly in one intuitive platform.",
    listIcon: LayoutDashboard,
    displayIcon: LayoutDashboard,
    displayTitle: "Centralized Hub",
    bgColorClass: "bg-accent/10",
    iconContainerBgClass: "bg-accent",
    iconColorClass: "text-accent-foreground",
  },
  {
    id: "user-friendly",
    title: "User-Friendly for the Whole Family",
    description:
      "Designed for ease of use by students, parents, and educators of all technical skill levels.",
    listIcon: Smile,
    displayIcon: Smile,
    displayTitle: "Intuitive Design",
    bgColorClass: "bg-accent/10",
    iconContainerBgClass: "bg-accent",
    iconColorClass: "text-accent-foreground",
  },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

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

  const currentBenefit = benefitsData[activeBenefitIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
}

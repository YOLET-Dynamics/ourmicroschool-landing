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
import { Orbitron } from "next/font/google";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

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
    bgColorClass: "bg-blue-50",
    iconContainerBgClass: "bg-blue-600",
    iconColorClass: "text-white",
  },
  {
    id: "all-in-one",
    title: "All-In-One Homeschooling Hub",
    description:
      "Manage curriculum, assignments, progress, and communication seamlessly in one intuitive platform.",
    listIcon: LayoutDashboard,
    displayIcon: LayoutDashboard,
    displayTitle: "Centralized Hub",
    bgColorClass: "bg-green-50",
    iconContainerBgClass: "bg-green-600",
    iconColorClass: "text-white",
  },
  {
    id: "user-friendly",
    title: "User-Friendly for the Whole Family",
    description:
      "Designed for ease of use by students, parents, and educators of all technical skill levels.",
    listIcon: Smile,
    displayIcon: Smile,
    displayTitle: "Intuitive Design",
    bgColorClass: "bg-purple-50",
    iconContainerBgClass: "bg-purple-600",
    iconColorClass: "text-white",
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

  const handleNotifyMeClick = () => {
    toast.info("Coming soon!", {
      description: "This feature is under development.",
    });
  };

  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description: "This feature is under development and will be available shortly.",
    });
  };

  const currentBenefit = benefitsData[activeBenefitIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster richColors position="bottom-right" />
      <Header
        navItems={navItems}
        orbitron={orbitron}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        handleComingSoonClick={handleComingSoonClick}
      />

      {/* Hero Section */}
      <motion.section
        {...sectionAnimation}
        className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-200"
      >
        <div className="max-w-7xl w-full mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-6 leading-snug md:leading-relaxed break-words overflow-hidden">
            The Operating System for Your
            <span className="text-blue-600"> Homeschool</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline curriculum planning, track student progress, and foster
            collaboration between parents and educators. Personalized learning,
            simplified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={handleComingSoonClick}
              className="bg-transparent hover:bg-blue-600 text-blue-700 hover:text-white border-2 border-blue-600 px-8 py-4 text-lg rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleComingSoonClick}
              className="border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg rounded-full"
            >
              <Play className="mr-2" size={20} />
              See Demo
            </Button>
          </div>
          <div className="relative max-w-4xl mx-auto w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Students</h3>
                  <p className="text-gray-600">
                    Engaging lessons and tools for independent learning
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-green-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Teachers</h3>
                  <p className="text-gray-600">Powerful curriculum tools</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="text-purple-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-lg">Parents</h3>
                  <p className="text-gray-600">Complete oversight & insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        {...sectionAnimation}
        id="features"
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Built for Every Learning Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our platform adapts to the unique needs of students, teachers, and
              parents
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Students */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-blue-600" size={40} />
                </div>
                <CardTitle className="text-2xl">For Students</CardTitle>
                <CardDescription>
                  Engaging lessons and tools for independent learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Interactive Learning Modules
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Multi-modal content to suit diverse learning preferences
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Personalized Progress Dashboards
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Track your achievements and learning milestones
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Adaptive Skill Building</h4>
                    <p className="text-gray-600 text-sm">
                      Practice and assessments that match your pace
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teachers */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-green-600" size={40} />
                </div>
                <CardTitle className="text-2xl">
                  For Educators & Co-ops
                </CardTitle>
                <CardDescription>
                  Robust tools for curriculum design and student management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Monitor className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Flexible Curriculum Planner
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Design, assign, and manage learning paths with ease
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Automated Grading & Feedback
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Streamline assessments and provide timely input
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Class & Assignment Scheduling
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Organize group lessons and track student submissions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parents */}
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={40} />
                </div>
                <CardTitle className="text-2xl">For Parents</CardTitle>
                <CardDescription>
                  Stay connected and informed about your child's education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Comprehensive Progress Reports
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Detailed insights into learning activities and
                      achievements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Timely Notifications & Alerts
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Stay updated on assignments, progress, and important
                      announcements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">
                      Secure Communication Tools
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct messaging with educators and co-op members
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section - Updated for interactive display */}
      <motion.section {...sectionAnimation} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 leading-loose">
                Why Choose Us for Your Homeschooling?
              </h2>
              <div className="space-y-6">
                {benefitsData.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeBenefitIndex === index
                        ? "bg-white shadow-lg scale-105"
                        : "hover:bg-gray-100"
                    }`}
                    onMouseEnter={() => setActiveBenefitIndex(index)}
                  >
                    <div
                      className={`w-8 h-8 ${benefit.iconContainerBgClass} ${benefit.iconColorClass} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <benefit.listIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right-hand dynamic display area */}
            <div
              className={`rounded-3xl p-8 text-center transition-all duration-300 ease-in-out ${currentBenefit.bgColorClass}`}
            >
              <div
                className={`w-32 h-32 ${currentBenefit.iconContainerBgClass} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ease-in-out`}
              >
                <currentBenefit.displayIcon
                  className={currentBenefit.iconColorClass}
                  size={64}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {currentBenefit.displayTitle}
              </h3>
              <p className="text-gray-700">{currentBenefit.description}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section
        {...sectionAnimation}
        id="coming-soon"
        className="py-20 px-6 bg-white text-center"
      >
        <div className="max-w-2xl w-full mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Exciting New Features Coming Soon!
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We are constantly enhancing OurMicroSchool with powerful tools for
            your homeschooling journey. Sign up to be the first to know when new
            modules and resources are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="border-gray-300 flex-1"
              disabled
            />
            <Button
              type="button"
              onClick={handleComingSoonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        {...sectionAnimation}
        id="contact"
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about OurMicroSchool or need support? We're here to
              help you make the most of your homeschooling experience.
            </p>
          </div>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <fieldset disabled>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="Full Name"
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How can we help you?
                    </label>
                    <Textarea
                      placeholder="Describe your question or how we can support your homeschooling needs..."
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>
                </fieldset>
                <Button
                  type="button"
                  onClick={handleComingSoonClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <Footer
        navItems={navItems}
        orbitron={orbitron}
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </div>
  );
}

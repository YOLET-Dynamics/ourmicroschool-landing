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
      <Header
        navItems={navItems}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isScrolled={isScrolled}
        handleComingSoonClick={handleComingSoonClick}
      />

      {/* Hero Section - Two Columns with Animated Visuals */}
      <motion.section
        {...sectionAnimation}
        className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 px-6 bg-gradient-to-b from-white via-destructive/5 to-destructive/20"
      >
        {/* Subtle pattern overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy & CTAs */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-gray-100 px-3 py-1 text-sm text-gray-700 backdrop-blur"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Homeschool OSS for families and co-ops
              </motion.div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-snug md:leading-tight tracking-tight">
                Run Your <span className="text-destructive">Microschool</span>: Plan, Teach, and Grow Together
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
                Plan curriculum, manage assignments, and track progress—all in one
                place. Built for students, parents, and educators.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleComingSoonClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleComingSoonClick}
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-full"
                >
                  <Play className="mr-2" size={20} />
                  See Demo
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200 px-3 py-1 backdrop-blur transition-all hover:shadow-sm">
                  <BookOpen className="h-4 w-4 text-accent" />
                  Curriculum Planning
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200 px-3 py-1 backdrop-blur transition-all hover:shadow-sm">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  Progress Tracking
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200 px-3 py-1 backdrop-blur transition-all hover:shadow-sm">
                  <Users className="h-4 w-4 text-accent" />
                  Co-op Management
                </span>
              </div>
            </div>

            {/* Right: Animated Visuals */}
            <div className="relative">
              {/* Ambient blobs */}
              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-destructive/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl rounded-3xl p-8 sm:p-10"
              >
                <div className="grid sm:grid-cols-3 gap-6">
                  {/* Students */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-2xl border border-gray-100 p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <GraduationCap className="text-accent" size={24} />
                    </div>
                    <div className="font-semibold">Students</div>
                    <div className="text-xs text-gray-600">Interactive modules</div>
                  </motion.div>

                  {/* Educators */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl border border-gray-100 p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Users className="text-accent" size={24} />
                    </div>
                    <div className="font-semibold">Educators</div>
                    <div className="text-xs text-gray-600">Curriculum planner</div>
                  </motion.div>

                  {/* Parents */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-2xl border border-gray-100 p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Heart className="text-accent" size={24} />
                    </div>
                    <div className="font-semibold">Parents</div>
                    <div className="text-xs text-gray-600">Insights & alerts</div>
                  </motion.div>
                </div>

                {/* Floating badges */}
                <motion.div
                  aria-hidden
                  className="hidden sm:flex items-center gap-2 absolute -top-4 -left-4 rounded-full bg-white border border-gray-100 px-3 py-1 text-xs shadow"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star className="text-accent" size={14} />
                  Adaptive Learning
                </motion.div>
                <motion.div
                  aria-hidden
                  className="hidden sm:flex items-center gap-2 absolute -bottom-4 -right-4 rounded-full bg-white border border-gray-100 px-3 py-1 text-xs shadow"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle className="text-accent" size={14} />
                  Secure & Private
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        {...sectionAnimation}
        id="features"
        className="py-24 px-6 bg-white scroll-mt-32"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">
              Built for Every Learning Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our platform adapts to the unique needs of students, teachers, and
              parents
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Students */}
            <Card className="border border-gray-100 hover:border-gray-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-accent" size={40} />
                </div>
                <CardTitle className="text-2xl">For Students</CardTitle>
                <CardDescription>
                  Engaging lessons and tools for independent learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="text-accent mt-1" size={20} />
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
                  <BarChart3 className="text-accent mt-1" size={20} />
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
                  <Award className="text-accent mt-1" size={20} />
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
            <Card className="border border-gray-100 hover:border-gray-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-accent" size={40} />
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
                  <Monitor className="text-accent mt-1" size={20} />
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
                  <CheckCircle className="text-accent mt-1" size={20} />
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
                  <Calendar className="text-accent mt-1" size={20} />
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
            <Card className="border border-gray-100 hover:border-gray-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-accent" size={40} />
                </div>
                <CardTitle className="text-2xl">For Parents</CardTitle>
                <CardDescription>
                  Stay connected and informed about your child's education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-accent mt-1" size={20} />
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
                  <Bell className="text-accent mt-1" size={20} />
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
                  <MessageSquare className="text-accent mt-1" size={20} />
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
        className="py-20 px-6 bg-white text-center scroll-mt-32"
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
        className="py-20 px-6 bg-white scroll-mt-32"
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

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      I am a...
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {["Student", "Parent", "Teacher/Educator"].map((role) => (
                        <div
                          key={role}
                          className="flex items-center space-x-2 border rounded-lg p-4 cursor-not-allowed opacity-60"
                        >
                          <input
                            type="radio"
                            name="role"
                            value={role}
                            className="h-4 w-4 accent-accent"
                          />
                          <label className="text-sm">{role}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      What interests you most about OurMicroSchool?
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Curriculum Planning",
                        "Progress Tracking",
                        "Interactive Learning",
                        "Co-op Management",
                        "Parent-Teacher Communication",
                        "Student Assessment",
                        "Resource Library",
                        "Other"
                      ].map((interest) => (
                        <div
                          key={interest}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            value={interest}
                            className="h-4 w-4 rounded accent-accent"
                          />
                          <label className="text-sm">{interest}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      Number of Students
                    </label>
                    <select className="w-full border-gray-300 rounded-md">
                      <option value="">Select number of students</option>
                      <option value="1">1 student</option>
                      <option value="2-5">2-5 students</option>
                      <option value="6-10">6-10 students</option>
                      <option value="11+">11+ students</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      How can we help you?
                    </label>
                    <Textarea
                      placeholder="Tell us about your specific needs, questions, or how we can support your homeschooling journey..."
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 mt-1 rounded accent-accent"
                      />
                      <label className="text-sm text-gray-600">
                        I'd like to receive updates about new features, educational resources, and homeschooling tips from OurMicroSchool
                      </label>
                    </div>
                  </div>
                </fieldset>
                <Button
                  type="button"
                  onClick={handleComingSoonClick}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3"
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
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </div>
  );
}

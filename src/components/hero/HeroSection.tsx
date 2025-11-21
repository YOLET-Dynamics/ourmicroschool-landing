"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Heart,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Globe,
  Brain,
  Star,
} from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engaging modules that adapt to each student's pace",
      color: "accent",
      stats: "95% engagement rate",
      gradient: "from-destructive/20 to-accent/20",
    },
    {
      icon: Users,
      title: "Curriculum Planning",
      description: "Comprehensive tools for educators and parents",
      color: "primary",
      stats: "50+ lesson templates",
      gradient: "from-primary/10 to-accent/20",
    },
    {
      icon: Heart,
      title: "Progress Insights",
      description: "Real-time tracking and detailed analytics",
      color: "accent",
      stats: "24/7 monitoring",
      gradient: "from-accent/20 to-destructive/10",
    },
  ];

  const floatingElements = [
    {
      icon: Lightbulb,
      delay: 0,
      size: "w-12 h-12",
      position: "top-10 right-20",
    },
    { icon: Rocket, delay: 1, size: "w-10 h-10", position: "top-32 right-8" },
    { icon: Globe, delay: 2, size: "w-8 h-8", position: "top-48 right-32" },
    { icon: Brain, delay: 0.5, size: "w-14 h-14", position: "top-64 right-12" },
    { icon: Star, delay: 1.5, size: "w-6 h-6", position: "top-80 right-40" },
  ];

  return (
    <section className="pb-12 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex justify-center mb-12 ${
            isVisible ? "animate-slide-in-up" : "opacity-0"
          }`}
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors animate-pulse-glow cursor-pointer"
            onMouseEnter={() => setHoveredElement("banner")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <Sparkles
              className={`w-4 h-4 mr-2 ${
                hoveredElement === "banner" ? "animate-spin" : ""
              }`}
            />
            The operating system for modern microschools
            <ArrowRight className="w-4 h-4 ml-2" />
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="space-y-8 relative z-10">
            <div>
              <h1
                className={`font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-balance ${
                  isVisible
                    ? "animate-slide-in-up animate-delay-100"
                    : "opacity-0"
                }`}
              >
                <span className="text-foreground">Run Your</span>
                <br />
                <span
                  className="text-accent animate-text-shimmer bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] cursor-pointer"
                  onMouseEnter={() => setHoveredElement("title")}
                  onMouseLeave={() => setHoveredElement(null)}
                  style={{
                    transform:
                      hoveredElement === "title" ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  Microschool
                </span>
                <br />
                <span className="text-foreground">Together</span>
              </h1>

              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8 ${
                  isVisible
                    ? "animate-slide-in-up animate-delay-200"
                    : "opacity-0"
                }`}
              >
                Plan curriculum, manage assignments, and track progress—all in
                one place. Built for students, parents, and educators who
                believe in personalized learning.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isVisible
                  ? "animate-slide-in-up animate-delay-300"
                  : "opacity-0"
              }`}
            >
              <Link href="/login" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold animate-glow group relative overflow-hidden"
                  onMouseEnter={() => setHoveredElement("cta")}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  {hoveredElement === "cta" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 animate-pulse" />
                  )}
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`relative ${
              isVisible ? "animate-scale-in animate-delay-300" : "opacity-0"
            }`}
          >
            <div className="relative space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon as any;
                const isActive = activeCard === index;
                return (
                  <Card
                    key={index}
                    className={`p-6 transition-all duration-700 transform cursor-pointer relative overflow-hidden ${
                      isActive
                        ? "scale-105 shadow-2xl shadow-accent/20 border-accent/30 bg-gradient-to-br from-card to-accent/5"
                        : "scale-95 opacity-70 hover:opacity-90 hover:scale-100"
                    } ${index === 1 ? "ml-8" : ""} ${
                      index === 2 ? "ml-4" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredElement(`card-${index}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        feature.gradient
                      } opacity-0 transition-opacity duration-300 ${
                        hoveredElement === `card-${index}` ? "opacity-100" : ""
                      }`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            feature.color === "accent"
                              ? "bg-accent/10"
                              : "bg-primary/10"
                          } ${
                            isActive || hoveredElement === `card-${index}`
                              ? "scale-110 rotate-3"
                              : ""
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              feature.color === "accent"
                                ? "text-accent"
                                : "text-primary"
                            } ${isActive ? "animate-pulse" : ""}`}
                          />
                        </div>
                        <Badge
                          variant="secondary"
                          className={`text-xs transition-all duration-300 ${
                            isActive ? "animate-bounce-subtle scale-110" : ""
                          }`}
                        >
                          {feature.stats}
                        </Badge>
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>

                      {null}
                    </div>
                  </Card>
                );
              })}
            </div>

            {floatingElements.map((element, index) => {
              const Icon = element.icon as any;
              return (
                <div
                  key={index}
                  className={`absolute ${element.position} ${element.size} bg-accent/10 rounded-full flex items-center justify-center animate-float cursor-pointer group border border-accent/20 shadow-sm backdrop-blur-sm`}
                  style={{
                    animationDelay: `${element.delay}s`,
                    transform: `translate(${
                      mousePosition.x * (index + 1) * 2
                    }px, ${mousePosition.y * (index + 1) * 2}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                  onMouseEnter={() => setHoveredElement(`float-${index}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <Icon
                    className={`text-accent h-5 w-5 md:h-6 md:w-6 transition-all duration-300 ${
                      hoveredElement === `float-${index}`
                        ? "scale-125 animate-spin"
                        : ""
                    }`}
                  />
                </div>
              );
            })}

            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(242, 106, 96)"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(21, 107, 115)"
                    stopOpacity="0.3"
                  />
                </linearGradient>
              </defs>
              <path
                d="M 50 100 Q 200 50 350 150 T 500 200"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
            <div
              className="absolute top-1/4 -left-8 w-6 h-6 bg-primary/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-1/4 -right-4 w-4 h-4 bg-accent/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-slide-in-up animate-delay-500" : "opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Personalized Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

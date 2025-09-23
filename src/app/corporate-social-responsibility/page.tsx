"use client";

import { motion } from "framer-motion";
import { Heart, Sprout, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const navItems = ["Features", "Partners", "Contact"];

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export default function CSRPage() {
  const handleComingSoonClick = () => {
    toast.info("Coming soon!", {
      description: "This feature is under development and will be available shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        navItems={navItems}
        isMenuOpen={false}
        toggleMenu={() => {}}
        isScrolled={false}
        handleComingSoonClick={handleComingSoonClick}
      />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <motion.section
          {...sectionAnimation}
          className="text-center px-6 mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Our Commitment to{" "}
              <span className="text-accent">Social Impact</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering communities through education and fostering a more inclusive future for all learners.
            </p>
          </div>
        </motion.section>

        {/* Coming Soon Content */}
        <motion.section
          {...sectionAnimation}
          className="px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: Heart,
                  title: "Educational Access",
                  description: "Breaking down barriers to quality education for underserved communities"
                },
                {
                  icon: Sprout,
                  title: "Environmental Impact",
                  description: "Promoting sustainable practices in education and operations"
                },
                {
                  icon: Users,
                  title: "Community Engagement",
                  description: "Building partnerships with local organizations and educational institutions"
                },
                {
                  icon: Globe,
                  title: "Global Citizenship",
                  description: "Fostering cultural understanding and global perspectives in education"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-10 md:p-12 text-center border border-gray-100 shadow">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Exciting Initiatives Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're working on impactful programs that will make a real difference
                in education accessibility and community development. Stay tuned for
                our upcoming initiatives!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleComingSoonClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-full"
                >
                  Get Notified
                </Button>
                <Button
                  variant="outline"
                  onClick={handleComingSoonClick}
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-4 text-lg rounded-full"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer
        navItems={navItems}
        sectionAnimation={sectionAnimation}
        handleComingSoonClick={handleComingSoonClick}
      />
    </div>
  );
} 
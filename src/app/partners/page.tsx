"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sparkles,
  ArrowRight,
  Users,
  Handshake,
  Globe,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";

const partnersData = [
  {
    id: "r2r",
    name: "Root to Rise Microschool",
    logoUrl: "/r2r.png",
    description: `Root to Rise Microschool is a holistic educational community committed to raising conscious, confident, and connected young people. We exist to reimagine education by centering cultural wisdom, wellness, creativity, and community throughout the entire learning journey.

Our mission is to nurture rooted children who rise into their fullest potential— grounded in identity, guided by purpose, and equipped for liberation. We believe in the transformative power of ancestral wisdom, radical self-love, and collective care.

At Root to Rise, we create brave and affirming learning spaces where children —and their families—can reconnect with their innate brilliance and co-create new paradigms of education. We proudly serve families seeking an alternative to traditional schooling, especially multicultural communities desiring an education that honors their heritage and empowers their future.`,
    websiteUrl: null as string | null,
    category: "Microschool Partner",
    location: "Community-Based",
    established: "2023",
    highlights: ["Holistic Education", "Cultural Wisdom", "Community-Centered", "Identity-Focused"],
  },
];

const PartnerCard = ({ partner }: { partner: (typeof partnersData)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = partner.description
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-lg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
            <div className="flex-shrink-0 relative group/logo">
              <div className="w-28 h-28 lg:w-36 lg:h-36 relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={partner.logoUrl || "/placeholder.svg"}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain p-4 group-hover/logo:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            <div className="text-center lg:text-left flex-1 space-y-4">
              <div className="space-y-3">
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors px-4 py-1.5 text-sm font-medium"
                >
                  {partner.category}
                </Badge>
                <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground leading-tight">
                  {partner.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  {partner.location}
                </span>
                <span className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  Est. {partner.established}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {partner.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {partner.websiteUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                >
                  <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`prose prose-gray max-w-none text-muted-foreground space-y-4 transition-all duration-500 ${
                isExpanded ? "max-h-none" : "max-h-32 overflow-hidden"
              }`}
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {paragraphs.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/80 hover:bg-primary/5 rounded-full transition-all duration-300"
              >
                {isExpanded ? "Show Less" : "Read More"}
                <ArrowRight
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function PartnersPage() {
  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setPartnershipForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry:", partnershipForm);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Badge
              variant="secondary"
              className="px-6 py-3 text-base font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Collaborations and partnerships
              <ArrowRight className="w-5 h-5 ml-3" />
            </Badge>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-8 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Our Partners
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are proud to collaborate with organizations that share our commitment to innovative and holistic
            education.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground border border-border shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-3 text-foreground">1+</h3>
              <p className="text-muted-foreground text-lg">Active Partners</p>
            </Card>
            <Card className="bg-card text-card-foreground border border-border shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Handshake className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-3 text-foreground">Growing</h3>
              <p className="text-muted-foreground text-lg">Network</p>
            </Card>
            <Card className="bg-card text-card-foreground border border-border shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-3 text-foreground">Community</h3>
              <p className="text-muted-foreground text-lg">Focused</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {partnersData.length > 0 ? (
            partnersData.map((partner) => <PartnerCard key={partner.id} partner={partner} />)
          ) : (
            <Card className="bg-card text-card-foreground border border-border shadow-lg p-16 text-center">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground">Building Our Network</h3>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                We are currently working on building our network of partners. Check back soon to see our growing
                community of educational innovators!
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card text-card-foreground border border-border shadow-2xl p-10 md:p-16 relative">
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-4xl mb-6 text-foreground">Become a Partner</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Interested in partnering with OurMicroSchool? We'd love to hear from you and explore how we can work
                  together to transform education.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                      Contact Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={partnershipForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-14 text-base rounded-2xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold mb-3 text-foreground">
                      Organization *
                    </label>
                    <Input
                      id="organization"
                      placeholder="Your organization name"
                      value={partnershipForm.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      required
                      className="h-14 text-base rounded-2xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                    Email Address *
                  </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@organization.com"
                  value={partnershipForm.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-14 text-base rounded-2xl border-border focus:border-primary focus:ring-primary/20"
                />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                    Partnership Proposal *
                  </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                  value={partnershipForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="min-h-40 text-base rounded-2xl border-border focus:border-primary focus:ring-primary/20 resize-none"
                />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-5 md:py-6 font-semibold transition-all duration-300 hover:shadow-xl md:hover:scale-[1.02] rounded-2xl flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Submit Partnership Inquiry</span>
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

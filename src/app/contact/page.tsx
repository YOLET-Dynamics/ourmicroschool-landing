"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Send, MessageCircle, Sparkles } from "lucide-react";

export default function ContactPage() {
  const navItems = ["Features", "Partners", "Contact"]; // for footer links

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false,
    inquiryType: "general",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get in touch
            </Badge>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about OurMicroSchool or need support? We're here to help you make the most of your
            homeschooling experience.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-3">Get in touch via email</p>
              <a href="mailto:hello@ourmicroschool.com" className="text-accent hover:underline">
                hello@ourmicroschool.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-3">Chat with our support team</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-muted-foreground mb-3">We typically respond within</p>
              <span className="text-accent font-semibold">24 hours</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-border/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">What can we help you with?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "general", label: "General" },
                    { value: "support", label: "Support" },
                    { value: "partnership", label: "Partnership" },
                    { value: "demo", label: "Demo Request" },
                  ].map((type) => (
                    <Button
                      key={type.value}
                      type="button"
                      variant={formData.inquiryType === type.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleInputChange("inquiryType", type.value)}
                      className="justify-center"
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="Brief description of your inquiry"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              {/* Newsletter Subscription */}
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                <Checkbox
                  id="subscribe"
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => handleInputChange("subscribe", checked as boolean)}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="subscribe" className="text-sm font-medium cursor-pointer">
                    Stay updated with OurMicroSchool
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Receive updates about new features, educational resources, and homeschooling tips. You can
                    unsubscribe at any time.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6 font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      
    </div>
  );
}



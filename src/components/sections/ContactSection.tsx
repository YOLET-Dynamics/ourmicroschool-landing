"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Connect With Us</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about OurMicroSchool or need support? We're here to help you make the most of your
            homeschooling experience.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4" />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-32 resize-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox
                id="subscribe"
                checked={subscribe}
                onCheckedChange={(checked) => setSubscribe(checked as boolean)}
              />
              <label htmlFor="subscribe" className="text-sm text-muted-foreground">
                I'd like to receive updates about new features, educational resources, and homeschooling tips from
                OurMicroSchool
              </label>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">Send Message</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}



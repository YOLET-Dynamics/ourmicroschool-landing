"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Exciting New Features Coming Soon!</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We are constantly enhancing OurMicroSchool with powerful tools for your homeschooling journey. Sign up to be
          the first to know when new modules and resources are available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-primary hover:bg-primary/90 px-8">Notify Me</Button>
        </div>
      </div>
    </section>
  );
}



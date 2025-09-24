"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type NewsletterSchema } from "@/api/schema/newsletter";
import { toast } from "sonner";

export function NewsletterSection() {
  const form = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: NewsletterSchema) => {
    const parsed = newsletterSchema.safeParse(form.getValues());
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        if (issue.path.length) {
          const field = issue.path[0] as keyof NewsletterSchema;
          form.setError(field, { type: "manual", message: issue.message });
        }
      });
      toast.error("Please fix the errors", { description: "Check your details and try again." });
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Failed");
      toast.success("You're on the list!", { description: "We'll keep you posted." });
      form.reset();
    } catch (e: any) {
      toast.error("Could not subscribe", { description: e.message ?? "Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Exciting New Features Coming Soon!</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          We are constantly enhancing OurMicroSchool with powerful tools for your homeschooling journey. Sign up to be
          the first to know when new modules and resources are available.
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            {...form.register("email")}
            className="flex-1"
            aria-invalid={!!form.formState.errors.email}
          />
          <Button type="submit" disabled={isSubmitting || !form.formState.isValid} className="bg-primary hover:bg-primary/90 px-8">
            {isSubmitting ? "Sending..." : "Notify Me"}
          </Button>
        </form>
      </div>
    </section>
  );
}



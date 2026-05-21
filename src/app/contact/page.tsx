"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GradientText,
  IconBadge,
  Section,
  SectionHeading,
} from "@/components/layout";
import { contactSchema, type ContactSchema } from "@/api/schema/contact";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const inquiryTypes: Array<{ value: ContactSchema["inquiryType"]; label: string }> = [
  { value: "general", label: "General" },
  { value: "support", label: "Support" },
  { value: "partnership", label: "Partnership" },
  { value: "demo", label: "Demo" },
];

const channels = [
  {
    icon: Mail,
    title: "Email us",
    body: "hello@ourmicroschool.com",
    href: "mailto:hello@ourmicroschool.com",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    body: "Coming soon",
  },
  {
    icon: Clock,
    title: "Response time",
    body: "Within 24 hours",
  },
];

export default function ContactPage() {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      subscribe: false,
      inquiryType: "general",
    },
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const inquiryType = form.watch("inquiryType");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form.getValues());
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        if (issue.path.length) {
          const field = issue.path[0] as keyof ContactSchema;
          form.setError(field, { type: "manual", message: issue.message });
        }
      });
      toast.error("Please fix the errors", {
        description: "Check the highlighted fields and try again.",
      });
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Failed");
      toast.success("Message sent", { description: "We'll get back to you shortly." });
      form.reset();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Please try again later.";
      toast.error("Could not send message", { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section spacing="tight">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title={
            <>
              We'd <GradientText>love to hear</GradientText> from you.
            </>
          }
          lead="Questions, ideas, partnership inquiries, or just a hello — we're listening."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const inner = (
              <>
                <IconBadge icon={channel.icon} tone="accent" />
                <p className="text-h3 mt-5">{channel.title}</p>
                <p className="text-meta mt-1">{channel.body}</p>
              </>
            );
            return channel.href ? (
              <a
                key={channel.title}
                href={channel.href}
                className="rounded-3xl border border-border/60 bg-card p-6 transition-all hover:border-foreground/15 hover:-translate-y-0.5"
              >
                {inner}
              </a>
            ) : (
              <div
                key={channel.title}
                className="rounded-3xl border border-border/60 bg-card p-6"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </Section>

      <Section spacing="tight" size="narrow">
        <div className="rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <fieldset>
              <legend className="text-sm font-medium mb-3">
                What can we help you with?
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {inquiryTypes.map((type) => {
                  const active = inquiryType === type.value;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => form.setValue("inquiryType", type.value)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      )}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...form.register("name")}
                  required
                  className="h-11 rounded-xl"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...form.register("email")}
                  required
                  className="h-11 rounded-xl"
                />
              </Field>
            </div>

            <Field label="Subject" htmlFor="subject">
              <Input
                id="subject"
                placeholder="A short summary"
                {...form.register("subject")}
                required
                className="h-11 rounded-xl"
              />
            </Field>

            <Field label="Message" htmlFor="message">
              <Textarea
                id="message"
                placeholder="Tell us a bit more…"
                {...form.register("message")}
                required
                className="min-h-36 rounded-2xl resize-none"
              />
            </Field>

            <label className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
              <Checkbox
                id="subscribe"
                checked={form.watch("subscribe")}
                onCheckedChange={(checked) =>
                  form.setValue("subscribe", Boolean(checked))
                }
                className="mt-0.5"
              />
              <span>
                <span className="block text-sm font-medium">
                  Keep me in the loop
                </span>
                <span className="block text-meta mt-0.5">
                  Occasional updates on new features and resources. Unsubscribe anytime.
                </span>
              </span>
            </label>

            <Button
              type="submit"
              disabled={isSubmitting || !form.formState.isValid}
              className="h-12 w-full text-base font-medium"
            >
              <Send className="mr-1.5 h-4 w-4" aria-hidden />
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

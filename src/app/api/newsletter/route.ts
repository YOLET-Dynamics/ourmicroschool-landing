import { NextResponse } from "next/server";
import { newsletterSchema } from "@/api/schema/newsletter";
import { Resend } from "resend";
import NewsletterEmail, { NewsletterAcknowledgementEmail } from "@/emails/NewsletterEmail";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const ip = getClientIp(req);
    if (isRateLimited(`newsletter:${ip}`, { limit: 5, windowMs: 120_000 })) {
      return NextResponse.json(
        { success: false, code: "RATE_LIMITED", message: "Too many requests. Please try again soon." },
        { status: 429 }
      );
    }

    const parsed = newsletterSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, code: "VALIDATION_ERROR", message: parsed.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    await resend.emails.send({
      from: "OMS Newsletter <no-reply@ourmicroschool.com>",
      to: ["newsletter@ourmicroschool.com"],
      subject: "New newsletter signup",
      replyTo: email,
      react: NewsletterEmail({ email }),
    });

    await resend.emails.send({
      from: "OMS <no-reply@ourmicroschool.com>",
      to: [email],
      subject: "Thanks for subscribing",
      react: NewsletterAcknowledgementEmail({ email }),
    });

    return NextResponse.json({ success: true, data: { ok: true } });
  } catch (err: any) {
    console.error("/api/newsletter error", err);
    return NextResponse.json(
      { success: false, code: "SERVER_ERROR", message: "Unexpected error" },
      { status: 500 }
    );
  }
}



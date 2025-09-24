import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/api/schema/contact";
import { Resend } from "resend";
import ContactEmail, { ContactAcknowledgementEmail } from "@/emails/ContactEmail";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const ip = getClientIp(req);
    if (isRateLimited(`contact:${ip}`, { limit: 3, windowMs: 60_000 })) {
      return NextResponse.json(
        { success: false, code: "RATE_LIMITED", message: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, code: "VALIDATION_ERROR", message: parsed.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 }
      );
    }

    const { name, email, subject, message, subscribe, inquiryType } = parsed.data;

    await resend.emails.send({
      from: "OMS Contact <no-reply@ourmicroschool.com>",
      to: ["contact@ourmicroschool.com"],
      subject: `Contact: ${subject}`,
      replyTo: email,
      react: ContactEmail({ name, email, subject, message, subscribe, inquiryType }),
    });

    await resend.emails.send({
      from: "OMS <no-reply@ourmicroschool.com>",
      to: [email],
      subject: "We’ve received your message",
      react: ContactAcknowledgementEmail({ name, email, subject, inquiryType }),
    });

    return NextResponse.json({ success: true, data: { ok: true } });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return NextResponse.json(
      { success: false, code: "SERVER_ERROR", message: "Unexpected error" },
      { status: 500 }
    );
  }
}



import type { APIRoute } from "astro";
import { Resend } from "resend";
import { newsletterAcknowledgementEmail, newsletterTeamEmail } from "@/lib/email-templates";
import { newsletterSchema } from "@/lib/validation";
import { getClientIp, hasTrustedOrigin, isRateLimited } from "@/lib/rate-limit";

export const prerender = false;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export const POST: APIRoute = async ({ request }) => {
  if (!hasTrustedOrigin(request)) {
    return json({ success: false, code: "FORBIDDEN", message: "Request origin is not allowed." }, 403);
  }

  const ip = getClientIp(request);
  if (isRateLimited(`newsletter:${ip}`, 5, 120_000)) {
    return json({ success: false, code: "RATE_LIMITED", message: "Too many requests. Please try again soon." }, 429);
  }

  try {
    const parsed = newsletterSchema.safeParse(await request.json());
    if (!parsed.success) {
      return json({ success: false, code: "VALIDATION_ERROR", message: parsed.error.issues[0]?.message ?? "Invalid data" }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
    const resend = new Resend(apiKey);
    const { email } = parsed.data;

    const [teamResult, acknowledgementResult] = await Promise.all([
      resend.emails.send({
        from: "OMS Newsletter <no-reply@ourmicroschool.com>",
        to: ["newsletter@ourmicroschool.com"],
        subject: "New newsletter signup",
        replyTo: email,
        html: newsletterTeamEmail(email),
      }),
      resend.emails.send({
        from: "OMS <no-reply@ourmicroschool.com>",
        to: [email],
        subject: "Thanks for subscribing",
        replyTo: "hello@ourmicroschool.com",
        html: newsletterAcknowledgementEmail(email),
      }),
    ]);

    if (teamResult.error || acknowledgementResult.error) {
      throw new Error(teamResult.error?.message ?? acknowledgementResult.error?.message ?? "Email delivery failed");
    }

    return json({ success: true, data: { ok: true } });
  } catch (error) {
    console.error("Newsletter request failed", error);
    return json({ success: false, code: "SERVER_ERROR", message: "We could not subscribe you. Please try again later." }, 500);
  }
};

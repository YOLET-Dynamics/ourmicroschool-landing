import type { APIRoute } from "astro";
import { Resend } from "resend";
import { contactAcknowledgementEmail, contactTeamEmail } from "@/lib/email-templates";
import { contactSchema } from "@/lib/validation";
import { getClientIp, hasTrustedOrigin, isRateLimited } from "@/lib/rate-limit";

export const prerender = false;

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export const POST: APIRoute = async ({ request }) => {
  if (!hasTrustedOrigin(request)) {
    return json({ success: false, code: "FORBIDDEN", message: "Request origin is not allowed." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return json({ success: false, code: "PAYLOAD_TOO_LARGE", message: "Request is too large." }, 413);
  }

  const ip = getClientIp(request);
  if (isRateLimited(`contact:${ip}`, 3, 60_000)) {
    return json({ success: false, code: "RATE_LIMITED", message: "Too many requests. Please try again shortly." }, 429);
  }

  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success) {
      return json({ success: false, code: "VALIDATION_ERROR", message: parsed.error.issues[0]?.message ?? "Invalid data" }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
    const resend = new Resend(apiKey);
    const input = parsed.data;

    const [teamResult, acknowledgementResult] = await Promise.all([
      resend.emails.send({
        from: "OMS Contact <no-reply@ourmicroschool.com>",
        to: ["contact@ourmicroschool.com"],
        subject: `Contact: ${input.subject}`,
        replyTo: input.email,
        html: contactTeamEmail(input),
      }),
      resend.emails.send({
        from: "OMS <no-reply@ourmicroschool.com>",
        to: [input.email],
        subject: "We’ve received your message",
        replyTo: "hello@ourmicroschool.com",
        html: contactAcknowledgementEmail(input),
      }),
    ]);

    if (teamResult.error || acknowledgementResult.error) {
      throw new Error(teamResult.error?.message ?? acknowledgementResult.error?.message ?? "Email delivery failed");
    }

    return json({ success: true, data: { ok: true } });
  } catch (error) {
    console.error("Contact request failed", error);
    return json({ success: false, code: "SERVER_ERROR", message: "We could not send your message. Please try again later." }, 500);
  }
};

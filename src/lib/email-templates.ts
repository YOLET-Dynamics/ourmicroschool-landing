import type { ContactInput } from "@/lib/validation";

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function shell(content: string, footer: string): string {
  return `<!doctype html><html lang="en"><body style="margin:0;background:#f5f3ec;padding:24px;font-family:Arial,sans-serif;color:#14292c"><table role="presentation" style="width:100%;max-width:620px;margin:0 auto;border:1px solid #e4e1d8;border-radius:16px;background:#ffffff"><tr><td style="padding:28px">${content}<p style="margin:24px 0 0;color:#718083;font-size:12px">${footer}</p></td></tr></table></body></html>`;
}

export function contactTeamEmail(input: ContactInput): string {
  return shell(`
    <h1 style="margin:0;font-size:22px">New contact submission</h1>
    <p style="color:#526164;font-size:14px">Inquiry type: <strong>${escapeHtml(input.inquiryType)}</strong></p>
    <div style="margin-top:18px;border-radius:12px;background:#f6f7f4;padding:16px">
      <p style="margin:0 0 8px"><strong>From:</strong> ${escapeHtml(input.name)} &lt;${escapeHtml(input.email)}&gt;</p>
      <p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
      <p style="margin:14px 0 0;white-space:pre-wrap">${escapeHtml(input.message)}</p>
    </div>
    <p style="color:#718083;font-size:12px">Subscribed to updates: ${input.subscribe ? "Yes" : "No"}</p>
  `, "OurMicroSchool contact form");
}

export function contactAcknowledgementEmail(input: ContactInput): string {
  return shell(`
    <h1 style="margin:0;font-size:22px">Thanks for reaching out, ${escapeHtml(input.name)}.</h1>
    <p style="color:#526164;font-size:14px;line-height:1.6">We received your ${escapeHtml(input.inquiryType)} inquiry, “${escapeHtml(input.subject)}.” A member of the OurMicroSchool team will review it and follow up soon.</p>
    <p style="color:#526164;font-size:14px;line-height:1.6">You can reply directly to this email if there is anything else we should know.</p>
  `, "OurMicroSchool team");
}

export function newsletterTeamEmail(email: string): string {
  return shell(`<h1 style="margin:0;font-size:22px">New newsletter signup</h1><p style="color:#526164;font-size:14px">${escapeHtml(email)} joined the list.</p>`, "OurMicroSchool newsletter");
}

export function newsletterAcknowledgementEmail(email: string): string {
  return shell(`<h1 style="margin:0;font-size:22px">You’re on the list.</h1><p style="color:#526164;font-size:14px;line-height:1.6">Thanks for subscribing with <strong>${escapeHtml(email)}</strong>. We’ll send occasional product updates and useful resources as soon as they land.</p>`, "OurMicroSchool newsletter team");
}

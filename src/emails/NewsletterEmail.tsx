import * as React from "react";
import { Html } from "@react-email/components";

type NewsletterEmailProps = {
  email: string;
};

export function NewsletterEmail({ email }: NewsletterEmailProps) {
  return (
    <Html lang="en">
      <table style={{ width: "100%", maxWidth: 640, margin: "0 auto", fontFamily: "Inter,Arial,sans-serif", background: "#ffffff", borderRadius: 16, border: "1px solid #eee" }}>
        <tbody>
          <tr>
            <td style={{ padding: "24px 28px 8px 28px" }}>
              <h1 style={{ margin: 0, fontSize: 22, lineHeight: "28px", color: "#0f1720" }}>New Newsletter Signup</h1>
              <p style={{ margin: "8px 0 0 0", color: "#475569", fontSize: 14 }}>A user subscribed to updates.</p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 28px 16px 28px" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
                <p style={{ margin: 0, color: "#0f1720" }}><strong>Email:</strong> {email}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "18px 28px 24px 28px", color: "#94a3b8", fontSize: 12 }}>OMS – Newsletter</td>
          </tr>
        </tbody>
      </table>
    </Html>
  );
}

type NewsletterAcknowledgementProps = {
  email: string;
};

export function NewsletterAcknowledgementEmail({ email }: NewsletterAcknowledgementProps) {
  return (
    <Html lang="en">
      <table style={{ width: "100%", maxWidth: 560, margin: "0 auto", fontFamily: "Inter,Arial,sans-serif", background: "#ffffff", borderRadius: 12, border: "1px solid #e2e8f0" }}>
        <tbody>
          <tr>
            <td style={{ padding: "24px 28px 8px 28px" }}>
              <h1 style={{ margin: 0, fontSize: 22, lineHeight: "28px", color: "#0f1720" }}>You're on the list!</h1>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px 28px 0 28px", color: "#475569", fontSize: 14 }}>
              <p style={{ margin: "0 0 12px 0" }}>Thanks for subscribing with <strong>{email}</strong>.</p>
              <p style={{ margin: "0 0 12px 0" }}>We'll send you practical updates on new features, curriculum tools, and resources as soon as they land.</p>
              <p style={{ margin: "0 0 12px 0" }}>You can unsubscribe any time using the link in our emails, but we hope you'll stay for the journey!</p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "18px 28px 24px 28px", color: "#94a3b8", fontSize: 12 }}>OMS Newsletter Team</td>
          </tr>
        </tbody>
      </table>
    </Html>
  );
}

export default NewsletterEmail;



import * as React from "react";
import { Html } from "@react-email/components";

type Props = {
  email: string;
};

export default function NewsletterEmail({ email }: Props) {
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



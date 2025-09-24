import * as React from "react";
import { Html } from "@react-email/components";

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
  subscribe?: boolean;
  inquiryType: string;
};

export default function ContactEmail(props: Props) {
  const { name, email, subject, message, subscribe, inquiryType } = props;
  return (
    <Html lang="en">
      <table style={{ width: "100%", maxWidth: 640, margin: "0 auto", fontFamily: "Inter,Arial,sans-serif", background: "#ffffff", borderRadius: 16, border: "1px solid #eee" }}>
        <tbody>
          <tr>
            <td style={{ padding: "24px 28px 8px 28px" }}>
              <h1 style={{ margin: 0, fontSize: 22, lineHeight: "28px", color: "#0f1720" }}>New Contact Submission</h1>
              <p style={{ margin: "8px 0 0 0", color: "#475569", fontSize: 14 }}>Inquiry type: <strong>{inquiryType}</strong></p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 28px 0 28px" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
                <p style={{ margin: "0 0 6px 0", color: "#0f1720" }}><strong>From:</strong> {name} &lt;{email}&gt;</p>
                <p style={{ margin: "0 0 6px 0", color: "#0f1720" }}><strong>Subject:</strong> {subject}</p>
                <p style={{ whiteSpace: "pre-wrap", margin: "12px 0 0 0", color: "#334155" }}>{message}</p>
              </div>
              <p style={{ margin: "16px 0 0 0", color: "#64748b", fontSize: 12 }}>Subscribe to updates: {subscribe ? "Yes" : "No"}</p>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "18px 28px 24px 28px", color: "#94a3b8", fontSize: 12 }}>OMS – Contact Form</td>
          </tr>
        </tbody>
      </table>
    </Html>
  );
}



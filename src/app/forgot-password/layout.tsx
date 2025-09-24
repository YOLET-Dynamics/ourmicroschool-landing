import type { Metadata } from "next";

const canonicalUrl = "https://ourmicroschool.com/forgot-password";

export const metadata: Metadata = {
  title: "Forgot Password | OurMicroSchool",
  description:
    "Reset your OurMicroSchool password securely. Request a verification code to regain access to your personalized learning tools.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Reset your OurMicroSchool password",
    description:
      "Recover access to your OurMicroSchool account and continue managing your homeschooling journey.",
    url: canonicalUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgot Password | OurMicroSchool",
    description: "Reset your OurMicroSchool password in a few easy steps.",
  },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


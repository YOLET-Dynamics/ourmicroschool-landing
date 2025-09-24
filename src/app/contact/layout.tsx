import type { Metadata } from "next";

const canonicalUrl = "https://ourmicroschool.com/contact";

export const metadata: Metadata = {
  title: "Contact OurMicroSchool",
  description:
    "Get in touch with the OurMicroSchool team for support, partnerships, and product inquiries. We're here to help you craft exceptional learning journeys.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Contact OurMicroSchool",
    description:
      "Reach the OurMicroSchool team for support and partnership opportunities. We respond within 24 hours.",
    url: canonicalUrl,
    type: "website",
    images: [
      {
        url: "https://ourmicroschool.com/og.png",
        width: 1200,
        height: 630,
        alt: "OurMicroSchool support team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact OurMicroSchool",
    description: "Connect with the OurMicroSchool support and partnerships team.",
    images: ["https://ourmicroschool.com/og.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


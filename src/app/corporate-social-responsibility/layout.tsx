import type { Metadata } from "next";

const canonicalUrl = "https://ourmicroschool.com/corporate-social-responsibility";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description:
    "Explore OurMicroSchool's commitment to corporate social responsibility—building equitable access to personalized education and supporting global learning communities.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "CSR Initiatives",
    description:
      "Discover how OurMicroSchool invests in community partnerships, inclusivity, and sustainable education initiatives worldwide.",
    url: canonicalUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Social Responsibility",
    description: "Learn about OurMicroSchool's impact-driven CSR initiatives for education access.",
  },
};

export default function CorporateSocialResponsibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


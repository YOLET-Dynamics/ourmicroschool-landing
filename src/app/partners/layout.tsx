import type { Metadata } from "next";

const canonicalUrl = "https://ourmicroschool.com/partners";

export const metadata: Metadata = {
  title: "Partners | OurMicroSchool",
  description:
    "Discover partnership opportunities with OurMicroSchool. Collaborate with us to deliver innovative homeschooling and microschool solutions worldwide.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Partner with OurMicroSchool",
    description:
      "Join OurMicroSchool's partner ecosystem to empower families and educators with personalized learning technology.",
    url: canonicalUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with OurMicroSchool",
    description:
      "Collaborate with OurMicroSchool to bring personalized, tech-enabled homeschooling to more families.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

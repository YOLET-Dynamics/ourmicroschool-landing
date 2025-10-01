import type { Metadata } from "next";

const canonicalUrl = "https://ourmicroschool.com/login";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to OurMicroSchool to manage curriculum, track progress, and collaborate with your microschool community.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Sign in",
    description:
      "Access your OurMicroSchool dashboard to manage personalized learning journeys for families and co-ops.",
    url: canonicalUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login",
    description: "Manage your microschool experience by logging in to OurMicroSchool.",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


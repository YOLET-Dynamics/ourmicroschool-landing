import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import SiteChrome from "@/components/layout/SiteChrome";
import { Analytics } from "@vercel/analytics/next"

const akt = localFont({
  src: "../../public/fonts/Akt.ttf",
  variable: "--font-akt",
  display: "swap",
  weight: "100 900",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ourmicroschool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OurMicroSchool — The Operating System for Personalized Learning",
    template: "%s | OurMicroSchool",
  },
  description:
    "OurMicroSchool is the operating system built for microschools, co-ops, and homeschooling families. Plan curriculum, collaborate, and track every learner’s growth in one beautiful platform.",
  keywords: [
    "microschool platform",
    "homeschool software",
    "learning operating system",
    "personalized education",
    "OurMicroSchool",
    "OMS",
    "curriculum planning",
    "family learning hub",
    "homeschool co-op tools",
    "student progress tracking",
    "modern homeschooling",
  ],
  authors: [{ name: "SYMVERGE PLATFORMS LLC" }],
  creator: "SYMVERGE PLATFORMS LLC",
  publisher: "SYMVERGE PLATFORMS LLC",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "OurMicroSchool — The OS for Every Learning Journey",
    description:
      "Design beautiful learning journeys, manage microschool operations, and empower families with OurMicroSchool.",
    url: siteUrl,
    siteName: "OurMicroSchool",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "OurMicroSchool hero showcasing collaborative learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OurMicroSchool",
    description:
      "Manage curriculum, track growth, and collaborate with your learning community — all inside OurMicroSchool.",
    creator: "@yoletlabs",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${akt.variable} ${fredoka.variable}`}>
      <body>
        <QueryProvider>
          <SiteChrome>{children}</SiteChrome>
          <Toaster richColors position="bottom-right" />
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}

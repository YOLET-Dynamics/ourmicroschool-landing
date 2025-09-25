import QueryProvider from "@/providers/QueryProvider";
import HttpInterceptor from "@/providers/HttpInterceptor";
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fredoka } from "next/font/google";
import { Toaster } from "sonner";
import SiteChrome from "@/components/layout/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    "curriculum planning",
    "family learning hub",
    "homeschool co-op tools",
    "student progress tracking",
    "modern homeschooling",
  ],
  authors: [{ name: "YOLET Labs", url: "https://yoletent.com" }],
  creator: "OurMicroSchool",
  publisher: "OurMicroSchool",
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
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body>
        <QueryProvider>
          <SiteChrome>
            <HttpInterceptor>{children}</HttpInterceptor>
          </SiteChrome>
          <Toaster richColors position="bottom-right" />
        </QueryProvider>
      </body>
    </html>
  );
}

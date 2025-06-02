import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ourmicroschool.com"; // Using a more realistic placeholder

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OMS - Homeschool OSS",
    template: "%s | OMS - Homeschool OSS",
  },
  description:
    "Discover OMS - Homeschool OSS: the all-in-one homeschooling software designed to streamline curriculum planning, track student progress, and foster collaboration. Personalized learning, simplified.",
  keywords: [
    "homeschooling",
    "oss",
    "open source homeschooling software",
    "education software",
    "personalized learning",
    "curriculum planning",
    "student progress tracking",
    "online learning platform",
    "K-12 education",
    "microschool",
    "homeschool co-op",
    "homeschooling resources",
  ],
  authors: [{ name: "YOLET Labs", url: "https://yoletent.com" }],
  creator: "YOLET Labs",
  publisher: "OMS - Homeschooling OSS",

  openGraph: {
    title:
      "OMS - Homeschooling OSS | The Operating System for Your Homeschooling Hub",
    description:
      "Simplify your homeschooling journey with OMS - Homeschooling OSS. Connect parents, teachers, and students on one powerful platform.",
    url: siteUrl, // Using the defined siteUrl
    siteName: "OMS - Homeschooling OSS",
    images: [
      {
        url: `/og-image.png`, // Relative path, metadataBase will prepend the siteUrl
        width: 1200,
        height: 630,
        alt: "OMS - Homeschooling OSS Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMS - Homeschooling OSS | Revolutionizing Homeschooling",
    description:
      "Personalized learning, curriculum tools, and progress tracking. Discover the future of homeschooling with OMS - Homeschooling OSS.",
    // site: "@YourTwitterHandle", // Your site's Twitter @username
    creator: "@yoletlabs", // Creator's Twitter @username
    images: [`/twitter-image.png`], // Relative path
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
  // viewport: "width=device-width, initial-scale=1", // Next.js handles this by default
  // themeColor: "#007bff", // Example theme color
  // verification: { // Example for Google Search Console verification
  //   google: "your_google_verification_code",
  // },
  // alternates: { // If you have other languages
  //   canonical: '/', // Default canonical path
  //   languages: {
  //     'en-US': '/',
  //     // 'es-ES': '/es',
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>{children}</body>
    </html>
  );
}

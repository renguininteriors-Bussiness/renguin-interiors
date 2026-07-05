import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import GoogleAnalytics from "./components/GoogleAnalytics";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renguin-interiors.vercel.app"),

  title: {
    default: "Renguin Interiors | Premium Interior Designers in Madurai",
    template: "%s | Renguin Interiors",
  },

  description:
    "Premium Interior Designers in Madurai specializing in Luxury Interiors, Modular Kitchen, False Ceiling, Vinyl Flooring, Carpet Flooring, Imported Wallpapers, Mosquito Nets, Gym Flooring and Complete Interior Solutions.",

  keywords: [
    "Interior Designer Madurai",
    "Luxury Interior Designer Madurai",
    "Interior Design Madurai",
    "Modular Kitchen Madurai",
    "False Ceiling Madurai",
    "Vinyl Flooring Madurai",
    "Carpet Flooring Madurai",
    "Imported Wallpaper Madurai",
    "Mosquito Net Madurai",
    "Gym Flooring Madurai",
    "Home Interiors Madurai",
    "Office Interiors Madurai",
    "Commercial Interior Designers",
    "Renguin Interiors",
  ],

  authors: [
    {
      name: "Renguin Interiors",
    },
  ],

  creator: "Renguin Interiors",

  publisher: "Renguin Interiors",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  verification: {
    google: "G6vjkrp4Er46NzHprlWKCIJVGB02vGE4xs_V4zEBLEk",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://renguin-interiors.vercel.app",
    siteName: "Renguin Interiors",

    title: "Renguin Interiors | Premium Interior Designers in Madurai",

    description:
      "Luxury Interior Design, Modular Kitchen, False Ceiling, Flooring, Imported Wallpapers, Mosquito Nets and Complete Interior Solutions.",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Renguin Interiors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Renguin Interiors",

    description:
      "Premium Interior Designers in Madurai.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />

        <LocalBusinessSchema />

        {children}
      </body>
    </html>
  );
}
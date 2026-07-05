import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import GoogleAnalytics from "./components/GoogleAnalytics";

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
    "Premium Interior Designers in Madurai offering Modular Kitchen, False Ceiling, Vinyl Flooring, Carpet Flooring, Imported Wallpapers, Mosquito Nets, Gym Flooring and Complete Interior Solutions.",

  keywords: [
    "Interior Designer Madurai",
    "Interior Design",
    "Modular Kitchen Madurai",
    "False Ceiling",
    "Vinyl Flooring",
    "Carpet Flooring",
    "Imported Wallpaper",
    "Mosquito Net",
    "Gym Flooring",
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
  },

  verification: {
    google: "G6vjkrp4Er46NzHprlWKCIJVGB02vGE4xs_V4zEBLEk",
  },

  openGraph: {
    title: "Renguin Interiors | Premium Interior Designers in Madurai",

    description:
      "Luxury Interior Design, Flooring, Wallpapers, False Ceiling and Complete Interior Solutions.",

    url: "https://renguin-interiors.vercel.app",

    siteName: "Renguin Interiors",

    locale: "en_IN",

    type: "website",

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

        {children}
      </body>
    </html>
  );
}
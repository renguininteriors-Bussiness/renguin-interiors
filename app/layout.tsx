import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "RENGUIN Interior Design",
    template: "%s | RENGUIN Interior Design",
  },

  description:
    "Luxury Interior Design in Madurai specializing in Carpet Flooring, Vinyl Flooring, Imported Wallpaper, Mosquito Nets, Gym Flooring and Premium Interior Solutions.",

  keywords: [
    "Interior Design",
    "Madurai Interior",
    "Vinyl Flooring",
    "Carpet Flooring",
    "Wallpaper",
    "Mosquito Net",
    "Gym Flooring",
    "Luxury Interior",
    "RENGUIN",
  ],

  authors: [
    {
      name: "RENGUIN Interior Design",
    },
  ],

  creator: "RENGUIN Interior Design",

  metadataBase: new URL("https://renguininteriors.com"),

  openGraph: {
    title: "RENGUIN Interior Design",
    description:
      "Luxury Interior Design Company in Madurai",

    url: "https://renguininteriors.com",

    siteName: "RENGUIN",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RENGUIN Interior Design",
    description:
      "Luxury Interior Design Company",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
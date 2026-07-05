import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://renguin-interiors.vercel.app"),

  title: {
    default: "Renguin Interiors | Premium Interior Designers in Madurai",
    template: "%s | Renguin Interiors",
  },

  description:
    "Renguin Interiors provides premium interior design, carpet flooring, vinyl flooring, imported wallpapers, mosquito net installation, false ceiling, modular kitchen, wardrobes, TV units and complete home & office interior solutions in Madurai.",

  keywords: [
    "Interior Designer Madurai",
    "Interior Design",
    "Carpet Flooring",
    "Vinyl Flooring",
    "SPC Flooring",
    "Imported Wallpaper",
    "Mosquito Net",
    "Gym Flooring",
    "False Ceiling",
    "Modular Kitchen",
    "Wardrobe",
    "TV Unit",
    "Home Interiors",
    "Office Interiors",
    "Renguin Interiors",
  ],

  authors: [
    {
      name: "Renguin Interiors",
    },
  ],

  creator: "Renguin Interiors",

  publisher: "Renguin Interiors",

  verification: {
    google: "G6vjkrp4Er46NzHprlWKCIJVGB02vGE4xs_V4zEBLEk",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://renguin-interiors.vercel.app",
  },

  openGraph: {
    title: "Renguin Interiors",
    description:
      "Premium Interior Designers in Madurai. Carpet Flooring, Vinyl Flooring, Wallpapers, False Ceiling, Modular Kitchen & Complete Interior Solutions.",

    url: "https://renguin-interiors.vercel.app",

    siteName: "Renguin Interiors",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Renguin Interiors",

    description:
      "Premium Interior Designers in Madurai. Luxury Interior Design & Flooring Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
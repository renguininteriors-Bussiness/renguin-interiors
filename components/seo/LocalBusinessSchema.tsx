export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",

    name: "Renguin Interiors",

    image: "https://renguin-interiors.vercel.app/logo.png",

    url: "https://renguin-interiors.vercel.app",

    telephone: "+91 8056893829",

    email: "renguininteriors@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "No.1, Muthu Thevar Colony, Virattipathu",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625016",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "",
      longitude: "",
    },

    areaServed: {
      "@type": "City",
      name: "Madurai",
    },

    openingHours: [
      "Mo-Sa 09:00-19:00"
    ],

    priceRange: "₹₹",

    description:
      "Premium Interior Designers in Madurai offering Modular Kitchen, False Ceiling, Vinyl Flooring, Carpet Flooring, Imported Wallpapers, Mosquito Nets, Gym Flooring and Complete Interior Solutions.",

    sameAs: [
      "https://renguin-interiors.vercel.app"
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modular Kitchen"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "False Ceiling"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vinyl Flooring"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpet Flooring"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Imported Wallpapers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mosquito Nets"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gym Flooring"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
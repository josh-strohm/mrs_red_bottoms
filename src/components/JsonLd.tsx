"use client";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ms Red Bottoms Cleaning Solutions LLC",
    description:
      "Professional residential and commercial cleaning services in Altoona, PA and surrounding areas.",
    url: "https://msredbottoms.com",
    telephone: "814-656-4993",
    email: "info@msredbottoms.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "705 Lincoln Manor",
      addressLocality: "Altoona",
      addressRegion: "PA",
      postalCode: "16602",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.51867497156168",
      longitude: "-78.4100537240894",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://facebook.com/msredbottoms",
      "https://instagram.com/msredbottoms",
    ],
    founder: {
      "@type": "Person",
      name: "Michelle Hartman",
    },
    areaServed: {
      "@type": "State",
      name: "Pennsylvania",
    },
    serviceType: [
      "Residential Cleaning",
      "Commercial Cleaning",
      "Move-In/Move-Out Cleaning",
      "Estate Clean-Out",
      "Deep Cleaning",
      "Post-Construction Cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Cleaning",
            description:
              "Routine cleaning, deep cleaning, and move-in/move-out services for homes, apartments, and condos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Cleaning",
            description:
              "Professional cleaning for offices, retail spaces, and common areas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clean-Outs",
            description:
              "Estate clean-outs, foreclosure clean-outs, hoarding situations, and garage/basement clean-outs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Specialty & Deep Cleaning",
            description:
              "Post-construction cleaning, seasonal deep cleans, and one-time projects.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ms Red Bottoms Cleaning Solutions LLC | Premium Cleaning Services in Altoona, PA",
    template: "%s | Ms Red Bottoms Cleaning Solutions LLC",
  },
  description:
    "Premium residential and commercial cleaning services in Altoona, PA. Owned by Michelle Hartman. Move-in/move-out, deep cleaning, estate clean-outs, and more. Get a free quote today.",
  keywords: [
    "cleaning services",
    "Altoona PA",
    "residential cleaning",
    "commercial cleaning",
    "move-in/move-out cleaning",
    "deep cleaning",
    "estate cleanout",
    "Blair County",
  ],
  authors: [{ name: "Michelle Hartman" }],
  creator: "Ms Red Bottoms Cleaning Solutions LLC",
  publisher: "Ms Red Bottoms Cleaning Solutions LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.msredbottomscleaning.com",
    siteName: "Ms Red Bottoms Cleaning Solutions LLC",
    title: "Ms Red Bottoms Cleaning Solutions LLC | Premium Cleaning Services in Altoona, PA",
    description:
      "Premium residential and commercial cleaning services in Altoona, PA. Owned by Michelle Hartman. Move-in/move-out, deep cleaning, estate clean-outs, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ms Red Bottoms Cleaning Solutions LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ms Red Bottoms Cleaning Solutions LLC",
    description:
      "Premium residential and commercial cleaning services in Altoona, PA.",
  },
  alternates: {
    canonical: "https://www.msredbottomscleaning.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ms Red Bottoms Cleaning Solutions LLC",
              description:
                "Premium residential and commercial cleaning services in Altoona, PA",
              url: "https://www.msredbottomscleaning.com",
              telephone: "+1-814-656-4993",
              email: "mrsredbottomscleaning@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "625 Sharrar Dr",
                addressLocality: "Altoona",
                addressRegion: "PA",
                postalCode: "16602",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.4316",
                longitude: "78.3940",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              priceRange: "$$",
              areaServed: [
                "Altoona",
                "Hollidaysburg",
                "Duncansville",
                "Tyrone",
                "Bellwood",
                "Roaring Spring",
              ],
              serviceType: [
                "Residential Cleaning",
                "Commercial Cleaning",
                "Move-in/Move-out Cleaning",
                "Deep Cleaning",
                "Estate Cleanout",
              ],
              founder: {
                "@type": "Person",
                name: "Michelle Hartman",
              },
              owner: {
                "@type": "Person",
                name: "Michelle Hartman",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navigation />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
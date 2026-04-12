import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
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
    "Professional residential and commercial cleaning services in Altoona, PA. Move-in/move-out clean-outs, deep cleaning, and specialty services. Locally owned and insured.",
  keywords: [
    "cleaning services",
    "Altoona PA",
    "residential cleaning",
    "commercial cleaning",
    "move-in move-out cleaning",
    "deep cleaning",
    "estate cleanout",
    "Blair County",
  ],
  authors: [{ name: "Ms Red Bottoms Cleaning Solutions LLC" }],
  creator: "Ms Red Bottoms Cleaning Solutions LLC",
  publisher: "Ms Red Bottoms Cleaning Solutions LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://msredbottoms.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msredbottoms.com",
    siteName: "Ms Red Bottoms Cleaning Solutions LLC",
    title: "Ms Red Bottoms Cleaning Solutions LLC | Premium Cleaning Services in Altoona, PA",
    description:
      "Professional residential and commercial cleaning services in Altoona, PA. Move-in/move-out clean-outs, deep cleaning, and specialty services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ms Red Bottoms Cleaning Solutions LLC - Premium Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ms Red Bottoms Cleaning Solutions LLC",
    description:
      "Premium cleaning services for homes and businesses in Altoona, PA",
    images: ["/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A] font-sans">
        <JsonLd />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

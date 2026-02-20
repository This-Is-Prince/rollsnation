import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppCheckProvider } from "@/src/context/AppCheckContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics, GoogleAnalyticsScripts } from "@/components/Analytics";
import {
  allFranchiseSeoKeywords,
  broaderAttractorKeywords,
  locationKeywords,
  moneyKeywords,
  primaryKeywords,
} from "@/src/lib/franchiseSeoKeywords";
import { absoluteUrl, getSiteOrigin } from "@/src/lib/site-url.server";
import { PRIMARY_PHONE, SOCIAL_LINKS } from "@/src/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteOrigin = await getSiteOrigin();

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: "Rolls Nation | Best Kathi Rolls Franchise in India",
      template: "%s | Rolls Nation",
    },
    description:
      "Kathi roll franchise in India with low investment models, strong ROI, and full setup support. Explore kathi roll franchise cost, Punjab opportunities, and step-by-step application guidance.",
    keywords: [
      ...primaryKeywords,
      ...moneyKeywords,
      ...locationKeywords,
      ...broaderAttractorKeywords,
      "Rolls Nation",
      "best fast food franchise",
    ],
    authors: [{ name: "Rolls Nation" }],
    creator: "Rolls Nation",
    publisher: "Rolls Nation",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Rolls Nation - Best Kathi Rolls Franchise in India",
      description:
        "Start your own kathi roll and wraps franchise with Rolls Nation. Get cost, investment, and franchise process details for India and Punjab.",
      url: siteOrigin,
      siteName: "Rolls Nation",
      images: [
        {
          url: "/rollsnation.jpeg",
          width: 1200,
          height: 630,
          alt: "Rolls Nation Franchise",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Rolls Nation | Kathi Roll Franchise in India",
      description:
        "Low investment kathi roll franchise with strong ROI and complete support.",
      images: ["/rollsnation.jpeg"],
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteOrigin, siteImageUrl, siteLogoUrl] = await Promise.all([
    getSiteOrigin(),
    absoluteUrl("/rollsnation.jpeg"),
    absoluteUrl("/rollsnation.webp"),
  ]);

  const sameAsLinks = SOCIAL_LINKS.map((link) => link.href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Rolls Nation",
    image: siteImageUrl,
    "@id": siteOrigin,
    url: siteOrigin,
    telephone: PRIMARY_PHONE,
    servesCuisine: "Indian",
    areaServed: ["India", "Punjab", "Ludhiana", "Chandigarh", "North India"],
    description:
      "Kathi roll franchise and street food franchise opportunity in India with low investment and high ROI support models.",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "S.C.O 35, GF, Celebration Bazar, G.T Road",
      addressLocality: "Khanna",
      addressRegion: "Punjab",
      postalCode: "141401",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.7071,
      longitude: 76.2167,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:00",
    },
    sameAs: sameAsLinks,
    knowsAbout: allFranchiseSeoKeywords,
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rolls Nation",
    url: siteOrigin,
    logo: siteLogoUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-76968-33321",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "S.C.O 35, GF, Celebration Bazar, G.T Road",
      addressLocality: "Khanna",
      addressRegion: "Punjab",
      postalCode: "141401",
      addressCountry: "IN",
    },
    sameAs: sameAsLinks,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/rollsnation.jpeg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <GoogleAnalyticsScripts />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <AppCheckProvider>
          <Analytics />

          <header className="fixed top-0 left-0 right-0 z-50">
            <TopBar />
            <Navbar />
          </header>

          <main className="flex-1">{children}</main>

          <Footer />
        </AppCheckProvider>
      </body>
    </html>
  );
}

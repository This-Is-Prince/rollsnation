import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppCheckProvider } from "@/src/context/AppCheckContext";
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rollsnationindia.in'),
  title: {
    default: 'Rolls Nation | Best Kathi Rolls Franchise in India',
    template: '%s | Rolls Nation',
  },
  description: 'Join India\'s fastest growing Kathi Roll franchise. Rolls Nation offers 99+ menu variants, low investment models, and high ROI. 25+ branches across India.',
  keywords: ['Kathi Rolls', 'Franchise Opportunity India', 'Food Franchise', 'Rolls Nation', 'Best Fast Food Franchise'],
  authors: [{ name: 'Rolls Nation' }],
  creator: 'Rolls Nation',
  publisher: 'Rolls Nation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Rolls Nation - Best Kathi Rolls Franchise in India',
    description: 'Start your own food business with Rolls Nation. 15+ years of experience and 25+ outlets.',
    url: 'https://rollsnationindia.in',
    siteName: 'Rolls Nation',
    images: [
      {
        url: '/rollsnation.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rolls Nation Franchise',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolls Nation Franchise',
    description: 'Join the fastest growing Kathi Roll franchise network in India.',
    images: ['/rollsnation.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Rolls Nation',
    image: '/rollsnation.jpeg',
    '@id': 'https://rollsnationindia.in',
    url: 'https://rollsnationindia.in',
    telephone: '+917696833321',
    menu: 'https://rollsnationindia.in/menu',
    servesCuisine: 'Indian',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'S.C.O 35, GF, Celebration Bazar, G.T Road',
      addressLocality: 'Khanna',
      addressRegion: 'Punjab',
      postalCode: '141401',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.7071,
      longitude: 76.2167,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '23:00',
    },
    sameAs: [
      "https://www.facebook.com/rollsnationindia",
      "https://www.instagram.com/rollsnationindia",
      "https://x.com/rolls_nation",
      "https://www.linkedin.com/company/rolls-nation",
      "https://www.youtube.com/@rollsnationindia"
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <AppCheckProvider>
          <header className="fixed top-0 left-0 right-0 z-50">
            <TopBar />
            <Navbar />
          </header>
          
          {/* <div className="h-20 lg:h-34" aria-hidden="true" /> */}
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </AppCheckProvider>
      </body>
    </html>
  );
}

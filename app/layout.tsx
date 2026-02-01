import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: 'Best Kathi Rolls Franchise in India | Rolls Nation',
  description: 'Join the fastest growing Kathi Roll franchise. 15+ years of experience, 99+ menu variants, and 25+ branches across India.',
  keywords: ['Kathi Rolls', 'Franchise India', 'Fast Food Business', 'Rolls Nation'],
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
        <header className="fixed top-0 left-0 w-full z-50">
           <TopBar />
           <Navbar />
        </header>
        {/* Add padding top to body to account for fixed header if needed, 
            but for a transparent hero, we usually leave it 0 */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Compass, MapPin, Phone, Store, TrendingUp } from 'lucide-react';
import {
  allFranchiseSeoKeywords,
  broaderAttractorKeywords,
  hindiAndHinglishKeywords,
  locationKeywords,
  primaryKeywords,
} from '@/src/lib/franchiseSeoKeywords';

const faqs = [
  {
    question: 'Is kathi roll franchise in Punjab profitable?',
    answer:
      'Punjab has strong demand for quick service food formats. With a right-location rollout and delivery-ready operations, kathi roll franchise in Punjab can deliver healthy payback timelines.',
  },
  {
    question: 'Can I apply for kathi roll franchise in Ludhiana?',
    answer:
      'Yes. You can apply for kathi roll franchise in Ludhiana by sharing location preference, budget range, and business format through WhatsApp or direct call.',
  },
  {
    question: 'Do you support franchise opportunities in Chandigarh and North India?',
    answer:
      'Yes. We support kathi roll franchise opportunity in North India including Punjab, Chandigarh, Delhi NCR, and nearby growth corridors.',
  },
  {
    question: 'What is required for food franchise in Punjab?',
    answer:
      'You need a suitable site, investment readiness, basic documentation, and willingness to run or supervise daily operations with standardized quality controls.',
  },
  {
    question: 'Can I open a takeaway or kiosk format in smaller cities?',
    answer:
      'Yes. Takeaway, kiosk, and compact QSR models are practical options for tier-2 and tier-3 cities looking for low investment food franchise opportunities.',
  },
];

export const metadata: Metadata = {
  title: 'Kathi Roll Franchise in Punjab & Ludhiana | Rolls Franchise Opportunity',
  description:
    'Explore kathi roll franchise in Punjab, Ludhiana, Chandigarh, and North India with low investment formats, quick setup support, and strong ROI potential.',
  keywords: [...locationKeywords, ...primaryKeywords, ...broaderAttractorKeywords, ...hindiAndHinglishKeywords],
  alternates: {
    canonical: 'https://rollsnationindia.in/kathi-roll-franchise-in-punjab',
  },
  openGraph: {
    title: 'Kathi Roll Franchise in Punjab | Rolls Nation',
    description:
      'Get city-focused support for kathi roll franchise opportunity in Punjab, Ludhiana, and North India with full setup and operational assistance.',
    url: 'https://rollsnationindia.in/kathi-roll-franchise-in-punjab',
    images: ['/rollsnation.jpeg'],
  },
};

export default function KathiRollFranchiseInPunjabPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rollsnationindia.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Franchise',
        item: 'https://rollsnationindia.in/franchise',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Kathi Roll Franchise in Punjab',
        item: 'https://rollsnationindia.in/kathi-roll-franchise-in-punjab',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Rolls Nation Franchise Enquiry - Punjab',
    url: 'https://rollsnationindia.in/kathi-roll-franchise-in-punjab',
    telephone: '+917696833321',
    image: 'https://rollsnationindia.in/rollsnation.jpeg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'S.C.O 35, GF, Celebration Bazar, G.T Road',
      addressLocality: 'Khanna',
      addressRegion: 'Punjab',
      postalCode: '141401',
      addressCountry: 'IN',
    },
    areaServed: ['Punjab', 'Ludhiana', 'Chandigarh', 'North India', 'Delhi', 'Haryana', 'Himachal Pradesh'],
    sameAs: [
      'https://www.facebook.com/rollsnationindia',
      'https://www.instagram.com/rollsnationindia',
      'https://x.com/rolls_nation',
      'https://www.linkedin.com/company/rolls-nation',
      'https://www.youtube.com/@rollsnationindia',
    ],
  };

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/map-2.png')] bg-contain bg-left bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/90 to-black" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-24">
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
            Kathi Roll Franchise in Punjab, Ludhiana &amp; North India
          </h1>
          <p className="mt-6 max-w-4xl text-zinc-300 md:text-lg">
            Designed for local-intent searches like <strong>kathi roll franchise in Punjab</strong>,{' '}
            <strong>kathi roll franchise in Ludhiana</strong>, <strong>street food franchise Punjab</strong>, and{' '}
            <strong>kathi roll franchise near me</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917696833321"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
            >
              Enquire for Punjab
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+917696833321"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
            >
              <Phone className="h-4 w-4" />
              Call +91 76968-33321
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Market Coverage We Prioritize</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Tier-1 markets',
              'Tier-2 markets',
              'Tier-3 markets',
              'Pan India markets',
              'North, South, East, and West regions',
              'Emerging growth markets',
            ].map((market) => (
              <div key={market} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="flex items-center gap-2 text-sm font-bold uppercase text-zinc-100">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  {market}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: 'Local Demand Mapping',
                text: 'Catchment behavior for college zones, offices, highways, and delivery cluster hotspots.',
              },
              {
                icon: Store,
                title: 'Format Selection',
                text: 'Choose food court, kiosk, takeaway, or dine-in model for the best local ROI.',
              },
              {
                icon: TrendingUp,
                title: 'Regional Growth Focus',
                text: 'Optimized for kathi roll franchise opportunity in North India with local launch planning.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <item.icon className="h-6 w-6 text-yellow-500" />
                <h3 className="mt-4 text-lg font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Popular Local Search Phrases</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {locationKeywords.map((phrase) => (
              <span key={phrase} className="rounded-full border border-zinc-700 bg-black/40 px-3 py-2 text-xs text-zinc-200">
                {phrase}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {hindiAndHinglishKeywords.map((phrase) => (
              <span key={phrase} className="rounded-full border border-zinc-700 bg-zinc-900/40 px-3 py-2 text-xs text-zinc-200">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">FAQ: Punjab Franchise Enquiry</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-zinc-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
            <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Build Your Rolls Franchise in Punjab</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              Combine low investment food franchise India demand with local city execution and standardized operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Start Franchise Enquiry
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/kathi-roll-franchise-cost"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Cost &amp; Investment Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <details className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
            <summary className="cursor-pointer text-sm font-bold uppercase tracking-wide text-yellow-500">
              Full location SEO keyword coverage
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...new Set([...locationKeywords, ...broaderAttractorKeywords, ...allFranchiseSeoKeywords.slice(0, 25)])].map((phrase) => (
                <span key={phrase} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                  {phrase}
                </span>
              ))}
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}

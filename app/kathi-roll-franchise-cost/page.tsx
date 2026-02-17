import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BadgeIndianRupee, Calculator, CircleCheckBig, Clock3, Store, TrendingUp } from 'lucide-react';
import {
  allFranchiseSeoKeywords,
  brandDiscoveryKeywords,
  hindiAndHinglishKeywords,
  locationKeywords,
  longTailKeywords,
  moneyKeywords,
  primaryKeywords,
} from '@/src/lib/franchiseSeoKeywords';

const faqs = [
  {
    question: 'What is the kathi roll franchise cost in India?',
    answer:
      'The total kathi roll franchise investment depends on model and city. At Rolls Nation, formats start from low investment ranges and include franchise fee, setup, equipment, branding, and onboarding support.',
  },
  {
    question: 'Can I start a kathi roll franchise under 10 lakhs?',
    answer:
      'Yes, food court and takeaway-focused models are usually best for entrepreneurs searching for kathi roll franchise under 10 lakhs or low investment kathi roll franchise.',
  },
  {
    question: 'What is the franchise fee for kathi rolls?',
    answer:
      'Franchise fee varies by brand and support level. You should evaluate franchise fee together with kitchen setup, training, and supply support before comparing package price.',
  },
  {
    question: 'How much ROI or profit margin is possible in a kathi roll franchise?',
    answer:
      'ROI depends on location, rent, order volume, and operations discipline. High-footfall takeaway or QSR formats generally target fast payback period and healthy profit margin.',
  },
  {
    question: 'Is there demand for rolls franchise in Punjab and North India?',
    answer:
      'Yes, there is strong demand for rolls, wraps, and frankie formats in Punjab, Ludhiana, Chandigarh, and surrounding tier-2 markets where quick-service food performs consistently.',
  },
  {
    question: 'Do people search frankie franchise cost and wraps franchise India for the same category?',
    answer:
      'Yes. Users often compare kathi roll franchise, frankie franchise India, rolls and wraps franchise, and wrap rolls franchise while evaluating options.',
  },
];

export const metadata: Metadata = {
  title: 'Kathi Roll Franchise Cost in India (2026) | Low Investment, High ROI',
  description:
    'Get complete kathi roll franchise cost, investment, franchise fee, ROI, payback period, and low investment models in India. Explore Punjab and Ludhiana opportunities.',
  keywords: [...primaryKeywords, ...moneyKeywords, ...locationKeywords, ...longTailKeywords.slice(0, 8)],
  alternates: {
    canonical: 'https://rollsnationindia.in/kathi-roll-franchise-cost',
  },
  openGraph: {
    title: 'Kathi Roll Franchise Cost in India | Rolls Nation',
    description:
      'Understand kathi rolls franchise cost in India, total investment, franchise fee, and return potential for takeaway, food court, and dine-in models.',
    url: 'https://rollsnationindia.in/kathi-roll-franchise-cost',
    images: ['/rollsnation.jpeg'],
  },
};

export default function KathiRollFranchiseCostPage() {
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
        name: 'Kathi Roll Franchise Cost',
        item: 'https://rollsnationindia.in/kathi-roll-franchise-cost',
      },
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

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/90 to-black" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-24">
          <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500">Investment Guide</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
            Kathi Roll Franchise Cost, Investment &amp; ROI in India
          </h1>
          <p className="mt-6 max-w-4xl text-zinc-300 md:text-lg">
            Searchers looking for <strong>kathi roll franchise cost</strong>, <strong>kathi roll franchise investment</strong>,{' '}
            <strong>franchise fee for kathi rolls</strong>, and <strong>rolls franchise cost India</strong> usually want
            one thing: a clear business path. This page gives you cost clarity, model options, and next-step actions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917696833321"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
            >
              Get Cost Details
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/how-to-start-kathi-roll-franchise"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
            >
              Franchise Process
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Cost Breakdown by Model</h2>
            <p className="mt-4 text-zinc-300">
              For users searching: total investment for kathi roll franchise, kathi roll franchise package price, and kathi roll franchise under 15 lakhs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                model: 'Food Court / Takeaway',
                investment: 'INR 9 Lacs',
                fee: 'INR 3 Lacs (included)',
                payback: '9-10 months',
                intent: 'kathi roll franchise under 10 lakhs',
              },
              {
                model: 'Dine-In Restaurant',
                investment: 'INR 15 Lacs',
                fee: 'INR 3 Lacs (included)',
                payback: '14-15 months',
                intent: 'profitable fast food franchise under 15 lakhs',
              },
              {
                model: 'Convert Existing Outlet',
                investment: 'After site visit',
                fee: 'INR 3 Lacs',
                payback: '6-14 months',
                intent: 'kathi roll kiosk franchise / takeaway model / QSR model',
              },
            ].map((item) => (
              <article key={item.model} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className="text-xl font-black uppercase text-white">{item.model}</h3>
                <div className="mt-5 space-y-3 text-sm text-zinc-300">
                  <p className="flex items-center gap-2">
                    <BadgeIndianRupee className="h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Investment:</strong> {item.investment}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Store className="h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Franchise Fee:</strong> {item.fee}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Payback:</strong> {item.payback}
                    </span>
                  </p>
                  <p className="text-xs uppercase tracking-wide text-yellow-500">{item.intent}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h2 className="text-2xl font-black uppercase text-white md:text-3xl">What Drives Profit Margin &amp; ROI?</h2>
              <ul className="mt-6 space-y-4 text-zinc-300">
                {[
                  'Rent-to-revenue ratio in high-footfall locations',
                  'Fast order turn-around for wraps, frankie, and rolls',
                  'Food cost control through centralized procurement',
                  'Delivery + takeaway mix for QSR profitability',
                  'Daily operations consistency and local promotions',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h2 className="text-2xl font-black uppercase text-white md:text-3xl">Cost Keywords We Target</h2>
              <p className="mt-4 text-sm text-zinc-400">High-intent conversion phrases from real buyer searches:</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {moneyKeywords.slice(0, 10).map((phrase) => (
                  <span key={phrase} className="rounded-full border border-zinc-700 bg-black/40 px-3 py-2 text-xs text-zinc-200">
                    {phrase}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 text-sm text-zinc-300">
                <p className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-yellow-500" />
                  kathi roll franchise ROI calculator
                </p>
                <p className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-yellow-500" />
                  how much profit in kathi roll franchise per month
                </p>
                <p className="flex items-center gap-2">
                  <BadgeIndianRupee className="h-4 w-4 text-yellow-500" />
                  fast food franchise under 10 lakhs India
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Brand Comparison Search Terms</h2>
          <p className="mt-4 max-w-4xl text-zinc-300">
            Many users compare multiple brands before buying a roll franchise opportunity. These are common discovery searches:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {brandDiscoveryKeywords.map((phrase) => (
              <span key={phrase} className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-xs text-zinc-200">
                {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Hindi / Hinglish Franchise Queries</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hindiAndHinglishKeywords.map((phrase) => (
              <p key={phrase} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-sm text-zinc-100">
                {phrase}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">FAQ: Kathi Roll Franchise Cost &amp; Investment</h2>
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
            <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Need Exact Cost for Your City?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              Talk to the team for kathi roll franchise in Punjab, Ludhiana, Chandigarh, Delhi, Mumbai, Bangalore, and Hyderabad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Enquire on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/kathi-roll-franchise-in-punjab"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Punjab Franchise Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <details className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
            <summary className="cursor-pointer text-sm font-bold uppercase tracking-wide text-yellow-500">
              Full SEO keyword coverage used on this page
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
              {allFranchiseSeoKeywords.map((phrase) => (
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

import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, FileText, MapPin, Settings, Store, Users } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/config/site';
import { buildPageMetadata } from '@/src/lib/seo';
import { absoluteUrl } from '@/src/lib/site-url.server';
import {
  actionKeywords,
  allFranchiseSeoKeywords,
  benefitKeywords,
  broaderAttractorKeywords,
  longTailKeywords,
  primaryKeywords,
} from '@/src/lib/franchiseSeoKeywords';

const processSteps = [
  {
    name: 'Submit Franchise Enquiry',
    text: 'Start with a kathi roll franchise enquiry on WhatsApp or phone and share preferred city, budget, and business format.',
  },
  {
    name: 'Discuss Investment & Model',
    text: 'Pick the right format: food court, takeaway, dine-in, or conversion model based on area and target investment.',
  },
  {
    name: 'Location Feasibility Check',
    text: 'Get site evaluation for footfall, visibility, catchment demand, rental viability, and delivery potential.',
  },
  {
    name: 'Application & Documentation',
    text: 'Complete the kathi roll franchise application and submit KYC, ownership/lease proof, and business details.',
  },
  {
    name: 'Outlet Setup & Branding',
    text: 'Execute standardized kitchen setup, branding, equipment alignment, and pre-opening compliance checks.',
  },
  {
    name: 'Team Training & Launch',
    text: 'Finalize skilled man power, operational training, SOP handover, and local launch campaign.',
  },
];

const faqs = [
  {
    question: 'How to start kathi roll franchise in India?',
    answer:
      'Start by selecting your model, investment range, and target location. Then apply for kathi roll franchise, complete brand evaluation, submit documents, and begin setup/training for launch.',
  },
  {
    question: 'What are the kathi roll franchise requirements?',
    answer:
      'Typical requirements include location size, investment readiness, basic legal documentation, and day-to-day operating commitment or hiring a trained operations manager.',
  },
  {
    question: 'How to get kathi roll franchise in Punjab or Ludhiana?',
    answer:
      'For Punjab and Ludhiana, you should start with location discussion and quick feasibility. High-traffic market clusters usually perform well for rolls and wraps franchise formats.',
  },
  {
    question: 'Is kathi roll franchise profitable in tier-2 cities?',
    answer:
      'Yes, with the right rent structure and delivery-focused model, kathi roll franchise can be profitable in small cities and tier-2 markets.',
  },
  {
    question: 'Can I start as a kiosk franchise or takeaway model?',
    answer:
      'Yes. Kiosk and takeaway formats are popular for low investment high profit kathi roll franchise strategies and often target faster payback timelines.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/how-to-start-kathi-roll-franchise',
    title: 'How to Start Kathi Roll Franchise in India | Process, Requirements & Application',
    description:
      'Learn how to start kathi roll franchise with full process, requirements, application steps, investment model selection, and launch support for India and Punjab.',
    keywords: [...actionKeywords, ...primaryKeywords, ...longTailKeywords.slice(0, 12), ...benefitKeywords.slice(0, 6)],
    openGraph: {
      title: 'How to Start Kathi Roll Franchise | Rolls Nation',
      description:
        'Step-by-step guide to apply for kathi roll franchise, complete documentation, setup the outlet, train staff, and launch successfully.',
      images: ['/rollsnation.jpeg'],
    },
  });
}

export default async function HowToStartKathiRollFranchisePage() {
  const [homeUrl, franchiseUrl, processPageUrl] = await Promise.all([
    absoluteUrl('/'),
    absoluteUrl('/franchise'),
    absoluteUrl('/how-to-start-kathi-roll-franchise'),
  ]);

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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Start Kathi Roll Franchise in India',
    description:
      'Step-by-step process to become kathi roll franchisee including enquiry, investment planning, documentation, setup, training, and launch.',
    totalTime: 'P60D',
    step: processSteps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.name,
      text: step.text,
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
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Franchise',
        item: franchiseUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How to Start Kathi Roll Franchise',
        item: processPageUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/90 to-black" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-24">
          <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500">Franchise Process Guide</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
            How to Start Kathi Roll Franchise in India
          </h1>
          <p className="mt-6 max-w-4xl text-zinc-300 md:text-lg">
            If you are searching <strong>how to start kathi roll franchise</strong>, <strong>how to get kathi roll franchise</strong>,{' '}
            <strong>kathi roll franchise process</strong>, and <strong>kathi roll franchise requirements</strong>, this guide
            gives a practical step-by-step roadmap.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              data-analytics-source="howto_hero_whatsapp"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
            >
              Apply for Franchise
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/kathi-roll-franchise-cost"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
            >
              View Cost Breakdown
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Step-by-Step Franchise Application Process</h2>
            <p className="mt-4 text-zinc-300">
              Targeting: apply for kathi roll franchise, become kathi roll franchisee, join kathi roll franchise, buy kathi roll franchise.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, idx) => (
              <article key={step.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-yellow-500">Step {idx + 1}</p>
                <h3 className="mt-2 text-xl font-black uppercase text-white">{step.name}</h3>
                <p className="mt-3 text-zinc-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                icon: FileText,
                title: 'Documentation',
                text: 'KYC, address proof, ownership or lease documents, and business details.',
              },
              {
                icon: Store,
                title: 'Site & Layout',
                text: 'Location suitability for footfall, deliveries, and operational efficiency.',
              },
              {
                icon: Users,
                title: 'Team Readiness',
                text: 'Skilled man power and service onboarding with standardized SOP training.',
              },
              {
                icon: Settings,
                title: 'Operational Setup',
                text: 'Kitchen process, procurement flow, quality controls, and opening checklist.',
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
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h2 className="text-2xl font-black uppercase text-white md:text-3xl">Location &amp; Market Fit Keywords</h2>
              <div className="mt-6 space-y-3 text-zinc-300">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  kathi roll franchise opportunity in North India
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  kathi roll franchise in Punjab / Ludhiana
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  kathi roll franchise near me
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h2 className="text-2xl font-black uppercase text-white md:text-3xl">Opportunity &amp; Benefit Terms</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {benefitKeywords.slice(0, 9).map((phrase) => (
                  <span key={phrase} className="rounded-full border border-zinc-700 bg-black/50 px-3 py-2 text-xs text-zinc-200">
                    {phrase}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">FAQ: How to Get Kathi Roll Franchise</h2>
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
            <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Ready to Start Rolls Business Franchise?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              From first enquiry to launch support, get complete help for low investment food franchise India and street food franchise opportunity models.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                data-analytics-source="howto_footer_whatsapp"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Start on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/kathi-roll-franchise-in-punjab"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Punjab &amp; North India Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <details className="rounded-2xl border border-zinc-800 bg-black/50 p-5">
            <summary className="cursor-pointer text-sm font-bold uppercase tracking-wide text-yellow-500">
              Full action-intent and long-tail keyword coverage
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
              {[...new Set([...actionKeywords, ...longTailKeywords, ...broaderAttractorKeywords, ...allFranchiseSeoKeywords.slice(0, 20)])].map((phrase) => (
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

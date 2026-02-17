import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, BadgeIndianRupee, Building2, Clock3, Handshake, Landmark, MapPin, Rocket, ShieldCheck, Store, Users } from 'lucide-react';

const franchiseModels = [
  {
    name: 'Model A - Food Court / Take Away',
    details: [
      { label: 'Min Area Req', value: '150-200 sq. ft' },
      { label: 'Total Investment', value: 'INR 9 lacs' },
      { label: 'Franchise Fee', value: 'INR 3 lacs (included in total investment)' },
      { label: 'Payback Period', value: '9-10 months' },
      { label: 'Mode of Operations', value: 'FOFO' },
      { label: 'Agreement Term', value: '5 years' },
    ],
  },
  {
    name: 'Model B - Dine-In Restaurant',
    details: [
      { label: 'Min Area Req', value: '450-500 sq. ft' },
      { label: 'Total Investment', value: 'INR 15 lacs' },
      { label: 'Franchise Fee', value: 'INR 3 lacs (included in total investment)' },
      { label: 'Payback Period', value: '14-15 months' },
      { label: 'Mode of Operations', value: 'FOFO' },
      { label: 'Agreement Term', value: '5 years' },
    ],
  },
  {
    name: 'Model C - Convert Your Existing Caffe to Rolls Nation',
    details: [
      { label: 'Min Area Req', value: '150-500 sq. ft' },
      { label: 'Total Investment', value: 'After site visit' },
      { label: 'Franchise Fee', value: 'INR 3 lacs' },
      { label: 'Payback Period', value: '6-14 months' },
      { label: 'Mode of Operations', value: 'FOFO' },
      { label: 'Agreement Term', value: '5 years' },
    ],
  },
];

const supportItems = [
  {
    title: 'Location Assistance',
    description: 'Help with site selection and outlet setup, ensuring high footfall and visibility.',
    icon: MapPin,
  },
  {
    title: 'Set Up Support',
    description: 'Guidance on standardized branding, kitchen layout, and interior aesthetics.',
    icon: Building2,
  },
  {
    title: 'Skilled man power',
    description: 'Comprehensive onboarding and training programs for kitchen and service staff.',
    icon: Users,
  },
  {
    title: 'Centralized Procurement',
    description: 'Access to high-quality ingredients and packaging at optimized rates.',
    icon: Landmark,
  },
  {
    title: 'Marketing & Campaign',
    description: 'Support with local and national campaigns, social media, and launch events.',
    icon: Rocket,
  },
  {
    title: 'Ongoing Operational Support',
    description: 'Regular audits, performance reviews, and business growth consultations.',
    icon: ShieldCheck,
  },
  {
    title: 'Mystery Shopper',
    description: 'Monthly MSP to ensure quality, service checks, and customer satisfaction.',
    icon: Handshake,
  },
];

export const metadata: Metadata = {
  title: 'Franchise | Rolls Nation - Best Food Franchise Opportunity',
  description:
    'Own a Rolls Nation franchise with FOCO/FOFO models, high ROI, setup support, and full operational guidance across India.',
  openGraph: {
    title: 'Rolls Nation Franchise Models',
    description:
      'Explore Rolls Nation franchise models, investment details, payback period, and complete franchise support.',
    url: 'https://rollsnationindia.in/franchise',
    images: ['/rollsnation.jpeg'],
  },
};

export default function FranchisePage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/90 to-black" />

        <div className="container relative z-10 mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-base font-bold uppercase tracking-[0.22em] text-yellow-500 md:text-lg">Best Food Franchise</p>
            <p className="mb-6 text-2xl font-black uppercase text-white md:text-4xl">Rolls Nation</p>
            <h1 className="text-5xl font-black uppercase italic leading-[0.95] text-white md:text-7xl">
              Own a <br />
              <span className="text-yellow-500">Franchise</span>
            </h1>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300">Be Your Own Boss</p>
            <p className="mt-6 max-w-3xl border-l-4 border-yellow-500 pl-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              Join hands with Rolls Nation, now doing the most profitable business made easy for everyone who needs to start
              their own dream restaurant with easy investment and innovative business model.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Get Franchise
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+917696833321"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Call +91 76968-33321
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">India&apos;s Own QSR Brand</p>
              <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">
                Rolls Nation<span className="align-super text-lg">&reg;</span>
              </h2>
              <p className="mt-6 text-zinc-300 leading-relaxed">
                ROLLS NATION<span className="align-super text-[10px]">&reg;</span> is a unique, independent and
                professional food brand. Also known for committed services and food taste for every customer. We are a
                fast-casual operation with dine-in and take-away elements. We have created a vibrant range of authentic
                Indian food, creating a range of distinctive and indulgent taste experiences. We pledge to make India&apos;s
                eating habits more healthy.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 md:p-10">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Rolls Nation Franchise Models</p>
              <h3 className="mt-4 text-xl font-black uppercase text-white md:text-2xl">FOCO / FOFO</h3>
              <p className="mt-6 text-zinc-300 leading-relaxed">
                FOCO: Franchise Owned Company Operated
                <br />
                FOFO: Franchise Owned Franchise Operated
              </p>
              <p className="mt-6 text-zinc-300 leading-relaxed">
                One of the very few brands that allows partners to leave the day to day operations upon the brand, and
                enjoy themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Choose Your Model</p>
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Rolls Nation Franchise Investment</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {franchiseModels.map((model) => (
              <article key={model.name} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
                <h3 className="text-xl font-black uppercase leading-tight text-white">{model.name}</h3>
                <dl className="mt-6 space-y-5">
                  {model.details.map((item) => (
                    <div key={item.label} className="border-b border-zinc-800/80 pb-4 last:border-b-0 last:pb-0">
                      <dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</dt>
                      <dd className="mt-2 text-sm font-semibold uppercase leading-relaxed text-zinc-200">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-zinc-950 px-5 py-10 md:px-10 md:py-14">
            <div className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Rolls Nation Presence 2026</p>
              <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Growing Across India</h2>
              <p className="mx-auto mt-6 max-w-4xl text-sm font-semibold uppercase leading-relaxed text-zinc-200 md:text-lg">
                Now presence in 11+ states / UT with 65+ cities and 75+ outlets across India. Planning to cross 100+
                outlet milestone by 2026 Q3.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid items-center gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
              <div className="order-2 mx-auto h-72 w-full max-w-sm rounded-2xl border border-zinc-800 bg-black/35 p-4 md:h-96 lg:order-1">
                <div className="relative h-full w-full">
                  <Image
                    src="/map-2.png"
                    alt="Rolls Nation map presence"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              <div className="order-1 grid grid-cols-3 gap-3 text-center lg:order-2">
                {[
                  { label: 'States / UT', value: '11+' },
                  { label: 'Cities', value: '65+' },
                  { label: 'Outlets', value: '75+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-zinc-700 bg-black/50 p-4">
                    <p className="text-2xl font-black text-yellow-500 md:text-3xl">{item.value}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-zinc-300 md:text-xs">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="order-3 mx-auto h-64 w-full max-w-sm rounded-2xl border border-zinc-800 bg-black/35 p-4 md:h-96">
                <div className="relative h-full w-full">
                  <Image
                    src="/now-opening.png"
                    alt="Now open for franchising"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Why Rolls Nation?</h2>
            <p className="mt-4 text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">What We Offer Partners</p>
          </div>

          <p className="mx-auto max-w-5xl text-center text-zinc-300 leading-relaxed">
            Investing in a Rolls Nation<span className="align-super text-[10px]">&reg;</span> franchise means becoming
            part of one of India&apos;s fastest-growing and most trusted QSR brand. With a proven, scalable business model
            that delivers high margins and rapid ROI, Rolls Nation offers franchisees a unique opportunity to tap into
            the booming street food market with the support of an experienced and passionate team. Our diverse,
            trend-driven menu caters to a wide customer base, while our centralized systems, standardized training, and
            strong brand identity ensure consistent quality across locations. Whether you&apos;re an aspiring entrepreneur
            or an experienced investor, Rolls Nation provides end-to-end support from setup to operations, empowering
            you to run a successful outlet with confidence and pride.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Franchise Support</h2>
            <p className="mt-4 text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">End-to-End Assistance</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className="mb-4 inline-flex rounded-full bg-yellow-500/10 p-3">
                  <item.icon className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-lg font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
            <h3 className="text-2xl font-black uppercase text-white md:text-4xl">Ready to Start Kathi Roll Franchise?</h3>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              Talk to our team and get complete guidance on investment, location, setup, and operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Start on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+917696833321"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                <Clock3 className="h-4 w-4" />
                Call +91 76968-33321
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-zinc-950/70 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-4">
            {[
              { label: 'Brand Type', value: 'Indian QSR', icon: Store },
              { label: 'Investment Starts', value: 'INR 10 Lacs', icon: BadgeIndianRupee },
              { label: 'Operations', value: 'FOCO / FOFO', icon: Handshake },
              { label: 'Agreement Term', value: '5 Years', icon: Clock3 },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-black/40 p-5">
                <item.icon className="mx-auto mb-3 h-5 w-5 text-yellow-500" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm font-black uppercase text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

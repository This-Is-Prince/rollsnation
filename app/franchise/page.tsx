import type { Metadata } from 'next';
import { ArrowRight, BadgeIndianRupee, Building2, Clock3, Handshake, Landmark, MapPin, Rocket, ShieldCheck, Store, Users } from 'lucide-react';

const franchiseModels = [
  {
    name: 'Model A - Food Court / Take Away',
    details: [
      { label: 'Min Area Req', value: '150-200 sq. ft' },
      { label: 'Total Investment', value: 'INR 10 lacs' },
      { label: 'Franchise Fee', value: 'INR 3 lacs (included in total investment)' },
      { label: 'Payback Period', value: '10-11 months' },
      { label: 'Mode of Operations', value: 'FOCO / FOFO' },
      { label: 'Agreement Term', value: '5 years' },
    ],
  },
  {
    name: 'Model B - Dine-In Restaurant',
    details: [
      { label: 'Min Area Req', value: '450-500 sq. ft' },
      { label: 'Total Investment', value: 'INR 16 lacs' },
      { label: 'Franchise Fee', value: 'INR 3 lacs (included in total investment)' },
      { label: 'Payback Period', value: '17-18 months' },
      { label: 'Mode of Operations', value: 'FOCO / FOFO' },
      { label: 'Agreement Term', value: '5 years' },
    ],
  },
  {
    name: 'Model C - Convert Your Existing Caffe to Rolls Nation',
    details: [
      { label: 'Min Area Req', value: '150-500 sq. ft' },
      { label: 'Total Investment', value: 'After site visit' },
      { label: 'Franchise Fee', value: 'INR 3 lacs' },
      { label: 'Payback Period', value: '8-14 months' },
      { label: 'Mode of Operations', value: 'FOCO / FOFO' },
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
    title: 'Staff Training',
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
          <div className="rounded-3xl border border-yellow-500/30 bg-linear-to-r from-yellow-500/15 to-zinc-900 p-8 md:p-12">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Rolls Nation Presence 2025</p>
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Growing Across India</h2>
            <p className="mt-6 text-lg font-bold uppercase leading-relaxed text-zinc-100">
              Now presence in 10+ states / UT with 48+ cities and 58+ outlets across India.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-zinc-300 md:text-base">
              Planning to cross 100+ outlet milestone by 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Founder&apos;s Note</p>
          <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Vision, Creativity &amp; Vivacity.</h2>
          <p className="mt-8 text-zinc-300">Dear Visitor,</p>

          <div className="mt-6 space-y-5 text-zinc-300 leading-relaxed">
            <p>
              In this realm of an impetuously changing world, survival in business must never be taken for granted.
              Our vision of the future must be lucid to allow anticipation of and response to new opportunities.
            </p>
            <p>
              ROLLS NATION<span className="align-super text-[10px]">&reg;</span> evolution depends on our management
              team and our achievements. To encourage further prosperity, we must be visionary, creative, and kinetic.
              But above all, our efforts must add value.
            </p>
            <p>
              Our vision of &quot;Great things in business are never done by one person; they&apos;re done by a team of
              people.&quot; has come quite a long way, and we undertake continuously serving you the best.
            </p>
            <p>
              Our business is guided by ethics and transparency, and we aim to further win and maintain customers by
              preparing packaged products that validate price, quality and of course, taste.
            </p>
            <p>
              ROLLS NATION<span className="align-super text-[10px]">&reg;</span> product range has been selected with
              thoughtful precision and utmost care to provide full meal options. Our products come from extensive
              research, and strictly, the choicest ingredients from farms direct.
            </p>
            <p>Thank you for visiting, Namashkar!</p>
          </div>

          <div className="mt-10 border-l-4 border-yellow-500 pl-5">
            <p className="text-lg font-black uppercase text-white">Uday Deep</p>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Founder / Owner</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-400">Rolls Nation</p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Why Rolls Nation?</p>
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">What We Offer Partners</h2>
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
            <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Franchise Support</p>
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">End-to-End Assistance</h2>
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
            <h3 className="text-2xl font-black uppercase text-white md:text-4xl">Ready to Start Your Franchise?</h3>
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

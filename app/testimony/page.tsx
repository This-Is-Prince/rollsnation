import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Newspaper, Quote } from 'lucide-react';

const pressCoverage = [
  {
    publication: 'Refugee Message',
    headline: 'Rolls Nation Opens Its First Outlet in Banur',
    excerpt:
      'The opening marked a strong start for fast-food lovers, with fresh rolls, wraps, and kebab specials drawing strong response from customers.',
  },
  {
    publication: 'The Northlines',
    headline: 'Rolls Nation enters Punjab growth corridor',
    excerpt:
      'The brand expansion focuses on quality, affordability, and quick service, creating a strong model for rapid franchise growth.',
  },
  {
    publication: 'Punjab Express',
    headline: 'Rolls Nation unveils first outlet in Banur',
    excerpt:
      'With a focus on hygiene and authentic taste, the outlet launch highlights the brand commitment to consistent food quality.',
  },
  {
    publication: 'Punjab Times',
    headline: 'Rolls Nation scales with customer-first strategy',
    excerpt:
      'From neighborhood stores to high-footfall markets, the brand strategy blends menu innovation with disciplined operations.',
  },
  {
    publication: 'Regional Feature',
    headline: 'Fast food QSR model sees strong traction',
    excerpt:
      'The takeaway and dine-in mix has improved repeat orders and local customer retention in expanding markets.',
  },
  {
    publication: 'Business Update',
    headline: 'Rolls and wraps category gains momentum',
    excerpt:
      'Consumers looking for quick, flavorful, and value-driven meals are driving demand in tier-1 and tier-2 locations.',
  },
  {
    publication: 'Industry Bulletin',
    headline: 'Structured support powers outlet consistency',
    excerpt:
      'Training systems, procurement discipline, and standard operating processes continue to support sustainable growth.',
  },
  {
    publication: 'Hindi Coverage',
    headline: 'Rolls Nation expansion and customer trust',
    excerpt:
      'The brand built strong recognition through balanced taste, quality, and service while expanding into new markets.',
  },
];

const founderNote = [
  'In this realm of an impetuously changing world, survival in business must never be taken for granted. Our vision of the future must be lucid to allow anticipation of and response to new opportunities.',
  'ROLLS NATION\u00ae evolution depends on our management team and our achievements. To encourage further prosperity, we must be visionary, creative, and kinetic. But above all, our efforts must add value.',
  'Our vision of "Great things in business are never done by one person; they are done by a team of people." has come quite a long way, and we undertake continuously serving you the best.',
  'Our business is guided by ethics and transparency, and we aim to further win and maintain customers by preparing packaged products that validate price, quality and of course, taste.',
  'ROLLS NATION\u00ae product range has been selected with thoughtful precision and utmost care to provide full meal options. Our products come from extensive research, and strictly, the choicest ingredients from farms direct.',
  'Thank you for visiting, Namashkar!',
];

export const metadata: Metadata = {
  title: 'Testimony | Rolls Nation Press Coverage & Founder Note',
  description:
    'Explore Rolls Nation press highlights and founder message. See how vision, creativity, and operational quality have built a strong food brand journey.',
  alternates: {
    canonical: 'https://rollsnationindia.in/testimony',
  },
  openGraph: {
    title: 'Rolls Nation Testimony',
    description: 'Media highlights and founder note from Rolls Nation.',
    url: 'https://rollsnationindia.in/testimony',
    images: ['/rollsnation.jpeg'],
  },
};

export default function TestimonyPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <section className="relative overflow-hidden border-b border-zinc-800 py-20">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-12" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/40 to-black" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-500">Testimony</p>
          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">Rolling Into The Limelight</h1>
          <p className="mx-auto mt-5 max-w-3xl text-zinc-300">
            A growing collection of media mentions, market momentum, and the story behind the people building Rolls Nation.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Press &amp; Media Highlights</h2>
            <div className="mx-auto mt-5 h-1 w-44 rounded-full bg-yellow-500" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pressCoverage.map((item, idx) => (
              <article
                key={`${item.publication}-${idx}`}
                className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white text-black shadow-xl shadow-black/30"
              >
                <div className="relative h-36 border-b border-zinc-200">
                  <Image
                    src="/rollsnation.jpeg"
                    alt={`${item.publication} coverage for Rolls Nation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-900">
                    <Newspaper className="h-3.5 w-3.5" />
                    {item.publication}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black leading-tight">{item.headline}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-16" />
        <div className="absolute inset-0 bg-black/75" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-12">
            <p className="text-base font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-lg">Founder Note</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Vision, Creativity &amp; Vivacity.
            </h2>
            <div className="mt-5 h-1 w-36 rounded-full bg-yellow-500" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              <p className="inline-block rounded-md bg-sky-900/50 px-3 py-2 text-2xl font-semibold text-white">
                Dear Visitor,
              </p>

              {founderNote.map((line, idx) => (
                <p
                  key={`${line}-${idx}`}
                  className="rounded-md bg-sky-900/45 px-3 py-2 text-lg leading-relaxed text-zinc-100"
                >
                  {idx === founderNote.length - 1 ? (
                    <>
                      Thank you for visiting, <strong>Namashkar!</strong>
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>

            <aside className="rounded-2xl border border-zinc-700 bg-black/45 p-5">
              <div className="relative mx-auto h-96 w-full max-w-sm">
                <Image
                  src="/pic.png"
                  alt="Mr. Uday Deep, Founder and Owner of Rolls Nation"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-4 border-t border-zinc-700 pt-4 text-center">
                <p className="text-2xl font-black uppercase text-white">Uday Deep</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-yellow-500">Founder / Owner</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-zinc-300">Rolls Nation</p>
              </div>
            </aside>
          </div>

          <div className="mt-14 rounded-3xl border border-zinc-700 bg-zinc-900/60 p-8 text-center md:p-10">
            <Quote className="mx-auto h-8 w-8 text-yellow-500" />
            <p className="mx-auto mt-4 max-w-4xl text-lg text-zinc-200">
              Great things in business are never done by one person; they are done by a team of people.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Explore Franchise
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

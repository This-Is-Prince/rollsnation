import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Quote } from 'lucide-react';
import PaginatedGallerySection from '@/components/gallery/PaginatedGallerySection';
import { WHATSAPP_LINK } from '@/src/config/site';
import { buildPageMetadata } from '@/src/lib/seo';
import { getTestimonyGalleryData } from '@/src/lib/testimony-data';

const founderNote = [
  'In this realm of an impetuously changing world, survival in business must never be taken for granted. Our vision of the future must be lucid to allow anticipation of and response to new opportunities.',
  'ROLLS NATION\u00ae evolution depends on our management team and our achievements. To encourage further prosperity, we must be visionary, creative, and kinetic. But above all, our efforts must add value.',
  'Our vision of "Great things in business are never done by one person; they are done by a team of people." has come quite a long way, and we undertake continuously serving you the best.',
  'Our business is guided by ethics and transparency, and we aim to further win and maintain customers by preparing packaged products that validate price, quality and of course, taste.',
  'ROLLS NATION\u00ae product range has been selected with thoughtful precision and utmost care to provide full meal options. Our products come from extensive research, and strictly, the choicest ingredients from farms direct.',
  'Thank you for visiting, Namashkar!',
];

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/testimony',
    title: 'Testimony | Rolls Nation Press Coverage & Founder Note',
    description:
      'Explore Rolls Nation press highlights and founder message. See how vision, creativity, and operational quality have built a strong food brand journey.',
    openGraph: {
      title: 'Rolls Nation Testimony',
      description: 'Media highlights and founder note from Rolls Nation.',
      images: ['/rollsnation.jpeg'],
    },
  });
}

export default async function TestimonyPage() {
  const { pressMediaItems, rnInteriorItems } = await getTestimonyGalleryData();

  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <section className="relative overflow-hidden border-b border-zinc-800 py-20">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-12" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/40 to-black" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="mt-4 text-3xl font-black uppercase text-yellow-500 md:text-4xl">Rolling Into The Limelight</h2>
          <p className="mx-auto mt-5 max-w-3xl text-zinc-300">
            A growing collection of media mentions, market momentum, and the story behind the people building Rolls Nation.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6">
          <PaginatedGallerySection
            sectionLabel="Press &amp; Media Section"
            heading="Rolls Nation in the Media"
            description="Discover the latest media coverage and press highlights of Rolls Nation, showcasing our journey, milestones, and the impact we've made in the food industry. Stay updated with our story as we continue to roll forward."
            items={pressMediaItems}
            itemsPerPage={8}
          />
        </div>
      </section>

      <section className="border-b border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <PaginatedGallerySection
            sectionLabel="Interiors Section"
            heading="Rolls Nation Interiors"
            description="A visual tour of our restaurant interiors across different cities, showcasing the unique ambiance and design elements that define the Rolls Nation experience."
            items={rnInteriorItems}
            itemsPerPage={8}
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-16" />
        <div className="absolute inset-0 bg-black/75" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500 md:text-base">Vision, Creativity &amp; Vivacity.</p>
            <h2 className="mt-3 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Rolls Nation - Founder Note
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
                href={WHATSAPP_LINK}
                data-analytics-source="testimony_footer_whatsapp"
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

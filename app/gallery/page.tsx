import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/config/site';
import PaginatedGallerySection from '@/components/gallery/PaginatedGallerySection';
import { foodGalleryItems, franchiseOwnerGalleryItems } from '@/src/lib/gallery-data';
import { buildPageMetadata } from '@/src/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/gallery',
    title: 'Gallery | Rolls Nation Outlets, Interiors, Team & Brand Moments',
    description:
      'Explore the Rolls Nation gallery with outlet interiors, launch moments, team energy, and signature brand spaces across locations.',
    openGraph: {
      title: 'Rolls Nation Gallery',
      description: 'A visual showcase of outlets, team culture, and customer moments at Rolls Nation.',
      images: ['/rollsnation.jpeg'],
    },
  });
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <section className="relative overflow-hidden border-b border-zinc-800 py-20">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/85 to-black" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-yellow-500">Our Gallery</p>
          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">Spaces, Moments & Brand Energy</h1>
          <div className="mx-auto mt-5 h-1 w-36 rounded-full bg-yellow-500" />
          <p className="mx-auto mt-6 max-w-3xl text-zinc-300 md:text-lg">
            A visual tour of Rolls Nation interiors, launch moments, team spirit, and the atmosphere that customers remember.
          </p>
        </div>
      </section>

      <section className="bg-linear-to-b from-zinc-950 via-black to-zinc-950 py-20 text-white">
        <div className="container mx-auto px-6">
          <PaginatedGallerySection
            sectionLabel="Food Section"
            heading="Food Highlights"
            description="A curated food gallery from RN FOOD IMAGES with editable title and description metadata."
            items={foodGalleryItems}
            itemsPerPage={6}
          />

          <div className="pt-16 h-px" />

          <PaginatedGallerySection
            sectionLabel="Franchise Owner Section"
            heading="Recent Franchise Owners"
            description="Owner spotlights pulled from FRANCHISE OWNERS ROLLS NATION filenames, with city-based titles and pagination."
            items={franchiseOwnerGalleryItems}
            itemsPerPage={6}
          />
        </div>
      </section>

      <section className="border-y border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative h-125 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <Image
                src="/rollsnation.jpeg"
                alt="Rolls Nation outlet environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-yellow-400">
                <Camera className="h-4 w-4" />
                In-Store Vibe
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase md:text-5xl">Designed for Experience</h2>
              <p className="mt-5 text-zinc-300 md:text-lg">
                Every Rolls Nation outlet is built to balance speed, comfort, and visual identity. From compact takeaway
                counters to full dine-in spaces, each location is designed to deliver memorable customer experience.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  'High-visibility store design and branding',
                  'Customer-friendly dine-in and takeaway zones',
                  'Launch moments and local event activation',
                  'Consistent visual identity across outlets',
                ].map((point) => (
                  <div key={point} className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
                    <p className="font-semibold text-zinc-100">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
                >
                  Explore Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  data-analytics-source="gallery_mid_whatsapp"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                >
                  Franchise Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
            <Sparkles className="mx-auto h-8 w-8 text-yellow-500" />
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Want Your Outlet Featured Next?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              Join the Rolls Nation expansion journey and build a visually strong, customer-loved fast food destination in your city.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                View Franchise Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                data-analytics-source="gallery_footer_whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Start on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/config/site';
import { buildPageMetadata } from '@/src/lib/seo';

const galleryItems = [
  { src: '/rollsnation.jpeg', alt: 'Rolls Nation seating zone and wall branding', title: 'Modern Dining Space' },
  { src: '/staffs/staff-1.jpg', alt: 'Rolls Nation interior lifestyle frame', title: 'Interior Styling' },
  { src: '/staffs/staff-2.jpg', alt: 'Rolls Nation customer waiting area', title: 'Service Corner' },
  { src: '/staffs/staff-3.jpg', alt: 'Rolls Nation themed decor wall and seating', title: 'Signature Decor' },
  { src: '/staffs/staff-4.jpg', alt: 'Rolls Nation counter and menu display', title: 'Counter Experience' },
  { src: '/staffs/staff-5.jpg', alt: 'Rolls Nation event and launch moments', title: 'Opening Moments' },
  { src: '/chef.png', alt: 'Rolls Nation chef with signature roll', title: 'Chef Spotlight' },
  { src: '/pic.png', alt: 'Rolls Nation founder portrait', title: 'Founder Presence' },
];

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

      <section className="bg-zinc-100 py-20 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase md:text-5xl">Our Visual Story</h2>
            <div className="mx-auto mt-5 h-1 w-44 rounded-full bg-yellow-500" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <article key={item.alt} className="group overflow-hidden rounded-3xl border border-zinc-300 bg-white shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-white">{item.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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

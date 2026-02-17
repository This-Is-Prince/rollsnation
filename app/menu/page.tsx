import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';

const signatureRolls = [
  { name: 'Aloo Veggie Roll', single: 75, double: 95 },
  { name: 'Tandoori Aloo Roll', single: 79, double: 99 },
  { name: 'Crispy Pizza Roll', single: 95, double: 115 },
  { name: 'Paneer Makhani Roll', single: 126, double: 149 },
  { name: 'Cheese Paneer Roll', single: 169, double: 199 },
];

const nonVegRolls = [
  { name: 'Hot Garlic Chicken Roll', single: 153, double: 179 },
  { name: 'Butter Chicken Roll', single: 162, double: 189 },
  { name: 'Chilli Chicken Roll', single: 169, double: 199 },
  { name: 'Peri Peri Chicken Roll', single: 189, double: 229 },
  { name: 'Chicken Seekh Kebab Roll', single: 139, double: 169 },
];

const burgersAndBites = [
  { name: 'Aloo Tikki Burger', price: 69 },
  { name: 'Crispy Nachos Burger', price: 89 },
  { name: 'Ultimate Veggie Burger', price: 99 },
  { name: 'Chicken Crunch Burger', price: 99 },
  { name: 'Spicy Chicken Burger', price: 149 },
  { name: 'Mexican Nachos', price: 99 },
];

const shakesAndCoolers = [
  { name: 'Cold Coffee', price: 99 },
  { name: 'Vanilla Shake', price: 99 },
  { name: 'Mango Shake', price: 99 },
  { name: 'Blue Lagoon', price: 99 },
  { name: 'Fresh Lime Soda', price: 89 },
  { name: 'Passion Fruit Cooler', price: 99 },
];

export const metadata: Metadata = {
  title: 'Our Menu | Rolls Nation Kathi Rolls, Burgers, Wraps & Beverages',
  description:
    'Explore the Rolls Nation menu with signature kathi rolls, burgers, wraps, shakes, coolers, fries, and combo meals.',
  alternates: {
    canonical: 'https://rollsnationindia.in/menu',
  },
  openGraph: {
    title: 'Rolls Nation Menu',
    description: 'Pocket-friendly bites with premium taste: rolls, burgers, beverages, and combo meals.',
    url: 'https://rollsnationindia.in/menu',
    images: ['/rollsnation.jpeg'],
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <section className="relative overflow-hidden border-b border-zinc-800 py-20">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/85 to-black" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-yellow-500">Our Menu</p>
          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">Pocket Friendly Bites, Premium Taste</h1>
          <div className="mx-auto mt-5 h-1 w-36 rounded-full bg-yellow-500" />
          <p className="mx-auto mt-6 max-w-3xl text-zinc-300 md:text-lg">
            From signature kathi rolls and burgers to shakes, coolers, and loaded combos, Rolls Nation serves flavor-packed
            options for every appetite.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['150+ Menu Variants', 'Veg + Non-Veg Options', 'Combo Meals Available', 'Dine-in + Takeaway + Delivery'].map((tag) => (
              <span key={tag} className="rounded-full border border-yellow-500/60 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-yellow-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-18 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase md:text-5xl">Our Menu Boards</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-700">
              Inspired by our in-store menu style, here is a quick look at popular categories and pricing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border-4 border-zinc-900 bg-[#121a2f] text-white shadow-2xl">
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
                  <h3 className="mb-4 text-lg font-black uppercase text-yellow-400">Signature Rolls</h3>
                  <div className="space-y-3 text-sm">
                    {signatureRolls.map((item) => (
                      <div key={item.name} className="grid grid-cols-[1fr_auto_auto] gap-2">
                        <span>{item.name}</span>
                        <span className="text-zinc-300">{item.single}</span>
                        <span className="text-yellow-300">{item.double}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-black uppercase text-yellow-400">Non-Veg Rolls</h3>
                  <div className="space-y-3 text-sm">
                    {nonVegRolls.map((item) => (
                      <div key={item.name} className="grid grid-cols-[1fr_auto_auto] gap-2">
                        <span>{item.name}</span>
                        <span className="text-zinc-300">{item.single}</span>
                        <span className="text-yellow-300">{item.double}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border-4 border-zinc-900 bg-yellow-300 text-zinc-900 shadow-2xl">
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-b border-zinc-900/20 p-6 sm:border-b-0 sm:border-r sm:border-zinc-900/20">
                  <h3 className="mb-4 text-lg font-black uppercase text-red-700">Burgers & Bites</h3>
                  <div className="space-y-3 text-sm font-semibold">
                    {burgersAndBites.map((item) => (
                      <div key={item.name} className="grid grid-cols-[1fr_auto] gap-2">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-black uppercase text-red-700">Shakes & Coolers</h3>
                  <div className="space-y-3 text-sm font-semibold">
                    {shakesAndCoolers.map((item) => (
                      <div key={item.name} className="grid grid-cols-[1fr_auto] gap-2">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative h-110 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <Image
                src="/chef.png"
                alt="Rolls Nation menu showcase"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-3xl font-black uppercase md:text-5xl">Popular Combo Deals</h2>
              <p className="mt-5 text-zinc-300">
                Smart combo pricing built for groups, office teams, and family orders. Perfect for dine-in as well as
                delivery.
              </p>

              <div className="mt-7 grid gap-4">
                {[
                  'Single Combo Meal - 79 onwards',
                  'Stag Combo Meal - 149 onwards',
                  'Couple Combo - 249 onwards',
                  'Friends & Family Combo - 499 onwards',
                ].map((deal) => (
                  <div key={deal} className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
                    <CircleCheckBig className="h-5 w-5 text-yellow-500" />
                    <p className="font-semibold text-zinc-100">{deal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917696833321"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
                >
                  Order / Enquire
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
            <Sparkles className="mx-auto h-8 w-8 text-yellow-500" />
            <h2 className="mt-4 text-2xl font-black uppercase text-white md:text-4xl">Looking for Full Menu for Your Outlet?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
              Get the complete operational menu, pricing guidelines, and format-specific recommendations for your location.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917696833321"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Get Complete Menu
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Franchise Models
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

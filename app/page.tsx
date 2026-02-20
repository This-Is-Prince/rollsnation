import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/src/lib/seo';
import { PRIMARY_PHONE_HREF, WHATSAPP_LINK } from '@/src/config/site';
import { 
  Utensils, 
  Store, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChefHat,
  TrendingUp,
  Star
} from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: 'Kathi Roll Franchise in India | Low Investment Fast Food Franchise',
    description:
      'Explore Rolls Nation kathi roll franchise in India with low investment options, high ROI models, and complete support to start your own fast food business.',
    keywords: [
      'kathi roll franchise India',
      'rolls franchise India',
      'fast food franchise under 10 lakhs India',
      'QSR franchise India low investment',
      'street food franchise opportunity',
      'Rolls Nation franchise',
    ],
  });
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/rollsnation.jpeg"
            alt="Rolls Nation Outlet Atmosphere"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div>
              <span className="inline-block py-1 px-3 border border-yellow-500 rounded-full text-yellow-500 text-xs font-bold tracking-widest uppercase mb-4 bg-yellow-500/10 backdrop-blur-sm">
                India&apos;s Fastest Growing Franchise
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] uppercase italic">
                The <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Ultimate</span> <br /> 
                Roll Experience
              </h1>
            </div>
            
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg border-l-4 border-yellow-500 pl-6">
              Crispy parathas, juicy fillings, and secret sauces. 
              We bring the authentic taste of Indian street food to 
              <span className="text-white font-bold"> 11+ States</span> and <span className="text-white font-bold">65+ Cities</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/menu"
                className="group bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                View Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={WHATSAPP_LINK}
                data-analytics-source="home_hero_whatsapp"
                className="group border border-white hover:border-yellow-500 hover:text-yellow-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-zinc-900 flex items-center justify-center gap-2"
              >
                Get Franchise
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-175 w-full animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
             <div className="absolute inset-0 animate-pulse bg-yellow-500/5 rounded-full blur-3xl transform scale-75"></div>
             <Image 
               src="/chef.png" 
               alt="Rolls Nation Chef with Signature Roll" 
               fill 
               className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
               priority 
             />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Outlets", value: "75+", icon: Store },
              { label: "Cities", value: "65+", icon: MapPin },
              { label: "States", value: "11+", icon: TrendingUp },
              { label: "Menu Variants", value: "150+", icon: Utensils },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2 text-zinc-500 group-hover:text-yellow-500 transition-colors">
                  <stat.icon size={20} />
                  <span className="text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
                <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-125 rounded-3xl overflow-hidden border border-zinc-800 group">
              <Image 
                src="/rollsnation.jpeg" 
                alt="Inside Rolls Nation" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic">
                Not Just a Roll, <br />
                It&apos;s an <span className="text-yellow-500">Emotion</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Rolls Nation started with a simple promise: <strong>No Compromise on Quality</strong>. 
                From our handmade parathas to our fresh farm-picked veggies, every ingredient is selected to ensure 
                you get the same authentic taste at every single outlet across India.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Freshly made parathas (No frozen bases)",
                  "Secret blend of 35+ spices",
                  "100% Hygiene maintained kitchens"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="text-yellow-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/about-us" 
                className="inline-block text-yellow-500 font-bold uppercase tracking-wider hover:text-white transition-colors border-b border-yellow-500 pb-1"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2 block">What We Serve</span>
              <h2 className="text-4xl font-black text-white uppercase">Fan <span className="text-yellow-500">Favorites</span></h2>
            </div>
            <Link href="/menu" className="hidden md:flex items-center gap-2 text-white hover:text-yellow-500 transition-colors font-bold uppercase text-sm tracking-wider">
              Explore Full Menu <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Classic Kathi Rolls", desc: "The original taste of Kolkata street food.", icon: ChefHat },
              { title: "Fusion Specials", desc: "Cheesy, Spicy, and loaded with surprises.", icon: Star },
              { title: "Beverages", desc: "Perfect companions for your spicy rolls.", icon: Utensils },
            ].map((item, idx) => (
              <Link key={idx} href="/menu" className="group bg-black p-10 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-8 group-hover:bg-yellow-500 transition-colors">
                  <item.icon className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/menu" className="inline-flex items-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-yellow-500 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/rollsnation.jpeg')] bg-cover mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-black max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
                  Be Your Own <br/>Boss
                </h2>
                <p className="text-black/80 text-xl font-medium mb-8">
                  Join the Rolls Nation family. With high ROI, comprehensive training, and 
                  setup support, we make your entrepreneurial journey smooth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/franchise" 
                    className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform text-center"
                  >
                    Franchise Model
                  </Link>
                  <a 
                    href={PRIMARY_PHONE_HREF}
                    data-analytics-source="home_cta_call"
                    className="bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform text-center flex items-center justify-center gap-2"
                  >
                     Call 76968-33321
                  </a>
                </div>
              </div>
              
              <div className="hidden md:block">
                 <div className="w-64 h-64 bg-black rounded-full flex items-center justify-center border-4 border-white/20">
                    <TrendingUp className="w-32 h-32 text-white" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, ArrowRight, Heart, TrendingUp, MapPin, Store, Users, Globe } from 'lucide-react';
import { buildPageMetadata } from '@/src/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        path: '/about',
        title: 'About Us | Rolls Nation - India\'s Fastest Growing Food Franchise',
        description: 'From a single cart to a nationwide sensation. Rolls Nation now serves authentic rolls across 11+ states, 65+ cities, and 75+ outlets. Join our journey of flavor.',
        openGraph: {
            title: 'About Rolls Nation | 75+ Outlets Across India',
            description: 'Discover the story behind India\'s favorite rolls. Now serving happiness in 65+ cities across 11 states.',
            images: ['/rollsnation.jpeg'], 
        },
    });
}

export default function AboutPage() {
    const teams = [
        {
            name: "Team Member",
            position: "Position",
            url: "/staffs/staff-1.jpg"
        },
        {
            name: "Team Member",
            position: "Position",
            url: "/staffs/staff-2.jpg"
        },
        {
            name: "Team Member",
            position: "Position",
            url: "/staffs/staff-3.jpg"
        },
        {
            name: "Team Member",
            position: "Position",
            url: "/staffs/staff-4.jpg"
        },
        {
            name: "Team Member",
            position: "Position",
            url: "/staffs/staff-5.jpg"
        },
    ];

    const stats = [
        { label: "Outlets", value: "75+", icon: Store },
        { label: "Cities", value: "65+", icon: MapPin },
        { label: "States", value: "11+", icon: Globe },
        { label: "Happy Eaters", value: "1M+", icon: Users },
    ];

    return (
        <div className="bg-black min-h-screen pt-20">
        
        <section className="relative h-[55vh] flex flex-col justify-center items-center bg-zinc-900 overflow-hidden border-b border-zinc-800">
            <div className="absolute inset-0 bg-zinc-800 opacity-20 bg-[url('/rollsnation.jpeg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
                    The real taste of Kolkata Kathi Rolls
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-6 leading-tight">
                    Our <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">Story</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Redefining street food with hygiene, quality, and a burst of authentic flavors that keep you coming back for more.
                </p>
            </div>
        </section>

        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
                            From a Small Cart to a <span className="text-yellow-500">Nationwide Sensation</span>
                        </h2>
                        <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                It all started with a simple vision: to serve the perfect roll. What began as a passion project has now transformed into one of the fastest-growing fast-food chains in the region.
                            </p>
                            <p>
                                At Rolls Nation, we believe that food is not just about hunger—it&apos;s about the experience. We blend traditional Indian spices with modern cooking techniques to create rolls that are crispy, juicy, and unforgettable.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-yellow-500/50 transition-colors group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <stat.icon className="w-5 h-5 text-yellow-500" />
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{stat.label}</p>
                                    </div>
                                    <h4 className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">{stat.value}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="relative h-150 w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group animate-in fade-in slide-in-from-right-8 duration-700 delay-100 shadow-2xl shadow-yellow-900/10">
                            <Image 
                                src="/pic.png"
                                alt="Rolls Nation Founder"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-5">
                            <p className="text-white text-lg md:text-xl font-black uppercase">Rolls Nation Owner &amp; Founder</p>
                            <p className="mt-1 text-yellow-500 text-sm md:text-base font-bold tracking-wide">
                                Mr. Uday Deep (2012 - Present)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="py-24 bg-zinc-900/30 border-y border-zinc-800">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Why We Exist</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-6">Our Core <span className="text-yellow-500">Values</span></h2>
                    <p className="text-zinc-400">We don&apos;t just make food; we craft experiences defined by these three pillars.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                    { 
                        icon: Award, 
                        title: "Quality First", 
                        desc: "We never compromise on ingredients. Fresh vegetables, premium sauces, and high-quality proteins are non-negotiable." 
                    },
                    { 
                        icon: Heart, 
                        title: "Made with Love", 
                        desc: "Every roll is handcrafted with care. We believe positive energy in the kitchen translates to delicious food on the table." 
                    },
                    { 
                        icon: TrendingUp, 
                        title: "Constant Innovation", 
                        desc: "We love experimenting. From classic flavors to fusion surprises, our menu is always evolving to excite your taste buds." 
                    },
                    ].map((item, idx) => (
                    <div key={idx} className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-all duration-300 group hover:-translate-y-1">
                        <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                        <item.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-16">Meet The <span className="text-yellow-500">Masterminds</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teams.map((item, idx) => (
                    <div key={idx} className="group">
                        <div className="relative h-96 w-full bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-zinc-800">
                            <Image 
                                src={item.url}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                        <p className="text-yellow-500 text-sm uppercase tracking-wider font-bold">{item.position}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 px-6 bg-linear-to-b from-black to-zinc-900">
            <div className="container mx-auto max-w-5xl">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-500/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">
                    Want to Join the <span className="text-yellow-500">Revolution?</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                    We are looking for passionate partners to take Rolls Nation to every corner of the country. 
                    Start your franchise journey today.
                </p>
                
                <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-full uppercase tracking-wider transition-all hover:scale-105"
                >
                    Contact Us <ArrowRight size={20} />
                </Link>
                </div>
            </div>
            </div>
        </section>

        </div>
    );
}

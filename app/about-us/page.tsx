import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    Award,
    ArrowRight,
    Heart,
    TrendingUp,
    MapPin,
    Store,
    Users,
    Globe,
    Rocket,
    UtensilsCrossed,
    ShieldCheck,
} from 'lucide-react';
import { buildPageMetadata } from '@/src/lib/seo';
import { aboutUsSeoKeywords } from '@/src/lib/brandSeoKeywords';

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        path: '/about-us',
        title: 'About Us | Rolls Nation - Founder Story, Mission, and Journey',
        description:
            'Discover how Rolls Nation started in 2010 under founder and CEO Uday Deep and grew from focused R&D to a fast-growing QSR and franchise brand.',
        keywords: aboutUsSeoKeywords,
        openGraph: {
            title: 'About Rolls Nation | Journey Since 2010',
            description:
                'From Kolkata-inspired kathi rolls to modern takeout and franchise growth, explore the Rolls Nation story led by Uday Deep.',
            images: ['/rollsnation.jpeg'],
        },
    });
}

const journeyMilestones = [
    {
        year: '2010',
        title: 'The Idea and R&D Phase',
        description:
            'The journey began with one big question: what food revolution can we bring to QSR? We focused on the iconic Kolkata kathi roll and started deep product R&D to make it handy, healthy, and youth-friendly.',
    },
    {
        year: '2012',
        title: 'First Restaurant in Chandigarh',
        description:
            'After two years of development and testing, we opened our first restaurant in Chandigarh. We chose the name Rolls Nation with a clear purpose: take great rolls to audiences across India.',
    },
    {
        year: '2013+',
        title: 'Catering and Outdoor Growth',
        description:
            'We began serving at caterings and outdoor events to understand customer behavior at scale. The response was strong and consistent. People loved the taste, convenience, and quality.',
    },
    {
        year: 'Next Phase',
        title: 'Takeout and Franchise Expansion',
        description:
            'We moved toward dedicated takeout formats and built a scalable operating model. Alongside operations, founder Uday Deep pursued MBA-level business learning to shape Rolls Nation into a franchise-led growth brand.',
    },
    {
        year: 'Today',
        title: 'Building a Nationwide Movement',
        description:
            'Rolls Nation continues to expand with one mission: deliver consistent flavor, hygiene, and convenience while creating opportunities for entrepreneurs and teams across the country.',
    },
];

const founderMissionPoints = [
    'Deliver bold, unforgettable flavors',
    'Maintain uncompromised hygiene and quality',
    'Create an experience that feels modern yet rooted in tradition',
    'Build a brand that entrepreneurs are proud to franchise',
];

const stats = [
    { label: 'Journey Started', value: '2010', icon: Rocket },
    { label: 'Outlets', value: '75+', icon: Store },
    { label: 'Cities', value: '65+', icon: MapPin },
    { label: 'States', value: '11+', icon: Globe },
    { label: 'Happy Eaters', value: '1M+', icon: Users },
];

const differentiators = [
    {
        icon: UtensilsCrossed,
        title: 'Kolkata-Inspired Kathi Rolls',
        desc: 'Rooted in the famous street-food culture of Kolkata, our menu keeps authentic flavor at the center while adapting to modern QSR expectations.',
    },
    {
        icon: ShieldCheck,
        title: 'Hygiene and Ingredient Discipline',
        desc: 'We focus on process consistency, clean operations, and carefully selected ingredients so customers can trust every order.',
    },
    {
        icon: TrendingUp,
        title: 'Built for Scale and Speed',
        desc: 'From caterings and events to takeout and franchise growth, our model is designed to deliver quality with speed across locations.',
    },
];

export default function AboutPage() {
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
                        Built with passion, tested through real customer love, and scaled with a mission to serve India one great roll at a time.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 border-b border-zinc-800 bg-zinc-900/20">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-14 max-w-3xl mx-auto">
                        <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Journey</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-6">
                            From R&amp;D to a <span className="text-yellow-500">Nationwide Vision</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Rolls Nation started in 2010 with a clear intent: create a QSR revolution around the much-loved Kolkata kathi roll and make it accessible to customers across India.
                        </p>
                    </div>

                    <div className="space-y-5 md:space-y-6">
                        {journeyMilestones.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                                <div className="shrink-0">
                                    <div className="rounded-full bg-yellow-500 text-black font-black text-xs md:text-sm px-4 py-2 tracking-wide uppercase min-w-24 text-center">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="flex-1 rounded-2xl border border-zinc-800 bg-black/70 p-5 md:p-6 hover:border-yellow-500/40 transition-colors">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
                                A Brand Built for <span className="text-yellow-500">Cravings, Trust, and Scale</span>
                            </h2>
                            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    Rolls Nation was founded on one idea: make India&apos;s favorite roll format better for modern life. We focused on convenience without compromising flavor, and quality without slowing speed.
                                </p>
                                <p>
                                    What started as a product obsession evolved into a customer-first QSR system. From dine-in beginnings to caterings, events, and takeout-focused formats, every phase shaped how we serve better.
                                </p>
                                <p>
                                    Today, our focus remains unchanged: bold taste, reliable hygiene, and repeatable operations that customers trust and franchise partners can grow with.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl hover:border-yellow-500/50 transition-colors group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <stat.icon className="w-5 h-5 text-yellow-500" />
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{stat.label}</p>
                                        </div>
                                        <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-yellow-500 transition-colors">
                                            {stat.value}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="relative h-150 w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group animate-in fade-in slide-in-from-right-8 duration-700 delay-100 shadow-2xl shadow-yellow-900/10">
                                <Image
                                    src="/pic.png"
                                    alt="Uday Deep, Founder and CEO of Rolls Nation"
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-5">
                                <p className="text-white text-lg md:text-xl font-black uppercase">Founder, Owner &amp; CEO</p>
                                <p className="mt-1 text-yellow-500 text-xl md:text-2xl font-black tracking-wide">Uday Deep</p>
                                <p className="mt-2 text-zinc-400 text-sm md:text-base leading-relaxed">
                                    Rolls Nation owner Uday Deep leads the brand with a long-term vision to make high-quality,
                                    youth-friendly kathi rolls available nationwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-900/30 border-y border-zinc-800">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Why People Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-6">
                            What Makes <span className="text-yellow-500">Rolls Nation</span> Different
                        </h2>
                        <p className="text-zinc-400">
                            We are not just selling kathi rolls. We are building a consistent food experience customers can rely on.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {differentiators.map((item, idx) => (
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

            <section className="py-24 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-14 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                        <div className="relative z-10">
                            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Founder Note</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-8">
                                A Message from <span className="text-yellow-500">Uday Deep</span>
                            </h2>

                            <div className="space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
                                <p>Dear Food Lovers,</p>
                                <p>
                                    When I started Rolls Nation, it was not just about building a food brand. It was about building an emotion.
                                </p>
                                <p>
                                    Growing up, rolls were never just a snack for me. They were late-night cravings with friends, quick bites between work, college memories, street-side laughter, and flavors that stayed with you long after the last bite. I always believed that something so simple could be made extraordinary with the right passion, quality, and consistency.
                                </p>
                                <p>That belief became Rolls Nation.</p>
                                <p className="text-white font-semibold">At Rolls Nation, our mission is clear:</p>
                            </div>

                            <ul className="mt-4 space-y-3">
                                {founderMissionPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are not just serving kathi rolls. We are serving convenience with character. Every roll is crafted with carefully selected ingredients, signature recipes, and a commitment to consistency across every outlet.
                                </p>
                                <p>
                                    But beyond food, Rolls Nation is about people. It is about the customer who trusts us with their cravings, the team that works passionately behind the counter, and franchise partners who dream big with us.
                                </p>
                                <p>
                                    We are building more than a QSR brand. We are building a nationwide movement of flavor, entrepreneurship, and trust.
                                </p>
                                <p>
                                    To everyone who supports Rolls Nation, thank you for believing in our journey. This is just the beginning.
                                </p>
                            </div>

                            <div className="mt-10 pt-6 border-t border-zinc-800">
                                <p className="text-white font-bold text-lg">Warm regards,</p>
                                <p className="text-yellow-500 font-black text-2xl mt-1">Uday Deep</p>
                                <p className="text-zinc-400">Founder, Owner &amp; CEO, Rolls Nation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Core Values</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-6">
                            The Standards We <span className="text-yellow-500">Never Compromise</span>
                        </h2>
                        <p className="text-zinc-400">
                            These principles guide every kitchen decision, customer interaction, and expansion plan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: 'Quality First',
                                desc: 'Fresh vegetables, balanced spices, premium sauces, and tight process control are non-negotiable in our daily operations.',
                            },
                            {
                                icon: Heart,
                                title: 'Customer-Centric Service',
                                desc: 'Every plate, every pack, every interaction is designed to keep customers returning with trust and excitement.',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Innovation with Discipline',
                                desc: 'We continuously improve flavors and systems while protecting consistency, speed, and unit-level sustainability.',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                                    <item.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-linear-to-b from-black to-zinc-900 border-t border-zinc-800">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-yellow-500/20 transition-all duration-700"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">
                                Want to Join the <span className="text-yellow-500">Rolls Nation Journey?</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                                We are actively building with passionate franchise partners and teams. Let&apos;s take high-quality rolls to every corner of India.
                            </p>

                            <Link
                                href="/contact-us"
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

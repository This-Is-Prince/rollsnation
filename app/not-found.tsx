import Link from 'next/link';
import { ArrowRight, Compass, Home, PhoneCall, Search } from 'lucide-react';
import { PRIMARY_PHONE_HREF, PRIMARY_PHONE_LABEL } from '@/src/config/site';

export default function NotFound() {
  const quickLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about-us', icon: Compass },
    { label: 'Contact', href: '/contact-us', icon: PhoneCall },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.22),transparent_38%),radial-gradient(circle_at_80%_65%,rgba(59,130,246,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,0,0,0.15),rgba(0,0,0,0.92))]" />

      <div className="relative container mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center px-6 py-20">
        <div className="grid w-full gap-10 rounded-3xl border border-zinc-700/70 bg-zinc-950/75 p-8 shadow-2xl shadow-black/60 backdrop-blur-md md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-500">404 Error</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">Page Not Found</h1>
            <p className="mt-6 max-w-2xl text-zinc-300 md:text-lg">
              The page you requested may have moved or was removed during our website upgrade.
              Use the quick links to continue browsing.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:scale-105 hover:bg-yellow-400"
              >
                Go to Homepage
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={PRIMARY_PHONE_HREF}
                data-analytics-source="not_found_call"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
              >
                Call {PRIMARY_PHONE_LABEL}
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-700 bg-black/45 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Quick Routes</p>
            <div className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/65 px-4 py-3.5 transition-colors hover:border-yellow-500/70"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    <item.icon className="h-4 w-4 text-yellow-500" />
                    {item.label}
                  </span>
                  <Search className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-yellow-500" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

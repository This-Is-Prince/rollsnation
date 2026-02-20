import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Youtube, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  PRIMARY_PHONE_HREF,
  PRIMARY_PHONE_LABEL,
  SECONDARY_PHONE_HREF,
  SECONDARY_PHONE_LABEL,
  SOCIAL_URLS,
  WHATSAPP_LINK,
} from '@/src/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Franchise Cost', href: '/kathi-roll-franchise-cost' },
    { name: 'How to Start', href: '/how-to-start-kathi-roll-franchise' },
    { name: 'Franchise in Punjab', href: '/kathi-roll-franchise-in-punjab' },
    { name: 'Contact', href: '/contact-us' },
  ];

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_URLS.facebook, label: "Facebook", hoverBg: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: SOCIAL_URLS.instagram, label: "Instagram", hoverBg: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400" },
    { icon: Twitter, href: SOCIAL_URLS.twitter, label: "Twitter", hoverBg: "hover:bg-zinc-600" },
    { icon: Linkedin, href: SOCIAL_URLS.linkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2]" },
    { icon: Youtube, href: SOCIAL_URLS.youtube, label: "YouTube", hoverBg: "hover:bg-[#FF0000]" },
  ];

  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden">
      <div className="h-1 bg-linear-to-r from-yellow-600 via-yellow-500 to-amber-500" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-36 h-14">
                <Image 
                  src="/rollsnation.webp"
                  alt="Rolls Nation Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Authentic taste of Kathi Rolls — committed to serving every single customer who doesn&apos;t need to compromise on their own choices.
            </p>
            
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label, hoverBg }) => (
                <a 
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  aria-label={label}
                  data-analytics-source={`footer_social_${label.toLowerCase()}`}
                  className={`w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-transparent transition-all duration-300 ${hoverBg}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-6">Our Locations</h4>
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-yellow-500/20 transition-colors">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Head Office</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      S.C.O 35, GF, Celebration Bazar,<br />
                      G.T Road Khanna, Punjab 141401
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-yellow-500/20 transition-colors">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Training Center</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Shop No 34-46, TCB Mall,<br />
                      G.T Road Khanna, 141401
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-yellow-500" />
                  </span>
                  <div className="flex flex-col">
                    <a href={PRIMARY_PHONE_HREF} data-analytics-source="footer_call_primary" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                      {PRIMARY_PHONE_LABEL}
                    </a>
                    <a href={SECONDARY_PHONE_HREF} data-analytics-source="footer_call_secondary" className="text-zinc-400 hover:text-white transition-colors text-sm">
                      {SECONDARY_PHONE_LABEL}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-yellow-500" />
                  </span>
                  <div className="flex flex-col">
                    <a href={CONTACT_EMAIL_HREF} data-analytics-source="footer_email" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={WHATSAPP_LINK}
                  data-analytics-source="footer_whatsapp"
                  className="group inline-flex items-center gap-2 bg-linear-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30"
                >
                  <Sparkles size={16} />
                  <span>Start Your Franchise</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Rolls Nation. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

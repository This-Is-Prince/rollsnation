"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Sparkles } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, SOCIAL_URLS, WHATSAPP_LINK } from '@/src/config/site';

export default function TopBar() {
  const socialLinks = [
    { icon: Facebook, href: SOCIAL_URLS.facebook, label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:scale-110" },
    { icon: Instagram, href: SOCIAL_URLS.instagram, label: "Instagram", hoverColor: "hover:text-[#E4405F] hover:scale-110" },
    { icon: Twitter, href: SOCIAL_URLS.twitter, label: "Twitter", hoverColor: "hover:text-white hover:scale-110" },
    { icon: Linkedin, href: SOCIAL_URLS.linkedin, label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:scale-110" },
    { icon: Youtube, href: SOCIAL_URLS.youtube, label: "YouTube", hoverColor: "hover:text-[#FF0000] hover:scale-110" },
  ];

  return (
    <div className="hidden lg:block bg-linear-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <a 
              href={CONTACT_EMAIL_HREF}
              data-analytics-source="topbar_email"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group text-xs tracking-wide"
            >
              <span className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <Mail size={12} className="text-yellow-500" />
              </span>
              <span className="font-medium">{CONTACT_EMAIL}</span>
            </a>
            
            <div className="h-4 w-px bg-linear-to-b from-transparent via-zinc-700 to-transparent" />

            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <Link 
                  key={label}
                  target="_blank" 
                  href={href}
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-analytics-source={`topbar_social_${label.toLowerCase()}`}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 transition-all duration-300 ${hoverColor}`}
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-xs">Ready to start your own business?</span>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={WHATSAPP_LINK}
              data-analytics-source="topbar_whatsapp"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-yellow-500 hover:text-yellow-400 transition-all duration-300"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>Franchise Inquiry</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

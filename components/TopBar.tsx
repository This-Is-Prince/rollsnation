"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Sparkles } from 'lucide-react';

export default function TopBar() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/rollsnationindia", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:scale-110" },
    { icon: Instagram, href: "https://www.instagram.com/rollsnationindia", label: "Instagram", hoverColor: "hover:text-[#E4405F] hover:scale-110" },
    { icon: Twitter, href: "https://x.com/rolls_nation", label: "Twitter", hoverColor: "hover:text-white hover:scale-110" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/rolls-nation", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:scale-110" },
    { icon: Youtube, href: "https://www.youtube.com/@rollsnationindia", label: "YouTube", hoverColor: "hover:text-[#FF0000] hover:scale-110" },
  ];

  return (
    <div className="hidden lg:block bg-linear-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@rollsnation.in" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300 group text-xs tracking-wide"
            >
              <span className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <Mail size={12} className="text-yellow-500" />
              </span>
              <span className="font-medium">info@rollsnation.in</span>
            </a>
            
            <div className="h-4 w-px bg-linear-to-b from-transparent via-zinc-700 to-transparent" />

            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <Link 
                  key={label}
                  target="_blank" 
                  href={href}
                  aria-label={label}
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
              href="https://wa.me/917696833321"
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

"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimony', href: '/testimony' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/rollsnationindia", color: "hover:bg-[#1877F2]", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/rollsnationindia", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/rolls_nation", color: "hover:bg-zinc-700", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/rolls-nation", color: "hover:bg-[#0A66C2]", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@rollsnationindia", color: "hover:bg-[#FF0000]", label: "YouTube" },
  ];

  return (
    <>
      <nav 
        className={`w-full transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50' 
            : 'bg-linear-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'h-16 lg:h-18' : 'h-20 lg:h-24'
          }`}>
            
            <Link 
              href="/" 
              className="relative z-50 group"
            >
              <div className={`relative transition-all duration-500 ${
                isScrolled ? 'w-24 h-10 lg:w-28 lg:h-12' : 'w-28 h-12 lg:w-36 lg:h-14'
              }`}>
                <Image 
                  src="/rollsnation.webp"
                  alt="Rolls Nation Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.name)}
                  onMouseLeave={() => setActiveLink('')}
                  className="relative px-4 py-2 text-white text-sm font-semibold uppercase tracking-wider transition-colors group"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeLink === link.name ? 'text-yellow-500' : 'group-hover:text-yellow-500'
                  }`}>
                    {link.name}
                  </span>
                  
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-yellow-500 to-amber-400 transition-all duration-300 rounded-full ${
                    activeLink === link.name ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                  }`} />
                  
                  <span className={`absolute inset-0 bg-yellow-500/5 rounded-lg transition-opacity duration-300 ${
                    activeLink === link.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="h-8 w-px bg-linear-to-b from-transparent via-zinc-700 to-transparent" />
              
              <a 
                href="tel:+917696833321" 
                className="group relative flex items-center gap-2.5 bg-linear-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Phone size={16} className="relative z-10" />
                <span className="relative z-10 tracking-wide">Call Now</span>
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-3 z-50">
              <a 
                href="tel:+917696833321" 
                className="w-11 h-11 bg-linear-to-br from-yellow-500 to-amber-500 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-shadow"
                aria-label="Call us"
              >
                <Phone size={18} strokeWidth={2.5} />
              </a>

              <button 
                className="w-11 h-11 flex items-center justify-center text-white hover:text-yellow-500 transition-colors rounded-full hover:bg-white/5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
                  }`} />
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`} />
                  <span className={`absolute left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className={`h-px bg-linear-to-r from-transparent via-yellow-500/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      </nav>

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-zinc-950 z-40 lg:hidden transition-transform duration-500 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none" />
        
        <div className="relative flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex-1 space-y-1">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="group flex items-center justify-between py-4 border-b border-zinc-800/50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.4s ease ${idx * 0.05 + 0.1}s, transform 0.4s ease ${idx * 0.05 + 0.1}s`
                }}
              >
                <span className="text-xl font-bold text-white group-hover:text-yellow-500 uppercase tracking-wide transition-colors">
                  {link.name}
                </span>
                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          <div 
            className="mt-8 space-y-6"
            style={{ 
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s'
            }}
          >
            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-linear-to-r from-yellow-500 to-amber-500 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg shadow-yellow-500/20"
            >
              <Sparkles size={18} />
              <span>Start Your Franchise</span>
            </Link>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Connect With Us</h4>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, color, label }) => (
                  <a 
                    key={label}
                    href={href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-xs">Need help? Call us at</p>
              <a href="tel:+917696833321" className="text-yellow-500 font-bold text-lg hover:text-yellow-400 transition-colors">
                +91 76968-33321
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Franchise', href: '/franchise' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimony', href: '/testimony' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Placeholder - Replace src with your actual logo URL */}
        <Link href="/" className="relative w-32 h-16">
           <Image 
                src="https://rollsnation.in/wp-content/uploads/2022/05/S-Logo.png"
                alt="Rolls Nation Background"
                fill
                className="object-contain"
                priority
            />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-yellow-500 font-medium text-sm uppercase tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-white hover:text-yellow-500">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t border-zinc-800">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-bold hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
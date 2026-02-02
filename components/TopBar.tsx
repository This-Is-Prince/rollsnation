import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 px-6 hidden md:flex justify-between items-center text-xs border-b border-zinc-900">
      <div className="flex items-center space-x-4">
        <Link target="_blank" href="https://www.facebook.com/rollsnationindia" className="hover:text-yellow-500 transition-colors"><Facebook size={16} /></Link>
        <Link target="_blank" href="https://www.instagram.com/rollsnationindia" className="hover:text-yellow-500 transition-colors"><Instagram size={16} /></Link>
        <Link target="_blank" href="https://x.com/rolls_nation" className="hover:text-yellow-500 transition-colors"><Twitter size={16} /></Link>
        <Link target="_blank" href="https://www.linkedin.com/company/rolls-nation" className="hover:text-yellow-500 transition-colors"><Linkedin size={16} /></Link>
        <Link target="_blank" href="https://www.youtube.com/@rollsnationindia" className="hover:text-yellow-500 transition-colors"><Youtube size={16} /></Link>
      </div>

      <Link 
        href="/franchise" 
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-1.5 rounded-sm uppercase tracking-wider transition-colors text-[10px]"
      >
        Franchise Inquiry
      </Link>
    </div>
  );
}
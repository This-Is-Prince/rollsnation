import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div>
           <h2 className="text-3xl font-black text-yellow-500 italic mb-6">ROLLS NATION</h2>
           <p className="text-zinc-400 text-sm leading-relaxed">
             Authentic taste of Kathi Rolls. committed to serving every single customer who doesn&apos;t need to compromise on their own choices.
           </p>
        </div>

        <div>
          <h4 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider">Location</h4>
          <div className="space-y-4 text-zinc-300 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
              <p>
                <strong className="block text-white">Head Office:</strong>
                S.C.O 35, GF, Celebration Bazar, <br/>G.T Road Khanna, Ludhiana (Punjab) 141401
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
              <p>
                <strong className="block text-white">Training Center:</strong>
                Shop No 34-46, TCB Mall, <br/>G.T Road Khanna, 141401
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider">Phone & Email</h4>
          <div className="space-y-4 text-zinc-300 text-sm">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <div
                className='flex flex-col items-center'
              >
                <a href="tel:+917696833321" >+91-76968-33321</a>
                <a href="tel:+918000500038" >+91-80005-00038</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-yellow-500" />
              <div>
                <a href="mailto:info@rollsnation.in" className="hover:text-white block">info@rollsnation.in</a>
                <a href="mailto:rollsnation.official@gmail.com" className="hover:text-white block">rollsnation.official@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-yellow-500 font-bold mb-6 uppercase tracking-wider">Follow Us</h4>
          <div className="flex space-x-3">
             <Link target="_blank" href="https://www.facebook.com/rollsnationindia" className="p-2 bg-zinc-800 rounded-full hover:bg-blue-600 cursor-pointer transition"><Facebook size={20}/></Link>
             <Link target="_blank" href="https://www.instagram.com/rollsnationindia" className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 cursor-pointer transition"><Instagram size={20}/></Link>
             <Link target="_blank" href="https://x.com/rolls_nation" className="p-2 bg-zinc-800 rounded-full hover:bg-blue-400 cursor-pointer transition"><Twitter size={20}/></Link>
             <Link target="_blank" href="https://www.linkedin.com/company/rolls-nation" className="p-2 bg-zinc-800 rounded-full hover:bg-blue-700 cursor-pointer transition"><Linkedin size={20}/></Link>
             <Link target="_blank" href="https://www.youtube.com/@rollsnationindia" className="p-2 bg-zinc-800 rounded-full hover:bg-blue-700 cursor-pointer transition"><Youtube size={20}/></Link>
          </div>
          <div className="mt-8">
             <p className="text-zinc-500 text-xs">
               Copyright © 2023. All Rights Reserved.<br/>
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
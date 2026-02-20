import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  PRIMARY_PHONE_HREF,
  PRIMARY_PHONE_LABEL,
  SECONDARY_PHONE_HREF,
  SECONDARY_PHONE_LABEL,
  SOCIAL_URLS,
} from '@/src/config/site';
import { buildPageMetadata } from '@/src/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us | Rolls Nation Support & Franchise Inquiry',
    description: 'Get in touch with Rolls Nation. Contact us for franchise opportunities, feedback, or general queries. Head Office in Khanna, Punjab.',
    openGraph: {
      title: 'Contact Rolls Nation',
      description: 'Call us at +91-76968-33321 or visit our head office in Khanna, Punjab.',
    },
  });
}

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      
    <section className="relative h-[40vh] flex flex-col justify-center items-center bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/rollsnation.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            We&apos;d love to hear from you
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase">Get in Touch</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Whether you want to inquire about a franchise, give feedback on our rolls, 
                or just say hello, we are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-colors group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <Phone className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                <div className="space-y-2">
                  <a href={PRIMARY_PHONE_HREF} data-analytics-source="contact_page_call_primary" className="block text-zinc-400 hover:text-white transition-colors">{PRIMARY_PHONE_LABEL}</a>
                  <a href={SECONDARY_PHONE_HREF} data-analytics-source="contact_page_call_secondary" className="block text-zinc-400 hover:text-white transition-colors">{SECONDARY_PHONE_LABEL}</a>
                </div>
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-colors group">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <Mail className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                <div className="space-y-2">
                  <a href={CONTACT_EMAIL_HREF} data-analytics-source="contact_page_email" className="block text-zinc-400 hover:text-white transition-colors wrap-break-word">{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Head Office</h4>
                  <p className="text-zinc-400">
                    S.C.O 35, GF, Celebration Bazar, G.T Road Khanna, <br/>Ludhiana (Punjab) 141401
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Training Center</h4>
                  <p className="text-zinc-400">
                    Shop No 34-46, TCB Mall, G.T Road Khanna, 141401
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Connect With Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-600', url: SOCIAL_URLS.facebook, label: 'facebook' },
                  { Icon: Instagram, color: 'hover:bg-pink-600', url: SOCIAL_URLS.instagram, label: 'instagram' },
                  { Icon: Twitter, color: 'hover:bg-blue-400', url: SOCIAL_URLS.twitter, label: 'twitter' },
                  { Icon: Linkedin, color: 'hover:bg-blue-700', url: SOCIAL_URLS.linkedin, label: 'linkedin' },
                  { Icon: Youtube, color: 'hover:bg-red-600', url: SOCIAL_URLS.youtube, label: 'youtube' },
                ].map(({ Icon, color, url, label }, idx) => (
                  <a key={idx} href={url} target='_blank' rel="noopener noreferrer" data-analytics-source={`contact_page_social_${label}`} className={`w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white transition-all hover:-translate-y-1 ${color}`}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />

        </div>
      </div>

        <div className="h-100 w-full bg-zinc-900 border-t border-zinc-800 transition-all duration-700">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.14149722842!2d76.2528969!3d30.686294699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910106b37eaaaab%3A0xcc591c2f2ffdc945!2sRolls%20Nation%20India!5e0!3m2!1sen!2sin!4v1770000855563!5m2!1sen!2sin"
                title="Rolls Nation Location"
            ></iframe>
        </div>


    </div>
  );
}

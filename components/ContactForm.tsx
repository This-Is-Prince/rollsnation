"use client";

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className="bg-zinc-900 p-12 rounded-3xl border border-zinc-800 h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <Send className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">Thank you for contacting Rolls Nation. We will get back to you shortly.</p>
        <button 
          onClick={() => setIsSent(false)}
          className="mt-8 text-yellow-500 hover:text-yellow-400 font-bold uppercase text-sm tracking-wider"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
      <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Your Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="+91 98765 43210"
              className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Subject</label>
          <select className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none cursor-pointer">
            <option>General Inquiry</option>
            <option>Franchise Opportunity</option>
            <option>Feedback / Complaint</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Message</label>
          <textarea 
            required
            rows={5}
            placeholder="How can we help you?"
            className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-bold py-4 rounded-lg uppercase tracking-wider transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Sending... <Loader2 className="animate-spin" size={18} /></>
          ) : (
            <>Send Message <Send size={18} /></>
          )}
        </button>
      </form>
    </div>
  );
}
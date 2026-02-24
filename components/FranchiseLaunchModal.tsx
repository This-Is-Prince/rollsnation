'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

export default function FranchiseLaunchModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        className="z-100 w-full max-w-3xl overflow-hidden rounded-lg border-4 border-yellow-500 bg-transparent p-0 shadow-2xl sm:max-w-3xl"
      >
        <DialogTitle className="sr-only">Join our franchise</DialogTitle>
        <DialogDescription className="sr-only">
          Be a part of a truly Indian growth story by becoming the proud owner of a Rolls Nation store.
        </DialogDescription>

        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close franchise popup"
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-black transition-colors hover:bg-yellow-400"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>

        <div className="relative min-h-85 w-full md:min-h-95">
          <Image
            src="/rollsnation.jpeg"
            alt="Rolls Nation Franchise Opportunity"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex min-h-85 flex-col items-center justify-center px-6 text-center md:min-h-95 md:px-10">
            <h2 className="text-4xl font-black uppercase leading-none tracking-wide text-yellow-500 md:text-6xl">
              Join Our Franchise
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold text-white md:text-lg">
              Be a part of a truly Indian growth story by becoming the proud owner of a
              Rolls Nation store.
            </p>
            <Link
              href="/franchise"
              data-analytics-source="home_franchise_popup_cta"
              onClick={() => setIsOpen(false)}
              className="mt-7 rounded-xl bg-yellow-500 px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-yellow-400"
            >
              Join Now
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { GalleryItem } from '@/src/lib/gallery-data';

type PaginatedGallerySectionProps = {
  sectionLabel: string;
  heading: string;
  description: string;
  items: GalleryItem[];
  itemsPerPage?: number;
};

export default function PaginatedGallerySection({
  sectionLabel,
  heading,
  description,
  items,
  itemsPerPage = 6,
}: PaginatedGallerySectionProps) {
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const [activePage, setActivePage] = useState(1);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const currentPage = Math.min(activePage, pageCount);
  const pageStart = (currentPage - 1) * itemsPerPage;

  const pageItems = useMemo(() => {
    return items.slice(pageStart, pageStart + itemsPerPage);
  }, [items, itemsPerPage, pageStart]);

  const pageNumbers = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => index + 1),
    [pageCount],
  );
  const selectedItem = selectedItemIndex === null ? null : items[selectedItemIndex];

  useEffect(() => {
    if (selectedItemIndex === null) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItemIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedItemIndex]);

  const goToPage = (page: number) => {
    const nextPage = Math.max(1, Math.min(pageCount, page));
    setActivePage(nextPage);
  };

  return (
    <div>
      <header className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-500">{sectionLabel}</p>
        <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">{heading}</h2>
        <div className="mx-auto mt-5 h-1 w-44 rounded-full bg-yellow-500" />
        <p className="mx-auto mt-5 max-w-3xl text-zinc-300 md:text-lg">{description}</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((item, index) => (
          <article
            key={`${item.src}-${item.title}`}
            className="group overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/80 shadow-xl shadow-black/25 transition-colors hover:border-yellow-500/60"
          >
            <button
              type="button"
              onClick={() => setSelectedItemIndex(pageStart + index)}
              className="block w-full text-left"
              aria-label={`Open image popup for ${item.title}`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">{item.title}</p>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-300">{item.description}</p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-yellow-500 hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label={`Go to ${heading} previous page`}
          >
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => goToPage(pageNumber)}
              className={`h-10 min-w-10 rounded-full border px-3 text-sm font-bold transition-colors ${
                pageNumber === currentPage
                  ? 'border-yellow-500 bg-yellow-500 text-black'
                  : 'border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:border-yellow-500 hover:text-yellow-400'
              }`}
              aria-label={`Go to ${heading} page ${pageNumber}`}
              aria-current={pageNumber === currentPage ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-yellow-500 hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-45"
            aria-label={`Go to ${heading} next page`}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-end bg-black/75 p-0 backdrop-blur-sm md:items-center md:justify-center md:p-6">
          <button
            type="button"
            onClick={() => setSelectedItemIndex(null)}
            className="absolute inset-0"
            aria-label={`Close ${heading} image popup overlay`}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${heading} image popup`}
            className="relative z-10 w-full overflow-hidden rounded-t-3xl border border-zinc-800 bg-zinc-950 md:max-w-5xl md:rounded-3xl"
          >
            <button
              type="button"
              onClick={() => setSelectedItemIndex(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-black/70 text-zinc-100 transition-colors hover:border-yellow-500 hover:text-yellow-400"
              aria-label={`Close ${heading} image popup`}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[48vh] min-h-72 w-full md:h-[70vh] md:min-h-96">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="border-t border-zinc-800 bg-zinc-950/95 px-5 py-4 md:px-8 md:py-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500">{sectionLabel}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{selectedItem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

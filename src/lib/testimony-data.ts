import 'server-only';

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import type { GalleryItem } from '@/src/lib/gallery-data';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MEDIA_NEWS_FOLDER = 'MEDIA NEWS COVERAGE';
const RN_INTERIORS_FOLDER = 'RN INTERIORS';
const IMAGE_FILE_EXTENSION_PATTERN = /\.(avif|gif|jpe?g|png|webp)$/i;
const LIST_COLLATOR = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

const compactWhitespace = (value: string) => value.replace(/\s+/g, ' ').trim();

const stripExtension = (value: string) => value.replace(/\.[^.]+$/, '');

const stripCopyNumber = (value: string) => value.replace(/\(\d+\)/g, '');

const toTitleCase = (value: string) =>
  compactWhitespace(value)
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      if (/^\d+$/.test(word)) {
        return word;
      }

      if (/^[A-Z0-9]{1,3}$/.test(word)) {
        return word.toUpperCase();
      }

      return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
    })
    .join(' ');

const toImagePath = (segments: string[]) => `/${segments.join('/')}`;

const normalizeMediaName = (fileName: string) => toTitleCase(stripCopyNumber(stripExtension(fileName)));

const cleanInteriorFolderName = (folderName: string) =>
  compactWhitespace(folderName.replace(/^[A-Za-z]\s+/, '').replace(/\b\d{4}\b/g, ''));

const readDirEntriesSafe = async (directoryPath: string) => {
  try {
    return await fs.readdir(directoryPath, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
};

const listImageFileNames = async (directoryPath: string) => {
  const entries = await readDirEntriesSafe(directoryPath);

  return entries
    .filter((entry) => entry.isFile() && IMAGE_FILE_EXTENSION_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort((first, second) => LIST_COLLATOR.compare(first, second));
};

const sortInteriorFolders = (first: string, second: string) => {
  const firstPrefix = first.trim().charAt(0).toUpperCase();
  const secondPrefix = second.trim().charAt(0).toUpperCase();

  if (firstPrefix !== secondPrefix) {
    return LIST_COLLATOR.compare(secondPrefix, firstPrefix);
  }

  return LIST_COLLATOR.compare(first, second);
};

const buildPressMediaItems = async (): Promise<GalleryItem[]> => {
  const mediaDirectory = path.join(PUBLIC_DIR, MEDIA_NEWS_FOLDER);
  const mediaFileNames = await listImageFileNames(mediaDirectory);

  return mediaFileNames.map((fileName) => {
    const title = normalizeMediaName(fileName);

    return {
      src: toImagePath([MEDIA_NEWS_FOLDER, fileName]),
      alt: `${title} press coverage`,
      title,
      description: `Featured media mention highlighting: ${title}.`,
    };
  });
};

const buildRnInteriorItems = async (): Promise<GalleryItem[]> => {
  const interiorsDirectory = path.join(PUBLIC_DIR, RN_INTERIORS_FOLDER);
  const folderEntries = await readDirEntriesSafe(interiorsDirectory);

  const folders = folderEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(sortInteriorFolders);

  const interiorItemsPerFolder = await Promise.all(
    folders.map(async (folderName) => {
      const cityName = toTitleCase(cleanInteriorFolderName(folderName)) || 'Unknown City';
      const cityDirectory = path.join(interiorsDirectory, folderName);
      const imageFileNames = await listImageFileNames(cityDirectory);

      return imageFileNames.map((fileName, index) => ({
        src: toImagePath([RN_INTERIORS_FOLDER, folderName, fileName]),
        alt: `${cityName} Rolls Nation interior view ${index + 1}`,
        title: `${cityName} Interior ${index + 1}`,
        description: `Interior highlight from the Rolls Nation ${cityName} outlet.`,
      }));
    }),
  );

  return interiorItemsPerFolder.flat();
};

export const getTestimonyGalleryData = cache(async () => {
  const [pressMediaItems, rnInteriorItems] = await Promise.all([
    buildPressMediaItems(),
    buildRnInteriorItems(),
  ]);

  return {
    pressMediaItems,
    rnInteriorItems,
  };
});

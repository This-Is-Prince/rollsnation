export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GallerySeedItem = {
  fileName: string;
  title: string;
  description: string;
};

const FOOD_FOLDER = 'RN FOOD IMAGES';
const FRANCHISE_FOLDER = 'FRANCHISE OWNERS ROLLS NATION';

const toPublicPath = (folder: string, fileName: string) => `/${folder}/${fileName}`;

// Keep this list short (10-15 images) to avoid heavy gallery rendering.
const foodImageSeeds: GallerySeedItem[] = [
  {
    fileName: 'RN MIX VEG ROLL.webp',
    title: 'Mix Veg Roll',
    description: 'Fresh vegetables wrapped in our signature RN style roll.',
  },
  {
    fileName: 'RN CHICKEN ROLL.webp',
    title: 'Chicken Roll',
    description: 'Tender chicken filling with bold sauces and layered flavor.',
  },
  {
    fileName: 'ROLLS NATION ULTIMATE BURGER.webp',
    title: 'Ultimate Burger',
    description: 'Loaded burger built for a full, satisfying meal.',
  },
  {
    fileName: 'RN LOADED FRIES.webp',
    title: 'Loaded Fries',
    description: 'Crispy fries topped with rich sauces and seasoning.',
  },
  {
    fileName: 'RN WHITE SAUCE PASTA.webp',
    title: 'White Sauce Pasta',
    description: 'Creamy pasta finished with herbs and savory notes.',
  },
  {
    fileName: 'RN PASSION FRUIT DRINK.webp',
    title: 'Passion Fruit Drink',
    description: 'Refreshing fruit drink to pair with rolls and snacks.',
  },
  {
    fileName: 'ROLLS NATION NACHOS.webp',
    title: 'RN Nachos',
    description: 'Crunchy nachos served with cheesy and spicy accents.',
  },
  {
    fileName: 'ROLLS NATION SIGNATURE ROLL.webp',
    title: 'Signature Roll',
    description: 'One of the most loved signature creations at Rolls Nation.',
  },
  {
    fileName: 'RN VEG SANDWICH.webp',
    title: 'Veg Sandwich',
    description: 'Classic grilled sandwich packed with seasoned vegetables.',
  },
  {
    fileName: 'RN BLUE LAGOON MOCKTAIL.webp',
    title: 'Blue Lagoon Mocktail',
    description: 'Cool and vibrant mocktail for a refreshing finish.',
  },
  {
    fileName: 'RN Paneer Roll.webp',
    title: 'Paneer Roll',
    description: 'Soft paneer filling with sauces wrapped in fresh bread.',
  },
  {
    fileName: 'RN FRESH DOUGH PIZZA.webp',
    title: 'Fresh Dough Pizza',
    description: 'Handcrafted pizza with fresh dough and quality toppings.',
  },
];

export const foodGalleryItems: GalleryItem[] = foodImageSeeds.map((item) => ({
  src: toPublicPath(FOOD_FOLDER, item.fileName),
  alt: `${item.title} from Rolls Nation`,
  title: item.title,
  description: item.description,
}));

const formatCityWord = (word: string) => {
  if (word.length <= 2) {
    return word.toUpperCase();
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
};

const deriveCityFromFileName = (fileName: string) => {
  const withoutExtension = fileName.replace(/\.[^.]+$/, '');
  const cleaned = withoutExtension
    .replace(/\(\d+\)/g, '')
    .replace(/\bROLLS NATION\b/gi, '')
    .replace(/\bRN\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) {
    return 'Unknown City';
  }

  return cleaned
    .split(' ')
    .filter(Boolean)
    .map(formatCityWord)
    .join(' ');
};

// Franchise titles and descriptions are derived from the city name in each filename.
const franchiseImageFiles = [
  'LUCKNOW ROLLS NATION.webp',
  'PATIALA ROLLS NATION.webp',
  'GHAZIPUR ROLLS NATION (1).webp',
  'PATNA ROLLS NATION (1).webp',
  'UNA ROLLS NATION.webp',
  'JALANDHAR ROLLS NATION.webp',
  'BANUR ROLLS NATION.webp',
  'ZIRAKPUR ROLLS NATION (1).webp',
  'NAGPUR ROLLS NATION.webp',
  'MALOUT ROLLS NATION (1).webp',
  'YAVATMAL MH RN.webp',
  'KHARGHAR NAVI MUMBAI RN (1).webp',
];

export const franchiseOwnerGalleryItems: GalleryItem[] = franchiseImageFiles.map((fileName) => {
  const city = deriveCityFromFileName(fileName);

  return {
    src: toPublicPath(FRANCHISE_FOLDER, fileName),
    alt: `Rolls Nation franchise owner from ${city}`,
    title: `${city} Franchise Owner`,
    description: `Owner spotlight from the ${city} Rolls Nation outlet.`,
  };
});

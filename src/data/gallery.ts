import type { ImageMetadata } from 'astro';

/**
 * Real hospital media sourced from the Medilife photo gallery.
 * Some items are photographs; others are awareness posters / OPD cards.
 * `kind` lets us show genuine photographs on the homepage while the full
 * gallery page still mirrors the original site.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*.jpg',
  { eager: true }
);

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  kind: 'photo' | 'graphic';
}

// Filenames identified (by review) as genuine photographs.
const PHOTO_FILES = new Set([
  'g08.jpg', 'g09.jpg', 'g10.jpg', 'g14.jpg', 'g16.jpg',
  'g17.jpg', 'g27.jpg', 'g31.jpg',
]);

export const gallery: GalleryImage[] = Object.keys(modules)
  .sort()
  .map((path, i) => {
    const file = path.split('/').pop() || '';
    return {
      src: modules[path].default,
      alt: `Medilife Superspeciality Hospital, Dehradun - photo ${i + 1}`,
      kind: PHOTO_FILES.has(file) ? 'photo' : 'graphic',
    };
  });

/** Only genuine photographs (for the homepage marquee). */
export const galleryPhotos = gallery.filter((g) => g.kind === 'photo');

/**
 * Health-awareness campaign creatives (portrait posters). Shown in their own
 * section on the gallery page so they are not cropped like the 4:3 photo grid,
 * and kept out of the homepage premises marquee.
 */
import awarenessSummerFatigue from '../assets/campaigns/awareness-summer-fatigue.webp';
import awarenessAcidity from '../assets/campaigns/awareness-acidity.webp';
import awarenessKneePain from '../assets/campaigns/awareness-knee-pain.webp';

export const campaigns: { src: ImageMetadata; alt: string }[] = [
  {
    src: awarenessSummerFatigue,
    alt: 'Medilife health awareness poster: spotting summer fatigue and weakness, with General Physician OPD timings',
  },
  {
    src: awarenessAcidity,
    alt: 'Medilife health awareness poster: stomach pain and acidity symptoms, with General Physician OPD timings',
  },
  {
    src: awarenessKneePain,
    alt: 'Medilife health awareness poster: knee pain and arthritis care by Dr. Sunny Dua, Orthopaedics',
  },
];

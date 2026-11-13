import type { ImageMetadata } from 'astro';

/**
 * Hospital media for the gallery: photographs (health camps, OPD, press) and
 * a few current posters. Expired offers, outdated certificates, third-party
 * newspaper pages and posters with unsupported claims were removed.
 * `kind` lets the homepage marquee show only genuine photographs.
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
  'g08.jpg', 'g09.jpg', 'g10.jpg', 'g14.jpg',
  'g17.jpg', 'g27.jpg', 'g31.jpg',
]);

/** Descriptive alt text per file (what the image shows / says). */
const ALT: Record<string, string> = {
  'g03.jpg': 'World Kidney Day poster from Medilife: "Protect the filter in your body" - kidney health for everyone',
  'g05.jpg': 'Poster (Hindi): free treatment under the Atal Ayushman Bharat (PM-JAY) scheme at Medilife',
  'g07.jpg': 'Medilife free health check-up camp: doctors examining patients under a tent',
  'g08.jpg': 'Villagers queue at a Medilife free health check-up camp while a doctor examines a patient',
  'g09.jpg': 'Patients with registration slips waiting at a Medilife health camp',
  'g10.jpg': 'Medilife doctor consulting an elderly patient at a free health camp',
  'g11.jpg': 'OPD standee for the Medilife urologist, ex-consultant at AIIMS Bhopal and Himalayan Institute, Jolly Grant, with Monday to Saturday evening OPD timings',
  'g12.jpg': 'OPD standee for the Medilife general physician, ex-consultant at Himalayan Institute, for fever, diabetes, blood pressure, thyroid and joint pain',
  'g13.jpg': 'Medilife Superspeciality Hospital featured in a VIP News television update',
  'g14.jpg': 'Doctor reviewing patients’ reports at a Medilife community health camp',
  'g15.jpg': 'Medilife doctor writing prescriptions for patients at a health camp',
  'g17.jpg': 'Medilife doctor speaking to the press at a health camp',
  'g18.jpg': 'OPD standee for Dr. Rikta Roy, ENT, ex-consultant at Govt. Doon Medical College, AIIMS Bhopal and Himalayan Institute, with Monday to Saturday OPD timings',
  'g23.jpg': 'National Doctors’ Day (1 July) greeting from Medilife Superspeciality Hospital',
  'g24.jpg': 'Banner for a free Medilife health check-up camp (June 2024) with ENT and urology specialists',
  'g26.jpg': 'Newspaper report (Hindi) on a free Medilife health check-up camp with Dr. Rikta Roy and Dr. Manoj Biswas',
  'g27.jpg': 'Medilife doctor speaking to the media',
  'g28.jpg': 'Medilife specialists and qualifications (Hindi): Dr. Manoj Biswas, urology; Dr. Sanket Narayan, general surgery; Dr. Narayan Jeet, general medicine; Dr. Sunny Dua, orthopaedics; Dr. Navneet Jain, onco-surgery',
  'g31.jpg': 'Medilife ENT specialist examining a patient with a headlight',
  'g32.jpg': 'Medilife doctor talking with a patient during a follow-up visit',
};

export const gallery: GalleryImage[] = Object.keys(modules)
  .sort()
  .map((path) => {
    const file = path.split('/').pop() || '';
    return {
      src: modules[path].default,
      alt: ALT[file] ?? 'Medilife Superspeciality Hospital, Dehradun',
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
import awarenessBloodPressure from '../assets/campaigns/awareness-blood-pressure.webp';
import awarenessPreventiveCheckup from '../assets/campaigns/awareness-preventive-checkup.webp';

export const campaigns: { src: ImageMetadata; alt: string }[] = [
  {
    src: awarenessBloodPressure,
    alt: 'Medilife health awareness poster (Hindi): keep blood pressure under control to protect your heart - eat a balanced low-salt diet, exercise regularly, keep a healthy weight, avoid smoking and sleep well. Department of Medicine OPD, Monday to Saturday, 4 PM - 7 PM',
  },
  {
    src: awarenessPreventiveCheckup,
    alt: 'Medilife health awareness poster (Hindi): regular preventive health check-ups detect disease early, assess heart, diabetes and blood-pressure risk and help prevent complications. Department of Medicine OPD, Monday to Saturday, 4 PM - 7 PM',
  },
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

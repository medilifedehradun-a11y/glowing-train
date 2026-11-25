import type { ImageMetadata } from 'astro';

import staplerPoster from '../assets/videos/stapler-circumcision.webp';
import earPoster from '../assets/videos/ear-foreign-body.webp';
import skinPrickPoster from '../assets/videos/skin-prick-test.webp';
import hearingPoster from '../assets/videos/how-hearing-works.webp';
import arthritisPoster from '../assets/videos/arthritis-early-signs.webp';
import uroflowmetryPoster from '../assets/videos/uroflowmetry-test.webp';
import acidityPoster from '../assets/videos/chronic-acidity-h-pylori.webp';
import earPainPoster from '../assets/videos/ear-pain-ear-drops.webp';

/**
 * Self-hosted patient-education videos (720p H.264 in /public/videos, faststart).
 * Shown on the matching department page (with VideoObject schema) and in the
 * gallery. `preload="none"` keeps them out of page weight until played.
 */
export interface Video {
  slug: string;
  title: string;
  description: string;
  /** Public URL of the MP4 */
  src: string;
  poster: ImageMetadata;
  orientation: 'portrait' | 'landscape';
  /** ISO 8601 duration, e.g. PT2M7S */
  duration: string;
  /** Human-readable duration for the card */
  durationLabel: string;
  uploadDate: string;
  /** Spoken language (BCP 47) */
  inLanguage?: string;
  department: string;
  /** Doctor slug from doctors.ts, when a specialist presents the video */
  doctor?: string;
}

export const videos: Video[] = [
  {
    slug: 'skin-prick-allergy-test',
    title: 'Skin prick test for allergies, explained',
    description:
      'Dr. Rikta Roy, Director & Senior ENT Consultant, explains the skin prick allergy test: when it is advised, how it is done and which allergies it can help identify.',
    src: '/videos/skin-prick-allergy-test-dr-rikta-roy.mp4',
    poster: skinPrickPoster,
    orientation: 'landscape',
    duration: 'PT6M24S',
    durationLabel: '6:24',
    uploadDate: '2026-11-11',
    inLanguage: 'hi',
    department: 'ent',
    doctor: 'dr-rikta-roy',
  },
  {
    slug: 'ear-pain-ear-drops',
    title: 'Ear pain: are ear drops always the answer?',
    description:
      'Dr. Rikta Roy, Director & Senior ENT Consultant, explains why every ear pain is not the same and why putting in over-the-counter ear drops is not always right. Ear pain can come from hard wax, pus discharge, a fungal infection or a cold, and each cause needs its own treatment, so get your ear examined first.',
    src: '/videos/ear-pain-ear-drops-dr-rikta-roy.mp4',
    poster: earPainPoster,
    orientation: 'portrait',
    duration: 'PT3M20S',
    durationLabel: '3:20',
    uploadDate: '2026-11-24',
    inLanguage: 'hi',
    department: 'ent',
    doctor: 'dr-rikta-roy',
  },
  {
    slug: 'ear-foreign-body-endoscopic-removal',
    title: 'Matchstick tip stuck in a child’s ear: endoscopic removal',
    description:
      'A broken matchstick tip lodged in a child’s ear canal, removed under endoscopic guidance by the ENT team at Medilife Superspeciality Hospital, Dehradun.',
    src: '/videos/ear-foreign-body-endoscopic-removal.mp4',
    poster: earPoster,
    orientation: 'portrait',
    duration: 'PT42S',
    durationLabel: '0:42',
    uploadDate: '2026-11-07',
    department: 'ent',
  },
  {
    slug: 'stapler-circumcision',
    title: 'What is stapler circumcision?',
    description:
      'Dr. Manoj Biswas, Senior Consultant Urologist, explains stapler circumcision: how the procedure is done and why it usually means a shorter procedure, less bleeding and a quicker recovery.',
    src: '/videos/stapler-circumcision-dr-manoj-biswas.mp4',
    poster: staplerPoster,
    orientation: 'portrait',
    duration: 'PT2M7S',
    durationLabel: '2:07',
    uploadDate: '2026-11-07',
    inLanguage: 'hi',
    department: 'urology',
    doctor: 'dr-manoj-biswas',
  },
  {
    slug: 'uroflowmetry-test',
    title: 'Uroflowmetry test: what it is and when it is advised',
    description:
      'Uroflowmetry is a simple, painless test that measures the speed and volume of urine flow. This short explainer shows how the test is done and why a urologist may advise it for a weak stream or difficulty starting to pass urine.',
    src: '/videos/uroflowmetry-test.mp4',
    poster: uroflowmetryPoster,
    orientation: 'portrait',
    duration: 'PT38S',
    durationLabel: '0:38',
    uploadDate: '2026-11-19',
    inLanguage: 'hi',
    department: 'urology',
  },
  {
    slug: 'how-hearing-works',
    title: 'How do we hear? From the ear to the brain',
    description:
      'An animated look at how sound travels from the outer ear through the eardrum and the tiny bones of the middle ear to the inner ear and the hearing nerve. If you notice hearing problems, get a hearing test and see an ENT specialist or audiologist in time.',
    src: '/videos/how-hearing-works.mp4',
    poster: hearingPoster,
    orientation: 'portrait',
    duration: 'PT47S',
    durationLabel: '0:47',
    uploadDate: '2026-11-17',
    inLanguage: 'hi',
    department: 'audiology',
  },
  {
    slug: 'arthritis-early-signs',
    title: '5 early signs of arthritis you should not ignore',
    description:
      'Joint pain and tenderness, swelling around the joints, morning stiffness and reduced joint movement can be early signs of arthritis. Do not ignore them: consult a specialist in time.',
    src: '/videos/arthritis-early-signs.mp4',
    poster: arthritisPoster,
    orientation: 'portrait',
    duration: 'PT35S',
    durationLabel: '0:35',
    uploadDate: '2026-11-18',
    inLanguage: 'hi',
    department: 'orthopedics',
  },
  {
    slug: 'chronic-acidity-h-pylori',
    title: 'Chronic acidity and H. pylori infection',
    description:
      'How long-standing acidity can be linked to H. pylori infection of the stomach, which can lead to gastritis and chronic inflammation. Do not ignore persistent symptoms: an H. pylori test, a medical consultation and the right treatment help protect your stomach.',
    src: '/videos/chronic-acidity-h-pylori.mp4',
    poster: acidityPoster,
    orientation: 'portrait',
    duration: 'PT37S',
    durationLabel: '0:37',
    uploadDate: '2026-11-21',
    inLanguage: 'hi',
    department: 'general-medicine',
  },
];

export const videosForDepartment = (dept: string) => videos.filter((v) => v.department === dept);

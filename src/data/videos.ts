import type { ImageMetadata } from 'astro';

import staplerPoster from '../assets/videos/stapler-circumcision.webp';
import earPoster from '../assets/videos/ear-foreign-body.webp';
import skinPrickPoster from '../assets/videos/skin-prick-test.webp';

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
];

export const videosForDepartment = (dept: string) => videos.filter((v) => v.department === dept);

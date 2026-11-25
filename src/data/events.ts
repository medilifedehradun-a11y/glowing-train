import type { ImageMetadata } from 'astro';

import entCampPoster from '../assets/events/ent-camp-2026-11-29.webp';
import entCampBanner from '../assets/events/ent-camp-2026-11-29-banner.webp';

/**
 * Time-limited announcements (health camps, special OPDs).
 *
 * An event disappears in two ways once `end` has passed:
 *  1. Build time: `eventsFor()` drops it, so the next build ships no card and
 *     no Event JSON-LD. Test with EVENTS_NOW=2026-11-29T12:01:00+05:30 npm run build.
 *  2. In the browser: EventAnnouncement removes any card whose
 *     data-event-end is in the past, so an older deploy hides it too.
 * Times are ISO 8601 with the IST offset (+05:30; India has no DST).
 */
export interface HospitalEvent {
  slug: string;
  title: string;
  /** Hindi title as printed on the creative */
  titleHi?: string;
  summary: string;
  start: string;
  end: string;
  /** What is offered at the event */
  offers: string[];
  /** Extra highlighted line (e.g. a discount) */
  note?: string;
  /** Booking instruction shown next to the CTAs */
  booking: string;
  free: boolean;
  /** Where the card appears: 'home' and/or department slugs */
  showOn: string[];
  poster: ImageMetadata;
  posterAlt: string;
  banner?: ImageMetadata;
  /** Pre-filled WhatsApp message so staff can tell event bookings apart */
  whatsappText: string;
  /** Department to pre-select on /book-online */
  department?: string;
}

export const events: HospitalEvent[] = [
  {
    slug: 'free-ent-hearing-camp-2026-11-29',
    title: 'Free ENT & Hearing Check-up Camp',
    titleHi: 'कान जाँच शिविर',
    summary:
      'A free ear check-up camp at Medilife: hearing tests on machines, a consultation with our ENT specialist and a free hearing-aid trial.',
    start: '2026-11-29T10:00:00+05:30',
    end: '2026-11-29T12:00:00+05:30',
    offers: [
      'Hearing test on machines (audiometry)',
      'Consultation with the ENT specialist (ear specialist)',
      'Free hearing-aid trial',
    ],
    note: 'Special discount on hearing aids for senior citizens.',
    booking: 'Prior appointment is required. Please call to book your slot.',
    free: true,
    showOn: ['home', 'ent', 'audiology'],
    poster: entCampPoster,
    posterAlt:
      'Poster (Hindi): Free ENT camp - ear check-up camp on Sunday 29 November, 10 AM - 12 PM at Medilife Super Specialty Hospital, Haridwar Bypass Road, Ajabpur, near Kargi Chowk, Dehradun. Hearing test on machines, ENT doctor consultation and free hearing-aid trial. Book your appointment in advance: 7817863358',
    banner: entCampBanner,
    whatsappText:
      'Hi, I would like to book a slot at the free ENT & hearing check-up camp on Sunday 29 November (10 AM - 12 PM).',
    department: 'ent',
  },
];

/** "Now" for build-time filtering; overridable for testing via EVENTS_NOW. */
const buildNow = () => {
  const override = typeof process !== 'undefined' ? process.env.EVENTS_NOW : undefined;
  return override ? Date.parse(override) : Date.now();
};

/** Upcoming or ongoing events for a placement ('home' or a department slug). */
export const eventsFor = (where: string) =>
  events.filter((e) => e.showOn.includes(where) && Date.parse(e.end) > buildNow());

const IST = 'Asia/Kolkata';

/** e.g. "Sunday, 29 November 2026" */
export const eventDateLabel = (e: HospitalEvent) =>
  new Intl.DateTimeFormat('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: IST }).format(
    new Date(e.start)
  );

/** e.g. "10:00 AM - 12:00 PM" */
export const eventTimeLabel = (e: HospitalEvent) => {
  const f = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: IST });
  return `${f.format(new Date(e.start))} - ${f.format(new Date(e.end))}`.replace(/\b(am|pm)\b/g, (m) => m.toUpperCase());
};

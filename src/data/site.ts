/**
 * Central site configuration - single source of truth for identity,
 * contact details, navigation and social links.
 */

export const site = {
  name: 'Medilife Superspeciality Hospital',
  shortName: 'Medilife',
  tagline: 'Best Urology & Superspeciality Hospital in Dehradun',
  description:
    'Medilife Superspeciality Hospital in Dehradun offers advanced urology, orthopaedics, general surgery, ENT, onco-surgery, plastic surgery, general medicine, physiotherapy and audiology care with experienced specialists, modern operation theatres and round-the-clock emergency services.',
  url: 'https://www.medilifesuperspeciality.com',
  locale: 'en_IN',
  foundingYear: 2023,
} as const;

export const contact = {
  phoneDisplay: '+91 78178 63358',
  phoneHref: 'tel:+917817863358',
  phoneRaw: '+917817863358',
  emergencyDisplay: '+91 78178 63358',
  emergencyHref: 'tel:+917817863358',
  whatsappHref:
    'https://wa.me/917817863358?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Medilife%20Superspeciality%20Hospital.',
  email: 'medilife.dehradun@gmail.com',
  emailHref: 'mailto:medilife.dehradun@gmail.com',
  addressLine1: 'Jai Krishan Tower, Haridwar Bypass Road',
  addressLine2: 'near Kargi Chowk',
  addressCity: 'Dehradun',
  addressState: 'Uttarakhand',
  addressPostal: '248001',
  addressCountry: 'India',
  addressFull:
    'Jai Krishan Tower, Haridwar Bypass Road, near Kargi Chowk, Dehradun, Uttarakhand 248001, India',
  lat: 30.2882763,
  lng: 78.0293774,
  mapUrl:
    'https://www.google.com/maps/place/Medilife+Superspeciality+Hospital:+Premier+Multispeciality+Hospital+and+Private+Hospital/@30.2882763,78.0268025,17z/data=!3m1!4b1!4m6!3m5!1s0x390929ac43be0aad:0xc8ab6ce1e5205997!8m2!3d30.2882763!4d78.0293774!16s%2Fg%2F11kpy2_fz3',
  mapEmbed:
    'https://www.google.com/maps?q=30.2882763,78.0293774&z=16&hl=en&output=embed',
  googleReviewsUrl:
    'https://www.google.com/maps/place/Medilife+Superspeciality+Hospital:+Premier+Multispeciality+Hospital+and+Private+Hospital/@30.2882763,78.0268025,17z/data=!4m8!3m7!1s0x390929ac43be0aad:0xc8ab6ce1e5205997!9m1!1b1!16s%2Fg%2F11kpy2_fz3',
  hoursWeekday: 'Mon - Sun: 24 Hours (Emergency)',
  opdHours: 'OPD: 9:00 AM - 7:00 PM',
} as const;

/**
 * Third-party integrations. Leave a value empty ('') to disable that integration.
 * - gtmId / metaPixelId: restored from the original Wix site's tracking.
 * - web3formsKey: OPTIONAL. The forms already send real emails via FormSubmit.co
 *   (no key/signup needed) to the `contact.email` inbox. The first submission
 *   triggers a one-time activation email to that inbox - click it once to enable
 *   delivery. Set a Web3Forms key here only if you prefer that service instead.
 * - reviewsWidgetEmbed: paste a Google reviews widget embed (Trustindex /
 *   Elfsight / etc.) to show live auto-updating reviews. If empty, the section
 *   shows a "Read reviews on Google" card linking to your GMB instead.
 */
export const integrations = {
  gtmId: 'GTM-T882DX8',
  metaPixelId: '258130693596440',
  // Microsoft Clarity project (carried over from the original Wix site).
  clarityId: 'n0i07usbn0',
  // GA4 Measurement ID (G-XXXXXXXXXX). Leave empty if you run GA4 through the GTM
  // container instead (recommended), to avoid double-counting.
  ga4Id: '',
  // Google Search Console verification token (carried over from the Wix site so the
  // existing GSC property stays verified after the move).
  googleSiteVerification: 'Ahycx9PizF7wAJCQYlYuU9v9pbZKLZfXt3IPHyL54Do',
  web3formsKey: '',
  reviewsWidgetEmbed: '',
} as const;

export const social = {
  facebook: 'https://www.facebook.com/MedilifeSuperspeciality/',
  instagram: 'https://www.instagram.com/medilife_superspeciality/',
  twitter: 'https://twitter.com/Medilife_SSH',
  linkedin: 'https://in.linkedin.com/company/medilife-superspeciality-hospital',
  youtube: 'https://www.youtube.com/@MedilifeSuperspeciality',
} as const;

/** Department slugs map to /<slug> routes, mirroring the original site. */
export const departmentNav = [
  { slug: 'audiology', name: 'Audiology', icon: 'hearing' },
  { slug: 'ent', name: 'ENT', icon: 'ent' },
  { slug: 'general-medicine', name: 'General Medicine', icon: 'medicine' },
  { slug: 'general-surgery', name: 'General Surgery', icon: 'surgery' },
  { slug: 'oncology', name: 'Onco-Surgery', icon: 'oncology' },
  { slug: 'orthopedics', name: 'Orthopaedics', icon: 'ortho' },
  { slug: 'physiotherapy', name: 'Physiotherapy', icon: 'physio' },
  { slug: 'plastic-surgery', name: 'Plastic Surgery', icon: 'plastic' },
  { slug: 'urology', name: 'Urology', icon: 'urology' },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; icon?: string }[];
};

export const mainNav: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Departments',
    href: '/departments',
    children: departmentNav.map((d) => ({
      label: d.name,
      href: `/${d.slug}`,
      icon: d.icon,
    })),
  },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/photo-gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact-us' },
];

export const footerNav = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Departments', href: '/departments' },
    { label: 'Our Doctors', href: '/doctors' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Patient FAQ', href: '/faq' },
    { label: 'Photo Gallery', href: '/photo-gallery' },
    { label: 'Health Blog', href: '/blog' },
    { label: 'Book Appointment', href: '/book-online' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  departments: departmentNav.map((d) => ({
    label: d.name,
    href: `/${d.slug}`,
  })),
};

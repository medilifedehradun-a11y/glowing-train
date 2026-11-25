/**
 * Shared JSON-LD helpers so every page describes the same entities the same way.
 * The Hospital node (BaseLayout) carries HOSPITAL_ID; everything else references it.
 */
import type { Doctor } from './doctors';
import type { HospitalEvent } from './events';
import { site, contact } from './site';

export const HOSPITAL_ID = `${site.url}/#hospital`;
export const hospitalRef = { '@id': HOSPITAL_ID };

export const hospitalAddress = {
  '@type': 'PostalAddress',
  streetAddress: contact.addressLine1,
  addressLocality: contact.addressCity,
  addressRegion: contact.addressState,
  postalCode: contact.addressPostal,
  addressCountry: 'IN',
};

/**
 * NABH certificate (public/documents/nabh-certificate.pdf): Entry Level
 * certification for a Small Healthcare Organisation (SHCO) - a certification,
 * not full NABH accreditation. Say "NABH Entry Level certified" in copy.
 */
export const nabh = {
  label: 'NABH Entry Level Certified',
  certificateNo: 'PESHCO-2024-9192',
  firstCertified: '2024-03-05',
  validFrom: '2026-03-05',
  validThrough: '2028-03-04',
  validThroughLabel: '4 March 2028',
  pdf: '/documents/nabh-certificate.pdf',
} as const;

export const NABH_CREDENTIAL = {
  '@type': 'EducationalOccupationalCredential',
  name: 'NABH Entry Level Certification - Small Healthcare Organisation (SHCO)',
  credentialCategory: 'Certification',
  identifier: nabh.certificateNo,
  url: new URL(nabh.pdf, site.url).href,
  recognizedBy: {
    '@type': 'Organization',
    name: 'National Accreditation Board for Hospitals & Healthcare Providers (NABH)',
    url: 'https://nabh.co',
  },
};

/** schema.org Event for a hospital camp; emitted only while upcoming. */
export function eventNode(e: HospitalEvent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    description: e.summary,
    startDate: e.start,
    endDate: e.end,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    isAccessibleForFree: e.free,
    image: [new URL(e.poster.src, site.url).href, ...(e.banner ? [new URL(e.banner.src, site.url).href] : [])],
    location: {
      '@type': 'Hospital',
      name: site.name,
      address: hospitalAddress,
    },
    organizer: { '@type': 'Organization', name: site.name, url: site.url },
    ...(e.free
      ? {
          offers: {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: new URL(`/${e.department ?? ''}`, site.url).href,
          },
        }
      : {}),
  };
}

/** schema.org MedicalSpecialty enumeration values per department slug. */
const SPECIALTY: Record<string, string[]> = {
  urology: ['Urologic'],
  ent: ['Otolaryngologic'],
  oncology: ['Oncologic', 'Surgical'],
  orthopedics: ['Musculoskeletal'],
  'general-medicine': ['PrimaryCare'],
  'general-surgery': ['Surgical'],
  'plastic-surgery': ['PlasticSurgery'],
  'pediatric-cardiology': ['Pediatric', 'Cardiovascular'],
  physiotherapy: ['Physiotherapy'],
  audiology: [],
};

export const specialtiesFor = (deptSlug?: string) => (deptSlug ? SPECIALTY[deptSlug] ?? [] : []);

export const doctorUrl = (d: Doctor) => new URL(`/doctors/${d.slug}`, site.url).href;
export const doctorId = (d: Doctor) => `${doctorUrl(d)}#person`;

/**
 * Medical doctors -> schema.org Physician (a MedicalOrganization type: the
 * doctor's practice at our hospital, linked via parentOrganization).
 * Physiotherapists / audiologists -> Person with jobTitle, worksFor the hospital.
 */
export function doctorNode(d: Doctor, opts: { withContext?: boolean } = {}) {
  const physician = d.role !== 'therapist';
  const spec = specialtiesFor(d.department);
  const sameAs = [d.linkedin, d.facebook].filter(Boolean);
  const credentials = d.qualifications
    ? d.qualifications
        .split(/,\s*(?![^()]*\))/)
        .map((q) => ({ '@type': 'EducationalOccupationalCredential', name: q.trim() }))
    : undefined;
  const common = {
    ...(opts.withContext ? { '@context': 'https://schema.org' } : {}),
    '@id': doctorId(d),
    name: d.name,
    url: doctorUrl(d),
    description: d.bio,
    ...(d.image ? { image: new URL(d.image.src, site.url).href } : {}),
    ...(credentials ? { hasCredential: credentials } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
  if (!physician) {
    return { ...common, '@type': 'Person', jobTitle: d.title, worksFor: hospitalRef };
  }
  return {
    ...common,
    '@type': 'Physician',
    ...(spec.length ? { medicalSpecialty: spec.length === 1 ? spec[0] : spec } : {}),
    parentOrganization: hospitalRef,
    telephone: contact.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.addressLine1,
      addressLocality: contact.addressCity,
      addressRegion: contact.addressState,
      postalCode: contact.addressPostal,
      addressCountry: 'IN',
    },
  };
}

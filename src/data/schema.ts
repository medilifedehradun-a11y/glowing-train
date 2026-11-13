/**
 * Shared JSON-LD helpers so every page describes the same entities the same way.
 * The Hospital node (BaseLayout) carries HOSPITAL_ID; everything else references it.
 */
import type { Doctor } from './doctors';
import { site, contact } from './site';

export const HOSPITAL_ID = `${site.url}/#hospital`;
export const hospitalRef = { '@id': HOSPITAL_ID };

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

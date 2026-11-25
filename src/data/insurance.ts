import type { ImageMetadata } from 'astro';

/**
 * Insurance, TPA and government health-scheme facilities.
 * Single source for /insurance, the homepage insurance section and the
 * Hospital JSON-LD. Sources (Nov 2026): hospital-supplied copy ("Empanelled
 * under CGHS, CAPF"), department posters ("CGHS, CAPF (Golden Card), Ayushman
 * card and all private TPAs accepted") and the hospital's empanelled list
 * (EMPANELLED HOSPITAL LIST.xls, 24 Nov 2026).
 */

export interface Scheme {
  /** Short name shown as the card title */
  short: string;
  /** Full name of the scheme */
  name: string;
  /** Who it is for / what patients should know */
  description: string;
  /** What to bring to the hospital */
  bring: string;
  icon: string;
}

export const empanelmentLine = 'Empanelled under CGHS, SGHS and CAPF';

/** A - Government health schemes (order as supplied by the hospital). */
export const governmentSchemes: Scheme[] = [
  {
    short: 'CGHS',
    name: 'Central Government Health Scheme',
    description:
      'Medilife is empanelled under CGHS. Serving and retired Central Government employees and their eligible dependants can be treated here under the scheme.',
    bring: 'CGHS card and the referral or permission documents that apply to your treatment.',
    icon: 'shield',
  },
  {
    short: 'PM-JAY',
    name: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana',
    description:
      'Ayushman card holders can get treatment under Ayushman Bharat PM-JAY for the procedures and packages covered by the scheme.',
    bring: 'Ayushman card (or PM-JAY e-card) and Aadhaar card.',
    icon: 'heartPulse',
  },
  {
    short: 'SGHS',
    name: 'State Government Health Scheme (Uttarakhand)',
    description:
      'Medilife is empanelled under the State Government Health Scheme. Eligible state government beneficiaries can be treated here under the scheme.',
    bring: 'SGHS card and the documents your scheme requires for treatment.',
    icon: 'building',
  },
  {
    short: 'CAPF',
    name: 'Central Armed Police Forces (Golden Card)',
    description:
      'Medilife is empanelled under CAPF. Eligible CAPF beneficiaries holding the CAPF Golden Card can be treated here as per scheme rules.',
    bring: 'CAPF Golden Card and the documents your scheme requires for treatment.',
    icon: 'award',
  },
];

/** B - TPA services & private health insurance. */
export const tpaServices: { title: string; text: string; icon: string }[] = [
  {
    title: 'Cashless treatment',
    text: 'We accept private health insurance through TPAs, so eligible treatment can be cashless, subject to your insurer’s approval.',
    icon: 'checkCircle',
  },
  {
    title: 'Pre-authorisation help',
    text: 'Our insurance desk prepares and sends the pre-authorisation request to your TPA or insurer and follows it up.',
    icon: 'clock',
  },
  {
    title: 'Paperwork at discharge',
    text: 'We help you with the claim documents and final bill so the discharge process stays simple.',
    icon: 'bed',
  },
  {
    title: 'Reimbursement support',
    text: 'If your policy works on reimbursement, we give you the bills, reports and discharge summary you need to file the claim.',
    icon: 'flask',
  },
];

/**
 * Empanelled insurance companies and TPAs (from the hospital's list, names in
 * their standard published form), shown alphabetically on /insurance.
 * Listed "GALAXY TPA", "MAGMA TPA" and "RELIANCE GENERAL INSURANCE INDUS" are
 * the insurers Galaxy Health, Magma General and IndusInd General (renamed from
 * Reliance General); "AKNA INSURANCE" is AKNA Health Insurance TPA Pvt. Ltd.
 * (aknatpa.com, confirmed by the hospital). Logos: official sites (Wikimedia Commons for ICICI
 * Lombard, Liberty and Star Health, whose sites block downloads), Nov 2026.
 */
export const tpaList: string[] = [
  'ACKO Insurance',
  'AKNA Health Insurance TPA',
  'Aditya Birla Health Insurance',
  'Bajaj General Insurance',
  'Chola MS General Insurance',
  'Ericson TPA',
  'Family Health Plan TPA (FHPL)',
  'Galaxy Health Insurance',
  'Generali Central Insurance',
  'Genins India TPA',
  'Go Digit Insurance',
  'HDFC ERGO',
  'Health India TPA',
  'ICICI Lombard',
  'IFFCO-Tokio General Insurance',
  'Liberty General Insurance',
  'Magma General Insurance',
  'ManipalCigna Health Insurance',
  'MDIndia Health Insurance TPA',
  'Medi Assist TPA',
  'Narayana Health Insurance',
  'Navi General Insurance',
  'New India Assurance',
  'Niva Bupa Health Insurance',
  'Raheja QBE General Insurance',
  'IndusInd General Insurance (formerly Reliance General)',
  'Royal Sundaram General Insurance',
  'Star Health Insurance',
  'Tata AIG',
  'United India Insurance',
  'Universal Sompo General Insurance',
  'Vidal Health TPA',
  'Zuno General Insurance',
].sort((a, b) => a.localeCompare(b));

/** Institutional / corporate tie-ups (employees and their families). */
export const institutions: string[] = ['Wildlife Institute of India, Dehradun'];

/** Short line used on cards and strips. */
export const insuranceSummary = 'CGHS, SGHS, CAPF (Golden Card), Ayushman card and private insurance / TPA accepted';

/** Documents checklist for a cashless admission. */
export const insuranceDocuments = [
  'Insurance / TPA card or policy copy',
  'Photo ID (Aadhaar card) of the patient',
  'Scheme card: CGHS, SGHS, CAPF Golden Card or Ayushman card',
  'Doctor’s advice for admission and previous medical reports',
];

/**
 * Logos. Drop a file named after the slug of the name into the folder and it
 * is picked up automatically (png, jpg, webp or svg), e.g.
 *   src/assets/logos/schemes/cghs.png
 *   src/assets/logos/insurers/star-health-insurance.png
 * Without a file, the site shows a text tile instead.
 */
const schemeLogoFiles = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/logos/schemes/*.{png,jpg,jpeg,webp,svg}',
  { eager: true }
);
const insurerLogoFiles = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/logos/insurers/*.{png,jpg,jpeg,webp,svg}',
  { eager: true }
);

export const logoSlug = (name: string) =>
  name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const pick = (files: Record<string, { default: ImageMetadata }>, slug: string) => {
  const hit = Object.keys(files).find((k) => k.split('/').pop()!.replace(/\.[^.]+$/, '') === slug);
  return hit ? files[hit].default : undefined;
};

export const schemeLogo = (short: string) => pick(schemeLogoFiles, logoSlug(short));
export const insurerLogo = (name: string) => pick(insurerLogoFiles, logoSlug(name));

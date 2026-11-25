import type { ImageMetadata } from 'astro';

/**
 * Hospital media for the gallery: photographs (health camps, OPD, press) and
 * a few current posters. Expired offers, outdated certificates, third-party
 * newspaper pages, posters with unsupported claims and OPD standees whose
 * timings were superseded by the Nov 2026 department posters were removed.
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
  'g13.jpg': 'Medilife Superspeciality Hospital featured in a VIP News television update',
  'g14.jpg': 'Doctor reviewing patients’ reports at a Medilife community health camp',
  'g15.jpg': 'Medilife doctor writing prescriptions for patients at a health camp',
  'g17.jpg': 'Medilife doctor speaking to the press at a health camp',
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
 * Health-awareness campaign creatives (portrait posters, mostly 4:5). Shown in
 * their own section on the gallery page (grouped by department) and on the
 * matching department page, so they are not cropped like the 4:3 photo grid,
 * and kept out of the homepage premises marquee.
 *
 * Time-limited creatives (camps, offers) do not belong here: put them in
 * events.ts, which hides them automatically once they are over.
 */
import awarenessSummerFatigue from '../assets/campaigns/awareness-summer-fatigue.webp';
import awarenessAcidity from '../assets/campaigns/awareness-acidity.webp';
import awarenessKneePain from '../assets/campaigns/awareness-knee-pain.webp';
import awarenessBloodPressure from '../assets/campaigns/awareness-blood-pressure.webp';
import awarenessPreventiveCheckup from '../assets/campaigns/awareness-preventive-checkup.webp';
import departmentUrology from '../assets/campaigns/department-urology.webp';
import awarenessUroflowmetry from '../assets/campaigns/awareness-uroflowmetry.webp';
import awarenessKidneyStoneRirs from '../assets/campaigns/awareness-kidney-stone-rirs.webp';
import awarenessKidneyStoneCauses from '../assets/campaigns/awareness-kidney-stone-causes.webp';
import awarenessKidneyHealth from '../assets/campaigns/awareness-kidney-health.webp';
import awarenessStaplerCircumcision from '../assets/campaigns/awareness-stapler-circumcision.webp';
import departmentEnt from '../assets/campaigns/department-ent.webp';
import awarenessEarDrops from '../assets/campaigns/awareness-ear-drops.webp';
import awarenessHearingAids from '../assets/campaigns/awareness-hearing-aids.webp';
import departmentGeneralSurgery from '../assets/campaigns/department-general-surgery.webp';
import awarenessLaparoscopicSurgery from '../assets/campaigns/awareness-laparoscopic-surgery.webp';
import awarenessStomachPain from '../assets/campaigns/awareness-stomach-pain.webp';
import awarenessKneeReplacement from '../assets/campaigns/awareness-knee-replacement.webp';
import awarenessArthritis from '../assets/campaigns/awareness-arthritis.webp';
import awarenessGeneralPhysician from '../assets/campaigns/awareness-general-physician.webp';

export interface Campaign {
  src: ImageMetadata;
  alt: string;
  /** Department slug (departments.ts); the poster also shows on that department's page. */
  department: string;
}

/** Order: grouped by department (gallery page follows this order). */
export const campaigns: Campaign[] = [
  // Urology
  {
    src: departmentUrology,
    department: 'urology',
    alt: 'Medilife Urology department poster (Hindi): modern treatment for kidney, bladder, prostate and urinary problems - uroflowmetry, cystoscopy, HoLEP, TURP, TURBT, RIRS, URS, PCNL, OIU, urethroplasty, laparoscopic surgery, stapler circumcision, AV fistula and CAPD. OPD 10 - 11 AM and 5 - 7 PM. CGHS, CAPF (Golden Card), Ayushman card and private TPAs accepted',
  },
  {
    src: awarenessUroflowmetry,
    department: 'urology',
    alt: 'Medilife awareness poster (Hindi): the uroflowmetry test is a simple, painless test that measures the speed and volume of urine flow, advised for a weak stream, frequent urination or difficulty starting to pass urine. Department of Urology',
  },
  {
    src: awarenessKidneyStoneRirs,
    department: 'urology',
    alt: 'Medilife poster: kidney stone? Advanced treatment with RIRS (retrograde intrarenal surgery) - call to book an appointment. Department of Urology',
  },
  {
    src: awarenessKidneyStoneCauses,
    department: 'urology',
    alt: 'Medilife awareness poster (Hindi): five main causes of recurring kidney stones - too little water, too much salt, a lot of animal protein, family history and metabolic problems. Department of Urology',
  },
  {
    src: awarenessKidneyHealth,
    department: 'urology',
    alt: 'Medilife kidney health poster (Hindi): habits for healthy kidneys - drink enough water, limit salt and sugar, exercise regularly, avoid alcohol and smoking, and get kidney function, blood pressure and sugar checked from time to time. Department of Urology',
  },
  {
    src: awarenessStaplerCircumcision,
    department: 'urology',
    alt: 'Medilife poster: stapler circumcision (khatna) - a safe procedure that takes less time, with quicker recovery, for all ages. Department of Urology',
  },
  // ENT
  {
    src: departmentEnt,
    department: 'ent',
    alt: 'Medilife ENT department poster (Hindi): ear, nose and throat specialist for ear pain, blocked or discharging ear, eardrum perforation, hearing loss, allergy, blocked nose, nosebleed, sneezing, snoring, sore throat, vertigo, speech and breathing problems, sinus, tonsils, ENT injuries, swallowing difficulty and sleep apnoea. OPD 10 AM - 2 PM and 5 - 7 PM. CGHS, CAPF (Golden Card), Ayushman card and private TPAs accepted',
  },
  {
    src: awarenessEarDrops,
    department: 'ent',
    alt: 'Medilife awareness poster (Hindi): ear pain? Is it right to put ear drops in on your own? Ask an ENT specialist',
  },
  // Audiology
  {
    src: awarenessHearingAids,
    department: 'audiology',
    alt: 'Medilife Hearing & Speech Care Centre poster (Hindi): an easy solution for hearing problems - hear your loved ones clearly again with modern hearing aids, including invisible (minimal) hearing aids',
  },
  // General surgery
  {
    src: departmentGeneralSurgery,
    department: 'general-surgery',
    alt: 'Medilife General & Laparoscopic Surgery department poster (Hindi): hernia repair (laparoscopic / open), cholecystectomy, appendectomy, colectomy, gastrectomy, splenectomy, haemorrhoidectomy, piles and fistula, varicose veins and circumcision. OPD 5 - 7 PM. CGHS, CAPF (Golden Card), Ayushman card and private TPAs accepted',
  },
  {
    src: awarenessLaparoscopicSurgery,
    department: 'general-surgery',
    alt: 'Medilife poster (Hindi): afraid of a large incision? Laparoscopic (keyhole) surgery for gallbladder stones, hernia and appendix, with small cuts, comparatively less pain and quicker recovery',
  },
  {
    src: awarenessStomachPain,
    department: 'general-surgery',
    alt: 'Medilife poster (Hindi): troubled by constant abdominal pain? Treatment for piles, anal fissure, pilonidal sinus, hernia and appendicitis with modern techniques',
  },
  // Orthopaedics
  {
    src: awarenessKneeReplacement,
    department: 'orthopedics',
    alt: 'Medilife awareness poster (Hindi): is knee pain making daily life difficult - trouble walking, climbing stairs, swelling and stiffness, pain on standing? Knee replacement is an option. Bone and joint department',
  },
  {
    src: awarenessArthritis,
    department: 'orthopedics',
    alt: 'Medilife awareness poster (Hindi): common symptoms of arthritis - constant joint pain, difficulty walking, swelling and stiffness, and cracking joints. Consult a specialist in time. Bone and joint department',
  },
  {
    src: awarenessKneePain,
    department: 'orthopedics',
    alt: 'Medilife health awareness poster: knee pain and arthritis care by Dr. Sunny Dua, Orthopaedics',
  },
  // General medicine
  {
    src: awarenessGeneralPhysician,
    department: 'general-medicine',
    alt: 'Medilife General Physician poster (Hindi): the guardian of your overall health - fever, headache, cough, weakness, stomach problems and breathing difficulty. Department of Medicine OPD, evening 4 - 7 PM',
  },
  {
    src: awarenessBloodPressure,
    department: 'general-medicine',
    alt: 'Medilife health awareness poster (Hindi): keep blood pressure under control to protect your heart - eat a balanced low-salt diet, exercise regularly, keep a healthy weight, avoid smoking and sleep well. Department of Medicine OPD, Monday to Saturday, 4 PM - 7 PM',
  },
  {
    src: awarenessPreventiveCheckup,
    department: 'general-medicine',
    alt: 'Medilife health awareness poster (Hindi): regular preventive health check-ups detect disease early, assess heart, diabetes and blood-pressure risk and help prevent complications. Department of Medicine OPD, Monday to Saturday, 4 PM - 7 PM',
  },
  {
    src: awarenessSummerFatigue,
    department: 'general-medicine',
    alt: 'Medilife health awareness poster: spotting summer fatigue and weakness, with General Physician OPD timings',
  },
  {
    src: awarenessAcidity,
    department: 'general-medicine',
    alt: 'Medilife health awareness poster: stomach pain and acidity symptoms, with General Physician OPD timings',
  },
];

export const campaignsForDepartment = (dept: string) => campaigns.filter((c) => c.department === dept);

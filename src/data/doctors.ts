import type { ImageMetadata } from 'astro';

import riktaRoy from '../assets/doctors/rikta-roy.png';
import manojBiswas from '../assets/doctors/manoj-biswas.avif';
import navneetJain from '../assets/doctors/navneet-jain.avif';
import narayanJeetSingh from '../assets/doctors/narayan-jeet-singh.jpg';
import vishnuVajpai from '../assets/doctors/vishnu-vajpai.avif';
import sanketNarayanSingh from '../assets/doctors/sanket-narayan-singh.avif';
import shivamDang from '../assets/doctors/shivam-dang.avif';
import sunnyDua from '../assets/doctors/sunny-dua.png';
import mohdUwais from '../assets/doctors/mohd-uwais.png';

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialtyTag: string;
  /** related department slug, if the person maps to a department page */
  department?: string;
  bio: string;
  /** optional - falls back to an initials avatar when a photo is not available */
  image?: ImageMetadata;
  /** optional OPD timings shown on the profile card */
  opd?: string;
  linkedin?: string;
  facebook?: string;
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-rikta-roy',
    name: 'Dr. Rikta Roy',
    title: 'Director & Senior ENT Consultant',
    specialtyTag: 'ENT',
    department: 'ent',
    bio: 'Director of Medilife Superspeciality Hospital and a senior ENT surgeon. Ex-ENT Consultant at AIIMS Bhopal, Himalayan Hospital (Jolly Grant) and Government Doon Medical College, Dehradun.',
    image: riktaRoy,
    linkedin: 'https://www.linkedin.com/in/dr-rikta-roy-10264722/',
    facebook: 'https://www.facebook.com/rikta.roy.927',
  },
  {
    slug: 'dr-manoj-biswas',
    name: 'Dr. Manoj Biswas',
    title: 'Senior Consultant Urologist',
    specialtyTag: 'Urology',
    department: 'urology',
    bio: 'Endo-Urologist and Laparoscopic & Urethral Reconstructive Urologist. Formerly Consultant at AIIMS Bhopal and Himalayan Institute of Medical Sciences, Jolly Grant.',
    image: manojBiswas,
    linkedin: 'https://www.linkedin.com/in/manoj-biswas-04272521/',
    facebook: 'https://www.facebook.com/manoj.biswas.9026',
  },
  {
    slug: 'dr-navneet-jain',
    name: 'Dr. Navneet Jain',
    title: 'Senior Consultant Onco-Surgeon',
    specialtyTag: 'Onco-Surgery',
    department: 'oncology',
    bio: 'Senior surgical oncologist. Ex-Consultant at Himalayan Hospital (Jolly Grant) and Government Doon Medical College, Dehradun.',
    image: navneetJain,
  },
  {
    slug: 'dr-narayan-jeet-singh',
    name: 'Dr. Narayan Jeet Singh',
    title: 'Senior Consultant Physician',
    specialtyTag: 'General Medicine',
    department: 'general-medicine',
    bio: 'Ex-Professor and Head, Government Doon Medical College and Ex-Consultant at Himalayan Institute of Medical Sciences, with decades of experience in internal medicine.',
    image: narayanJeetSingh,
  },
  {
    slug: 'dr-vishnu-vajpai',
    name: 'Dr. Vishnu Vajpai',
    title: 'Senior Orthopedic Surgeon',
    specialtyTag: 'Orthopedics',
    department: 'orthopedics',
    bio: 'Expert in total hip & knee arthroplasty. Ex-Max Super Speciality Hospital, Vaishali and Ex-Park Multi Super Speciality Hospital, Faridabad.',
    image: vishnuVajpai,
    linkedin: 'https://www.linkedin.com/in/vishnu-vajpai-3b9307209/',
  },
  {
    slug: 'dr-sanket-narayan-singh',
    name: 'Dr. Sanket Narayan Singh',
    title: 'Consultant - General & Laparoscopic Surgery',
    specialtyTag: 'General Surgery',
    department: 'general-surgery',
    bio: '9 years of experience as Associate Consultant in General & Laparoscopic Surgery. Proctologist treating piles, fistula, circumcision, hernia, gallstones and varicose veins.',
    image: sanketNarayanSingh,
  },
  {
    slug: 'dr-shivam-dang',
    name: 'Dr. Shivam Dang',
    title: 'Senior Consultant Plastic Surgery',
    specialtyTag: 'Plastic Surgery',
    department: 'plastic-surgery',
    bio: 'Plastic & reconstructive surgeon, Yashoda Hospital & Research Centre, Ghaziabad. Ex-Senior Resident in Plastic Surgery at Army Hospital (R&R), New Delhi and General Surgery at Himalayan Institute of Medical Sciences, Dehradun.',
    image: shivamDang,
  },
  {
    slug: 'dr-sunny-dua',
    name: 'Dr. Sunny Dua',
    title: 'Consultant Orthopedic Surgeon | Bone & Joint Replacement',
    specialtyTag: 'Orthopedics',
    department: 'orthopedics',
    bio: 'Consultant Orthopedic and Bone & Joint Replacement Surgeon. Treats fractures and trauma, arthritis, sports injuries and spine disorders, with joint replacement, arthroscopy, PRP therapy and paediatric orthopaedics.',
    image: sunnyDua,
  },
  {
    slug: 'dr-shah-t-arajmand',
    name: 'Dr. Shah T. Arajmand',
    title: 'Consultant Minimal Access Surgeon | Laparoscopic & Robotic',
    specialtyTag: 'Laparoscopic Surgery',
    department: 'general-surgery',
    bio: 'MBBS, MS (General Surgery), FNB (MAS), FMBS. Advanced Laparoscopic & Robotic Surgeon with 12 years of experience. Ex-Consultant at Indraprastha Apollo Hospital, New Delhi. Performs laparoscopic surgery for gallbladder, biliary and hydatid liver disease, hernia (inguinal, abdominal, hiatus), GERD, stomach and intestinal conditions, appendix, rectal prolapse, piles and fistula, plus bariatric (weight-loss) surgery.',
    opd: 'Mon - Fri, 4:00 PM - 6:30 PM',
  },
  {
    slug: 'mohd-uwais',
    name: 'Mohd Uwais (PT)',
    title: 'Consultant Physiotherapist',
    specialtyTag: 'Physiotherapy',
    department: 'physiotherapy',
    bio: 'BPT, MPT (Neuro). Certified Chiropractor and Wet Cupping Therapist (CMT, CKTI, CDNT, CIASTM, CCT, CSRS, BLS). Treats sciatica, frozen shoulder, arthritis, post-fracture and post-surgery rehabilitation, stroke, spinal cord injury, Bell’s palsy, vertigo, strains and sprains, with postural analysis and correction.',
    image: mohdUwais,
  },
  {
    slug: 'padma-rawat',
    name: 'Padma Rawat',
    title: 'Audiologist',
    specialtyTag: 'Audiology',
    department: 'audiology',
    bio: 'Audiologist providing audiometry and hearing-aid services. Also associated with Nyra Speech & Hearing Care.',
  },
];

export const getDoctorByDepartment = (dept: string) =>
  doctors.find((d) => d.department === dept);

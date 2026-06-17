import type { ImageMetadata } from 'astro';

import riktaRoy from '../assets/doctors/rikta-roy.png';
import manojBiswas from '../assets/doctors/manoj-biswas.avif';
import navneetJain from '../assets/doctors/navneet-jain.avif';
import narayanJeetSingh from '../assets/doctors/narayan-jeet-singh.jpg';
import vishnuVajpai from '../assets/doctors/vishnu-vajpai.avif';
import sanketNarayanSingh from '../assets/doctors/sanket-narayan-singh.avif';
import shivamDang from '../assets/doctors/shivam-dang.avif';

export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialtyTag: string;
  /** related department slug */
  department: string;
  bio: string;
  image: ImageMetadata;
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
];

export const getDoctorByDepartment = (dept: string) =>
  doctors.find((d) => d.department === dept);

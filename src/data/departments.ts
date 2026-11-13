import type { ImageMetadata } from 'astro';

import entImg from '../assets/departments/ent.webp';
import urologyImg from '../assets/departments/urology.webp';
import oncologyImg from '../assets/departments/oncology.webp';
import orthoImg from '../assets/departments/orthopedics.webp';
import medicineImg from '../assets/departments/general-medicine.webp';
import surgeryImg from '../assets/departments/general-surgery.webp';
import plasticImg from '../assets/departments/plastic-surgery.webp';
import physiotherapyImg from '../assets/departments/physiotherapy.webp';
import audiologyImg from '../assets/departments/audiology.webp';

export interface Department {
  slug: string;
  name: string;
  /** Heading used on the department page */
  pageTitle: string;
  /** <title> override for search (local intent, ~50 chars) */
  seoTitle?: string;
  /** Short label for chips/cards */
  shortName: string;
  icon: string;
  /** Accent colours (hex) for cards and headers */
  color: string;
  colorDark: string;
  bg: string;
  tagline: string;
  /** One-line card excerpt */
  excerpt: string;
  /** Intro paragraphs on the department page */
  overview: string[];
  /** Key focus areas / highlights */
  highlights: string[];
  /** Treatments & procedures offered */
  procedures: string[];
  /** Optional intro above the procedures grid (defaults to a generic line) */
  proceduresIntro?: string;
  /** Common conditions treated */
  conditions?: string[];
  /** optional - cards/headers fall back to an icon panel when absent */
  image?: ImageMetadata;
  leadDoctor: string;
  featured?: boolean;
  order: number;
  metaDescription: string;
}

export const departments: Department[] = [
  {
    slug: 'urology',
    name: 'Urology',
    pageTitle: 'Urology & Kidney Care',
    seoTitle: 'Urologist in Dehradun: Kidney Stones & Prostate',
    shortName: 'Urology',
    icon: 'urology',
    color: '#2461a6',
    colorDark: '#1f4f87',
    bg: '#eef5fc',
    tagline: 'Advanced Urology Care in Dehradun',
    excerpt:
      'Advanced urological care - uroflowmetry, cystoscopy, HOLEP, TURP, TURBT, RIRS, URS, PCNL, urethroplasty, laparoscopic surgery, AV fistula and CAPD.',
    overview: [
      'Medilife is a dedicated urology centre in Dehradun, offering the full spectrum of endourology, laparoscopic and reconstructive urology under one roof.',
      'Led by our endo-urologist, the department combines laser technology, minimally invasive techniques and dedicated dialysis support to treat kidney stones, prostate disease, urinary obstruction and $1, often with a shorter recovery than open surgery.',
    ],
    highlights: [
      'Laser treatment for kidney stones (RIRS, PCNL)',
      'Prostate surgery - HOLEP, TURP',
      'Reconstructive & urethral surgery',
      'Laparoscopic urological surgery',
      'Dialysis access - AV fistula & CAPD',
    ],
    procedures: [
      'Uroflowmetry',
      'Cystoscopy',
      'HOLEP (Holmium Laser Enucleation of Prostate)',
      'TURP (Transurethral Resection of Prostate)',
      'TURBT (Transurethral Resection of Bladder Tumour)',
      'RIRS (Retrograde Intrarenal Surgery)',
      'URS (Ureteroscopy)',
      'PCNL (Percutaneous Nephrolithotomy)',
      'OIU (Optical Internal Urethrotomy)',
      'Urethroplasty',
      'Advanced Laparoscopic Surgery',
      'Stapler circumcision',
      'AV Fistula creation',
      'CAPD (Peritoneal Dialysis)',
    ],
    conditions: [
      'Kidney & ureteric stones',
      'Enlarged prostate (BPH)',
      'Urinary incontinence',
      'Urethral stricture',
      'Bladder tumours',
      'Chronic kidney disease',
    ],
    image: urologyImg,
    leadDoctor: 'dr-manoj-biswas',
    featured: true,
    order: 1,
    metaDescription:
      'Urology care in Dehradun: laser kidney stone treatment (RIRS, PCNL), prostate surgery (HOLEP, TURP), urethroplasty and dialysis access at Medilife.',
  },
  {
    slug: 'ent',
    name: 'ENT',
    pageTitle: 'ENT & Head-Neck Surgery',
    seoTitle: 'ENT Specialist in Dehradun: Sinus, Ear & Thyroid',
    shortName: 'ENT',
    icon: 'ent',
    color: '#7c3aed',
    colorDark: '#6d28d9',
    bg: '#f5f3ff',
    tagline: 'Ear, Nose, Throat & Head-Neck Care',
    excerpt:
      'Nasal endoscopy, laryngoscopy, otoendoscopy, FESS, mastoid surgery, head & neck oncological surgery, and thyroid & parotid surgeries.',
    overview: [
      'Our ENT department, led by our Director and senior ENT surgeon, delivers comprehensive diagnostic and surgical care for ear, nose, throat, and head & neck conditions.',
      'From endoscopic sinus surgery and microscopic ear surgery to thyroid, parotid and head & neck cancer surgery, procedures are performed using endoscopic techniques - many performed through the nose or ear canal rather than through an external incision.',
    ],
    highlights: [
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Endoscopic ear surgery (Tympanoplasty)',
      'Thyroid & parotid surgery',
      'Head & neck onco-surgery',
      'Voice, hearing & allergy care',
    ],
    procedures: [
      'Diagnostic Nasal Endoscopy',
      'Laryngoscopy',
      'Otoendoscopy',
      'Septoplasty',
      'Functional Endoscopic Sinus Surgery (FESS)',
      'Tympanoplasty',
      'Mastoid Surgery',
      'Fracture nasal bone reduction',
      'Thyroid Surgery',
      'Parotid Surgery',
      'Submandibular gland surgery',
      'Head & Neck Onco-Surgery',
      'Sialolithiasis treatment',
      'Foreign body removal (Ear / Nose / Throat)',
      'Tinnitus management',
      'Ear lobe repair & ear piercing',
      'Skin prick allergy testing',
      'Allergy & keloid treatment',
      'Oral cavity lesion management',
    ],
    conditions: [
      'Chronic sinusitis & nasal polyps',
      'Deviated nasal septum',
      'Eardrum perforation & ear infections',
      'Hearing loss',
      'Thyroid & parotid swellings',
      'Head & neck cancers',
    ],
    image: entImg,
    leadDoctor: 'dr-rikta-roy',
    order: 2,
    metaDescription:
      'ENT and head-neck surgery in Dehradun: FESS, septoplasty, tympanoplasty, mastoid, thyroid and parotid surgery, and allergy testing at Medilife.',
  },
  {
    slug: 'oncology',
    name: 'Onco-Surgery',
    pageTitle: 'Onco-Surgery',
    seoTitle: 'Cancer Surgeon in Dehradun: Onco-Surgery',
    shortName: 'Onco-Surgery',
    icon: 'oncology',
    color: '#e11d48',
    colorDark: '#be123c',
    bg: '#fff1f3',
    tagline: 'Comprehensive Cancer Surgery',
    excerpt:
      'Surgical treatment for breast, gastrointestinal, gynaecological, urological, thoracic, head & neck and skin cancers.',
    overview: [
      'Our surgical oncology department provides comprehensive, multidisciplinary cancer surgery with a focus on precision, organ preservation and quality of life.',
      'From breast-conserving surgery and the Whipple procedure to complex head & neck and gynaecological cancer surgery, our oncosurgeons deliver evidence-based treatment in a compassionate, patient-centred environment.',
    ],
    highlights: [
      'Breast cancer surgery (lumpectomy to MRM)',
      'Gastrointestinal & colorectal cancer surgery',
      'Gynaecological cancer surgery',
      'Head & neck onco-surgery',
      'Reconstructive & palliative surgery',
    ],
    procedures: [
      'Breast Cancer Surgery (Lumpectomy, Mastectomy, MRM)',
      'Sentinel Lymph Node Biopsy & Axillary Dissection',
      'Gastrectomy',
      'Colectomy & colorectal resections',
      'Whipple Procedure (Pancreaticoduodenectomy)',
      'Oesophagectomy',
      'Hysterectomy & Oophorectomy (gynae-oncology)',
      'Nephrectomy, Cystectomy & Prostatectomy',
      'Laryngectomy & thoracic cancer surgery',
      'Neck Dissection, Mandibulectomy & Glossectomy',
      'Wide local excision for skin cancer',
      'Debulking, reconstructive & palliative surgery',
    ],
    conditions: [
      'Breast cancer',
      'Colorectal & gastrointestinal cancers',
      'Gynaecological cancers',
      'Head & neck cancers',
      'Urological & thoracic cancers',
    ],
    image: oncologyImg,
    leadDoctor: 'dr-navneet-jain',
    order: 3,
    metaDescription:
      'Surgical oncology in Dehradun: breast, gastrointestinal, gynaecological, head and neck, urological and thoracic cancer surgery at Medilife.',
  },
  {
    slug: 'orthopedics',
    name: 'Orthopaedics',
    pageTitle: 'Orthopaedics & Joint Replacement',
    seoTitle: 'Orthopaedic Surgeon in Dehradun: Knee & Hip',
    shortName: 'Orthopaedics',
    icon: 'ortho',
    color: '#d97706',
    colorDark: '#b45309',
    bg: '#fff8eb',
    tagline: 'Bones, Joints & Trauma Care',
    excerpt:
      'Fracture care, bone nailing & plating, ORIF, total hip and knee replacement, amputations and fasciotomies.',
    overview: [
      'Our orthopaedics department offers complete musculoskeletal care - from trauma and fracture management to advanced joint replacement.',
      'Led by a surgeon specialising in total hip & knee arthroplasty, we treat fractures, joint disease and sports injuries using modern implants and techniques for a quicker return to active life.',
    ],
    highlights: [
      'Joint replacement (knee, hip & shoulder)',
      'Fracture & trauma care',
      'Arthroscopy & sports injuries',
      'Spine disorders & arthritis management',
      'PRP therapy & rehabilitation',
    ],
    procedures: [
      'Joint Replacement Surgery',
      'Total Hip Replacement',
      'Total Knee Replacement',
      'Fracture & Trauma Care',
      'Fracture fixation (nailing, plating, ORIF)',
      'Trauma amputation & fasciotomy',
      'Arthroscopy & Sports Injuries',
      'Spine Disorders',
      'Arthritis Management',
      'Knee, Hip & Shoulder Care',
      'Plaster & Cast Services',
      'PRP Therapy',
      'Distal channel sodium block injections',
      'Osteoporosis Management',
      'Paediatric Orthopaedics',
      'Rehabilitation & Physiotherapy Guidance',
    ],
    conditions: [
      'Fractures & trauma',
      'Knee, hip & shoulder arthritis',
      'Sports injuries',
      'Spine disorders',
      'Osteoporosis',
    ],
    image: orthoImg,
    leadDoctor: 'dr-vishnu-vajpai',
    order: 4,
    metaDescription:
      'Orthopaedics in Dehradun: fracture care, total hip and knee replacement and sports injury management at Medilife Superspeciality Hospital.',
  },
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    pageTitle: 'General Medicine',
    seoTitle: 'General Physician in Dehradun',
    shortName: 'Medicine',
    icon: 'medicine',
    color: '#1c5cf5',
    colorDark: '#1547e1',
    bg: '#eef6ff',
    tagline: 'Everyday & Chronic Care',
    excerpt:
      'Care for fever, blood pressure, diabetes, thyroid issues, joint pains, arthritis and comprehensive whole-body checkups.',
    overview: [
      'Our general medicine department provides primary and internal medicine care for patients of all ages, managing acute illness and long-term chronic conditions.',
      'With experienced physicians and full diagnostic support, we offer everything from fever and infection management to diabetes, hypertension and thyroid care, plus preventive whole-body health checkups.',
    ],
    highlights: [
      'Diabetes & thyroid management',
      'Blood pressure & heart-risk care',
      'Fever & infection management',
      'Preventive health checkups',
      'Chronic disease follow-up',
    ],
    procedures: [
      'Fever & infection management',
      'Blood pressure (hypertension) care',
      'Diabetes management',
      'Thyroid disorder treatment',
      'Joint pain & arthritis care',
      'Comprehensive whole-body checkup',
    ],
    conditions: [
      'Diabetes & thyroid disorders',
      'Hypertension',
      'Seasonal & viral fevers',
      'Arthritis & joint pain',
    ],
    image: medicineImg,
    leadDoctor: 'dr-narayan-jeet-singh',
    order: 5,
    metaDescription:
      'General medicine in Dehradun - diabetes, blood pressure, thyroid, fever, arthritis care and whole-body health checkups at Medilife Superspeciality Hospital.',
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    pageTitle: 'General & Laparoscopic Surgery',
    seoTitle: 'Laparoscopic & General Surgery in Dehradun',
    shortName: 'Surgery',
    icon: 'surgery',
    color: '#0891b2',
    colorDark: '#0e7490',
    bg: '#ecfeff',
    tagline: 'Laparoscopic & Open Surgery',
    excerpt:
      'Appendectomy, cholecystectomy, hernia repair, colectomy, gastrectomy, splenectomy, laser haemorrhoidectomy, piles & fistula care.',
    overview: [
      'Our general surgery department delivers comprehensive open and laparoscopic surgical care with a focus on minimally invasive techniques and rapid recovery.',
      'From day-care laparoscopic procedures to complex abdominal surgery and laser treatment for piles and fistula, our surgeons focus on careful, modern and patient-centred care.',
    ],
    highlights: [
      'Laparoscopic (keyhole) surgery',
      'Laser treatment for piles & fistula',
      'Hernia & gallbladder surgery',
      'Appendix & abdominal surgery',
      'Proctology care',
    ],
    procedures: [
      'Appendectomy (Laparoscopic / Open)',
      'Cholecystectomy (Laparoscopic / Open)',
      'Hernia Repair',
      'Colectomy',
      'Gastrectomy',
      'Splenectomy',
      'Haemorrhoidectomy (Open / Laser)',
      'Piles & Fistula treatment',
      'Varicose vein & circumcision surgery',
    ],
    conditions: [
      'Gallstones',
      'Hernia',
      'Appendicitis',
      'Piles, fistula & fissure',
      'Varicose veins',
    ],
    image: surgeryImg,
    leadDoctor: 'dr-sanket-narayan-singh',
    order: 6,
    metaDescription:
      'General & laparoscopic surgery in Dehradun - hernia, gallbladder, appendix, laser piles & fistula treatment at Medilife Superspeciality Hospital.',
  },
  {
    slug: 'plastic-surgery',
    name: 'Plastic Surgery',
    pageTitle: 'Plastic & Reconstructive Surgery',
    seoTitle: 'Plastic & Cosmetic Surgeon in Dehradun',
    shortName: 'Plastic Surgery',
    icon: 'plastic',
    color: '#c026d3',
    colorDark: '#a21caf',
    bg: '#fdf4ff',
    tagline: 'Aesthetic & Reconstructive Care',
    excerpt:
      'Aesthetic, reconstructive and trauma surgery - gynecomastia, liposuction, hair transplant, facial rejuvenation, burns and scar correction.',
    overview: [
      'Our plastic surgery department offers a full range of aesthetic, reconstructive and trauma procedures performed by an experienced plastic surgeon.',
      'Whether it is post-burn reconstruction, cosmetic enhancement or scar and contracture correction, treatments are planned with each patient around realistic, agreed goals.',
    ],
    highlights: [
      'Cosmetic & aesthetic surgery',
      'Post-burn reconstruction',
      'Hair transplant',
      'Liposuction & body contouring',
      'Scar & contracture correction',
    ],
    procedures: [
      'Gynecomastia surgery',
      'Liposuction & body contouring',
      'Hair transplant',
      'Facial rejuvenation',
      'Rhinoplasty',
      'Otoplasty',
      'Burn case management',
      'Scar removal',
      'Contracture release',
    ],
    conditions: [
      'Burns & burn deformities',
      'Post-trauma defects',
      'Cosmetic concerns',
      'Scars & contractures',
    ],
    image: plasticImg,
    leadDoctor: 'dr-shivam-dang',
    order: 7,
    metaDescription:
      'Plastic and reconstructive surgery in Dehradun: gynecomastia, liposuction, hair transplant, burns and scar correction at Medilife.',
  },
  {
    slug: 'pediatric-cardiology',
    name: 'Pediatric Cardiology',
    pageTitle: 'Pediatric Cardiology & Child Heart Care',
    seoTitle: 'Pediatric Cardiologist in Dehradun',
    shortName: 'Pediatric Cardiology',
    icon: 'heartPulse',
    color: '#be123c',
    colorDark: '#9f1239',
    bg: '#fff1f2',
    tagline: 'Child & Congenital Heart Care',
    excerpt:
      'Monthly pediatric cardiology OPD for congenital heart disease, irregular heartbeat, chest pain or fainting in children, with Dr. Gaurav Kumar of Yashoda Medicity.',
    overview: [
      'Medilife runs a pediatric cardiology OPD in Dehradun in association with Yashoda Medicity, Ghaziabad, so families in Uttarakhand can consult a children’s heart specialist without travelling to Delhi-NCR.',
      'Dr. Gaurav Kumar, Senior Consultant in Pediatric & Adult Congenital Cardiology, sees newborns, children, teenagers and expectant parents on the 1st and 3rd Thursday of every month (10:00 AM - 1:00 PM). Each consultation includes a detailed clinical evaluation, a review of previous reports, guidance on the tests that are needed, and clear recommendations for treatment and follow-up.',
    ],
    highlights: [
      'Congenital heart disease evaluation',
      'Irregular heartbeat (arrhythmia) in children',
      'Chest pain or fainting episodes in children',
      'Heart conditions affecting growth & development',
      'Second opinions & review of previous reports',
    ],
    procedures: [
      'Detailed pediatric cardiac consultation',
      'Review of previous echo, ECG & medical reports',
      'Guidance on required investigations',
      'Treatment & follow-up planning',
      'Counselling for expectant parents (fetal heart concerns)',
      'Advice on catheter-based procedures & heart surgery, when needed',
    ],
    proceduresIntro:
      'Our pediatric cardiology OPD offers specialist consultation, report review and treatment planning for children with heart conditions.',
    conditions: [
      'Congenital heart defects (ASD, VSD, PDA)',
      'Heart murmurs in children',
      'Arrhythmia (irregular heartbeat)',
      'Chest pain or fainting in children',
      'Pediatric pulmonary hypertension',
      'Cardiomyopathy in children',
      'Poor weight gain linked to heart problems',
    ],
    leadDoctor: 'dr-gaurav-kumar',
    order: 8,
    metaDescription:
      'Pediatric cardiologist in Dehradun: monthly OPD at Medilife with Dr. Gaurav Kumar (Yashoda Medicity) for congenital heart disease and child heart problems.',
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    pageTitle: 'Physiotherapy & Rehabilitation',
    seoTitle: 'Physiotherapy in Dehradun: Pain & Rehab',
    shortName: 'Physiotherapy',
    icon: 'physio',
    color: '#0d9488',
    colorDark: '#0f766e',
    bg: '#f0fdfa',
    tagline: 'Movement, Recovery & Rehabilitation',
    excerpt:
      'Physiotherapy and rehabilitation for sciatica, frozen shoulder, arthritis, post-surgery and post-fracture recovery, stroke and sports injuries.',
    overview: [
      'Our physiotherapy and rehabilitation department helps patients recover movement, strength and independence after injury, surgery or neurological conditions.',
      'Led by an experienced consultant physiotherapist, we combine manual therapy, exercise-based rehabilitation, chiropractic and modern techniques with a personalised plan for every patient.',
    ],
    highlights: [
      'Orthopaedic & post-surgery rehabilitation',
      'Neuro rehabilitation (stroke, Bell’s palsy)',
      'Sports injury management',
      'Pain relief & manual therapy',
      'Postural analysis & correction',
    ],
    procedures: [
      'Sciatica & back pain therapy',
      'Frozen shoulder rehabilitation',
      'Arthritis management',
      'Post-fracture & post-surgery rehabilitation',
      'Stroke & neuro rehabilitation',
      'Spinal cord injury rehabilitation',
      'Bell’s palsy therapy',
      'Vertigo (BPPV) management',
      'Strains & sprains care',
      'Chiropractic & dry needling',
      'Fitness therapy',
      'Postural analysis & correction',
    ],
    conditions: [
      'Sciatica & back pain',
      'Frozen shoulder & arthritis',
      'Post-surgery & post-fracture recovery',
      'Stroke & spinal cord injury',
      'Vertigo & sports injuries',
    ],
    image: physiotherapyImg,
    leadDoctor: 'mohd-uwais',
    order: 9,
    metaDescription:
      'Physiotherapy in Dehradun: sciatica, frozen shoulder, arthritis, post-surgery and stroke rehabilitation and sports injuries at Medilife.',
  },
  {
    slug: 'audiology',
    name: 'Audiology',
    pageTitle: 'Audiology & Hearing Care',
    seoTitle: 'Hearing Test & Hearing Aids in Dehradun',
    shortName: 'Audiology',
    icon: 'hearing',
    color: '#0369a1',
    colorDark: '#075985',
    bg: '#eff6ff',
    tagline: 'Hearing Assessment & Hearing Aids',
    excerpt:
      'Audiometry, hearing assessments and hearing-aid fitting for all ages, with tinnitus and balance support.',
    overview: [
      'Our audiology department provides complete hearing care, from diagnostic hearing tests to hearing-aid selection and fitting for children and adults.',
      'Led by our audiologist, we offer accurate audiometry and personalised hearing solutions, working closely with our ENT team for conditions that need medical or surgical care.',
    ],
    highlights: [
      'Diagnostic audiometry',
      'Hearing-aid trial & fitting',
      'Paediatric hearing assessment',
      'Tinnitus evaluation',
      'ENT-linked hearing care',
    ],
    procedures: [
      'Pure tone audiometry',
      'Impedance audiometry / tympanometry',
      'Speech audiometry',
      'Hearing-aid selection & fitting',
      'Tinnitus assessment',
      'Paediatric hearing screening',
    ],
    conditions: [
      'Hearing loss',
      'Tinnitus',
      'Age-related & noise-induced hearing loss',
      'Paediatric hearing concerns',
    ],
    image: audiologyImg,
    leadDoctor: 'padma-rawat',
    order: 10,
    metaDescription:
      'Audiology & hearing care in Dehradun - audiometry, hearing tests and hearing-aid fitting for all ages at Medilife Superspeciality Hospital.',
  },
];

export const getDepartment = (slug: string) =>
  departments.find((d) => d.slug === slug);

export const featuredDepartment = departments.find((d) => d.featured);

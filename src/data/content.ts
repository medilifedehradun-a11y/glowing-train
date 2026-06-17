/** Cross-page content: stats, accreditations, facilities, why-choose, FAQs, testimonials. */

export interface Stat {
  /** Final displayed value (also the static fallback). */
  value: string;
  label: string;
  /** When set, the number counts up from 0 to `to` on scroll-into-view. */
  to?: number;
  prefix?: string;
  suffix?: string;
}

/** Headline stats for the homepage strip (faithful to the source site). */
export const stats: Stat[] = [
  { value: '1,00,000+', to: 100000, suffix: '+', label: 'Patients treated' },
  { value: '30+', to: 30, suffix: '+', label: 'Years of doctor experience' },
  { value: '7', to: 7, label: 'Superspeciality departments' },
  { value: '24×7', label: 'Emergency & ambulance' },
];

export const accreditations: { label: string; detail: string; icon: string }[] = [
  { label: 'NABH Accredited', detail: 'National quality-accredited hospital', icon: 'shield' },
  { label: 'NABL Lab', detail: 'Accredited pathology & diagnostics', icon: 'microscope' },
  { label: 'Ayushman Bharat', detail: 'PM-JAY beneficiaries welcome', icon: 'heartPulse' },
  { label: 'ABHA / ABDM', detail: 'Digital health records enabled', icon: 'scan' },
  { label: 'All Insurance & TPA', detail: 'Cashless treatment available', icon: 'checkCircle' },
];

export interface Facility {
  name: string;
  description: string;
  icon: string;
}

/** "Facilities That Care" - 24/7 support services. */
export const facilities: Facility[] = [
  {
    name: 'Emergency',
    description:
      'Round-the-clock emergency services with rapid response teams, advanced trauma care and immediate medical attention when every second counts.',
    icon: 'activity',
  },
  {
    name: 'ICU',
    description:
      'Advanced critical care with 24/7 monitoring, state-of-the-art life support systems and expert intensivists for critically ill patients.',
    icon: 'heartPulse',
  },
  {
    name: 'Ambulance',
    description:
      'Fully-equipped ambulance services with trained paramedics, life-saving equipment and swift patient transport for emergencies.',
    icon: 'ambulance',
  },
  {
    name: 'Pathology',
    description:
      'NABL-accredited diagnostic laboratory with advanced testing, accurate results and quick turnaround for comprehensive health screening.',
    icon: 'flask',
  },
  {
    name: 'Pharmacy',
    description:
      'Fully-stocked 24×7 in-house pharmacy providing genuine medications, surgical supplies and healthcare products for your convenience.',
    icon: 'pill',
  },
  {
    name: 'Insurance & TPA',
    description:
      'Hassle-free cashless treatment with all major insurance providers and TPA partners - our team handles the paperwork so you can focus on recovery.',
    icon: 'shield',
  },
];

export interface WhyChoose {
  title: string;
  description: string;
  icon: string;
}

export const whyChoose: WhyChoose[] = [
  {
    title: '24/7 Emergency Hospital',
    description:
      'Immediate medical care available round-the-clock for trauma, accidents and critical conditions.',
    icon: 'ambulance',
  },
  {
    title: 'Experienced Doctors & Surgeons',
    description:
      'A team of highly qualified specialists trained at top institutions, ensuring accurate diagnosis and effective treatment.',
    icon: 'award',
  },
  {
    title: 'Latest Medical Technology',
    description:
      'Advanced diagnostic tools and minimally invasive procedures for faster recovery and better outcomes.',
    icon: 'scan',
  },
  {
    title: 'Patient-Centric Care',
    description:
      'Compassionate staff focusing on comfort, dignity and personalized treatment plans for every patient.',
    icon: 'heartPulse',
  },
  {
    title: 'Affordable & Accessible',
    description:
      'NABH accreditation, Ayushman Bharat benefits and transparent pricing make quality healthcare available for all.',
    icon: 'checkCircle',
  },
  {
    title: 'Multi-Superspeciality Under One Roof',
    description:
      'Urology, ENT, oncology, orthopedics, surgery and medicine - coordinated care without running between hospitals.',
    icon: 'building',
  },
];

export interface Testimonial {
  text: string;
  author: string;
  context?: string;
}

/** Only genuine testimonials captured from the live site are included. */
export const testimonials: Testimonial[] = [
  {
    text:
      'Our baby was having an issue in the ear, so we consulted Dr. Rikta Roy and she is very kind and good as a doctor. She treats us very nicely and we suggest all patients to consult her.',
    author: 'Mannu Rawat',
    context: 'ENT patient',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What specialities does Medilife Superspeciality Hospital offer?',
    answer:
      'Medilife offers comprehensive healthcare services including Urology, ENT, Oncology (Onco-Surgery), General Medicine, General Surgery, Orthopedics, Plastic Surgery, Audiometry, Pharmacy and Pathology.',
  },
  {
    question: 'Where is Medilife Superspeciality Hospital located?',
    answer:
      'Medilife is located at Jai Krishan Tower, Haridwar Bypass Road, near Kargi Chowk, Dehradun, Uttarakhand.',
  },
  {
    question: 'How can I get in touch with Medilife Superspeciality Hospital?',
    answer:
      'You can email us at medilife.dehradun@gmail.com or call us on +91 78178 63358. We are available 24/7 for emergencies.',
  },
  {
    question: 'What is your approach towards patient care?',
    answer:
      'Medilife focuses on employing the latest medical advancements with a compassionate, patient-centric approach - guided by our motto, "Care, Cure, Comfort".',
  },
  {
    question: 'What urological conditions do you treat?',
    answer:
      'We treat conditions such as kidney stones, urinary incontinence, enlarged prostate, urethral stricture and a wide range of other urologic problems.',
  },
  {
    question: 'What ENT services do you offer?',
    answer:
      'We manage common problems like ear infections and sinusitis, and perform complex procedures for conditions such as hearing loss, thyroid disorders and head & neck cancer.',
  },
  {
    question: 'How experienced is the medical team?',
    answer:
      'Our team of doctors is a dedicated, expert ensemble of compassionate healers, several with 30+ years of experience and training at leading institutions including AIIMS.',
  },
  {
    question: 'Do you accept insurance and Ayushman Bharat?',
    answer:
      'Yes. We are NABH-accredited and accept all major insurance providers, TPAs, ABHA and the Ayushman Bharat (PM-JAY) scheme for cashless treatment.',
  },
  {
    question: 'Is Medilife well-regarded by patients?',
    answer:
      'Yes - we have received consistently positive feedback from patients for our treatment, care and compassionate service.',
  },
];

/** Mission & vision content (About page). */
export const mission = {
  vision:
    'To be the most trusted and preferred healthcare destination in North India, recognized for clinical excellence, compassionate care and innovative medical solutions that transform lives.',
  missionIntro: 'To deliver world-class, patient-centric healthcare through:',
  missionPoints: [
    'Advanced medical technology and evidence-based treatment protocols',
    'A team of highly skilled specialists committed to clinical excellence',
    'Affordable and accessible healthcare services for all segments of society',
    'Continuous medical education, research and innovation',
    'A culture of compassion, integrity and respect in every interaction',
    'Comprehensive care that addresses the physical, emotional and psychological needs of our patients',
  ],
  motto: 'Care · Cure · Comfort',
};

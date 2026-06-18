/**
 * Health blog content. Faithful to the original Medilife blog.
 * The featured image is imported as an Astro asset so it can be optimized
 * with <Image> on both the listing and the post page.
 */
import type { ImageMetadata } from 'astro';
import featuredImage from '../assets/hospital/exterior-1.jpg';

/** A single rendered section within a blog post body. */
export interface BlogSection {
  heading: string;
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string, e.g. '2023-06-24'. */
  date: string;
  readingTime: string;
  category: string;
  author: string;
  image: ImageMetadata;
  imageAlt: string;
  /** The article body, structured as a list of headed sections. */
  body: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: 'introducing-medilife-superspeciality-hospital-your-partner-in-health-and-wellness',
    title:
      'Introducing Medilife Superspeciality Hospital: Your Partner in Health and Wellness',
    excerpt:
      "Discover Medilife Superspeciality Hospital's commitment to health, wellness, and compassionate care. Explore our diverse services and join us on a journey towards better health.",
    date: '2023-06-24',
    readingTime: '2 min read',
    category: 'Updates',
    author: 'Medilife Superspeciality Hospital',
    image: featuredImage,
    imageAlt:
      'Exterior view of Medilife Superspeciality Hospital building in Dehradun',
    body: [
      {
        heading: 'A Warm Introduction to Medilife',
        text: "Nestled in the heart of the city, Medilife Superspeciality Hospital is more than just a healthcare provider. It's a sanctuary where science and compassion fuse, a place where patients are embraced as family. With a team of dedicated doctors and medical professionals, we're committed to delivering exceptional healthcare services.",
      },
      {
        heading: 'A Glimpse of Our Services',
        text: "At Medilife, we're proud to offer an array of specialised services spanning various medical disciplines. From ENT and Onco-Surgery to Orthopaedics, General Surgery, Physiotherapy, Audiology, Pathology, and Pharmacy, we have all your healthcare needs covered. We're also a leading centre in ENT and Urology, offering a host of treatments such as Thyroid Surgery, FESS, Mastoid Surgery, Parotid Surgery, Head & Neck Onco-Surgery, Urethroplasty, PCNL, RIRS, URS, TURP, TURBT, and many more.",
      },
      {
        heading: 'Care, Cure, Comfort: Our Guiding Principles',
        text: 'Our motto, "Care, Cure, Comfort", mirrors our commitment to holistic patient care. We strive not just to treat diseases but to promote overall wellness and prevent illnesses where possible. More than that, we believe in offering compassionate care, understanding that empathy and kindness can make a significant difference in a patient\'s healthcare journey.',
      },
      {
        heading: 'Making Your Healthcare Journey Comfortable',
        text: "We understand that hospital visits can sometimes be stressful. That's why we've endeavoured to create a comforting environment for our patients. From the moment you step through our doors, our friendly team is ready to assist and guide you. We're here to make your healthcare journey as seamless and comfortable as possible.",
      },
      {
        heading: 'Knowledge is Power: Our Commitment to Education',
        text: "We firmly believe that healthcare extends beyond treating illnesses: it's also about prevention and education. Through this blog, we aim to share valuable health tips, the latest medical advancements, and insights from our experts to help you lead a healthier life.",
      },
      {
        heading: 'Embarking on this Journey Together',
        text: "We're thrilled about the journey ahead and we're committed to being your steadfast health ally. Our promise is to always deliver the high-quality, compassionate care you deserve. Stay tuned to our blog for more health insights and updates. We're grateful that you've chosen to trust us with your health. Here's to embarking on a healthier journey together: welcome to the Medilife family!",
      },
    ],
  },
];

/** Look up a single post by slug. */
export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

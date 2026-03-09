import {
  BADMINTON_PAGE_IMAGE_URL,
  CODING_PAGE_IMAGE_URL,
  MORE_PAGE_IMAGE_URL,
  PROFILE_IMAGE_URL,
} from "./profile";

// Bio and collage for the homepage. Replace collage URLs with your Supabase (or other) image URLs.
export const homeBio = `Full Stack developer and entrepreneurship enthusiast. I build things for the web and keep fit in the gym.`;

// Homepage collage. Upload images to Supabase (any filenames), then paste public URLs here. Need 6–9 for full grid.
export const homeCollageImages: string[] = [
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_9493.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_9489.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_9231.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_8937.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_8248.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_1252.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_8550.jpg",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_9392.JPG",
  "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/IMG_9206.jpg",
];

export type SectionCardImagePosition = "top" | "center" | "top-offset";

export interface HomeSectionCard {
  href: string;
  title: string;
  shortBio: string;
  imageUrl: string;
  /** How the image is positioned in the card: top, center, or slightly below top (e.g. for jersey/head). */
  imagePosition?: SectionCardImagePosition;
}

export const homeSectionCards: HomeSectionCard[] = [
  {
    href: "/coding",
    title: "Full Stack developer",
    shortBio: "8x Hackathon Winner(PennApps, Hack@Brown and more). Ex-Software Engineer @ Simcare AI. Projects and demos — web apps, APIs, and things I ship.",
    imageUrl: CODING_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL,
    imagePosition: "top",
  },
  {
    href: "/badminton",
    title: "Badminton",
    shortBio: "30x National Champion, 10x International Champion, Former Rank 1 in Canada. Not active in badminton anymore. Clips and matches from the court.",
    imageUrl: BADMINTON_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL,
    imagePosition: "top",
  },
  {
    href: "/more",
    title: "More about me",
    shortBio: "Photo album and random thoughts. Get to know me a bit.",
    imageUrl: MORE_PAGE_IMAGE_URL ?? PROFILE_IMAGE_URL,
    imagePosition: "center",
  },
];

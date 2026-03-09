export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Supabase Storage public URL — upload any image, copy URL from bucket
  demoVideoUrl: string; // optional: use "" for no video
  projectUrl?: string; // optional: omit or "" to hide "View project" link
}

export const projects: Project[] = [
  {
    id: "1",
    title: "FlowBoard",
    description:
      "The ergonomic way to storyboard. AI-powered video storyboarding that turns sketches and annotations into context-aware video clips—draw on a canvas, add prompts, generate frame by frame. Built with Tldraw, Google Vertex AI (Veo 3.1 & Gemini 2.5), and Supabase. GitHub: https://github.com/austinjiann/FlowBoard",
    imageUrl: "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/CleanShot%202026-03-08%20at%2020.24.13@2x.png",
    demoVideoUrl: "https://www.youtube.com/embed/j0cKHTY5-dc",
    projectUrl: "https://flowboard.tech",
  },
  // Image: replace with Supabase URL (e.g. terminal screenshot or architecture diagram). Video: leave "" or add YouTube embed later.
  {
    id: "2",
    title: "V2Ray + OpenVPN on Oracle Cloud",
    description:
      "Personal VPN stack on Oracle Cloud free tier: OpenVPN for the tunnel and V2Ray in front to evade DPI (deep packet inspection) and port blocking. Traffic is obfuscated so it looks like normal HTTPS. No public repo—private setup.",
    imageUrl: "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/ChatGPT%20Image%20Mar%208,%202026,%2008_35_22%20PM.png",
    demoVideoUrl: "",
  },
  {
    id: "3",
    title: "Gmail Campaign Sender",
    description:
      "Web app (or Chrome extension) + Node backend to send templated emails from a CSV—placeholders like {{first_name}}, optional scheduling, one attachment per campaign (e.g. resume), and a dashboard of sent campaigns. Gmail OAuth, Supabase for DB and file storage. GitHub: https://github.com/ferdinandzh4ng/email-sender",
    imageUrl: "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/CleanShot%202026-03-08%20at%2021.03.48@2x.png",
    demoVideoUrl: "https://www.youtube.com/embed/AhbShhiJQxg",
    projectUrl: "https://email-sender-beta-sand.vercel.app/",
  },
  {
    id: "4",
    title: "Ferdinand",
    description:
      "AI-powered voice agent that gives full desktop control through natural conversation—for accessibility when using the computer is difficult. You speak your intent (e.g. \"Open Spotify and play my liked songs\"); Ferdinand uses speech-to-text, a Flask orchestrator, GPT-4o + Claude Sonnet 4 for vision and planning, and PyAutoGUI to execute. Multi-step tasks, no rigid commands. Hack The Ridge 2025 — 1st Place. Devpost: https://devpost.com/software/ferdinand — GitHub: https://github.com/ferdinandzh4ng/HTR",
    imageUrl: "https://gxfbddktgpshfwnuzyfd.supabase.co/storage/v1/object/public/images/original.png",
    demoVideoUrl: "",
    projectUrl: "https://devpost.com/software/ferdinand",
  },
];

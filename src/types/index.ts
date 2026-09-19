export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  summary: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Weddings" | "Receptions" | "Betrothals" | "Floral & Stage" | "Corporate";
  client: string;
  location: string;
  date: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  event: string;
  location: string;
  rating: number;
  content: string;
  avatar?: string;
  date: string;
}

export interface GalleryMediaItem {
  id: string;
  title: string;
  category: "all" | "photos" | "videos" | "stages" | "floral";
  type: "image" | "video";
  src: string;
  poster?: string;
  caption: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  eventDate?: string;
  guestCount?: string;
  estimatedBudget?: string;
  message: string;
  honeypot?: string;
}

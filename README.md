# Rhythm Weddings and Events — Luxury Business Website

A luxury, production-ready website for **Rhythm Weddings and Events** (Pala, Kottayam, Kerala). Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## 🌟 Key Features

- **Centralized Business Data (`src/config/site.ts`)**: All texts, services, portfolio case studies, statistics, pricing benchmarks, and FAQs live in one single typed configuration file.
- **Glassmorphism & Gold Luxury Design System**: Tailored dark luxury palette (`#0B1220`, `#C9A24D`, `#E8C97A`), frosted-glass cards, and light mode support.
- **Client Media Integration**: High-definition stage photography and live video reels (`Video-2128.mp4`, `Video-52228.mp4`, `Video-74065.mp4`) with custom player controls.
- **Interactive Before/After Transformation Slider**: Visual comparison of raw venue spaces versus completed stage architecture.
- **Interactive Event Budget & Quote Calculator**: Real-time pricing estimation tailored to Kerala venues with instant WhatsApp and proposal submission.
- **All 8 Comprehensive Services**: Complete with bento grid overview, pop-up modal specs, and dedicated SEO routes (`/services/[slug]`).
- **Validated Contact Form & API**: Zod + React Hook Form validation with anti-spam honeypot and celebration feedback.
- **SEO & Performance Engineered**: JSON-LD `LocalBusiness` and `FAQPage` schemas, dynamic XML sitemap (`/sitemap.xml`), and OpenGraph metadata.

---

## 🛠️ Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout with fonts, metadata & JSON-LD
│   ├── page.tsx                    # Main luxury single-page application
│   ├── services/[slug]/page.tsx    # Dedicated SEO-rich service detail routes
│   ├── portfolio/[slug]/page.tsx   # Detailed event case study pages
│   ├── api/contact/route.ts        # API handler for contact & quote requests
│   ├── sitemap.ts                  # Dynamic XML sitemap generator
│   ├── robots.ts                   # Search engine crawler instructions
│   └── not-found.tsx               # Luxury 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky frosted-glass navbar with active spy
│   │   ├── Footer.tsx              # Luxury footer with quick links and contacts
│   │   ├── FloatingActions.tsx     # Floating WhatsApp, Call & Back-to-Top
│   │   └── ThemeToggle.tsx         # Dark / Light mode switcher
│   ├── sections/
│   │   ├── Hero.tsx                # Cinematic video/image hero with stats
│   │   ├── About.tsx               # Brand story, Mission/Vision, 8-year timeline
│   │   ├── Services.tsx            # Bento/interactive grid with detail modals
│   │   ├── WhyChooseUs.tsx         # Key differentiators & comparison table
│   │   ├── Portfolio.tsx           # Category-filtered showcase & before/after slider
│   │   ├── VideoReel.tsx           # Cinematic highlight reel player
│   │   ├── PartnersMarquee.tsx     # Infinite smooth marquee of luxury venues
│   │   ├── Gallery.tsx             # Interactive photo/video masonry + Lightbox
│   │   ├── QuoteCalculator.tsx     # Interactive event budget & requirement estimator
│   │   └── Contact.tsx             # Validated contact form, Google Map & status
│   └── ui/
│       ├── GlassCard.tsx           # Frosted glass card component
│       ├── Button.tsx              # Shimmering gold buttons
│       ├── SectionHeading.tsx      # Gold gradient headers with serif typography
│       ├── Lightbox.tsx            # Fullscreen photo and video viewer
│       ├── BeforeAfter.tsx         # Interactive before/after stage comparison slider
│       ├── Counter.tsx             # Animated number counters
│       └── ScrollReveal.tsx        # Framer Motion scroll animations
├── config/
│   └── site.ts                     # ALL business data lives here
├── lib/
│   ├── schema.ts                   # JSON-LD Schema generators
│   ├── validations.ts              # Zod form validation schemas
│   └── utils.ts                    # Class merging and formatting helpers
└── styles/
    └── globals.css                 # Custom glassmorphism, gold gradients & scrollbars
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Customization Guide

### 1. Changing Business Info & Copy
Edit `src/config/site.ts`:
- Business name, phone numbers, WhatsApp, email, address, and Google Maps embed URL
- Add/modify services, features, FAQs, and pricing
- Add/modify portfolio case studies and testimonials

### 2. Replacing Images & Videos
Place your new images and video files into `public/assets/` and update references in `src/config/site.ts`.

### 3. Theme & Brand Colors
Brand colors are configured in `tailwind.config.ts` and `src/styles/globals.css`. You can change `--accent-gold` (`#C9A24D`) or background colors in `src/styles/globals.css`.

---

## ☁️ Deployment (e.g. Vercel)

1. Push your repository to GitHub / GitLab.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Next.js**.
4. Click **Deploy**.

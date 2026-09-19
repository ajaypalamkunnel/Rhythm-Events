# Reusable Prompt: Premium Business Website (Next.js + TypeScript)

> **How to use:** Fill in the `[PLACEHOLDERS]` in the **Business Configuration** block below, then paste the whole document (from "ROLE" onward) into Claude Code, Cursor, or any AI coding assistant. Reuse it for every new client by only changing the configuration block.

---

## 1. BUSINESS CONFIGURATION (edit this for every project)

```yaml
business_name: "Rhythm Weddings and Events"
tagline: "Creating Moments, Crafting Memories"
category: "Wedding and Event Planner and Decorations"

description: "Rhythm Weddings and Events is a professional wedding and event planning and decoration company based in Pala, Kottayam. We specialize in creating beautifully designed weddings, receptions, engagements, birthday celebrations, corporate events, and other special occasions. From concept and decoration to complete event coordination, we help turn your vision into a memorable experience."

target_audience: "Couples, families, corporate clients, and individuals looking for professional wedding and event planning and decoration services"

unique_value_proposition: "Creative event concepts, elegant decorations, personalized planning, and reliable end-to-end event coordination tailored to every client's vision and budget"

years_of_experience: "8+"

location:
  address: "Rhythm Weddings and Events"
  city: "Pala, Kottayam district"
  state_country: "Kerala, India"
  google_maps_embed_url: "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"

contact:
  phone: "+91 9539835357, +91 9539835357, +91 9747365879"
  whatsapp: "+91 9747365879"
  email: "info@rhythmweddingsandevents.com"
  business_hours: "Mon–Sat: 9:00 AM – 6:00 PM"

social_links:
  facebook: ""
  instagram: "https://www.instagram.com/rhythmweddings"

theme: "dark"

brand_colors:
  primary: "#C9A24D"
  secondary: "#0B1220"
  accent: "#E8C97A"

primary_cta: "Request a Quote"
secondary_cta: "View Our Work"

services:
  - name: "Wedding Planning"
    summary: "Complete wedding planning and coordination for a smooth and memorable celebration."
    features:
      - "Wedding concept and planning"
      - "Vendor coordination"
      - "Event-day management"
    

  - name: "Wedding Decorations"
    summary: "Elegant and customized decorations designed around your wedding theme."
    features:
      - "Stage and backdrop decoration"
      - "Floral and venue decorations"
      - "Theme-based styling"
    

  - name: "Reception Decoration"
    summary: "Beautiful reception setups that create an elegant atmosphere for your special day."
    features:
      - "Reception stage design"
      - "Lighting and floral arrangements"
      - "Guest area decoration"
   
  - name: "Engagement & Betrothal Events"
    summary: "Stylish and personalized decoration and coordination for engagement celebrations."
    features:
      - "Customized stage decoration"
      - "Floral arrangements"
      - "Event coordination"
    
  - name: "Birthday & Private Events"
    summary: "Creative decorations and planning for birthdays and personal celebrations."
    features:
      - "Theme decorations"
      - "Balloon and floral styling"
      - "Customized setups"
   

  - name: "Corporate Events"
    summary: "Professional event planning and decoration for corporate functions and gatherings."
    features:
      - "Corporate venue setup"
      - "Stage and branding decoration"
      - "Event coordination"
    pricing: "Request Quote"

  - name: "Floral & Stage Decoration"
    summary: "Customized floral arrangements and stage designs for weddings and special occasions."
    features:
      - "Fresh and artificial floral designs"
      - "Customized stage backdrops"
      - "Decorative lighting"
   

  - name: "Complete Event Management"
    summary: "End-to-end event management from planning and decoration to event-day coordination."
    features:
      - "Concept to execution"
      - "Vendor and logistics management"
      - "Complete event-day coordination"
   

domain: "https://www.rhythmweddingsandevents.com"

seo_keywords:
  - "wedding planners in Pala"
  - "wedding decorators in Kottayam"
  - "wedding event management Kerala"
  - "wedding decoration Pala"
  - "event planners Kottayam"
  - "wedding stage decoration Kerala"
  - "best wedding decorators in Kottayam"
  - "event management services Pala"
```

---

## 2. ROLE

You are a **senior full-stack engineer and premium UI/UX designer**. You build luxury, award-quality business websites that feel modern, elegant, and timeless, never like a generic template or a traditional brochure site.

## 3. OBJECTIVE

Build a **complete, production-ready, multi-section business website** for the business defined in the configuration block above. The website must feel **premium, classic, and professional**, with a refined glass-like aesthetic, smooth animations, and flawless responsiveness, especially on mobile.

---

## 4. TECHNOLOGY STACK (mandatory)

| Area | Requirement |
|---|---|
| Framework | **Next.js (latest stable, App Router)** |
| Language | **TypeScript** (strict mode, no `any`) |
| Styling | **Tailwind CSS** + CSS variables for theming |
| Animation | **Framer Motion** for section/element animations |
| Smooth scroll | **Lenis** (or equivalent) for buttery smooth scrolling |
| Icons | **lucide-react** |
| Fonts | `next/font` (a classic serif for headings + a clean sans-serif for body, e.g. Playfair Display / Cormorant Garamond + Inter / Manrope) |
| Images | `next/image` with optimization, lazy loading, blur placeholders |
| Forms | **react-hook-form + zod** validation, API route or server action for submission |
| Linting | ESLint + Prettier configured |

Keep the codebase **clean, modular, and reusable**: content should come from a single typed config/data file (e.g. `src/config/site.ts`) so the business details can be swapped without touching components.

---

## 5. DESIGN LANGUAGE

### 5.1 Overall Feel
- **Premium classic + modern luxury.** Elegant, confident, uncluttered.
- Must **not** look like a traditional or template website. Avoid boxy, flat, generic layouts.
- Generous white space, refined typography, layered depth, and subtle motion.

### 5.2 Glassmorphism (classic transparent glass)
- Use frosted-glass cards: `backdrop-blur`, semi-transparent backgrounds, thin translucent borders (`1px` white/10–20%), soft inner highlights, and layered shadows.
- Apply to navbar, cards, form panels, modals, testimonial cards, and overlays.
- Keep text contrast accessible (WCAG AA) over glass surfaces.

### 5.3 Color & Gradients
- Build a **refined gradient palette** from the brand colors (e.g. deep tone → rich accent → soft highlight).
- Use gradients for: hero overlays, buttons, headings accents (gradient text), borders, section dividers, and subtle background glows/orbs.
- Gradients should feel **classic and rich**, not neon or loud.

### 5.4 Theme (dark / light)
- Implement the theme specified in `theme` as the default.
- Use CSS variables / Tailwind tokens so switching themes is trivial.
- Optionally include a **theme toggle** (persisted, no flash on load).
- Both themes must look premium: dark = deep, rich, glowing accents; light = warm, airy, soft shadows.

### 5.5 Typography
- Classic serif for headings (elegant, large, tight tracking), clean sans for body.
- Fluid type scale using `clamp()` so text scales beautifully from small mobile to large desktop.

### 5.6 Motion & Animation (classic and smooth)
- **Smooth scrolling** across the site (Lenis).
- **Scroll-reveal** animations: fade + slight upward translate, with staggered children.
- **Parallax** on hero background and select images.
- Elegant **hover effects**: gentle lift, glow, image zoom, animated underline, button shine sweep.
- Animated counters for statistics, animated section headings, animated progress/line drawing where suitable.
- Page-load intro (subtle, fast, not blocking).
- Use easing like `easeOut` / cubic-bezier for a **classic, unhurried feel**. Avoid jarring or bouncy effects.
- **Respect `prefers-reduced-motion`**: disable/reduce animations for those users.

---

## 6. WEBSITE STRUCTURE & SECTIONS

Build a **single-page experience with smooth anchor navigation** (each section also SEO-friendly). Where valuable, add dedicated routes (e.g. `/services/[slug]`, `/portfolio/[slug]`) for detail pages.

### 6.1 Navigation (global)
- Sticky, transparent **glass navbar** that gains blur/background on scroll.
- Logo (text or image), section links, and a prominent CTA button.
- **Mobile:** animated full-screen or slide-in glass menu, large tap targets.
- Active-section highlighting while scrolling; scroll progress indicator.

### 6.2 Home / Hero
- Full-viewport hero with a **high-quality background image** (or video), gradient overlay, and subtle parallax.
- A **classic, welcoming headline** (e.g. "Welcome to [Business Name]" or a strong value statement), tagline, and short business introduction.
- Main value proposition.
- **Key services/products** highlight strip or floating glass cards.
- **CTA buttons:** primary (`primary_cta`) and secondary (`secondary_cta`).
- Animated scroll indicator, trust badges or quick stats (years of experience, projects, clients).

### 6.3 About Us
- Company introduction with editorial layout (image + text, overlapping elements).
- **Mission & Vision** in glass cards.
- **Company history** as an animated vertical/horizontal timeline.
- **Team / Company values** with cards (photos, roles, short bios or value icons).

### 6.4 Services / Products
- Grid or bento layout of services/products with icons/images.
- **Individual service details** (modal or dedicated page) with description, **features & benefits**, process steps, and FAQs.
- **Pricing or "Request a Quote"** button on each card (opens a quote form).

### 6.5 Why Choose Us
- Highlights: **Experience, Quality, Expertise, Customer Support, Certifications, Key Differentiators**.
- Icon cards with animated counters, certification badges, and a comparison or differentiator strip.

### 6.6 Portfolio / Projects
- Filterable project grid (by category) with smooth layout animation.
- **Case studies** with challenge → solution → result structure.
- **Before/After** image comparison slider.
- **Project details** page/modal (client, location, date, scope, gallery).

### 6.7 Testimonials / Reviews
- Elegant carousel/slider of glass testimonial cards.
- **Ratings** (star display), customer name, role/company, photo, and their experience.
- Aggregate rating summary (e.g. 4.9 / 5 from N reviews).

### 6.8 Clients / Partners
- Infinite, smooth **logo marquee** (pause on hover), grayscale → color on hover.
- Sections for client logos, partner organizations, and brands served.

### 6.9 Gallery
- Masonry/grid gallery of **photos**, **videos** (with poster + lightbox player), **workplace/project images**, and **events**.
- Category tabs, **lightbox** with keyboard/swipe navigation, lazy loading.

### 6.10 Contact Us
- **Contact form** (name, email, phone, service interested in, message) with validation, loading, success, and error states, plus spam protection (honeypot / rate limit).
- **Phone** (click-to-call), **WhatsApp** (click-to-chat), **Email** (mailto), **Address**.
- **Google Maps** embed (lazy loaded, styled to match theme if possible).
- **Business hours** with an "Open now / Closed" indicator.
- Social links.

### 6.11 Footer
- Brand, quick links, services, contact info, social icons, newsletter (optional), copyright, and privacy/terms links.
- A floating **WhatsApp / call button** and a **back-to-top** button.

---

## 7. RESPONSIVENESS (top priority: mobile-first)

- Design **mobile-first**, then scale up to tablet, laptop, desktop, and ultra-wide.
- Test breakpoints: **320px, 375px, 425px, 640px, 768px, 1024px, 1280px, 1536px+**.
- No horizontal scrolling at any width. Use fluid spacing, `clamp()` typography, and flexible grids.
- **Touch-friendly:** minimum 44×44px tap targets, comfortable spacing, swipe support in sliders/galleries.
- Use `svh/dvh` units to avoid mobile browser toolbar issues on the hero.
- Reduce heavy effects (large blurs, parallax) on low-power/mobile devices to keep performance smooth.
- Images: responsive `sizes`, modern formats (AVIF/WebP).

---

## 8. SEO REQUIREMENTS

- Use Next.js **Metadata API**: unique `title`, `description`, canonical URL, and keywords (from `seo_keywords`) per page.
- **Open Graph** and **Twitter Card** tags with a generated/social share image.
- **Structured data (JSON-LD):** `LocalBusiness` / `Organization`, `WebSite`, `Service`, `FAQPage`, `Review`/`AggregateRating`, `BreadcrumbList` as applicable.
- Generate `sitemap.xml` and `robots.txt` (`app/sitemap.ts`, `app/robots.ts`).
- **Semantic HTML:** one `<h1>` per page, logical heading hierarchy, `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
- Descriptive **alt text** on all images; descriptive link text.
- Clean, keyword-relevant URLs; favicon set and web manifest.
- **Core Web Vitals** targets: LCP < 2.5s, CLS < 0.1, INP < 200ms. Lighthouse **90+** for Performance, Accessibility, Best Practices, and SEO.
- Use server components by default; keep client JS minimal; dynamically import heavy components (maps, lightbox, sliders).

---

## 9. ACCESSIBILITY & UX

- WCAG 2.1 AA: color contrast, focus states, keyboard navigation, ARIA labels, skip-to-content link.
- Clear, consistent visual hierarchy and intuitive navigation.
- User-friendly forms with inline errors and helpful placeholders.
- Custom 404 page, loading states, and skeletons.
- Subtle custom scrollbar and text-selection styling to match the brand.

---

## 10. PLACEHOLDER CONTENT & ASSETS

- Populate all sections with **realistic, well-written copy** based on the business configuration (no "lorem ipsum").
- Use high-quality royalty-free placeholder images (e.g. Unsplash URLs) clearly organized so they can be replaced easily; keep them in `/public` or the config file.
- Generate SVG icons/logo placeholders where needed.

---

## 11. PROJECT STRUCTURE (suggested)

```
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ services/[slug]/page.tsx
│  ├─ portfolio/[slug]/page.tsx
│  ├─ api/contact/route.ts
│  ├─ sitemap.ts
│  ├─ robots.ts
│  └─ not-found.tsx
├─ components/
│  ├─ layout/ (Navbar, Footer, FloatingActions, ThemeToggle)
│  ├─ sections/ (Hero, About, Services, WhyChooseUs, Portfolio,
│  │            Testimonials, Clients, Gallery, Contact)
│  └─ ui/ (GlassCard, Button, SectionHeading, Marquee, Lightbox,
│          BeforeAfter, Counter, Reveal)
├─ config/site.ts          # ALL business data lives here
├─ lib/ (utils, seo, schema, validations)
├─ hooks/
├─ styles/globals.css      # theme tokens, gradients, glass utilities
└─ types/
```

---

## 12. DELIVERABLES & WORKING INSTRUCTIONS

1. Scaffold the Next.js + TypeScript project and install all dependencies.
2. Create the **theme system, design tokens, gradient utilities, and glass utilities** first.
3. Build the reusable UI components, then each section in the order listed above.
4. Wire up the contact form (validation + API route with email service placeholder, e.g. Resend/Nodemailer, via environment variables).
5. Add SEO (metadata, JSON-LD, sitemap, robots) and performance optimizations.
6. Verify responsiveness across all breakpoints and run type-check, lint, and build (`npm run build`) with **zero errors**.
7. Provide a short **README** explaining: how to change business details (`config/site.ts`), swap theme, replace images, set environment variables, and deploy (e.g. Vercel).

**Quality bar:** the final result should look like a **custom-designed luxury agency website**, polished, cohesive, fast, accessible, and impressive on every device.

---

## 13. OPTIONAL ADD-ONS (include if requested)

- Multi-language support (i18n)
- Blog / News section with MDX
- Online booking / appointment scheduler
- Live chat or chatbot widget
- CMS integration (Sanity / Strapi / Contentful)
- Analytics (Google Analytics 4 / Plausible) and cookie consent banner
- Admin dashboard for managing enquiries

---

*End of prompt. Replace the Business Configuration block at the top for each new project and reuse.*

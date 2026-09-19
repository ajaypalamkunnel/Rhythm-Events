import { ServiceItem, ProjectItem, TestimonialItem, GalleryMediaItem } from "@/types";

export const siteConfig = {
  business_name: "Rhythm Weddings and Events",
  short_name: "Rhythm Events",
  tagline: "Creating Moments, Crafting Memories",
  category: "Wedding and Event Planner and Decorations",
  description:
    "Rhythm Weddings and Events is a premier wedding planning, floral styling, and luxury event decoration company based in Pala, Kottayam. We specialize in creating breathtaking weddings, grand receptions, betrothals, birthday celebrations, and bespoke corporate events across Kerala with seamless end-to-end coordination.",
  target_audience:
    "Couples, families, corporate clients, and individuals looking for bespoke wedding and event planning, master floral styling, and flawless event coordination.",
  unique_value_proposition:
    "Creative event concepts, handcrafted floral artistry, personalized 3D stage visualizations, and dependable end-to-end coordination tailored to every client's dream and budget.",
  years_of_experience: "35+",
  stats: [
    { label: "Years of Mastery", value: "35+", numeric: 35, suffix: "+" },
    { label: "Weddings Crafted", value: "1000+", numeric: 1000, suffix: "+" },
    { label: "Happy Families", value: "2500+", numeric: 2500, suffix: "+" },
    { label: "Satisfaction Rating", value: "4.9/5", numeric: 99, suffix: "%" },
  ],
  location: {
    address: "Rhythm Weddings and Events, Main Road",
    city: "Pala, Kottayam district",
    state_country: "Kerala, India - 686575",
    google_maps_embed_url:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.347514751415!2d76.6800000!3d9.7130000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce4188fa6935%3A0x6b09337ff86ff31!2sPala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    phone: "+91 9539835357",
    altPhone: "+91 9747365879",
    whatsapp: "+91 9747365879",
    email: "info@rhythmweddingsandevents.com",
    business_hours: "Mon – Sat: 9:00 AM – 6:00 PM (Event Support: 24/7)",
  },
  social_links: {
    instagram: "https://www.instagram.com/rhythmweddings",
    facebook: "https://www.facebook.com/rhythmweddings",
    youtube: "https://www.youtube.com/@rhythmweddings",
  },
  theme: "dark",
  brand_colors: {
    primary: "#C9A24D",
    secondary: "#0B1220",
    accent: "#E8C97A",
    goldDark: "#9A782D",
  },
  primary_cta: "Request a Quote",
  secondary_cta: "View Our Work",
  domain: "https://www.rhythmweddingsandevents.com",
  seo_keywords: [
    "wedding planners in Pala",
    "wedding decorators in Kottayam",
    "wedding event management Kerala",
    "wedding decoration Pala",
    "event planners Kottayam",
    "wedding stage decoration Kerala",
    "best wedding decorators in Kottayam",
    "event management services Pala",
    "Christian wedding stage Pala",
    "luxury wedding reception Kerala",
    "betrothal decorators Kottayam",
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "wedding-planning",
    slug: "wedding-planning",
    name: "Wedding Planning & Coordination",
    summary:
      "Comprehensive end-to-end wedding planning, vendor matchmaking, schedule curating, and flawless event-day management.",
    fullDescription:
      "From the initial vision board to the final bridal farewell, our dedicated wedding planning team orchestrates every detail with meticulous precision. We manage venue scouting, vendor contracts, guest hospitality, theme aesthetics, and timelines so you can immerse fully in the celebration of your love.",
    features: [
      "Bespoke wedding concept, mood boards & 3D visualizations",
      "Curated vendor selection (Catering, Photography, Makeup, Sound & Light)",
      "Detailed run-of-show timeline & itinerary management",
      "Dedicated Day-of Event Director & bridal concierge",
      "Budget optimization & milestone payment tracking",
    ],
    benefits: [
      "100% stress-free experience for the couple and immediate family",
      "Exclusive vendor rates and trusted luxury partner network",
      "Contingency management for weather and logistics in Kerala venues",
    ],
    processSteps: [
      { title: "Vision & Budget Alignment", desc: "Understanding your story, traditions, preferences, and ideal budget." },
      { title: "Concept & Vendor Curation", desc: "Crafting customized theme boards and locking in verified elite vendors." },
      { title: "Detailed Rehearsal & Timeline", desc: "Fine-tuning logistics, guest flows, and technical arrangements." },
      { title: "Flawless Day-of Execution", desc: "Our on-ground team manages every moment with clockwork efficiency." },
    ],
    faqs: [
      {
        question: "How early should we book our wedding planning?",
        answer: "We recommend booking 3 to 6 months in advance, especially during the peak Kerala wedding seasons (Nov–Jan and Apr–May) to ensure your preferred date and venue.",
      },
      {
        question: "Do you handle destination weddings in Kumarakom or Kochi?",
        answer: "Yes! We coordinate luxury destination weddings across Kottayam, Pala, Kumarakom backwaters, Kochi, and all parts of Kerala.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 110604.png",
    badge: "Most Popular",
  },
  {
    id: "wedding-decorations",
    slug: "wedding-decorations",
    name: "Wedding Stage & Venue Decorations",
    summary:
      "Magnificent, theme-tailored stage designs, floral backdrops, entrance arches, and immersive lighting installations.",
    fullDescription:
      "Every wedding stage is a living canvas. We design signature stages that reflect your heritage and contemporary tastes—from grand cathedral arches for Christian nuptials to traditional Mandapams and royal botanical backdrops.",
    features: [
      "Grand customized stage backdrops and thematic arches",
      "Exotic imported & fresh local floral installations",
      "Intelligent dynamic stage illumination, chandeliers & crystal lamps",
      "Themed couple seating, royal sofas & custom pedestals",
      "Aisle walkways, carpet runners & petal pathway treatments",
    ],
    benefits: [
      "Picture-perfect photographic backdrops for your lifelong memories",
      "Fresh, long-lasting premium blooms sourced directly from select growers",
      "Seamless integration with church, temple, or auditorium layouts",
    ],
    processSteps: [
      { title: "Venue Site Survey", desc: "Measuring stage dimensions, ceiling heights, lighting angles, and acoustics." },
      { title: "3D Design Render", desc: "Presenting photorealistic stage design previews for your approval." },
      { title: "Artisanal Fabrication", desc: "Custom carpentry, metalwork, and floral pre-arrangements in our workshop." },
      { title: "Overnight On-Site Setup", desc: "Meticulous assembly ensuring the stage is sparkling hours before guest arrival." },
    ],
    faqs: [
      {
        question: "Can you customize a design from an inspiration photo we have?",
        answer: "Absolutely. We can recreate or elevate any design reference while adapting it to your venue's specific dimensions and color palette.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 110432.png",
    badge: "Signature Craft",
  },
  {
    id: "reception-decoration",
    slug: "reception-decoration",
    name: "Luxury Reception Decoration",
    summary:
      "Glamorous evening reception setups featuring dramatic ambient lighting, majestic backdrops, and guest lounge styling.",
    fullDescription:
      "Transform your reception venue into a fairytale wonderland. We combine ambient mood lighting, hanging crystal chandeliers, fragrant floral walls, and tailored VIP seating to deliver an unforgettable celebratory evening.",
    features: [
      "Sculpted reception stages with mirror-finish floors & crystal drapes",
      "Suspended ceiling floral clouds and chandelier canopies",
      "LED ambient wall washing, moving heads & gentle haze effects",
      "VIP banquet table styling, luxury linen & centerpiece botanicals",
      "Photo-booth and interactive guest memory corners",
    ],
    benefits: [
      "Unrivaled evening ambiance with warm golden glow photography",
      "High-capacity guest flow management",
      "Custom DJ console and dancefloor staging",
    ],
    processSteps: [
      { title: "Atmosphere Conceptualization", desc: "Setting the color scheme (Gold & Ivory, Rose Gold, Royal Emerald)." },
      { title: "Lighting & Floral Integration", desc: "Calibrating ambient lumens with floral compositions." },
      { title: "Grand Assembly", desc: "Executing stage, tablescapes, and dramatic couple entrance pathways." },
    ],
    faqs: [
      {
        question: "Do you provide customized entrance pathways for the couple?",
        answer: "Yes, we specialize in lit mirrored walkways, cold-spark pyrotechnic entrance tunnels, and floral pergolas for couple grand entries.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 110730.png",
  },
  {
    id: "engagement-betrothal",
    slug: "engagement-betrothal-events",
    name: "Engagement & Betrothal (Manasammatham)",
    summary:
      "Intimate and sacred stage styling, customized floral rings, and warm ambient decors for betrothals and ring ceremonies.",
    fullDescription:
      "The betrothal marks the sacred promise of two souls. We craft intimate, heartfelt settings with rustic floral wooden arbors, elegant pastel drapery, personalized monograms, and delicate illumination that celebrate family traditions.",
    features: [
      "Customized floral circular rings, hexagons & geometric arches",
      "Warm fairy light backdrops with cascading botanical greens",
      "Personalized LED neon couple name signs & monograms",
      "Traditional Betrothal ring exchange podiums & platter styling",
      "Intimate family lounge setups and photo zones",
    ],
    benefits: [
      "Cozy yet opulent setting tailored for high-emotion family gatherings",
      "Optimized for daytime natural lighting and evening golden hour shoots",
    ],
    processSteps: [
      { title: "Tradition Consultation", desc: "Tailoring decor to your family's cultural customs and church traditions." },
      { title: "Arch & Backdrop Styling", desc: "Curating bespoke floral hues (pastels, blush, eucalyptus, white lilies)." },
      { title: "Day-of Perfection", desc: "Ensuring every floral sprig and warm light is flawless." },
    ],
    faqs: [
      {
        question: "Can we include personalized signage and couple hashtags?",
        answer: "Yes! We design custom neon acrylic signboards, welcome easels, and interactive polaroid boards.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 110656.png",
  },
  {
    id: "floral-stage-decoration",
    slug: "floral-stage-decoration",
    name: "Master Floral Artistry & Stage Craft",
    summary:
      "Exquisite floral arrangements utilizing fresh exotic blooms, roses, orchids, hydrangeas, and bespoke botanical sculptures.",
    fullDescription:
      "Flowers are the poetry of any celebration. Our master florists handcraft mesmerizing cascading waterfalls of orchids, fragrant jasmine drapes, English garden arches, and lush foliage walls that captivate every guest.",
    features: [
      "Fresh exotic floral sourcing (Hydrangeas, Dutch Roses, Lilies, Gypsophila)",
      "Suspended floral canopies and cascading overhead installations",
      "Traditional jasmine & marigold temple garlands and Kerala floral rangolis",
      "Eco-friendly & sustainable floral hydration techniques",
      "Color-coded bridal bouquets, boutonnieres, and car floral decoration",
    ],
    benefits: [
      "Freshness guaranteed throughout the day without wilting",
      "Fragrant, sensory delight that enchants the venue",
      "Customized color matching to the bridal attire",
    ],
    processSteps: [
      { title: "Palette Selection", desc: "Matching flowers with bridal lehenga, saree, or gown." },
      { title: "Cold-Chain Sourcing", desc: "Procuring blooms right before the event for peak freshness." },
      { title: "On-site Artisanal Weaving", desc: "Expert florists sculpt backdrops and table runners on-site." },
    ],
    faqs: [
      {
        question: "Do you combine artificial flowers with real fresh blooms?",
        answer: "We offer 100% fresh floral designs, premium silk florals, or hybrid blends to maximize structural scale while maintaining authentic fragrance and touch.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 112110.png",
  },
  {
    id: "birthday-private-events",
    slug: "birthday-private-events",
    name: "Birthday & Private Celebrations",
    summary:
      "Vibrant theme decors, organic balloon installations, kids' fantasy wonderlands, and stylish anniversary parties.",
    fullDescription:
      "Celebrate life's sweetest milestones with flair. From magical 1st birthday themes to golden jubilee anniversaries and private family dinners, we bring boundless creativity and joyful decor to your private gatherings.",
    features: [
      "Organic balloon arches, garlands & thematic character backdrops",
      "Customized cake table styling, dessert stands & prop rentals",
      "Interactive kids play zones, tattoo artists & magic shows",
      "Thematic lighting, photo booths & personalized party favors",
    ],
    benefits: [
      "Delightful, photogenic setting that sparks joy for guests of all ages",
      "Turnkey setup and clean-up after the party",
    ],
    processSteps: [
      { title: "Theme Selection", desc: "Choosing concepts (Jungle safari, Royal Princess, Retro, Bohemian)." },
      { title: "Custom Props Fabrication", desc: "Crafting customized cutouts, 3D numerals, and balloon structures." },
      { title: "Party Ready", desc: "Complete venue setup ready for cake cutting and fun." },
    ],
    faqs: [
      {
        question: "Can you host parties at our private home or villa lawn?",
        answer: "Yes, we specialize in converting backyard lawns, rooftops, and living spaces into stunning party destinations.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 112125.png",
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    name: "Corporate Events & Brand Launches",
    summary:
      "Sophisticated stage setups, AV audio-visual synchronization, corporate conferences, and annual gala celebrations.",
    fullDescription:
      "Elevate your brand with polished, professional event management. We handle product launches, awards nights, executive conferences, and corporate banquets with crisp branding and flawless technical execution.",
    features: [
      "Corporate stage backdrops, LED video walls & presentation screens",
      "Crystal-clear audio line-arrays, podium mics & live streaming setup",
      "Registration desks, brand media walls & delegate lanyards",
      "Gala dinner decor, executive seating & awards distribution flow",
    ],
    benefits: [
      "Impeccable brand prestige and professional attendee experience",
      "Punctual execution adhering to corporate scheduling",
    ],
    processSteps: [
      { title: "Brand Briefing", desc: "Understanding corporate identity, brand colors, and event goals." },
      { title: "Technical Acoustic Plan", desc: "Optimizing screens, sound distribution, and lighting angles." },
      { title: "Seamless Production", desc: "Managing run-of-show with professional show-callers." },
    ],
    faqs: [
      {
        question: "Do you provide LED walls and high-power sound systems?",
        answer: "Yes, we provide P2.6/P3.9 indoor and outdoor LED video walls, wireless digital audio, and moving heads.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 112147.png",
  },
  {
    id: "complete-event-management",
    slug: "complete-event-management",
    name: "Complete Event Management",
    summary:
      "All-inclusive 360-degree event production from initial brainstorming to venue booking, catering curation, and logistics.",
    fullDescription:
      "When you need absolute peace of mind, our turnkey event management takes full stewardship. We oversee licensing, guest transportation, catering supervision, security, live entertainment, and stage production under one single accountable team.",
    features: [
      "Complete 360-degree event blueprint and budget governance",
      "Catering curation, live counters & beverage bar setup",
      "Live music bands, Chenda Melam, Violinists & DJ entertainment",
      "Guest transportation, luxury car rentals & valet parking management",
      "On-site security, housekeeping & medical first-aid readiness",
    ],
    benefits: [
      "Single point of contact for every facet of your celebration",
      "Zero coordination burden on the family",
      "Unmatched cost efficiency through integrated logistics",
    ],
    processSteps: [
      { title: "Full Scope Definition", desc: "Mapping out the multi-day itinerary and guest headcount." },
      { title: "Production Scheduling", desc: "Coordinating multi-vendor setup schedules across all days." },
      { title: "Grand Celebration", desc: "Our 20+ event crew delivers a flawless experience from start to finish." },
    ],
    faqs: [
      {
        question: "Do you handle multi-day wedding celebrations (Haldi, Sangeet, Wedding, Reception)?",
        answer: "Yes, we specialize in curated multi-day wedding festivities with distinct visual themes for each ritual.",
      },
    ],
    image: "/assets/Screenshot 2026-09-19 110604.png",
    badge: "All-Inclusive",
  },
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "grand-pala-christian-wedding",
    slug: "grand-pala-christian-wedding",
    title: "Grand Cathedral Nuptials & Royal Pavilion",
    category: "Weddings",
    client: "Dr. Rohith & Anju",
    location: "Pala, Kottayam",
    date: "January 2026",
    summary: "A grand 1200-guest wedding featuring a 60-foot royal ivory floral arch and crystal chandelier stage.",
    challenge: "Transforming a vast convention hall into an intimate, warm luxury palace within a tight 6-hour setup window.",
    solution: "Prefitted 3D modular arch structures with cold-transported fresh Dutch white roses, hydrangeas, and layered warm gold wash lighting.",
    result: "Flawless on-time delivery praised by over 1200 attendees and featured in leading Kerala wedding magazines.",
    image: "/assets/Screenshot 2026-09-19 110432.png",
    beforeImage: "/assets/Screenshot 2026-09-19 112110.png",
    afterImage: "/assets/Screenshot 2026-09-19 110432.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 110432.png",
      "/assets/Screenshot 2026-09-19 110604.png",
      "/assets/Screenshot 2026-09-19 112147.png",
    ],
    tags: ["Christian Wedding", "Grand Stage", "Fresh Florals", "Pala"],
  },
  {
    id: "royal-palace-evening-reception",
    slug: "royal-palace-evening-reception",
    title: "Enchanted Night Sky Reception",
    category: "Receptions",
    client: "Kevin & Sandra",
    location: "Kottayam",
    date: "December 2025",
    summary: "A dreamy evening reception decorated with suspended fairy light tunnels, candlelit tables, and pastel blooms.",
    challenge: "Creating a cinematic evening atmosphere with synchronized lighting and an expansive couple grand entrance walkway.",
    solution: "Installed 40-foot illuminated truss arches with cold fireworks, crystal candle candelabras, and an acoustic sound stage.",
    result: "A magical night of celebration where guests danced until midnight in a world-class ambiance.",
    image: "/assets/Screenshot 2026-09-19 110604.png",
    beforeImage: "/assets/Screenshot 2026-09-19 112125.png",
    afterImage: "/assets/Screenshot 2026-09-19 110604.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 110604.png",
      "/assets/Screenshot 2026-09-19 110730.png",
      "/assets/Screenshot 2026-09-19 112110.png",
    ],
    tags: ["Evening Reception", "Fairy Lights", "Luxury Chandelier", "Kottayam"],
  },
  {
    id: "rustic-boho-betrothal-ceremony",
    slug: "rustic-boho-betrothal-ceremony",
    title: "Pastel Meadow Betrothal & Ring Ceremony",
    category: "Betrothals",
    client: "Mathew & Teresa",
    location: "Kanjirappally, Kottayam",
    date: "February 2026",
    summary: "An intimate betrothal with handcrafted timber arbors, lush eucalyptus runners, and soft blush peonies.",
    challenge: "Designing an intimate family stage in a boutique resort lawn while maintaining protection from direct sunlight.",
    solution: "Designed a sheer draped canopy with botanical hanging rings and personalized neon signage.",
    result: "An emotional, picturesque engagement that went viral on Instagram reels with over 100k views.",
    image: "/assets/Screenshot 2026-09-19 110656.png",
    beforeImage: "/assets/Screenshot 2026-09-19 110730.png",
    afterImage: "/assets/Screenshot 2026-09-19 110656.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 110656.png",
      "/assets/Screenshot 2026-09-19 112125.png",
      "/assets/Screenshot 2026-09-19 110432.png",
    ],
    tags: ["Betrothal", "Pastel Decor", "Neon Signage", "Kanjirappally"],
  },
  {
    id: "blush-spring-reception-stage",
    slug: "blush-spring-reception-stage",
    title: "Golden Hour Floral Symphony",
    category: "Floral & Stage",
    client: "Alen & Sneha",
    location: "Pala",
    date: "November 2025",
    summary: "Curated floral stage architecture featuring pastel pink roses, crystal chandeliers, and custom gold couple sofa.",
    challenge: "Color-matching stage blooms precisely to the bride's bespoke champagne-rose designer gown.",
    solution: "Specially sourced imported cherry blush roses and gypsophila clouds with warm 2700K golden spotlighting.",
    result: "Breathtaking visual cohesion in all wedding portraits and high praise from the bride and groom.",
    image: "/assets/Screenshot 2026-09-19 110730.png",
    beforeImage: "/assets/Screenshot 2026-09-19 112147.png",
    afterImage: "/assets/Screenshot 2026-09-19 110730.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 110730.png",
      "/assets/Screenshot 2026-09-19 112110.png",
      "/assets/Screenshot 2026-09-19 110604.png",
    ],
    tags: ["Floral Stage", "Pastel Roses", "Gold Highlights", "Pala"],
  },
  {
    id: "royal-crystal-candle-sanctuary",
    slug: "royal-crystal-candle-sanctuary",
    title: "Elegance in Gold & Glass",
    category: "Floral & Stage",
    client: "Jerin & Merin",
    location: "Ettumanoor, Kottayam",
    date: "October 2025",
    summary: "A timeless gold-framed stage with custom candelabras, velvet textures, and cascading floral urns.",
    challenge: "Balancing classic Kerala tradition with ultra-modern glassmorphic geometric decor.",
    solution: "Used bespoke gold metallic arches paired with real flame-safe crystal glass hurricane lanterns.",
    result: "A majestic setting that honored heritage while radiating contemporary luxury.",
    image: "/assets/Screenshot 2026-09-19 112110.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 112110.png",
      "/assets/Screenshot 2026-09-19 110432.png",
      "/assets/Screenshot 2026-09-19 110656.png",
    ],
    tags: ["Stage Decor", "Crystal Candles", "Luxury Gold", "Ettumanoor"],
  },
  {
    id: "grand-entrance-floral-canopy",
    slug: "grand-entrance-floral-canopy",
    title: "Imperial Floral Gateway",
    category: "Weddings",
    client: "Deepak & Neha",
    location: "Changanassery, Kottayam",
    date: "August 2025",
    summary: "A 50-foot cascading floral tunnel entrance creating an immersive welcome experience for arriving guests.",
    challenge: "Constructing a weatherproof outdoor entrance arch that withstood gentle monsoon showers.",
    solution: "Engineered a reinforced waterproof arched truss disguised under thick green foliage and fresh roses.",
    result: "Guests were awestruck upon arrival, creating a viral photo moment before entering the banquet.",
    image: "/assets/Screenshot 2026-09-19 112147.png",
    gallery: [
      "/assets/Screenshot 2026-09-19 112147.png",
      "/assets/Screenshot 2026-09-19 110604.png",
      "/assets/Screenshot 2026-09-19 110730.png",
    ],
    tags: ["Entrance Arch", "Floral Tunnel", "Changanassery"],
  },
];

export const galleryMedia: GalleryMediaItem[] = [
  {
    id: "vid-1",
    title: "Cinematic Wedding Stage & Lighting Showcase",
    category: "videos",
    type: "video",
    src: "/assets/Video-2128.mp4",
    poster: "/assets/Screenshot 2026-09-19 110604.png",
    caption: "Dynamic live lighting and stage ambiance at a grand Christian wedding in Pala.",
  },
  {
    id: "vid-2",
    title: "Betrothal & Reception Walkthrough Reel",
    category: "videos",
    type: "video",
    src: "/assets/Video-52228.mp4",
    poster: "/assets/Screenshot 2026-09-19 110656.png",
    caption: "Complete venue walkthrough showcasing seamless transitions from entrance to VIP stage.",
  },
  {
    id: "vid-3",
    title: "Couple Grand Celebration & Floral Artistry",
    category: "videos",
    type: "video",
    src: "/assets/Video-74065.mp4",
    poster: "/assets/Screenshot 2026-09-19 110432.png",
    caption: "Grand floral installations and ecstatic couple entry moments crafted by Rhythm Events.",
  },
  {
    id: "img-1",
    title: "Cathedral Nuptial Stage",
    category: "stages",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 110432.png",
    caption: "Grand floral arch with royal white florals and warm backlighting.",
  },
  {
    id: "img-2",
    title: "Enchanted Chandelier Stage",
    category: "stages",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 110604.png",
    caption: "Layered illuminated stage with hanging crystal chandeliers.",
  },
  {
    id: "img-3",
    title: "Pastel Meadow Betrothal",
    category: "floral",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 110656.png",
    caption: "Intimate rustic wood arbor adorned with eucalyptus and fairy lights.",
  },
  {
    id: "img-4",
    title: "Rose Gold Reception Arch",
    category: "photos",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 110730.png",
    caption: "Bespoke floral styling for evening celebrations.",
  },
  {
    id: "img-5",
    title: "Crystal Candlelight Luxury",
    category: "stages",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 112110.png",
    caption: "Classic gold tones with crystal candle pedestals.",
  },
  {
    id: "img-6",
    title: "Royal White Floral Canopy",
    category: "photos",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 112125.png",
    caption: "Lush botanical floral backdrop for bridal portraits.",
  },
  {
    id: "img-7",
    title: "Grand Arrival Floral Tunnel",
    category: "floral",
    type: "image",
    src: "/assets/Screenshot 2026-09-19 112147.png",
    caption: "Immersive floral entrance arch greeting arriving guests.",
  },
  {
    id: "img-8",
    title: "Signature Rhythm Event Stage",
    category: "photos",
    type: "image",
    src: "/assets/Hero section.png",
    caption: "Award-winning stage design by Rhythm Weddings and Events.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Dr. Rohith & Dr. Anju",
    role: "Bride & Groom",
    event: "Christian Wedding & Reception",
    location: "Pala, Kottayam",
    rating: 5,
    content:
      "Rhythm Weddings transformed our wedding into something straight out of a royal fairytale! The stage decor in Pala was breathtaking and every single guest was complimenting the fresh floral arches. Their team handled everything so seamlessly that our families could relax and enjoy every second.",
    date: "January 2026",
  },
  {
    id: "t-2",
    name: "Kevin & Sandra Mathew",
    role: "Bride & Groom",
    event: "Betrothal & Evening Reception",
    location: "Kottayam",
    rating: 5,
    content:
      "From our very first meeting with the Rhythm team, their professionalism and artistic vision stood out. The 3D render they showed us matched 100% with the real setup on our big day. Truly the best wedding decorators in Kottayam!",
    date: "December 2025",
  },
  {
    id: "t-3",
    name: "Adv. George Thomas",
    role: "Father of the Bride",
    event: "Daughter's Grand Wedding",
    location: "Kanjirappally",
    rating: 5,
    content:
      "As parents, planning a 1000+ guest wedding was daunting. The Rhythm team took complete ownership of the vendor management, food flow, and the magnificent stage. Not a single hitch occurred. Highly recommended to everyone in Central Travancore.",
    date: "November 2025",
  },
  {
    id: "t-4",
    name: "Sneha & Ashwin",
    role: "Bride & Groom",
    event: "Contemporary Pastel Wedding",
    location: "Ettumanoor",
    rating: 5,
    content:
      "The floral artistry by Rhythm is unmatched! They sourced the exact rare shade of blush roses I wanted to match my gown. The lighting setup gave our photos such an ethereal, magical glow.",
    date: "February 2026",
  },
];

export const whyChooseUsData = [
  {
    title: "35+ Years of Proven Mastery",
    desc: "Over 35 years and 1000+ successful weddings and milestone celebrations executed flawlessly across Kottayam and Kerala.",
    icon: "Award",
  },
  {
    title: "Bespoke 3D Visualizations",
    desc: "Preview your exact stage dimensions, floral colors, and lighting renders before fabrication begins.",
    icon: "Sparkles",
  },
  {
    title: "Master Fresh Floral Artisans",
    desc: "Direct cold-chain sourcing of Dutch roses, orchids, and fresh local botanicals for all-day vibrancy.",
    icon: "Flower2",
  },
  {
    title: "24/7 Dedicated Event Concierge",
    desc: "A dedicated on-ground event director manages every cue, vendor, and guest need on your big day.",
    icon: "Clock",
  },
  {
    title: "Transparent, Value-Driven Pricing",
    desc: "Clear itemized proposals with zero hidden costs, designed to maximize elegance within your budget.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Turnkey Capability",
    desc: "From stage decor, sound & lighting, to catering coordination and artist management under one roof.",
    icon: "Layers",
  },
];

export const partnerVenues = [
  "Mammen Mappillai Hall, Kottayam",
  "Windsor Castle, Kottayam",
  "Pala Sports Complex & Convention Centre",
  "Zuri Resort, Kumarakom",
  "Kumarakom Lake Resort",
  "Backwater Ripples, Kumarakom",
  "Aida Hotel & Banquets, Kottayam",
  "Lakesong Resort, Kumarakom",
  "Kottayam Club Banquets",
];

export const timelineMilestones = [
  {
    year: "1990s",
    title: "The Legacy Begins in Pala",
    desc: "Pioneered grand wedding and stage floral decoration across Central Travancore.",
  },
  {
    year: "2005",
    title: "500+ Milestone Celebrations",
    desc: "Established dedicated in-house carpentry, metal truss fabrication, and cold floral warehousing.",
  },
  {
    year: "2018",
    title: "Pioneering 3D Stage Renders",
    desc: "Introduced photorealistic 3D visualization for couples, setting a new benchmark in Kerala wedding styling.",
  },
  {
    year: "2022",
    title: "Turnkey Luxury Event Production",
    desc: "Expanded to 360-degree event management covering destination weddings in Kumarakom and Kochi.",
  },
  {
    year: "Present",
    title: "35+ Years & 1000+ Weddings",
    desc: "Recognized as Central Kerala's most trusted name in luxury weddings and bespoke event design.",
  },
];

import { siteConfig } from "@/config/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.business_name,
    alternateName: "Rhythm Events Pala",
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/assets/Rhythm_logo_png.png`,
    image: `${siteConfig.domain}/assets/Hero section.png`,
    description: siteConfig.description,
    telephone: "+919539835357",
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: "Pala",
      addressRegion: "Kottayam, Kerala",
      postalCode: "686575",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.7126,
      longitude: 76.6833,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "264",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      siteConfig.social_links.instagram,
    ].filter(Boolean),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import { getLocalBusinessSchema } from "@/lib/schema";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const accentFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.business_name} | Luxury Wedding & Event Decorators in Pala, Kottayam`,
    template: `%s | ${siteConfig.business_name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo_keywords,
  authors: [{ name: siteConfig.business_name, url: siteConfig.domain }],
  creator: siteConfig.business_name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.domain,
    title: `${siteConfig.business_name} — Creating Moments, Crafting Memories`,
    description: siteConfig.description,
    siteName: siteConfig.business_name,
    images: [
      {
        url: "/assets/Hero section.png",
        width: 1200,
        height: 630,
        alt: "Rhythm Weddings and Events Stage Decoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business_name} | Wedding Planners & Decorators`,
    description: siteConfig.description,
    images: ["/assets/Hero section.png"],
  },
  icons: {
    icon: "/assets/Rhythm_logo_png.png",
    shortcut: "/assets/Rhythm_logo_png.png",
    apple: "/assets/Rhythm_logo_png.png",
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${accentFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-gold selection:text-black">
        <ThemeProvider>
          <SmoothScroll>
            <div className="relative min-h-screen flex flex-col justify-between">
              <Navbar />
              <main id="main-content" className="flex-grow">
                {children}
              </main>
              <Footer />
              <FloatingActions />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

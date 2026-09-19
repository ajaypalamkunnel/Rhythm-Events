import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import VideoReel from "@/components/sections/VideoReel";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <VideoReel />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

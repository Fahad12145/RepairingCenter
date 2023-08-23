"use client";
import React, { useRef } from "react";
import About from "@/Components/About";
import Callus from "@/Components/Callus";
import Gallery from "@/Components/Gallery";
import Hero from "@/Components/Hero";
import Liscense from "@/Components/Liscense";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Contact from "@/Components/Footer";
import Testimonial from "@/Components/Testimonial";
import News from "@/Components/News";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <main lang="en">
      {/* <Navbar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        homeRef={homeRef}
      /> */}
      <Hero ref={homeRef} />
      <Callus />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Gallery />
      <News />
      <Testimonial />
      <Contact ref={contactRef} />
      <Liscense />
    </main>
  );
}

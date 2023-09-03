"use client";
import React, { Suspense, useRef, useState } from "react";
import Liscense from "@/Components/Liscense";
import "../i18next";
// eslint-disable-next-line react-hooks/rules-of-hooks
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Components/Navbar"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("../Components/Hero"), {
  loading: () => <p>Loading...</p>,
});
const Callus = dynamic(() => import("../Components/Callus"), {
  loading: () => <p>Loading...</p>,
});
const About = dynamic(() => import("../Components/About"), {
  loading: () => <p>Loading...</p>,
});
const Services = dynamic(() => import("../Components/Services"), {
  loading: () => <p>Loading...</p>,
});
const Gallery = dynamic(() => import("../Components/Gallery"), {
  loading: () => <p>Loading...</p>,
});
const News = dynamic(() => import("../Components/News"), {
  loading: () => <p>Loading...</p>,
});
const Testimonial = dynamic(() => import("../Components/Testimonial"), {
  loading: () => <p>Loading...</p>,
});
const Contact = dynamic(() => import("../Components/Footer"), {
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <main lang="en">
      <Navbar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        homeRef={homeRef}
      />
      <Suspense
        fallback={
          <div>
            <h1 className="text-center">Please wait...</h1>
          </div>
        }
      >
        <Hero ref={homeRef} />
        <Callus />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Gallery />
        <News />
        <Testimonial />
        <Contact ref={contactRef} />
        <Liscense />
      </Suspense>
    </main>
  );
}

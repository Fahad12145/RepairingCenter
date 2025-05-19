"use client";
import React, { Suspense, useRef, useState } from "react";
import Liscense from "@/Components/Liscense";
import "../i18next";
// eslint-disable-next-line react-hooks/rules-of-hooks
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Callus from "@/Components/Callus";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Gallery from "@/Components/Gallery";
import News from "@/Components/News";
import Testimonial from "@/Components/Testimonial";
import Contact from "@/Components/Footer";
import Banner from "@/Components/newBanner";

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
        <Banner />
        <Contact ref={contactRef} />
        <Liscense />
      </Suspense>
    </main>
  );
}

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

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <main lang="ar">
      {/* <Callus /> */}
      <Navbar aboutRef={aboutRef} servicesRef={servicesRef}  contactRef={contactRef}/>
      <Hero />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Gallery />
      <Contact ref={contactRef} />
      <Liscense />
    </main>
  );
}

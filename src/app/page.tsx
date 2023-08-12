import About from "@/Components/About";
import Callus from "@/Components/Callus";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Liscense from "@/Components/Liscense";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main lang="ar">
      <Callus />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
      <Liscense />
    </main>
  );
}

'use client';
import { useEffect } from "react";
import AOS from "aos";
import { Benefits } from "./components/landing/Benefits";
import { CTA } from "./components/landing/CTA";
import { Hero } from "./components/landing/Hero";
import { Stats } from "./components/landing/Stats";
import { Testimonials } from "./components/landing/Testimonials";

export default function Home() {
      useEffect(() => {
        AOS.init({
          duration: 800, // Duración en milisegundos
          easing: "ease-in-out", // Animación suave
          once: true, // Ejecuta la animación una sola vez
        });
      }, []);
  return (
    <div className=" bg-white">
      <Hero />
      <CTA />
      <Testimonials />
      <Stats />
      <Benefits />
      <Testimonials />
    </div>
  );
}

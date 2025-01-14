import { Benefits } from "./components/landing/Benefits";
import { CTA } from "./components/landing/CTA";
import { Hero } from "./components/landing/Hero";
import { Stats } from "./components/landing/Stats";
import { Testimonials } from "./components/landing/Testimonials";

export default function Home() {
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

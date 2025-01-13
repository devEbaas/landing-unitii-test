import { CTA } from "./landing/CTA";
import { Hero } from "./landing/Hero";
import { Header } from "./ui/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <CTA />
    </div>
  );
}

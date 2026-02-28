import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Concept from "@/components/Concept";
import Specialties from "@/components/Specialties";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Marquee />
      <Concept />
      <Specialties />
      <Contact />
    </main>
  );
}

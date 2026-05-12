import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-surface bg-radial-fade"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:64px_64px] bg-grid-pattern opacity-40"
        aria-hidden
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

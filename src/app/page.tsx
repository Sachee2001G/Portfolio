import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ScrollProgress />
      <About />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}

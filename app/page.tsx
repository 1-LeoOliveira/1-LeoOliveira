import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedHighlight from "@/components/FeaturedHighlight";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedHighlight />
      <Projects />
      <Contact />
    </>
  );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills />
      <Qualification />
      <Experience />
      <Projects/>
      <Contact />
      <Footer/>
    </>
  );
}

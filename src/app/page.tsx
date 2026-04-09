import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <div id="home" className="relative">
         <ScrollyCanvas />
         <Overlay />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const SectionDivider = () => (
  <div className="relative w-full h-px overflow-visible flex items-center justify-center" aria-hidden="true">
    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
    <div className="absolute w-[300px] h-[1px] blur-sm bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
    <div className="absolute w-2 h-2 rounded-full bg-fuchsia-500/40 shadow-[0_0_12px_4px_rgba(217,70,239,0.3)]" />
  </div>
);

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen">
      <div id="home" className="relative">
         <ScrollyCanvas />
      </div>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
}

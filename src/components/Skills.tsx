import Typewriter from "@/components/Typewriter";

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
    const list = [...items, ...items, ...items, ...items];
    return (
      <div className="relative flex overflow-hidden group w-full mb-12 select-none">
          <div className={`${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} flex whitespace-nowrap w-max group-hover:[animation-play-state:paused]`}>
              {list.map((item, i) => (
                  <span key={i} className="mx-6 md:mx-10 text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 transition-all duration-500">
                      {item}
                  </span>
              ))}
          </div>
      </div>
    );
}

export default function Skills() {
    const row1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "PostgreSQL"];
    const row2 = ["Leadership", "Event Planning", "Communication", "GenAI & RAG", "Vercel", "Problem Solving"];

    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] section-optimize">
            <div className="max-w-6xl mx-auto px-6 md:px-24 mb-20 text-center md:text-left">
                <Typewriter text="Core Competencies" delay={0.1} className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 uppercase tracking-[0.4em] font-bold mb-6 inline-block" />
                <br />
                <Typewriter text="Technical & Soft Skills." delay={0.3} className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter text-balance" />
            </div>

            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
        </section>
    );
}

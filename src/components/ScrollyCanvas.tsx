"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 75; // 00 to 74
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // THE NATIVE REACT MASTER CLOCK
  const [currentFrame, setCurrentFrame] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const outlineStyle = { 
    WebkitTextStroke: '2.5px rgba(255,255,255,1)', 
    WebkitTextFillColor: 'rgba(0,0,0,0.1)' 
  };
  const rainbowClass = "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]";

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImages(loadedImages);
                drawFrame(0, loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, []);

  const drawFrame = (index: number, imgList: HTMLImageElement[]) => {
      // FORCE React DOM update explicitly tied to the image canvas
      setCurrentFrame(index);

      if (imgList.length === 0 || !canvasRef.current) return;
      const img = imgList[index];
      const canvas = canvasRef.current;
      if (!canvas || !img) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
  };

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    drawFrame(0, images);
    
    const unsubscribe = frameIndex.on("change", (latestVal) => {
      const idx = Math.round(latestVal);
      drawFrame(idx, images);
    });

    const handleResize = () => {
        const val = frameIndex.get();
        const idx = Math.round(val);
        drawFrame(idx, images);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [frameIndex, images]);

  // Safe manual boolean check against exact hardware frame index!
  const isActive = (start: number, end: number) => currentFrame >= start && currentFrame < end;

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover z-0" />
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-6 md:px-24 overflow-hidden drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
            
            {/* Section 1: Hi (Left) */}
            <div 
                className={`absolute left-4 md:left-24 top-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out ${isActive(0, 18) ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter" style={outlineStyle}>
                    Hi.
                </h1>
            </div>

            {/* Section 2: I am Yasir Azam (Right) */}
            <div 
                className={`absolute right-4 md:right-24 top-1/2 -translate-y-1/2 text-right w-full max-w-[85vw] md:max-w-2xl transition-opacity duration-700 ease-in-out ${isActive(18, 36) ? 'opacity-100' : 'opacity-0'}`}
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none" style={outlineStyle}>
                    I am <br />
                    <span className={rainbowClass} style={{ WebkitTextStroke: '0px', WebkitTextFillColor: 'transparent' }}>
                        Yasir Azam.
                    </span>
                </h2>
            </div>

            {/* Section 3: Innovating the Frontier (Left) */}
            <div 
                className={`absolute left-4 md:left-24 top-1/2 -translate-y-1/2 w-full max-w-[90vw] md:max-w-4xl transition-opacity duration-700 ease-in-out ${isActive(36, 54) ? 'opacity-100' : 'opacity-0'}`}
            >
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none" style={outlineStyle}>
                    Innovating the <br/>
                    <span className={rainbowClass} style={{ WebkitTextStroke: '0px', WebkitTextFillColor: 'transparent' }}>
                        Digital Frontier.
                    </span>
                </h2>
            </div>

            {/* Section 4: Let's Collaborate (Right) */}
            <div 
                className={`absolute right-4 md:right-24 top-1/2 -translate-y-1/2 text-right w-full max-w-[85vw] md:max-w-xl transition-opacity duration-700 ease-in-out ${isActive(54, 75) ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none" style={outlineStyle}>
                    Let&apos;s <br/>
                    <span className={`border-b-4 md:border-b-8 border-fuchsia-500 pb-2 ${rainbowClass}`} style={{ WebkitTextStroke: '0px', WebkitTextFillColor: 'transparent' }}>
                        Collaborate.
                    </span>
                </h1>
            </div>

        </div>

      </div>
    </div>
  );
}

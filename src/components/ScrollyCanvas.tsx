"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 75; // 00 to 74
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | undefined)[]>(new Array(FRAME_COUNT).fill(undefined));
  const [isReady, setIsReady] = useState(false);
  
  // THE NATIVE REACT MASTER CLOCK

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);


  // Canvas context and size management
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-draw current frame on resize
      const val = frameIndex.get();
      const idx = Math.round(val);
      if (images[idx]) drawFrame(idx, images);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size

    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  useEffect(() => {
    const loadedImages = [...images];
    let priorityLoaded = 0;
    const priorityIndices = [0, 10, 20, 30, 40, 50, 60, 70, FRAME_COUNT - 1];

    const loadImg = (index: number): Promise<void> => {
        return new Promise((resolve) => {
            if (loadedImages[index]) {
                resolve();
                return;
            }
            const img = new Image();
            img.src = getFramePath(index);
            img.onload = () => {
                setImages(prev => {
                    const newImages = [...prev];
                    newImages[index] = img;
                    return newImages;
                });
                if (index === 0) setIsReady(true);
                resolve();
            };
            img.onerror = () => resolve(); // Skip failed images
        });
    };

    const loadAll = async () => {
        // Step 1: Load frame 0 immediately
        await loadImg(0);
        
        // Step 2: Load priority frames
        await Promise.all(priorityIndices.map(idx => loadImg(idx)));
        
        // Step 3: Load the rest in small batches to avoid blocking
        const remaining = Array.from({length: FRAME_COUNT}, (_, i) => i).filter(i => !priorityIndices.includes(i) && i !== 0);
        
        for (let i = 0; i < remaining.length; i += 5) {
            const batch = remaining.slice(i, i + 5);
            await Promise.all(batch.map(idx => loadImg(idx)));
        }
    };

    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = useRef((index: number, imgList: (HTMLImageElement | undefined)[]) => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      // Find the closest available frame if the requested one isn't loaded yet
      let img = imgList[index];
      if (!img) {
          for (let i = 1; i < FRAME_COUNT; i++) {
              if (index - i >= 0 && imgList[index - i]) { img = imgList[index - i]; break; }
              if (index + i < FRAME_COUNT && imgList[index + i]) { img = imgList[index + i]; break; }
          }
      }

      if (!img) return;

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
  }).current;

  useEffect(() => {
    if (!isReady || !canvasRef.current) return;

    // Draw initial frame
    drawFrame(0, images);
    
    const unsubscribe = frameIndex.on("change", (latestVal) => {
      const idx = Math.round(latestVal);
      drawFrame(idx, images);
    });

    return () => unsubscribe();
  }, [frameIndex, images, isReady]);


  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover z-0" />
        {children}
        

      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title: string;
  description: string;
  category: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before renovation space",
  afterAlt = "After complete luxury renovation",
  title,
  description,
  category,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/40 shadow-xl">
      <div
        ref={containerRef}
        className="relative h-72 sm:h-80 md:h-96 w-full cursor-ew-resize select-none overflow-hidden rounded-xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* "After" Image (Background Layer) */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
          <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] backdrop-blur-md border border-[#D4AF37]/30">
            After Transformation
          </span>
        </div>

        {/* "Before" Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full w-[100cqi] sm:w-[540px] md:w-[720px] max-w-none">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-md border border-white/10">
            Before Renovation
          </span>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute bottom-0 top-0 w-1 bg-white shadow-[0_0_15px_rgba(212,175,55,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0B0D10] text-[#D4AF37] shadow-lg">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Project Meta */}
      <div className="mt-4 flex flex-col space-y-1.5 px-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-widest text-[#D4AF37]">
            {category}
          </span>
          <span className="text-[11px] text-slate-400">Sample Concept Case</span>
        </div>
        <h4 className="text-lg font-semibold text-white tracking-tight">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

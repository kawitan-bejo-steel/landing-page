"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  { src: "/assets/images/project_1.jpg", alt: "Proyek bongkar pabrik skala besar" },
  { src: "/assets/images/project_2.jpg", alt: "Penanganan besi bekas volume besar" },
  { src: "/assets/images/project_3.jpg", alt: "Koordinasi logistik proyek industri" },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      style={{ background: "var(--hazard-stripes)", position: "relative", minHeight: "380px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            inset: "14px",
            width: "calc(100% - 28px)",
            height: "calc(100% - 28px)",
            objectFit: "cover",
            borderRadius: "10px",
            display: "block",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.9s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
          priority={i === 0}
        />
      ))}

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "26px",
          left: "calc(50% + 7px)",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 2,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Foto ${i + 1}`}
            style={{
              width: i === current ? "26px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "var(--gold-500)" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 350ms cubic-bezier(0.22,1,0.36,1), background 350ms ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

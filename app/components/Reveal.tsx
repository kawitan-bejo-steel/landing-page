"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

export default function Reveal({
  children,
  delay = 0,
  style,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          el.addEventListener("transitionend", () => { el.style.willChange = "auto"; }, { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`bj-reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

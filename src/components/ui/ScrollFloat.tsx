"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  animationDuration?: number;
  ease?: string;
  containerClassName?: string;
  textClassName?: string;
  splitBy?: "letters" | "words";
}

export default function ScrollFloat({
  children,
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  animationDuration = 1,
  ease = "back.inOut(2)",
  containerClassName = "",
  textClassName = "",
  splitBy = "letters",
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll(".scroll-float-item");
    if (charElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: scrollStart,
        end: scrollEnd,
        scrub: false,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      charElements,
      {
        yPercent: 120,
        opacity: 0,
        rotateX: -45,
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger,
        duration: animationDuration,
        ease,
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [scrollStart, scrollEnd, stagger, animationDuration, ease]);

  const items = splitBy === "letters" ? children.split("") : children.split(" ");

  return (
    <div ref={containerRef} className={`overflow-hidden inline-block py-1 ${containerClassName}`}>
      <span className={`inline-block ${textClassName}`}>
        {items.map((item, i) => (
          <span
            key={i}
            className="scroll-float-item inline-block will-change-transform"
            style={{ whiteSpace: item === " " ? "pre" : "normal" }}
          >
            {item === " " ? "\u00A0" : item}
            {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </div>
  );
}

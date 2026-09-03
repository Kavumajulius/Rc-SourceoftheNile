'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

interface ParallaxComponentProps {
  title?: string;
  subtitle?: string;
  image1?: string;
  image2?: string;
  image3?: string;
}

export function ParallaxComponent({
  title = "Rotary Impact",
  subtitle = "Service Above Self",
  image1 = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
  image2 = "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
  image3 = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative w-full overflow-hidden" ref={parallaxRef}>
      <section className="parallax__header relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="parallax__visuals absolute inset-0 w-full h-full overflow-hidden">
          <div className="parallax__black-line-overflow absolute inset-0 z-0"></div>
          <div data-parallax-layers className="parallax__layers relative w-full h-full flex items-center justify-center">
            <img 
              src={image1} 
              loading="eager" 
              width="1200" 
              data-parallax-layer="1" 
              alt="Layer 1" 
              className="parallax__layer-img absolute w-[90%] md:w-[70%] h-[70vh] object-cover rounded-2xl shadow-2xl" 
            />
            <img 
              src={image2} 
              loading="eager" 
              width="1200" 
              data-parallax-layer="2" 
              alt="Layer 2" 
              className="parallax__layer-img absolute w-[70%] md:w-[50%] h-[55vh] object-cover rounded-xl shadow-2xl opacity-90" 
            />
            <div data-parallax-layer="3" className="parallax__layer-title absolute z-20 text-center px-4">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3 block drop-shadow-md">
                {subtitle}
              </span>
              <h1 className="parallax__title text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl">
                {title}
              </h1>
            </div>
            <img 
              src={image3} 
              loading="eager" 
              width="1200" 
              data-parallax-layer="4" 
              alt="Layer 4" 
              className="parallax__layer-img absolute w-[50%] md:w-[35%] h-[40vh] object-cover rounded-lg shadow-2xl opacity-80" 
            />
          </div>
          <div className="parallax__fade absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-30"></div>
        </div>
      </section>
    </div>
  );
}

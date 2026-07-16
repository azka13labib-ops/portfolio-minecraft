"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger client-side only
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      
      // 1. Loop Floating/Rotating Animation for Illustration
      gsap.to(".about-illustration", {
        y: "-=20",
        rotation: 6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Label & Handles Fade-In from Top
      gsap.from(".about-header-item", {
        opacity: 0,
        y: -35,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split description text word by word or phrase by phrase
  const words = [
    { text: "My ", type: "normal" },
    { text: "name ", type: "normal" },
    { text: "is ", type: "normal" },
    { text: "Azka ", type: "blue-dashed" },
    { text: "Labib ", type: "blue-dashed" },
    { text: "(Azka). ", type: "pink" },
    { text: "I ", type: "normal" },
    { text: "specialize ", type: "normal" },
    { text: "in ", type: "normal" },
    { text: "Web ", type: "pink" },
    { text: "Development, ", type: "pink" },
    { text: "with ", type: "normal" },
    { text: "a ", type: "normal" },
    { text: "strong ", type: "normal" },
    { text: "focus ", type: "normal" },
    { text: "on ", type: "normal" },
    { text: "Full ", type: "blue-dashed" },
    { text: "Stack ", type: "blue-dashed" },
    { text: "Engineering. ", type: "blue-dashed" },
    { text: "I ", type: "normal" },
    { text: "work ", type: "normal" },
    { text: "with ", type: "normal" },
    { text: "modern ", type: "normal" },
    { text: "technologies ", type: "normal" },
    { text: "such ", type: "normal" },
    { text: "as ", type: "normal" },
    { text: "Laravel, ", type: "pink" },
    { text: "Next.js. ", type: "blue-dashed" },
    { text: "I ", type: "normal" },
    { text: "am ", type: "normal" },
    { text: "passionate ", type: "normal" },
    { text: "about ", type: "normal" },
    { text: "building ", type: "normal" },
    { text: "scalable ", type: "blue-dashed" },
    { text: "digital ", type: "blue-dashed" },
    { text: "products ", type: "blue-dashed" },
    { text: "and ", type: "normal" },
    { text: "creating ", type: "normal" },
    { text: "meaningful ", type: "normal" },
    { text: "user ", type: "normal" },
    { text: "experiences. ", type: "normal" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Header Info (Top) aligned with Navbar */}
      <div className="flex justify-between absolute top-24 md:top-28 px-8 md:px-16 lg:px-24 w-full z-30">
        <div className="about-header-item text-gray-300 font-caveat text-2xl md:text-5xl">
          About Me
        </div>
        <div className="about-header-item font-orbitron text-gray-300 uppercase tracking-widest font-black line-through decoration-wavy decoration-[#FB64B6] decoration-2 text-sm md:text-base 2xl:text-4xl">
          @AzkaLabib
        </div>
      </div>

      {/* Main Centered Paragraph (Reveal Text, Orbitron, Uppercase) */}
      <div
        ref={textContainerRef}
        className="absolute top-[28%] md:top-[35%] left-1/2 -translate-x-1/2 font-orbitron font-black text-neutral-200 text-lg md:text-2xl 2xl:text-3xl uppercase w-full max-w-6xl px-6 md:px-10 text-center tracking-wider leading-snug md:leading-relaxed z-30"
      >
        <p className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-y-3">
          {words.map((word, index) => {
            let colorClass = "";
            if (word.type === "blue-dashed") {
              colorClass = "highlight-blue text-[#FB64B6] border-b border-dashed border-[#FB64B6]/60 cursor-pointer hover:border-[#FB64B6] transition-all";
            } else if (word.type === "pink") {
              colorClass = "highlight-pink text-[#FB64B6] cursor-pointer";
            } else {
              colorClass = "text-white";
            }
            return (
              <span
                key={index}
                className={`reveal-word inline-block ${colorClass}`}
                style={{ color: "rgba(113, 113, 122, 0.25)" }}
              >
                {word.text}
              </span>
            );
          })}
        </p>
      </div>

      {/* Decorative Vector SVG on the bottom-left */}
      <div className="about-illustration absolute bottom-[2%] left-[2%] h-[120px] md:h-[200px] w-[120px] md:w-[200px] select-none pointer-events-none z-30">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#FB64B6] stroke-[1.5] drop-shadow-[0_0_12px_rgba(251,100,182,0.8)]">
          <polygon points="100,20 170,70 170,150 100,180 30,150 30,70" />
          <polygon points="100,50 150,85 150,135 100,155 50,135 50,85" strokeDasharray="4 4" />
          <line x1="100" y1="20" x2="100" y2="50" />
          <line x1="170" y1="70" x2="150" y2="85" />
          <line x1="170" y1="150" x2="150" y2="135" />
          <line x1="100" y1="180" x2="100" y2="155" />
          <line x1="30" y1="150" x2="50" y2="135" />
          <line x1="30" y1="70" x2="50" y2="85" />
        </svg>
      </div>

      {/* Discover Button & Bouncing Badges (Bottom Center) */}
      <div className="hidden md:inline-block absolute bottom-8 left-1/2 -translate-x-1/2 border border-[#FB64B6]/20 z-30 rounded-full bg-[#0c0c0c]/85 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        <button className="p-3.5 px-16 text-xs font-orbitron font-bold uppercase tracking-widest text-neutral-200 cursor-pointer hover:bg-[#FB64B6] hover:text-black transition-all duration-300 rounded-full">
          Discover
        </button>
        {/* Floating Badges */}
        <div className="absolute text-[10px] tracking-widest font-orbitron uppercase px-3 py-1 font-black bg-[#FB64B6] text-black right-[-15%] top-5 -rotate-12 rounded-sm shadow-[0_4px_10px_rgba(251,100,182,0.4)]">
          Scroll
        </div>
        <div className="absolute text-[10px] tracking-widest font-orbitron uppercase px-3 py-1 font-black bg-white text-black left-[-15%] top-7 rotate-12 rounded-sm shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
          Projects
        </div>
        <div className="absolute text-[10px] tracking-widest font-orbitron uppercase px-3 py-1 font-black bg-black text-[#FB64B6] border border-[#FB64B6] left-[35%] top-[-14px] rotate-3 rounded-sm shadow-[0_4px_10px_rgba(251,100,182,0.2)]">
          Skills
        </div>
      </div>
    </section>
  );
}

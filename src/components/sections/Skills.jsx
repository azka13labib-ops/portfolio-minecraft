"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".skill-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  const skillItems = [
    {
      name: "Next.js",
      desc: "React framework for production-grade static & server-rendered apps.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,0-11.32,0L136,132.69V104a8,8,0,0,0-16,0v48a8,8,0,0,0,13.66,5.66l36-36A8,8,0,0,0,173.66,106.34Z" />
        </svg>
      ),
    },
    {
      name: "React",
      desc: "Component-based declarative library for building user interfaces.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M224,128a16,16,0,0,1-16,16H144v64a16,16,0,0,1-32,0V144H48a16,16,0,0,1,0-32h64V48a16,16,0,0,1,32,0v64h64A16,16,0,0,1,224,128Z" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      desc: "Elegant MVC PHP framework for robust, scalable backend services.",
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first styling workflow for rapid responsive layouts.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
        </svg>
      ),
    },
    {
      name: "GSAP",
      desc: "Advanced scrolling timelines and high-performance WebGL animations.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M108,128a20,20,0,1,1-20-20A20,20,0,0,1,108,128Zm80-20a20,20,0,1,0,20,20A20,20,0,0,0,188,108Zm-50,56a20,20,0,1,0,20,20A20,20,0,0,0,138,164Z" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      desc: "Relational database system for ACID-compliant structured data schemas.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M200,64H152V40a8,8,0,0,0-16,0V64H88V40A8,8,0,0,0,72,40V64H56A16,16,0,0,0,40,80v96a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V80A16,16,0,0,0,200,64Zm0,112H56V80H200V176Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-white text-black py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center select-none"
    >
      {/* Smooth Wavy SVG Divider (Transition from Black to White) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-99%] pointer-events-none">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,120 600,0 900,100 C1050,150 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col gap-16">
        
        {/* Intro Paragraph (Asymmetrical Typography) */}
        <div className="max-w-4xl">
          <p className="font-mono text-neutral-800 tracking-wider text-base md:text-lg lg:text-xl leading-relaxed">
            This section represents the core{" "}
            <span className="font-caveat font-bold text-[#FB64B6] text-2xl md:text-3xl mx-1 inline-block -rotate-2">
              technologies
            </span>{" "}
            and tools I use to build scalable, high-performance web applications with clean architecture and smooth user experiences.
          </p>
        </div>

        {/* Reusable Skill Card Grid (Jangan Plek Ketiplek) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.03, 
                borderColor: "#FB64B6",
                boxShadow: "0 10px 25px rgba(251, 100, 182, 0.15)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="skill-card border-2 border-neutral-200/80 p-6 rounded-2xl bg-neutral-50/50 backdrop-blur-sm flex flex-col gap-4 cursor-default group"
            >
              <div className="text-neutral-500 group-hover:text-[#FB64B6] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-orbitron font-black text-lg md:text-xl uppercase tracking-wider text-black">
                {item.name}
              </h3>
              <p className="font-mono text-xs md:text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

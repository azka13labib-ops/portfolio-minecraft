"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

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
    // --- FRONT END ---
    {
      name: "Next.js",
      category: "Front End",
      desc: "React framework for production-grade static & server-rendered apps.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12 24A12 12 0 1 0 12 0a12 12 0 0 0 0 24zM16.96 16.59l-6.83-9.15h-2.1v9.12h1.86v-6.6l5.77 7.73a9.98 9.98 0 0 1-5.66 1.73c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10c0 2.22-.72 4.27-1.93 5.92L16.96 16.6zM15.35 15h2v-9.13h-2v9.13z"/>
        </svg>
      ),
    },
    {
      name: "React",
      category: "Front End",
      desc: "Component-based declarative library for building user interfaces.",
      icon: (
        <svg className="w-10 h-10 text-white" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Front End",
      desc: "Utility-first styling workflow for rapid responsive layouts.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      ),
    },
    {
      name: "HTML",
      category: "Front End",
      desc: "Semantic markup for web structure.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 384 512">
          <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.63 127.9H124.28l5.38 61.1h172.93l-15.42 173.3-89.28 27.1-89.26-27.1-4.08-46.7H66.4l7.15 82.2 118.04 35.8 118.03-35.8 22.8-255.4z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      category: "Front End",
      desc: "Cascading style sheets for web presentation.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 384 512">
          <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-41.6-167.3-16.3-9.3-107.2h243.4l1.8-19.9z" />
        </svg>
      ),
    },
    {
      name: "GSAP Animation",
      category: "Front End",
      desc: "Advanced scrolling timelines and high-performance WebGL animations.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 256 256">
          <path d="M108,128a20,20,0,1,1-20-20A20,20,0,0,1,108,128Zm80-20a20,20,0,1,0,20,20A20,20,0,0,0,188,108Zm-50,56a20,20,0,1,0,20,20A20,20,0,0,0,138,164Z" />
        </svg>
      ),
    },
    {
      name: "JavaScript ES6",
      category: "Front End",
      desc: "Modern vanilla JavaScript features and syntax.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 448 512">
          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 36.8 0 59.2 17.1 71.5 39.7l-33.4 20.1c-8.4-13.5-19.8-21.6-37.6-21.6-16.5 0-26.2 7.8-26.2 19.5 0 12.3 12 17.4 28.6 24.6l12.9 5.4c34 14.7 51.4 31.6 51.4 65.8 0 39.7-27.1 56.1-64.8 56.1z" />
        </svg>
      ),
    },
    {
      name: "Zustand",
      category: "Front End",
      desc: "A small, fast and scalable bearbones state-management solution.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M16 3c-1.5 0-2.5 1-2.5 2v1c-1 0-2 0-3 0V5c0-1-1-2-2.5-2C6.5 3 5 4.5 5 6c0 1 .5 2 1 2.5V11c0 3.5 3 6 7 6s7-2.5 7-6V8.5c.5-.5 1-1.5 1-2.5 0-1.5-1.5-3-3-3zm-9.5 2c.8 0 1.5.7 1.5 1.5S7.3 8 6.5 8 5 7.3 5 6.5 5.7 5 6.5 5zm11 0c.8 0 1.5.7 1.5 1.5S18.3 8 17.5 8 16 7.3 16 6.5 16.7 5 17.5 5zM9 13c0 .5-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm8 0c0 .5-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zM12 15c-.8 0-1.5.7-1.5 1.5S11.2 18 12 18s1.5-.7 1.5-1.5S12.8 15 12 15z"/>
        </svg>
      ),
    },
    // --- BACKEND ---
    {
      name: "Node.js",
      category: "Backend",
      desc: "Asynchronous event-driven JavaScript runtime for scalable network applications.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M11.87 0a1.86 1.86 0 0 0-1.74.88L2.09 14.82a1.85 1.85 0 0 0 0 1.76l8.04 13.94c.48.83 1.23 1.26 2.06 1.26a2.18 2.18 0 0 0 1.9-1.07l8.28-14.34a2.23 2.23 0 0 0 0-2.12L14.3 0.28A2.32 2.32 0 0 0 12.27 0h-.4zm-2.09 5.86c1.17 0 1.8.63 1.8 1.85 0 1.26-.65 1.94-1.84 1.94-1.21 0-1.88-.63-1.88-1.92 0-1.28.66-1.87 1.92-1.87zm4.24 0h1.49v5.94h-1.49zm2.46.22c.67-.32 1.55-.4 2.23-.4 1.15 0 1.94.31 2.39 1.14.33.61.37 1.48.37 2.16 0 1.35-.49 2.15-1.15 2.62-.64.45-1.54.58-2.31.58-.63 0-1.47-.07-2.07-.3l.17-1.32c.57.26 1.34.35 1.87.35 1 0 1.91-.4 1.91-1.8 0-1.4-.92-1.82-1.93-1.82-.48 0-1.04.1-1.48.24zm-6.72 1.3h-1.48v5.86H7v-4.49H5.53v4.49H4v-5.86h1.5v1.27h1.5z"/>
        </svg>
      ),
    },
    {
      name: "Laravel",
      category: "Backend",
      desc: "Elegant MVC PHP framework for robust, scalable backend services.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M22.062 18.232l-9.053 4.887c-.643.347-1.375.347-2.018 0l-9.053-4.887c-.612-.33-.978-.931-.978-1.579v-9.339c0-.648.366-1.249.978-1.579L10.991 0.88c.643-.347 1.375-.347 2.018 0l9.053 4.855c.612.33.978.931.978 1.579v9.339c0 .648-.366 1.249-.978 1.579zM10.991 17.5l-6.85-3.696v-5.466l6.85 3.695v5.467zm2.018 0v-5.467l6.85-3.695v5.466l-6.85 3.696zm5.176-10.74l-6.185-3.336-6.185 3.336 6.185 3.336 6.185-3.336z"/>
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      desc: "Relational database system for ACID-compliant structured data schemas.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12.08 0c-4.8 0-7.31 3.55-7.31 7.21 0 4.67 3.51 6.8 6.57 6.8 1.34 0 2.53-.29 3.49-.78l.49-.24c-.04.42-.09.77-.14 1.1-.09.58-.23 1.05-.41 1.41-.21.43-.53.79-1 1.09-.79.52-2.11.83-3.61.83-1.63 0-3-.35-3.83-1.02-.32-.26-.58-.58-.77-.96a4.23 4.23 0 0 1-.36-1.74h-2.1c.07 1.14.33 2.11.8 2.87.69 1.1 1.83 1.93 3.37 2.44A13 13 0 0 0 10.87 20c.45.03.95.05 1.51.05 1.91 0 3.5-.32 4.71-.9 1.54-.74 2.68-1.89 3.29-3.23.46-1.03.68-2.31.68-3.79V5.15C21 2.22 17.61 0 12.08 0zm0 1.94c3.55 0 5.6 1.48 5.6 3.4v4.5c0 1.25-.33 2.12-.86 2.76-.51.62-1.32 1.04-2.36 1.25a13.2 13.2 0 0 1-2.92.29c-2.37 0-4.66-.63-4.66-3.24 0-1.87 2.15-3.67 5.76-3.67.75 0 1.43.1 2.05.27.13.04.3.09.43.15V5.51c0-1.04-1.35-1.92-3.6-1.92-1.57 0-2.82.34-3.5 1.02-.45.45-.73 1.02-.79 1.66h-1.95c0-1 .4-1.95 1.15-2.73 1.05-1.1 2.82-1.6 5.1-1.6z"/>
        </svg>
      ),
    },
    // --- UI/UX ---
    {
      name: "Figma",
      category: "UI/UX",
      desc: "Collaborative interface design tool for wireframing and prototyping.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M8 12a4 4 0 1 1 4-4H8a4 4 0 1 1 4 4z"/>
          <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0z"/>
          <path d="M8 20a4 4 0 1 0 4-4H8v4z"/>
        </svg>
      ),
    },
    {
      name: "Framer",
      category: "UI/UX",
      desc: "Interactive design tool for creating high-fidelity realistic web prototypes.",
      icon: (
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L24 12H12l-12 12V12h12L0 0z"/>
        </svg>
      ),
    },
  ];

  const categoryRows = [
    {
      id: "Front End",
      title: "Frontend",
      desc: "Modern interactive interfaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <circle cx="13.5" cy="6.5" r=".5"/>
          <circle cx="17.5" cy="10.5" r=".5"/>
          <circle cx="8.5" cy="7.5" r=".5"/>
          <circle cx="6.5" cy="12.5" r=".5"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      )
    },
    {
      id: "Backend",
      title: "Backend",
      desc: "Robust and scalable APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      )
    },
    {
      id: "UI/UX",
      title: "UI/UX",
      desc: "Intelligent and innovative solutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-[#FB64B6] text-white py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Smooth Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-99%] pointer-events-none">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,120 600,0 900,100 C1050,150 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="#FB64B6"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-8 items-start">
        
        {/* Left Column: Intro Text & Massive Typography */}
        <div className="xl:col-span-5 flex flex-col relative pt-8">
          <p className="font-mono text-black/80 tracking-wider text-base md:text-lg leading-relaxed max-w-md">
            This section represents the core{" "}
            <span className="font-caveat font-bold text-white text-2xl md:text-3xl mx-1 inline-block -rotate-2 mix-blend-difference">
              technologies
            </span>{" "}
            and tools I use to build scalable, high-performance web applications with clean architecture and smooth user experiences.
          </p>
          
          <div className="mt-16 md:mt-24 relative inline-block self-start">
            <h2 
              className="font-black text-black leading-[0.8] tracking-tighter uppercase"
              style={{ fontSize: "clamp(5rem, 18vw, 12rem)", transform: "scaleY(1.3)", transformOrigin: "bottom" }}
            >
              SKILLS
            </h2>
            
            {/* Pink Rotating Badge Overlapping the Text */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 bg-[#FB64B6] rounded-full flex items-center justify-center shadow-2xl border-[6px] border-black z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-black overflow-visible">
                <path id="circlePath" fill="none" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text className="text-[12px] font-black tracking-[0.2em] font-mono uppercase" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    CREATIVE DEVELOPER • EXPERT LEVEL • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Accordion Categories */}
        <div className="xl:col-span-7 flex flex-col justify-center xl:pl-16 w-full">
          {categoryRows.map((cat) => {
            return (
              <div key={cat.id} className="border-b-2 border-black/20 overflow-hidden w-full">
                <button 
                  onClick={() => setActiveModal(cat.id)}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left group hover:bg-black/5 transition-all duration-300 px-4 -mx-4 rounded-2xl"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="text-black p-3 bg-white/20 rounded-xl shadow-inner border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-orbitron font-black text-3xl md:text-4xl lg:text-5xl text-black tracking-tight">{cat.title}</h3>
                      <p className="font-mono text-black/70 text-sm md:text-base mt-2 font-semibold">{cat.desc}</p>
                    </div>
                  </div>
                  <div className={`text-black p-3 rounded-full border-2 border-black transition-all duration-500 shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Dark Theme Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Background Watermark Letter */}
              <div className="absolute right-0 bottom-0 text-[40rem] leading-none font-black text-white/1.5 select-none pointer-events-none translate-x-[15%] translate-y-[15%]">
                {activeModal.charAt(0)}
              </div>

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 z-10 bg-black/20">
                <h3 className="font-orbitron font-black text-white tracking-[0.2em] uppercase text-xl md:text-2xl">
                  {activeModal.toUpperCase()} SKILLS
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="text-white/50 hover:text-white transition-colors p-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Scrollable List) */}
              <div className="flex-1 overflow-y-auto z-10 scrollbar-hide">
                <div className="flex flex-col py-4 px-2 md:px-6">
                  {skillItems.filter(item => item.category === activeModal).map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-6 md:gap-8 px-6 py-5 md:py-6 border-b border-white/5 hover:bg-white/3 transition-colors group cursor-default"
                    >
                      <div className="text-white/20 group-hover:text-white transition-colors duration-300 w-12 h-12 shrink-0 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl text-white/90 group-hover:text-white transition-colors tracking-tight">
                        {item.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

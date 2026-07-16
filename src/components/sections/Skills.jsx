"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

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
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,0-11.32,0L136,132.69V104a8,8,0,0,0-16,0v48a8,8,0,0,0,13.66,5.66l36-36A8,8,0,0,0,173.66,106.34Z" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "Front End",
      desc: "Component-based declarative library for building user interfaces.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M224,128a16,16,0,0,1-16,16H144v64a16,16,0,0,1-32,0V144H48a16,16,0,0,1,0-32h64V48a16,16,0,0,1,32,0v64h64A16,16,0,0,1,224,128Z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Front End",
      desc: "Utility-first styling workflow for rapid responsive layouts.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
        </svg>
      ),
    },
    {
      name: "GSAP",
      category: "Front End",
      desc: "Advanced scrolling timelines and high-performance WebGL animations.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M108,128a20,20,0,1,1-20-20A20,20,0,0,1,108,128Zm80-20a20,20,0,1,0,20,20A20,20,0,0,0,188,108Zm-50,56a20,20,0,1,0,20,20A20,20,0,0,0,138,164Z" />
        </svg>
      ),
    },
    // --- BACKEND ---
    {
      name: "Node.js",
      category: "Backend",
      desc: "Asynchronous event-driven JavaScript runtime for scalable network applications.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M221.72,74.56l-85.33-49.27a15.93,15.93,0,0,0-16,0L35,74.56A15.94,15.94,0,0,0,27.08,88.42v98.54A15.94,15.94,0,0,0,35,200.82l85.33,49.26a15.93,15.93,0,0,0,16,0l85.34-49.26A15.94,15.94,0,0,0,229.75,187V88.42A15.94,15.94,0,0,0,221.72,74.56Zm-9.15,108.93-85.33,49.26-85.34-49.26V88.42l85.34-49.27L212.57,88.42Z" />
        </svg>
      ),
    },
    {
      name: "Laravel",
      category: "Backend",
      desc: "Elegant MVC PHP framework for robust, scalable backend services.",
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      desc: "Relational database system for ACID-compliant structured data schemas.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M200,64H152V40a8,8,0,0,0-16,0V64H88V40A8,8,0,0,0,72,40V64H56A16,16,0,0,0,40,80v96a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V80A16,16,0,0,0,200,64Zm0,112H56V80H200V176Z" />
        </svg>
      ),
    },
    // --- UI/UX ---
    {
      name: "Figma",
      category: "UI/UX",
      desc: "Collaborative interface design tool for wireframing and prototyping.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M168,136a40,40,0,1,1-40-40A40,40,0,0,1,168,136Zm-40,40a40,40,0,1,0-40-40h40Zm-40-80a40,40,0,1,0,40,40V96H88a40,40,0,0,0-40,40Z" />
        </svg>
      ),
    },
    {
      name: "Framer",
      category: "UI/UX",
      desc: "Interactive design tool for creating high-fidelity realistic web prototypes.",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 256 256">
          <path d="M128,16L208,96H48ZM48,96L128,176H48ZM208,96L128,176H208V176L128,256V176Z" />
        </svg>
      ),
    },
  ];

  const categories = ["All", "Front End", "Backend", "UI/UX"];

  const filteredItems = skillItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-[#FB64B6] text-white py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center select-none"
    >
      {/* Smooth Wavy SVG Divider (Transition from Black to Pink) */}
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

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col gap-16">
        
        {/* Intro Paragraph (Asymmetrical Typography) */}
        <div className="max-w-4xl">
          <p className="font-mono text-white/95 tracking-wider text-base md:text-lg lg:text-xl leading-relaxed">
            This section represents the core{" "}
            <span className="font-caveat font-bold text-black text-2xl md:text-3xl mx-1 inline-block -rotate-2">
              technologies
            </span>{" "}
            and tools I use to build scalable, high-performance web applications with clean architecture and smooth user experiences.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 my-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 rounded-full font-mono text-sm md:text-base font-bold tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "text-black shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
                  : "text-white/80 hover:text-white border border-white/30 hover:border-white/60 bg-transparent"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Reusable Skill Card Grid (Solid White on Pink) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 20 }}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "#000000",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                }}
                className="skill-card border-2 border-transparent p-6 rounded-2xl bg-white shadow-xl flex flex-col gap-4 cursor-default group"
              >
                <div className="text-neutral-400 group-hover:text-black transition-colors duration-300">
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
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

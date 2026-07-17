"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Ngodink E-Commerce",
    description: "A full-stack e-commerce platform built with Next.js, Stripe, and PostgreSQL. Features real-time inventory management and a sleek admin dashboard.",
    tech: ["Next.js", "React", "Tailwind", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Cyber Security Dashboard",
    description: "A real-time monitoring dashboard for network traffic. Utilizes WebSockets and GSAP for high-performance data visualizations.",
    tech: ["React", "GSAP", "Node.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Creative Agency Website",
    description: "An award-winning agency portfolio featuring crazy scroll animations, custom cursors, and WebGL elements.",
    tech: ["Three.js", "GSAP", "Next.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Lara-Task API",
    description: "A robust backend RESTful API built with Laravel for task management, featuring JWT authentication and Redis caching.",
    tech: ["Laravel", "PHP", "MySQL", "Redis"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".project-card");
    
    let ctx = gsap.context(() => {
      // Small timeout to ensure DOM is fully rendered for accurate width calculation
      setTimeout(() => {
        if(!scrollWrapperRef.current) return;
        
        const totalScrollWidth = scrollWrapperRef.current.scrollWidth - window.innerWidth;
        
        gsap.to(cards, {
          x: () => -totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + totalScrollWidth,
            invalidateOnRefresh: true,
          }
        });
      }, 100);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Pink Wave Divider (extends Skills section into Projects) */}
      <div className="absolute top-[-1px] left-0 w-full leading-none pointer-events-none z-0">
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,40 C250,160 400,180 600,180 C750,180 800,60 950,60 C1100,60 1150,160 1200,180 L1200,0 Z"
            fill="#FB64B6"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="absolute top-24 md:top-32 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-widest uppercase">
          Featured <span className="text-[#FB64B6] border-b-4 border-[#FB64B6]">Projects</span>
        </h2>
        <p className="font-mono text-neutral-400 mt-4 max-w-xl text-sm md:text-base">
          Scroll down to explore my recent work. These projects demonstrate my ability to architect scalable solutions and design immersive experiences.
        </p>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div 
        ref={scrollWrapperRef}
        className="flex w-fit items-center h-full px-6 md:px-12 lg:px-24 pt-40 pb-16 gap-8 md:gap-16"
      >
        {projectsData.map((project, idx) => (
          <div 
            key={project.id} 
            className="project-card relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 group rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-10"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            
            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-10 transition-all duration-500">
              {/* Project Number */}
              <div className="absolute top-8 right-8 font-orbitron font-black text-6xl text-white/5 select-none pointer-events-none">
                0{idx + 1}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-[10px] md:text-xs font-mono font-bold bg-[#FB64B6] text-black rounded-full uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>

              {/* Title & Desc */}
              <h3 className="font-orbitron font-black text-3xl md:text-5xl mb-4 group-hover:text-[#FB64B6] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-mono text-neutral-300 text-xs md:text-sm mb-8 max-w-md line-clamp-3">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#FB64B6] text-black font-bold font-orbitron text-xs md:text-sm hover:bg-white transition-colors rounded-full shadow-[0_0_15px_rgba(251,100,182,0.4)]">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white border border-white/20 font-bold font-orbitron text-xs md:text-sm hover:bg-white/10 transition-colors rounded-full">
                  <FaGithub /> Source
                </a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[#FB64B6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}

        {/* Dummy spacer at the end to allow the last card to reach the center */}
        <div className="w-[10vw] shrink-0"></div>
      </div>
    </section>
  );
}

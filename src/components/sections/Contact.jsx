"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Efek parallax "nimpa" (overlap): Membuat section Projects turun lebih lambat sehingga Contact menutupinya
      gsap.to("#projects", {
        y: 200, // Geser ke bawah sedikit agar Contact menimpanya dengan efek parallax
        ease: "none",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      });

      // Animasi munculnya elemen-elemen di Contact
      gsap.from(".contact-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 z-20"
      style={{
        boxShadow: "0 -20px 50px rgba(0,0,0,0.5)"
      }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & Socials */}
        <div className="flex flex-col items-start text-left">
          <h2 className="contact-content text-5xl md:text-7xl font-black mb-6 text-white font-orbitron tracking-tight">
            Let&apos;s Talk!
          </h2>
          <p className="contact-content text-lg md:text-xl text-neutral-400 mb-10 max-w-lg font-mono">
            Punya ide proyek menarik atau peluang kerja sama? Saya selalu terbuka untuk diskusi baru. Kirimkan pesan melalui form di samping, atau hubungi saya via email dan media sosial!
          </p>

          <div className="contact-content flex flex-col gap-6 mb-12">
            <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-neutral-300 hover:text-[#FB64B6] transition-colors group">
              <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 group-hover:border-[#FB64B6] transition-all">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-lg font-mono">hello@azkalabib.com</span>
            </a>
          </div>

          <div className="contact-content flex gap-4">
            <a href="https://github.com/azka13labib-ops" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#FB64B6] hover:bg-[#FB64B6]/10 transition-all text-2xl">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#FB64B6] hover:bg-[#FB64B6]/10 transition-all text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#FB64B6] hover:bg-[#FB64B6]/10 transition-all text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-content relative w-full bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-xl">
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="relative flex flex-col gap-6 z-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Nama Anda</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#111] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Alamat Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#111] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Pesan</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tuliskan ide atau pertanyaan Anda di sini..."
                className="w-full bg-[#111] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder-neutral-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 w-full relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-black transition-all duration-300 bg-white border border-transparent rounded-xl hover:bg-neutral-200 focus:outline-none group"
            >
              <span className="relative flex items-center gap-3 font-orbitron tracking-widest uppercase">
                <FaEnvelope /> Kirim Pesan
              </span>
            </button>
          </form>
        </div>
      </div>
      
      <footer className="absolute bottom-8 text-neutral-600 text-sm font-mono tracking-widest text-center w-full">
        <p>© {new Date().getFullYear()} AZKA LABIB. ALL RIGHTS RESERVED.</p>
      </footer>
    </section>
  );
}

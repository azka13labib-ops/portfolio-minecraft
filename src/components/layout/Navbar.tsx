'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // 150px offset to trigger earlier when scrolling down
          if (rect.top <= 150) {
            const activeLink = NAV_LINKS.find(link => link.href === `#${section}`)
            if (activeLink) setActiveSection(activeLink.label)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handler)
    // Run once on mount to set correct initial state
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-colors duration-200',
      scrolled ? 'bg-mc-void/90 backdrop-blur-md border-b border-mc-cobble' : 'bg-transparent'
    )}>
      <nav className='max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between'>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className='font-pixel text-xl sm:text-2xl tracking-tight text-mc-lava drop-shadow-[0_0_8px_rgba(255,102,0,0.6)]'>
            <span className='text-white'>Azka</span> Labib
          </span>
        </div>

        {/* Desktop */}
        <ul className='hidden lg:flex items-center gap-2 xl:gap-4'>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActiveSection(link.label)}
                className={cn(
                  'text-[10px] xl:text-xs font-pixel transition-colors hover:text-mc-lava tracking-wider px-2.5 py-1.5',
                  activeSection === link.label
                    ? 'text-mc-lava bg-[#2a1100]/20 border-b-2 border-mc-lava rounded-sm' 
                    : 'text-[#d3b58d]'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className='lg:hidden text-mc-gray hover:text-mc-white transition-colors p-2'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='lg:hidden bg-mc-obsidian border-b border-mc-cobble px-6 py-4'>
          <ul className='flex flex-col gap-4'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'font-pixel text-xs hover:text-mc-lava transition-colors uppercase tracking-wider',
                    activeSection === link.label ? 'text-mc-lava' : 'text-mc-gray'
                  )}
                  onClick={() => {
                    setMenuOpen(false)
                    setActiveSection(link.label)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

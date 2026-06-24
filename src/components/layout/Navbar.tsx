'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stats', href: '#stats' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-colors duration-200',
      scrolled ? 'bg-mc-void/90 backdrop-blur-md border-b border-mc-cobble' : 'bg-transparent'
    )}>
      <nav className='max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between'>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className='font-pixel text-xl sm:text-2xl tracking-tight drop-shadow-md'>
            <span className="text-mc-white">Azka</span>
            <span className="text-mc-lava">Labib</span>
          </span>
        </div>

        {/* Desktop */}
        <ul className='hidden lg:flex items-center gap-5 xl:gap-8'>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-[10px] xl:text-xs font-pixel transition-colors hover:text-mc-lava uppercase tracking-wider',
                  link.label === 'Home' ? 'text-mc-lava border-b-2 border-mc-lava pb-1' : 'text-mc-white/80'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className='lg:hidden text-mc-gray hover:text-mc-white transition-colors'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className='font-pixel text-sm'>{menuOpen ? '[X]' : '[≡]'}</span>
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
                  className='font-pixel text-xs text-mc-gray hover:text-mc-lava transition-colors uppercase tracking-wider'
                  onClick={() => setMenuOpen(false)}
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

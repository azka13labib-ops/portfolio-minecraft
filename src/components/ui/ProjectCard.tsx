'use client'

import { Project } from '@/types'
import { cn } from '@/lib/utils'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  if (featured) {
    return (
      <div className={cn(
        'group relative flex flex-col md:flex-row overflow-hidden bg-mc-obsidian border border-white/5 hover:border-mc-lava/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,102,0,0.12)]',
        className
      )}>
        {/* Left: Big image */}
        <div className='relative md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-[#111] flex-shrink-0'>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover brightness-80 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700'
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-[#111]'>
              <div className='font-pixel text-mc-gray/30 text-xs'>no image</div>
            </div>
          )}
          {/* Dark vignette overlay */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-mc-obsidian md:block hidden' />
        </div>

        {/* Right: Content */}
        <div className='relative flex flex-col justify-center gap-5 p-8 md:p-10 flex-1'>
          {/* Featured label */}
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-mc-lava rounded-full animate-pulse' />
            <span className='font-pixel text-[9px] text-mc-lava uppercase tracking-[0.2em]'>Featured Project</span>
          </div>

          <h3 className='font-pixel text-mc-white text-2xl md:text-3xl leading-tight group-hover:text-mc-gold transition-colors duration-300'>
            {project.title}
          </h3>

          {/* Description box */}
          <div className='relative bg-[#111]/60 border border-white/5 p-4'>
            <p className='text-mc-gray text-sm leading-relaxed'>
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span key={tag} className='font-pixel text-[9px] text-mc-gray border border-mc-cobble/40 px-2.5 py-1 uppercase tracking-wider hover:border-mc-lava/50 hover:text-mc-gold transition-colors cursor-default'>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex items-center gap-4 pt-1'>
            {project.github && (
              <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 font-pixel text-[10px] text-mc-gray hover:text-white transition-colors group/link'>
                <FaGithub className='w-4 h-4' />
                <span className='group-hover/link:underline underline-offset-4'>Source</span>
              </a>
            )}
            {project.url && (
              <a href={project.url} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 font-pixel text-[10px] text-mc-lava hover:text-white transition-colors group/link'>
                <FaExternalLinkAlt className='w-3.5 h-3.5' />
                <span className='group-hover/link:underline underline-offset-4'>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Lava glow bar on left edge */}
        <div className='absolute top-0 left-0 bottom-0 w-[3px] bg-mc-lava/0 group-hover:bg-mc-lava transition-colors duration-500' />
      </div>
    )
  }

  // Regular card
  return (
    <div className={cn(
      'group relative flex flex-col h-full overflow-hidden bg-mc-obsidian border border-white/5 hover:border-mc-lava/40 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_24px_rgba(255,102,0,0.08)]',
      className
    )}>
      {/* Thumbnail */}
      <div className='relative w-full aspect-video overflow-hidden bg-[#0d0d0d]'>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            {/* Pixel grid placeholder */}
            <div className='grid grid-cols-4 gap-1 opacity-20'>
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={cn('w-4 h-4', i % 3 === 0 ? 'bg-mc-lava' : i % 3 === 1 ? 'bg-mc-cobble' : 'bg-mc-obsidian border border-white/10')} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom gradient for readability */}
        <div className='absolute inset-0 bg-gradient-to-t from-mc-obsidian via-mc-obsidian/20 to-transparent' />

        {/* Hover-reveal link buttons */}
        <div className='absolute top-3 right-3 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
          {project.github && (
            <a href={project.github} target='_blank' rel='noopener noreferrer' onClick={e => e.stopPropagation()}
              className='w-8 h-8 flex items-center justify-center bg-black/80 border border-white/10 text-mc-gray hover:text-white hover:border-mc-lava transition-colors backdrop-blur-sm'>
              <FaGithub className='w-3.5 h-3.5' />
            </a>
          )}
          {project.url && (
            <a href={project.url} target='_blank' rel='noopener noreferrer' onClick={e => e.stopPropagation()}
              className='w-8 h-8 flex items-center justify-center bg-black/80 border border-white/10 text-mc-gray hover:text-mc-lava hover:border-mc-lava transition-colors backdrop-blur-sm'>
              <FaExternalLinkAlt className='w-3 h-3' />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col flex-1 p-5 gap-3'>
        <h3 className='font-pixel text-mc-white text-sm leading-snug group-hover:text-mc-gold transition-colors duration-300'>
          {project.title}
        </h3>

        <p className='text-mc-gray/70 text-sm leading-relaxed flex-1 line-clamp-2'>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-1.5 pt-1 border-t border-white/5'>
          {project.tags.map((tag) => (
            <span key={tag} className='font-pixel text-[8px] text-mc-gray/60 uppercase tracking-wider'>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className='h-[2px] w-0 group-hover:w-full bg-mc-lava transition-all duration-500 ease-out' />
    </div>
  )
}

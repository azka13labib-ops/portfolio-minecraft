import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mc-void':       '#0a0a0a',
        'mc-obsidian':   '#1a1a1a',
        'mc-stone':      '#2d2d2d',
        'mc-cobble':     '#3c3c3c',
        'mc-lava':       '#ff6600',
        'mc-lava-light': '#ff8533',
        'mc-lava-dark':  '#cc5200',
        'mc-grass':      '#5d8c3e',
        'mc-dirt':       '#7a5230',
        'mc-gold':       '#fbbf24',
        'mc-sky':        '#6ebee8',
        'mc-white':      '#f5f5f5',
        'mc-gray':       '#a0a0a0',
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

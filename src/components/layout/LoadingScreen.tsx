'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className='fixed inset-0 z-50 bg-mc-void flex flex-col items-center justify-center gap-4'
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='font-pixel text-mc-white text-lg'>Loading terrain...</p>
          <div className='w-48 h-2 bg-mc-stone border border-mc-cobble overflow-hidden'>
            <motion.div
              className='h-full bg-mc-lava'
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

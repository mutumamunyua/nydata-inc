'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  children: React.ReactNode
}

export default function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <motion.span
      className="text-[#d4b42c]"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 6,        // total time for one fade-in + fade-out cycle
        ease: 'easeInOut',   // smooth easing
        repeat: Infinity,    // loop forever
        repeatType: 'loop',  // after fading out, immediately start fading in again
      }}
    >
      {children}
    </motion.span>
  )
}
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children, delay = 0, direction = 'up', duration = 0.6, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  const { x, y } = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

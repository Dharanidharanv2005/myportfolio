"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  size: number
  color: string
  duration: number
  delay: number
}

export function ScrollBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const colors = [
      "rgba(168, 85, 247, 0.4)", // purple
      "rgba(236, 72, 153, 0.4)", // pink
      "rgba(59, 130, 246, 0.4)", // blue
      "rgba(251, 191, 36, 0.4)", // yellow
      "rgba(34, 211, 238, 0.4)", // cyan
    ]

    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 20 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }))

    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}, transparent)`,
            bottom: 0,
          }}
          animate={{
            y: [0, -window.innerHeight - bubble.size],
            x: [0, 30, -30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            y: {
              duration: 15 + bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            x: {
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            scale: {
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  )
}

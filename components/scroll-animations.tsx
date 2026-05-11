"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

type Star = {
  id: number
  left: string
  top: string
  duration: number
  delay: number
  color: string
}

const COLORS = ["#ec4899", "#8b5cf6", "#06b6d4", "#f59e0b"]

export function ScrollAnimations() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Initial floating particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
    setParticles(initialParticles)

    // Glitter stars (ONLY once – no hydration issue)
    const glitterStars: Star[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))
    setStars(glitterStars)

    const handleScroll = () => {
      const newParticles: Particle[] = Array.from({ length: 3 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: window.scrollY + window.innerHeight,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 2 + 1.5,
        delay: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))

      setParticles((prev) => [...prev.slice(-30), ...newParticles])
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
            animate={{
              x: p.x + (Math.random() - 0.5) * 100,
              y: p.y - 200,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "easeOut",
            }}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Glitter Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: star.left, top: star.top }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path
              d="M4 0L4.5 3.5L8 4L4.5 4.5L4 8L3.5 4.5L0 4L3.5 3.5Z"
              fill={star.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Objective() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">

        {/* Slow liquid background */}
        <motion.div
          animate={{
            borderRadius: ["40%", "60%", "40%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-24 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-[120px]"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // elastic feel
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="
            relative p-8 md:p-12 rounded-3xl
            bg-white/18 backdrop-blur-2xl
            border border-white/25
            shadow-[0_35px_100px_-25px_rgba(99,102,241,0.45)]
            overflow-hidden
          "
        >
          {/* Liquid reveal mask */}
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={
              isInView
                ? { clipPath: "circle(150% at 50% 50%)" }
                : {}
            }
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-transparent"
          />

          {/* Subtle inner glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/10 via-cyan-400/10 to-pink-400/10"
          />

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="
              relative text-3xl md:text-4xl font-bold mb-6
              text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]
            "
          >
            Career Objective
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="
              relative text-lg text-white/95 leading-relaxed font-medium
              drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)]
            "
          >
            Aspiring Full-Stack Developer skilled in ReactJS, NodeJS, Python, and AI/ML,
            seeking opportunities to contribute to software development, database management,
            and AI-powered solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

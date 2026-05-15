"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award } from "lucide-react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const achievements = [
    {
      title: "FixForward Ideathon 2026",
      prize: "Finalist",
      project: "Recognized for innovation in Round 2",
      institution: "HYRUP FixForward Ideathon",
      icon: Award,
      color: "from-orange-400 to-red-500",
      medal: "🏆",
      certificate: "/achievement-fixforward.png",
    },
  ]

  return (
    <section
      id="achievements"
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950"
    >
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 text-5xl md:text-6xl font-black
          bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
          bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-1 gap-10">
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.certificate}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow */}
              <motion.div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${achievement.color} blur-xl`}
                animate={{
                  opacity: hoveredIndex === index ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="
                relative p-8 rounded-3xl h-full
                bg-slate-900/90 backdrop-blur-2xl
                border border-white/10
                shadow-[0_20px_70px_-15px_rgba(0,0,0,0.9)]
                overflow-hidden
              ">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* Top */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color}`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl">{achievement.medal}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>

                  <p className={`text-xl font-semibold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.prize}
                  </p>

                  <p className="text-gray-300 italic mb-4">
                    "{achievement.project}"
                  </p>

                  <p className="text-sm text-gray-400 mb-6">
                    {achievement.institution}
                  </p>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* 🔽 VIEW CERTIFICATE – FIXED AT BOTTOM */}
                  <motion.div
                    className="pt-4 border-t border-white/10 text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
                  >
                    <motion.span
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400"
                      animate={{
                        x: hoveredIndex === index ? [0, 6, 0] : 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredIndex === index ? Infinity : 0,
                      }}
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </motion.div>

                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

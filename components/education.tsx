"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.E. Computer Science and Design",
      institution: "Kongu Engineering College",
      score: "CGPA: 7.99 (till 5th sem) | 2023 - 2027",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Bharathi Vidhyalaya Matric Hr Sec School",
      score: "HSC - 86% | 2023",
      icon: BookOpen,
    },
  ]

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4
          bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
          bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* SUBTITLE – WHITE & VISIBLE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="
            text-center mb-20
            text-white font-medium
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]
          "
        >
          Academic journey and achievements
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px]
            bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 rounded-full"
          />

          <div className="space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                    : {}
                }
                transition={{ delay: index * 0.4, duration: 0.8 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'
                }`}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.4 + 0.2, type: 'spring' }}
                  className="absolute left-1/2 -translate-x-1/2
                  w-16 h-16 rounded-full bg-white shadow-xl
                  flex items-center justify-center border-2 border-purple-300 z-10"
                >
                  <edu.icon className="w-8 h-8 text-purple-600" />
                </motion.div>

                {/* Card */}
                <div className="w-full max-w-md bg-white/80 backdrop-blur-xl
                border border-purple-200 rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>

                  {edu.institution && (
                    <p className="text-gray-600 mb-2">
                      {edu.institution}
                    </p>
                  )}

                  <p className="text-xl font-semibold text-purple-600">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

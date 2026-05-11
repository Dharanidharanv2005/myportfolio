"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText } from "lucide-react"

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCert, setActiveCert] = useState<string | null>(null)

  const certifications = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      year: "2024-25",
      icon: "🍃",
      image: "/certificate1.jpg",
    },
    {
      title: "Oracle Certified Professional",
      issuer: "Oracle",
      year: "2024-25",
      icon: "🔴",
      image: "/certificate2.jpg",
    },
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 
          bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.25 }}
              whileHover={{ scale: 1.05, rotateY: 6 }}
              className="relative group"
            >
              {/* Neon Glow */}
              <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-r from-purple-600/30 to-pink-600/30 
              blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Glass Card */}
              <div className="relative p-8 rounded-2xl 
              bg-gradient-to-br from-black/60 to-black/30 
              backdrop-blur-2xl border border-purple-500/30
              shadow-[0_0_40px_rgba(168,85,247,0.25)]
              transition-all duration-500 flex flex-col">

                <motion.div
                  className="text-5xl mb-5"
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  transition={{ type: "spring" }}
                >
                  {cert.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {cert.title}
                </h3>

                <p className="text-purple-200 mb-1">
                  {cert.issuer}
                </p>

                <p className="text-sm text-pink-400 font-semibold mb-6">
                  {cert.year}
                </p>

                <button
                  onClick={() => setActiveCert(cert.image)}
                  className="w-full mt-auto flex items-center justify-center gap-2 py-3 rounded-xl
                  bg-gradient-to-r from-purple-600 to-pink-600
                  text-white font-semibold shadow-lg
                  hover:shadow-pink-500/40 hover:scale-[1.04]
                  transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-14 p-8 rounded-2xl
          bg-gradient-to-br from-black/70 to-black/40
          backdrop-blur-2xl border border-purple-500/40
          shadow-[0_0_40px_rgba(236,72,153,0.25)]"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Additional Contributions
          </h3>
          <p className="text-lg text-purple-200 leading-relaxed font-medium">
            Executive Member of the RRC Club and CSI Member at KEC (2024–2025)
          </p>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="relative bg-gradient-to-br from-black/80 to-black/50 
            backdrop-blur-2xl border border-purple-500/40
            rounded-2xl p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-3 right-3 text-xl font-bold text-gray-300 hover:text-red-500"
            >
              ✕
            </button>

            <img
              src={activeCert}
              alt="Certificate"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

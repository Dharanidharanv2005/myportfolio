"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Code, Download, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const fullName = "Srimathi Senthil" // single space between names
  const [displayedName, setDisplayedName] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + fullName[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50], scale: [1, 1.4, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent inline-flex items-center gap-1">
                {displayedName.split("").map((letter, index) => (
                  <motion.span key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mt-3 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] font-semibold">
              Aspiring Full-Stack Developer
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-white text-base md:text-lg">
              <a href="tel:+917305587479" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <Phone className="w-5 h-5" /> +91 7305587479
              </a>
              <a href="mailto:srissa2006@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <Mail className="w-5 h-5" /> srissa2006@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/srimathi-senthil-a6354037b" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Srimathi2036-sm" target="_blank" className="hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Srimathi23CSR214/" target="_blank" className="hover:text-yellow-400 transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center mt-6 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Srimathi Senthil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-6 mt-6 flex-wrap justify-center">
              <a href="/resume.pdf.pdf" download>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white">
                  <Download className="w-4 h-4" /> Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  <MessageCircle className="w-4 h-4" /> Let's Chat
                </Button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

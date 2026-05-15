"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Sparkles, Star, Zap, ChevronLeft, ChevronRight } from "lucide-react"

export function AdditionalContributions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const contributions = [
    {
      title: "Gender Equality Club",
      role: "Secretary",
      college: "Kongu Engineering College",
      date: "August 2025",
      image: "/additional-contribution-1.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Gender Equality Club",
      role: "Secretary",
      college: "Kongu Engineering College",
      date: "August 2025",
      image: "/additional-contribution-2.png",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Gender Equality Club",
      role: "Secretary",
      college: "Kongu Engineering College",
      date: "August 2025",
      image: "/additional-contribution-3.png",
      gradient: "from-rose-500 to-purple-500",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % contributions.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isPaused, contributions.length])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = contributions.length - 1
      if (next >= contributions.length) next = 0
      return next
    })
  }

  // Floating particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
  }))

  const currentContribution = contributions[currentIndex]

  return (
    <section 
      id="additional-contributions" 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-10 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -50, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 70, 0],
          y: [0, -70, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          {/* Orbiting icons */}
          {[Star, Zap, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10 - i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: `${100 + i * 30}px 0px`,
              }}
            >
              <Icon className="w-4 h-4 text-purple-400 opacity-50" />
            </motion.div>
          ))}

          <motion.div
            className="inline-block relative"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-yellow-400" />
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Contributions
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-1 w-40 mx-auto mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Carousel Cards */}
          <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: "2000px" }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                className="absolute w-full max-w-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="block"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Animated outer glow */}
                    <motion.div
                      className={`absolute -inset-3 bg-gradient-to-br ${currentContribution.gradient} rounded-3xl blur-2xl`}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Rotating border gradient */}
                    <motion.div
                      className="absolute -inset-1 rounded-3xl opacity-50"
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${currentContribution.gradient.split(' ')[3]}, transparent)`,
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <motion.div
                      className="relative rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden"
                    >
                      {/* Image with effects */}
                      <div className="h-80 overflow-hidden relative">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${currentContribution.gradient} opacity-20 z-10`}
                        />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 z-20"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />

                        <motion.img
                          src={currentContribution.image}
                          alt={currentContribution.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                        />

                        {/* Floating sparkles */}
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            initial={{
                              x: Math.random() * 100 + "%",
                              y: Math.random() * 100 + "%",
                              opacity: 0,
                            }}
                            animate={{
                              y: [null, "-100%"],
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <motion.div
                          className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${currentContribution.gradient} opacity-10 blur-3xl rounded-full`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />

                        <motion.h3 
                          className="text-3xl font-bold mb-2 text-white"
                          animate={{
                            backgroundPosition: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          {currentContribution.title}
                        </motion.h3>

                        <motion.p 
                          className="text-lg text-gray-300 mb-2 font-semibold"
                          animate={{
                            opacity: [1, 0.85, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          Role: {currentContribution.role}
                        </motion.p>

                        <motion.p 
                          className="text-base text-purple-300 mb-2 font-medium"
                          animate={{
                            opacity: [1, 0.85, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          {currentContribution.date}
                        </motion.p>

                        <motion.p 
                          className="text-base text-gray-400"
                          animate={{
                            opacity: [1, 0.85, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          {currentContribution.college}
                        </motion.p>
                      </div>

                      {/* Contribution number */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        {String(currentIndex + 1).padStart(2, '0')}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination indicators */}
          <motion.div 
            className="flex justify-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            {contributions.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Sparkles, Github, Star, Code, Zap, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projects = [
    {
      title: "Job Application Portal",
      description:
        "Developed a MERN Stack portal connecting 100+ recruiters and candidates, improving recruitment efficiency.",
      tech: ["ReactJS", "NodeJS", "MongoDB"],
      image: "/job-portal-dashboard-interface.jpg",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/Srimathi2036-sm/job-portal",
    },
    {
      title: "Password Manager",
      description: "MERN Stack – Implemented encrypted credential storage supporting 500+ users.",
      tech: ["ReactJS", "NodeJS", "Encryption"],
      image: "/password-manager-security-interface.jpg",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Srimathi2036-sm/password-manager",
    },
    {
      title: "Visualizing Math AI for Smarter Learning",
      description:
        "AI math learning platform with 19 features like Gamified, Quiz, Voice Generation, step-by-step explanation.",
      tech: ["ReactJS", "LLaMA Model", "RAG Model"],
      image: "/ai-education-math-learning-platform.jpg",
      gradient: "from-green-500 to-emerald-500",
      github: "https://github.com/Srimathi2036-sm/visualizing-math-ai",
    },
    {
      title: "Food Waste Management System (SurplusSync)",
      description: "AI-powered platform connecting donors and receivers.",
      tech: ["ReactJS", "Python", "MySQL"],
      image: "/food-donation-platform-interface.jpg",
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/Srimathi2036-sm/surplus-sync",
    },
    {
      title: "Emotion Detection from Text",
      description: "Developed an AI-powered system to detect emotions from text and visualize results in Excel.",
      tech: ["Python", "Gradio", "T5 Model"],
      image: "/emotion-detection-ai-visualization.jpg",
      gradient: "from-pink-500 to-rose-500",
      github: "https://github.com/Srimathi2036-sm/emotion-detection",
    },
    {
      title: "AI Grammar & Spelling Corrector",
      description:
        "Built a GenAI system that can automatically correct grammar and spelling mistakes in any user-given text.",
      tech: ["Python", "Gradio", "T5 Model", "Pandas"],
      image: "/grammar-correction-ai-interface.jpg",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/Srimathi2036-sm/ai-grammar-corrector",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isPaused, projects.length])

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
      if (next < 0) next = projects.length - 1
      if (next >= projects.length) next = 0
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

  const currentProject = projects[currentIndex]

  return (
    <section 
      id="projects" 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-10 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -50, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl"
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
          {[Code, Star, Zap].map((Icon, i) => (
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
              <Icon className="w-4 h-4 text-blue-400 opacity-50" />
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
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(147,51,234,0.5)]"
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
              Projects
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-1 w-40 mx-auto mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"
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
        <div className="relative max-w-6xl mx-auto">
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
          <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: "2000px" }}>
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
                <motion.a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Animated outer glow */}
                    <motion.div
                      className={`absolute -inset-3 bg-gradient-to-br ${currentProject.gradient} rounded-3xl blur-2xl`}
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
                        background: `conic-gradient(from 0deg, transparent, ${currentProject.gradient.split(' ')[3]}, transparent)`,
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
                      <div className="h-64 overflow-hidden relative">
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-20 z-10`}
                        />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 z-20"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />

                        <motion.img
                          src={currentProject.image}
                          alt={currentProject.title}
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
                          className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${currentProject.gradient} opacity-10 blur-3xl rounded-full`}
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
                          className="text-3xl font-bold mb-4 text-white"
                          animate={{
                            backgroundPosition: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          {currentProject.title}
                        </motion.h3>

                        <motion.p 
                          className="text-base text-gray-300 mb-6 leading-relaxed"
                          animate={{
                            opacity: [1, 0.85, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          {currentProject.description}
                        </motion.p>

                        <div className="flex flex-wrap gap-3 mb-6">
                          {currentProject.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className={`px-4 py-2 text-sm rounded-full bg-gradient-to-r ${currentProject.gradient} text-white font-medium shadow-lg`}
                              initial={{ opacity: 0, scale: 0, rotate: -180 }}
                              animate={{ 
                                opacity: 1, 
                                scale: 1,
                                rotate: 0,
                              }}
                              transition={{ 
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ 
                                scale: 1.15,
                                y: -3,
                                rotate: 5,
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <motion.div 
                          className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-white/20 bg-gradient-to-r ${currentProject.gradient} text-white font-bold shadow-lg relative overflow-hidden`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                          />
                          
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Github className="w-6 h-6 relative z-10" />
                          </motion.div>
                          
                          <span className="relative z-10 text-lg">View on GitHub</span>
                          
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                              y: [0, -3, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                            }}
                          >
                            <ArrowUpRight className="w-5 h-5 relative z-10" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Project number */}
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
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-12' : 'w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    index === currentIndex 
                      ? `bg-gradient-to-r ${projects[index].gradient}` 
                      : 'bg-white/30'
                  }`}
                  animate={{
                    opacity: index === currentIndex ? [0.5, 1, 0.5] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: index === currentIndex ? Infinity : 0,
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, BookOpen, GraduationCap, Sparkles, Star, X } from "lucide-react"

export function Papers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePaper, setActivePaper] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const papers = [
    {
      title: "Technology & Society",
      institution: "CIT (Coimbatore Institute of Technology)",
      image: "/technology-society-research-paper-abstract.jpg",
      certificate: "/paper1.jpg",
    },
    {
      title: "3D-Holography Technology",
      institution: "Sri Ramakrishna Engineering College, Coimbatore",
      image: "/3d-holography-technology-futuristic.jpg",
      certificate: "/paper2.jpg",
    },
    {
      title: "Career Guidance With Chatbot",
      institution: "Kongu Engineering College, Erode",
      image: "/ai-chatbot-career-guidance-interface.jpg",
      certificate: "/paper3.jpg",
    },
    {
      title: "Authenticity Validator for Academia",
      institution: "Kongu Engineering College, Erode",
      image: "/document-authentication-academic-verification.jpg",
      certificate: "/paper4.jpg",
    },
    {
      title: "Food Waste Management System (SurpluSync)",
      institution: "KPR Institute of Technology, Coimbatore",
      image: "/food-waste-management-sustainability-app.jpg",
      certificate: "/paper5.jpg",
    },
  ]

  // Floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }))

  return (
    <section id="papers" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      {/* Animated background effects */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.5, 0.25],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.25, 0.5],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
            y: [0, -120, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:70px_70px]"
        animate={{
          backgroundPosition: ["0px 0px", "70px 70px"],
        }}
        transition={{
          duration: 25,
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
          className="text-center mb-12 relative"
        >
          {/* Orbiting icons */}
          {[BookOpen, GraduationCap, Star].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12 - i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: `${90 + i * 25}px 0px`,
              }}
            >
              <Icon className="w-4 h-4 text-purple-400 opacity-40" />
            </motion.div>
          ))}

          <motion.div
            className="inline-block relative"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="absolute -top-6 -right-8 w-7 h-7 text-yellow-400" />
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Papers Presented
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-48 mx-auto mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -z-10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.p 
          className="text-center text-gray-300 text-lg mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Research papers and presentations delivered at premier engineering institutions
        </motion.p>

        {/* Papers Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 60,
                rotateX: 20,
                scale: 0.9,
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1,
              } : {}}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{ 
                transformStyle: "preserve-3d",
                marginTop: index % 2 === 0 ? 0 : "2rem",
              }}
            >
              {/* Animated outer glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl"
                animate={{
                  opacity: hoveredIndex === index ? [0.3, 0.6, 0.3] : [0, 0.25, 0],
                  scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Rotating border */}
              <motion.div
                className="absolute -inset-1 rounded-3xl opacity-40"
                style={{
                  background: `conic-gradient(from ${index * 72}deg, transparent, rgba(168,85,247,0.5), transparent)`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group-hover:border-white/25 transition-all duration-500"
                animate={{
                  boxShadow: hoveredIndex === index 
                    ? "0 25px 80px -15px rgba(168,85,247,0.6)"
                    : "0 20px 60px -15px rgba(0,0,0,0.8)",
                }}
              >
                {/* Image container */}
                <div className="h-48 overflow-hidden relative">
                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 z-10"
                    animate={{
                      opacity: hoveredIndex === index ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 z-20"
                    animate={{
                      x: hoveredIndex === index ? ["-100%", "100%"] : "-100%",
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Image */}
                  <motion.img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Floating sparkles on hover */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-white rounded-full"
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0,
                          }}
                          animate={{
                            y: [null, "-60%"],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.15,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Paper icon badge */}
                  <motion.div
                    className="absolute top-3 left-3 w-10 h-10 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center z-30"
                    animate={{
                      rotate: hoveredIndex === index ? [0, 360] : 0,
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <FileText className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col relative">
                  {/* Background accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-2xl rounded-full"
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
                    className="text-xl font-bold text-white mb-3 relative z-10"
                    animate={{
                      x: hoveredIndex === index ? [0, 3, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    {paper.title}
                  </motion.h3>

                  <motion.p 
                    className="text-sm text-gray-300 mb-6 flex-1 relative z-10 leading-relaxed"
                    animate={{
                      opacity: hoveredIndex === index ? [1, 0.85, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: hoveredIndex === index ? Infinity : 0,
                    }}
                  >
                    {paper.institution}
                  </motion.p>

                  {/* View Certificate Button */}
                  <motion.button
                    onClick={() => setActivePaper(paper.certificate)}
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-xl
                    bg-gradient-to-r from-purple-600 to-pink-600
                    text-white font-semibold shadow-lg
                    relative overflow-hidden z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background shine */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      animate={hoveredIndex === index ? { x: "100%" } : { x: "-100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <FileText className="w-5 h-5 relative z-10" />
                    </motion.div>
                    
                    <span className="relative z-10">View Certificate</span>
                  </motion.button>
                </div>

                {/* Paper number indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-xs"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: hoveredIndex === index ? Infinity : 0,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CERTIFICATE MODAL */}
      {activePaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePaper(null)}
        >
          {/* Background animated particles in modal */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing border */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Close button */}
            <motion.button
              onClick={() => setActivePaper(null)}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 border-2 border-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Certificate image */}
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
              animate={{
                boxShadow: [
                  "0 25px 50px -12px rgba(168,85,247,0.5)",
                  "0 25px 50px -12px rgba(236,72,153,0.5)",
                  "0 25px 50px -12px rgba(59,130,246,0.5)",
                  "0 25px 50px -12px rgba(168,85,247,0.5)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <img
                src={activePaper}
                alt="Paper Certificate"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
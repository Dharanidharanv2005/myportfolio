"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Cloud, Wrench, Users, Zap, Sparkles, Star, Hexagon } from "lucide-react"

export function Skills() {
  const containerRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Java", "C", "Python", "JavaScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks",
      icon: Zap,
      skills: ["ReactJS", "NodeJS", "Flask", "TailwindCSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS (Beginner)"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Figma", "VS Code", "Canva"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Key Strengths",
      icon: Users,
      skills: [
        "Time Management",
        "Communication",
        "Adaptability",
        "Problem-Solving",
        "Leadership",
        "Critical Thinking",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ]

  // Floating particles
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    size: Math.random() * 2 + 1,
  }))

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"
    >
      {/* Animated background orbs with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 80, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -60, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-3xl"
        animate={{ 
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/60 rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -140, 0],
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

      {/* Hexagon pattern */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div 
        className="container mx-auto max-w-7xl relative z-10"
        style={{ opacity }}
      >
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12 relative"
        >
          {/* Orbiting decorative elements */}
          {[Star, Hexagon, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? {
                opacity: 1,
                scale: 1,
                rotate: 360,
              } : {}}
              transition={{
                opacity: { delay: 0.5 + i * 0.1 },
                scale: { delay: 0.5 + i * 0.1, type: "spring" },
                rotate: {
                  duration: 15 - i * 3,
                  repeat: Infinity,
                  ease: "linear",
                }
              }}
              style={{
                transformOrigin: `${110 + i * 30}px 0px`,
              }}
            >
              <Icon className="w-5 h-5 text-blue-400 opacity-40" />
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
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={isInView ? {
                opacity: 1,
                rotate: 0,
                scale: 1,
              } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 12, -12, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-cyan-400" />
              </motion.div>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
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
              Skills & Expertise
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="h-1 w-56 mx-auto mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? {
              scale: [1, 1.6, 1],
              opacity: [0.3, 0.6, 0.3],
            } : {}}
            transition={{
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-gray-300 text-lg mb-20 max-w-2xl mx-auto"
        >
          Technical proficiency and professional competencies
        </motion.p>

        {/* Skills Grid with Staggered Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => {
            // Calculate wave pattern - alternating directions
            const direction = catIndex % 2 === 0 ? 1 : -1
            
            return (
              <motion.div
                key={category.title}
                initial={{ 
                  opacity: 0, 
                  x: direction * 100,
                  y: 50,
                  rotateY: direction * 30,
                  scale: 0.8,
                }}
                whileInView={{ 
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: catIndex * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredCategory(catIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated outer glow */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-br ${category.color} rounded-3xl blur-xl`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.25, 0] }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: hoveredCategory === catIndex ? [0.3, 0.6, 0.3] : undefined,
                    scale: hoveredCategory === catIndex ? [1, 1.06, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Rotating border */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-40"
                  style={{
                    background: `conic-gradient(from ${catIndex * 60}deg, transparent, ${category.color.split(' ')[3]}, transparent)`,
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
                  className="relative p-6 rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group-hover:border-white/25 transition-all duration-500"
                  animate={{
                    boxShadow: hoveredCategory === catIndex 
                      ? "0 25px 80px -15px rgba(59,130,246,0.6)"
                      : "0 20px 60px -15px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Background accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.color} opacity-10 blur-2xl rounded-full`}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.1, 0.25, 0.1],
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0"
                    animate={{
                      x: hoveredCategory === catIndex ? ["-100%", "100%"] : "-100%",
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Floating sparkles on hover */}
                  {hoveredCategory === catIndex && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-white rounded-full"
                          initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0,
                          }}
                          animate={{
                            y: [null, "-50%"],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Header */}
                  <motion.div 
                    className="flex items-center gap-3 mb-5 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.15 + 0.2 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg relative`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 360,
                      }}
                      transition={{ duration: 0.6 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      {/* Icon glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} blur-lg`}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </motion.div>

                  {/* Skills badges with cascade animation */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${catIndex}-${skillIndex}`
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ 
                            opacity: 1, 
                            scale: 1,
                            rotate: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: catIndex * 0.15 + skillIndex * 0.08,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            y: -10,
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.4 }
                          }}
                          onHoverStart={() => setHoveredSkill(skillKey)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium shadow-lg cursor-pointer relative overflow-hidden`}
                        >
                          {/* Badge shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "linear",
                            }}
                          />
                          
                          {/* Pulsing glow */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-md`}
                            animate={{
                              opacity: hoveredSkill === skillKey ? [0.5, 1, 0.5] : [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          />
                          
                          <span className="relative z-10">{skill}</span>
                          
                          {/* Particle burst on hover */}
                          {hoveredSkill === skillKey && (
                            <>
                              {[...Array(4)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white rounded-full"
                                  initial={{
                                    x: "50%",
                                    y: "50%",
                                    opacity: 1,
                                  }}
                                  animate={{
                                    x: `${50 + (Math.cos(i * Math.PI / 2) * 100)}%`,
                                    y: `${50 + (Math.sin(i * Math.PI / 2) * 100)}%`,
                                    opacity: 0,
                                    scale: [1, 2, 0],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Category number indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: catIndex * 0.15 + 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }
                    }}
                  >
                    {String(catIndex + 1).padStart(2, '0')}
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Decorative bottom elements */}
        <motion.div
          className="mt-20 flex justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillCategories[i].color}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
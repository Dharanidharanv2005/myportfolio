"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const fabX = useMotionValue(0)
  const fabY = useMotionValue(0)
  const springX = useSpring(fabX, { stiffness: 500, damping: 40, mass: 0.8 })
  const springY = useSpring(fabY, { stiffness: 500, damping: 40, mass: 0.8 })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsAtTop(currentScrollY < 180)
      setShowIndicator(currentScrollY > 140)
    }

    const handlePointerMove = (event: PointerEvent) => {
      fabX.set(event.clientX + 18)
      fabY.set(event.clientY + 18)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("scroll", handleScroll)
    window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  const handleFabClick = () => {
    if (isAtTop) {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFabClick}
          aria-label={isAtTop ? "Scroll to next section" : "Scroll to top"}
          className="fixed left-0 top-0 z-[60] group"
          style={{ x: springX, y: springY }}
        >
          <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-400/20 to-purple-500/25 backdrop-blur-2xl border border-white/10" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/70 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <motion.span
              animate={{ y: isAtTop ? [0, 5, 0] : [0, -5, 0] }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              {isAtTop ? (
                <ChevronDown className="h-6 w-6 text-cyan-300" />
              ) : (
                <ChevronUp className="h-6 w-6 text-cyan-300" />
              )}
            </motion.span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

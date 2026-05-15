"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorXSpring = useSpring(cursorX, { stiffness: 600, damping: 40 })
  const cursorYSpring = useSpring(cursorY, { stiffness: 600, damping: 40 })

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const onLeave = () => {
      cursorX.set(-100)
      cursorY.set(-100)
    }

    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerleave", onLeave)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[9999]"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="relative w-10 h-10">
          <motion.span
            className="block w-10 h-10 rounded-full border-2 border-cyan-400/40 bg-transparent"
            animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </>
  )
}

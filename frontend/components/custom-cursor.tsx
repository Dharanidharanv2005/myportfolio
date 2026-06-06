"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const cursor = cursorRef.current
      const follower = followerRef.current

      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
      }

      if (follower) {
        follower.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`
      }

      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = (e: MouseEvent) => {
      updateMousePosition(e)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-50 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 mix-blend-difference"
      />
    </>
  )
}
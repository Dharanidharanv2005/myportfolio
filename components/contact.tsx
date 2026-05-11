"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mail, Lock, Sparkles } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Details saved successfully ✅")
        setFormData({ email: "", password: "", message: "" })
      } else {
        alert("Failed to save details ❌")
      }
    } catch (error) {
      alert("Server error ❌")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Floating particles – unchanged */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Heading */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="
            text-4xl md:text-5xl font-semibold text-center mb-10
            bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
            bg-clip-text text-transparent
          "
        >
          Connect With Me
        </motion.h2>

        {/* GLASS FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            p-10 rounded-[2rem]
            bg-white/10
            backdrop-blur-3xl
            border border-white/20
            shadow-[0_30px_60px_rgba(0,0,0,0.4)]
            space-y-6
          "
        >
          {/* Email */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Mail className="w-4 h-4 text-purple-300" /> Email
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="
                bg-transparent
                border border-white/25
                text-slate-100
                placeholder:text-slate-400
                rounded-full
                backdrop-blur-xl
                focus:ring-2 focus:ring-purple-400/40
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Lock className="w-4 h-4 text-pink-300" /> Password
            </label>
            <Input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="
                bg-transparent
                border border-white/25
                text-slate-100
                placeholder:text-slate-400
                rounded-full
                backdrop-blur-xl
                focus:ring-2 focus:ring-pink-400/40
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Sparkles className="w-4 h-4 text-blue-300" /> Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="
                w-full min-h-[140px]
                bg-transparent
                border border-white/25
                text-slate-100
                placeholder:text-slate-400
                rounded-2xl px-4 py-3
                backdrop-blur-xl
                focus:outline-none focus:ring-2 focus:ring-blue-400/40
              "
            />
          </div>

          {/* Button */}
          <Button
            type="submit"
            className="
              w-full py-6 text-lg
              bg-gradient-to-r from-purple-500/60 via-pink-500/60 to-blue-500/60
              backdrop-blur-xl
              rounded-full
              hover:scale-[1.03]
              transition
            "
          >
            <Send className="mr-2" /> Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles, MessageCircle } from "lucide-react"

// ⚠️ UPDATE THIS with your WhatsApp number (include country code)
const WHATSAPP_NUMBER = "919876543210" // Change this to your WhatsApp number

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle Email via FormSubmit
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.message || !formData.name) {
      alert("Please fill in all fields ❌")
      return
    }

    setIsSubmitting(true)
    
    try {
      const form = new FormData()
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("message", formData.message)
      form.append("_captcha", "false")

      const response = await fetch("https://formsubmit.co/dharanidharanvenugopal123@gmail.com", {
        method: "POST",
        body: form,
      })

      if (response.ok) {
        alert("Email sent successfully! ✅")
        setFormData({ email: "", message: "", name: "" })
      } else {
        alert("Failed to send email ❌")
      }
    } catch (error) {
      alert("Error sending email ❌")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle WhatsApp Message
  const handleWhatsAppSubmit = () => {
    if (!formData.message) {
      alert("Please enter a message ❌")
      return
    }

    const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "")
    const encodedMessage = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\n\nMessage: ${formData.message}`
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
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
        <form className="
            p-10 rounded-[2rem]
            bg-white/10
            backdrop-blur-3xl
            border border-white/20
            shadow-[0_30px_60px_rgba(0,0,0,0.4)]
            space-y-6
          "
        >
          {/* Name */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Sparkles className="w-4 h-4 text-pink-300" /> Name
            </label>
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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

          {/* Email */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Mail className="w-4 h-4 text-purple-300" /> Email
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
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

          {/* Message */}
          <div>
            <label className="flex gap-2 items-center text-slate-200 text-sm mb-2">
              <Sparkles className="w-4 h-4 text-blue-300" /> Message
            </label>
            <textarea
              placeholder="Your message here..."
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

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button
              type="button"
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="
                flex-1 py-6 text-lg
                bg-gradient-to-r from-purple-500/60 via-pink-500/60 to-blue-500/60
                backdrop-blur-xl
                rounded-full
                hover:scale-[1.03]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <Mail className="mr-2 w-5 h-5" /> 
              {isSubmitting ? "Sending..." : "Send Email"}
            </Button>

            <Button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="
                flex-1 py-6 text-lg
                bg-gradient-to-r from-green-500/60 via-emerald-500/60 to-teal-500/60
                backdrop-blur-xl
                rounded-full
                hover:scale-[1.03]
                transition
              "
            >
              <MessageCircle className="mr-2 w-5 h-5" /> 
              Send WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-cyan-900/10 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Dharanidharan V
          </motion.h2>
          <p className="text-xl text-muted-foreground">Aspiring Software Engineer</p>

          <div className="flex justify-center gap-6 flex-wrap">
            <motion.a
              href="tel:+919994035718"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9994035718</span>
            </motion.a>
            <motion.a
              href="mailto:dharanidharanvenugopal123@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>dharanidharanvenugopal123@gmail.com</span>
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/dharanidharan-v-66b399334" },
              { icon: Github, href: "https://github.com/Dharanidharanv2005" },
              { icon: Code, href: "https://leetcode.com/u/Dharani718/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-border/50 hover:border-cyan-400/50 transition-colors"
              >
                <social.icon className="w-6 h-6 text-cyan-400" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground pt-8 border-t border-border/50"
          >
            © 2026 Dharanidharan V. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

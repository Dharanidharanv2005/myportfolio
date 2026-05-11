"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Objective } from "@/components/objective"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { Projects } from "@/components/projects"
import { Papers } from "@/components/papers"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollAnimations />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Objective />
        <Education />
        <Achievements />
        <Projects />
        <Papers />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

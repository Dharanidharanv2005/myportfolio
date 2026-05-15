"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Achievements } from "@/components/achievements"
import { AdditionalContributions } from "@/components/additional-contributions"
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
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <AdditionalContributions />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

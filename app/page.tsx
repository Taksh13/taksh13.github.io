"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProjectsSection from "@/components/featured-projects-section"
import CreativeEndeavorsSection from "@/components/creative-endeavors-section"
import TechnicalSkillsSection from "@/components/technical-skills-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import AnimatedCursor from "@/components/animated-cursor"
import Navigation from "@/components/navigation"
import MaintenancePage from "@/components/maintenance"

export default function Home() {
  const [isResumeVisible, setIsResumeVisible] = useState(false)
  const [isMaintenance, setIsMaintenance] = useState(true)

  const toggleResumeVisibility = () => {
    setIsResumeVisible(!isResumeVisible)
  }

  return (
    <main className="relative min-h-screen pt-16">
      <AnimatedCursor />
      <Navigation toggleResume={toggleResumeVisibility} />
      {isMaintenance ? (
        <MaintenancePage />
      ) : (
        <>
          <HeroSection />
          <FeaturedProjectsSection />
          <CreativeEndeavorsSection />
          <TechnicalSkillsSection />
          {isResumeVisible && <ResumeSection onClose={toggleResumeVisibility} />}
          <ContactSection isResumeVisible={isResumeVisible} />
        </>
      )}
    </main>
  )
}

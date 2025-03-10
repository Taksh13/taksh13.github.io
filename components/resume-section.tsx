"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"
import { resumeData } from "@/data/resume"
import { Button } from "@/components/ui/button"
import FloatingElements from "@/components/floating-elements"

interface ResumeSectionProps {
  onClose: () => void
}

export default function ResumeSection({ onClose }: ResumeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="resume" ref={sectionRef} className="py-24 bg-muted/30 relative block">
      <FloatingElements section="resume" />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground">My professional journey and accomplishments</p>
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.date}</p>
              </div>
            ))}
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Career Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-lg font-semibold">{exp.position}</h4>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground">
                      {resp}
                    </li>
                  ))}
                </ul>
                {exp.achievements && (
                  <div className="mt-4">
                    <h5 className="font-semibold mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

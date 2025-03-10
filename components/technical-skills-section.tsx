"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Smartphone, Braces, Cloud, Layers, GitBranch } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import { resumeData } from "@/data/resume"

interface Skill {
  icon: React.ReactNode
  name: string
  level: number
}

const frontendSkills: Skill[] = [
  { icon: <Layout />, name: "HTML/CSS", level: 95 },
  { icon: <Braces />, name: "JavaScript", level: 95 },
  { icon: <Code />, name: "TypeScript", level: 95 },
  { icon: <Globe />, name: "React", level: 95 },
  { icon: <Smartphone />, name: "Responsive Design", level: 95 },
]

const backendSkills: Skill[] = [
  { icon: <Server />, name: "Node.js", level: 95 },
  { icon: <Database />, name: "SQL/NoSQL", level: 95 },
  { icon: <Cloud />, name: "RestAPI", level: 95 },
  // { icon: <Layers />, name: "GraphQL", level: 95 },
  { icon: <GitBranch />, name: "Git/GitHub", level: 95 },
]

function extractTechnologies(data: typeof resumeData): string[] {
  const technologies = new Set<string>()

  const addTech = (text: string) => {
    const techs = [
      "Arduino",
      "Raspberry Pi",
      "OpenCV",
      "TensorFlow",
      "C#",
      ".NET",
      "JavaScript",
      "Angular",
      "TypeScript",
      "Bootstrap",
      "VR",
      "AR",
      "TinkerCAD",
      "3D printing",
      "REST API",
      "SQL",
      "NoSQL",
      "CAD",
    ]
    techs.forEach((tech) => {
      if (text.toLowerCase().includes(tech.toLowerCase())) {
        technologies.add(tech)
      }
    })
  }

  data.projects.forEach((project) => {
    project.description.forEach(addTech)
  })

  data.experience.forEach((exp) => {
    exp.responsibilities.forEach(addTech)
  })

  return Array.from(technologies)
}

export default function TechnicalSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const extractedTechnologies = extractTechnologies(resumeData)

  return (
    <section id="technical-skills" ref={sectionRef} className="py-24 relative">
      <FloatingElements section="skills" />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive overview of my technical expertise and proficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Globe className="h-6 w-6 text-primary" />
              Frontend Development
            </motion.h3>

            <ul className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Server className="h-6 w-6 text-primary" />
              Backend Development
            </motion.h3>

            <ul className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {extractedTechnologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

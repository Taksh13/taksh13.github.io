"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Smartphone, Braces, Cloud, Layers, GitBranch } from "lucide-react"
import FloatingElements from "@/components/floating-elements"

interface Skill {
  icon: React.ReactNode
  name: string
  level: number
}

const frontendSkills: Skill[] = [
  { icon: <Layout />, name: "HTML/CSS", level: 95 },
  { icon: <Braces />, name: "JavaScript", level: 90 },
  { icon: <Code />, name: "TypeScript", level: 85 },
  { icon: <Globe />, name: "React", level: 90 },
  { icon: <Smartphone />, name: "Responsive Design", level: 85 },
]

const backendSkills: Skill[] = [
  { icon: <Server />, name: "Node.js", level: 85 },
  { icon: <Database />, name: "SQL/NoSQL", level: 80 },
  { icon: <Cloud />, name: "AWS", level: 75 },
  { icon: <Layers />, name: "GraphQL", level: 70 },
  { icon: <GitBranch />, name: "Git/GitHub", level: 90 },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
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

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {frontendSkills.map((skill, index) => (
                <motion.li key={skill.name} variants={itemVariants}>
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
            </motion.ul>
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

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {backendSkills.map((skill, index) => (
                <motion.li key={skill.name} variants={itemVariants}>
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
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}


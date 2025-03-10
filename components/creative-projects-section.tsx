"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FloatingElements from "@/components/floating-elements"

interface CreativeProject {
  id: number
  title: string
  description: string
  category: string
  image: string
  link?: string
}

const creativeProjects: CreativeProject[] = [
  {
    id: 1,
    title: "Urban Landscapes",
    description: "A photography series exploring the interplay of light and shadow in cityscapes.",
    category: "Photography",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    id: 2,
    title: "The Digital Age",
    description: "An essay on the impact of technology on modern society and human interactions.",
    category: "Writing",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    id: 3,
    title: "Echoes of Silence",
    description: "A short film exploring themes of isolation and connection in urban environments.",
    category: "Videography",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
]

export default function CreativeProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="creative-projects" ref={sectionRef} className="py-24 bg-secondary/10 relative">
      <FloatingElements section="creative" />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative Endeavors</h2>
          <p className="text-xl text-muted-foreground">
            Exploring creativity beyond code through various artistic mediums.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {creativeProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <Badge className="mb-2">{project.category}</Badge>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.link && (
                  <Button variant="outline" size="sm" className="group" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


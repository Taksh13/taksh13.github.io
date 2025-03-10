"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FloatingElements from "@/components/floating-elements"
import { fetchGitHubRepos } from "../lib/github"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

const getImageForProject = (title: string) => {
  switch (title.toLowerCase()) {
    case "e-commerce platform":
      return "/images/e-commerce-platform.jpg"
    case "ai content generator":
      return "/images/ai-content-generator.jpg"
    case "real-time chat application":
      return "/images/real-time-chat-application.jpg"
    default:
      return "/placeholder.svg?height=600&width=800"
  }
}

export default function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [repos, setRepos] = useState<Project[]>([])

  useEffect(() => {
    const getRepos = async () => {
      const repos = await fetchGitHubRepos('taksh13')
      const projects = repos.map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description,
        image: getImageForProject(repo.name),
        tags: ["GitHub"],
        demoUrl: repo.html_url,
        repoUrl: repo.html_url,
      }))
      setRepos(projects)
    }

    getRepos()
  }, [])

  return (
    <section id="featured-projects" ref={sectionRef} className="py-24 bg-muted/30 relative">
      <FloatingElements section="projects" />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A selection of my recent technical work showcasing my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="rounded-full" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

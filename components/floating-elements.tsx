"use client"

import { motion } from "framer-motion"

interface FloatingElementsProps {
  section: "hero" | "projects" | "creative" | "skills" | "contact" | "resume"
}

export default function FloatingElements({ section }: FloatingElementsProps) {
  // Different shapes for different sections
  const getElements = () => {
    switch (section) {
      case "hero":
        return [
          { shape: "circle", size: 80, x: "10%", y: "20%", delay: 0 },
          { shape: "triangle", size: 60, x: "85%", y: "15%", delay: 0.5 },
          { shape: "square", size: 40, x: "75%", y: "75%", delay: 1 },
          { shape: "donut", size: 70, x: "15%", y: "80%", delay: 1.5 },
        ]
      case "projects":
        return [
          { shape: "square", size: 50, x: "5%", y: "30%", delay: 0 },
          { shape: "circle", size: 40, x: "95%", y: "60%", delay: 0.7 },
          { shape: "triangle", size: 60, x: "80%", y: "20%", delay: 1.2 },
        ]
      case "creative":
        return [
          { shape: "circle", size: 55, x: "8%", y: "25%", delay: 0.2 },
          { shape: "square", size: 45, x: "92%", y: "70%", delay: 0.8 },
          { shape: "donut", size: 65, x: "85%", y: "15%", delay: 1.3 },
        ]
      case "skills":
        return [
          { shape: "donut", size: 60, x: "90%", y: "30%", delay: 0.3 },
          { shape: "circle", size: 30, x: "5%", y: "70%", delay: 0.8 },
          { shape: "square", size: 45, x: "85%", y: "85%", delay: 1.4 },
        ]
      case "contact":
        return [
          { shape: "triangle", size: 50, x: "10%", y: "20%", delay: 0.2 },
          { shape: "circle", size: 35, x: "90%", y: "30%", delay: 0.9 },
          { shape: "donut", size: 55, x: "15%", y: "80%", delay: 1.6 },
        ]
      case "resume":
        return [
          { shape: "circle", size: 50, x: "20%", y: "30%", delay: 0.2 },
          { shape: "square", size: 40, x: "80%", y: "40%", delay: 0.7 },
          { shape: "triangle", size: 60, x: "60%", y: "70%", delay: 1.2 },
        ]
      default:
        return []
    }
  }

  const elements = getElements()

  const renderShape = (shape: string, size: number) => {
    switch (shape) {
      case "circle":
        return <div className="rounded-full bg-primary/10 backdrop-blur-sm" style={{ width: size, height: size }} />
      case "square":
        return <div className="rounded-md bg-primary/10 backdrop-blur-sm" style={{ width: size, height: size }} />
      case "triangle":
        return (
          <div
            className="bg-primary/10 backdrop-blur-sm"
            style={{
              width: size,
              height: size,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        )
      case "donut":
        return (
          <div
            className="rounded-full border-4 border-primary/20 backdrop-blur-sm"
            style={{ width: size, height: size }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: el.x,
            top: el.y,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: el.delay,
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: el.delay,
            }}
          >
            {renderShape(el.shape, el.size)}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  toggleResume: boolean | (() => void)
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Featured Projects", href: "#featured-projects" },
  { name: "Creative Endeavors", href: "#creative-endeavors" },
  { name: "Technical Skills", href: "#technical-skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" },
]

export default function Navigation({ toggleResume }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const resumeSection = document.getElementById("resume")
    if (resumeSection) {
      resumeSection.style.display = "block"
      resumeSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">Hire</span> Me
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={handleResumeClick} className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

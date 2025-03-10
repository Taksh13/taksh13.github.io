import type React from "react"
// import { useState } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BackgroundAnimation from "@/components/background-animation"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taksh Patel - Full-Stack Developer & Creative",
  description: "Personal website of Taksh Patel, showcasing technical skills and creative endeavors"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [showNavigation, setShowNavigation] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BackgroundAnimation />
        <Navigation toggleResume={false} />
        {children}
        <footer className="bg-muted py-6">
          <div className="container px-4 md:px-6 text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Taksh Patel. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

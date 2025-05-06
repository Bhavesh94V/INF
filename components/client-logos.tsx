"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

// Placeholder logos - in a real app, these would be loaded from your backend
const logos = [
  { id: 1, name: "TechVision", image: "/placeholder.svg?height=60&width=120" },
  { id: 2, name: "Global Finance", image: "/placeholder.svg?height=60&width=120" },
  { id: 3, name: "Innovate Corp", image: "/placeholder.svg?height=60&width=120" },
  { id: 4, name: "Future Systems", image: "/placeholder.svg?height=60&width=120" },
  { id: 5, name: "Apex Industries", image: "/placeholder.svg?height=60&width=120" },
  { id: 6, name: "Quantum Solutions", image: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      setIsAnimating(true)
    }
  }, [inView])

  return (
    <div ref={ref} className="overflow-hidden py-4">
      <div
        className={`flex items-center justify-center flex-wrap gap-8 md:gap-12 transition-opacity duration-1000 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      >
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className="transition-all duration-700"
            style={{
              transitionDelay: `${index * 0.1}s`,
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

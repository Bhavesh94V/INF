"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function FadeInSection({ children, delay = 0, duration = 0.5, direction = "up" }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translateY(20px)"
        case "down":
          return "translateY(-20px)"
        case "left":
          return "translateX(20px)"
        case "right":
          return "translateX(-20px)"
        default:
          return "none"
      }
    }
    return "none"
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

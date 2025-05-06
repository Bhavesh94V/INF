"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const start = 0
    const end = value
    const range = end - start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor(duration / range))

    let timer: NodeJS.Timeout

    const updateCount = () => {
      countRef.current += increment
      setCount(countRef.current)

      if (increment > 0 ? countRef.current < end : countRef.current > end) {
        timer = setTimeout(updateCount, stepTime)
      } else {
        setCount(end)
      }
    }

    timer = setTimeout(updateCount, stepTime)

    return () => clearTimeout(timer)
  }, [value, duration, inView])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

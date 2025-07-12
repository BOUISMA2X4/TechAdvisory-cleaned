"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedGradientBackground({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-0 overflow-hidden",
        "bg-gradient-to-br from-blue-50 via-white to-purple-50", // Base gradient
        className,
      )}
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
      transition={{
        duration: 60, // Slower animation for subtlety
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
      style={{
        backgroundSize: "200% 200%", // Make the gradient larger than the viewport for movement
      }}
    />
  )
}

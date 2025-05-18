"use client"

import { useEffect, useState } from "react"

// Replace the aiGeneratedImages array with a single feature project image
const featureProjectImage = "/images/undraw_dev-productivity.svg"

export default function RandomImage() {
  const [randomImage, setRandomImage] = useState("")

  // Update the useEffect hook to use the feature project image
  useEffect(() => {
    setRandomImage(featureProjectImage)
  }, [])

  // Update the return statement to use the feature project image
  if (!randomImage) {
    return (
      <div className="aspect-video bg-muted animate-pulse flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-muted-foreground"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
    )
  }

  return (
    <div className="aspect-video relative overflow-hidden">
      <img src={randomImage || "/placeholder.svg"} alt="Featured project" className="h-full w-full object-contain" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
          <p className="text-white/80">Our latest work showcasing modern design and functionality</p>
        </div>
      </div>
    </div>
  )
}

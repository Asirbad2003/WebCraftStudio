"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-lg"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <p className="text-sm">{bio}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 text-xs text-primary font-medium">
          {isExpanded ? "Tap to collapse" : "Tap to read bio"}
        </div>
      </div>
    </div>
  )
}

export default function TeamProfiles() {
  const team = [
    {
      name: "John Smith",
      role: "Founder & Lead Developer",
      image: "/images/team/john-smith.jpg",
      bio: "John has over 10 years of experience in web development and has worked with clients ranging from startups to Fortune 500 companies. He specializes in creating scalable, high-performance web applications.",
    },
    {
      name: "Emma Johnson",
      role: "UI/UX Designer",
      image: "/images/team/emma-johnson.jpg",
      bio: "Emma brings creative vision and user-centered design principles to every project. With a background in both graphic design and psychology, she creates interfaces that are both beautiful and intuitive.",
    },
    {
      name: "David Chen",
      role: "SEO Specialist",
      image: "/images/team/david-chen.svg",
      bio: "David is passionate about helping businesses improve their online visibility. He stays up-to-date with the latest SEO trends and algorithm changes to ensure our clients' websites rank well.",
    },
    {
      name: "Sarah Williams",
      role: "WordPress Developer",
      image: "/images/team/sarah-williams.jpg",
      bio: "Sarah is our WordPress expert, with extensive experience in theme development, plugin customization, and e-commerce solutions. She loves turning complex requirements into elegant WordPress implementations.",
    },
    {
      name: "Michael Rodriguez",
      role: "Frontend Developer",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Michael specializes in creating responsive, accessible, and performant user interfaces. He's proficient in modern JavaScript frameworks and has a keen eye for detail.",
    },
    {
      name: "Lisa Patel",
      role: "Project Manager",
      image: "/images/team/lisa-patel.jpg",
      bio: "Lisa ensures that all our projects run smoothly from start to finish. With her excellent communication skills and technical knowledge, she bridges the gap between clients and our development team.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a diverse group of passionate individuals dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

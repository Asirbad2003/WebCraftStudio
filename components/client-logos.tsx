"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ClientLogos() {
  const clients = [
    { name: "Acme Inc", logo: "/images/undraw_web-shopping.svg" },
    { name: "Globex", logo: "/images/undraw_team-chat.svg" },
    { name: "Soylent Corp", logo: "/images/undraw_special-event.svg" },
    { name: "Initech", logo: "/images/undraw_memory-storage.svg" },
    { name: "Umbrella Corp", logo: "/images/undraw_web-development.svg" },
    { name: "Stark Industries", logo: "/images/undraw_wordpress.svg" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    const logos = containerRef.current?.querySelectorAll(".client-logo")
    logos?.forEach((logo) => observer.observe(logo))

    return () => {
      logos?.forEach((logo) => observer.unobserve(logo))
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Trusted by Leading Brands</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of working with amazing companies across various industries, delivering exceptional
            digital experiences.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-logo opacity-0 transition-all duration-700 delay-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative h-24 w-40 flex items-center justify-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent text-white text-xs font-medium py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                  {client.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

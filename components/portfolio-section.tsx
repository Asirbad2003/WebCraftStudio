"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, X } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    image: "/images/undraw_web-shopping.svg",
    description:
      "A fully responsive e-commerce platform with custom product filtering, user accounts, and secure checkout process.",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "Corporate",
    image: "/images/undraw_team-chat.svg",
    description:
      "Complete redesign of a corporate website with improved user experience, responsive design, and content management system.",
    technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    category: "Web Application",
    image: "/images/undraw_special-event.svg",
    description:
      "An online booking system with real-time availability, payment processing, and admin dashboard for a high-end restaurant.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Healthcare Provider Portal",
    category: "Web Application",
    image: "/images/undraw_memory-storage.svg",
    description:
      "Secure patient management system with appointment scheduling, medical records, and billing integration.",
    technologies: ["Angular", "Firebase", "TypeScript", "Material UI"],
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    category: "E-Commerce",
    image: "/images/undraw_web-development.svg",
    description:
      "Property listing website with advanced search, map integration, and agent profiles for a real estate agency.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Educational Learning Management System",
    category: "Web Application",
    image: "/images/undraw_wordpress.svg",
    description: "Custom LMS with course creation, student progress tracking, and interactive learning materials.",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    link: "#",
    featured: false,
  },
]

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [filter, setFilter] = useState("all")

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.toLowerCase() === filter.toLowerCase())

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their online presence.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-10">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="e-commerce" onClick={() => setFilter("e-commerce")}>
                E-Commerce
              </TabsTrigger>
              <TabsTrigger value="corporate" onClick={() => setFilter("corporate")}>
                Corporate
              </TabsTrigger>
              <TabsTrigger value="web-application" onClick={() => setFilter("web application")}>
                Web Applications
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-muted/30 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="self-start mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="e-commerce" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-muted/30 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="self-start mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-muted/30 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="self-start mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web-application" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-muted/30 cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="self-start mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl">{selectedItem?.title}</DialogTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <DialogDescription>
                <Badge className="mt-2">{selectedItem?.category}</Badge>
              </DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={selectedItem?.image || "/placeholder.svg"}
                  alt={selectedItem?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Project Overview</h4>
                <p className="text-muted-foreground mb-4">{selectedItem?.description}</p>

                <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem?.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button asChild>
                  <a href={selectedItem?.link} target="_blank" rel="noopener noreferrer">
                    View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

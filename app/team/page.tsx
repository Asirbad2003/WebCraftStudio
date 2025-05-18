import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team | WebCraftStudio",
  description: "Meet the talented professionals behind WebCraftStudio who make digital excellence possible.",
}

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
    facebook?: string
    email?: string
  }
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Founder & Lead Developer",
      bio: "John has over 10 years of experience in web development and has worked with clients ranging from startups to Fortune 500 companies. He specializes in creating scalable, high-performance web applications using the latest technologies.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith",
        github: "https://github.com/johnsmith",
        email: "john@webcraftstudio.com",
      },
    },
    {
      id: 2,
      name: "Emma Johnson",
      role: "UI/UX Designer",
      bio: "Emma is a creative UI/UX designer with a passion for creating beautiful, intuitive user interfaces. She has a background in graphic design and has worked on projects for clients in various industries, from e-commerce to healthcare.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/emmajohnson",
        twitter: "https://twitter.com/emmajohnson",
        facebook: "https://facebook.com/emmajohnson",
        email: "emma@webcraftstudio.com",
      },
    },
    {
      id: 3,
      name: "David Chen",
      role: "Full-Stack Developer",
      bio: "David is a full-stack developer with expertise in both front-end and back-end technologies. He has a strong background in JavaScript frameworks like React and Node.js, and has built numerous web applications from the ground up.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/davidchen",
        github: "https://github.com/davidchen",
        email: "david@webcraftstudio.com",
      },
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Project Manager",
      bio: "Sarah is an experienced project manager who ensures that all projects are delivered on time and within budget. She has a background in business administration and has managed projects for clients across various industries.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
        email: "sarah@webcraftstudio.com",
      },
    },
    {
      id: 5,
      name: "Michael Rodriguez",
      role: "SEO Specialist",
      bio: "Michael is an SEO specialist with a deep understanding of search engine algorithms and optimization techniques. He has helped numerous clients improve their search engine rankings and increase organic traffic to their websites.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/michaelrodriguez",
        email: "michael@webcraftstudio.com",
      },
    },
    {
      id: 6,
      name: "Lisa Patel",
      role: "Content Strategist",
      bio: "Lisa is a content strategist who helps clients develop effective content strategies that align with their business goals. She has a background in marketing and has worked with clients in various industries to create compelling content that engages their target audience.",
      image: "/images/undraw_male-avatar.svg",
      social: {
        linkedin: "https://linkedin.com/in/lisapatel",
        twitter: "https://twitter.com/lisapatel",
        email: "lisa@webcraftstudio.com",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The talented professionals behind WebCraftStudio who make digital excellence possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Facebook`}
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about web
              development, design, or digital marketing, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

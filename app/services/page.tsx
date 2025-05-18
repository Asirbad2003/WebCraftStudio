import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | WebCraftStudio",
  description:
    "Explore our comprehensive web development services including HTML, CSS, JavaScript, SEO, WordPress and more.",
}

interface ServiceProps {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
}

export default function ServicesPage() {
  // Update the services array with the undraw images
  const services: ServiceProps[] = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites built with HTML, CSS, and JavaScript that are fast, responsive, and optimized for all devices.",
      features: [
        "Responsive design for all devices",
        "Custom functionality and features",
        "Performance optimization",
        "Cross-browser compatibility",
        "SEO-friendly code structure",
      ],
      image: "/images/undraw_web-development.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
    {
      id: "wordpress-development",
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins that give you complete control over your content and design.",
      features: [
        "Custom theme development",
        "Plugin development and customization",
        "E-commerce integration with WooCommerce",
        "Performance optimization",
        "Security hardening",
      ],
      image: "/images/undraw_wordpress.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      ),
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Technical SEO improvements",
        "Content strategy development",
        "Performance monitoring and reporting",
      ],
      image: "/images/undraw_search-engines.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that provide exceptional user experiences.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Interaction design",
      ],
      image: "/images/undraw_design-tools.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M12 2H2v10h10V2z" />
          <path d="M22 12h-10v10h10V12z" />
          <path d="M12 12H2v10h10V12z" />
          <path d="M22 2h-10v10h10V2z" />
        </svg>
      ),
    },
    {
      id: "ecommerce-solutions",
      title: "E-Commerce Solutions",
      description:
        "Custom online stores with secure payment processing, inventory management, and user-friendly shopping experiences.",
      features: [
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory management systems",
        "Order fulfillment automation",
      ],
      image: "/images/undraw_web-shopping-2.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.26A6.64 6.64 0 0 1 12 5z" />
          <path d="M8 14v.5" />
          <path d="M16 14v.5" />
          <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
        </svg>
      ),
    },
    {
      id: "content-management",
      title: "Content Management",
      description: "Custom content management systems that make it easy to update and manage your website content.",
      features: [
        "Custom CMS development",
        "Content strategy and planning",
        "Content migration and organization",
        "User role and permission management",
        "Content workflow automation",
      ],
      image: "/images/undraw_cms.svg",
      icon: (
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
          className="h-10 w-10"
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive web development solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue={services[0].id} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="px-4 py-2 m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button size="lg" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work with you to bring your vision to life
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, and requirements to create a tailored solution.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Planning</h3>
                <p className="text-muted-foreground">
                  We create a detailed plan including sitemap, wireframes, and design concepts for your approval.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Development</h3>
                <p className="text-muted-foreground">
                  Our team builds your website using the latest technologies and best practices for optimal performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Launch & Support</h3>
                <p className="text-muted-foreground">
                  After thorough testing, we launch your website and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Packages</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options to suit your needs and budget
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">₹10,000</div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>5-page responsive website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Mobile-friendly design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Basic SEO setup</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-primary">
              <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Professional</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">₹25,000</div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>10-page responsive website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced contact form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Comprehensive SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Social media integration</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For established businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">₹50,000</div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>20+ page responsive website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Custom functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>E-commerce capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced SEO strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-6 text-lg opacity-90">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

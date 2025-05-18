import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Started | WebCraftStudio",
  description:
    "Start your web development project with WebCraftStudio. Learn about our process and how we can help you achieve your goals.",
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's <span className="text-primary">Get Started</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your online presence? Here's how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, effective approach to bringing your vision to life
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Discovery</h3>
                <p className="text-muted-foreground mb-4">
                  We start by understanding your business, goals, and requirements to create a tailored solution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Requirements gathering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Goal definition</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Planning</h3>
                <p className="text-muted-foreground mb-4">
                  We create a detailed plan including sitemap, wireframes, and design concepts for your approval.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sitemap creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Wireframe development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Design concept approval</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Development</h3>
                <p className="text-muted-foreground mb-4">
                  Our team builds your website using the latest technologies and best practices for optimal performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Frontend development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Backend integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Content implementation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card p-8 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Launch & Support</h3>
                <p className="text-muted-foreground mb-4">
                  After thorough testing, we launch your website and provide ongoing support and maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Quality assurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Website deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ongoing maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Packages</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options to suit your needs and budget
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-muted-foreground mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹10,000</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
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
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-muted-foreground mb-6">Ideal for growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹25,000</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
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
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For established businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹50,000</span>
                  <span className="text-muted-foreground"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
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
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Need a custom solution? Contact us for a personalized quote.</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">How long does it take to build a website?</h3>
                <p className="text-muted-foreground">
                  The timeline varies depending on the complexity of the project. A basic website typically takes 2-4
                  weeks, while more complex projects can take 8-12 weeks or more.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer website maintenance services?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing
                  optimally. This includes regular updates, security monitoring, and technical support.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Will my website be mobile-friendly?</h3>
                <p className="text-muted-foreground">
                  All our websites are built with responsive design, ensuring they look and function perfectly on all
                  devices, from desktops to smartphones.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you provide content for the website?</h3>
                <p className="text-muted-foreground">
                  We can help with content creation for an additional fee. However, most clients prefer to provide their
                  own content as they know their business best. We're happy to guide you through the process.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept credit cards, bank transfers, and PayPal. We typically require a 50% deposit to begin work,
                  with the remaining balance due upon completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Online Presence?</h2>
            <p className="mt-6 text-lg opacity-90">
              Let's work together to create a website that helps your business stand out and succeed online.
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

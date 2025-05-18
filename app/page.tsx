import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import RandomImage from "@/components/random-image"
import WhatsAppButton from "@/components/whatsapp-button"
import LiveChat from "@/components/live-chat"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import NewsletterSignup from "@/components/newsletter-signup"
import ClientLogos from "@/components/client-logos"
import PortfolioSection from "@/components/portfolio-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Crafting Digital <span className="text-primary">Experiences</span> That Stand Out
              </h1>
              <p className="mb-10 text-lg text-muted-foreground md:text-xl">
                We build stunning, high-performance websites and web applications that help your business grow and
                succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_40%)]"></div>
        </section>

        {/* Client Logos Section */}
        <ClientLogos />

        {/* Featured Project Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Project</h2>
              <p className="mt-4 text-lg text-muted-foreground">Explore our latest work</p>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
              <RandomImage />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={
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
                }
                title="Web Development"
                description="Custom websites built with HTML, CSS, and JavaScript that are fast, responsive, and optimized for all devices."
              />
              <ServiceCard
                icon={
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
                }
                title="WordPress Development"
                description="Custom WordPress themes and plugins that give you complete control over your content and design."
              />
              <ServiceCard
                icon={
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
                }
                title="SEO Optimization"
                description="Improve your search engine rankings and drive more organic traffic to your website."
              />
            </div>
            <div className="mt-10 text-center">
              <Button asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About WebCraftStudio</h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  WebCraftStudio is a passionate team of web developers and designers dedicated to creating exceptional
                  digital experiences. We combine technical expertise with creative design to deliver websites that not
                  only look great but also perform exceptionally well.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our mission is to help businesses of all sizes establish a strong online presence that drives growth
                  and success. We believe in transparent communication, attention to detail, and delivering projects
                  that exceed expectations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">100+</span>
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">50+</span>
                    <span className="text-sm text-muted-foreground">Happy Clients</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">5+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/images/undraw_engineering-team.svg"
                    alt="WebCraftStudio team"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 aspect-square w-1/2 rounded-lg bg-primary p-6 text-primary-foreground">
                  <div className="flex h-full flex-col justify-between">
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
                      className="h-8 w-8 opacity-50"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-lg font-medium">We turn your digital dreams into reality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/30">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                company="Bloom Boutique"
                image="/images/testimonial-1.svg"
                quote="WebCraftStudio transformed our online presence. Our new website is not only beautiful but has significantly increased our sales. Highly recommended!"
              />
              <TestimonialCard
                name="Michael Chen"
                company="Tech Innovations"
                image="/images/testimonial-1.svg"
                quote="The team at WebCraftStudio delivered our project on time and on budget. Their attention to detail and technical expertise is impressive."
              />
              <TestimonialCard
                name="Emily Rodriguez"
                company="Sunset Restaurant"
                image="/images/testimonial-1.svg"
                quote="Our booking system has streamlined our operations and improved customer satisfaction. WebCraftStudio understood our needs perfectly."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Newsletter Section */}
        <NewsletterSignup />

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="mt-6 text-lg opacity-90">
                Let's work together to create a website that helps your business stand out and succeed online.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#contact">Get Started Today</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have a project in mind? Let's discuss how we can help you achieve your goals.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="mt-1 text-muted-foreground">+91 9348792781</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
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
                        className="h-6 w-6"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="mt-1 text-muted-foreground">hello@webcraftstudio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="mt-1 text-muted-foreground">Message us directly on WhatsApp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Send Us a Message</h2>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <form action="https://formspree.io/f/xrbpbbvd" method="POST" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        defaultValue="9348792781"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="wordpress">WordPress Development</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="ecommerce">E-Commerce Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select budget range</option>
                        <option value="10000-25000">₹10,000 - ₹25,000</option>
                        <option value="25000-50000">₹25,000 - ₹50,000</option>
                        <option value="50000-100000">₹50,000 - ₹100,000</option>
                        <option value="100000+">₹100,000+</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919348792781" />

      {/* Live Chat */}
      <LiveChat />
    </div>
  )
}

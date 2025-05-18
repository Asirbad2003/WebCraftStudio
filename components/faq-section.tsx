"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does WebCraftStudio offer?",
    answer:
      "WebCraftStudio offers a comprehensive range of web development services including custom website design, WordPress development, e-commerce solutions, SEO optimization, UI/UX design, and ongoing website maintenance and support.",
    category: "services",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for website development varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex projects with custom functionality could take 8-12 weeks or more. We'll provide you with a detailed timeline during our initial consultation.",
    category: "process",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on your specific requirements. We offer packages starting from ₹10,000 for basic websites, with custom solutions priced according to complexity, features, and scope. We provide detailed quotes after understanding your project needs.",
    category: "pricing",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer comprehensive website maintenance services to keep your site secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, and technical support.",
    category: "services",
  },
  {
    question: "Can you help improve my website's search engine rankings?",
    answer:
      "We offer specialized SEO services designed to improve your website's visibility in search engines. Our approach includes keyword research, on-page optimization, technical SEO improvements, content strategy, and performance enhancements to help your site rank higher.",
    category: "seo",
  },
  {
    question: "Do you work with clients outside of India?",
    answer:
      "Yes, we work with clients globally. Our team is experienced in collaborating remotely with clients from different time zones. We use efficient communication tools and processes to ensure smooth project management regardless of geographical location.",
    category: "general",
  },
  {
    question: "What is your design process?",
    answer:
      "Our design process begins with understanding your business goals and target audience. We then create wireframes and mockups for your approval before moving to development. We believe in collaborative design, incorporating your feedback at every stage to ensure the final product aligns with your vision.",
    category: "process",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "While we don't directly provide hosting, we can recommend reliable hosting providers based on your specific needs and budget. We also offer setup and configuration services to ensure your website is properly deployed and optimized on your chosen hosting platform.",
    category: "services",
  },
  {
    question: "How do you handle website security?",
    answer:
      "Security is a top priority in all our projects. We implement industry best practices including secure coding standards, regular updates, SSL certificates, firewall configuration, and security plugins. For e-commerce sites, we ensure PCI compliance and implement additional security measures.",
    category: "technical",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "After launch, we provide a handover document with all necessary information about your website. We offer training sessions to help you manage content updates. We also recommend ongoing maintenance plans to keep your site secure and up-to-date, and remain available for future enhancements.",
    category: "process",
  },
]

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "services", name: "Services" },
    { id: "process", name: "Process" },
    { id: "pricing", name: "Pricing" },
    { id: "technical", name: "Technical" },
    { id: "seo", name: "SEO" },
    { id: "general", name: "General" },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="classic-border mb-4">
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No questions found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sitemap | WebCraftStudio",
  description: "Navigate through all pages of our website with our comprehensive sitemap.",
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Team", url: "/team" },
        { name: "Contact", url: "/contact" },
        { name: "Get Started", url: "/get-started" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "/services#web-development" },
        { name: "WordPress Development", url: "/services#wordpress-development" },
        { name: "SEO Optimization", url: "/services#seo-optimization" },
        { name: "Responsive Design", url: "/services#responsive-design" },
        { name: "Performance Optimization", url: "/services#performance-optimization" },
        { name: "UI/UX Design", url: "/services#ui-ux-design" },
        { name: "E-Commerce Solutions", url: "/services#ecommerce-solutions" },
        { name: "Content Management", url: "/services#content-management" },
        { name: "Website Maintenance", url: "/services#website-maintenance" },
      ],
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Sitemap", url: "/sitemap" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Portfolio", url: "/portfolio" },
        { name: "FAQ", url: "/faq" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-16">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url} className="text-primary hover:underline flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">XML Sitemap</h2>
          <p className="mb-4">For search engines, we also provide an XML version of our sitemap at:</p>
          <code className="bg-card p-3 rounded block">https://webcraftstudio.com/sitemap.xml</code>
        </div>
      </div>
    </div>
  )
}

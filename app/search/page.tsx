"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, SearchIcon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Sample search results data
const allResults = [
  {
    id: 1,
    title: "Web Development Services",
    excerpt:
      "Custom websites built with HTML, CSS, and JavaScript that are fast, responsive, and optimized for all devices.",
    type: "service",
    url: "/services#web-development",
    image: "/images/undraw_web-development.svg",
  },
  {
    id: 2,
    title: "WordPress Development",
    excerpt: "Custom WordPress themes and plugins that give you complete control over your content and design.",
    type: "service",
    url: "/services#wordpress-development",
    image: "/images/undraw_wordpress.svg",
  },
  {
    id: 3,
    title: "SEO Optimization",
    excerpt: "Improve your search engine rankings and drive more organic traffic to your website.",
    type: "service",
    url: "/services#seo-optimization",
    image: "/images/undraw_search-engines.svg",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    excerpt: "A fully responsive e-commerce platform with custom product filtering and checkout.",
    type: "project",
    url: "/portfolio#e-commerce",
    image: "/images/undraw_web-shopping.svg",
  },
  {
    id: 5,
    title: "10 Essential Web Design Trends for 2025",
    excerpt:
      "Discover the cutting-edge design trends that will dominate the web in 2025 and how to implement them in your projects.",
    type: "blog",
    url: "/blog/web-design-trends-2025",
    image: "/images/undraw_design-tools.svg",
  },
  {
    id: 6,
    title: "How to Optimize Your Website for Core Web Vitals",
    excerpt:
      "Learn practical strategies to improve your site's performance metrics and boost your search engine rankings.",
    type: "blog",
    url: "/blog/optimize-core-web-vitals",
    image: "/images/undraw_web-development.svg",
  },
  {
    id: 7,
    title: "About WebCraftStudio",
    excerpt: "Learn more about our team, mission, and values.",
    type: "page",
    url: "/about",
    image: "/images/undraw_engineering-team.svg",
  },
  {
    id: 8,
    title: "Contact Us",
    excerpt: "Get in touch with our team to discuss your project.",
    type: "page",
    url: "/contact",
    image: "/images/undraw_male-avatar.svg",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState([])
  const [filters, setFilters] = useState({
    services: true,
    projects: true,
    blog: true,
    pages: true,
  })

  useEffect(() => {
    // Filter results based on search query and selected filters
    if (searchQuery.trim() === "") {
      setResults([])
      return
    }

    const filteredResults = allResults.filter((result) => {
      const matchesQuery =
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesFilter =
        (result.type === "service" && filters.services) ||
        (result.type === "project" && filters.projects) ||
        (result.type === "blog" && filters.blog) ||
        (result.type === "page" && filters.pages)

      return matchesQuery && matchesFilter
    })

    setResults(filteredResults)
  }, [searchQuery, filters])

  const handleSearch = (e) => {
    e.preventDefault()
    // Update URL with search query
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`)
  }

  const handleFilterChange = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-16">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Search</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Find information about our services, projects, blog posts, and more.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <form onSubmit={handleSearch} className="mb-8 flex gap-2">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search for services, projects, blog posts..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Filter className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your search results by content type.</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mobile-services"
                        checked={filters.services}
                        onCheckedChange={() => handleFilterChange("services")}
                      />
                      <Label htmlFor="mobile-services">Services</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mobile-projects"
                        checked={filters.projects}
                        onCheckedChange={() => handleFilterChange("projects")}
                      />
                      <Label htmlFor="mobile-projects">Projects</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mobile-blog"
                        checked={filters.blog}
                        onCheckedChange={() => handleFilterChange("blog")}
                      />
                      <Label htmlFor="mobile-blog">Blog Posts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mobile-pages"
                        checked={filters.pages}
                        onCheckedChange={() => handleFilterChange("pages")}
                      />
                      <Label htmlFor="mobile-pages">Pages</Label>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </form>

            {searchQuery && (
              <div className="mb-6">
                <h2 className="text-xl font-medium mb-2">
                  {results.length > 0
                    ? `Found ${results.length} results for "${searchQuery}"`
                    : `No results found for "${searchQuery}"`}
                </h2>
              </div>
            )}

            <div className="space-y-6">
              {results.map((result) => (
                <Card key={result.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-muted">
                      <div className="h-full">
                        <img
                          src={result.image || "/placeholder.svg"}
                          alt={result.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="capitalize">
                            {result.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                          <Link href={result.url}>{result.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-muted-foreground">{result.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="text-primary" asChild>
                          <Link href={result.url}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}

              {searchQuery && results.length === 0 && (
                <div className="text-center py-12">
                  <div className="mx-auto w-24 h-24 mb-6 text-muted-foreground">
                    <SearchIcon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any matches for your search. Try different keywords or filters.
                  </p>
                  <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/4 hidden md:block">
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-medium mb-4">Filters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="services"
                    checked={filters.services}
                    onCheckedChange={() => handleFilterChange("services")}
                  />
                  <Label htmlFor="services">Services</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="projects"
                    checked={filters.projects}
                    onCheckedChange={() => handleFilterChange("projects")}
                  />
                  <Label htmlFor="projects">Projects</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="blog" checked={filters.blog} onCheckedChange={() => handleFilterChange("blog")} />
                  <Label htmlFor="blog">Blog Posts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pages" checked={filters.pages} onCheckedChange={() => handleFilterChange("pages")} />
                  <Label htmlFor="pages">Pages</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

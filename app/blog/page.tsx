import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | WebCraftStudio",
  description:
    "Explore our latest articles, tutorials, and insights on web development, design, SEO, and digital marketing.",
}

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2025",
    excerpt:
      "Discover the cutting-edge design trends that will dominate the web in 2025 and how to implement them in your projects.",
    date: "March 15, 2025",
    author: "John Smith",
    category: "Design",
    image: "/images/undraw_design-tools.svg",
    slug: "web-design-trends-2025",
    featured: true,
  },
  {
    id: 2,
    title: "How to Optimize Your Website for Core Web Vitals",
    excerpt:
      "Learn practical strategies to improve your site's performance metrics and boost your search engine rankings.",
    date: "March 10, 2025",
    author: "Emma Johnson",
    category: "Performance",
    image: "/images/undraw_web-development.svg",
    slug: "optimize-core-web-vitals",
    featured: true,
  },
  {
    id: 3,
    title: "The Complete Guide to E-Commerce SEO",
    excerpt:
      "Master the art of optimizing your online store for search engines and drive more organic traffic to your products.",
    date: "March 5, 2025",
    author: "David Chen",
    category: "SEO",
    image: "/images/undraw_search-engines.svg",
    slug: "ecommerce-seo-guide",
    featured: false,
  },
  {
    id: 4,
    title: "WordPress vs. Custom Development: Which is Right for Your Business?",
    excerpt:
      "Compare the pros and cons of WordPress and custom development to make the best choice for your business website.",
    date: "February 28, 2025",
    author: "Sarah Williams",
    category: "Development",
    image: "/images/undraw_wordpress.svg",
    slug: "wordpress-vs-custom-development",
    featured: false,
  },
  {
    id: 5,
    title: "How to Create a Successful Content Marketing Strategy",
    excerpt:
      "Learn how to develop a content marketing strategy that drives traffic, engages your audience, and converts visitors into customers.",
    date: "February 20, 2025",
    author: "Michael Rodriguez",
    category: "Marketing",
    image: "/images/undraw_cms.svg",
    slug: "content-marketing-strategy",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile-First Design: Best Practices for 2025",
    excerpt:
      "Discover the essential principles and techniques for creating effective mobile-first websites that provide an excellent user experience.",
    date: "February 15, 2025",
    author: "Lisa Patel",
    category: "Design",
    image: "/images/undraw_web-shopping.svg",
    slug: "mobile-first-design-best-practices",
    featured: false,
  },
]

const categories = [
  { name: "All", value: "all" },
  { name: "Design", value: "design" },
  { name: "Development", value: "development" },
  { name: "SEO", value: "seo" },
  { name: "Marketing", value: "marketing" },
  { name: "Performance", value: "performance" },
]

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our latest articles, tutorials, and insights on web development, design, SEO, and digital marketing.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="mb-8">
              <Input type="search" placeholder="Search articles..." className="max-w-md" />
            </div>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="mb-6 flex flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                <div className="grid gap-8 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                      <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs font-medium">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <CardTitle className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm flex items-center gap-2">
                          <User className="h-3 w-3" /> {post.author}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4 flex-grow">
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="text-primary" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {categories.slice(1).map((category) => (
                <TabsContent key={category.value} value={category.value}>
                  <div className="grid gap-8 md:grid-cols-2">
                    {blogPosts
                      .filter((post) => post.category.toLowerCase() === category.name.toLowerCase())
                      .map((post) => (
                        <Card
                          key={post.id}
                          className="flex flex-col h-full transition-all duration-200 hover:shadow-lg"
                        >
                          <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="text-xs font-medium">
                                {post.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{post.date}</span>
                            </div>
                            <CardTitle className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </CardTitle>
                            <CardDescription className="text-sm flex items-center gap-2">
                              <User className="h-3 w-3" /> {post.author}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-4 flex-grow">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="ghost" size="sm" className="text-primary" asChild>
                              <Link href={`/blog/${post.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="md:w-1/4">
            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.value}>
                    <Link
                      href={`#${category.value}`}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Tag className="h-4 w-4" />
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-medium mb-4">Featured Posts</h3>
              <div className="space-y-4">
                {blogPosts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm leading-tight hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm mb-4 opacity-90">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-foreground text-foreground"
                  required
                />
                <Button variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

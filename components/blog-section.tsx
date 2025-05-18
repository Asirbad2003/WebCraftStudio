import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest Insights</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in web development and digital marketing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="enhanced-card flex flex-col h-full">
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
                <CardDescription className="text-sm">By {post.author}</CardDescription>
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

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

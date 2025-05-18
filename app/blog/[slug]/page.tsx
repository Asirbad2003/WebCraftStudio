import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2025",
    content: `
      <p class="mb-4">The web design landscape is constantly evolving, with new trends emerging each year. As we move into 2025, several key design trends are set to dominate the digital space. These trends not only enhance the visual appeal of websites but also improve user experience and functionality.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Immersive 3D Elements</h2>
      <p class="mb-4">Three-dimensional design elements are becoming increasingly popular, adding depth and interactivity to websites. With advancements in WebGL and browser capabilities, designers can now incorporate stunning 3D visuals without sacrificing performance.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Dark Mode as Standard</h2>
      <p class="mb-4">Dark mode is no longer just an alternative option but is becoming a standard design feature. It reduces eye strain, saves battery life on OLED screens, and creates a sophisticated aesthetic that many users prefer.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Micro-interactions</h2>
      <p class="mb-4">Small, subtle animations that respond to user actions are enhancing engagement across websites. These micro-interactions provide immediate feedback, guide users through their journey, and add personality to digital interfaces.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Voice User Interface Integration</h2>
      <p class="mb-4">As voice search continues to grow, websites are increasingly incorporating voice user interfaces. This trend is making websites more accessible and convenient for users across different devices.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Minimalist Navigation</h2>
      <p class="mb-4">Simplified navigation structures are becoming more prevalent, focusing on essential elements and reducing cognitive load for users. This approach creates cleaner interfaces and improves the overall user experience.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Staying current with these web design trends will help ensure your website remains modern, user-friendly, and competitive in the digital landscape. At WebCraftStudio, we're committed to implementing these cutting-edge design elements while maintaining focus on performance and usability.</p>
    `,
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
    content: `
      <p class="mb-4">Core Web Vitals have become crucial metrics for website performance and user experience. Google now uses these metrics as ranking factors, making optimization essential for SEO success.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Understanding Core Web Vitals</h2>
      <p class="mb-4">Core Web Vitals consist of three specific metrics that measure loading performance, interactivity, and visual stability:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. For a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
        <li class="mb-2"><strong>First Input Delay (FID):</strong> Measures interactivity. Pages should have an FID of less than 100 milliseconds.</li>
        <li class="mb-2"><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. Pages should maintain a CLS of less than 0.1.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Optimization Strategies</h2>
      <p class="mb-4">Here are effective strategies to improve your Core Web Vitals scores:</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Improving LCP</h3>
      <p class="mb-4">To enhance loading performance:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Optimize and compress images</li>
        <li class="mb-2">Implement efficient caching policies</li>
        <li class="mb-2">Reduce server response times</li>
        <li class="mb-2">Use content delivery networks (CDNs)</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Reducing FID</h3>
      <p class="mb-4">To improve interactivity:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Minimize JavaScript execution time</li>
        <li class="mb-2">Break up long tasks</li>
        <li class="mb-2">Optimize event handlers</li>
        <li class="mb-2">Use web workers for complex operations</li>
      </ul>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Minimizing CLS</h3>
      <p class="mb-4">To enhance visual stability:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Always include size attributes on images and videos</li>
        <li class="mb-2">Reserve space for ads and embeds</li>
        <li class="mb-2">Avoid inserting content above existing content</li>
        <li class="mb-2">Use transform animations instead of animations that trigger layout changes</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Optimizing for Core Web Vitals not only improves your search rankings but also enhances user experience, leading to higher engagement and conversion rates. At WebCraftStudio, we prioritize these performance metrics in all our web development projects.</p>
    `,
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
    content: `
      <p class="mb-4">E-commerce SEO is a specialized field that focuses on optimizing online stores to rank higher in search engine results. With the right strategies, you can drive more organic traffic to your products and increase sales.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">E-commerce SEO Fundamentals</h2>
      <p class="mb-4">Before diving into specific tactics, it's important to understand the key components of e-commerce SEO:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Keyword Research:</strong> Identifying the terms potential customers use when searching for your products</li>
        <li class="mb-2"><strong>On-Page Optimization:</strong> Optimizing product pages, category pages, and content</li>
        <li class="mb-2"><strong>Technical SEO:</strong> Ensuring your site is crawlable, fast, and mobile-friendly</li>
        <li class="mb-2"><strong>Link Building:</strong> Acquiring quality backlinks to boost authority</li>
        <li class="mb-2"><strong>User Experience:</strong> Creating a seamless shopping experience</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Product Page Optimization</h2>
      <p class="mb-4">Your product pages are the heart of your e-commerce site. Here's how to optimize them:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Write unique, detailed product descriptions</li>
        <li class="mb-2">Use high-quality images with descriptive alt text</li>
        <li class="mb-2">Include product specifications and dimensions</li>
        <li class="mb-2">Add customer reviews and ratings</li>
        <li class="mb-2">Implement schema markup for rich snippets</li>
        <li class="mb-2">Optimize page titles and meta descriptions with relevant keywords</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Category Page Optimization</h2>
      <p class="mb-4">Category pages help users navigate your store and are crucial for SEO:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Create a logical, hierarchical category structure</li>
        <li class="mb-2">Write unique category descriptions</li>
        <li class="mb-2">Implement faceted navigation for filtering products</li>
        <li class="mb-2">Use breadcrumbs for improved navigation and SEO</li>
        <li class="mb-2">Optimize category page titles and meta descriptions</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Technical E-commerce SEO</h2>
      <p class="mb-4">Technical aspects that are particularly important for e-commerce sites:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Implement a logical URL structure</li>
        <li class="mb-2">Create and submit an XML sitemap</li>
        <li class="mb-2">Manage duplicate content with canonical tags</li>
        <li class="mb-2">Optimize site speed and mobile responsiveness</li>
        <li class="mb-2">Handle out-of-stock products properly</li>
        <li class="mb-2">Set up proper redirects for discontinued products</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">E-commerce SEO is an ongoing process that requires consistent effort and adaptation to changing algorithms. By implementing these strategies, you can improve your online store's visibility and drive more qualified traffic to your products.</p>
    `,
    excerpt:
      "Master the art of optimizing your online store for search engines and drive more organic traffic to your products.",
    date: "March 5, 2025",
    author: "David Chen",
    category: "SEO",
    image: "/images/undraw_search-engines.svg",
    slug: "ecommerce-seo-guide",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="mb-8 text-muted-foreground">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <article className="bg-card rounded-lg shadow-sm overflow-hidden">
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge variant="outline" className="text-xs font-medium">
              <Tag className="mr-1 h-3 w-3" /> {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center">
              <Calendar className="mr-1 h-3 w-3" /> {post.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center">
              <User className="mr-1 h-3 w-3" /> {post.author}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{post.title}</h1>

          <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" size="sm">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" size="sm">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

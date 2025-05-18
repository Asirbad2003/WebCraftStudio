import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-muted/50 py-16 border-t">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                  <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                    W
                  </div>
                </div>
                <span className="text-xl font-bold">WebCraftStudio</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Crafting exceptional digital experiences that help businesses grow and succeed online.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/get-started" className="text-muted-foreground hover:text-foreground transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services#web-development"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#wordpress-development"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#seo-optimization"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ui-ux-design"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#ecommerce-solutions"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">+91 9348792781</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">hello@webcraftstudio.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Serving clients worldwide</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-muted py-4 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WebCraftStudio. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

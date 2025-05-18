"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation"
import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Menu } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span>+91 9348792781</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-1" />
                <span>hello@webcraftstudio.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-primary-foreground hover:text-white/80 transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                W
              </div>
            </div>
            <span className="text-xl font-bold">WebCraftStudio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Services
            </Link>
            <Link
              href="/team"
              className={`text-sm font-medium transition-colors ${isActive("/team") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Team
            </Link>
            <Link
              href="/analytics"
              className={`text-sm font-medium transition-colors ${isActive("/analytics") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Analytics
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <a href="#contact">Get Started</a>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    href="/"
                    className={`text-lg font-medium transition-colors ${isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`text-lg font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className={`text-lg font-medium transition-colors ${isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/team"
                    className={`text-lg font-medium transition-colors ${isActive("/team") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/analytics"
                    className={`text-lg font-medium transition-colors ${isActive("/analytics") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-lg font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button asChild>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

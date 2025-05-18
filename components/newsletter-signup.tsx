"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/actions/newsletter"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    startTransition(async () => {
      const result = await subscribeToNewsletter(new FormData(e.target as HTMLFormElement))

      if (result.success) {
        setStatus("success")
        setMessage(result.message)
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(result.message)
      }
    })
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-lg opacity-90 mb-8">
            Subscribe to our newsletter for the latest web development trends, tips, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                name="name"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                disabled={isPending}
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                required
                disabled={isPending}
              />
            </div>
            <Button type="submit" variant="secondary" className="w-full sm:w-auto" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe Now"
              )}
            </Button>
          </form>

          {status === "success" && (
            <Alert className="mt-4 bg-green-100 text-green-800 border-green-200 max-w-md mx-auto">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {status === "error" && (
            <Alert className="mt-4 bg-red-100 text-red-800 border-red-200 max-w-md mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <p className="mt-4 text-sm opacity-80">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

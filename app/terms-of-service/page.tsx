import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | WebCraftStudio",
  description: "Our terms of service outline the rules and guidelines for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-16 max-w-4xl">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to WebCraftStudio. These Terms of Service govern your use of our website and services. By accessing
            our website or using our services, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
          <p>In these Terms of Service:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <strong>"We", "Us", "Our"</strong> refers to WebCraftStudio.
            </li>
            <li>
              <strong>"You", "Your"</strong> refers to the user or viewer of our website or services.
            </li>
            <li>
              <strong>"Services"</strong> refers to all web development, design, and related services provided by
              WebCraftStudio.
            </li>
            <li>
              <strong>"Website"</strong> refers to the website operated by WebCraftStudio.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Services</h2>
          <p>
            WebCraftStudio provides web development, design, and related services. The specific details, deliverables,
            timelines, and costs of these services will be outlined in a separate agreement or proposal provided to you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment Terms</h2>
          <p>
            Payment terms will be specified in the agreement or proposal provided to you. Generally, we require a 50%
            deposit to begin work, with the remaining balance due upon completion of the project.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property Rights</h2>
          <p>
            Upon full payment, you will own the rights to the final deliverables created specifically for you. However,
            we retain the rights to any pre-existing materials, tools, or frameworks used in the creation of your
            project.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            WebCraftStudio shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your access to or use of or inability to access or use the services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
          <p>
            Either party may terminate the service agreement with written notice. If you terminate the agreement, you
            agree to pay for all services rendered up to the termination date. If we terminate the agreement, we will
            provide you with all completed work and a prorated refund for any prepaid services not rendered.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by
            posting the new Terms of Service on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> hello@webcraftstudio.com
            <br />
            <strong>Phone:</strong> +91 9348792781
          </p>
        </div>
      </div>
    </div>
  )
}

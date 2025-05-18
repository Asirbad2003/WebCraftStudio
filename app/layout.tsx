import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import { baseMetadata } from "./metadata"
import SchemaOrg from "@/components/schema-org"

const inter = Inter({ subsets: ["latin"] })

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://webcraftstudio.site" />
        <meta name="theme-color" content="#3b82f6" />
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WebCraftStudio",
              "url": "https://www.webcraftstudio.site",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.webcraftstudio.site/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebCraftStudio",
              "url": "https://www.webcraftstudio.site",
              "logo": "https://www.webcraftstudio.site/favicon.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9348792781",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/webcraftstudio",
                "https://twitter.com/webcraftstudio",
                "https://instagram.com/webcraftstudio",
                "https://linkedin.com/company/webcraftstudio"
              ]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SchemaOrg />
      </body>
    </html>
  )
}

import type { Metadata } from "next"

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://webcraftstudio.site"),
  title: {
    default: "WebCraftStudio - Professional Web Development Services",
    template: "%s | WebCraftStudio",
  },
  description:
    "WebCraftStudio offers professional web development services including custom websites, WordPress, SEO, and more. We create modern, responsive websites that help businesses succeed online.",
  keywords: ["web development", "website design", "WordPress", "SEO", "responsive design", "web agency", "India"],
  authors: [{ name: "WebCraftStudio Team" }],
  creator: "WebCraftStudio",
  publisher: "WebCraftStudio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webcraftstudio.site",
    siteName: "WebCraftStudio",
    title: "WebCraftStudio - Professional Web Development Services",
    description:
      "Custom websites, WordPress development, SEO, and more. We create modern, responsive websites that help businesses succeed online.",
    images: [
      {
        url: "https://webcraftstudio.site/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebCraftStudio - Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCraftStudio - Professional Web Development Services",
    description:
      "Custom websites, WordPress development, SEO, and more. We create modern, responsive websites that help businesses succeed online.",
    images: ["https://webcraftstudio.site/images/twitter-image.jpg"],
    creator: "@webcraftstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "https://webcraftstudio.site/site.webmanifest",
  alternates: {
    canonical: "https://webcraftstudio.site",
  },
}

// Function to generate page-specific metadata
export function generateMetadata(title: string, description?: string, ogImage?: string, canonical?: string): Metadata {
  return {
    title,
    description: description || baseMetadata.description,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: description || baseMetadata.openGraph?.description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: description || baseMetadata.twitter?.description,
      images: ogImage ? [ogImage] : baseMetadata.twitter?.images,
    },
    alternates: {
      canonical: canonical || baseMetadata.alternates?.canonical,
    },
  }
}

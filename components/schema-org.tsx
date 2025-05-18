import Script from "next/script"

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebCraftStudio",
    url: "https://webcraftstudio.site",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://webcraftstudio.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://facebook.com/webcraftstudio",
      "https://twitter.com/webcraftstudio",
      "https://linkedin.com/company/webcraftstudio",
      "https://instagram.com/webcraftstudio",
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebCraftStudio",
    url: "https://webcraftstudio.site",
    logo: "https://webcraftstudio.site/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9348792781",
      contactType: "customer service",
      email: "hello@webcraftstudio.site",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
  }

  return (
    <>
      <Script id="schema-website" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <Script id="schema-organization" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
    </>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
    icons: {
    icon: "/ps.png", // أو "/favicon.ico" حسب الملف الموجود
    
  },
  
  title: "Save My Family — Help Us Reach Safety | Gaza Emergency Fund",
  description:
    "Our family in Gaza urgently needs your help to survive and find safety. Every donation brings us closer to hope. Support a Palestinian family in crisis.",
  keywords:
    "Gaza, Palestine, donation, emergency fund, humanitarian aid, family support, Palestinian crisis, urgent help, charity, fundraising",
  authors: [{ name: "Gaza Family Emergency Fund" }],
  creator: "Gaza Family Emergency Fund",
  publisher: "Gaza Family Emergency Fund",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gazafamily.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ar-PS": "/?lang=ar",
    },
  },
  openGraph: {
    title: "Save My Family — Help Us Reach Safety | Gaza Emergency Fund",
    description:
      "Our family in Gaza urgently needs your help to survive and find safety. Every donation brings us closer to hope.",
    url: "https://gazafamily.org",
    siteName: "Gaza Family Emergency Fund",
    images: [
      {
        url: "/ps.png",
        width: 1200,
        height: 630,
        alt: "Gaza Family Emergency Fund - Help Save Our Family",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_PS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Save My Family — Help Us Reach Safety",
    description:
      "Our family in Gaza urgently needs your help to survive and find safety. Every donation brings us closer to hope.",
    images: ["/og-image.jpg"],
    creator: "@gazafamilyfund",
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
  verification: {
    google: "your-google-verification-code",
  },
  
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gaza Family Emergency Fund",
              description: "Emergency fundraising campaign for a Palestinian family in Gaza",
              url: "https://gazafamily.org",
              logo: "https://gazafamily.org/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "help@gazafamily.org",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/gazafamilyfund",
                "https://twitter.com/gazafamilyfund",
                "https://instagram.com/gazafamilyfund",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DonateAction",
              recipient: {
                "@type": "Organization",
                name: "Gaza Family Emergency Fund",
              },
              description: "Help a Palestinian family in Gaza reach safety and security",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

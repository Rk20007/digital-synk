import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "Digital Synk | Top Digital Marketing Agency to Grow Business",
  description:
    "Boost your business with Digital Synk, a trusted digital marketing agency. We specialize in SEO, Local SEO, Google & Facebook Ads, and Web Designing Services.",
  generator: "v0.app",
  other: {
    "google-site-verification": "mlMVsDQs6pWGilZu_wR2Qkxp-wR2dbJUpyTNKMTdwN8",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
        

        <Analytics />
      </body>
    </html>
  )
}

import ServicesClient from "./ServicesClient"

export const metadata = {
  title: "Our Services - DigitalHub",
  description:
    "Explore our comprehensive digital marketing services including SEO, social media marketing, web development, and more.",
  robots: "noindex, nofollow",
}

export default function ServicesPage() {
  return <ServicesClient />
}

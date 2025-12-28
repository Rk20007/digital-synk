"use client"

import { use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Service data
const servicesData = {
  seo: {
    title: "SEO Services",
    description: "Boost your website rankings and drive organic traffic with our comprehensive SEO strategies.",
    image: "seo-optimization-analytics-dashboard",
    features: [
      "On-Page SEO",
      "Off-Page SEO (Backlinks)",
      "Technical SEO",
      "Keyword Research",
      "SEO Audit & Fixes",
      "Monthly SEO Reporting",
    ],
    benefits: [
      "Increase organic traffic by up to 300%",
      "Improve search engine rankings for target keywords",
      "Build high-quality backlinks from authoritative sites",
      "Fix technical issues that hurt your SEO",
      "Get detailed monthly reports on your progress",
    ],
  },
  "local-seo": {
    title: "Local SEO",
    description: "Dominate local search results and attract more customers in your area with our local SEO expertise.",
    image: "google-maps-local-business-listing",
    features: [
      "Google My Business Setup",
      "GMB Optimization & Ranking",
      "Local Keyword Targeting",
      "Review & Reputation Management",
      "Google Map Pack Ranking",
      "Local Directory Submission",
    ],
    benefits: [
      "Appear in Google Map Pack for local searches",
      "Increase foot traffic to your physical location",
      "Build a strong online reputation with reviews",
      "Target customers in your specific service area",
      "Outrank local competitors in search results",
    ],
  },
  "facebook-instagram-ads": {
    title: "Facebook & Instagram Marketing",
    description: "Engage your audience and grow your brand with strategic social media marketing campaigns.",
    image: "social-media-marketing-engagement-analytics",
    features: [
      "Business Page Setup",
      "Post, Story & Reel Content Creation",
      "Local Audience Targeted Ads",
      "Lead Generation Ads",
      "Comment & Message Management",
      "Monthly Performance Reporting",
    ],
    benefits: [
      "Build a loyal community of engaged followers",
      "Generate quality leads through targeted ads",
      "Increase brand awareness and visibility",
      "Drive traffic to your website or store",
      "Get measurable ROI from social media",
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description: "Build a strong brand presence and engage your audience on Facebook, Instagram, LinkedIn, and WhatsApp.",
    image: "social-media-marketing-engagement-analytics",
    features: [
      "Social Media Strategy & Management",
      "Facebook & Instagram Content Creation",
      "WhatsApp Marketing & Automation",
      "LinkedIn Profile Optimization",
      "Community Engagement & Growth",
      "Monthly Performance Analytics",
    ],
    benefits: [
      "Build a loyal community across all platforms",
      "Direct customer connection via WhatsApp",
      "Increase brand visibility and awareness",
      "Consistent content delivery to your audience",
      "Drive organic traffic to your website",
    ],
  },
  // "paid-advertising": {
  //   title: "Paid Advertising",
  //   description: "Drive targeted traffic and maximize ROI with our expert paid advertising campaigns.",
  //   image: "google-ads-facebook-ads-campaign-dashboard",
  //   features: [
  //     "Google Search & Display Ads",
  //     "Call-Only Ads for Local Services",
  //     "Facebook & Instagram Ads",
  //     "YouTube Video Ads",
  //     "Geo-Targeted Campaigns",
  //     "Ads Optimization & Monthly Reports",
  //   ],
  //   benefits: [
  //     "Get immediate visibility in search results",
  //     "Target specific demographics and interests",
  //     "Pay only for results (clicks, calls, conversions)",
  //     "Scale campaigns based on performance",
  //     "Track every dollar spent with detailed analytics",
  //   ],
  // },
  "web-app-development": {
    title: "Web & App Development",
    description: "Build powerful, scalable web and mobile applications with cutting-edge technology and modern design.",
    image: "modern-web-app-development-coding",
    features: [
      "Custom Website Development",
      "Mobile App Development (iOS & Android)",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Maintenance & Support",
    ],
    benefits: [
      "Get custom solutions tailored to your business needs",
      "Reach customers on all devices and platforms",
      "Scale your application as your business grows",
      "Integrate with third-party services seamlessly",
      "Receive ongoing support and maintenance",
    ],
  },
  "ai-integration-automation": {
    title: "AI Integration & Automation Flows",
    description:
      "Transform your business with intelligent AI solutions and automated workflows that save time and increase efficiency.",
    image: "ai-artificial-intelligence-automation-workflow",
    features: [
      "AI Chatbot Development",
      "Process Automation",
      "Machine Learning Integration",
      "Data Analytics & Insights",
      "Workflow Optimization",
      "Custom AI Solutions",
    ],
    benefits: [
      "Automate repetitive tasks and save time",
      "Improve customer service with AI chatbots",
      "Make data-driven decisions with AI insights",
      "Reduce operational costs significantly",
      "Stay ahead of competition with cutting-edge technology",
    ],
  },
  "web-development": {
    title: "Website Design & Development",
    description: "Get a stunning, fast, and conversion-optimized website that represents your brand perfectly.",
    image: "modern-web-app-development-coding",
    features: [
      "Business Website (One-page or Multi-page)",
      "Mobile-Responsive Design",
      "WhatsApp Chat Integration",
      "Lead Capture Forms",
      "Fast Loading Speed",
      "Shopify Store Development",
    ],
    benefits: [
      "Make a great first impression with professional design",
      "Convert more visitors into customers",
      "Ensure perfect display on all devices",
      "Improve user experience and engagement",
      "Get found on search engines with SEO-friendly code",
    ],
  },
  "email-marketing": {
    title: "Email Marketing Services",
    description: "Connect with your audience directly, nurture leads, and drive sales with personalized email campaigns.",
    image: "email-marketing-1",
    features: [
      "Campaign Strategy & Planning",
      "Custom Newsletter Design",
      "Automated Email Flows (Drip)",
      "Subscriber List Management",
      "A/B Testing & Optimization",
      "Detailed Analytics Reports",
    ],
    benefits: [
      "Cost-effective with high ROI",
      "Personalized customer engagement",
      "Drive repeat sales and retention",
      "Automate customer journeys",
      "Instant reach to your audience",
    ],
  },
  "graphic-design": {
    title: "Graphic Designing",
    description: "Stand out from the competition with eye-catching designs that capture attention.",
    image: "graphic-design-branding-creative-work",
    features: [
      "Social Media Post Design",
      "WhatsApp Story Creatives",
      "Poster Design for Offers & Events",
      "Brand Identity Design",
      "Marketing Collateral",
      "Digital Ad Creatives",
    ],
    benefits: [
      "Create a consistent brand identity",
      "Increase engagement with visual content",
      "Stand out in crowded social media feeds",
      "Communicate messages quickly and effectively",
      "Build brand recognition and trust",
    ],
  },
}

const popularCities = [
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Delhi", slug: "delhi" },
  { name: "Noida", slug: "noida" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Bangalore", slug: "bangalore" },
]

export default function ServicePage({ params }) {
  const { service } = use(params)
  const router = useRouter()
  const serviceData = servicesData[service]

  const handleCityClick = (citySlug) => {
    router.push(`/services/${service}/${citySlug}`)
  }

  if (!serviceData) {
    return (
      <>
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="text-3xl font-bold">Service Not Found</h1>
            <p className="mt-4 text-muted-foreground">The service you're looking for doesn't exist.</p>
            <Button asChild className="mt-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm">
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
              </Button>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
                  Professional Service
                </div>
                <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">{serviceData.title}</h1>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {serviceData.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+919671782681">
                      <Phone className="mr-2 h-4 w-4" /> Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-auto">
                <img src={`/${serviceData.image}.jpg`} alt={serviceData.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">What's Included</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Comprehensive {serviceData.title.toLowerCase()} solutions for your business
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceData.features.map((feature) => (
                <Card key={feature} className="transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-lg">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-balance text-3xl font-bold md:text-4xl">Why Choose Our {serviceData.title}?</h2>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                      <span className="leading-relaxed text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-auto">
                <img
                  src="/professional-business-team-celebrating-success-wit.jpg"
                  alt="Benefits"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Our Process</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">How we deliver results for your business</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We learn about your business, goals, and target audience.",
                },
                { step: "02", title: "Strategy", description: "We create a customized plan tailored to your needs." },
                { step: "03", title: "Execution", description: "Our team implements the strategy with precision." },
                { step: "04", title: "Optimization", description: "We continuously monitor and improve performance." },
              ].map((item) => (
                <Card key={item.step} className="transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                <MapPin className="inline-block h-4 w-4 mr-2" />
                Service Locations
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                {serviceData.title} in Popular Cities
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Click on a city to view location-specific information
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5 max-w-5xl mx-auto">
              {popularCities.map((city) => (
                <Card
                  key={city.slug}
                  onClick={() => handleCityClick(city.slug)}
                  className="cursor-pointer transition-all hover:shadow-xl hover:border-primary hover:-translate-y-2 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{city.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">View Details</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Get Started?</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed opacity-90 md:text-xl">
                Contact us today for a free consultation and discover how our {serviceData.title.toLowerCase()} can help
                your business grow.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg h-12 px-8">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg h-12 px-8"
                >
                  <a href="mailto:businessinside9@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

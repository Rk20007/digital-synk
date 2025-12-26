"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  MessageCircle,
  Megaphone,
  Code,
  Sparkles,
  Globe,
  PenTool,
  Palette,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

export default function ServicesClient() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  const services = [
    {
      slug: "seo",
      title: "SEO Services",
      description: "Comprehensive search engine optimization to boost your rankings and organic traffic.",
      icon: TrendingUp,
      image: "/seo-optimization-analytics-dashboard.jpg",
      features: [
        "On-Page SEO",
        "Off-Page SEO (Backlinks)",
        "Technical SEO",
        "Keyword Research",
        "SEO Audit & Fixes",
        "Monthly SEO Reporting",
      ],
    },
    {
      slug: "local-seo",
      title: "Local SEO",
      description: "Dominate local search results and attract more customers in your area.",
      icon: Target,
      image: "/google-maps-local-business-listing.jpg",
      features: [
        "Google My Business Setup",
        "GMB Optimization & Ranking",
        "Local Keyword Targeting",
        "Review & Reputation Management",
        "Google Map Pack Ranking",
        "Local Directory Submission",
      ],
    },
    {
      slug: "social-media-marketing",
      title: "Facebook & Instagram Marketing",
      description: "Engage your audience and grow your brand on social media platforms.",
      icon: Zap,
      image: "/social-media-marketing-engagement-analytics.jpg",
      features: [
        "Business Page Setup",
        "Post, Story & Reel Content Creation",
        "Local Audience Targeted Ads",
        "Lead Generation Ads",
        "Comment & Message Management",
        "Monthly Performance Reporting",
      ],
    },
    {
      slug: "whatsapp-marketing",
      title: "WhatsApp Marketing",
      description: "Connect with customers directly through WhatsApp business solutions.",
      icon: MessageCircle,
      image: "/whatsapp-business-chat-interface.jpg",
      features: [
        "WhatsApp Business Account Setup",
        "WhatsApp Catalog Integration",
        "Broadcast Messaging Campaigns",
        "Automated Replies Setup",
        "WhatsApp Web & Website Integration",
        "Status & Offer Creative Design",
      ],
    },
    {
      slug: "paid-advertising",
      title: "Paid Advertising",
      description: "Drive targeted traffic and conversions with strategic paid campaigns.",
      icon: Megaphone,
      image: "/google-ads-facebook-ads-campaign-dashboard.jpg",
      features: [
        "Google Search & Display Ads",
        "Call-Only Ads for Local Services",
        "Facebook & Instagram Ads",
        "YouTube Video Ads",
        "Geo-Targeted Campaigns",
        "Ads Optimization & Monthly Reports",
      ],
    },
    {
      slug: "web-app-development",
      title: "Web & App Development",
      description: "Build powerful, scalable web and mobile applications with modern technology.",
      icon: Code,
      image: "/modern-web-app-development-coding.jpg",
      features: [
        "Custom Website Development",
        "Mobile App Development (iOS & Android)",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Maintenance & Support",
      ],
    },
    {
      slug: "ai-integration-automation",
      title: "AI Integration & Automation Flows",
      description: "Transform your business with intelligent AI solutions and automated workflows.",
      icon: Sparkles,
      image: "/ai-automation.png",
      features: [
        "AI Chatbot Development",
        "Process Automation",
        "Machine Learning Integration",
        "Data Analytics & Insights",
        "Workflow Optimization",
        "Custom AI Solutions",
      ],
    },
 
    {
      slug: "content-writing",
      title: "Content Writing & Copywriting",
      description: "Compelling content that engages your audience and drives action.",
      icon: PenTool,
      image: "/content-writing-copywriting-blog-articles.jpg",
      features: [
        "Website Content Writing",
        "SEO-Friendly Blogs & Articles",
        "Social Media Captions & Ad Copy",
        "Product Descriptions",
        "Business Profile & About Us Page",
        "WhatsApp & Email Message Copy",
      ],
    },
    {
      slug: "graphic-design",
      title: "Graphic Designing",
      description: "Eye-catching designs that make your brand stand out.",
      icon: Palette,
      image: "/graphic-design.webp",
      features: [
        "Social Media Post Design",
        "WhatsApp Story Creatives",
        "Poster Design for Offers & Events",
        "Brand Identity Design",
        "Marketing Collateral",
        "Digital Ad Creatives",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Enhanced Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-24 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                What We Offer
              </div>
              <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Our Services</h1>
              <p className="mt-2 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Comprehensive digital marketing solutions tailored to help your business succeed online
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-12 px-8"
                >
                  Book Free Consultation <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid with Enhanced Cards */}
        <section className="py-20 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.slug}
                  className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link href={`/services/${service.slug}/gurgaon`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => setBookingModalOpen(true)}
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Contact us for a free consultation and we'll help you create a customized digital marketing strategy.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Book Free Consultation <Phone className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  )
}

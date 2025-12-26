import Link from "next/link"
import { ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react"
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
  "social-media-marketing": {
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
  "whatsapp-marketing": {
    title: "WhatsApp Marketing",
    description: "Connect with customers directly and boost sales with our WhatsApp business solutions.",
    image: "whatsapp-business-chat-interface",
    features: [
      "WhatsApp Business Account Setup",
      "WhatsApp Catalog Integration",
      "Broadcast Messaging Campaigns",
      "Automated Replies Setup",
      "WhatsApp Web & Website Integration",
      "Status & Offer Creative Design",
    ],
    benefits: [
      "Reach customers on their preferred messaging platform",
      "Automate customer service with quick replies",
      "Showcase products with WhatsApp catalog",
      "Send targeted broadcast messages to segments",
      "Increase conversion rates with direct communication",
    ],
  },
  "paid-advertising": {
    title: "Paid Advertising",
    description: "Drive targeted traffic and maximize ROI with our expert paid advertising campaigns.",
    image: "google-ads-facebook-ads-campaign-dashboard",
    features: [
      "Google Search & Display Ads",
      "Call-Only Ads for Local Services",
      "Facebook & Instagram Ads",
      "YouTube Video Ads",
      "Geo-Targeted Campaigns",
      "Ads Optimization & Monthly Reports",
    ],
    benefits: [
      "Get immediate visibility in search results",
      "Target specific demographics and interests",
      "Pay only for results (clicks, calls, conversions)",
      "Scale campaigns based on performance",
      "Track every dollar spent with detailed analytics",
    ],
  },
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
    image: "ai-artificial-intelligence-automation-technology",
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
    image: "modern-responsive-website-design",
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
  "content-writing": {
    title: "Content Writing & Copywriting",
    description: "Engage your audience with compelling, SEO-optimized content that drives action.",
    image: "content-writing-copywriting-laptop",
    features: [
      "Website Content Writing",
      "SEO-Friendly Blogs & Articles",
      "Social Media Captions & Ad Copy",
      "Product Descriptions",
      "Business Profile & About Us Page",
      "WhatsApp & Email Message Copy",
    ],
    benefits: [
      "Communicate your value proposition clearly",
      "Improve SEO with keyword-optimized content",
      "Establish authority in your industry",
      "Increase engagement on social media",
      "Convert readers into customers with persuasive copy",
    ],
  },
  "graphic-design": {
    title: "Graphic Designing",
    description: "Stand out from the competition with eye-catching designs that capture attention.",
    image: "graphic-design-creative-workspace",
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

export async function generateMetadata({ params }) {
  const { service, city } = await params
  const serviceData = servicesData[service]
  const cityName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${serviceData?.title || "Service"} in ${cityName} - digitalSynk`,
    description: `Professional ${serviceData?.title || "digital marketing"} services in ${cityName}. ${serviceData?.description || "Get expert help for your business."}`,
    robots: "noindex, nofollow",
  }
}

export default async function ServiceDetailPage({ params }) {
  const { service, city } = await params
  const serviceData = servicesData[service]
  const cityName = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

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
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 md:py-2">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6">
              <Button asChild variant="ghost" size="sm">
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
              </Button>
            </div>
         <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 pb-6">
  
  {/* LEFT CONTENT */}
  <div className="flex flex-col justify-center space-y-6">
    <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
      {cityName} Services
    </div>

    <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
      {serviceData.title} in {cityName}
    </h1>

    <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
      {serviceData.description}
    </p>

    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
      >
        <Link href="/contact">Get a Free Quote</Link>
      </Button>

      <Button asChild variant="outline" size="lg">
        <a href="tel:+919050580887">
          <Phone className="mr-2 h-4 w-4" /> Call Us Now
        </a>
      </Button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="relative flex justify-center lg:justify-end">
    
    {/* Glow Background */}
    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-purple-400/20 blur-2xl opacity-80" />

    {/* Image Card */}
    <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5">
      <img
        src={`/${serviceData.image}.jpg`}
        alt={serviceData.title}
        className="
          w-full
          max-w-[560px]
          rounded-xl
          object-cover
          transition-transform
          duration-300
          hover:scale-[1.03]
        "
      />
    </div>

  </div>
</div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">What's Included</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Comprehensive {serviceData.title.toLowerCase()} solutions for businesses in {cityName}
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
                <h2 className="text-balance text-3xl font-bold md:text-4xl">
                  Why Choose Our {serviceData.title} in {cityName}?
                </h2>
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
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                How we deliver results for {cityName} businesses
              </p>
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

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Ready to Get Started in {cityName}?
              </h2>
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

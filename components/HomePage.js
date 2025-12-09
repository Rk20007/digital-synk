"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Code,
  Globe,
  Award,
  Phone,
  Calendar,
  Search,
  MapPin,
  Share2,
  PenTool,
  Cpu,
  Mail,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

export default function HomePage({city}) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [modalTab, setModalTab] = useState("callback")
  const [expandedFaq, setExpandedFaq] = useState(null)

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "If your business is not on Google's first page, you are invisible to potential customers. Our SEO services ensure your website ranks where it matters most.",
      icon: Search,
      image: "/seo-optimization-analytics-dashboard.jpg",
      slug: "seo",
      details: [
        "On-page SEO: Optimizing keywords, meta tags, and content for maximum visibility",
        "Off-page SEO: Building high-quality backlinks and authority signals",
        "Technical SEO: Enhancing speed, security, and mobile experience",
        "E-commerce SEO: Helping online stores capture buyers at the right stage",
      ],
    },
    {
      title: "Local SEO",
      description: `For businesses in ${city}, Local SEO is a game-changer. People searching 'near me' are ready to buy, and we help them find you.`,
      icon: MapPin,
      image: "/google-maps-local-business-listing.jpg",
      slug: "local-seo",
      details: [
        "Optimize your Google Business Profile",
        "Get listed in local directories and maps",
        "Improve local search rankings with location-based keywords",
        "Manage reviews and build trust in your community",
      ],
    },
    {
      title: "Google Advertising (PPC)",
      description:
        "Want results fast? Google Ads put your brand at the top of search results instantly with data-driven campaigns.",
      icon: Globe,
      image: "/google-ads-facebook-ads-campaign-dashboard.jpg",
      slug: "google-ads",
      details: [
        "Search ads that target high-intent customers",
        "Display ads that boost brand awareness",
        "Remarketing ads that bring back lost visitors",
        "Smart budget management for maximum ROI",
      ],
    },
    {
      title: "Facebook & Instagram Advertising",
      description:
        "Social media is where your customers spend most of their time. Reach them with the right message at the right moment.",
      icon: Share2,
      image: "/social-media-marketing-engagement-analytics.jpg",
      slug: "social-media-marketing",
      details: [
        "Eye-catching visuals and videos that capture attention",
        "Laser-targeted campaigns based on demographics and interests",
        "Retargeting ads that re-engage past visitors",
        "Reports that show clear ROI",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Social media is more than just posts and likes—it is about building relationships with your audience.",
      icon: Zap,
      image: "/social-media-marketing-engagement-analytics.jpg",
      slug: "social-media",
      details: [
        "Content planning and calendar creation",
        "Audience engagement and community management",
        "Paid campaigns to amplify reach",
        "Influencer partnerships to boost credibility",
      ],
    },
    {
      title: "Content Marketing",
      description: "Quality content drives engagement and SEO success. We create compelling content that converts.",
      icon: PenTool,
      image: "/content-marketing-blog-writing-strategy.jpg",
      slug: "content-marketing",
      details: [
        "Blogs, articles, and storytelling",
        "Video and infographic creation",
        "Email newsletters and campaigns",
        "Case studies, whitepapers, and eBooks",
      ],
    },
    {
      title: "Web Design",
      description:
        "Your website is often the first impression of your business. We create modern, conversion-focused designs.",
      icon: Code,
      image: "/modern-web-app-development-coding.jpg",
      slug: "web-design",
      details: [
        "Clean, modern, and mobile-responsive layouts",
        "Conversion-focused designs that guide users to take action",
        "Easy navigation for a smooth user experience",
        "Brand-consistent visuals that build trust",
      ],
    },
    {
      title: "Web Development",
      description: "Behind every beautiful website is a strong, secure, and scalable foundation built for growth.",
      icon: Cpu,
      image: "/modern-web-app-development-coding.jpg",
      slug: "web-development",
      details: [
        "Custom-built websites tailored to your business",
        "E-commerce platforms on Shopify, WooCommerce, or Magento",
        "WordPress and CMS solutions for easy management",
        "Fast, secure, and SEO-friendly coding",
      ],
    },
    {
      title: "Email Marketing & Automation",
      description:
        "Stay connected with your customers using personalized, automated email campaigns that drive results.",
      icon: Mail,
      image: "/email-marketing-automation-campaigns.jpg",
      slug: "email-marketing",
      details: [
        "Segmented lists for better targeting",
        "A/B tested subject lines and CTAs",
        "Drip campaigns for nurturing leads",
        "Analytics and reporting for improvements",
      ],
    },
  ]

  const whyChooseUs = [
    { title: "12+ Years of Experience", description: "We know what works in digital marketing." },
    { title: "Real Results", description: "Helping businesses succeed across industries." },
    { title: "Clear Reports", description: "You'll always know where your money goes." },
    { title: "Custom Strategies", description: "Plans made just for your goals." },
    { title: "Expert Team", description: "SEO, ads, content, design—we handle it all." },
    { title: "Smart Decisions", description: "We use data to guide our strategies." },
    { title: "Ongoing Support", description: "We're here to help your business grow." },
  ]

  const industries = [
    { name: "E-commerce", description: "Boost online sales with SEO, ads, and remarketing" },
    { name: "Real Estate", description: "Generate qualified buyer and seller leads" },
    { name: "Healthcare", description: "Attract more patients with Local SEO and ads" },
    { name: "Education", description: "Drive admissions with digital campaigns and social media" },
    { name: "Technology & IT", description: "Build authority and generate B2B leads" },
    { name: "Hospitality & Travel", description: "Promote destinations, hotels, and restaurants online" },
    { name: "Finance & Services", description: "Build trust and target high-value clients" },
    { name: "Startups & SMEs", description: "Affordable, scalable strategies to grow fast" },
  ]

  const faqs = [
    {
      question: "What services does Digital Synk provide?",
      answer:
        "We offer complete digital marketing solutions including SEO, Local SEO, Google Ads, Facebook Ads, Social Media Marketing, Content Marketing, Web Design, and Web Development.",
    },
    {
      question: "Why should I hire a digital marketing agency instead of doing it in-house?",
      answer:
        "Hiring an agency gives you access to a full team of SEO experts, ad specialists, designers, and content creators at a fraction of the cost of an in-house team.",
    },
    {
      question: "How long does it take to see results with digital marketing?",
      answer:
        "Google and Facebook Ads deliver results immediately. SEO and content marketing generally take 3 to 6 months to show long-term growth.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer: `Yes, we create custom strategies for businesses of all sizes in ${city}, from local startups to global enterprises.`,
    },
    {
      question: "Can Digital Synk help with Local SEO?",
      answer: `Absolutely. We optimize your Google Business Profile, local listings, and reviews so your business in ${city} gets found in 'near me' and city-specific searches.`,
    },
    {
      question: "How do you measure success in a campaign?",
      answer:
        "We provide transparent reports tracking traffic, leads, conversions, and ROI. Our focus is always on real results, not vanity metrics.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We serve a wide range of industries including e-commerce, real estate, healthcare, education, technology, and local businesses.",
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer:
        "SEO is a long-term strategy for organic rankings, while Google Ads provide immediate visibility through paid campaigns. A mix of both often works best.",
    },
    {
      question: "Do you design and build websites too?",
      answer:
        "Yes, our team provides both web design and web development services, creating websites that are beautiful, responsive, and optimized for conversions.",
    },
    {
      question: "How do Facebook and Instagram ads help businesses?",
      answer:
        "They allow you to target customers based on demographics, interests, and behaviors, ensuring your message reaches the right audience.",
    },
  ]

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ]

  const openModal = (tab) => {
    setModalTab(tab)
    setBookingModalOpen(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/modern-digital-marketing-team-working-on-laptops-w.jpg"
              alt="Digital Marketing"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/70" />
          </div>

          <div className="relative z-10 w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl space-y-8">
                <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                  🚀 Top Digital Marketing Agency in {city} to Boost Your Business
                </div>
                <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
                  Transform Your Business with{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                    Digital Excellence in {city}
                  </span>
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
                  Digital Synk is the best digital marketing agency in {city} to take your business to the next level. We
                  deliver complete digital marketing solutions designed to boost your brand visibility, attract
                  qualified leads, and drive long-term growth for businesses in {city}.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    onClick={() => openModal("callback")}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14 px-10 shadow-lg hover:shadow-xl transition-all"
                  >
                    Request Callback <Phone className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => openModal("booking")}
                    className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg h-14 px-10 shadow-lg hover:shadow-xl transition-all"
                  >
                    Book Now <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Proven Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                Our Digital Marketing Services
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Comprehensive Digital Solutions in {city}
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
                We offer comprehensive digital marketing services to help grow your business online in {city}. Our
                expert team specializes in SEO to improve your Google rankings, local SEO to attract nearby customers,
                Google Ads and Facebook ads to drive targeted traffic, and social media marketing to enhance your brand's presence. Whether you're a local business in {city} or looking to expand globally, Digital Sync provides reliable, results-driven digital solutions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.title} href={`/services/${service.slug}`}>
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 cursor-pointer h-full">
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
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                      <Button
                        onClick={(e) => {
                          e.preventDefault()
                          openModal("booking")
                        }}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Why Digital Synk is the Right Choice for Your Business in {city}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <Card key={item.title} className="border-primary/20 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                Industries We Serve
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Expertise Across Multiple Sectors in {city}
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
                With experience across multiple industries, we know what works. Whatever your business in {city}, we
                create strategies that fuel growth and deliver real results.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <Card
                  key={industry.name}
                  className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30">
                <HelpCircle className="inline h-4 w-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Common Questions About Our Services in {city}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                      <div className="text-primary mt-1">{expandedFaq === index ? "−" : "+"}</div>
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary px-8 py-16 text-center text-primary-foreground shadow-2xl md:px-16 md:py-24">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
              <div className="relative z-10">
                <Award className="mx-auto h-20 w-20 mb-6 animate-bounce" />
                <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                  Ready to Grow Your Business in {city}?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed opacity-95 md:text-xl">
                  Your competitors in {city} are online, and your customers are searching. Let us make sure they find
                  you first. Contact us today for a free consultation and let's build your success story together.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => openModal("callback")}
                    className="text-lg h-14 px-10 shadow-lg hover:shadow-xl transition-all"
                  >
                    Request Callback <Phone className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg h-14 px-10"
                  >
                    <Link href="/services">
                      Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} defaultTab={modalTab} />
    </>
  )
} 
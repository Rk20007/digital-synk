"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type: "Contact Form" }),
      })

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Ready to grow your business? Contact us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9050580887"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="seo">SEO Services</option>
                          <option value="local-seo">Local SEO</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="whatsapp">WhatsApp Marketing</option>
                          <option value="ads">Paid Advertising</option>
                          <option value="web-app-dev">Web & App Development</option>
                          <option value="ai-automation">AI Integration & Automation</option>
                          <option value="web-dev">Website Design & Development</option>
                          <option value="content">Content Writing</option>
                          <option value="design">Graphic Design</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                        ) : (
                          <>Send Message <Send className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Have questions? We're here to help! Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Phone</CardTitle>
                          <CardDescription className="mt-2 space-y-1">
                            <div>
                              <a href="tel:+919050580887" className="hover:text-primary">
                                +91 9050580887
                              </a>
                            </div>
                            <div>
                              <a href="tel:+917740847114" className="hover:text-primary">
                                +91 7740847114
                              </a>
                            </div>
                          </CardDescription>
                          <p className="mt-1 text-sm text-muted-foreground">Mon-Sat 10am-7pm IST</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Email</CardTitle>
                          <CardDescription className="mt-2">
                            <a href="mailto:businessinside9@gmail.com" className="hover:text-primary">
                              businessinside9@gmail.com
                            </a>
                          </CardDescription>
                          <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Office</CardTitle>
                          <CardDescription className="mt-2">
                            JMD Megapolis, Sohna Road
                            <br />
                            Gurgaon, Haryana 122018
                          </CardDescription>
                          <p className="mt-1 text-sm text-muted-foreground">Visit by appointment only</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl">Free Consultation</CardTitle>
                    <CardDescription className="text-primary-foreground/90">
                      Not sure where to start? Schedule a free 30-minute consultation with our experts to discuss your
                      digital marketing needs.
                    </CardDescription>
                    <Button asChild variant="secondary" size="lg" className="mt-4 w-full">
                      <a href="tel:+919050580887">Schedule a Call</a>
                    </Button>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

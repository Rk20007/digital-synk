"use client"

import { useState, useEffect } from "react"
import { X, Phone, Mail, User, MessageSquare, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingModal({ isOpen, onClose, defaultTab = "callback" }) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setActiveTab(defaultTab)
  }, [defaultTab])

  const services = [
    "SEO Services",
    "Local SEO",
    "Social Media Marketing",
    "WhatsApp Marketing",
    "Paid Advertising",
    "Web & App Development",
    "AI Integration & Automation",
    "Website Design & Development",
    "Content Writing & Copywriting",
    "Graphic Designing",
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: activeTab,
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          onClose()
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            preferredDate: "",
            message: "",
          })
          setActiveTab("callback")
        }, 3000)
      } else {
        alert("Failed to send request. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      alert("Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
        <CardHeader className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-primary-foreground/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-2xl md:text-3xl pr-10 pt-4">
            {activeTab === "callback" ? "Request a Callback" : "Book a Service"}
          </CardTitle>
          <CardDescription className="text-primary-foreground/90 pb-4">
            Fill out the form below and we'll get back to you within 24 hours
          </CardDescription>
        </CardHeader>

        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab("callback")}
            className={`flex-1 px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === "callback"
                ? "border-b-2 border-primary text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Phone className="inline-block h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Request </span>Callback
          </button>
          <button
            onClick={() => setActiveTab("booking")}
            className={`flex-1 px-4 py-4 text-sm font-medium transition-colors ${
              activeTab === "booking"
                ? "border-b-2 border-primary text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Calendar className="inline-block h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Book </span>Service
          </button>
        </div>

        <CardContent className="p-4 sm:p-6">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                {activeTab === "callback"
                  ? "We've received your callback request. Our team will contact you shortly."
                  : "We've received your booking request. Our team will contact you shortly to confirm."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your email"
                />
              </div>

              {activeTab === "booking" && (
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Service to Book *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {activeTab === "callback" && (
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Service Interested In (Optional)
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="preferredDate" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Preferred {activeTab === "booking" ? "Service" : "Call"} Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

             <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full">
  <Button
    type="submit"
    size="lg"
    disabled={isSubmitting}
    className="
      w-full
      sm:flex-1
      bg-gradient-to-r
      from-primary
      to-secondary
      hover:opacity-90
      text-base
      rounded-full
    "
  >
    {isSubmitting
      ? "Sending..."
      : activeTab === "callback"
      ? "Request Callback"
      : "Book Service"}
  </Button>

  <Button
    type="button"
    size="lg"
    variant="outline"
    className="
      w-full
      sm:flex-1
      rounded-full
    "
  >
    Cancel
  </Button>
</div>


              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our terms and conditions
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

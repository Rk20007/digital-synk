import Link from "next/link"
import { Award, Target, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us - digitalSynk",
  description: "Learn about our mission, values, and the team behind digitalSynk digital marketing agency.",
  robots: "noindex, nofollow",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your bottom line.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital trends to give you a competitive advantage.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">About digitalSynk</h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                We're a team of passionate digital marketing experts dedicated to helping businesses grow and succeed in
                the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-auto">
                <img
                  src="/modern-office-space-with-creative-team-collaborati.jpg"
                  alt="Our Team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-balance text-3xl font-bold md:text-4xl">Our Story</h2>
                <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                  <p>
                    Founded in 2015, digitalSynk started with a simple mission: to help businesses harness the power of
                    digital marketing to achieve their goals. What began as a small team of SEO specialists has grown
                    into a full-service digital agency.
                  </p>
                  <p>
                    Today, we serve over 500 clients across various industries, from local businesses to national
                    brands. Our success is built on a foundation of transparency, innovation, and a genuine commitment
                    to our clients' success.
                  </p>
                  <p>
                    We believe that every business deserves access to world-class digital marketing services. That's why
                    we've built a team of experts who are not only skilled in their craft but also passionate about
                    helping businesses grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Our Values</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Meet Our Team</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Experienced professionals dedicated to your success
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Founder",
                  image: "professional woman in business attire smiling",
                },
                { name: "Michael Chen", role: "Head of SEO", image: "professional man with glasses smiling" },
                {
                  name: "Emily Rodriguez",
                  role: "Social Media Director",
                  image: "professional woman with dark hair smiling",
                },
              ].map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`/.jpg?height=400&width=400&query=${member.image}`}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Work Together?</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Let's discuss how we can help your business grow with our digital marketing services.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
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

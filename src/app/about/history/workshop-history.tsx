"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, Award, MapPin, Calendar, Car, Bike } from "lucide-react"
import Image from "next/image" // Import Next.js Image component

const milestones = [
  {
    year: "1985",
    title: "Humble Beginnings",
    description: "Started as a small family garage with just 2 mechanics and a passion for quality automotive repair.",
    icon: Wrench,
    image: "/images/workshop/w1.jpg",
  },
  {
    year: "1992",
    title: "First Expansion",
    description: "Expanded to a 5-bay facility and introduced specialized services for European vehicles.",
    icon: MapPin,
    image: "/images/workshop/w2.jpg",
  },
  {
    year: "2001",
    title: "Digital Revolution",
    description: "Implemented computerized diagnostic systems and became certified for hybrid vehicle maintenance.",
    icon: Car,
    image: "/images/workshop/w3.jpg",
  },
  {
    year: "2010",
    title: "Award Recognition",
    description: "Received 'Best Auto Service' award and expanded team to 15 certified technicians.",
    icon: Award,
    image: "/images/workshop/w4.jpg",
  },
  {
    year: "2018",
    title: "Modern Facility",
    description: "Moved to our current state-of-the-art 12,000 sq ft facility with advanced equipment.",
    icon: Users,
     image: "/images/workshop/w5.jpg",
  },
  {
    year: "2024",
    title: "Electric Future",
    description: "Became certified for electric vehicle service and installed EV charging stations.",
    icon: Bike,
     image: "/images/workshop/w6.jpg",
  },
]

const stats = [
  { number: "39", label: "Years of Excellence", icon: Calendar },
  { number: "50,000+", label: "Vehicles Serviced", icon: Car },
  { number: "25", label: "Expert Technicians", icon: Users },
  { number: "98%", label: "Customer Satisfaction", icon: Award },
]

export default function WorkshopHistory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Since 1985
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Four Decades of
            <span className="text-primary"> Automotive Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From a small family garage to the regions most trusted automotive service center, our journey has been
            driven by passion, precision, and an unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every milestone tells a story of growth, innovation, and our commitment to serving our community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <milestone.icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="font-mono">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground text-pretty">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built on Strong Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles have guided us through nearly four decades of service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                Every repair, every service, every interaction is held to the highest standards of excellence.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community Focus</h3>
              <p className="text-muted-foreground">
                We are not just a business, we are neighbors committed to keeping our community moving.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously evolving with technology to provide the best possible service experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that four decades of expertise makes. Join thousands of satisfied customers who
            trust us with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Service
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
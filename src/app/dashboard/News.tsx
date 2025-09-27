import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Zap, Car, ArrowRight, Clock, Users } from "lucide-react"
import Image from "next/image"

const newsData = [
  {
    title: "Advanced EV Diagnostic Equipment Installed",
    date: "December 15, 2024",
    summary:
      "Our workshop now features state-of-the-art electric vehicle diagnostic tools, enabling comprehensive servicing of all major EV brands including Tesla, BMW, and Mercedes.",
    link: "#",
    image: "/images/news/ev-diagnostic-modern.jpg",
    category: "Equipment",
    icon: <Zap className="w-4 h-4" />,
    big: true,
    readTime: "3 min read",
  },
  {
    title: "Certified Hybrid Specialists Join Our Team",
    date: "December 8, 2024",
    summary:
      "Three new certified hybrid vehicle specialists have joined our team, expanding our expertise in Toyota, Honda, and Ford hybrid systems.",
    link: "#",
    image: "/images/news/hybrid-specialists.jpg",
    category: "Team",
    icon: <Users className="w-4 h-4" />,
    readTime: "2 min read",
  },
  {
    title: "Extended Weekend Service Hours",
    date: "November 28, 2024",
    summary:
      "Starting January 2025, we're extending our weekend hours to better serve our customers with Saturday and Sunday appointments.",
    link: "#",
    image: "/images/news/weekend-hours.jpg",
    category: "Service",
    icon: <Clock className="w-4 h-4" />,
    readTime: "1 min read",
  },
  {
    title: "Classic Car Restoration Department Opens",
    date: "November 20, 2024",
    summary:
      "Our new classic car restoration department specializes in vintage vehicles from the 1950s-1980s, offering complete restoration services.",
    link: "#",
    image: "/images/news/classic-restoration.jpg",
    category: "Restoration",
    icon: <Car className="w-4 h-4" />,
    readTime: "4 min read",
  },
]

const WorkshopNews = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">Workshop Updates</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Latest News & Updates
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Stay informed about our latest equipment, services, and team updates at our state-of-the-art vehicle workshop
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Article */}
        {newsData
          .filter((news) => news.big)
          .map((news, idx) => (
            <Card
              key={idx}
              className="lg:col-span-2 group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row h-full overflow-hidden rounded-lg">
                <div className="md:w-2/5 relative overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={500}
                    height={350}
                    className="w-full h-72 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm">
                      {news.icon}
                      <span className="ml-2 font-medium">{news.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <Badge variant="secondary" className="bg-white/90 text-black shadow-lg">
                      {news.readTime}
                    </Badge>
                  </div>
                </div>
                <CardContent className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <CardTitle className="text-3xl mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed mb-8 text-muted-foreground">
                      {news.summary}
                    </CardDescription>
                  </div>
                  <Button className="w-fit group-hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}

        <div className="space-y-8">
          {newsData
            .filter((news) => !news.big)
            .map((news, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-card to-card/95 backdrop-blur-sm hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm">
                      {news.icon}
                      <span className="ml-2 text-xs font-medium">{news.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-black shadow-lg text-xs">
                      {news.readTime}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </div>
                  <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-6 line-clamp-3">
                    {news.summary}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <Card className="inline-block p-10 bg-gradient-to-r from-primary/10 via-primary/5 to-blue-500/10 border border-primary/20 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
          <CardContent className="p-0">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold">Stay Updated</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg max-w-md">
              Subscribe to our newsletter for the latest workshop news, automotive tips, and exclusive offers
            </p>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3">
              Subscribe Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default WorkshopNews

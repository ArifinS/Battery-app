import { ChevronRight } from "lucide-react"

export default function CommercialHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ev-charge/bridz.jpg')",
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-white mb-8 lg:text-5xl">
              Passenger Vehicles Solutions</h1>

            {/* Subheading */}
            {/* <p className="text-xl text-white/90 mb-8">Earn more money with each mile i olod</p> */}

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-white/80">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-white cursor-pointer transition-colors">Solution</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white"> Passenger Vehicles</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

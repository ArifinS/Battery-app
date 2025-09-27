"use client"
import Image from "next/image"
import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type CompanyProfileProps = object

const CompanyProfile: React.FC<CompanyProfileProps> = () => {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/company-profile/modern-corporate-building-architecture.jpg" alt="CATL Building" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-balance">Company Profile</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty">
            Pioneering the future of sustainable energy solutions through innovation and excellence
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-white/30"></div>
          </div>
        </motion.div>
      </div>

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-background border-b border-border py-4"
      >
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/about-us" className="hover:text-foreground transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Company Profile</span>
          </nav>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8 text-balance">
                Leading the Energy Revolution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                Founded with a vision to transform the global energy landscape, CATL has emerged as a pioneering force
                in battery technology and sustainable energy solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Our commitment to innovation drives us to develop cutting-edge technologies that power the future of
                transportation and energy storage worldwide.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/company-profile/car.png"
                alt="CATL Technology"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile

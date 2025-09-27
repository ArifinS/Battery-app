"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Electric Vehicle Revolution",
    subtitle: "Experience the Future of Mobility",
    image: "/images/ev-charge/2.png",
  },
  {
    id: 2,
    title: "Smart Charging Solutions",
    subtitle: "Power Your Journey Anywhere",
    image: "/images/ev-charge/3.png",
  },
  {
    id: 3,
    title: "Sustainable Transportation",
    subtitle: "Drive Towards a Greener Tomorrow",
    image: "/images/ev-charge/4.png",
  },
  {
    id: 4,
    title: "Luxury Interior Design",
    subtitle: "Premium Comfort & Technology",
    image: "/images/ev-charge/2.png",
  },
  {
    id: 5,
    title: "Night Charging Experience",
    subtitle: "24/7 Charging Infrastructure",
    image: "/images/ev-charge/3.png",
  },
  {
    id: 6,
    title: "Advanced Safety Systems",
    subtitle: "Next-Generation Protection",
    image: "/images/ev-charge/4.png",
  },
  {
    id: 7,
    title: "Eco-Friendly Innovation",
    subtitle: "Solar-Powered Solutions",
    image: "/images/ev-charge/2.png",
  },
]

export default function AutomobileLifestyle() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Main Slider */}
      <section className="relative h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-end justify-center h-full pb-32">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="transform transition-all duration-700 ease-out">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-yellow-400 font-light tracking-wide">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
        </button>

        {/* Slide Counter */}
        <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
          <span className="text-white font-medium">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 max-w-full overflow-x-auto px-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-yellow-400 scale-110"
                  : "opacity-60 hover:opacity-80 hover:scale-105"
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            >
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-1 bg-white/20">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-4000 ease-linear"
              style={{
                width: isPlaying ? "100%" : `${((currentSlide + 1) / slides.length) * 100}%`,
                animation: isPlaying ? "progress 4s linear infinite" : "none",
              }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

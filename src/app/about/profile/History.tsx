"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

const historyData = [
  {
    year: "2014",
    points: ["Established CATG in Germany, the company's wholly-owned subsidiary."],
  },
  {
    year: "2013",
    points: [
      "Established Xining Plant.",
      "Developed EV batteries for the world's largest commercial vehicle manufacturer, Yutong.",
    ],
  },
  {
    year: "2012",
    points: ["Started strategic partnership with BMW."],
  },
  {
    year: "2011",
    points: [
      "Establishment of CATL, a new endeavor started by the founding team.",
      "Participated in the construction of Zhangbei energy storage project – the largest wind and solar energy storage and transmission project in the world at the time.",
    ],
  },
  {
    year: "1999",
    points: [
      "The founding team engaged in technology R&D, which is the world's leading in the field of lithium-ion consumer electronics.",
    ],
  },
]

export default function History() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/subtle-timeline-pattern.jpg')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-6 text-balance">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Decades of innovation and growth in sustainable energy technology
          </p>
        </motion.div>

        {/* Timeline Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <Swiper                                           
            slidesPerView={1}
            spaceBetween={32}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".history-next",
              prevEl: ".history-prev",
            }}
            pagination={{
              el: ".history-pagination",
              type: "progressbar",
              progressbarFillClass: "swiper-pagination-progressbar-fill !bg-primary",
            }}
            className="pb-16"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {historyData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-16 bg-primary rounded-full"></div>
                    <h3 className="text-4xl font-bold text-primary">{item.year}</h3>
                  </div>
                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="history-pagination !h-1 !bg-border rounded-full overflow-hidden mt-8 mb-4"></div>

          <button className="history-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card shadow-lg rounded-full p-3 transition-all duration-300 hover:shadow-xl border border-border z-10">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button className="history-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card shadow-lg rounded-full p-3 transition-all duration-300 hover:shadow-xl border border-border z-10">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          *Data source: SNE Research, ICCSINO
        </motion.p>
      </div>
    </section>
  )
}

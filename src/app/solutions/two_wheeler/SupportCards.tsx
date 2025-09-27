// app/components/SupportCards.tsx

"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall } from "lucide-react";

const cards = [
  {
    title: "Enquiry",
    icon: <MessageSquare className="w-8 h-8" />,
    link: "#",
  },
  {
    title: "Service",
    icon: <PhoneCall className="w-8 h-8" />,
    link: "#",
  },
];

export default function SupportCards() {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.a
            key={i}
            href={card.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group flex items-center justify-center gap-3 py-12 bg-gray-100 
                       hover:bg-blue-600 rounded-md transition-colors duration-300"
          >
            <div
              className="text-blue-700 group-hover:text-white transition-colors duration-300"
            >
              {card.icon}
            </div>
            <span
              className="text-blue-700 font-medium group-hover:text-white transition-colors duration-300"
            >
              {card.title} →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

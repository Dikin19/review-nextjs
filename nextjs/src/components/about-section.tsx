"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { aboutData } from "@/lib/dummy-data"

export function AboutSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-12 bg-gradient-to-r from-amber-100 to-orange-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <motion.div
              className="bg-white p-4 rounded-3xl shadow-xl max-w-md mx-auto lg:mx-0"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={aboutData.image}
                alt="Coffee with latte art"
                className="w-full h-64 object-cover rounded-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-aos="fade-left"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {aboutData.title}
              <motion.div
                className="w-16 h-1 bg-orange-500 mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h2>

            <motion.h3
              className="text-xl md:text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {aboutData.subtitle}
            </motion.h3>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300">
                  Get your coffee
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

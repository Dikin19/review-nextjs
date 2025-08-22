"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { heroData } from "@/lib/dummy-data"

export function HeroSection() {
  const coffeeCircleRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (coffeeCircleRef.current) {
      // Rotate coffee circle continuously
      gsap.to(coffeeCircleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      })
    }

    // Animate floating elements
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -10,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        })
      }
    })
  }, [])

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-aos="fade-right"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroData.title.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className={word === "coffee" ? "text-orange-500" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300">
                  Order now ☕
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-600 px-8 py-3 transition-all duration-300"
                >
                  More menu
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Coffee Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-aos="fade-left"
          >
            <div className="relative">
              {/* Main coffee circle */}
              <motion.div
                ref={coffeeCircleRef}
                className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-amber-900 to-amber-800 rounded-full flex items-center justify-center relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
              >
                <motion.img
                  src={heroData.mainImage}
                  alt="Coffee Cup"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
                />

                {/* Floating elements */}
                <motion.div
                  ref={(el) => el && (floatingElementsRef.current[0] = el)}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-gray-800 font-medium">{heroData.stats.featured}</span>
                </motion.div>

                <motion.div
                  ref={(el) => el && (floatingElementsRef.current[1] = el)}
                  className="absolute top-8 -right-4 bg-white px-3 py-2 rounded-full shadow-lg flex items-center gap-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-gray-800 font-bold">{heroData.stats.rating}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>

                <motion.div
                  ref={(el) => el && (floatingElementsRef.current[2] = el)}
                  className="absolute -bottom-4 left-8 bg-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-gray-800 font-bold">{heroData.stats.orders}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

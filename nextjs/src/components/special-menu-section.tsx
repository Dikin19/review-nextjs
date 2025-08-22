"use client"

import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { coffeeProducts } from "@/lib/dummy-data"

export function SpecialMenuSection() {
  const specialMenuItems = coffeeProducts.filter((product) => product.category === "special")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="px-4 py-16 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Special menu <span className="underline decoration-orange-500 decoration-4">for you</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {specialMenuItems.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

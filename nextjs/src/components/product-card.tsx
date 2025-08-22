"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  rating: number
  image: string
  description?: string
  temperature?: string[]
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rating Badge */}
      <div className="flex justify-between items-start mb-4">
        <motion.div
          className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        </motion.div>
      </div>

      {/* Product Image */}
      <motion.div
        className="mb-4 overflow-hidden rounded-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-40 object-cover transition-transform duration-300"
        />
      </motion.div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <motion.h3
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.name}
          </motion.h3>
          <motion.span
            className="text-lg font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.price}
          </motion.span>
        </div>

        {product.description && (
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {product.description}
          </motion.p>
        )}

        {/* Hot/Cold Options and Add Button */}
        <motion.div
          className="flex justify-between items-center pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-2">
            {product.temperature?.map((temp) => (
              <motion.span
                key={temp}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  temp === "Hot" ? "text-orange-600 bg-orange-100" : "text-blue-600 bg-blue-100"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {temp}
              </motion.span>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
            <Button
              size="icon"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

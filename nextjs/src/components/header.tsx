import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="w-full px-4 py-6 md:px-8 lg:px-12">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">☕</span>
          </div>
          <span className="text-xl font-bold text-gray-800">
            Cafe <span className="text-orange-500">Street</span>
          </span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            About us
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            Our Product
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-orange-500 transition-colors">
            Delivery
          </a>
        </nav>

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          {/* Search - Hidden on mobile */}
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Cappuccino" className="pl-10 pr-4 py-2 w-48 bg-white border-gray-200 rounded-full" />
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularSection } from "@/components/popular-section"
import { AboutSection } from "@/components/about-section"
import { SpecialMenuSection } from "@/components/special-menu-section"
import { CoffeeBeansDecoration } from "@/components/coffee-beans-decoration"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      <CoffeeBeansDecoration />
      <Header />
      <main>
        <HeroSection />
        <PopularSection />
        <AboutSection />
        <SpecialMenuSection />
      </main>
    </div>
  )
}

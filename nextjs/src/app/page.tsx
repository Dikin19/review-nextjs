import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularSection } from "@/components/popular-section"
import { AboutSection } from "@/components/about-section"
import { SpecialMenuSection } from "@/components/special-menu-section"
import { CoffeeBeansDecoration } from "@/components/coffee-beans-decoration"

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const rawPage = searchParams?.page
  const page = Array.isArray(rawPage) ? parseInt(rawPage[0] || "1", 10) : parseInt(rawPage || "1", 10)
  const currentPage = Number.isNaN(page) || page < 1 ? 1 : page

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      <CoffeeBeansDecoration />
      <Header />
      <main>
        <HeroSection page={currentPage} />
        <PopularSection />
        <AboutSection />
        <SpecialMenuSection />
      </main>
    </div>
  )
}

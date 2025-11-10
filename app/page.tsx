import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { CompanyIntro } from "@/components/company-intro"
import { TeamSection } from "@/components/team-section"
import { LocationsSection } from "@/components/locations-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <CompanyIntro />
        <TeamSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  )
}

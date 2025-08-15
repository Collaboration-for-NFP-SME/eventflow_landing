import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PrototypeSection from '@/components/PrototypeSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import EarlyAccessSection from '@/components/EarlyAccessSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PrototypeSection />
      <HowItWorksSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  )
}
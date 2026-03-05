import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Benefits from '@/components/sections/Benefits'
import HowItWorks from '@/components/sections/HowItWorks'
import PartnerForm from '@/components/sections/PartnerForm'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <PartnerForm />
      <FAQ />
      <Footer />
    </main>
  )
}

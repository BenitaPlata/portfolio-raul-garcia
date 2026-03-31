import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import BilingualBanner from '@/components/BilingualBanner'
import About from '@/components/About'
import Awards from '@/components/Awards'
import AvalProfesional from '@/components/AvalProfesional'
import Experience from '@/components/Experience'
import Evidence from '@/components/Evidence'
import FamilyTestimonials from '@/components/FamilyTestimonials'
import PersonalLife from '@/components/PersonalLife'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Awards />
      <AvalProfesional />
      <Evidence />
      <FamilyTestimonials />
      <Experience />
      <PersonalLife />
      <BilingualBanner />
      <Contact />
      <Footer />
    </main>
  )
}

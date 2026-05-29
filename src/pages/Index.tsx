import Hero from "@/components/Hero"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

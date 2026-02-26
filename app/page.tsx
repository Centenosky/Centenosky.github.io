import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}

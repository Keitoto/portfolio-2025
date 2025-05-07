import { AboutSection } from '@/app/(top)/AboutSection'
import { ContactSection } from '@/app/(top)/ContactSection'
import { HeroSection } from '@/app/(top)/HeroSection'
import { SkillsSection } from '@/app/(top)/SkillsSection'
import { WorksSection } from '@/app/(top)/WorksSection'

export default function Home() {
  return (
    <>
      <section className="py-16 px-6">
        <HeroSection />
      </section>

      <section id="about" className="py-16 px-6">
        <AboutSection />
      </section>

      <section id="skills" className="py-16 px-6">
        <SkillsSection />
      </section>

      <section id="works" className="py-16 px-6">
        <WorksSection />
      </section>

      <section id="contact" className="py-16 px-6 pb-32">
        <ContactSection />
      </section>
    </>
  )
}

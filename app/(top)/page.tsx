import { AboutSection } from '@/app/(top)/AboutSection'
import { ContactSection } from '@/app/(top)/ContactSection'
import { HeroSection } from '@/app/(top)/HeroSection'
import { SkillsSection } from '@/app/(top)/SkillsSection'
import { WorksSection } from '@/app/(top)/WorksSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
    </>
  )
}

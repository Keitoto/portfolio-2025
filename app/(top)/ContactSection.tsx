import { ContactForm } from '@/components/ContactForm'
import { SectionHeading } from '@/components/SectionHeading'
import Balancer from 'react-wrap-balancer'

export function ContactSection() {
  return (
    <div className="container max-w-2xl">
      <SectionHeading subText="Connect with me" as="h2" className="mb-8">
        Get in touch
      </SectionHeading>
      <p className="text-center mb-16">
        <Balancer>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</Balancer>
      </p>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

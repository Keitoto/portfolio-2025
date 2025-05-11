import { ContactForm } from '@/components/ContactForm'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { SectionHeading } from '@/components/SectionHeading'
import { buttonVariants } from '@/components/ui/button'
import { MapPin, Send } from 'lucide-react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export function ContactSection() {
  return (
    <div className="container max-w-3xl">
      <SectionHeading subText="Connect with me" as="h2" className="mb-8">
        Get in touch
      </SectionHeading>
      <p className="text-center max-w-xl mx-auto mb-16">
        <Balancer>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</Balancer>
      </p>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <MapPin className="size-6" />
            Berlin, Germany
          </div>
          <Link href="mailto:keitasekihara@gmail.com" className="flex items-center gap-4">
            <Send className="size-6" />
            keitasekihara@gmail.com
          </Link>
          <div className="flex gap-4">
            <Link href="https://github.com/Keitoto" className={`${buttonVariants({ variant: 'ghost' })} size-8`} target="_blank">
              <GithubIcon className="size-6" />
            </Link>
            <Link href="https://github.com/Keitoto" className={`${buttonVariants({ variant: 'ghost' })} size-8`} target="_blank">
              <LinkedInIcon className="size-6" />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

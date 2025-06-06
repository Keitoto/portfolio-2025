import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Hand } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="container max-w-xl text-center flex flex-col items-center justify-center min-h-[560px]">
      <p className="mb-8 text-xl md:text-2xl">Hi! I'm Keita Sekihara</p>
      <h1 className="text-3xl sm:text-6xl mb-4 leading-none">React.js developer based in Berlin.</h1>
      <p className="mb-8">
        I am a frontend-focused developer with fullstack capabilities from Tokyo, Japan.
        I build responsive web applications with clean code and seamless functionality.
      </p>
      <div className="flex gap-4">
        <Link href="#works" className={`${buttonVariants()} !rounded-full !px-8 py-4 h-auto leading-none font-sans`}>
          View works
          <ArrowRight className="size-4" />
        </Link>
        <Link href="#contact" className={`${buttonVariants({ variant: 'outline' })} !rounded-full !px-8 py-4 h-auto leading-none font-sans`}>
          Get in touch
          <Hand className="size-4" />
        </Link>
      </div>
    </div>
  )
}

import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import portrait from '@/public/images/self-portrait.webp'
import { Download } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <div className="container max-w-2xl">
      <SectionHeading subText="Introduction" as="h2" className="mb-16">
        About me
      </SectionHeading>
      <div className="grid grid-rows-2 grid-cols-3 [&>*]:bg-accent gap-4 [&>*]:rounded-3xl [&>*]:p-8">
        <p className="col-span-2 sm:order-1">text1</p>
        <p className="col-span-2 sm:order-4">text2</p>
        <div className="col-span-1 flex items-center justify-center sm:order-2">
          <Image src={portrait} alt="picture of myself" className="size-32" />
        </div>
        <div className="col-span-1 sm:order-3 flex items-center justify-center">
          <Button variant="outline" className="px-4 py-2 gap-2 font-sans">
            My CV
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
};

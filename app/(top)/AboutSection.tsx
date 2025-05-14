import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import portrait from '@/public/images/self-portrait.webp'
import { Download } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <div className="container max-w-2xl">
      <SectionHeading subText="Introduction" as="h2" className="md:mb-16 mb-8">
        About me
      </SectionHeading>
      <div className="md:grid grid-rows-2 grid-cols-3 md:[&>*]:bg-accent gap-4 md:[&>*]:rounded-3xl rounded-2xl md:[&>*]:p-8 px-4 py-8 md:p-0 bg-accent md:bg-white md:mb-0">
        <div className="col-span-1 flex items-center justify-center md:order-2 md:mb-0 mb-4">
          <Image src={portrait} alt="picture of myself" className="size-32" />
        </div>
        <p className="col-span-2 md:order-1">text1</p>
        <p className="col-span-2 md:order-4 mb-8 md:mb-0">text2</p>
        <div className="col-span-1 md:order-3 flex items-center justify-center">
          <Button variant="outline" className="px-4 py-2 gap-2 font-sans cursor-pointer">
            My CV
            <Download className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
};

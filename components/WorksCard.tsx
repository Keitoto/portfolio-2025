import type { IWorkCard } from '@/types'
import type { FC } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  order: number
  workData: IWorkCard
}

export const WorksCard: FC<Props> = ({ order, workData }) => {
  return (
    <div className={`flex ${order % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center gap-[4%]`}>
      <div className="relative w-[48%] aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-muted bg-accent">
        <div className="h-4 border-b border-accent flex items-center px-2 space-x-1">
          <div className="size-1.5 rounded-full bg-red-400"></div>
          <div className="size-1.5 rounded-full bg-yellow-400"></div>
          <div className="size-1.5 rounded-full bg-green-400"></div>
        </div>
        <Image src={workData.thumbNail} width={300} height={200} alt={`Screenshot of ${workData.title} project.}`} className="absolute object-cover w-full h-full inset-x-0 top-4 bottom-0" />
      </div>

      <div className="w-[48%]">
        <h3 className="text-xl md:text-2xl mb-4">{workData.title}</h3>
        <p className="text-base md:text-lg mb-4">{workData.description}</p>
        {workData.tags && workData.tags.length > 0 && (
          <div className="flex gap-2 mb-4 flex-wrap text-xs md:text-sm">
            {workData.tags.map(tag => (
              <span className="border leading-none px-1.5 py-1 rounded-sm">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex gap-2 mb-4">
          <Link href={workData.demoLink} target="_blank" className={buttonVariants({ variant: 'default' })}>Live Demo</Link>
          <Link href={workData.githubLink} target="_blank" className={buttonVariants({ variant: 'outline' })}>View Code</Link>
        </div>
        <Link href={workData.articleLink} className="group text-base md:text-lg flex items-center gap-2 underline underline-offset-2 decoration-1 hover:text-muted-foreground transition-colors duration-200">
          Read the story
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}

import type { IProjectMetadata } from '@/lib/projects/types'
import type { FC } from 'react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  order: number
  workData: IProjectMetadata
}

export const WorksCard: FC<Props> = ({ order, workData }) => {
  return (
    <div className={`md:flex space-y-8 ${order % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center gap-[4%] font-sans`}>
      <div className="relative md:w-[48%] md:aspect-[4/3] aspect-[16/9] rounded-lg overflow-hidden shadow-md border border-muted bg-accent">
        <div className="h-4 border-b border-accent flex items-center px-2 space-x-1">
          <div className="size-1.5 rounded-full bg-red-400"></div>
          <div className="size-1.5 rounded-full bg-yellow-400"></div>
          <div className="size-1.5 rounded-full bg-green-400"></div>
        </div>
        <Image src={workData.thumbNail} width={300} height={200} alt={`Screenshot of ${workData.title} project.}`} className="absolute object-cover w-full h-full inset-x-0 top-4 bottom-0" />
      </div>

      <div className="md:w-[48%] space-y-4">
        <h3 className="text-2xl">{workData.title}</h3>

        <p className="text-base md:text-lg">{workData.description}</p>

        {/* tags */}
        {workData.tags && workData.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap text-xs md:text-sm">
            {workData.tags.map(tag => (
              <span key={tag} className="border leading-none px-1.5 py-1 rounded-sm">{tag}</span>
            ))}
          </div>
        )}

        {/* link buttons */}
        <div className="flex gap-2">
          {workData.demoLink
            && (
              <Link href={workData.demoLink} target="_blank" className={buttonVariants({ variant: 'default' })}>
                Live Demo
                <ExternalLink size={16} />
              </Link>
            )}
          {workData.githubLink
            && (
              <Link href={workData.githubLink} target="_blank" className={buttonVariants({ variant: 'outline' })}>
                View Code
                <GithubIcon size={20} />
              </Link>
            )}
        </div>
        {workData.articleLink
          && (
            <Link href={workData.articleLink} className="group inline-flex text-base md:text-lg items-center gap-2 underline underline-offset-2 decoration-1 hover:text-muted-foreground transition-colors duration-200">
              Read the story
              <ArrowRight size={12} />
            </Link>
          )}
      </div>
    </div>
  )
}

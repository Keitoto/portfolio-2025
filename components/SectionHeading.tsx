import type { ComponentPropsWithoutRef, FC } from 'react'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  subText?: string
  children: React.ReactNode
} & ComponentPropsWithoutRef<'h1'>

export const SectionHeading: FC<Props> = ({
  as: Tag = 'h1',
  subText,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-col-reverse items-center gap-4 mb-8">
      <Tag className="text-4xl md:text-5xl leading-none" {...props}>
        {children}
      </Tag>
      {subText && <p className="text-base md:text-lg leading-none">{subText}</p>}
    </div>
  )
}

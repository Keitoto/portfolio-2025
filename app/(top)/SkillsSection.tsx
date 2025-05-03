'use client'

import { ResponsiveTable } from '@/components/ResponsiveTable'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillsTable } from '@/data/skills'

export function SkillsSection() {
  return (
    <div className="container max-w-5xl">
      <SectionHeading subText="What I can do" as="h2">
        Skills and Tools
      </SectionHeading>
      <div>
        <ResponsiveTable data={SkillsTable} />
      </div>
    </div>
  )
};

import { SectionHeading } from '@/components/SectionHeading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SkillsTable } from '@/content/skills'

export function SkillsSection() {
  return (
    <div className="container max-w-5xl">
      <SectionHeading subText="What I can do" as="h2" className="mb-16">
        Skills and Tools
      </SectionHeading>
      {/* <div>
        <ResponsiveTable data={SkillsTable} />
      </div> */}
      <Table className="font-sans">
        <TableHeader>
          <TableRow>
            <TableCell className="w-[120px]"></TableCell>
            <TableHead className="font-bold">Primary Options</TableHead>
            <TableHead className="font-bold">Basic Familiarity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SkillsTable.map(row => (
            <TableRow key={row.title}>
              <TableHead className="border-t border-r font-bold">{row.title}</TableHead>
              <TableCell className="border-t border-r">
                {row.primary && row.primary?.map(item => (
                  <p key={item}>{item}</p>
                ))}
              </TableCell>
              <TableCell className="border-t">
                {row.secondary && row.secondary?.map(item => (
                  <p key={item}>{item}</p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

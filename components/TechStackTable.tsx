import type { FC } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export interface ITechStackTableRow {
  title: string
  primary?: string[]
  secondary?: string[]
}

interface Props {
  data: ITechStackTableRow[]
}

export const TechStackTable: FC<Props> = ({ data }) => {
  return (
    <Table className="font-sans">
      <TableHeader>
        <TableRow>
          <TableCell className="w-[120px]"></TableCell>
          <TableHead className="font-bold">Primary Options</TableHead>
          <TableHead className="font-bold">Basic Familiarity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(row => (
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
  )
}

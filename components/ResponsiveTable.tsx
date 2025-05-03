import type { ISkillsTableRow } from '@/types'
import type { FC } from 'react'
// import { useState } from 'react'

interface Props {
  data: ISkillsTableRow[]
}

export const ResponsiveTable: FC<Props> = ({ data }) => {
  // const [activeTab, setActiveTab] = useState(0) // For mobile tabs

  return (
    <>
      {/* Desktop View (3 columns) - shows on md+ screens */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-3 w-[120px] border-r"></th>
              <th className="text-left p-3 border-r w-[50%]">Primary Options</th>
              <th className="text-left p-3 w-[50%]">Basic Familiarity</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.title}>
                <td className="font-bold p-3 border-t border-r align-top">{row.title}</td>
                <td className="p-3 border-t border-r align-top">
                  {row.primary && row.primary?.map(item => (
                    <p>{item}</p>
                  ))}
                </td>
                <td className="p-3 border-t align-top">
                  {row.secondary && row.secondary?.map(item => (
                    <p>{item}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (2 columns + tabs) - shows on sm screens */}
      {/* <div className="md:hidden"> */}
      {/* Tab Navigation */}
      {/* <div className="flex border-b">
          <button
            className={`px-4 py-2 ${activeTab === 0 ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Details
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 1 ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Extra Info
          </button>
        </div> */}

      {/* Table Content */}
      {/* <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-3"></th>
              <th className="text-left p-3">
                {activeTab === 0 ? 'Primary Options' : 'Header 3'}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.title}>
                <td className="p-3 border-t">{row.title}</td>
                <td className="p-3 border-t">
                  {activeTab === 0 ? row.primary : row.secondary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  )
}

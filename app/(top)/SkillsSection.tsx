import type { ITechStackTableRow } from '@/components/TechStackTable'
import { SectionHeading } from '@/components/SectionHeading'
import { TechStackTable } from '@/components/TechStackTable'

const SkillsTable: ITechStackTableRow[] = [
  {
    title: 'Front-end Frameworks',
    primary: ['React.js', 'Next.js (App directory, RSC)'],
    secondary: ['Remix'],
  },
  {
    title: 'Back-end',
    primary: ['Express.js (Node.js)'],
    secondary: [],
  },
  {
    title: 'Database',
    primary: ['Supabase (PostgreSQL)', 'Prisma (ORM)'],
    secondary: ['MongoDB'],
  },
  {
    title: 'Styling & UI Library',
    primary: ['Tailwind CSS', 'shadcn/ui'],
    secondary: ['SASS/SCSS', 'CSS Modules', 'Styled Components(not up to date)'],
  },
  // {
  //   title: 'UI Library',
  //   primary: ['shadcn/ui'],
  //   secondary: ['Mantine']
  // },
  {
    title: 'State Management',
    primary: ['Zustand (client side)'],
    secondary: ['ReduxToolkit', 'React Context API'],
  },
  {
    title: 'Data Fetching & Server State',
    primary: ['RSC + URL state'],
    secondary: ['Tanstack Query', 'RTKQuery'],
  },
  {
    title: 'Testing',
    primary: ['Vitest'],
    secondary: [],
  },
  {
    title: 'Authentication',
    primary: ['Auth.js'],
    secondary: ['JWT, OAuth2, Supabase Auth'],
  },
  {
    title: 'Libraries',
    primary: ['Zod (validation)', 'React Hook Form (form handling)', 'date-fns'],
    secondary: ['Motion (animations, previously Framer Motion)', 'Recharts (data visualization)'],
  },
  {
    title: 'Core Technologies',
    primary: ['Typescript', 'Git/Github', 'ESLint + Prettier'],
    secondary: ['Basic design principles'],
  },
  {
    title: 'Developer Tools',
    primary: ['Github Copilot', 'Figma'],
    secondary: ['XD', 'Photoshop', 'Illustrator'],
  },
  {
    title: 'Others',
    primary: ['AWS'],
    secondary: [],
  },
]

export function SkillsSection() {
  return (
    <div className="container max-w-5xl">
      <SectionHeading subText="What I can do" as="h2" className="mb-16">
        Skills and Tools
      </SectionHeading>
      <TechStackTable data={SkillsTable} />
    </div>
  )
};

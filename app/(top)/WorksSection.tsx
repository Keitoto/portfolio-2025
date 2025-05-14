// import type { IWorkCard } from '@/types'
import { SectionHeading } from '@/components/SectionHeading'
import { WorksCard } from '@/components/WorksCard'
import { getProjects } from '@/lib/projects/fetch'

// const dummyWorkCards: IWorkCard[] = [
//   {
//     id: '1',
//     title: 'E-Commerce Platform',
//     description: 'A full-featured online store with cart functionality and payment processing',
//     tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//     demoLink: 'https://ecommerce-demo.example.com',
//     githubLink: 'https://github.com/example/ecommerce-platform',
//     articleLink: 'https://blog.example.com/ecommerce-case-study',
//     thumbNail: 'https://picsum.photos/300/400',
//   },
//   {
//     id: '2',
//     title: 'Task Management App',
//     description: 'Productivity application for team collaboration and task tracking',
//     tags: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS'],
//     demoLink: 'https://tasks-demo.example.com',
//     githubLink: 'https://github.com/example/task-manager',
//     articleLink: '',
//     thumbNail: 'https://picsum.photos/300/400',
//   },
//   {
//     id: '3',
//     title: 'Weather Dashboard',
//     description: 'Real-time weather visualization with 5-day forecasts and location search',
//     tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
//     demoLink: 'https://weather.example.com',
//     githubLink: 'https://github.com/example/weather-dashboard',
//     articleLink: 'https://blog.example.com/weather-app-design',
//     thumbNail: 'https://picsum.photos/300/400',
//   },
// ]

export async function WorksSection() {
  const projects = await getProjects()

  return (
    <div className="container max-w-2xl">
      <SectionHeading subText="My portfolio" as="h2" className="md:mb-16 mb-8">
        Latest works
      </SectionHeading>
      <div className="flex flex-col md:gap-24 gap-16">
        {projects.map((project, i) => (
          <WorksCard key={project.slug} workData={project} order={i} />
        ))}
      </div>
    </div>
  )
};

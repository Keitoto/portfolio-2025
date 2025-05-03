import type { IWorkCard } from '@/types'
import { SectionHeading } from '@/components/SectionHeading'
import { WorksCard } from '@/components/WorksCard'

const dummyWorkCards: IWorkCard[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality and payment processing',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://ecommerce-demo.example.com',
    githubLink: 'https://github.com/example/ecommerce-platform',
    articleLink: 'https://blog.example.com/ecommerce-case-study',
    thumbNail: 'https://picsum.photos/300/400',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Productivity application for team collaboration and task tracking',
    tags: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS'],
    demoLink: 'https://tasks-demo.example.com',
    githubLink: 'https://github.com/example/task-manager',
    articleLink: '',
    thumbNail: 'https://picsum.photos/300/400',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather visualization with 5-day forecasts and location search',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    demoLink: 'https://weather.example.com',
    githubLink: 'https://github.com/example/weather-dashboard',
    articleLink: 'https://blog.example.com/weather-app-design',
    thumbNail: 'https://picsum.photos/300/400',
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-12 px-6">
      <section className="py-12 px-6">
        <SectionHeading subText="My portfolio" as="h2">
          Latest works
        </SectionHeading>
        <div className="flex flex-col gap-16">
          {dummyWorkCards.map((card, i) => (
            <WorksCard key={card.id} workData={card} order={i} />
          ))}
        </div>
      </section>
    </section>
  )
};

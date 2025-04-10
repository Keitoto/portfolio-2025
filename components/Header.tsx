import type { FC } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

interface Props {}

const navMenu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Works',
    href: '#works',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
]

export const Header: FC<Props> = () => {
  return (
    <header className="fixed inset-x-0 top-0 md:grid md:grid-cols-[1fr_auto_1fr] items-center px-4 lg:px-8 xl:px-[8%] h-20 z-50 bg-white/90">
      <Link href="/" className="text-3xl mr-auto">Keita.</Link>

      <nav className="hidden md:flex justify-center">
        <ul className="flex items-center gap-6 lg:gap-8 leading-none border px-12 h-12 rounded-full shadow-xs bg-white">
          {navMenu.map((item) => {
            return (
              <li key={item.name} className="hover:text-muted-foreground">
                <Link href={item.href}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Link href="/#contact" className={`${buttonVariants({ variant: 'outline' })} !rounded-full h-12 px-8 !text-lg`}>Let's talk</Link>
      </div>
    </header>
  )
}

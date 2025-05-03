import type { FC } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
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
    <header className="fixed inset-x-0 top-0 flex md:grid md:grid-cols-[1fr_auto_1fr] items-center px-4 lg:px-8 xl:px-[8%] h-20 z-50 bg-background/90">
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

      <div className="hidden md:flex ml-auto items-center gap-2">
        <ThemeToggle />
        <Link href="/#contact" className={`${buttonVariants({ variant: 'outline' })} !rounded-full h-12 px-8 !text-lg`}>Let's talk</Link>
      </div>

      {/* mobile */}
      <div className="md:hidden flex items-center ml-auto gap-4">
        <ThemeToggle />
        <Sheet>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-20 px-12">
            <ul className="flex flex-col items-center gap-8 lg:gap-8 leading-none mb-8">
              {navMenu.map((item) => {
                return (
                  <li key={item.name} className="hover:text-muted-foreground">
                    <SheetClose asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </SheetClose>
                  </li>
                )
              })}
            </ul>
            <SheetClose>
              <Link href="/#contact" className={`${buttonVariants({ variant: 'outline' })} !rounded-full h-12 px-8 !text-lg`}>Let's talk</Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

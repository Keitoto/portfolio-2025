'use client'

import { Button } from '@/components/ui/button'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // eslint-disable-line react-hooks-extra/no-direct-set-state-in-use-effect
  }, [])

  if (!mounted)
    return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8 p-0 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'dark' ? <Sun className="size-6" strokeWidth="1.5" /> : <MoonStar className="size-6" strokeWidth="1" />}
      {/* toggle version */}
      {/* Track
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Moon className="size-4" />
        <Sun className="size-4" />
      </div>

      Thumb (moving circle)
      <div
        className={cn(
          'absolute left-1 size-5 rounded-full bg-primary transition-all',
          resolvedTheme === 'dark' ? 'translate-x-7' : 'translate-x-0',
        )}
      /> */}
    </Button>
  )
}

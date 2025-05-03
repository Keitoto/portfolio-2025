'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return null

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative h-8 w-15 rounded-full p-0"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {/* Track */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Moon className="size-4" />
        <Sun className="size-4" />
      </div>

      {/* Thumb (moving circle) */}
      <div
        className={cn(
          'absolute left-1 size-5 rounded-full bg-primary transition-all',
          resolvedTheme === 'dark' ? 'translate-x-7' : 'translate-x-0',
        )}
      />
    </Button>
  )
}

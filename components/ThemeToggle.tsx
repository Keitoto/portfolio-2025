import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Sun } from 'lucide-react'

interface Props {}

export const ThemeToggle: FC<Props> = () => {
  return (
    <Button variant="ghost" size="sm">
      <Sun className="size-4 text-orange-300" />
    </Button>
  )
}

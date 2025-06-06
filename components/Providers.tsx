'use client'

import { ThemeProvider } from 'next-themes'
import * as React from 'react'

export function Providers({
  children,
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

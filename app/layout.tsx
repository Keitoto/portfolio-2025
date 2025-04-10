import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Ovo } from 'next/font/google'
import './globals.css'

const ovo = Ovo({
  variable: '--font-ovo',
  subsets: ['latin'],
  weight: '400',
})

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${ovo.className} antialiased`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}

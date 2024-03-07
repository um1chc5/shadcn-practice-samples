import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/general/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadcn Samples',
  description: 'Shadcn Samples',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen `}>
        <div className="px-20">
          <div></div>
          <div className="max-w-[1336px] pt-8 mx-auto">
            <MainHeader />
            <div className="border rounded-lg shadow-xl bg-background">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}

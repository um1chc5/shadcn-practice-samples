import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/custom/header'

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
      <body className={`${inter.className} h-screen w-screen`}>
        <div className="px-20 h-full">
          <div></div>
          <div className="max-w-[1336px] h-full pt-8 pb-24 w-full mx-auto">
            <MainHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

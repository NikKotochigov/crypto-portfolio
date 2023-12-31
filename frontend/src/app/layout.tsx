
import { Providers } from '@/components/Providers'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'

import '@/styles/globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto portfolio',
  description: 'Generated by Nikolay Kotochigov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body
				className={cn(
					"grid min-h-screen grid-rows-[auto,1fr,auto] bg-white antialiased dark:bg-slate-950",
					inter.className
				)}
			>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
